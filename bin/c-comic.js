#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const BUNDLED_REGISTRY = path.join(__dirname, "../public/registry.json");

const COMPONENT_NAME = /^[a-z0-9][a-z0-9-]*$/;
const FILE_NAME = /^[a-z0-9][a-z0-9.-]*\.(ts|tsx)$/;
const PACKAGE_NAME = /^(@[a-z0-9][a-z0-9._-]*\/)?[a-z0-9][a-z0-9._-]*$/;

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
 * Loads the component registry that ships inside this package. Nothing is
 * fetched over the network: the CLI only ever writes code that was published
 * as part of the exact version the user installed and audited.
 */
async function loadRegistry() {
  if (!fs.existsSync(BUNDLED_REGISTRY)) {
    throw new Error(
      `Component registry is missing from the installed package (${BUNDLED_REGISTRY}). Reinstall c-comic-ui.`,
    );
  }

  const registry = JSON.parse(fs.readFileSync(BUNDLED_REGISTRY, "utf8"));
  for (const [name, entry] of Object.entries(registry)) validateEntry(name, entry);
  return registry;
}

/**
 * Rejects registry entries that could escape the target directory, install
 * unexpected packages, or write anything other than component source files.
 */
function validateEntry(name, entry) {
  const reject = (reason) => {
    throw new Error(`Refusing to use registry entry "${name}": ${reason}.`);
  };

  if (!COMPONENT_NAME.test(name)) reject("invalid component name");
  if (!entry || typeof entry !== "object") reject("entry is not an object");
  if (!Array.isArray(entry.files) || entry.files.length === 0) reject("no files listed");

  for (const file of entry.files) {
    if (!file || typeof file.name !== "string" || typeof file.content !== "string") {
      reject("a file is missing a string name or content");
    }
    if (path.basename(file.name) !== file.name || !FILE_NAME.test(file.name)) {
      reject(`unsafe file name "${file.name}"`);
    }
  }

  for (const dep of entry.dependencies || []) {
    if (typeof dep !== "string" || !PACKAGE_NAME.test(dep)) {
      reject(`unsafe dependency name "${dep}"`);
    }
  }

  for (const dep of entry.registryDependencies || []) {
    if (typeof dep !== "string" || !COMPONENT_NAME.test(dep)) {
      reject(`unsafe component dependency "${dep}"`);
    }
  }
}

function install(packages, cwd) {
  if (packages.length === 0) return;
  if (process.env.C_COMIC_SKIP_INSTALL === "1") {
    console.log(`Skipping install of: ${packages.join(", ")}`);
    return;
  }
  console.log(`Installing dependencies: ${packages.join(", ")}`);
  const result = spawnSync("npm", ["install", "--", ...packages], {
    stdio: "inherit",
    cwd,
    shell: false,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`npm install exited with code ${result.status}.`);
  }
}

function collect(registry, names) {
  const resolved = [];
  const seen = new Set();

  const visit = (name) => {
    if (seen.has(name)) return;
    seen.add(name);
    if (!COMPONENT_NAME.test(name)) {
      throw new Error(`Invalid component name "${name}".`);
    }
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
    validateEntry(entry.name, entry);
    for (const file of entry.files) {
      const targetPath = path.join(targetDir, path.basename(file.name));
      if (path.dirname(path.resolve(targetPath)) !== path.resolve(targetDir)) {
        throw new Error(`Refusing to write outside components/comic-ui: ${file.name}`);
      }
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

module.exports = { main, add, init, collect, loadRegistry, usage, validateEntry };
