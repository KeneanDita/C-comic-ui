#!/usr/bin/env node
/**
 * Builds the publishable `c-comic-ui` bundle.
 *
 * Emits both a CommonJS build (dist/cjs) and an ES module build (dist/esm),
 * rewrites relative specifiers in the ESM output to fully specified paths so
 * the package resolves under Node's native ESM loader, and drops the
 * per-format `type` markers each build needs.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const tsc = path.join(
  root,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "tsc.cmd" : "tsc",
);

function run(project) {
  execFileSync(tsc, ["-p", project], { cwd: root, stdio: "inherit" });
}

function walk(dir) {
  const entries = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) entries.push(...walk(full));
    else entries.push(full);
  }
  return entries;
}

function resolveSpecifier(fromFile, specifier) {
  const target = path.resolve(path.dirname(fromFile), specifier);
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    return `${specifier.replace(/\/$/, "")}/index.js`;
  }
  return `${specifier}.js`;
}

function addExtensions(file) {
  const source = fs.readFileSync(file, "utf8");
  const rewritten = source.replace(
    /(\bfrom\s*|\bimport\s*\(\s*)(["'])(\.\.?\/[^"']*)\2/g,
    (match, prefix, quote, specifier) => {
      if (/\.(js|mjs|cjs|json|css)$/.test(specifier)) return match;
      return `${prefix}${quote}${resolveSpecifier(file, specifier)}${quote}`;
    },
  );
  if (rewritten !== source) fs.writeFileSync(file, rewritten);
}

fs.rmSync(dist, { recursive: true, force: true });

run("tsconfig.build.json");
run("tsconfig.build.esm.json");

for (const file of walk(path.join(dist, "esm"))) {
  if (/\.(js|d\.ts)$/.test(file)) addExtensions(file);
}

fs.writeFileSync(
  path.join(dist, "cjs", "package.json"),
  `${JSON.stringify({ type: "commonjs" }, null, 2)}\n`,
);
fs.writeFileSync(
  path.join(dist, "esm", "package.json"),
  `${JSON.stringify({ type: "module" }, null, 2)}\n`,
);

console.log("Built dist/cjs and dist/esm");
