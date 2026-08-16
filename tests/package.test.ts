import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { beforeAll, describe, expect, it } from "vitest";

const root = path.resolve(__dirname, "..");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

const distFiles: string[] = [];

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

beforeAll(() => {
  if (!fs.existsSync(path.join(root, "dist", "esm", "index.js"))) {
    execFileSync("node", ["scripts/build-package.mjs"], { cwd: root, stdio: "inherit" });
  }
  distFiles.push(...walk(path.join(root, "dist")));
}, 300_000);

describe("package manifest", () => {
  it("is publishable and not private", () => {
    expect(pkg.private).toBe(false);
    expect(pkg.name).toBe("c-comic-ui");
    expect(pkg.license).toBe("MIT");
    expect(pkg.publishConfig.access).toBe("public");
    expect(pkg.repository.url).toContain("github.com/KeneanDita/C-comic-ui");
  });

  it("does not depend on itself", () => {
    expect(pkg.dependencies).not.toHaveProperty("c-comic-ui");
    expect(pkg.devDependencies).not.toHaveProperty("c-comic-ui");
  });

  it("declares react as a peer dependency instead of a runtime dependency", () => {
    expect(pkg.peerDependencies.react).toBeTruthy();
    expect(pkg.peerDependencies["react-dom"]).toBeTruthy();
    for (const name of ["react", "react-dom", "next"]) {
      expect(pkg.dependencies, `${name} must not be a runtime dependency`).not.toHaveProperty(
        name,
      );
    }
  });

  it("ships every runtime import as a declared dependency", () => {
    const declared = new Set([
      ...Object.keys(pkg.dependencies),
      ...Object.keys(pkg.peerDependencies),
      "react",
      "react-dom",
    ]);

    const sources = walk(path.join(root, "components", "comic-ui"));
    const missing = new Set<string>();

    for (const file of sources) {
      const content = fs.readFileSync(file, "utf8");
      for (const match of content.matchAll(/from\s+["']([^"']+)["']/g)) {
        const specifier = match[1];
        if (specifier.startsWith(".") || specifier.startsWith("@/")) continue;
        const scoped = specifier.startsWith("@");
        const name = specifier.split("/").slice(0, scoped ? 2 : 1).join("/");
        if (!declared.has(name)) missing.add(name);
      }
    }

    expect([...missing]).toEqual([]);
  });

  it("does not force unused packages onto consumers", () => {
    const imported = new Set<string>();
    for (const file of walk(path.join(root, "components", "comic-ui"))) {
      for (const match of fs.readFileSync(file, "utf8").matchAll(/from\s+["']([^"']+)["']/g)) {
        const specifier = match[1];
        if (specifier.startsWith(".") || specifier.startsWith("@/")) continue;
        const scoped = specifier.startsWith("@");
        imported.add(specifier.split("/").slice(0, scoped ? 2 : 1).join("/"));
      }
    }

    const unused = Object.keys(pkg.dependencies).filter((name) => !imported.has(name));
    expect(unused).toEqual([]);
  });

  it("only ships the files consumers need", () => {
    expect(pkg.files).toEqual(
      expect.arrayContaining(["bin", "dist", "public/registry.json", "README.md", "LICENSE"]),
    );
  });
});

describe("build output", () => {
  it("emits both module formats with type declarations", () => {
    for (const file of [
      "dist/cjs/index.js",
      "dist/cjs/index.d.ts",
      "dist/esm/index.js",
      "dist/esm/index.d.ts",
    ]) {
      expect(fs.existsSync(path.join(root, file)), `${file} is missing`).toBe(true);
    }
  });

  it("marks each build with the right module type", () => {
    expect(
      JSON.parse(fs.readFileSync(path.join(root, "dist/cjs/package.json"), "utf8")).type,
    ).toBe("commonjs");
    expect(
      JSON.parse(fs.readFileSync(path.join(root, "dist/esm/package.json"), "utf8")).type,
    ).toBe("module");
  });

  it("resolves every path referenced by the exports map", () => {
    const targets = JSON.stringify(pkg.exports).match(/\.\/dist\/[^"]+/g) ?? [];
    for (const target of targets) {
      const concrete = target.replace("*", "button");
      expect(fs.existsSync(path.join(root, concrete)), `${concrete} is missing`).toBe(true);
    }
  });

  it("never leaks repo-only @/ alias imports into the build", () => {
    const offenders = distFiles.filter(
      (file) => /\.(js|d\.ts)$/.test(file) && /["']@\//.test(fs.readFileSync(file, "utf8")),
    );
    expect(offenders).toEqual([]);
  });

  it("keeps the use client directive on client components", () => {
    for (const name of ["button", "dialog", "tabs", "select", "accordion", "checkbox"]) {
      for (const format of ["cjs", "esm"]) {
        const file = path.join(root, "dist", format, "components", "comic-ui", `${name}.js`);
        expect(fs.readFileSync(file, "utf8")).toMatch(/["']use client["']/);
      }
    }
  });

  it("emits fully specified relative specifiers in the ESM build", () => {
    const esmFiles = distFiles.filter(
      (file) => file.includes(`${path.sep}esm${path.sep}`) && file.endsWith(".js"),
    );
    expect(esmFiles.length).toBeGreaterThan(0);

    for (const file of esmFiles) {
      const content = fs.readFileSync(file, "utf8");
      for (const match of content.matchAll(/from\s*["'](\.[^"']*)["']/g)) {
        expect(match[1], `${file} has an extensionless specifier`).toMatch(/\.(js|json|css)$/);
      }
    }
  });

  it("loads in both CommonJS and ESM consumers", async () => {
    const cjs = execFileSync(
      "node",
      ["-e", "const m=require('./dist/cjs/index.js');console.log(typeof m.Button, typeof m.cn)"],
      { cwd: root, encoding: "utf8" },
    );
    expect(cjs.trim()).toBe("object function");

    const esm = execFileSync(
      "node",
      [
        "--input-type=module",
        "-e",
        "import {Button, cn} from './dist/esm/index.js';console.log(typeof Button, typeof cn)",
      ],
      { cwd: root, encoding: "utf8" },
    );
    expect(esm.trim()).toBe("object function");
  });
});
