# C-Comic UI Package Verification

This document describes how the published package is verified. Everything below runs
automatically in CI (`.github/workflows/ci.yml`) and locally with `npm test`.

## Automated suite (`npm test`)

| Suite | What it guards |
|---|---|
| `tests/components.test.tsx` | Components render, handle interaction (button clicks, tab switching, dialog open, checkbox/switch toggling), forward refs, and the barrel exports every documented component. |
| `tests/package.test.ts` | `package.json` contract: not private, no self-dependency, React declared only as a peer dependency, no unused runtime dependencies, every runtime import declared, `files` list. Build output: CJS + ESM + type declarations exist, per-format `type` markers, every `exports` path resolves, no `@/` alias imports leak into `dist`, `"use client"` survives compilation, ESM specifiers are fully specified, and both formats load in Node. |
| `tests/registry.test.ts` | `public/registry.json` is regenerated from the component sources, covers every component, rewrites in-repo relative imports to consumer aliases, and declares each component's dependencies. |
| `tests/cli.test.ts` | `c-comic init`, `add` (including transitive component dependencies), `list`, and the exit codes for unknown commands/components. |

## Manual verification performed for 1.1.3

1. `npm pack` and install of the resulting tarball into a fresh Next.js 16 App Router project.
2. A React Server Component importing `Button`, `Card`, `Dialog`, `Tabs`, `Accordion`, `Select`,
   `Input`, `Label`, `Checkbox`, `Switch` and `cn` from `c-comic-ui`, plus a subpath import from
   `c-comic-ui/button`: `next build` compiles and prerenders successfully.
3. `tsc --noEmit` in the consumer project: type declarations resolve for both the root and subpath
   entry points.
4. `require("c-comic-ui")` and `import ... from "c-comic-ui"` both resolve under Node.
5. `npx c-comic list` and `npx c-comic add rich-card` from the installed package: components are
   copied with their transitive dependencies and consumer-friendly `@/` imports.

## Fixed in 1.1.3

- The package no longer depended on itself (`c-comic-ui` was listed in its own `dependencies`).
- `react`, `react-dom` and `next` were runtime dependencies, which installed a second copy of React
  in consumer apps; React is now a peer dependency and `next` is a dev dependency only.
- `rich-card` and `token-usage` shipped unresolvable `@/components/...` imports in `dist`.
- Client components (`button`, `card`, `dialog`, `tabs`, `input`, ...) were missing `"use client"`,
  so importing them from a Server Component crashed.
- `collapsible` and `popover` were missing from the public barrel.
- Only a CommonJS build was published; an ESM build with fully specified specifiers is now shipped
  alongside it, together with per-component subpath exports.
- `recharts`, `@radix-ui/react-dropdown-menu` and `@radix-ui/react-toggle-group` were installed for
  every consumer even though the library never imports them.
- The component registry used by the CLI was stale relative to the component sources.
