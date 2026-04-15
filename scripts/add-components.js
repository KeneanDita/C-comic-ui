const fs = require("fs");

const filePath = "app/components/page.tsx";
let content = fs.readFileSync(filePath, "utf8");

const componentsToAdd = [
  {
    name: "Alert",
    category: "Feedback",
    description: "Displays a callout for user attention.",
    preview: `
      <Alert className="bg-white dark:bg-card border-[3px] border-black dark:border-border p-4 rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] w-full max-w-sm">
        <Terminal className="h-5 w-5" />
        <AlertTitle className="font-black uppercase">Heads up!</AlertTitle>
        <AlertDescription className="font-bold text-muted-foreground">
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
    `,
    code: `import { Alert, AlertTitle, AlertDescription } from "c-comic-ui";\nimport { Terminal } from "lucide-react";\n\nexport default function App() {\n  return (\n    <Alert>\n      <Terminal className="h-4 w-4" />\n      <AlertTitle>Heads up!</AlertTitle>\n      <AlertDescription>You can add components to your app.</AlertDescription>\n    </Alert>\n  );\n}`,
  },
  {
    name: "Alert Dialog",
    category: "Feedback",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    preview: `
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
    `,
    code: `import {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from "c-comic-ui";\nimport { Button } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger asChild><Button>Show</Button></AlertDialogTrigger>\n      ...\n    </AlertDialog>\n  );\n}`,
  },
  {
    name: "Card",
    category: "Data Display",
    description: "Displays a card with header, content, and footer.",
    preview: `
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
    `,
    code: `import { Card } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Card>\n      ...\n    </Card>\n  );\n}`,
  },
  {
    name: "Dialog",
    category: "Overlay",
    description:
      "A window overlaid on either the primary window or another dialog window.",
    preview: `
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
    `,
    code: `import { Dialog, DialogContent, DialogTrigger } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Dialog>\n      <DialogTrigger>Open</DialogTrigger>\n      <DialogContent>...</DialogContent>\n    </Dialog>\n  );\n}`,
  },
  {
    name: "Drawer",
    category: "Overlay",
    description: "A drawer component for React.",
    preview: `
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
    `,
    code: `import { Drawer, DrawerContent, DrawerTrigger } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Drawer>\n      <DrawerTrigger>Open</DrawerTrigger>\n      <DrawerContent>...</DrawerContent>\n    </Drawer>\n  );\n}`,
  },
  {
    name: "Progress",
    category: "Feedback",
    description:
      "Displays an indicator showing the completion progress of a task.",
    preview: `
      <div className="w-full max-w-md bg-white dark:bg-card p-6 border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] flex flex-col gap-4">
        <Label className="font-black uppercase tracking-tight text-lg flex items-center justify-between">
          <span>Loading Hero Stats...</span>
          <span className="text-blue-500">60%</span>
        </Label>
        <Progress value={60} className="h-6 border-[3px] border-black dark:border-border bg-yellow-100" />
      </div>
    `,
    code: `import { Progress } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Progress value={60} />\n  );\n}`,
  },
  {
    name: "Resizable",
    category: "Layout/Structure",
    description:
      "Accessible resizable panel groups and layouts with keyboard support.",
    preview: `
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
    `,
    code: `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <ResizablePanelGroup direction="horizontal">\n      <ResizablePanel>One</ResizablePanel>\n      <ResizableHandle />\n      <ResizablePanel>Two</ResizablePanel>\n    </ResizablePanelGroup>\n  );\n}`,
  },
  {
    name: "Select",
    category: "Forms",
    description: "Displays a list of options for the user to pick from.",
    preview: `
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
    `,
    code: `import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Select>\n      <SelectTrigger><SelectValue placeholder="Theme" /></SelectTrigger>\n      <SelectContent>\n        <SelectItem value="light">Light</SelectItem>\n      </SelectContent>\n    </Select>\n  );\n}`,
  },
  {
    name: "Sheet",
    category: "Overlay",
    description:
      "Extends the Dialog component to display content that complements the main viewport.",
    preview: `
      <div className="grid grid-cols-2 gap-2">
        {["top", "right", "bottom", "left"].map((side) => (
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
    `,
    code: `import { Sheet, SheetContent, SheetTrigger } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Sheet>\n      <SheetTrigger>Open</SheetTrigger>\n      <SheetContent>...</SheetContent>\n    </Sheet>\n  );\n}`,
  },
  {
    name: "Sonner",
    category: "Feedback",
    description: "An opinionated toast component for React.",
    preview: `
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
    `,
    code: `import { toast } from "sonner";\nimport { Button } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Button onClick={() => toast("Hello World")}>Show Toast</Button>\n  );\n}`,
  },
  {
    name: "Table",
    category: "Data Display",
    description: "A responsive table component.",
    preview: `
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
              <TableCell className="text-right">$250.00</TableCell>
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
    `,
    code: `import {\n  Table,\n  TableBody,\n  TableCaption,\n  TableCell,\n  TableHead,\n  TableHeader,\n  TableRow,\n} from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Table>\n      <TableCaption>A list of invoices.</TableCaption>\n      <TableHeader>\n        <TableRow><TableHead>Invoice</TableHead></TableRow>\n      </TableHeader>\n      <TableBody>\n        <TableRow><TableCell>INV001</TableCell></TableRow>\n      </TableBody>\n    </Table>\n  );\n}`,
  },
];

let generatedCode = "";
for (const comp of componentsToAdd) {
  if (content.includes('name: "' + comp.name + '"')) continue;

  generatedCode += `,
  {
    name: "${comp.name}",
    category: "${comp.category}",
    description: "${comp.description}",
    preview: (
${comp.preview}
    ),
    code: \`${comp.code.replace(/`/g, "\\`")}\`
  }`;
}

if (generatedCode) {
  content = content.replace(
    /(})\s*](\s*export default function ComponentsPage)/,
    "$1" + generatedCode + "\n]\n$2",
  );
  fs.writeFileSync(filePath, content, "utf8");
}
