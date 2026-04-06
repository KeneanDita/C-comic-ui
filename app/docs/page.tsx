import { TypographyH1, TypographyP, TypographyH2, TypographyH3 } from "@/components/ui/typography"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-12 flex flex-col md:flex-row gap-8 text-foreground">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 shrink-0">
        <div className="sticky top-24 bg-blue-50 dark:bg-muted p-6 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)]">
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
      <div className="flex-1 flex flex-col gap-8 min-w-0">
        <div id="introduction" className="bg-blue-600 dark:bg-card text-white dark:text-card-foreground p-8 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)] scroll-mt-24">
          <TypographyH1>Documentation</TypographyH1>
          <TypographyP className="text-white/90 dark:text-card-foreground/90">
            Welcome to C-Comic UI! Learn how to install and use our comic-style component library in your Next.js and React applications. Get perfectly bold, playful, and accessible UI elements right out of the box.
          </TypographyP>
        </div>

        <div id="installation" className="bg-blue-50 dark:bg-muted text-black dark:text-foreground p-8 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)] scroll-mt-24">
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
            <pre className="whitespace-pre-wrap break-words mt-2"><code>{`import { Button } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Button variant="default">CLASH!</Button>\n  );\n}`}</code></pre>
          </div>
        </div>

        
        <div id="usage" className="bg-blue-50 dark:bg-muted text-black dark:text-foreground p-8 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)] scroll-mt-24 mt-8">
          <TypographyH2>Component Usage & Code Snippets</TypographyH2>
          <TypographyP>
            Here is the code to implement each component. 
          </TypographyP>

          <div className="mt-8 flex flex-col gap-6">
            
        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-empty-state">
          <TypographyH3 className="text-xl font-black mb-2">Empty State <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Polished UI</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Keep users smiling even when there&apos;s no data.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { Ghost, Plus } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-error-pages--404-500-">
          <TypographyH3 className="text-xl font-black mb-2">Error Pages (404/500) <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Polished UI</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Turn frustration into a fun storytelling moment.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { MapIcon, Home, RefreshCcw } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-onboarding-flow">
          <TypographyH3 className="text-xl font-black mb-2">Onboarding Flow <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Polished UI</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">In-app guided tours with comic-style tooltips.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { Sparkles, ArrowRight } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-keyboard-shortcuts-ui">
          <TypographyH3 className="text-xl font-black mb-2">Keyboard Shortcuts UI <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Polished UI</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Power user tooltips showing keybindings in style.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`// Import your components from "c-comic-ui";
import { Keyboard, Command } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-theme-switcher">
          <TypographyH3 className="text-xl font-black mb-2">Theme Switcher <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Polished UI</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Loud, chunky toggle for dark/light/system modes.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { Sun, Moon, Monitor } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-accessibility-helpers">
          <TypographyH3 className="text-xl font-black mb-2">Accessibility Helpers <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Polished UI</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Oversized focus rings & screen reader indications.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { MousePointerClick, Accessibility, Eye, User } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-multi-step-wizard">
          <TypographyH3 className="text-xl font-black mb-2">Multi-Step Wizard <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Advanced Forms</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Break complex forms into fun, bite-sized comic panels.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Label, Input, Button } from "c-comic-ui";
import { Check, MapPin, ArrowRight } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Label />
      <Input />
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-form-validation">
          <TypographyH3 className="text-xl font-black mb-2">Form Validation <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Advanced Forms</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">In-your-face validation states with bold colors and icons.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Label, Input } from "c-comic-ui";
import { AlertTriangle, CheckCircle, Check } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Label />
      <Input />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-file-upload-zone">
          <TypographyH3 className="text-xl font-black mb-2">File Upload Zone <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Advanced Forms</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">A playful drag & drop target that feels interactive.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { UploadCloud, FileText, CheckCircle, Trash2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-date---time-picker">
          <TypographyH3 className="text-xl font-black mb-2">Date & Time Picker <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Advanced Forms</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Custom date selector bypassing default browser inputs.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { ChevronRight, Clock } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-rich-text-editor">
          <TypographyH3 className="text-xl font-black mb-2">Rich Text Editor <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Advanced Forms</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">WYSIWYG layout combining a bold toolbar and content area.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { Bold, Italic, Heading1, Heading2, ListIcon, Link2, ImageIcon, Code } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-autosave---drafts">
          <TypographyH3 className="text-xl font-black mb-2">Autosave & Drafts <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Advanced Forms</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Continuous save badges that provide peace of mind.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Label, Input, Button } from "c-comic-ui";
import { Cloud, Loader2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Label />
      <Input />
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-breadcrumbs">
          <TypographyH3 className="text-xl font-black mb-2">Breadcrumbs <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Navigation & Discovery</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Fun, heavily bordered block-style breadcrumbs.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`// Import your components from "c-comic-ui";
