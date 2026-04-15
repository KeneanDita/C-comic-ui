"use client"

import * as React from "react"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Target, Activity, FileBox, AlertCircle, Terminal, CheckCircle2, Loader2 } from "lucide-react"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SheetClose } from "@/components/ui/sheet"
import { Progress } from "@/components/ui/progress"
import { toast } from "sonner"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Bot, User, RefreshCcw, SquarePen, Sparkles, MessageSquare, Plus, Minus, Hash, Check, CreditCard, Download, Key, Users, Settings2, Trash2, Zap, Smartphone, Mail, Lock, ShieldCheck, Monitor, Laptop, ArrowRight, ChevronRight, Command, Menu, X, Home, Compass, Folder, Calendar, Star, Compass as ExploreIcon, AlignLeft, UploadCloud, Clock, Bold, Italic, Link2, List as ListIcon, Type, Save, Cloud, AlertTriangle, CheckCircle, FileText, Image as ImageIcon, Heading1, Heading2, MapPin, Code, Ghost, Map as MapIcon, Route, Keyboard, Moon, Sun, MousePointerClick, Eye, Accessibility } from "lucide-react"

type ComponentItem = {
  name: string;
  category: "Core/General" | "Forms" | "Data Display" | "Feedback" | "Layout/Structure" | "Complex Data" | "AI & LLM" | "SaaS & Billing" | "Auth & Security" | "Navigation & Discovery" | "Advanced Forms" | "Polished UI" | "Overlay";
  description: string;
  preview: React.ReactNode;
  code: string;
  tags?: string[];
};

