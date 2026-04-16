const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "../components/comic-ui");
const registryPath = path.join(__dirname, "../public/registry.json");

// Map of external dependencies required for each component
const dependenciesMap = {
  accordion: [
    "@radix-ui/react-accordion",
    "lucide-react",
    "clsx",
    "tailwind-merge",
  ],
  alert: ["class-variance-authority", "clsx", "tailwind-merge"],
  "alert-dialog": ["@radix-ui/react-alert-dialog", "clsx", "tailwind-merge"],
  avatar: ["@radix-ui/react-avatar", "clsx", "tailwind-merge"],
  badge: ["class-variance-authority", "clsx", "tailwind-merge"],
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
  drawer: ["vaul", "clsx", "tailwind-merge"],
  input: ["clsx", "tailwind-merge"],
  label: [
    "@radix-ui/react-label",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
  ],
  progress: ["@radix-ui/react-progress", "clsx", "tailwind-merge"],
  resizable: [
    "react-resizable-panels",
    "lucide-react",
    "clsx",
    "tailwind-merge",
  ],
  select: ["@radix-ui/react-select", "lucide-react", "clsx", "tailwind-merge"],
  separator: ["@radix-ui/react-separator", "clsx", "tailwind-merge"],
  sheet: ["@radix-ui/react-dialog", "lucide-react", "clsx", "tailwind-merge"],
  skeleton: ["clsx", "tailwind-merge"],
  sonner: ["sonner", "next-themes", "lucide-react"],
  switch: ["@radix-ui/react-switch", "clsx", "tailwind-merge"],
  table: ["clsx", "tailwind-merge"],
  tabs: ["@radix-ui/react-tabs", "clsx", "tailwind-merge"],
  toast: [
    "@radix-ui/react-toast",
    "class-variance-authority",
    "lucide-react",
    "clsx",
    "tailwind-merge",
  ],
  typography: ["clsx", "tailwind-merge"],
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