import { Home, ChevronRight } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-command-palette">
          <TypographyH3 className="text-xl font-black mb-2">Command Palette <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Navigation & Discovery</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Cmd+K interface for global navigation and actions.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Badge } from "c-comic-ui";
import { Search, Calendar, Folder, Settings2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-global-search">
          <TypographyH3 className="text-xl font-black mb-2">Global Search <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Navigation & Discovery</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Search bar with live preview dropdown.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Input, Button, Avatar, AvatarFallback } from "c-comic-ui";
import { Search, FileBox } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Input />
      <Button />
      <Avatar />
      <AvatarFallback />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-collapsible-sidebar">
          <TypographyH3 className="text-xl font-black mb-2">Collapsible Sidebar <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Navigation & Discovery</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">A fun, chunky sidebar navigation for dashboards.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button, Badge } from "c-comic-ui";
import { AlignLeft, Home, Compass, Star, Folder, Users, Settings2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
      <Badge />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-mega-menu">
          <TypographyH3 className="text-xl font-black mb-2">Mega Menu <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Navigation & Discovery</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Large dropdown menu for complex site structures.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { ChevronRight, ArrowRight, Zap, Users, ShieldCheck } from "lucide-react";
import { BarChart } from "recharts";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-login---sign-up">
          <TypographyH3 className="text-xl font-black mb-2">Login / Sign Up <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Auth & Security</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Classic comic-style login form with social providers and hard shadows.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button, Label, Input } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
      <Label />
      <Input />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-forgot-password">
          <TypographyH3 className="text-xl font-black mb-2">Forgot Password <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Auth & Security</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Password recovery flow using strong borders.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Input, Button } from "c-comic-ui";
import { Lock, ArrowRight } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Input />
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-email-verification">
          <TypographyH3 className="text-xl font-black mb-2">Email Verification <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Auth & Security</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">A fun inbox-checking prompt.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { Mail } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-2fa---otp-input">
          <TypographyH3 className="text-xl font-black mb-2">2FA / OTP Input <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Auth & Security</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Six-digit verification code entry.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Input, Button } from "c-comic-ui";
import { ShieldCheck } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Input />
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-device-management">
          <TypographyH3 className="text-xl font-black mb-2">Device Management <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Auth & Security</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Active sessions and connected devices list.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Badge, Button } from "c-comic-ui";
import { Laptop, Smartphone, Monitor } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-pricing-table">
          <TypographyH3 className="text-xl font-black mb-2">Pricing Table <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">SaaS & Billing</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Clear and bold pricing tiers that grab the user&apos;s attention.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { Check } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-subscription-management">
          <TypographyH3 className="text-xl font-black mb-2">Subscription Management <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">SaaS & Billing</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Account overview panel showing current plan, dates, and upgrade paths.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Badge, Button } from "c-comic-ui";
import { Zap } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-billing-history---invoices">
          <TypographyH3 className="text-xl font-black mb-2">Billing History & Invoices <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">SaaS & Billing</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Invoice history table with comic-styled download actions.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Badge, Button } from "c-comic-ui";
import { Download } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Table />
      <TableHeader />
      <TableRow />
      <TableHead />
      <TableBody />
      <TableCell />
      <Badge />
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-api-usage-meter">
          <TypographyH3 className="text-xl font-black mb-2">API Usage Meter <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">SaaS & Billing</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Visual indicator for tracking quota consumption.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Progress } from "c-comic-ui";
import { AlertCircle } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Progress />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-team-roles---permissions">
          <TypographyH3 className="text-xl font-black mb-2">Team Roles & Permissions <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">SaaS & Billing</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Manage organization members with styled Selects and Avatars.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button, Avatar, AvatarFallback, Badge, Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "c-comic-ui";
