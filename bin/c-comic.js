#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const componentName = args[1];

  if (command === "init") {
    console.log("🚀 Initializing Comic UI into your multiverse...");

    const utilsDir = path.join(process.cwd(), "lib");
    if (!fs.existsSync(utilsDir)) fs.mkdirSync(utilsDir, { recursive: true });

    const utilsCode =
      `import { type ClassValue, clsx } from "clsx";\n` +
      `import { twMerge } from "tailwind-merge";\n\n` +
      `export function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}\n`;
    const utilsPath = path.join(utilsDir, "utils.ts");
    fs.writeFileSync(utilsPath, utilsCode);
    console.log("🛠️ Created lib/utils.ts");

    console.log(
      "📦 Installing base dependencies: clsx tailwind-merge class-variance-authority",
    );
    execSync("npm install clsx tailwind-merge class-variance-authority", {
      stdio: "inherit",
    });

    console.log(
      "✅ Initialization complete! Try running: npx c-comic add button",
    );
    process.exit(0);
  }

  if (command === "add" && componentName) {
    console.log(`🦸 Deploying <${componentName} /> to your project...`);

    const registryUrl =
      "https://raw.githubusercontent.com/KeneanDita/C-comic-ui/main/public/registry.json";
    let registry;

    try {
      console.log(`Fetching registry from ${registryUrl}...`);
      const res = await fetch(registryUrl);
      if (!res.ok) {
        throw new Error(
          `Failed to fetch registry (${res.status} ${res.statusText}). Make sure your GitHub repo is public and the registry.json is pushed to main.`,
        );
      }
      registry = await res.json();
    } catch (err) {
      console.error("❌ Could not load registry from GitHub:", err.message);

      // Fallback for local testing if running inside the original repo
      const localRegistryPath = path.join(__dirname, "../public/registry.json");
      if (fs.existsSync(localRegistryPath)) {
        console.log("⚠️ Using local registry fallback for testing...");
        registry = JSON.parse(fs.readFileSync(localRegistryPath, "utf8"));
      } else {
        process.exit(1);
      }
    }

    const comp = registry[componentName];
    if (!comp) {
      console.error(
        `❌ Component "${componentName}" not found in the Comic UI registry.`,
      );
      if (registry) {
        console.log("Available components: ", Object.keys(registry).join(", "));
      }
      process.exit(1);
    }

    const targetDir = path.join(process.cwd(), "components", "comic-ui");
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    comp.files.forEach((file) => {
      const targetPath = path.join(targetDir, file.name);
      fs.writeFileSync(targetPath, file.content);
      console.log(`📝 Wrote ${targetPath}`);
    });

    if (comp.dependencies && comp.dependencies.length > 0) {
      console.log(
        `📦 Installing required dependencies: ${comp.dependencies.join(", ")}`,
      );
      execSync(`npm install ${comp.dependencies.join(" ")}`, {
        stdio: "inherit",
      });
    }

    console.log(
      `✅ Success! You can now import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from "@/components/comic-ui/${componentName}"`,
    );
  } else if (command !== "init") {
    console.log("Usage:");
    console.log("  npx c-comic init        - Initialize base config and utils");
    console.log(
      "  npx c-comic add <name>  - Add a primitive component to your project",
    );
  }
}

main().catch(console.error);
