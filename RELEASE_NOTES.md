# Release Notes - v1.1.1

Welcome to the newest release of **Comic UI**! This update introduces highly requested advanced UI components tailored for complex data display and AI applications, alongside essential build fixes and documentation improvements.

## 🚀 New Features & Components

We've expanded our component library with three powerful new data-oriented components. You can add these directly to your project using the Comic UI CLI.

*   **Token Usage Indicator (`token-usage`)**: 
    A must-have for AI-powered applications. This component provides an integrated progress meter displaying prompt versus response tokens used against your model's limits.
    *Usage:* `npx c-comic add token-usage`

*   **Timeline / Activity Feed (`timeline`)**: 
    A robust, chronological activity feed UI pattern. Perfect for mission logs, event histories, or version tracking.
    *Usage:* `npx c-comic add timeline`

*   **Rich Card (`rich-card`)**: 
    An expanded, layout-agnostic media card. It features built-in support for full-cover background images, top-corner badges, floating action icons, and a primary hero action button.
    *Usage:* `npx c-comic add rich-card`

## 🛠 Enhancements

*   **CLI Registry**: The `public/registry.json` bundle has been updated to include the newly added components, ensuring seamless installation via the CLI toolkit.
*   **Global Exports**: Formally added `TokenUsage`, `Timeline`, and `RichCard` exports to the main `components/comic-ui/index.ts` file for users consuming the standard npm package.

## 🐛 Bug Fixes & Stability

*   **TypeScript Fixes**: Resolved interface prop collisions by properly utilizing `Omit<..., "title">` for `Timeline`, `RichCard`, and `TokenUsage`, preventing overlapping `ReactNode` and `string` type conflicts with standard `HTMLAttributes`.
*   **React Console Warning**: Fixed a read-only prop warning by migrating instances of `value` to `defaultValue` within input fields in the showcase page.
*   **Missing Imports & Files**: 
    *   Resolved a missing `dialog` component dependency that was impacting module resolutions.
    *   Added missing `lucide-react` icon imports (e.g., `Rocket`) to the showcase page.
*   **Turbopack Build Fix**: Corrected a syntax issue (missing newline) in `index.ts` exports that was previously breaking the Next.js production build (`npm run build`).

## 📚 Documentation Updates

*   **USAGE.md** has been updated! We've added a dedicated "Advanced Specific Components" section detailing the newly integrated Token Usage, Timeline, and Rich Card components with their CLI installation commands.

---
*Thank you for building with Comic UI! Keep saving the web, one component at a time! 🦸‍♂️*
