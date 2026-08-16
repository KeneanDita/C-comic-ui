import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const { buildRegistry, registryPath } = require("../scripts/build-registry.js");

type RegistryEntry = {
  name: string;
  dependencies: string[];
  registryDependencies: string[];
  files: { name: string; content: string }[];
};

const root = path.resolve(__dirname, "..");
const registry: Record<string, RegistryEntry> = JSON.parse(
  fs.readFileSync(registryPath, "utf8"),
);

describe("component registry", () => {
  it("is up to date with the component sources", () => {
    expect(registry).toEqual(buildRegistry());
  });

  it("contains an entry for every component", () => {
    const components = fs
      .readdirSync(path.join(root, "components", "comic-ui"))
      .filter((file) => file.endsWith(".tsx"))
      .map((file) => file.replace(".tsx", ""));

    expect(Object.keys(registry).sort()).toEqual(components.sort());
  });

  it("rewrites in-repo relative imports to consumer aliases", () => {
    for (const [name, entry] of Object.entries(registry)) {
      for (const file of entry.files) {
        expect(file.content, `${name} still has relative imports`).not.toMatch(
          /from\s+["']\.\//,
        );
      }
    }
  });

  it("declares the packages each component imports", () => {
    for (const [name, entry] of Object.entries(registry)) {
      const content = entry.files[0].content;
      for (const match of content.matchAll(/from\s+["']([^"']+)["']/g)) {
        const specifier = match[1];
        if (specifier.startsWith("@/") || specifier.startsWith(".")) continue;
        if (specifier.startsWith("react")) continue;
        const scoped = specifier.startsWith("@");
        const pkgName = specifier.split("/").slice(0, scoped ? 2 : 1).join("/");
        expect(entry.dependencies, `${name} is missing ${pkgName}`).toContain(pkgName);
      }
    }
  });

  it("only references components that exist", () => {
    for (const entry of Object.values(registry)) {
      for (const dep of entry.registryDependencies) {
        expect(Object.keys(registry)).toContain(dep);
      }
    }
  });
});
