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

type ComponentItem = {
  name: string;
  category: "Core/General" | "Forms" | "Data Display" | "Feedback" | "Layout/Structure";
  description: string;
  preview: React.ReactNode;
  code: string;
};

const componentsList: ComponentItem[] = [
  {
    name: "Accordion",
    category: "Layout/Structure",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    preview: (
      <div className="w-full max-w-sm bg-white p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black shadow-[var(--shadow-comic)]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),
    code: "<Accordion type=\"single\" collapsible>\n  <AccordionItem value=\"item-1\">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>Yes!</AccordionContent>\n  </AccordionItem>\n</Accordion>"
  },
  {
    name: "Tabs",
    category: "Layout/Structure",
    description: "A set of layered sections of content, displayed one at a time.",
    preview: (
      <div className="w-full max-w-sm bg-white p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black shadow-[var(--shadow-comic)]">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full flex mb-2">
            <TabsTrigger value="account" className="flex-1">Account</TabsTrigger>
            <TabsTrigger value="password" className="flex-1">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4 border-[3px] border-border rounded-[var(--radius-comic)]">
            <p className="font-bold">Make changes to your account here.</p>
          </TabsContent>
          <TabsContent value="password" className="p-4 border-[3px] border-border rounded-[var(--radius-comic)]">
            <p className="font-bold">Change your password here.</p>
          </TabsContent>
        </Tabs>
      </div>
    ),
    code: "<Tabs defaultValue=\"account\">\n  <TabsList>\n    <TabsTrigger value=\"account\">Account</TabsTrigger>\n  </TabsList>\n  <TabsContent value=\"account\">Content</TabsContent>\n</Tabs>"
  },
  {
    name: "Sheet / Side Panel",
    category: "Layout/Structure",
    description: "Extends from the edges of the window to display mobile panels, drawers, or dialogs.",
    preview: (
      <div className="w-full h-full flex items-center justify-center p-4">
        <Sheet>
          <SheetTrigger><Button variant="default">Open Sidebar</Button></SheetTrigger>
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
    code: "<Sheet>\n  <SheetTrigger><Button>Open Sidebar</Button></SheetTrigger>\n  <SheetContent side=\"right\">\n    <SheetHeader>\n      <SheetTitle>App Settings</SheetTitle>\n    </SheetHeader>\n  </SheetContent>\n</Sheet>"
  },
  {
    name: "Resizable Panels",
    category: "Layout/Structure",
    description: "Accessible resizable panel groups and layouts.",
    preview: (
      <div className="w-full h-64 p-2 bg-white rounded-[var(--radius-comic)] border-[3px] border-border text-black shadow-[var(--shadow-comic)]">
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
    code: "<ResizablePanelGroup direction=\"horizontal\">\n  <ResizablePanel defaultSize={30}>Sidebar</ResizablePanel>\n  <ResizableHandle withHandle />\n  <ResizablePanel defaultSize={70}>Content</ResizablePanel>\n</ResizablePanelGroup>"
  },
  {
    name: "Drawer (Mobile Panel)",
    category: "Layout/Structure",
    description: "A drawer component for React, typically used on mobile for bottom-up dialogs.",
    preview: (
      <div className="w-full flex items-center justify-center p-4">
        <Drawer>
          <DrawerTrigger><Button variant="secondary">Open Drawer</Button></DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0 flex flex-col gap-4">
                <Button>Action</Button>
                <DrawerClose><Button variant="destructive" className="w-full">Cancel</Button></DrawerClose>
              </div>
              <DrawerFooter />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    ),
    code: "<Drawer>\n  <DrawerTrigger><Button>Open Drawer</Button></DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader>\n      <DrawerTitle>Move Goal</DrawerTitle>\n    </DrawerHeader>\n    <DrawerFooter>\n      <DrawerClose><Button>Cancel</Button></DrawerClose>\n    </DrawerFooter>\n  </DrawerContent>\n</Drawer>"
  },

  {
    name: "Button",
    category: "Core/General",
    description: "Displays a button or a component that looks like a button.",
    preview: (
      <div className="flex gap-4 flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    ),
    code: `<Button variant="default">Default</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="destructive">Destructive</Button>`,
  },
  {
    name: "Input",
    category: "Forms",
    description: "Displays a form input field or a component that looks like an input field.",
    preview: (
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" className="text-black bg-white" />
        <Button type="submit">Subscribe</Button>
      </div>
    ),
    code: `<div className="flex w-full max-w-sm items-center space-x-2">\n  <Input type="email" placeholder="Email" className="bg-white" />\n  <Button type="submit">Subscribe</Button>\n</div>`
  },
  {
    name: "Badge",
    category: "Data Display",
    description: "Displays a badge or a component that looks like a badge.",
    preview: (
      <div className="flex gap-4 items-center">
        <Badge variant="default">New</Badge>
        <Badge variant="secondary">Beta</Badge>
        <Badge variant="destructive">Warning</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    code: `<Badge variant="default">New</Badge>\n<Badge variant="secondary">Beta</Badge>\n<Badge variant="destructive">Warning</Badge>`
  },
  {
    name: "Avatar",
    category: "Data Display",
    description: "An image element with a fallback for representing the user.",
    preview: (
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="/Headshot%20(1).jpg" alt="@user" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/Headshot%20(2).jpg" alt="@user2" />
          <AvatarFallback>BM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>PO</AvatarFallback>
        </Avatar>
      </div>
    ),
    code: `<Avatar>\n  <AvatarImage src="/Headshot (1).jpg" alt="@user" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>`
  },
  {
    name: "Checkbox & Label",
    category: "Forms",
    description: "A control that allows the user to toggle between checked and not checked.",
    preview: (
      <div className="flex items-center space-x-2 bg-white p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-black">Accept terms and conditions</Label>
      </div>
    ),
    code: `<div className="flex items-center space-x-2">\n  <Checkbox id="terms" />\n  <Label htmlFor="terms">Accept terms and conditions</Label>\n</div>`
  },
  {
    name: "Switch",
    category: "Forms",
    description: "A control that allows the user to toggle between checked and not checked.",
    preview: (
      <div className="flex items-center space-x-2 bg-white p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode" className="text-black">Airplane Mode</Label>
      </div>
    ),
    code: `<div className="flex items-center space-x-2">\n  <Switch id="airplane-mode" />\n  <Label htmlFor="airplane-mode">Airplane Mode</Label>\n</div>`
  },
  {
    name: "Separator",
    category: "Core/General",
    description: "Visually or semantically separates content.",
    preview: (
      <div className="w-full max-w-sm bg-white p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black">
        <div className="text-sm font-bold uppercase tracking-tight">Radix Primitives</div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm font-semibold">
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    ),
    code: `<div className="flex h-5 items-center space-x-4">\n  <div>Docs</div>\n  <Separator orientation="vertical" />\n  <div>Source</div>\n</div>`
  },
  {
    name: "Skeleton",
    category: "Feedback",
    description: "Use to show a placeholder while content is loading.",
    preview: (
      <div className="flex items-center space-x-4 bg-white p-4 rounded-[var(--radius-comic)] border-[3px] border-border">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    ),
    code: `<div className="flex items-center space-x-4">\n  <Skeleton className="h-12 w-12 rounded-full" />\n  <div className="space-y-2">\n    <Skeleton className="h-4 w-[250px]" />\n    <Skeleton className="h-4 w-[200px]" />\n  </div>\n</div>`
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
            className="pl-10 text-black border-[3px] border-black bg-white shadow-[var(--shadow-comic-sm)] h-12 text-lg" 
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
              <div key={component.name} className="flex flex-col gap-4">
                <div className="text-2xl font-bold uppercase">{component.name}</div>
                <TypographyP className="text-muted-foreground my-0 pb-2">{component.description}</TypographyP>
                
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="p-8 border-[3px] border-border rounded-[var(--radius-comic)] bg-background shadow-[var(--shadow-comic)] flex items-center justify-center min-h-[150px] bg-halftone">
                    <div className="bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] w-full max-w-2xl flex justify-center text-black">
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