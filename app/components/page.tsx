"use client"

import * as React from "react"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

const componentsList = [
  {
    name: "Button",
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
    description: "Displays a form input field or a component that looks like an input field.",
    preview: (
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" className="text-black" />
        <Button type="submit">Subscribe</Button>
      </div>
    ),
    code: `<div className="flex w-full max-w-sm items-center space-x-2">\n  <Input type="email" placeholder="Email" />\n  <Button type="submit">Subscribe</Button>\n</div>`
  },
  {
    name: "Badge",
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
    description: "An image element with a fallback for representing the user.",
    preview: (
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>BOOM</AvatarFallback>
        </Avatar>
      </div>
    ),
    code: `<Avatar>\n  <AvatarImage src="https://github.com/shadcn.png" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>`
  },
  {
    name: "Checkbox & Label",
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

  return (
    <div className="container mx-auto px-4 max-w-6xl py-12 flex flex-col gap-12 text-foreground">
      <div className="bg-card text-white p-12 border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)]">
        <TypographyH1>Components</TypographyH1>
        <TypographyP className="text-white/90 text-lg">
          Browse the collection of superhero-ready components. Ready to drop into your setup.
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
        {filteredComponents.map((component) => (
          <div key={component.name} className="flex flex-col gap-4">
            <TypographyH2>{component.name}</TypographyH2>
            <TypographyP className="text-muted-foreground my-0 pb-4">{component.description}</TypographyP>
            
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="p-8 border-[3px] border-border rounded-comic bg-background shadow-comic flex items-center justify-center min-h-[250px] bg-halftone">
                <div className="bg-white p-6 rounded-comic border-[3px] border-border shadow-comic w-full max-w-2xl flex justify-center">
                  {component.preview}
                </div>
              </TabsContent>
              <TabsContent value="code" className="text-white">
                <div className="bg-black p-6 rounded-comic border-[3px] border-border shadow-comic overflow-x-auto relative">
                  <pre className="text-sm font-mono whitespace-pre-wrap break-words">{component.code}</pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ))}

        {filteredComponents.length === 0 && (
          <div className="p-12 text-center border-[3px] border-border border-dashed rounded-comic">
            <TypographyH2>No components found.</TypographyH2>
          </div>
        )}
      </div>
    </div>
  )
}