const componentsList: ComponentItem[] = [
  {
    name: "Empty State",
    category: "Polished UI",
    description: "Keep users smiling even when there's no data.",
    preview: (
      <div className="w-full max-w-md mx-auto bg-yellow-50 p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-center flex flex-col items-center gap-4">
        <div className="relative">
          <div className="absolute -top-2 -right-2 bg-black w-full h-full rounded-[var(--radius-comic)] z-0"></div>
          <div className="bg-white dark:bg-card border-[3px] border-black dark:border-border p-6 rounded-[var(--radius-comic)] z-10 relative">
            <Ghost className="h-16 w-16 text-gray-400 mx-auto opacity-50" />
            <div className="absolute -top-3 -right-3 bg-red-400 h-8 w-8 rounded-full border-[3px] border-black dark:border-border flex items-center justify-center font-black animate-bounce text-white">?</div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-black uppercase tracking-tight">Whoops! It's a ghost town.</h3>
          <p className="text-gray-600 font-bold mt-2">Looks like there are no missions available right now.</p>
        </div>
        <Button className="mt-2 bg-black text-white hover:bg-gray-800 border-[3px] border-black dark:border-border font-black px-8 shadow-[var(--shadow-comic-sm)] uppercase tracking-wide">
          <Plus className="mr-2 h-4 w-4" /> Start New Mission
        </Button>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { Ghost, Plus } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Error Pages (404/500)",
    category: "Polished UI",
    description: "Turn frustration into a fun storytelling moment.",
    preview: (
      <div className="w-full max-w-lg mx-auto bg-blue-600 p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)] overflow-hidden relative">
        <div className="absolute top-[-50px] right-[-50px] text-[180px] font-black text-blue-500 opacity-50 rotate-12 leading-none select-none z-0">404</div>
        <div className="relative z-10 text-white flex flex-col items-start gap-4">
          <div className="bg-white dark:bg-card text-black dark:text-foreground font-black uppercase px-4 py-1 border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] inline-flex items-center gap-2 transform -rotate-2">
            <MapIcon className="h-5 w-5 text-red-500" /> Off the Grid
          </div>
          <h2 className="text-5xl font-black uppercase text-yellow-300 drop-shadow-[2px_2px_0_#000] tracking-tighter">Lost in space!</h2>
          <p className="text-lg font-bold border-l-[4px] border-white pl-4 my-2 text-blue-100 max-w-sm">
            Our satellites scan the entire galaxy, but the page you are looking for has been destroyed or never existed.
          </p>
          <div className="flex gap-4 mt-4 w-full sm:w-auto">
            <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black dark:text-foreground border-[3px] border-black dark:border-border font-black uppercase shadow-[var(--shadow-comic-sm)]">
              <Home className="mr-2 h-4 w-4" /> Return Home
            </Button>
            <Button className="flex-1 bg-white dark:bg-card hover:bg-gray-100 text-black dark:text-foreground border-[3px] border-black dark:border-border font-black uppercase shadow-[var(--shadow-comic-sm)]">
              <RefreshCcw className="mr-2 h-4 w-4" /> Retry
            </Button>
          </div>
        </div>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { MapIcon, Home, RefreshCcw } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Onboarding Flow",
    category: "Polished UI",
    description: "In-app guided tours with comic-style tooltips.",
    preview: (
      <div className="w-full max-w-full mx-auto flex flex-col items-center justify-center p-12 bg-gray-100 border-[3px] border-border rounded-[var(--radius-comic)] shadow-[inset_0_4px_10px_rgba(0,0,0,0.1)] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 rounded-[calc(var(--radius-comic)-3px)] z-0"></div>
        <div className="relative w-full max-w-md mx-auto z-10 text-center">
          <div className="bg-white dark:bg-card p-4 rounded-[var(--radius-comic)] border-[3px] border-border inline-block relative shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] ring-4 ring-yellow-400 ring-offset-2">
            <Button className="bg-purple-500 text-white hover:bg-purple-600 font-black border-[2px] border-black dark:border-border">
              <Sparkles className="mr-2 h-4 w-4" /> Super Power
            </Button>
            
            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 -translate-y-full w-64 bg-yellow-300 border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] p-4 text-black dark:text-foreground text-left">
              <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-black"></div>
              <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-yellow-300"></div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="font-black uppercase text-xs tracking-widest bg-black text-white px-2 py-0.5 rounded-sm">Step 1 of 3</span>
                <X className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-black text-lg leading-tight mb-1">Activate Powers</h4>
              <p className="text-sm font-bold opacity-80 mb-3">Click this button to unleash devastating combos on your enemies!</p>
              <div className="flex justify-between items-center">
                <Button variant="ghost" className="h-8 text-xs font-black px-2 hover:bg-yellow-400 hover:text-black dark:text-foreground text-black dark:text-foreground">Skip Tour</Button>
                <Button className="h-8 text-xs font-black uppercase bg-black text-white px-4 border-[2px] border-black dark:border-border hover:bg-gray-800">Next <ArrowRight className="ml-1 h-3 w-3"/></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { Sparkles, ArrowRight } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Keyboard Shortcuts UI",
    category: "Polished UI",
    description: "Power user tooltips showing keybindings in style.",
    preview: (
      <div className="w-full max-w-sm mx-auto bg-white dark:bg-card rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] p-1 overflow-hidden">
        <div className="p-3 border-b-[3px] border-border bg-gray-50 flex items-center justify-between">
          <div className="font-black uppercase flex items-center gap-2"><Keyboard className="h-5 w-5" /> Shortcuts</div>
        </div>
        <div className="flex flex-col gap-1 p-2">
          <div className="flex justify-between items-center p-2 rounded-[var(--radius-comic)] hover:bg-gray-100 border-[2px] border-transparent hover:border-black dark:border-border cursor-pointer">
            <span className="font-bold text-gray-700">Open Command Palette</span>
            <div className="flex items-center gap-1">
              <kbd className="bg-white dark:bg-card border-[2px] border-black dark:border-border border-b-[4px] rounded-md px-2 py-0.5 font-black text-xs shadow-sm font-mono flex items-center gap-1"><Command className="h-3 w-3" /> K</kbd>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 rounded-[var(--radius-comic)] hover:bg-gray-100 border-[2px] border-transparent hover:border-black dark:border-border cursor-pointer">
            <span className="font-bold text-gray-700">Save Mission Log</span>
            <div className="flex items-center gap-1">
              <kbd className="bg-white dark:bg-card border-[2px] border-black dark:border-border border-b-[4px] rounded-md px-2 py-0.5 font-black text-xs shadow-sm font-mono"><Command className="h-3 w-3 inline mr-0.5" /> S</kbd>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 rounded-[var(--radius-comic)] hover:bg-gray-100 border-[2px] border-transparent hover:border-black dark:border-border cursor-pointer">
            <span className="font-bold text-gray-700">Quick Esc</span>
            <div className="flex items-center gap-1">
              <kbd className="bg-white dark:bg-card border-[2px] border-black dark:border-border border-b-[4px] rounded-md px-2 py-0.5 font-black text-xs shadow-sm font-mono">Esc</kbd>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `// Import your components from "c-comic-ui";
import { Keyboard, Command } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`
  },
  {
    name: "Theme Switcher",
    category: "Polished UI",
    description: "Loud, chunky toggle for dark/light/system modes.",
    preview: (
      <div className="w-full max-w-xs mx-auto bg-slate-900 border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[200px]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20 transform translate-x-10 -translate-y-10"></div>
        <div className="z-10 bg-white dark:bg-card p-2 rounded-full border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] flex gap-2">
          <Button variant="ghost" size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 border-[2px] border-transparent text-slate-800">
            <Sun className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-black text-white hover:bg-gray-800 border-[2px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] scale-110">
            <Moon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-slate-100 hover:bg-slate-200 border-[2px] border-transparent text-slate-800">
            <Monitor className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-6 z-10 text-white text-center">
          <h4 className="font-black uppercase tracking-wider mb-1">Dark Mode Active</h4>
          <p className="text-xs font-bold text-slate-400">Embrace the shadows, crusader.</p>
        </div>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { Sun, Moon, Monitor } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Accessibility Helpers",
    category: "Polished UI",
    description: "Oversized focus rings & screen reader indications.",
    preview: (
      <div className="w-full max-w-lg mx-auto bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-3 text-purple-600">
            <MousePointerClick className="h-5 w-5" /> <span className="font-black uppercase text-sm">Focus Highlights</span>
          </div>
          <div className="flex gap-4">
            <Button className="outline-none ring-4 ring-offset-2 ring-purple-500 border-[3px] border-black dark:border-border font-black shadow-[var(--shadow-comic-sm)] bg-purple-100 text-purple-900 hover:bg-purple-200">
              Focused State Example
            </Button>
          </div>
        </div>
        <div className="border-[3px] border-dashed border-gray-300 p-4 rounded-[var(--radius-comic)] bg-gray-50 relative group">
          <div className="absolute top-[-12px] right-4 bg-gray-800 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-[var(--radius-comic)] border-[2px] border-black dark:border-border tracking-wide flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Accessibility className="h-3 w-3" /> Screen reader hidden
          </div>
          <div className="flex items-center gap-2 mb-3 text-blue-600">
            <Eye className="h-5 w-5" /> <span className="font-black uppercase text-sm">Alt-Text & Aria-labels</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 bg-blue-100 border-[3px] border-blue-600 rounded-full flex items-center justify-center relative">
               <User className="h-8 w-8 text-blue-600" aria-hidden="true" />
               <span className="sr-only">User profile avatar for Bruce Wayne</span>
               <div className="absolute inset-0 border-[2px] border-dashed border-red-500 rounded-full animate-[spin_4s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex-1 font-bold text-sm text-gray-500 group-hover:text-black dark:text-foreground transition-colors rounded-[var(--radius-comic)] bg-white dark:bg-card p-3 border-[2px] border-gray-200 group-hover:border-black dark:border-border shadow-sm overflow-hidden">
              <span className="text-gray-400">&lt;span className="sr-only"&gt;</span>
              <br />
              <span className="text-blue-600 font-mono">User profile avatar for Bruce Wayne</span>
              <br />
              <span className="text-gray-400">&lt;/span&gt;</span>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { MousePointerClick, Accessibility, Eye, User } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  }
,
  {
    name: "Multi-Step Wizard",
    category: "Advanced Forms",
    description: "Break complex forms into fun, bite-sized comic panels.",
    preview: (
      <div className="w-full max-w-xl mx-auto bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)]">
        <div className="flex items-center justify-between mb-8 relative px-4">
          <div className="absolute left-0 top-1/2 w-full border-t-[3px] border-black dark:border-border -translate-y-1/2 opacity-20"></div>
          <div className="absolute left-0 top-1/2 w-[50%] border-t-[3px] border-black dark:border-border -translate-y-1/2"></div>
          
          <div className="h-10 w-10 rounded-full border-[3px] border-black dark:border-border bg-blue-400 text-white font-black flex items-center justify-center shadow-[var(--shadow-comic-sm)] z-10">
            <Check className="h-5 w-5" />
          </div>
          <div className="h-10 w-10 rounded-full border-[3px] border-black dark:border-border bg-yellow-400 text-black dark:text-foreground font-black flex items-center justify-center shadow-[var(--shadow-comic-sm)] z-10 scale-110">2</div>
          <div className="h-10 w-10 rounded-full border-[3px] border-black dark:border-border bg-white dark:bg-card text-gray-400 font-black flex items-center justify-center shadow-[var(--shadow-comic-sm)] z-10">3</div>
        </div>
        <h3 className="font-black text-2xl uppercase mb-1">Super Identity</h3>
        <p className="text-sm font-bold text-gray-500 mb-6">Tell us who you really are beneath the mask.</p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <Label className="font-black uppercase">Alter Ego Name</Label>
            <Input className="border-[3px] font-bold h-12" placeholder="e.g. Bruce Wayne" />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-black uppercase text-sm">Headquarters Location</Label>
            <div className="relative">
              <Input className="border-[3px] font-bold h-12 pl-10" placeholder="Gotham City" />
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-[3px] border-border pt-4">
          <Button variant="ghost" className="font-black text-gray-500 hover:text-black dark:text-foreground hover:bg-gray-100">Back</Button>
          <Button className="bg-black text-white hover:bg-gray-800 border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] font-black uppercase tracking-wider px-8">Next Step <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </div>
      </div>
    ),
    code: `import { Label, Input, Button } from "c-comic-ui";
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
}`
  },
  {
    name: "Form Validation",
    category: "Advanced Forms",
    description: "In-your-face validation states with bold colors and icons.",
    preview: (
      <div className="w-full max-w-sm mx-auto bg-white dark:bg-card p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] flex flex-col gap-6">
        <div className="flex flex-col gap-2 relative">
          <Label className="font-black uppercase text-red-500 flex items-center gap-1">
            Username <AlertTriangle className="h-4 w-4" />
          </Label>
          <div className="relative">
            <Input className="border-[3px] border-red-500 bg-red-50 focus-visible:ring-red-500 font-bold pr-10 text-red-900" defaultValue="BatmanRulez99" />
            <X className="absolute right-3 top-2.5 h-5 w-5 text-red-500" />
          </div>
          <span className="text-xs font-black text-red-500 bg-red-100 px-2 py-1 rounded-[var(--radius-comic)] border-[2px] border-red-200 self-start">Username is already taken!</span>
        </div>
        <div className="flex flex-col gap-2 relative mt-4">
          <Label className="font-black uppercase text-green-600 flex items-center gap-1">
            Email Address <CheckCircle className="h-4 w-4" />
          </Label>
          <div className="relative">
            <Input className="border-[3px] border-green-500 bg-green-50 focus-visible:ring-green-500 font-bold pr-10 text-green-900" defaultValue="bruce@wayne.com" />
            <Check className="absolute right-3 top-2.5 h-5 w-5 text-green-600" />
          </div>
          <span className="text-xs font-black text-green-600 bg-green-100 px-2 py-1 rounded-[var(--radius-comic)] border-[2px] border-green-200 self-start">Looks good!</span>
        </div>
      </div>
    ),
    code: `import { Label, Input } from "c-comic-ui";
import { AlertTriangle, CheckCircle, Check } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Label />
      <Input />
    </>
  );
}`
  },
  {
    name: "File Upload Zone",
    category: "Advanced Forms",
    description: "A playful drag & drop target that feels interactive.",
    preview: (
      <div className="w-full max-w-lg mx-auto flex flex-col gap-4">
        <div className="w-full h-48 bg-blue-50 border-[3px] border-dashed border-blue-400 rounded-[var(--radius-comic)] flex flex-col items-center justify-center cursor-pointer hover:bg-blue-100 transition-colors group relative overflow-hidden">
          <div className="bg-white dark:bg-card p-4 rounded-full border-[3px] border-blue-400 shadow-[var(--shadow-comic-sm)] group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-300 mb-4 relative z-10">
            <UploadCloud className="h-8 w-8 text-blue-500" />
          </div>
          <h4 className="font-black text-lg uppercase text-blue-600 z-10">Click or Drag Files Here</h4>
          <p className="text-xs font-bold text-blue-400 z-10">PDF, PNG, JPG (Max 10MB)</p>
          <div className="absolute inset-0 bg-blue-400 opacity-0 group-active:opacity-20 transition-opacity"></div>
        </div>
        <div className="flex items-center justify-between p-3 bg-white dark:bg-card border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] hover:-translate-y-0.5 transition-transform">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-[var(--radius-comic)] border-[2px] border-red-200">
              <FileText className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <div className="font-black text-sm">secret_blueprints.pdf</div>
              <div className="text-xs font-bold text-gray-500 flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-500" /> 2.4 MB • Uploaded
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="hover:bg-red-100 text-gray-400 hover:text-red-500 rounded-full h-8 w-8 border-[2px] border-transparent hover:border-red-200">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { UploadCloud, FileText, CheckCircle, Trash2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Date & Time Picker",
    category: "Advanced Forms",
    description: "Custom date selector bypassing default browser inputs.",
    preview: (
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white dark:bg-card rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)] overflow-hidden inline-block w-full">
          <div className="p-3 border-b-[3px] border-border flex items-center justify-between bg-purple-100">
            <Button variant="ghost" size="icon" className="h-8 w-8 border-[2px] border-transparent hover:border-black dark:border-border rounded-full bg-white dark:bg-card shadow-[var(--shadow-comic-sm)]"><ChevronRight className="h-4 w-4 rotate-180" /></Button>
            <div className="font-black uppercase tracking-wider text-purple-900">April 2026</div>
            <Button variant="ghost" size="icon" className="h-8 w-8 border-[2px] border-transparent hover:border-black dark:border-border rounded-full bg-white dark:bg-card shadow-[var(--shadow-comic-sm)]"><ChevronRight className="h-4 w-4" /></Button>
          </div>
          <div className="p-4 bg-white dark:bg-card">
            <div className="grid grid-cols-7 gap-1 mb-2 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center font-bold text-sm">
              <div className="p-1.5 text-gray-300">29</div><div className="p-1.5 text-gray-300">30</div><div className="p-1.5 text-gray-300">31</div>
              <div className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer hover:border-black dark:border-border border-[2px] border-transparent">1</div>
              <div className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer hover:border-black dark:border-border border-[2px] border-transparent">2</div>
              <div className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer hover:border-black dark:border-border border-[2px] border-transparent">3</div>
              <div className="p-1.5 bg-black text-white rounded-full cursor-pointer border-[2px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] scale-110 font-black z-10 transition-transform">4</div>
              <div className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer hover:border-black dark:border-border border-[2px] border-transparent">5</div>
              <div className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer hover:border-black dark:border-border border-[2px] border-transparent">6</div>
              <div className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer hover:border-black dark:border-border border-[2px] border-transparent relative">7<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></div></div>
              <div className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer hover:border-black dark:border-border border-[2px] border-transparent">8</div>
              <div className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer hover:border-black dark:border-border border-[2px] border-transparent">9</div>
              <div className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer hover:border-black dark:border-border border-[2px] border-transparent">10</div>
            </div>
          </div>
          <div className="p-3 border-t-[3px] border-border bg-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-white dark:bg-card px-3 py-1.5 rounded-[var(--radius-comic)] border-[2px] border-border hover:border-black dark:border-border cursor-pointer shadow-[var(--shadow-comic-sm)] transition-colors">
              <Clock className="h-4 w-4 text-purple-600" />
              <span className="font-black text-sm">14:00</span>
            </div>
            <Button className="h-9 px-6 text-xs font-black bg-black text-white hover:bg-gray-800 border-[2px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] uppercase tracking-wide">Apply</Button>
          </div>
        </div>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { ChevronRight, Clock } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Rich Text Editor",
    category: "Advanced Forms",
    description: "WYSIWYG layout combining a bold toolbar and content area.",
    preview: (
      <div className="w-full max-w-3xl mx-auto rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)] overflow-hidden flex flex-col min-h-[300px] bg-white dark:bg-card group hover:shadow-[var(--shadow-comic)] transition-shadow cursor-text">
        <div className="bg-gray-100 border-b-[3px] border-border p-2 flex flex-wrap gap-2 items-center">
          <div className="flex gap-1 pr-2 border-r-[3px] border-border">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-[var(--radius-comic)] bg-white dark:bg-card border-[2px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] text-black dark:text-foreground"><Bold className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-[var(--radius-comic)] hover:border-black dark:border-border border-[2px] border-transparent text-gray-600"><Italic className="h-4 w-4" /></Button>
          </div>
          <div className="flex gap-1 pr-2 border-r-[3px] border-border">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-[var(--radius-comic)] hover:border-black dark:border-border border-[2px] border-transparent text-gray-600"><Heading1 className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-[var(--radius-comic)] hover:border-black dark:border-border border-[2px] border-transparent text-gray-600"><Heading2 className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-[var(--radius-comic)] hover:border-black dark:border-border border-[2px] border-transparent text-gray-600"><ListIcon className="h-4 w-4" /></Button>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-[var(--radius-comic)] hover:border-black dark:border-border border-[2px] border-transparent text-gray-600"><Link2 className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-[var(--radius-comic)] hover:border-black dark:border-border border-[2px] border-transparent text-gray-600"><ImageIcon className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-[var(--radius-comic)] hover:border-black dark:border-border border-[2px] border-transparent text-gray-600"><Code className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="flex-1 p-6 font-bold text-gray-800 outline-none overflow-y-auto" contentEditable suppressContentEditableWarning>
          <h1 className="text-3xl font-black text-black dark:text-foreground mb-4 tracking-tight">KAPOW! The Ultimate Editor</h1>
          <p className="mb-4 text-lg">Type your epic origin story here... Try making something <strong className="font-black text-black dark:text-foreground bg-yellow-200 px-1 border-[2px] border-black dark:border-border rounded-md">bold</strong> or <em className="text-blue-600">italic</em>.</p>
          <ul className="list-disc pl-6 space-y-2 text-md">
            <li>Save the city</li>
            <li>Defeat the villain</li>
            <li>Eat a sandwich</li>
          </ul>
        </div>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { Bold, Italic, Heading1, Heading2, ListIcon, Link2, ImageIcon, Code } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Autosave & Drafts",
    category: "Advanced Forms",
    description: "Continuous save badges that provide peace of mind.",
    preview: (
      <div className="w-full max-w-xl mx-auto bg-green-50 p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] relative">
        <div className="absolute -top-4 right-6 bg-black text-white px-3 py-1.5 rounded-[var(--radius-comic)] border-[2px] border-black dark:border-border font-black uppercase text-xs flex items-center gap-2 shadow-[var(--shadow-comic-sm)] rotate-2 z-10 hover:-translate-y-1 transition-transform cursor-default">
          <Cloud className="h-3.5 w-3.5 text-green-400" /> Saved to cloud
        </div>
        <div className="flex flex-col gap-5">
           <div className="flex flex-col gap-2">
             <Label className="font-black uppercase text-green-800">Mission Name</Label>
             <Input className="border-[3px] font-bold bg-white dark:bg-card h-12 text-lg focus-visible:ring-green-500" defaultValue="Operation: Midnight Strike" />
           </div>
           <div className="flex flex-col gap-2">
             <Label className="font-black uppercase text-green-800">Field Notes</Label>
             <textarea className="w-full min-h-[120px] border-[3px] border-border font-bold bg-white dark:bg-card rounded-[var(--radius-comic)] p-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-black dark:border-border resize-none" defaultValue="Target spotted near the old warehouse. Awaiting further instructions." />
           </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t-[3px] border-green-200 pt-6">
           <div className="flex items-center gap-2 text-xs font-black text-green-700 bg-green-100 px-2 py-1 rounded-md border-[2px] border-green-200">
             <Loader2 className="h-3.5 w-3.5 animate-spin" /> Saving changes...
           </div>
           <div className="flex items-center gap-3">
             <Button variant="ghost" className="font-black text-gray-600 hover:text-black dark:text-foreground hover:bg-white dark:bg-card border-[2px] border-transparent hover:border-black dark:border-border">Discard</Button>
             <Button className="bg-green-500 hover:bg-green-600 text-white border-[3px] border-black dark:border-border font-black shadow-[var(--shadow-comic-sm)] uppercase tracking-wide">Publish Log</Button>
           </div>
        </div>
      </div>
    ),
    code: `import { Label, Input, Button } from "c-comic-ui";
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
}`
  }
,
  {
    name: "Breadcrumbs",
    category: "Navigation & Discovery",
    description: "Fun, heavily bordered block-style breadcrumbs.",
    preview: (
      <div className="w-full flex items-center justify-center p-8 bg-white dark:bg-card rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)]">
        <nav className="flex items-center gap-2 font-black text-sm">
          <a href="#!" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 bg-yellow-300 px-3 py-1.5 rounded-[var(--radius-comic)] border-[2px] border-black dark:border-border hover:-translate-y-1 hover:shadow-[var(--shadow-comic-sm)] transition-all">
            <Home className="h-4 w-4" /> Home
          </a>
          <ChevronRight className="h-5 w-5 text-gray-400" />
          <a href="#!" onClick={(e) => e.preventDefault()} className="flex items-center gap-2 bg-pink-300 px-3 py-1.5 rounded-[var(--radius-comic)] border-[2px] border-black dark:border-border hover:-translate-y-1 hover:shadow-[var(--shadow-comic-sm)] transition-all">
            Products
          </a>
          <ChevronRight className="h-5 w-5 text-gray-400" />
          <span className="flex items-center gap-2 bg-gray-200 px-3 py-1.5 rounded-[var(--radius-comic)] border-[2px] border-black dark:border-border opacity-70">
            Comic Books
          </span>
        </nav>
      </div>
    ),
    code: `// Import your components from "c-comic-ui";
import { Home, ChevronRight } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`
  },
  {
    name: "Command Palette",
    category: "Navigation & Discovery",
    description: "Cmd+K interface for global navigation and actions.",
    preview: (
      <div className="w-full max-w-lg mx-auto bg-white dark:bg-card rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)] overflow-hidden">
        <div className="flex items-center px-4 py-3 border-b-[3px] border-border bg-gray-50">
          <Search className="h-5 w-5 text-gray-500 mr-2" />
          <input className="w-full bg-transparent border-none outline-none font-bold text-lg placeholder:text-gray-400" placeholder="Type a command or search..." />
          <Badge className="bg-white dark:bg-card border-[2px] border-black dark:border-border text-black dark:text-foreground font-bold font-mono ml-2">⌘K</Badge>
        </div>
        <div className="p-2 max-h-[300px] overflow-y-auto">
          <div className="px-2 py-1.5 text-xs font-black uppercase text-gray-500">Suggestions</div>
          <button className="w-full flex items-center justify-between px-3 py-3 rounded-[var(--radius-comic)] border-[2px] border-transparent hover:border-black dark:border-border hover:bg-yellow-100 hover:shadow-[var(--shadow-comic-sm)] transition-all text-left group">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-black dark:text-foreground">Create new event</span>
            </div>
            <span className="text-xs font-bold text-gray-400">Action</span>
          </button>
          <button className="w-full flex items-center justify-between px-3 py-3 rounded-[var(--radius-comic)] border-[2px] border-transparent hover:border-black dark:border-border hover:bg-green-100 hover:shadow-[var(--shadow-comic-sm)] transition-all text-left group">
            <div className="flex items-center gap-3">
              <Folder className="h-5 w-5 text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-black dark:text-foreground">Search projects</span>
            </div>
            <span className="text-xs font-bold text-gray-400">Navigation</span>
          </button>
          <div className="px-2 py-1.5 mt-2 text-xs font-black uppercase text-gray-500">Settings</div>
          <button className="w-full flex items-center justify-between px-3 py-3 rounded-[var(--radius-comic)] border-[2px] border-transparent hover:border-black dark:border-border hover:bg-purple-100 hover:shadow-[var(--shadow-comic-sm)] transition-all text-left group">
            <div className="flex items-center gap-3">
              <Settings2 className="h-5 w-5 text-gray-600 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-black dark:text-foreground">Account preferences</span>
            </div>
            <span className="text-xs font-bold text-gray-400">Settings</span>
          </button>
        </div>
      </div>
    ),
    code: `import { Badge } from "c-comic-ui";
import { Search, Calendar, Folder, Settings2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
    </>
  );
}`
  },
  {
    name: "Global Search",
    category: "Navigation & Discovery",
    description: "Search bar with live preview dropdown.",
    preview: (
      <div className="w-full max-w-xl mx-auto align-top min-h-[350px]">
        <div className="relative">
          <div className="flex items-center bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] overflow-hidden focus-within:shadow-[var(--shadow-comic)] transition-shadow">
            <div className="pl-4">
              <Search className="h-5 w-5 text-black dark:text-foreground" />
            </div>
            <Input className="border-none shadow-none focus-visible:ring-0 text-lg font-bold h-14" placeholder="Search for users, docs, or settings..." />
            <Button className="bg-black text-white font-black rounded-none h-14 px-6 border-l-[3px] border-black dark:border-border">Search</Button>
          </div>
          
          <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] z-10 overflow-hidden">
            <div className="p-4 border-b-[2px] border-dashed border-gray-300 bg-blue-50">
              <h4 className="font-black text-xs uppercase text-blue-800 mb-2">Top Results</h4>
              <div className="flex items-center gap-3 bg-white dark:bg-card p-3 rounded-[var(--radius-comic)] border-[2px] border-black dark:border-border cursor-pointer hover:-translate-y-0.5 hover:shadow-[var(--shadow-comic-sm)] transition-all">
                <Avatar className="h-10 w-10 border-[2px] border-black dark:border-border">
                  <AvatarFallback className="bg-yellow-400 font-bold text-black dark:text-foreground">BR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-black">Bruce Wayne</div>
                  <div className="text-xs font-bold text-gray-500">User • bruce@wayne.com</div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-black text-xs uppercase text-gray-500 mb-2">Documentation</h4>
              <ul className="space-y-2">
                <li className="font-bold text-sm hover:text-blue-600 cursor-pointer flex items-center gap-2"><FileBox className="h-4 w-4" /> How to connect API</li>
                <li className="font-bold text-sm hover:text-blue-600 cursor-pointer flex items-center gap-2"><FileBox className="h-4 w-4" /> Billing and Subscriptions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `import { Input, Button, Avatar, AvatarFallback } from "c-comic-ui";
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
}`
  },
  {
    name: "Collapsible Sidebar",
    category: "Navigation & Discovery",
    description: "A fun, chunky sidebar navigation for dashboards.",
    preview: (
      <div className="w-full max-w-3xl mx-auto h-[400px] border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] flex overflow-hidden bg-gray-50">
        <aside className="w-48 sm:w-64 bg-yellow-400 border-r-[3px] border-border flex flex-col shrink-0">
          <div className="h-16 flex items-center px-4 border-b-[3px] border-border bg-white dark:bg-card justify-between">
            <span className="font-black text-xl tracking-tight">COMIC.UI</span>
            <Button size="icon" variant="ghost" className="hover:bg-gray-100 rounded-full border-[2px] border-transparent hover:border-black dark:border-border h-8 w-8">
              <AlignLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
            <a href="#!" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-3 py-2 bg-black text-white rounded-[var(--radius-comic)] font-black border-[2px] border-black dark:border-border shadow-[var(--shadow-comic-sm)]">
              <Home className="h-5 w-5" /> Dashboard
            </a>
            <a href="#!" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-3 py-2 text-black dark:text-foreground hover:bg-white dark:bg-card rounded-[var(--radius-comic)] font-bold border-[2px] border-transparent hover:border-black dark:border-border transition-colors">
              <Compass className="h-5 w-5" /> Explore
            </a>
            <a href="#!" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-3 py-2 text-black dark:text-foreground hover:bg-white dark:bg-card rounded-[var(--radius-comic)] font-bold border-[2px] border-transparent hover:border-black dark:border-border transition-colors">
              <Star className="h-5 w-5" /> Favorites
            </a>
            <div className="mt-4 mb-1 px-3 text-xs font-black uppercase text-yellow-800">Workspace</div>
            <a href="#!" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-3 py-2 text-black dark:text-foreground hover:bg-white dark:bg-card rounded-[var(--radius-comic)] font-bold border-[2px] border-transparent hover:border-black dark:border-border transition-colors">
              <Folder className="h-5 w-5" /> Projects
            </a>
            <a href="#!" onClick={(e) => e.preventDefault()} className="flex items-center justify-between px-3 py-2 text-black dark:text-foreground hover:bg-white dark:bg-card rounded-[var(--radius-comic)] font-bold border-[2px] border-transparent hover:border-black dark:border-border transition-colors">
              <div className="flex items-center gap-3"><Users className="h-5 w-5" /> Team</div>
              <Badge className="bg-black text-white px-1.5 py-0 h-5 text-[10px]">3</Badge>
            </a>
          </div>
          <div className="p-4 border-t-[3px] border-border bg-white dark:bg-card">
            <a href="#!" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-3 py-2 text-black dark:text-foreground hover:bg-gray-100 rounded-[var(--radius-comic)] font-bold border-[2px] border-transparent hover:border-black dark:border-border transition-colors">
              <Settings2 className="h-5 w-5" /> Settings
            </a>
          </div>
        </aside>
        <main className="flex-1 p-8 bg-[#f8f9fa] flex items-center justify-center">
          <div className="text-center opacity-50 font-black text-2xl uppercase">Main Content Area</div>
        </main>
      </div>
    ),
    code: `import { Button, Badge } from "c-comic-ui";
import { AlignLeft, Home, Compass, Star, Folder, Users, Settings2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
      <Badge />
    </>
  );
}`
  },
  {
    name: "Mega Menu",
    category: "Navigation & Discovery",
    description: "Large dropdown menu for complex site structures.",
    preview: (
      <div className="w-full max-w-4xl mx-auto relative min-h-[450px]">
        <header className="bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] p-4 flex items-center justify-between">
          <div className="font-black text-xl tracking-tight bg-black text-white px-3 py-1 rounded-[var(--radius-comic)] rotate-[-2deg]">LOGO</div>
          <nav className="hidden md:flex items-center gap-6 font-bold">
             <a href="#!" onClick={(e) => e.preventDefault()} className="hover:underline decoration-2 underline-offset-4 decoration-blue-500">Home</a>
             
             {/* Simulating hovered mega menu active state */}
             <div className="relative group">
                <a href="#!" onClick={(e) => e.preventDefault()} className="bg-blue-100 px-3 py-1 rounded-full border-[2px] border-blue-500 text-blue-700 flex items-center gap-1 cursor-default">
                  Features <ChevronRight className="h-4 w-4 rotate-90" />
                </a>
             </div>
             
             <a href="#!" onClick={(e) => e.preventDefault()} className="hover:underline decoration-2 underline-offset-4 decoration-blue-500">Pricing</a>
             <a href="#!" onClick={(e) => e.preventDefault()} className="hover:underline decoration-2 underline-offset-4 decoration-blue-500">Docs</a>
          </nav>
          <Button className="font-black bg-black text-white border-[2px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] hover:-translate-y-1 transition-transform">Get Started</Button>
        </header>

        {/* Mega Menu Dropdown */}
        <div className="absolute top-[80px] left-0 w-full bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] z-20 flex flex-col md:flex-row p-6 gap-6 md:gap-8 overflow-hidden">
           <div className="w-full md:w-1/3 bg-blue-50 p-6 rounded-[var(--radius-comic)] border-[2px] border-black dark:border-border flex flex-col justify-between">
             <div>
               <h3 className="font-black text-2xl mb-2 text-blue-600">All Features</h3>
               <p className="font-bold text-sm text-gray-700">Discover everything our platform has to offer to turbocharge your workflow.</p>
             </div>
             <Button variant="link" className="font-black px-0 text-left justify-start text-blue-600 hover:text-blue-800">
               View All <ArrowRight className="h-4 w-4 ml-1" />
             </Button>
           </div>
           
           <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
             <a href="#!" onClick={(e) => e.preventDefault()} className="group flex items-start gap-3 p-2 rounded-[var(--radius-comic)] border-[2px] border-transparent hover:border-black dark:border-border hover:bg-yellow-50 transition-colors">
               <div className="bg-yellow-300 p-2 rounded-full border-[2px] border-black dark:border-border group-hover:rotate-12 transition-transform">
                 <Zap className="h-5 w-5 text-black dark:text-foreground" />
               </div>
               <div>
                  <div className="font-black text-sm">Automation</div>
                  <div className="text-xs font-bold text-gray-500 mt-0.5">Automate your tasks</div>
               </div>
             </a>
             <a href="#!" onClick={(e) => e.preventDefault()} className="group flex items-start gap-3 p-2 rounded-[var(--radius-comic)] border-[2px] border-transparent hover:border-black dark:border-border hover:bg-green-50 transition-colors">
               <div className="bg-green-300 p-2 rounded-full border-[2px] border-black dark:border-border group-hover:rotate-12 transition-transform">
                 <Users className="h-5 w-5 text-black dark:text-foreground" />
               </div>
               <div>
                  <div className="font-black text-sm">Collaboration</div>
                  <div className="text-xs font-bold text-gray-500 mt-0.5">Work with your team</div>
               </div>
             </a>
             <a href="#!" onClick={(e) => e.preventDefault()} className="group flex items-start gap-3 p-2 rounded-[var(--radius-comic)] border-[2px] border-transparent hover:border-black dark:border-border hover:bg-purple-50 transition-colors">
               <div className="bg-purple-300 p-2 rounded-full border-[2px] border-black dark:border-border group-hover:rotate-12 transition-transform">
                 <ShieldCheck className="h-5 w-5 text-black dark:text-foreground" />
               </div>
               <div>
                  <div className="font-black text-sm">Security</div>
                  <div className="text-xs font-bold text-gray-500 mt-0.5">Enterprise grade</div>
               </div>
             </a>
             <a href="#!" onClick={(e) => e.preventDefault()} className="group flex items-start gap-3 p-2 rounded-[var(--radius-comic)] border-[2px] border-transparent hover:border-black dark:border-border hover:bg-pink-50 transition-colors">
               <div className="bg-pink-300 p-2 rounded-full border-[2px] border-black dark:border-border group-hover:rotate-12 transition-transform">
                 <BarChart className="h-5 w-5 text-black dark:text-foreground" />
               </div>
               <div>
                  <div className="font-black text-sm">Analytics</div>
                  <div className="text-xs font-bold text-gray-500 mt-0.5">Data driven decisions</div>
               </div>
             </a>
           </div>
        </div>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { ChevronRight, ArrowRight, Zap, Users, ShieldCheck } from "lucide-react";
import { BarChart } from "recharts";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },

  {
    name: "Login / Sign Up",
    category: "Auth & Security",
    description: "Classic comic-style login form with social providers and hard shadows.",
    preview: (
      <div className="w-full max-w-sm mx-auto bg-white dark:bg-card p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)]">
        <div className="text-center mb-6">
          <h3 className="font-black text-2xl uppercase">Welcome Back!</h3>
          <p className="text-sm font-bold text-muted-foreground mt-1">Pow! Bam! Log right in.</p>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <Button variant="outline" className="w-full font-black border-[3px] flex items-center justify-center gap-2 hover:bg-gray-50 h-12">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            Continue with GitHub
          </Button>
          <Button variant="outline" className="w-full font-black border-[3px] flex items-center justify-center gap-2 hover:bg-gray-50 h-12">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Continue with Google
          </Button>
        </div>
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t-[3px] border-border"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-card px-2 font-black text-muted-foreground">Or</span>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-black uppercase">Email</Label>
            <Input className="border-[3px] h-12 font-bold bg-yellow-50 focus-visible:ring-0 focus-visible:bg-white dark:bg-card" placeholder="hero@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Label className="font-black uppercase">Password</Label>
              <a href="#!" onClick={(e) => e.preventDefault()} className="text-xs font-black text-blue-600 hover:underline">Forgot?</a>
            </div>
            <Input type="password" className="border-[3px] h-12 font-bold bg-yellow-50 focus-visible:ring-0 focus-visible:bg-white dark:bg-card" placeholder="••••••••" />
          </div>
          <Button className="w-full h-12 font-black uppercase text-lg bg-black text-white hover:bg-gray-800 border-[3px] border-black dark:border-border shadow-[var(--shadow-comic)] mt-2">Log In</Button>
        </form>
        <p className="text-center mt-6 text-sm font-bold">
          Don't have an account? <a href="#!" onClick={(e) => e.preventDefault()} className="font-black text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    ),
    code: `import { Button, Label, Input } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
      <Label />
      <Input />
    </>
  );
}`
  },
  {
    name: "Forgot Password",
    category: "Auth & Security",
    description: "Password recovery flow using strong borders.",
    preview: (
      <div className="w-full max-w-md mx-auto bg-[#4ade80] p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)]">
        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border mb-6 flex items-center gap-4">
          <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center shrink-0">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-black text-xl uppercase">Reset Password</h3>
            <p className="text-xs font-bold text-muted-foreground mt-1">We'll send a recovery link to your inbox.</p>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <Input className="border-[3px] h-12 font-bold bg-white dark:bg-card focus-visible:ring-0" placeholder="Enter your email address" />
          <Button className="w-full h-12 font-black uppercase bg-white dark:bg-card text-black dark:text-foreground hover:bg-gray-100 border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)]">Send Reset Link</Button>
        </form>
        <div className="mt-4 text-center">
          <Button variant="link" className="font-black hover:bg-[#22c55e] text-black dark:text-foreground">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to Login
          </Button>
        </div>
      </div>
    ),
    code: `import { Input, Button } from "c-comic-ui";
import { Lock, ArrowRight } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Input />
      <Button />
    </>
  );
}`
  },
  {
    name: "Email Verification",
    category: "Auth & Security",
    description: "A fun inbox-checking prompt.",
    preview: (
      <div className="w-full max-w-sm mx-auto bg-white dark:bg-card p-8 text-center rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] flex flex-col items-center">
        <div className="h-20 w-20 bg-yellow-400 rounded-full flex items-center justify-center border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] mb-6">
          <Mail className="h-10 w-10 text-black dark:text-foreground" />
        </div>
        <h3 className="font-black text-2xl uppercase mb-2">Check Your Mail!</h3>
        <p className="text-sm font-bold text-muted-foreground mb-6">
          We've sent a verification link to <br/><span className="text-black dark:text-foreground font-black">hero@example.com</span>
        </p>
        <Button className="w-full font-black bg-black text-white hover:bg-gray-800 border-[3px] border-black dark:border-border mb-3">Open Email App</Button>
        <Button variant="ghost" className="font-bold underline decoration-2 underline-offset-4 hover:bg-gray-100">Resend Email</Button>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { Mail } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "2FA / OTP Input",
    category: "Auth & Security",
    description: "Six-digit verification code entry.",
    preview: (
      <div className="w-full max-w-md mx-auto bg-blue-100 p-4 sm:p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)] overflow-hidden">
        <div className="bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-500" />
            <h3 className="font-black text-xl uppercase">Two-Factor Auth</h3>
          </div>
          <p className="text-sm font-bold text-muted-foreground mb-6">Enter the 6-digit code from your authenticator app.</p>
          <div className="flex flex-wrap justify-center sm:justify-between gap-2 mb-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Input key={i} className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl sm:text-2xl font-black border-[3px] focus-visible:ring-0 focus-visible:bg-yellow-100 transition-colors" maxLength={1} placeholder="•" />
            ))}
          </div>
          <Button className="w-full h-12 font-black uppercase bg-blue-500 text-white hover:bg-blue-600 border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)]">Verify Code</Button>
        </div>
      </div>
    ),
    code: `import { Input, Button } from "c-comic-ui";
import { ShieldCheck } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Input />
      <Button />
    </>
  );
}`
  },
  {
    name: "Device Management",
    category: "Auth & Security",
    description: "Active sessions and connected devices list.",
    preview: (
      <div className="w-full max-w-xl mx-auto bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)]">
        <h3 className="font-black text-xl uppercase mb-6 border-b-[3px] border-border pb-4">Active Sessions</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between p-4 bg-gray-50 border-[3px] border-border rounded-[var(--radius-comic)]">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Laptop className="h-6 w-6 text-black dark:text-foreground" />
              </div>
              <div>
                <div className="font-black flex items-center gap-2">
                  MacBook Pro <Badge className="bg-green-400 text-black dark:text-foreground border-[2px] border-black dark:border-border px-2 py-0">Current</Badge>
                </div>
                <div className="text-xs font-bold text-muted-foreground mt-1">Chrome on macOS • New York, USA</div>
                <div className="text-xs font-bold text-muted-foreground mt-1">Active right now</div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between p-4 bg-white dark:bg-card border-[3px] border-border rounded-[var(--radius-comic)]">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Smartphone className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <div className="font-black">iPhone 14 Pro</div>
                <div className="text-xs font-bold text-muted-foreground mt-1">Safari on iOS • New York, USA</div>
                <div className="text-xs font-bold text-muted-foreground mt-1">Last active: 2 hours ago</div>
              </div>
            </div>
            <Button variant="ghost" className="font-black text-red-500 hover:bg-red-100 hover:text-red-600 border-[2px] border-transparent hover:border-red-500 rounded-[var(--radius-comic)] px-3">Log Out</Button>
          </div>
          <div className="flex items-start justify-between p-4 bg-white dark:bg-card border-[3px] border-border rounded-[var(--radius-comic)]">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Monitor className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <div className="font-black">Windows Desktop</div>
                <div className="text-xs font-bold text-muted-foreground mt-1">Edge on Windows 11 • Los Angeles, USA</div>
                <div className="text-xs font-bold text-muted-foreground mt-1">Last active: 3 days ago</div>
              </div>
            </div>
            <Button variant="ghost" className="font-black text-red-500 hover:bg-red-100 hover:text-red-600 border-[2px] border-transparent hover:border-red-500 rounded-[var(--radius-comic)] px-3">Log Out</Button>
          </div>
        </div>
      </div>
    ),
    code: `import { Badge, Button } from "c-comic-ui";
import { Laptop, Smartphone, Monitor } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
      <Button />
    </>
  );
}`
  },

  {
    name: "Pricing Table",
    category: "SaaS & Billing",
    description: "Clear and bold pricing tiers that grab the user's attention.",
    preview: (
      <div className="w-full flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
        <div className="flex-1 bg-white dark:bg-card p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] flex flex-col items-center text-center">
          <h4 className="font-black text-xl uppercase text-black dark:text-foreground">Starter</h4>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-black text-black dark:text-foreground">$0</span>
            <span className="font-bold text-muted-foreground">/mo</span>
          </div>
          <ul className="flex flex-col gap-3 font-bold text-sm text-black dark:text-foreground mb-8 w-full text-left">
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> 1,000 API Calls</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Basic Support</li>
            <li className="flex items-center gap-2 opacity-50"><Check className="h-5 w-5" /> Analytics Dashboard</li>
          </ul>
          <Button variant="outline" className="w-full font-black border-[3px] border-black dark:border-border">Get Started</Button>
        </div>
        <div className="flex-1 bg-yellow-400 p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)] flex flex-col items-center text-center relative md:-translate-y-4">
          <div className="absolute -top-4 bg-black text-white px-4 py-1 font-black text-sm uppercase rounded-full border-[2px] border-black dark:border-border">Most Popular</div>
          <h4 className="font-black text-xl uppercase text-black dark:text-foreground pt-2">Hero</h4>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-black text-black dark:text-foreground">$29</span>
            <span className="font-bold text-black dark:text-foreground/70">/mo</span>
          </div>
          <ul className="flex flex-col gap-3 font-bold text-sm text-black dark:text-foreground mb-8 w-full text-left">
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-black dark:text-foreground" /> 50,000 API Calls</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-black dark:text-foreground" /> Priority Support</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-black dark:text-foreground" /> Analytics Dashboard</li>
          </ul>
          <Button className="w-full font-black bg-black hover:bg-gray-800 text-white border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)]">Upgrade to Hero</Button>
        </div>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { Check } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Subscription Management",
    category: "SaaS & Billing",
    description: "Account overview panel showing current plan, dates, and upgrade paths.",
    preview: (
      <div className="w-full max-w-lg bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black dark:text-foreground">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-black text-xl uppercase">Current Plan</h3>
            <p className="text-sm font-bold text-muted-foreground mt-1">Next billing date: <strong>Nov 1st, 2026</strong></p>
          </div>
          <Badge className="bg-yellow-400 text-black dark:text-foreground border-[2px] border-black dark:border-border uppercase font-black px-3 py-1">Hero Tier</Badge>
        </div>
        <div className="bg-blue-50 border-[3px] border-border rounded-[var(--radius-comic)] p-4 flex justify-between items-center gap-4 border-dashed mb-6">
           <Zap className="h-8 w-8 text-yellow-400 drop-shadow-md" />
           <div className="flex-1">
             <div className="font-black text-sm uppercase">Looking for more power?</div>
             <div className="text-xs font-bold text-muted-foreground mt-1">Upgrade to the "God Tier" for unlimited access.</div>
           </div>
           <Button className="bg-blue-400 text-white font-black hover:bg-blue-500 shadow-[var(--shadow-comic-sm)]">Upgrade</Button>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="font-black border-[3px] flex-1">Update Payment Method</Button>
          <Button variant="destructive" className="font-black border-[3px] border-black dark:border-border">Cancel</Button>
        </div>
      </div>
    ),
    code: `import { Badge, Button } from "c-comic-ui";
import { Zap } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
      <Button />
    </>
  );
}`
  },
  {
    name: "Billing History & Invoices",
    category: "SaaS & Billing",
    description: "Invoice history table with comic-styled download actions.",
    preview: (
      <div className="w-full max-w-2xl bg-white dark:bg-card p-4 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black dark:text-foreground">
        <h3 className="font-black text-xl uppercase mb-4 pl-2">Billing History</h3>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100 border-b-[3px] border-border">
              <TableHead className="font-black text-black dark:text-foreground">Date</TableHead>
              <TableHead className="font-black text-black dark:text-foreground">Amount</TableHead>
              <TableHead className="font-black text-black dark:text-foreground">Status</TableHead>
              <TableHead className="text-right font-black text-black dark:text-foreground">Invoice</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b-[2px] border-border">
              <TableCell className="font-bold">Oct 1, 2026</TableCell>
              <TableCell className="font-black">$29.00</TableCell>
              <TableCell><Badge className="bg-green-400 text-black dark:text-foreground border-[2px] border-black dark:border-border">Paid</Badge></TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="font-bold border-[2px] border-border shadow-[var(--shadow-comic-sm)] hover:bg-gray-100">
                  <Download className="h-4 w-4 mr-2" /> PDF
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="border-b-[2px] border-border">
              <TableCell className="font-bold">Sep 1, 2026</TableCell>
              <TableCell className="font-black">$29.00</TableCell>
              <TableCell><Badge className="bg-green-400 text-black dark:text-foreground border-[2px] border-black dark:border-border">Paid</Badge></TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="font-bold border-[2px] border-border shadow-[var(--shadow-comic-sm)] hover:bg-gray-100">
                  <Download className="h-4 w-4 mr-2" /> PDF
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
    code: `import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Badge, Button } from "c-comic-ui";
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
}`
  },
  {
    name: "API Usage Meter",
    category: "SaaS & Billing",
    description: "Visual indicator for tracking quota consumption.",
    preview: (
      <div className="w-full max-w-sm bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black dark:text-foreground flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <div>
            <div className="font-black uppercase text-sm">Monthly API Requests</div>
            <div className="font-black text-2xl mt-1 text-red-500">42,500 <span className="text-sm text-muted-foreground">/ 50k</span></div>
          </div>
          <AlertCircle className="h-8 w-8 text-red-500" />
        </div>
        <Progress value={85} indicatorColor="bg-red-500" />
        <p className="text-xs font-bold text-muted-foreground mt-1 text-center">
          You are nearing your plan\'s limit.
        </p>
      </div>
    ),
    code: `import { Progress } from "c-comic-ui";
import { AlertCircle } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Progress />
    </>
  );
}`
  },
  {
    name: "Team Roles & Permissions",
    category: "SaaS & Billing",
    description: "Manage organization members with styled Selects and Avatars.",
    preview: (
      <div className="w-full max-w-lg bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black dark:text-foreground">
        <div className="flex justify-between items-center mb-6 border-b-[3px] border-border pb-4">
          <div className="flex items-center gap-2">
             <Users className="h-6 w-6 text-blue-500" />
             <h3 className="font-black text-xl uppercase">Team Members</h3>
          </div>
          <Button className="bg-blue-400 hover:bg-blue-500 text-white font-black shadow-[var(--shadow-comic-sm)] border-[3px]">Invite</Button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-3">
               <Avatar className="border-[3px] border-border shadow-[var(--shadow-comic-sm)]">
                 <AvatarFallback className="bg-yellow-400 font-bold text-black dark:text-foreground border-border">BR</AvatarFallback>
               </Avatar>
               <div>
                  <div className="font-black text-sm">Bruce Wayne</div>
                  <div className="text-xs font-bold text-muted-foreground">bruce@wayne.enterprises</div>
               </div>
             </div>
             <div className="flex items-center gap-2">
               <Badge className="bg-gray-100 text-black dark:text-foreground border-[2px] border-border">Owner</Badge>
             </div>
          </div>
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-3">
               <Avatar className="border-[3px] border-border shadow-[var(--shadow-comic-sm)]">
                 <AvatarFallback className="bg-purple-400 text-white font-bold border-border">CK</AvatarFallback>
               </Avatar>
               <div>
                  <div className="font-black text-sm">Clark Kent</div>
                  <div className="text-xs font-bold text-muted-foreground">clark@dailyplanet.com</div>
               </div>
             </div>
             <div className="flex items-center gap-2">
               <Select defaultValue="editor">
                 <SelectTrigger className="w-[110px] h-8 bg-white dark:bg-card font-black">
                   <SelectValue placeholder="Role" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectGroup>
                     <SelectItem value="admin">Admin</SelectItem>
                     <SelectItem value="editor">Editor</SelectItem>
                     <SelectItem value="viewer">Viewer</SelectItem>
                   </SelectGroup>
                 </SelectContent>
               </Select>
               <Button variant="ghost" size="icon" className="hover:bg-red-100 text-red-500 hover:text-red-600 rounded-[var(--radius-comic)] border-[2px] border-transparent hover:border-red-500">
                 <Trash2 className="h-4 w-4" />
               </Button>
             </div>
          </div>
        </div>
      </div>
    ),
    code: `import { Button, Avatar, AvatarFallback, Badge, Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "c-comic-ui";
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
}`
  },
  {
    name: "API Key Management",
    category: "SaaS & Billing",
    description: "Panel to reveal, revoke, or generate new API credentials.",
    preview: (
      <div className="w-full max-w-xl bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black dark:text-foreground">
        <div className="flex items-center gap-2 mb-6 border-b-[3px] border-border pb-4">
           <Key className="h-6 w-6 text-yellow-500" />
           <h3 className="font-black text-xl uppercase">API Keys</h3>
        </div>
        <div className="bg-gray-50 p-4 border-[3px] border-border rounded-[var(--radius-comic)] mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
           <div className="flex flex-col gap-1 w-full max-w-[300px]">
             <div className="font-black text-sm flex items-center justify-between mb-1">
               Production Key
               <Badge className="bg-green-400 text-black dark:text-foreground border-[2px] border-black dark:border-border text-[10px] h-5 px-1 py-0">Active</Badge>
             </div>
             <div className="flex gap-2 w-full">
               <Input className="font-mono text-xs border-[2px] h-9 bg-white dark:bg-card" placeholder="sk_live_················" readOnly />
               <Button size="icon" className="h-9 w-9 shrink-0 bg-white dark:bg-card text-black dark:text-foreground border-[2px] hover:bg-gray-100 shadow-[var(--shadow-comic-sm)]">
                 <Copy className="h-4 w-4" />
               </Button>
             </div>
           </div>
           <Button variant="destructive" className="font-black bg-red-500 text-white border-[3px] border-black dark:border-border hover:bg-red-600 mt-2 md:mt-0">Revoke</Button>
        </div>
        <Button className="font-black bg-black text-white hover:bg-gray-800 border-[3px] border-black dark:border-border w-full border-dashed">
          <Plus className="h-4 w-4 mr-2" />
          Generate New Key
        </Button>
      </div>
    ),
    code: `import { Badge, Input, Button } from "c-comic-ui";
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
}`
  },

  {
    name: "Model Switcher",
    category: "AI & LLM",
    description: "A playful, heavy-bordered dropdown to select active LLM models.",
    preview: (
      <div className="bg-[#a78bfa] p-8 w-full max-w-sm rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] flex items-center justify-center">
        <Select defaultValue="gemini">
          <SelectTrigger className="w-[180px] bg-white dark:bg-card font-black hover:-translate-y-1 transition-transform">
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Creative Models</SelectLabel>
              <SelectItem value="gemini">Gemini 1.5 Pro</SelectItem>
              <SelectItem value="claude">Claude 3.5 Sonnet</SelectItem>
              <SelectItem value="gpt4o">GPT-4o</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    ),
    code: `import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "c-comic-ui";

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
}`
  },
  {
    name: "Chat Bubbles",
    category: "AI & LLM",
    description: "Action-packed text bubbles distinguishing User and Assistant.",
    preview: (
      <div className="w-full max-w-md bg-white dark:bg-card border-[3px] border-border rounded-[var(--radius-comic)] p-4 shadow-[var(--shadow-comic)] flex flex-col gap-4">
        <div className="flex gap-3 justify-end w-full">
          <div className="bg-yellow-400 p-4 border-[3px] border-border rounded-[var(--radius-comic)] rounded-tr-sm max-w-[80%] shadow-[var(--shadow-comic-sm)]">
            <p className="font-bold text-sm text-black dark:text-foreground">Can you explain quantum physics like it's a comic book?</p>
          </div>
          <div className="shrink-0 pt-1">
            <div className="w-10 h-10 rounded-full border-[3px] border-border bg-white dark:bg-card flex items-center justify-center overflow-hidden shadow-[var(--shadow-comic-sm)]">
               <User className="h-6 w-6 text-black dark:text-foreground" />
            </div>
          </div>
        </div>
        <div className="flex gap-3 w-full">
          <div className="shrink-0 pt-1">
            <div className="w-10 h-10 rounded-full border-[3px] border-border bg-blue-400 flex items-center justify-center shadow-[var(--shadow-comic-sm)]">
              <Bot className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="bg-gray-100 p-4 border-[3px] border-border rounded-[var(--radius-comic)] rounded-tl-sm max-w-[80%] relative shadow-[var(--shadow-comic-sm)]">
             <p className="font-bold text-sm text-black dark:text-foreground">KA-POW! The atom is split! It's both a particle and a wave!</p>
          </div>
        </div>
      </div>
    ),
    code: `// Import your components from "c-comic-ui";
import { User, Bot } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`
  },
  {
    name: "Code Block (with copy)",
    category: "AI & LLM",
    description: "Syntax highlighting block with a comic-style copy button.",
    preview: (
      <div className="w-full max-w-lg bg-black border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] overflow-hidden relative">
        <div className="w-full bg-[#e5e7eb] border-b-[3px] border-border px-4 py-2 flex justify-between items-center">
          <span className="font-black text-xs uppercase text-black dark:text-foreground">Python</span>
          <button className="bg-white dark:bg-card border-[2px] border-border p-1 rounded hover:-translate-y-0.5 hover:shadow-[var(--shadow-comic-sm)] transition-all text-black dark:text-foreground" title="Copy code">
            <Copy className="h-3 w-3" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto text-sm font-mono text-green-400">
          <div><span className="text-pink-400">def</span> <span className="text-blue-300">save_the_day</span>():</div>
          <div className="pl-4"><span className="text-pink-400">print</span>(<span className="text-yellow-300">"Hero arriving!"</span>)</div>
        </div>
      </div>
    ),
    code: `// Import your components from "c-comic-ui";
import { Copy } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`
  },
  {
    name: "Prompt Templates",
    category: "AI & LLM",
    description: "Grid of starting prompts for user discovery.",
    preview: (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {id: 1, title: "Brainstorming", desc: "Generate 5 superpower ideas", icon: Sparkles, color: "bg-yellow-400"},
          {id: 2, title: "Refactoring", desc: "Rewrite this villain's code", icon: SquarePen, color: "bg-blue-400"}
        ].map((pt) => {
          const Icon = pt.icon
          return (
            <button key={pt.id} className="w-full text-left bg-white dark:bg-card border-[3px] border-border p-4 rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] hover:-translate-y-1 hover:shadow-[var(--shadow-comic)] transition-all flex flex-col gap-2 group">
              <div className={`w-10 h-10 ${pt.color} border-[3px] border-border rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon className="h-5 w-5 text-black dark:text-foreground" />
              </div>
              <div>
                <div className="font-black text-black dark:text-foreground">{pt.title}</div>
                <div className="text-sm font-bold text-muted-foreground">{pt.desc}</div>
              </div>
            </button>
          )
        })}
      </div>
    ),
    code: `// Import your components from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`
  },
  {
    name: "Conversation Sidebar",
    category: "AI & LLM",
    description: "History list for AI chats with bold active states.",
    preview: (
      <div className="w-64 bg-[#fbbf24] border-[3px] border-border rounded-[var(--radius-comic)] overflow-hidden shadow-[var(--shadow-comic)] flex flex-col h-[300px]">
        <div className="p-4 border-b-[3px] border-border bg-white dark:bg-card flex justify-between items-center z-10">
          <span className="font-black uppercase text-sm text-black dark:text-foreground">Chat History</span>
          <button className="bg-black text-white p-1 border-[2px] border-black dark:border-border rounded hover:-translate-y-0.5 hover:shadow-[var(--shadow-comic-sm)] transition-all">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
          {["Secret Base Defense", "Gadget Blueprints", "Villain Origins"].map((c, i) => (
             <div key={i} className={`p-3 rounded-md font-bold text-sm flex items-center gap-2 cursor-pointer border-[3px] border-transparent transition-all ${i === 0 ? 'bg-white dark:bg-card border-black dark:border-border shadow-[var(--shadow-comic-sm)] text-black dark:text-foreground' : 'hover:bg-yellow-300 text-black dark:text-foreground/80'}`}>
               <MessageSquare className="h-4 w-4 shrink-0" />
               <span className="truncate">{c}</span>
             </div>
          ))}
        </div>
      </div>
    ),
    code: `// Import your components from "c-comic-ui";
import { Plus, MessageSquare } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`
  },
  {
    name: "Streaming Text & Indicators",
    category: "AI & LLM",
    description: "Loading states and token usage specifically designed for LLMs.",
    preview: (
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div className="bg-white dark:bg-card border-[3px] border-border p-4 rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)]">
           <div className="font-bold text-black dark:text-foreground flex items-center gap-1">
             <span>Generating plans</span>
             <span className="flex gap-0.5">
               <span className="animate-bounce">.</span>
               <span className="animate-bounce delay-75">.</span>
               <span className="animate-bounce delay-150">.</span>
             </span>
           </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-black text-white border-[2px] border-black dark:border-border px-3 py-1 font-black gap-1 text-sm">
            <Hash className="h-3 w-3" />
            1,204 tokens
          </Badge>
          <Badge className="bg-white dark:bg-card text-black dark:text-foreground border-[2px] border-black dark:border-border px-3 py-1 font-bold text-sm">
            $0.02 cost
          </Badge>
        </div>
      </div>
    ),
    code: `import { Badge } from "c-comic-ui";
import { Hash } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
    </>
  );
}`
  },
  {
    name: "Regenerate/Edit Prompt Actions",
    category: "AI & LLM",
    description: "Pill-shaped toolbars below assistant messages for quick actions.",
    preview: (
      <div className="w-max bg-white dark:bg-card border-[3px] border-border p-1.5 rounded-full shadow-[var(--shadow-comic-sm)] flex gap-1 items-center">
        <Button variant="ghost" size="sm" className="rounded-full font-black h-8 px-4 text-black dark:text-foreground hover:bg-gray-100 hover:text-black dark:text-foreground">
           <RefreshCcw className="h-4 w-4 mr-2" />
           Regenerate
        </Button>
        <div className="w-[3px] h-5 bg-border rounded-full"></div>
        <Button variant="ghost" size="sm" className="rounded-full font-black h-8 px-4 text-black dark:text-foreground hover:bg-gray-100 hover:text-black dark:text-foreground">
           <SquarePen className="h-4 w-4 mr-2" />
           Edit
        </Button>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { RefreshCcw, SquarePen } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Loaders & Progress",
    category: "Feedback",
    description: "Indicate loading state with spinners, skeletons, or progress bars.",
    preview: (
      <div className="w-full max-w-sm flex flex-col gap-6 p-6 bg-white dark:bg-card rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black dark:text-foreground">
        <div className="flex items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="font-black">Loading heroes...</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-black text-sm uppercase">Mission Progress</span>
          <Progress value={65} indicatorColor="bg-yellow-400" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full border-[3px] border-border" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px] border-[2px] border-border" />
            <Skeleton className="h-4 w-[150px] border-[2px] border-border" />
          </div>
        </div>
      </div>
    ),
    code: `import { Progress, Skeleton } from "c-comic-ui";
import { Loader2 } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Progress />
      <Skeleton />
    </>
  );
}`
  },
  {
    name: "Toast Notifications",
    category: "Feedback",
    description: "Brief, non-interruptive notifications that slide in.",
    preview: (
      <Button
        className="bg-blue-400 text-white font-bold"
        onClick={() => toast("Hero deployed!", {
          description: "Captain Thunder is en route to the scene.",
          action: { label: "Undo", onClick: () => console.log("Undo") }
        })}
      >
        Trigger Toast
      </Button>
    ),
    code: `import { Button } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Alerts",
    category: "Feedback",
    description: "Important messages that deserve the user's attention.",
    preview: (
      <div className="w-full max-w-md flex flex-col gap-4">
        <Alert variant="warning">
          <Terminal className="h-5 w-5" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You are about to enter a high-danger zone.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
        <Alert variant="success">
          <CheckCircle2 className="h-5 w-5" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Villain captured successfully!
          </AlertDescription>
        </Alert>
      </div>
    ),
    code: `import { Alert, AlertTitle, AlertDescription } from "c-comic-ui";
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
}`
  },
  {
    name: "Confirmation Dialog",
    category: "Feedback",
    description: "Interruptive dialog for destructive actions.",
    preview: (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" className="bg-red-500 font-bold">Delete Lair</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your superhero lair and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-bold border-[2px] border-border">Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 font-bold border-[3px] border-black dark:border-border text-white hover:bg-red-600">Yes, delete lair</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
    code: `import { AlertDialog, AlertDialogTrigger, Button, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "c-comic-ui";

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
}`
  },
  {
    name: "Inline Validation",
    category: "Forms",
    description: "Show validation errors inline with form inputs.",
    preview: (
      <div className="w-full max-w-sm bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black dark:text-foreground">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="hero-name" className="font-black text-red-500">Hero Name</Label>
          <Input id="hero-name" defaultValue="$$$" className="border-red-500 border-[3px] focus-visible:ring-red-500" />
          <p className="text-[13px] font-bold text-red-500 flex items-center gap-1 mt-1">
            <AlertCircle className="h-4 w-4" />
            Special characters are not allowed.
          </p>
        </div>
      </div>
    ),
    code: `import { Label, Input } from "c-comic-ui";
import { AlertCircle } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Label />
      <Input />
    </>
  );
}`
  },
  {
    name: "Data Table",
    category: "Complex Data",
    description: "Highly structured table for sorting, filtering, and pagination.",
    preview: (
      <div className="w-full max-w-2xl bg-white dark:bg-card p-4 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black dark:text-foreground">
        <Table>
          <TableCaption>A list of recent hero activities.</TableCaption>
          <TableHeader>
            <TableRow className="bg-yellow-400">
              <TableHead className="w-[100px] text-black dark:text-foreground">ID</TableHead>
              <TableHead className="text-black dark:text-foreground">Hero</TableHead>
              <TableHead className="text-black dark:text-foreground">Status</TableHead>
              <TableHead className="text-right text-black dark:text-foreground">Missions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">#001</TableCell>
              <TableCell>Captain Thunder</TableCell>
              <TableCell><Badge className="bg-green-400 text-black dark:text-foreground border-[2px] border-black dark:border-border">Active</Badge></TableCell>
              <TableCell className="text-right font-black">250</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">#002</TableCell>
              <TableCell>Shadow Strike</TableCell>
              <TableCell><Badge className="bg-red-400 text-white border-[2px] border-black dark:border-border">MIA</Badge></TableCell>
              <TableCell className="text-right font-black">12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">#003</TableCell>
              <TableCell>Laser Fist</TableCell>
              <TableCell><Badge className="bg-blue-400 text-white border-[2px] border-black dark:border-border">Training</Badge></TableCell>
              <TableCell className="text-right font-black">42</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
    code: `import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell, Badge } from "c-comic-ui";

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
}`
  },
  {
    name: "List View (Activity)",
    category: "Complex Data",
    description: "Virtualization-ready list style for tracking activity or generic data.",
    preview: (
      <div className="w-full max-w-md bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black dark:text-foreground">
        <h4 className="font-black text-xl mb-4 border-b-[3px] border-border pb-2">Hero Activity Feed</h4>
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 items-start pb-4 border-b-[2px] border-border last:border-0 last:pb-0">
              <Avatar className="h-10 w-10 border-[3px] border-border">
                <AvatarFallback className="bg-yellow-400 text-black dark:text-foreground font-bold">H</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-bold text-base leading-none">Defeated Villain X</span>
                <span className="text-sm font-bold text-muted-foreground mt-1">2 hours ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    code: `import { Avatar, AvatarFallback } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Avatar />
      <AvatarFallback />
    </>
  );
}`
  },
  {
    name: "Stats / KPI Block",
    category: "Complex Data",
    description: "Important high-level metrics for dashboard homepages.",
    preview: (
      <div className="bg-red-400 w-full max-w-sm p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-white flex gap-4 items-center">
        <div className="p-3 bg-white dark:bg-card text-black dark:text-foreground rounded-full border-[3px] border-border">
          <Target className="h-6 w-6" />
        </div>
        <div>
          <div className="text-sm font-black uppercase text-black dark:text-foreground drop-shadow-sm">Threat Level</div>
          <div className="text-3xl font-black drop-shadow-md">CRITICAL</div>
        </div>
      </div>
    ),
    code: `// Import your components from "c-comic-ui";
import { Target } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`
  },
  {
    name: "Bar Chart",
    category: "Complex Data",
    description: "Integrated charts (recharts) with bold comic colors.",
    preview: (
      <div className="w-full h-[250px] bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] flex justify-center items-center">
        <div className="w-full h-full flex flex-col">
          <h4 className="font-black text-lg text-black dark:text-foreground mb-4 uppercase">City Crime Rate</h4>
          <div className="flex-1 w-full relative h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[{name: 'Jan', uv: 400}, {name: 'Feb', uv: 300}, {name: 'Mar', uv: 200}, {name: 'Apr', uv: 278}, {name: 'May', uv: 189}]}>
                <XAxis dataKey="name" stroke="#000" tick={{fontWeight: 'bold', fill: '#000'}} />
                <Tooltip cursor={{fill: '#e5e7eb'}} contentStyle={{border: '3px solid #000', borderRadius: 'var(--radius-comic)', fontWeight: 'bold'}} />
                <Bar dataKey="uv" fill="#facc15" stroke="#000" strokeWidth={3} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    ),
    code: `// Import your components from "c-comic-ui";
import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar } from "recharts";

export default function App() {
  return (
    // the corresponding elements
    <>
      
    </>
  );
}`
  },
  {
    name: "Empty State",
    category: "Complex Data",
    description: "Playful empty states for lists with no data.",
    preview: (
      <div className="w-full max-w-lg p-12 bg-white dark:bg-card rounded-[var(--radius-comic)] border-[4px] border-dashed border-border flex flex-col items-center justify-center text-center mx-auto">
        <div className="h-20 w-20 bg-yellow-400 rounded-full border-[3px] border-border flex items-center justify-center mb-6 shadow-[var(--shadow-comic-sm)] hover:-translate-y-1 transition-transform">
          <FileBox className="h-10 w-10 text-black dark:text-foreground" />
        </div>
        <h3 className="text-2xl font-black text-black dark:text-foreground uppercase">No Missions Found</h3>
        <p className="text-muted-foreground font-bold mt-2 text-lg">Looks like the city is safe today. Take a break, hero!</p>
        <Button className="mt-8 font-bold shadow-[var(--shadow-comic)] border-[3px] py-6 px-8 text-xl text-black dark:text-foreground" variant="default">Refresh Radar</Button>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";
import { FileBox } from "lucide-react";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`
  },
  {
    name: "Accordion",
    category: "Layout/Structure",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    preview: (
      <div className="w-full max-w-sm bg-[#FFE135] p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black dark:text-foreground shadow-[var(--shadow-comic)]">
        <Accordion type="single" collapsible className="w-full bg-white dark:bg-card border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)]">
          <AccordionItem value="item-1" className="border-border border-b-[3px]">
            <AccordionTrigger className="px-4 font-black hover:bg-[#FF90E8] transition-colors rounded-t-[var(--radius-comic)-3px]">Is it accessible?</AccordionTrigger>
            <AccordionContent className="px-4 font-bold bg-white dark:bg-card">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-border border-b-[3px]">
            <AccordionTrigger className="px-4 font-black hover:bg-[#FF90E8] transition-colors">Is it styled?</AccordionTrigger>
            <AccordionContent className="px-4 font-bold bg-white dark:bg-card">Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="px-4 font-black hover:bg-[#FF90E8] transition-colors rounded-b-[var(--radius-comic)-3px]">Is it animated?</AccordionTrigger>
            <AccordionContent className="px-4 font-bold bg-white dark:bg-card">Yes. It&apos;s animated by default.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),
    code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "c-comic-ui";

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
}`
  },
  {
    name: "Tabs",
    category: "Layout/Structure",
    description: "A set of layered sections of content, displayed one at a time.",
    preview: (
      <div className="w-full max-w-sm bg-[#4ade80] p-6 rounded-[var(--radius-comic)] border-[3px] border-border text-black dark:text-foreground shadow-[var(--shadow-comic)]">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full flex mb-4 bg-white dark:bg-card border-[3px] border-border rounded-[var(--radius-comic)-3px] p-1 shadow-[var(--shadow-comic-sm)]">
            <TabsTrigger value="account" className="flex-1 font-black rounded-sm data-[state=active]:bg-[#FF90E8] data-[state=active]:border-[2px] data-[state=active]:border-black dark:border-border transition-all">Account</TabsTrigger>
            <TabsTrigger value="password" className="flex-1 font-black rounded-sm data-[state=active]:bg-[#FF90E8] data-[state=active]:border-[2px] data-[state=active]:border-black dark:border-border transition-all">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-6 bg-white dark:bg-card border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)]">
            <p className="font-bold text-lg">Make changes to your account here.</p>
            <Button className="mt-4 w-full font-black bg-white dark:bg-card hover:bg-gray-100 text-black dark:text-foreground border-[3px] shadow-[var(--shadow-comic-sm)]">Save changes</Button>
          </TabsContent>
          <TabsContent value="password" className="p-6 bg-white dark:bg-card border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)]">
            <p className="font-bold text-lg">Change your password here.</p>
            <Button className="mt-4 w-full font-black bg-white dark:bg-card hover:bg-gray-100 text-black dark:text-foreground border-[3px] shadow-[var(--shadow-comic-sm)]">Update password</Button>
          </TabsContent>
        </Tabs>
      </div>
    ),
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent, Button } from "c-comic-ui";

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
}`
  },
  {
    name: "Sheet / Side Panel",
    category: "Layout/Structure",
    description: "Extends from the edges of the window to display mobile panels, drawers, or dialogs.",
    preview: (
      <div className="w-full h-full flex items-center justify-center p-4">
        <Sheet>
          <SheetTrigger asChild><Button variant="default">Open Sidebar</Button></SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>App Settings</SheetTitle>
              <SheetDescription>Configure your app layout settings here.</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">System Name</Label>
                <Input id="name" defaultValue="C-Comic App" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    ),
    code: `import { Sheet, SheetTrigger, Button, SheetContent, SheetHeader, SheetTitle, SheetDescription, Label, Input, SheetFooter } from "c-comic-ui";

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
}`
  },
  {
    name: "Resizable Panels",
    category: "Layout/Structure",
    description: "Accessible resizable panel groups and layouts.",
    preview: (
      <div className="w-full h-64 p-2 bg-white dark:bg-card rounded-[var(--radius-comic)] border-[3px] border-border text-black dark:text-foreground shadow-[var(--shadow-comic)]">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={30} minSize={20}>
            <div className="flex h-full items-center justify-center p-6 bg-card text-card-foreground">
              <span className="font-bold text-center">Sidebar Content</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full flex-col p-6 bg-background text-foreground">
              <span className="font-bold border-b-[3px] border-border pb-2 mb-4">Main Content Window</span>
              <p className="text-sm font-semibold opacity-80">Drag the thick comic handle to see the resizing layout!</p>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    ),
    code: `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <ResizablePanelGroup />
      <ResizablePanel />
      <ResizableHandle />
    </>
  );
}`
  },
  {
    name: "Drawer (Mobile Panel)",
    category: "Layout/Structure",
    description: "A drawer component for React, typically used on mobile for bottom-up dialogs.",
    preview: (
      <div className="w-full flex items-center justify-center p-4">
        <Drawer>
          <DrawerTrigger asChild><Button variant="secondary">Open Drawer</Button></DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0 flex flex-col gap-4">
                <Button>Action</Button>
                <DrawerClose asChild><Button variant="destructive" className="w-full">Cancel</Button></DrawerClose>
              </div>
              <DrawerFooter />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    ),
    code: `import { Drawer, DrawerTrigger, Button, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose, DrawerFooter } from "c-comic-ui";

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
}`
  },

  {
    name: "Button",
    category: "Core/General",
    description: "Displays a button or a component that looks like a button.",
    preview: (
      <div className="flex gap-4 flex-wrap">
        <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">Action Blue</Button>
        <Button variant="secondary" className="bg-yellow-400 hover:bg-yellow-500 text-black dark:text-foreground">Zap Yellow</Button>
        <Button variant="destructive" className="bg-red-500 hover:bg-red-600 text-white">Pow Red</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    ),
    code: `import { Button } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Button />
    </>
  );
}`,
  },
  {
    name: "Input",
    category: "Forms",
    description: "Displays a form input field or a component that looks like an input field.",
    preview: (
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" className="text-black dark:text-foreground bg-white dark:bg-card" />
        <Button type="submit">Subscribe</Button>
      </div>
    ),
    code: `import { Input, Button } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Input />
      <Button />
    </>
  );
}`
  },
  {
    name: "Badge",
    category: "Data Display",
    description: "Displays a badge or a component that looks like a badge.",
    preview: (
      <div className="flex gap-4 items-center">
        <Badge className="bg-blue-500 text-white border-[2px] border-black dark:border-border">New</Badge>
        <Badge className="bg-yellow-400 text-black dark:text-foreground border-[2px] border-black dark:border-border">Beta</Badge>
        <Badge className="bg-red-500 text-white border-[2px] border-black dark:border-border">Warning</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    code: `import { Badge } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Badge />
    </>
  );
}`
  },
  {
    name: "Avatar",
    category: "Data Display",
    description: "An image element with a fallback for representing the user.",
    preview: (
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="/headshot-1.jpg" alt="@user" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/headshot-2.jpg" alt="@user2" />
          <AvatarFallback>BM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>PO</AvatarFallback>
        </Avatar>
      </div>
    ),
    code: `import { Avatar, AvatarImage, AvatarFallback } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Avatar />
      <AvatarImage />
      <AvatarFallback />
    </>
  );
}`
  },
  {
    name: "Checkbox & Label",
    category: "Forms",
    description: "A control that allows the user to toggle between checked and not checked.",
    preview: (
      <div className="flex items-center space-x-2 bg-white dark:bg-card p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black dark:text-foreground">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-black dark:text-foreground">Accept terms and conditions</Label>
      </div>
    ),
    code: `import { Checkbox, Label } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Checkbox />
      <Label />
    </>
  );
}`
  },
  {
    name: "Switch",
    category: "Forms",
    description: "A control that allows the user to toggle between checked and not checked.",
    preview: (
      <div className="flex items-center space-x-2 bg-white dark:bg-card p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black dark:text-foreground">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode" className="text-black dark:text-foreground">Airplane Mode</Label>
      </div>
    ),
    code: `import { Switch, Label } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Switch />
      <Label />
    </>
  );
}`
  },
  {
    name: "Separator",
    category: "Core/General",
    description: "Visually or semantically separates content.",
    preview: (
      <div className="w-full max-w-sm bg-white dark:bg-card p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black dark:text-foreground">
        <div className="text-sm font-bold uppercase tracking-tight">Radix Primitives</div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm font-semibold">
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    ),
    code: `import { Separator } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Separator />
    </>
  );
}`
  },
  {
    name: "Skeleton",
    category: "Feedback",
    description: "Use to show a placeholder while content is loading.",
    preview: (
      <div className="flex items-center space-x-4 bg-white dark:bg-card p-4 rounded-[var(--radius-comic)] border-[3px] border-border">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    ),
    code: `import { Skeleton } from "c-comic-ui";

export default function App() {
  return (
    // the corresponding elements
    <>
      <Skeleton />
    </>
  );
}`
  },
  {
    name: "Alert",
    category: "Feedback",
    description: "Displays a callout for user attention.",
    preview: (

      <Alert className="bg-white dark:bg-card border-[3px] border-black dark:border-border p-4 rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] w-full max-w-sm">
        <Terminal className="h-5 w-5" />
        <AlertTitle className="font-black uppercase">Heads up!</AlertTitle>
        <AlertDescription className="font-bold text-muted-foreground">
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
    
    ),
    code: `import { Alert, AlertTitle, AlertDescription } from "c-comic-ui";
import { Terminal } from "lucide-react";

export default function App() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app.</AlertDescription>
    </Alert>
  );
}`
  },
  {
    name: "Alert Dialog",
    category: "Feedback",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    preview: (

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="font-black border-[3px]">Show Alert Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)]">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-black uppercase">Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription className="font-bold">
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="font-black uppercase border-[3px]">Cancel</AlertDialogCancel>
            <AlertDialogAction className="font-black uppercase border-[3px]">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    
    ),
    code: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "c-comic-ui";
import { Button } from "c-comic-ui";

export default function App() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild><Button>Show</Button></AlertDialogTrigger>
      ...
    </AlertDialog>
  );
}`
  },
  {
    name: "Card",
    category: "Data Display",
    description: "Displays a card with header, content, and footer.",
    preview: (

      <Card className="w-full max-w-sm border-[3px] border-black dark:border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic)]">
        <div className="p-6 pb-2">
          <div className="font-black text-2xl uppercase tracking-tight">Create project</div>
          <div className="text-sm font-bold text-muted-foreground">Deploy your new project in one-click.</div>
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label className="font-black uppercase">Name</Label>
              <Input className="border-[3px]" placeholder="Name of your project" />
            </div>
          </div>
        </div>
        <div className="p-6 pt-0 flex justify-between">
          <Button variant="outline" className="border-[3px] font-black uppercase">Cancel</Button>
          <Button className="border-[3px] font-black uppercase">Deploy</Button>
        </div>
      </Card>
    
    ),
    code: `import { Card } from "c-comic-ui";

export default function App() {
  return (
    <Card>
      ...
    </Card>
  );
}`
  },
  {
    name: "Dialog",
    category: "Overlay",
    description: "A window overlaid on either the primary window or another dialog window.",
    preview: (

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="font-black border-[3px] uppercase">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-black uppercase text-xl">Edit Profile</DialogTitle>
            <DialogDescription className="font-bold text-muted-foreground">
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right font-black uppercase">Name</Label>
              <Input className="col-span-3 border-[3px]" defaultValue="Pedro Duarte" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="font-black uppercase border-[3px]">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    
    ),
    code: `import { Dialog, DialogContent, DialogTrigger } from "c-comic-ui";

export default function App() {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>...</DialogContent>
    </Dialog>
  );
}`
  },
  {
    name: "Drawer",
    category: "Overlay",
    description: "A drawer component for React.",
    preview: (

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="font-black border-[3px] uppercase">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="border-t-[3px] border-black dark:border-border rounded-t-[var(--radius-comic-lg)] shadow-[var(--shadow-comic-lg)]">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="font-black uppercase text-2xl">Move Goal</DrawerTitle>
              <DrawerDescription className="font-bold text-muted-foreground">Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 items-center justify-center flex flex-col gap-4">
              <Button className="rounded-full h-12 w-12 shrink-0 bg-yellow-400 text-black border-[3px] shadow-[var(--shadow-comic-sm)]">
                <Minus className="h-6 w-6" />
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-black tracking-tighter">350</div>
                <div className="text-[0.70rem] uppercase font-bold text-muted-foreground">Calories/day</div>
              </div>
              <Button className="rounded-full h-12 w-12 shrink-0 bg-yellow-400 text-black border-[3px] shadow-[var(--shadow-comic-sm)]">
                <Plus className="h-6 w-6" />
              </Button>
            </div>
            <DrawerFooter>
              <Button className="font-black uppercase border-[3px]">Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline" className="font-black uppercase border-[3px]">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    
    ),
    code: `import { Drawer, DrawerContent, DrawerTrigger } from "c-comic-ui";

export default function App() {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>...</DrawerContent>
    </Drawer>
  );
}`
  },
  {
    name: "Progress",
    category: "Feedback",
    description: "Displays an indicator showing the completion progress of a task.",
    preview: (

      <div className="w-full max-w-md bg-white dark:bg-card p-6 border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] flex flex-col gap-4">
        <Label className="font-black uppercase tracking-tight text-lg flex items-center justify-between">
          <span>Loading Hero Stats...</span>
          <span className="text-blue-500">60%</span>
        </Label>
        <Progress value={60} className="h-6 border-[3px] border-black dark:border-border bg-yellow-100" />
      </div>
    
    ),
    code: `import { Progress } from "c-comic-ui";

export default function App() {
  return (
    <Progress value={60} />
  );
}`
  },
  {
    name: "Resizable",
    category: "Layout/Structure",
    description: "Accessible resizable panel groups and layouts with keyboard support.",
    preview: (

      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-md rounded-[var(--radius-comic)] border-[3px] border-black dark:border-border min-h-[200px] shadow-[var(--shadow-comic)] bg-white dark:bg-card"
      >
        <ResizablePanel defaultSize={50} className="flex items-center justify-center p-6 bg-blue-50">
          <span className="font-black uppercase">One</span>
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-black dark:bg-border" />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25} className="flex items-center justify-center p-6 bg-yellow-50">
              <span className="font-black uppercase">Two</span>
            </ResizablePanel>
            <ResizableHandle className="h-2 bg-black dark:bg-border" />
            <ResizablePanel defaultSize={75} className="flex items-center justify-center p-6 bg-green-50">
              <span className="font-black uppercase">Three</span>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    
    ),
    code: `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "c-comic-ui";

export default function App() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  );
}`
  },
  {
    name: "Select",
    category: "Forms",
    description: "Displays a list of options for the user to pick from.",
    preview: (

      <Select>
        <SelectTrigger className="w-[180px] border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] font-bold bg-white dark:bg-card">
          <SelectValue placeholder="Select a hero" />
        </SelectTrigger>
        <SelectContent className="border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)]">
          <SelectGroup>
            <SelectLabel className="font-black uppercase text-xs">Marvel</SelectLabel>
            <SelectItem value="spiderman" className="font-bold">Spider-Man</SelectItem>
            <SelectItem value="ironman" className="font-bold">Iron Man</SelectItem>
            <SelectItem value="thor" className="font-bold">Thor</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel className="font-black uppercase text-xs">DC</SelectLabel>
            <SelectItem value="batman" className="font-bold">Batman</SelectItem>
            <SelectItem value="superman" className="font-bold">Superman</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    
    ),
    code: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "c-comic-ui";

export default function App() {
  return (
    <Select>
      <SelectTrigger><SelectValue placeholder="Theme" /></SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
      </SelectContent>
    </Select>
  );
}`
  },
  {
    name: "Sheet",
    category: "Overlay",
    description: "Extends the Dialog component to display content that complements the main viewport.",
    preview: (

      <div className="grid grid-cols-2 gap-2">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outline" className="font-black uppercase border-[3px] w-full">{side}</Button>
            </SheetTrigger>
            <SheetContent side={side} className="border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-lg)]">
              <SheetHeader>
                <SheetTitle className="font-black uppercase text-2xl">Edit profile</SheetTitle>
                <SheetDescription className="font-bold text-muted-foreground">
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right font-black uppercase">Name</Label>
                  <Input id="name" value="Pedro Duarte" className="col-span-3 border-[3px]" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className="font-black border-[3px] uppercase">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    
    ),
    code: `import { Sheet, SheetContent, SheetTrigger } from "c-comic-ui";

export default function App() {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>...</SheetContent>
    </Sheet>
  );
}`
  },
  {
    name: "Sonner",
    category: "Feedback",
    description: "An opinionated toast component for React.",
    preview: (

      <Button
        variant="outline"
        className="font-black border-[3px] uppercase shadow-[var(--shadow-comic-sm)]"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    
    ),
    code: `import { toast } from "sonner";
import { Button } from "c-comic-ui";

export default function App() {
  return (
    <Button onClick={() => toast("Hello World")}>Show Toast</Button>
  );
}`
  },
  {
    name: "Table",
    category: "Data Display",
    description: "A responsive table component.",
    preview: (

      <div className="w-full max-w-2xl bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] overflow-hidden shadow-[var(--shadow-comic)]">
        <Table>
          <TableCaption className="font-bold text-muted-foreground font-xl mb-4">A list of your recent invoices.</TableCaption>
          <TableHeader className="bg-gray-100 border-b-[3px] border-black dark:border-border">
            <TableRow>
              <TableHead className="w-[100px] font-black uppercase text-black">Invoice</TableHead>
              <TableHead className="font-black uppercase text-black">Status</TableHead>
              <TableHead className="font-black uppercase text-black">Method</TableHead>
              <TableHead className="text-right font-black uppercase text-black">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="font-bold">
            <TableRow className="border-b-[2px] border-black/20 hover:bg-yellow-50">
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">

export default function ComponentsPage50.00</TableCell>
            </TableRow>
            <TableRow className="border-b-[2px] border-black/20 hover:bg-yellow-50">
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    
    ),
    code: `import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "c-comic-ui";

export default function App() {
  return (
    <Table>
      <TableCaption>A list of invoices.</TableCaption>
      <TableHeader>
        <TableRow><TableHead>Invoice</TableHead></TableRow>
      </TableHeader>
      <TableBody>
        <TableRow><TableCell>INV001</TableCell></TableRow>
      </TableBody>
    </Table>
  );
}`
  }
]


