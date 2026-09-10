const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "../components/comic-ui");
const registryPath = path.join(__dirname, "../public/registry.json");

// Packages that are always needed by the `cn` helper created by `c-comic init`.
const BASE_DEPENDENCIES = ["clsx", "tailwind-merge"];

/**
 * Rewrites the in-repo relative imports to the aliases a consumer project gets
 * from `npx c-comic init` / `npx c-comic add`, where components land in
 * `components/comic-ui` and the `cn` helper in `lib/utils`.
 */
function toConsumerSource(content) {
  return content
    .replace(/(["'])\.\/utils\1/g, '"@/lib/utils"')
    .replace(/(["'])\.\/([\w-]+)\1/g, '"@/components/comic-ui/$2"');
}

function externalDependencies(content) {
  const deps = new Set(BASE_DEPENDENCIES);
  const importRe = /from\s+["']([^"']+)["']/g;
  let match;
  while ((match = importRe.exec(content)) !== null) {
    const specifier = match[1];
    if (specifier.startsWith(".") || specifier.startsWith("@/")) continue;
    if (specifier === "react" || specifier.startsWith("react/")) continue;
    if (specifier === "react-dom" || specifier.startsWith("react-dom/"))
      continue;
    const scoped = specifier.startsWith("@");
    deps.add(
      specifier
        .split("/")
        .slice(0, scoped ? 2 : 1)
        .join("/"),
    );
  }
  return [...deps].sort();
}

/** Local components a registry entry depends on, so they get copied too. */
function localDependencies(content) {
  const deps = new Set();
  const importRe = /from\s+["']\.\/([\w-]+)["']/g;
  let match;
  while ((match = importRe.exec(content)) !== null) {
    if (match[1] !== "utils") deps.add(match[1]);
  }
  return [...deps].sort();
}

function buildRegistry() {
  const registry = {};

  for (const file of fs.readdirSync(componentsDir).sort()) {
    if (!file.endsWith(".tsx")) continue;
    const name = file.replace(".tsx", "");
    if (name === "index") continue;

    // Normalize line endings so the registry is identical regardless of git autocrlf.
    const content = fs
      .readFileSync(path.join(componentsDir, file), "utf8")
      .replace(/\r\n/g, "\n");

    registry[name] = {
      name,
      dependencies: externalDependencies(content),
      registryDependencies: localDependencies(content),
      files: [
        {
          name: file,
          content: toConsumerSource(content),
        },
      ],
    };
  }

  return registry;
}

if (require.main === module) {
  fs.writeFileSync(
    registryPath,
    `${JSON.stringify(buildRegistry(), null, 2)}\n`,
  );
  console.log("Comic UI registry written to public/registry.json");
}

module.exports = { buildRegistry, registryPath };
