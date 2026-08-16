#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const REGISTRY_URL =
  "https://raw.githubusercontent.com/KeneanDita/C-comic-ui/main/public/registry.json";
const BUNDLED_REGISTRY = path.join(__dirname, "../public/registry.json");

const UTILS_SOURCE =
  `import { type ClassValue, clsx } from "clsx";\n` +
  `import { twMerge } from "tailwind-merge";\n\n` +
  `export function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}\n`;

function usage() {
  console.log("Usage:");
  console.log("  npx c-comic init              Create lib/utils.ts and install base deps");
  console.log("  npx c-comic add <name...>     Copy components into components/comic-ui");
  console.log("  npx c-comic list              List every available component");
}

/**
 * Loads the component registry. The copy bundled with the installed package is
 * preferred so the CLI always matches the version the user installed; the
 * GitHub copy is only used when the bundled one is missing.
 */
async function loadRegistry() {
  if (fs.existsSync(BUNDLED_REGISTRY)) {
    return JSON.parse(fs.readFileSync(BUNDLED_REGISTRY, "utf8"));
  }

  const res = await fetch(REGISTRY_URL);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch registry from ${REGISTRY_URL} (${res.status} ${res.statusText}).`,
    );
  }
  return res.json();
}

function install(packages, cwd) {
  if (packages.length === 0) return;
  if (process.env.C_COMIC_SKIP_INSTALL === "1") {
    console.log(`Skipping install of: ${packages.join(", ")}`);
    return;
  }
  console.log(`Installing dependencies: ${packages.join(", ")}`);
  execSync(`npm install ${packages.join(" ")}`, { stdio: "inherit", cwd });
}

function collect(registry, names) {
  const resolved = [];
  const seen = new Set();

  const visit = (name) => {
    if (seen.has(name)) return;
    seen.add(name);
    const entry = registry[name];
    if (!entry) {
      throw new Error(
        `Component "${name}" not found. Available components: ${Object.keys(registry).join(", ")}`,
      );
    }
    for (const dep of entry.registryDependencies || []) visit(dep);
    resolved.push(entry);
  };

  names.forEach(visit);
  return resolved;
}

function init(cwd) {
  const utilsDir = path.join(cwd, "lib");
  fs.mkdirSync(utilsDir, { recursive: true });
  fs.writeFileSync(path.join(utilsDir, "utils.ts"), UTILS_SOURCE);
  console.log("Created lib/utils.ts");
  install(["clsx", "tailwind-merge", "class-variance-authority"], cwd);
  console.log("Initialization complete. Try: npx c-comic add button");
}

function add(registry, names, cwd) {
  const entries = collect(registry, names);
  const targetDir = path.join(cwd, "components", "comic-ui");
  fs.mkdirSync(targetDir, { recursive: true });

  const dependencies = new Set();
  for (const entry of entries) {
    for (const file of entry.files) {
      const targetPath = path.join(targetDir, file.name);
      fs.writeFileSync(targetPath, file.content);
      console.log(`Wrote ${path.relative(cwd, targetPath)}`);
    }
    for (const dep of entry.dependencies || []) dependencies.add(dep);
  }

  install([...dependencies], cwd);
  console.log(
    `Done. Import from "@/components/comic-ui/${entries[entries.length - 1].name}"`,
  );
}

async function main(argv = process.argv.slice(2), cwd = process.cwd()) {
  const [command, ...rest] = argv;

  if (command === "init") {
    init(cwd);
    return 0;
  }

  if (command === "list") {
    const registry = await loadRegistry();
    console.log(Object.keys(registry).sort().join("\n"));
    return 0;
  }

  if (command === "add") {
    if (rest.length === 0) {
      console.error("Specify at least one component, e.g. npx c-comic add button");
      usage();
      return 1;
    }
    const registry = await loadRegistry();
    add(registry, rest, cwd);
    return 0;
  }

  usage();
  return command === undefined || command === "--help" || command === "-h" ? 0 : 1;
}

if (require.main === module) {
  main().then(
    (code) => process.exit(code),
    (err) => {
      console.error(err.message);
      process.exit(1);
    },
  );
}

module.exports = { main, add, init, collect, loadRegistry, usage };