import { Users, Trash2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
      <Avatar />
      <AvatarFallback />
      <Badge />
      <Select />
      <SelectTrigger />
      <SelectValue />
      <SelectContent />
      <SelectGroup />
      <SelectItem />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-api-key-management">
          <TypographyH3 className="text-xl font-black mb-2">API Key Management <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">SaaS & Billing</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Panel to reveal, revoke, or generate new API credentials.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Badge, Input, Button } from "c-comic-ui";
import { Key, Copy, Plus } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
      <Input />
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-model-switcher">
          <TypographyH3 className="text-xl font-black mb-2">Model Switcher <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">AI & LLM</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">A playful, heavy-bordered dropdown to select active LLM models.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Select />
      <SelectTrigger />
      <SelectValue />
      <SelectContent />
      <SelectGroup />
      <SelectLabel />
      <SelectItem />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-chat-bubbles">
          <TypographyH3 className="text-xl font-black mb-2">Chat Bubbles <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">AI & LLM</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Action-packed text bubbles distinguishing User and Assistant.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`// Import your components from "c-comic-ui";
import { User, Bot } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-code-block--with-copy-">
          <TypographyH3 className="text-xl font-black mb-2">Code Block (with copy) <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">AI & LLM</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Syntax highlighting block with a comic-style copy button.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`// Import your components from "c-comic-ui";
import { Copy } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-prompt-templates">
          <TypographyH3 className="text-xl font-black mb-2">Prompt Templates <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">AI & LLM</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Grid of starting prompts for user discovery.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`// Import your components from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-conversation-sidebar">
          <TypographyH3 className="text-xl font-black mb-2">Conversation Sidebar <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">AI & LLM</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">History list for AI chats with bold active states.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`// Import your components from "c-comic-ui";
import { Plus, MessageSquare } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-streaming-text---indicators">
          <TypographyH3 className="text-xl font-black mb-2">Streaming Text & Indicators <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">AI & LLM</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Loading states and token usage specifically designed for LLMs.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Badge } from "c-comic-ui";
import { Hash } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-regenerate-edit-prompt-actions">
          <TypographyH3 className="text-xl font-black mb-2">Regenerate/Edit Prompt Actions <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">AI & LLM</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Pill-shaped toolbars below assistant messages for quick actions.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { RefreshCcw, SquarePen } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-loaders---progress">
          <TypographyH3 className="text-xl font-black mb-2">Loaders & Progress <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Feedback</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Indicate loading state with spinners, skeletons, or progress bars.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Progress, Skeleton } from "c-comic-ui";
import { Loader2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Progress />
      <Skeleton />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-toast-notifications">
          <TypographyH3 className="text-xl font-black mb-2">Toast Notifications <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Feedback</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Brief, non-interruptive notifications that slide in.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-alerts">
          <TypographyH3 className="text-xl font-black mb-2">Alerts <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Feedback</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Important messages that deserve the user&apos;s attention.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Alert, AlertTitle, AlertDescription } from "c-comic-ui";
import { Terminal, AlertCircle, CheckCircle2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Alert />
      <AlertTitle />
      <AlertDescription />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-confirmation-dialog">
          <TypographyH3 className="text-xl font-black mb-2">Confirmation Dialog <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Feedback</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Interruptive dialog for destructive actions.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { AlertDialog, AlertDialogTrigger, Button, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <AlertDialog />
      <AlertDialogTrigger />
      <Button />
      <AlertDialogContent />
      <AlertDialogHeader />
      <AlertDialogTitle />
      <AlertDialogDescription />
      <AlertDialogFooter />
      <AlertDialogCancel />
      <AlertDialogAction />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-inline-validation">
          <TypographyH3 className="text-xl font-black mb-2">Inline Validation <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Forms</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Show validation errors inline with form inputs.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Label, Input } from "c-comic-ui";
import { AlertCircle } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Label />
      <Input />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-data-table">
          <TypographyH3 className="text-xl font-black mb-2">Data Table <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Complex Data</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Highly structured table for sorting, filtering, and pagination.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Badge } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Table />
      <TableCaption />
      <TableHeader />
      <TableRow />
      <TableHead />
      <TableBody />
      <TableCell />
      <Badge />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-list-view--activity-">
          <TypographyH3 className="text-xl font-black mb-2">List View (Activity) <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Complex Data</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Virtualization-ready list style for tracking activity or generic data.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Avatar, AvatarFallback } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Avatar />
      <AvatarFallback />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-stats---kpi-block">
          <TypographyH3 className="text-xl font-black mb-2">Stats / KPI Block <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Complex Data</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Important high-level metrics for dashboard homepages.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`// Import your components from "c-comic-ui";
import { Target } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-bar-chart">
          <TypographyH3 className="text-xl font-black mb-2">Bar Chart <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Complex Data</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Integrated charts (recharts) with bold comic colors.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`// Import your components from "c-comic-ui";
import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar } from "recharts";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-empty-state">
          <TypographyH3 className="text-xl font-black mb-2">Empty State <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Complex Data</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Playful empty states for lists with no data.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";
import { FileBox } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-accordion">
          <TypographyH3 className="text-xl font-black mb-2">Accordion <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Layout/Structure</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">A vertically stacked set of interactive headings that each reveal a section of content.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Accordion />
      <AccordionItem />
      <AccordionTrigger />
      <AccordionContent />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-tabs">
          <TypographyH3 className="text-xl font-black mb-2">Tabs <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Layout/Structure</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">A set of layered sections of content, displayed one at a time.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Tabs, TabsList, TabsTrigger, TabsContent, Button } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Tabs />
      <TabsList />
      <TabsTrigger />
      <TabsContent />
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-sheet---side-panel">
          <TypographyH3 className="text-xl font-black mb-2">Sheet / Side Panel <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Layout/Structure</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Extends from the edges of the window to display mobile panels, drawers, or dialogs.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Sheet, SheetTrigger, Button, SheetContent, SheetHeader, SheetTitle, SheetDescription, Label, Input, SheetFooter } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Sheet />
      <SheetTrigger />
      <Button />
      <SheetContent />
      <SheetHeader />
      <SheetTitle />
      <SheetDescription />
      <Label />
      <Input />
      <SheetFooter />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-resizable-panels">
          <TypographyH3 className="text-xl font-black mb-2">Resizable Panels <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Layout/Structure</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Accessible resizable panel groups and layouts.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <ResizablePanelGroup />
      <ResizablePanel />
      <ResizableHandle />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-drawer--mobile-panel-">
          <TypographyH3 className="text-xl font-black mb-2">Drawer (Mobile Panel) <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Layout/Structure</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">A drawer component for React, typically used on mobile for bottom-up dialogs.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Drawer, DrawerTrigger, Button, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose, DrawerFooter } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Drawer />
      <DrawerTrigger />
      <Button />
      <DrawerContent />
      <DrawerHeader />
      <DrawerTitle />
      <DrawerDescription />
      <DrawerClose />
      <DrawerFooter />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-button">
          <TypographyH3 className="text-xl font-black mb-2">Button <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Core/General</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Displays a button or a component that looks like a button.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Button } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-input">
          <TypographyH3 className="text-xl font-black mb-2">Input <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Forms</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Displays a form input field or a component that looks like an input field.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Input, Button } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Input />
      <Button />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-badge">
          <TypographyH3 className="text-xl font-black mb-2">Badge <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Data Display</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Displays a badge or a component that looks like a badge.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Badge } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-avatar">
          <TypographyH3 className="text-xl font-black mb-2">Avatar <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Data Display</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">An image element with a fallback for representing the user.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Avatar, AvatarImage, AvatarFallback } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Avatar />
      <AvatarImage />
      <AvatarFallback />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-checkbox---label">
          <TypographyH3 className="text-xl font-black mb-2">Checkbox & Label <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Forms</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">A control that allows the user to toggle between checked and not checked.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Checkbox, Label } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Checkbox />
      <Label />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-switch">
          <TypographyH3 className="text-xl font-black mb-2">Switch <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Forms</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">A control that allows the user to toggle between checked and not checked.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Switch, Label } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Switch />
      <Label />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-separator">
          <TypographyH3 className="text-xl font-black mb-2">Separator <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Core/General</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Visually or semantically separates content.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Separator } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Separator />
    </>
  );
}`}</code></pre>
          </div>
        </div>

        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-sm)] mt-4" id="usage-skeleton">
          <TypographyH3 className="text-xl font-black mb-2">Skeleton <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded ml-2 border-[2px] border-black inline-block align-middle">Feedback</span></TypographyH3>
          <TypographyP className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-4">Use to show a placeholder while content is loading.</TypographyP>
          <div className="bg-black text-white p-4 rounded border-[3px] border-black dark:border-border overflow-auto max-h-[300px]">
            <pre className="text-sm font-mono whitespace-pre-wrap break-all mt-2"><code>{`import { Skeleton } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Skeleton />
    </>
  );
}`}</code></pre>
          </div>
        </div>
          </div>
        </div>

        <div id="components" className="bg-blue-50 dark:bg-muted text-black dark:text-foreground p-8 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)] scroll-mt-24">
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