export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredComponents = componentsList.filter(comp =>
    comp.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const categories = Array.from(new Set(filteredComponents.map(c => c.category)))

  return (
    <div className="container mx-auto px-4 max-w-6xl py-12 flex flex-col gap-12 text-foreground">
      <div className="bg-card text-white p-12 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)]">
        <TypographyH1>Components</TypographyH1>
        <TypographyP className="text-white/90 text-lg">
          Browse the collection. Ready to drop into your setup (categorized for ease of use).
        </TypographyP>
        <div className="relative mt-8 max-w-md">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input 
            className="pl-10 text-black dark:text-foreground border-[3px] border-black dark:border-border bg-white dark:bg-card shadow-[var(--shadow-comic-sm)] h-12 text-lg" 
            placeholder="Search components..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-16">
        {categories.map(category => (
          <div key={category} className="flex flex-col gap-8">
            <TypographyH2 className="border-b-[4px] pb-4">{category}</TypographyH2>
            
            <div className="grid gap-12 lg:grid-cols-2">
            {filteredComponents.filter(c => c.category === category).map((component) => (
              <div key={component.name} className={`flex flex-col gap-4 ${component.name === "Mega Menu" ? "lg:col-span-2" : ""}`}>
                <div className="text-2xl font-bold uppercase">{component.name}</div>
                <TypographyP className="text-muted-foreground my-0 pb-2">{component.description}</TypographyP>
                
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="p-8 border-[3px] border-border rounded-[var(--radius-comic)] bg-background shadow-[var(--shadow-comic)] flex items-center justify-center min-h-[150px] bg-halftone">
                    <div className={`bg-white dark:bg-card p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] w-full flex justify-center text-black dark:text-foreground ${component.name === "Mega Menu" || component.name === "Pricing Table" ? "max-w-full" : "max-w-2xl"}`}>
                      {component.preview}
                    </div>
                  </TabsContent>
                  <TabsContent value="code" className="text-white">
                    <div className="bg-black p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] overflow-x-auto relative">
                      <pre className="text-sm font-mono whitespace-pre-wrap break-words">{component.code}</pre>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            ))}
            </div>
          </div>
        ))}

        {filteredComponents.length === 0 && (
          <div className="p-12 text-center border-[3px] border-border border-dashed rounded-[var(--radius-comic)]">
            <TypographyH2>No components found.</TypographyH2>
          </div>
        )}
      </div>
    </div>
  )
}
