import { TypographyH1, TypographyP, TypographyH2 } from "@/components/ui/typography"

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 flex flex-col gap-8 text-foreground">
      <div className="bg-card text-white p-8 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)]">
        <TypographyH1>Documentation</TypographyH1>
        <TypographyP className="text-white/90">
          Learn how to install and use C-Comic UI in your Next.js and React applications.
        </TypographyP>
      </div>

      <div className="bg-white text-black p-8 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)]">
        <TypographyH2>Installation</TypographyH2>
        <TypographyP>
          Install the package via npm or yarn. This will inject the core styles and components into your project.
        </TypographyP>

        <div className="bg-black text-white p-4 rounded mt-4 border-[3px] border-black">
          <code>npm install c-comic-ui</code>
        </div>
      </div>

      <div className="bg-white text-black p-8 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)]">
        <TypographyH2>Usage</TypographyH2>
        <TypographyP>
          Wrap your application in the ComicThemeProvider and start importing components directly.
        </TypographyP>
        <div className="bg-black text-white p-4 rounded mt-4 border-[3px] border-black overflow-hidden relative">
          <pre><code>{`import { Button } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Button variant="default">CLASH!</Button>\n  );\n}`}</code></pre>
        </div>
      </div>
    </div>
  )
}