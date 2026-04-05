import * as React from "react"
import { 
  Button, 
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Checkbox, 
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
  Input, 
  Label, 
  Switch, 
  Table, TableHeader, TableRow, TableHead, TableBody, TableCell,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Badge, 
  Alert, AlertTitle, AlertDescription 
} from "@/components/comic-ui"
import { Zap, ShieldAlert, Users, TrendingUp, Search, Plus, UserPlus, Settings, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function V1DashboardDemo() {
  return (
    <div className="min-h-screen bg-halftone font-sans pb-12">
      {/* Top Banner Navigation */}
      <header className="bg-white dark:bg-card border-b-[var(--border-comic)] border-border px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-[var(--radius-comic)] border-[2px] border-border shadow-[var(--shadow-comic-sm)] rotate-3">
            <Zap className="h-6 w-6 text-black dark:text-foreground" />
          </div>
          <h1 className="text-2xl font-black uppercase tracking-tighter ml-2">C-Comic Panel</h1>
          <Badge variant="destructive" className="ml-4 -translate-y-2 rotate-12">v1.0 LIVE</Badge>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/">
             <Button variant="ghost" className="font-bold underline">Back to docs</Button>
          </Link>
          <div className="relative w-64 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Global search..." className="pl-9" />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">New Alert <Plus className="ml-2 h-4 w-4" /></Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Broadcast Emergency</DialogTitle>
                <DialogDescription>Send a high-priority push notification to all active heroes in the sector.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Message Subject</Label>
                  <Input placeholder="e.g. Kaiju attacking downtown!" />
                </div>
                <div className="flex items-center justify-between border-[var(--border-comic)] border-border p-4 rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] bg-muted/30">
                  <div className="space-y-0.5">
                    <Label>Override Do-Not-Disturb</Label>
                    <p className="text-xs text-muted-foreground font-bold">Forces push notification on silent devices.</p>
                  </div>
                  <Switch />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Broadcast Now</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-8 space-y-8">
        
        {/* Alerts Section */}
        <Alert variant="warning" className="border-yellow-500 bg-yellow-50">
          <ShieldAlert className="h-5 w-5 text-yellow-600" />
          <div>
            <AlertTitle className="text-yellow-800">Critical System Notice</AlertTitle>
            <AlertDescription className="text-yellow-700">
              The central mainframe is experiencing heavy load. Expect slight delays when deploying grappling hooks.
            </AlertDescription>
          </div>
        </Alert>

        {/* Dashboard Grid - Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:-translate-y-1 transition-transform">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-100 rounded-t-[calc(var(--radius-comic)-3px)] border-b-[var(--border-comic)]">
              <CardTitle className="text-sm font-bold text-blue-900">Total Recruits</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-4xl font-black">10,234</div>
              <p className="text-xs text-muted-foreground font-bold mt-1">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:-translate-y-1 transition-transform">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-green-100 rounded-t-[calc(var(--radius-comic)-3px)] border-b-[var(--border-comic)]">
              <CardTitle className="text-sm font-bold text-green-900">Missions Cleared</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-4xl font-black">8,550</div>
              <p className="text-xs text-muted-foreground font-bold mt-1">
                +15% success rate
              </p>
            </CardContent>
          </Card>

          <Card className="hover:-translate-y-1 transition-transform">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-purple-100 rounded-t-[calc(var(--radius-comic)-3px)] border-b-[var(--border-comic)]">
              <CardTitle className="text-sm font-bold text-purple-900">Global Threat Level</CardTitle>
              <TrendingUp className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent className="pt-6 flex justify-between items-center">
              <div className="text-4xl font-black text-red-500">Severe</div>
              <Badge variant="destructive" className="animate-pulse">DEFCON 2</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Complex Content: Tabs & Table */}
        <Card>
          <CardHeader className="border-b-[var(--border-comic)]">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Headquarters Interface</CardTitle>
                <CardDescription>Manage your team rosters and system preferences easily.</CardDescription>
              </div>
              <Button variant="secondary" size="sm"><Settings className="mr-2 h-4 w-4" /> Configure</Button>
            </div>
          </CardHeader>
          
          <CardContent className="pt-6">
            <Tabs defaultValue="roster" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="roster" className="w-32"><Users className="mr-2 h-4 w-4"/> Roster</TabsTrigger>
                <TabsTrigger value="settings" className="w-32"><Settings className="mr-2 h-4 w-4"/> Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="roster" className="space-y-4">
                <div className="flex justify-between items-center bg-gray-50 p-4 border-[2px] border-border rounded-[var(--radius-comic)] border-dashed">
                  <div className="text-sm font-bold text-muted-foreground">Viewing active field operatives...</div>
                  <Button variant="default" size="sm"><UserPlus className="mr-2 h-4 w-4" /> Add Hero</Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]"></TableHead>
                      <TableHead>Codename</TableHead>
                      <TableHead>Specialty</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Bounties</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell className="font-black text-lg">Crimson Falcon</TableCell>
                      <TableCell>Acrobatics / Martial Arts</TableCell>
                      <TableCell><Badge className="bg-green-500">Patrolling</Badge></TableCell>
                      <TableCell className="text-right">$4,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell className="font-black text-lg">Dr. Quantum</TableCell>
                      <TableCell>Physics Manipulation</TableCell>
                      <TableCell><Badge variant="secondary">In Lab</Badge></TableCell>
                      <TableCell className="text-right">$12,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Checkbox defaultChecked /></TableCell>
                      <TableCell className="font-black text-lg">Shadow Weaver</TableCell>
                      <TableCell>Stealth / Infiltration</TableCell>
                      <TableCell><Badge variant="destructive">MIA</Badge></TableCell>
                      <TableCell className="text-right">$8,250</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell className="font-black text-lg">Neon Burst</TableCell>
                      <TableCell>Light Projection</TableCell>
                      <TableCell><Badge className="bg-green-500">Patrolling</Badge></TableCell>
                      <TableCell className="text-right">$1,100</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="settings">
                <div className="border-[var(--border-comic)] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] p-6 bg-white dark:bg-card space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-black uppercase text-xl border-b-[2px] border-border pb-2">System Preferences</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Auto-Engage Defense Matrix</Label>
                        <p className="text-sm text-muted-foreground font-bold">Shields trigger automatically when threat exceeds Class B.</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Dark Mode (Night Vision)</Label>
                        <p className="text-sm text-muted-foreground font-bold">Enhance visibility during covert nocturnal operations.</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end gap-4">
                    <Button variant="outline">Reset Defaults</Button>
                    <Button>Save Settings</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
