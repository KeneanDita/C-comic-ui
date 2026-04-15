# Using Comic UI

Comic UI components can be integrated into your projects using our CLI tool (via `npx`), which copies the components directly into your codebase for full customizability. Alternatively, you can install the components as a traditional `npm` dependency.

Here is a detailed guide on how to use both approaches depending on your project needs.

---

## Approach 1: The CLI approach (Recommended)

Using the `c-comic` CLI is the recommended approach. It adds components directly into your project's `components/comic-ui` directory. This pattern gives you full ownership and control over the code—allowing you to tweak styles, animations, and behaviors safely without relying on a rigid third-party library.

### 1. Initialize the project

Run the `init` command to set up the foundational library dependencies and essential utility files (like `lib/utils.ts` for styling). 

```bash
npx c-comic init
```

**What this does:**
- Creates a `lib/utils.ts` file containing a `cn()` helper function (composed of `clsx` and `tailwind-merge`).
- Installs base dependencies: `clsx`, `tailwind-merge`, and `class-variance-authority`.

### 2. Add components

Once your project is initialized, you can add individual UI primitives to your project on an as-needed basis using the `add` command.

```bash
npx c-comic add button
```

**What this does:**
1. Fetches the component code (e.g., `button.tsx`) from the Comic UI registry.
2. Creates the `components/comic-ui/` directory if it doesn't already exist.
3. Saves the component code directly into `components/comic-ui/button.tsx`.
4. Automatically installs any specialized third-party dependencies required for that specific component (e.g., `@radix-ui/react-slot`).

### 3. Usage inside your App

Once added, you can import and use the component from your local repository:

```tsx
import { Button } from "@/components/comic-ui/button";

export default function MyPage() {
  return (
    <Button variant="default">
      POW! Click me!
    </Button>
  );
}
```

---

## Approach 2: Using NPM (As a standard module)

If you prefer keeping your codebase smaller and don't need to manually edit the UI component source code, you can consume the package as a standard npm dependency. 

### 1. Install the package

Install `c-comic-ui` via your preferred package manager:

```bash
# Using npm
npm install c-comic-ui

# Using pnpm
pnpm add c-comic-ui

# Using yarn
yarn add c-comic-ui
```

### 2. Import components directly

Since the package exports its components via the `exports` mapping in `package.json`, you can import components smoothly:

```tsx
// Example importing from the main entry point
import { Button } from "c-comic-ui"; 

// Alternatively, via path imports (depends on your bundler setup)
import { Button } from "c-comic-ui/components/comic-ui/button";

export default function App() {
  return (
    <Button>
      BAM! Submit
    </Button>
  );
}
```

*Note: For styles to be correctly tailored to your app, make sure your app's Tailwind CSS configuration is properly set up to scan the `node_modules/c-comic-ui/components/**/*.{ts,tsx}` paths or simply relying on standard tailwind classes exported.*

---

## Summary of CLI Commands

| Command                     | Description                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| `npx c-comic init`          | Scaffolds the `lib/utils.ts` helper and installs foundational generic styling dependencies.     |
| `npx c-comic add <name>`    | Pulls the specified component from the registry into your `components/comic-ui/` local folder.  |


## Available Native Components

You can explore your `components/comic-ui` folder source to see what is currently published in the registry, but commonly you can try adding basics like:
- `accordion`
- `alert`
- `button`
- `badge`
- `card`
- `checkbox`
- `dialog`
- `input`
- `separator`

### Advanced Specific Components
We also provide several specialized, high-functionality components you can pull via CLI:

#### Timeline
A chronologically ordered activity feed UI pattern.
```bash
npx c-comic add timeline
```

#### Token Usage Indicator
For AI applications, an integrated progress usage meter displaying prompt vs response tokens used against your models limits.
```bash
npx c-comic add token-usage
```

#### Rich Card (Media)
Expanded cards formatted to accept full cover media actions, complete with action hero buttons and badges.
```bash
npx c-comic add rich-card
```

*(and more...)*