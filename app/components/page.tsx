"use client"

import * as React from "react"
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

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