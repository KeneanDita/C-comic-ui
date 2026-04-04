const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "../components/comic-ui");
const registryPath = path.join(__dirname, "../public/registry.json");

// Map of external dependencies required for each component
const dependenciesMap = {
  button: [
    "@radix-ui/react-slot",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
  ],
  card: ["clsx", "tailwind-merge"],
  checkbox: [
    "@radix-ui/react-checkbox",
    "lucide-react",
    "clsx",
    "tailwind-merge",
  ],
  dialog: ["@radix-ui/react-dialog", "lucide-react", "clsx", "tailwind-merge"],
  input: ["clsx", "tailwind-merge"],
  label: [
    "@radix-ui/react-label",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
  ],
  switch: ["@radix-ui/react-switch", "clsx", "tailwind-merge"],
  table: ["clsx", "tailwind-merge"],
};

// Build the robust JSON registry
const registry = {};

fs.readdirSync(componentsDir).forEach((file) => {
  if (!file.endsWith(".tsx")) return;
  const name = file.replace(".tsx", "");

  if (name === "index") return; // Skip index exporter

  const content = fs.readFileSync(path.join(componentsDir, file), "utf8");

  registry[name] = {
    name,
    dependencies: dependenciesMap[name] || [],
    files: [
      {
        name: file,
        content,
      },
    ],
  };
});

fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
console.log("✅ Comic UI Registry built successfully at public/registry.json");
