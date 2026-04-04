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
import { Progress } from "@/components/ui/progress"
import { toast } from "sonner"

type ComponentItem = {
  name: string;
  category: "Core/General" | "Forms" | "Data Display" | "Feedback" | "Layout/Structure" | "Complex Data";
  description: string;
  preview: React.ReactNode;
  code: string;
};

const componentsList: ComponentItem[] = [
  {
    name: "Loaders & Progress",
    category: "Feedback",
    description: "Indicate loading state with spinners, skeletons, or progress bars.",
    preview: (
      <div className="w-full max-w-sm flex flex-col gap-6 p-6 bg-white rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black">
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
    code: `<Progress value={60} />\n<Skeleton className="h-4 w-[200px]" />`
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
    code: `toast("Hero deployed!")`
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
    code: `<Alert variant="warning">\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>Danger zone.</AlertDescription>\n</Alert>`
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
            <AlertDialogAction className="bg-red-500 font-bold border-[3px] border-black text-white hover:bg-red-600">Yes, delete lair</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
    code: `<AlertDialog>\n  <AlertDialogTrigger>Open</AlertDialogTrigger>\n  <AlertDialogContent>...</AlertDialogContent>\n</AlertDialog>`
  },
  {
    name: "Inline Validation",
    category: "Forms",
    description: "Show validation errors inline with form inputs.",
    preview: (
      <div className="w-full max-w-sm bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black">
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
    code: `<Input className="border-red-500" />\n<p className="text-red-500">Error message</p>`
  },
  {
    name: "Data Table",
    category: "Complex Data",
    description: "Highly structured table for sorting, filtering, and pagination.",
    preview: (
      <div className="w-full max-w-2xl bg-white p-4 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black">
        <Table>
          <TableCaption>A list of recent hero activities.</TableCaption>
          <TableHeader>
            <TableRow className="bg-yellow-400">
              <TableHead className="w-[100px] text-black">ID</TableHead>
              <TableHead className="text-black">Hero</TableHead>
              <TableHead className="text-black">Status</TableHead>
              <TableHead className="text-right text-black">Missions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">#001</TableCell>
              <TableCell>Captain Thunder</TableCell>
              <TableCell><Badge className="bg-green-400 text-black border-[2px] border-black">Active</Badge></TableCell>
              <TableCell className="text-right font-black">250</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">#002</TableCell>
              <TableCell>Shadow Strike</TableCell>
              <TableCell><Badge className="bg-red-400 text-white border-[2px] border-black">MIA</Badge></TableCell>
              <TableCell className="text-right font-black">12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">#003</TableCell>
              <TableCell>Laser Fist</TableCell>
              <TableCell><Badge className="bg-blue-400 text-white border-[2px] border-black">Training</Badge></TableCell>
              <TableCell className="text-right font-black">42</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    ),
    code: `<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Hero</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Captain Thunder</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`
  },
  {
    name: "List View (Activity)",
    category: "Complex Data",
    description: "Virtualization-ready list style for tracking activity or generic data.",
    preview: (
      <div className="w-full max-w-md bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black">
        <h4 className="font-black text-xl mb-4 border-b-[3px] border-border pb-2">Hero Activity Feed</h4>
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 items-start pb-4 border-b-[2px] border-border last:border-0 last:pb-0">
              <Avatar className="h-10 w-10 border-[3px] border-border">
                <AvatarFallback className="bg-yellow-400 text-black font-bold">H</AvatarFallback>
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
    code: `<div className="flex flex-col gap-4">\n  <div className="flex gap-4 items-start">\n    <Avatar><AvatarFallback>H1</AvatarFallback></Avatar>\n    <div className="flex flex-col">\n      <span className="font-bold">Action Performed</span>\n    </div>\n  </div>\n</div>`
  },
  {
    name: "Stats / KPI Block",
    category: "Complex Data",
    description: "Important high-level metrics for dashboard homepages.",
    preview: (
      <div className="bg-red-400 w-full max-w-sm p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-white flex gap-4 items-center">
        <div className="p-3 bg-white text-black rounded-full border-[3px] border-border">
          <Target className="h-6 w-6" />
        </div>
        <div>
          <div className="text-sm font-black uppercase text-black drop-shadow-sm">Threat Level</div>
          <div className="text-3xl font-black drop-shadow-md">CRITICAL</div>
        </div>
      </div>
    ),
    code: `<div className="bg-red-400 p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)]">\n  <div className="text-sm font-black text-black">Threat Level</div>\n  <div className="text-3xl font-black text-white">CRITICAL</div>\n</div>`
  },
  {
    name: "Bar Chart",
    category: "Complex Data",
    description: "Integrated charts (recharts) with bold comic colors.",
    preview: (
      <div className="w-full h-[250px] bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] flex justify-center items-center">
        <div className="w-full h-full flex flex-col">
          <h4 className="font-black text-lg text-black mb-4 uppercase">City Crime Rate</h4>
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
    code: `<ResponsiveContainer width="100%" height="100%">\n  <BarChart data={data}>\n    <XAxis dataKey="name" stroke="#000" />\n    <Tooltip contentStyle={{border: '3px solid #000', fontWeight: 'bold'}} />\n    <Bar dataKey="uv" fill="#facc15" stroke="#000" strokeWidth={3} radius={[4,4,0,0]} />\n  </BarChart>\n</ResponsiveContainer>`
  },
  {
    name: "Empty State",
    category: "Complex Data",
    description: "Playful empty states for lists with no data.",
    preview: (
      <div className="w-full max-w-lg p-12 bg-white rounded-[var(--radius-comic)] border-[4px] border-dashed border-border flex flex-col items-center justify-center text-center mx-auto">
        <div className="h-20 w-20 bg-yellow-400 rounded-full border-[3px] border-border flex items-center justify-center mb-6 shadow-[var(--shadow-comic-sm)] hover:-translate-y-1 transition-transform">
          <FileBox className="h-10 w-10 text-black" />
        </div>
        <h3 className="text-2xl font-black text-black uppercase">No Missions Found</h3>
        <p className="text-muted-foreground font-bold mt-2 text-lg">Looks like the city is safe today. Take a break, hero!</p>
        <Button className="mt-8 font-bold shadow-[var(--shadow-comic)] border-[3px] py-6 px-8 text-xl text-black" variant="default">Refresh Radar</Button>
      </div>
    ),
    code: `<div className="p-12 bg-white rounded-[var(--radius-comic)] border-[4px] border-dashed flex flex-col items-center text-center">\n  <div className="h-20 w-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6">\n    <FileBox className="h-10 w-10 text-black" />\n  </div>\n  <h3 className="text-2xl font-black text-black">No Missions Found</h3>\n  <Button>Refresh Radar</Button>\n</div>`
  },
  {
    name: "Accordion",
    category: "Layout/Structure",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    preview: (
      <div className="w-full max-w-sm bg-[#FFE135] p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black shadow-[var(--shadow-comic)]">
        <Accordion type="single" collapsible className="w-full bg-white border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)]">
          <AccordionItem value="item-1" className="border-border border-b-[3px]">
            <AccordionTrigger className="px-4 font-black hover:bg-[#FF90E8] transition-colors rounded-t-[var(--radius-comic)-3px]">Is it accessible?</AccordionTrigger>
            <AccordionContent className="px-4 font-bold bg-white">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-border border-b-[3px]">
            <AccordionTrigger className="px-4 font-black hover:bg-[#FF90E8] transition-colors">Is it styled?</AccordionTrigger>
            <AccordionContent className="px-4 font-bold bg-white">Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="px-4 font-black hover:bg-[#FF90E8] transition-colors rounded-b-[var(--radius-comic)-3px]">Is it animated?</AccordionTrigger>
            <AccordionContent className="px-4 font-bold bg-white">Yes. It&apos;s animated by default.</AccordionContent>
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
      <div className="w-full max-w-sm bg-[#4ade80] p-6 rounded-[var(--radius-comic)] border-[3px] border-border text-black shadow-[var(--shadow-comic)]">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full flex mb-4 bg-white border-[3px] border-border rounded-[var(--radius-comic)-3px] p-1 shadow-[var(--shadow-comic-sm)]">
            <TabsTrigger value="account" className="flex-1 font-black rounded-sm data-[state=active]:bg-[#FF90E8] data-[state=active]:border-[2px] data-[state=active]:border-black transition-all">Account</TabsTrigger>
            <TabsTrigger value="password" className="flex-1 font-black rounded-sm data-[state=active]:bg-[#FF90E8] data-[state=active]:border-[2px] data-[state=active]:border-black transition-all">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-6 bg-white border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)]">
            <p className="font-bold text-lg">Make changes to your account here.</p>
            <Button className="mt-4 w-full font-black bg-white hover:bg-gray-100 text-black border-[3px] shadow-[var(--shadow-comic-sm)]">Save changes</Button>
          </TabsContent>
          <TabsContent value="password" className="p-6 bg-white border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)]">
            <p className="font-bold text-lg">Change your password here.</p>
            <Button className="mt-4 w-full font-black bg-white hover:bg-gray-100 text-black border-[3px] shadow-[var(--shadow-comic-sm)]">Update password</Button>
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
        <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">Action Blue</Button>
        <Button variant="secondary" className="bg-yellow-400 hover:bg-yellow-500 text-black">Zap Yellow</Button>
        <Button variant="destructive" className="bg-red-500 hover:bg-red-600 text-white">Pow Red</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    ),
    code: `<Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">Action Blue</Button>\n<Button variant="secondary" className="bg-yellow-400 hover:bg-yellow-500 text-black">Zap Yellow</Button>\n<Button variant="destructive" className="bg-red-500 hover:bg-red-600 text-white">Pow Red</Button>`,
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
        <Badge className="bg-blue-500 text-white border-[2px] border-black">New</Badge>
        <Badge className="bg-yellow-400 text-black border-[2px] border-black">Beta</Badge>
        <Badge className="bg-red-500 text-white border-[2px] border-black">Warning</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    ),
    code: `<Badge className="bg-blue-500 text-white border-[2px] border-black">New</Badge>\n<Badge className="bg-yellow-400 text-black border-[2px] border-black">Beta</Badge>\n<Badge className="bg-red-500 text-white border-[2px] border-black">Warning</Badge>`
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