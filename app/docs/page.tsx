import { TypographyH1, TypographyP, TypographyH2 } from "@/components/ui/typography"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-12 flex flex-col md:flex-row gap-8 text-foreground">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 shrink-0">
        <div className="sticky top-24 bg-gray-100 dark:bg-muted p-6 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)]">
          <h3 className="font-black text-xl mb-4 text-black dark:text-foreground uppercase border-b-[3px] border-border pb-2">On this page</h3>
          <ul className="flex flex-col gap-3 font-bold text-black dark:text-foreground/70">
            <li>
              <Link href="#introduction" className="hover:text-black dark:text-foreground hover:translate-x-1 transition-transform inline-block">
                Introduction
              </Link>
            </li>
            <li>
              <Link href="#installation" className="hover:text-black dark:text-foreground hover:translate-x-1 transition-transform inline-block">
                Installation & User Guide
              </Link>
            </li>
            <li>
              <Link href="#components" className="hover:text-black dark:text-foreground hover:translate-x-1 transition-transform inline-block">
                Components
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-8">
        <div id="introduction" className="bg-gray-800 text-white p-8 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)] scroll-mt-24">
          <TypographyH1>Documentation</TypographyH1>
          <TypographyP className="text-white/90">
            Welcome to C-Comic UI! Learn how to install and use our comic-style component library in your Next.js and React applications. Get perfectly bold, playful, and accessible UI elements right out of the box.
          </TypographyP>
        </div>

        <div id="installation" className="bg-gray-100 dark:bg-muted text-black dark:text-foreground p-8 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)] scroll-mt-24">
          <TypographyH2>Installation & User Guide</TypographyH2>
          <TypographyP>
            Install the package via npm or yarn. This will inject the core styles, comic variables, and radices into your project.
          </TypographyP>

          <div className="bg-black text-white p-4 rounded mt-4 border-[3px] border-black dark:border-border">
            <code>npm install c-comic-ui</code>
          </div>

          <TypographyP className="mt-6">
            After installing, wrap your application in the ThemeProvider (if applicable) and start importing components directly.
          </TypographyP>
          <div className="bg-black text-white p-4 rounded mt-4 border-[3px] border-black dark:border-border overflow-hidden relative">
            <pre><code>{`import { Button } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Button variant="default">CLASH!</Button>\n  );\n}`}</code></pre>
          </div>
        </div>

        <div id="components" className="bg-gray-100 dark:bg-muted text-black dark:text-foreground p-8 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)] scroll-mt-24">
          <TypographyH2>Components</TypographyH2>
          <TypographyP>
            Below is a brief description of the core components currently available in our library:
          </TypographyP>
          <ul className="list-disc list-inside mt-4 space-y-2 ml-4 font-bold text-black dark:text-foreground/80">
            <li><strong className="text-black dark:text-foreground">Buttons & Badges:</strong> The classic interactive elements with bold comic hover states.</li>
            <li><strong className="text-black dark:text-foreground">Forms:</strong> Inputs, Labels, Switches, and Checkboxes with high-contrast borders.</li>
            <li><strong className="text-black dark:text-foreground">Layouts:</strong> Accordions, Tabs, Resizable Panels, Drawers, and Sheets.</li>
            <li><strong className="text-black dark:text-foreground">Feedback:</strong> Toast notifications (Sonner), Alerts, Alert Dialogs, Skeletons, and Progress Bars.</li>
            <li><strong className="text-black dark:text-foreground">Complex Data:</strong> Tables, Data Lists, Data Dashboards (Recharts integration), and Empty states.</li>
          </ul>
          <div className="mt-8">
            <Link href="/components" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black dark:text-foreground font-black px-6 py-3 border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] rounded-[var(--radius-comic)] transition-transform hover:-translate-y-1">
              View All Component Demos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
