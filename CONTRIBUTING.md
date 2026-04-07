# Contributing to C-Comic UI

First off, thanks for taking the time to contribute! 🎉 

C-Comic UI is an open-source project, and we love receiving contributions from our community—whether it's adding new comic-style components, fixing bugs, or improving documentation.

## Development Setup

1. Fork the repository and clone it locally.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server (which also serves the documentation and component previews):
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` to see your changes live.

## Component Design Guidelines

C-Comic UI is deeply inspired by [shadcn/ui](https://ui.shadcn.com). To maintain consistency, any new components must follow these architectural rules:

- **Structure**: Place your component in `components/ui/[name].tsx`.
- **Accessibility First**: Use [Radix UI primitives](https://www.radix-ui.com/) for any complex interactive components (like Dialogs, Tooltips, or Accordions).
- **Styling**: Use Tailwind CSS combined with `class-variance-authority` (CVA) to handle variants. Use the `cn` utility from `lib/utils.ts` for className merging.
- **The Comic Aesthetic**: 
  - ALWAYS use thick borders (`border-[3px] border-border`).
  - Use our custom shadow token (`shadow-[var(--shadow-comic)]` or `shadow-[var(--shadow-comic-sm)]`).
  - Keep border radii strict (`rounded-[var(--radius-comic)]`).
  - Interactive components should simulate "pressing into the page" on active states (e.g., `active:translate-x-[4px] active:translate-y-[4px] active:shadow-none`).
- **No Heavy Runtimes**: Keep components lightweight and copy-paste friendly.

## Submitting a Pull Request

1. Create a new branch for your feature: `git checkout -b feature/my-amazing-component`.
2. Write your code and add a preview to the `componentsList` in `app/components/page.tsx` so others can see and test it.
   - **Important**: Make sure to add relevant `tags` into your component's entry (e.g., `tags: ["dropdown", "menu", "select"]`) so users can easily find it using the search bar!
3. Ensure your code passes local linting and building:
   ```bash
   npm run lint && npm run build
   ```
4. Commit your changes with a descriptive commit message.
5. Push to your fork and submit a Pull Request to the `main` branch.
6. **Include screenshots or GIFs** if your PR introduces a new visual component!

Thank you for helping us build the ultimate comic-book UI library! 💥