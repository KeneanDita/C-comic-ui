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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Bot, User, RefreshCcw, SquarePen, Sparkles, MessageSquare, Plus, Hash, Check, CreditCard, Download, Key, Users, Settings2, Trash2, Zap, Smartphone, Mail, Lock, ShieldCheck, Monitor, Laptop, ArrowRight } from "lucide-react"

type ComponentItem = {
  name: string;
  category: "Core/General" | "Forms" | "Data Display" | "Feedback" | "Layout/Structure" | "Complex Data" | "AI & LLM" | "SaaS & Billing" | "Auth & Security";
  description: string;
  preview: React.ReactNode;
  code: string;
};

const componentsList: ComponentItem[] = [
  {
    name: "Login / Sign Up",
    category: "Auth & Security",
    description: "Classic comic-style login form with social providers and hard shadows.",
    preview: (
      <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)]">
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
            <span className="bg-white px-2 font-black text-muted-foreground">Or</span>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="font-black uppercase">Email</Label>
            <Input className="border-[3px] h-12 font-bold bg-yellow-50 focus-visible:ring-0 focus-visible:bg-white" placeholder="hero@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Label className="font-black uppercase">Password</Label>
              <a href="#" className="text-xs font-black text-blue-600 hover:underline">Forgot?</a>
            </div>
            <Input type="password" className="border-[3px] h-12 font-bold bg-yellow-50 focus-visible:ring-0 focus-visible:bg-white" placeholder="••••••••" />
          </div>
          <Button className="w-full h-12 font-black uppercase text-lg bg-black text-white hover:bg-gray-800 border-[3px] border-black shadow-[var(--shadow-comic)] mt-2">Log In</Button>
        </form>
        <p className="text-center mt-6 text-sm font-bold">
          Don't have an account? <a href="#" className="font-black text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    ),
    code: "<div className=\"bg-white p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)]\">...</div>"
  },
  {
    name: "Forgot Password",
    category: "Auth & Security",
    description: "Password recovery flow using strong borders.",
    preview: (
      <div className="w-full max-w-md mx-auto bg-[#4ade80] p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)]">
        <div className="bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border mb-6 flex items-center gap-4">
          <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center shrink-0">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-black text-xl uppercase">Reset Password</h3>
            <p className="text-xs font-bold text-muted-foreground mt-1">We'll send a recovery link to your inbox.</p>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <Input className="border-[3px] h-12 font-bold bg-white focus-visible:ring-0" placeholder="Enter your email address" />
          <Button className="w-full h-12 font-black uppercase bg-white text-black hover:bg-gray-100 border-[3px] border-black shadow-[var(--shadow-comic-sm)]">Send Reset Link</Button>
        </form>
        <div className="mt-4 text-center">
          <Button variant="link" className="font-black hover:bg-[#22c55e] text-black">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Back to Login
          </Button>
        </div>
      </div>
    ),
    code: "<div className=\"bg-[#4ade80] p-8 rounded-[var(--radius-comic)] border-[3px] shadow-[var(--shadow-comic-lg)]\">...</div>"
  },
  {
    name: "Email Verification",
    category: "Auth & Security",
    description: "A fun inbox-checking prompt.",
    preview: (
      <div className="w-full max-w-sm mx-auto bg-white p-8 text-center rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] flex flex-col items-center">
        <div className="h-20 w-20 bg-yellow-400 rounded-full flex items-center justify-center border-[3px] border-black shadow-[var(--shadow-comic-sm)] mb-6">
          <Mail className="h-10 w-10 text-black" />
        </div>
        <h3 className="font-black text-2xl uppercase mb-2">Check Your Mail!</h3>
        <p className="text-sm font-bold text-muted-foreground mb-6">
          We've sent a verification link to <br/><span className="text-black font-black">hero@example.com</span>
        </p>
        <Button className="w-full font-black bg-black text-white hover:bg-gray-800 border-[3px] border-black mb-3">Open Email App</Button>
        <Button variant="ghost" className="font-bold underline decoration-2 underline-offset-4 hover:bg-gray-100">Resend Email</Button>
      </div>
    ),
    code: "<div className=\"text-center flex flex-col items-center\"><Mail />...</div>"
  },
  {
    name: "2FA / OTP Input",
    category: "Auth & Security",
    description: "Six-digit verification code entry.",
    preview: (
      <div className="w-full max-w-md mx-auto bg-blue-100 p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)]">
        <div className="bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-6 w-6 text-blue-500" />
            <h3 className="font-black text-xl uppercase">Two-Factor Auth</h3>
          </div>
          <p className="text-sm font-bold text-muted-foreground mb-6">Enter the 6-digit code from your authenticator app.</p>
          <div className="flex justify-between gap-2 mb-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Input key={i} className="w-12 h-14 text-center text-2xl font-black border-[3px] focus-visible:ring-0 focus-visible:bg-yellow-100 transition-colors" maxLength={1} placeholder="•" />
            ))}
          </div>
          <Button className="w-full h-12 font-black uppercase bg-blue-500 text-white hover:bg-blue-600 border-[3px] border-black shadow-[var(--shadow-comic-sm)]">Verify Code</Button>
        </div>
      </div>
    ),
    code: "<div className=\"flex justify-between gap-2\"><Input maxLength={1} className=\"w-12 h-14 text-center text-2xl font-black\" />...</div>"
  },
  {
    name: "Device Management",
    category: "Auth & Security",
    description: "Active sessions and connected devices list.",
    preview: (
      <div className="w-full max-w-xl mx-auto bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)]">
        <h3 className="font-black text-xl uppercase mb-6 border-b-[3px] border-border pb-4">Active Sessions</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between p-4 bg-gray-50 border-[3px] border-border rounded-[var(--radius-comic)]">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Laptop className="h-6 w-6 text-black" />
              </div>
              <div>
                <div className="font-black flex items-center gap-2">
                  MacBook Pro <Badge className="bg-green-400 text-black border-[2px] border-black px-2 py-0">Current</Badge>
                </div>
                <div className="text-xs font-bold text-muted-foreground mt-1">Chrome on macOS • New York, USA</div>
                <div className="text-xs font-bold text-muted-foreground mt-1">Active right now</div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between p-4 bg-white border-[3px] border-border rounded-[var(--radius-comic)]">
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
          <div className="flex items-start justify-between p-4 bg-white border-[3px] border-border rounded-[var(--radius-comic)]">
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
    code: "<div className=\"p-4 border-[3px] border-border rounded-[var(--radius-comic)]\"><Laptop />...</div>"
  },

  {
    name: "Pricing Table",
    category: "SaaS & Billing",
    description: "Clear and bold pricing tiers that grab the user's attention.",
    preview: (
      <div className="w-full flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
        <div className="flex-1 bg-white p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] flex flex-col items-center text-center">
          <h4 className="font-black text-xl uppercase text-black">Starter</h4>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-black text-black">$0</span>
            <span className="font-bold text-muted-foreground">/mo</span>
          </div>
          <ul className="flex flex-col gap-3 font-bold text-sm text-black mb-8 w-full text-left">
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> 1,000 API Calls</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" /> Basic Support</li>
            <li className="flex items-center gap-2 opacity-50"><Check className="h-5 w-5" /> Analytics Dashboard</li>
          </ul>
          <Button variant="outline" className="w-full font-black border-[3px] border-black">Get Started</Button>
        </div>
        <div className="flex-1 bg-yellow-400 p-8 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic-lg)] flex flex-col items-center text-center relative md:-translate-y-4">
          <div className="absolute -top-4 bg-black text-white px-4 py-1 font-black text-sm uppercase rounded-full border-[2px] border-black">Most Popular</div>
          <h4 className="font-black text-xl uppercase text-black pt-2">Hero</h4>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-black text-black">$29</span>
            <span className="font-bold text-black/70">/mo</span>
          </div>
          <ul className="flex flex-col gap-3 font-bold text-sm text-black mb-8 w-full text-left">
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-black" /> 50,000 API Calls</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-black" /> Priority Support</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-black" /> Analytics Dashboard</li>
          </ul>
          <Button className="w-full font-black bg-black hover:bg-gray-800 text-white border-[3px] border-black shadow-[var(--shadow-comic-sm)]">Upgrade to Hero</Button>
        </div>
      </div>
    ),
    code: "<div className=\"bg-yellow-400 border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)]\">...</div>"
  },
  {
    name: "Subscription Management",
    category: "SaaS & Billing",
    description: "Account overview panel showing current plan, dates, and upgrade paths.",
    preview: (
      <div className="w-full max-w-lg bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-black text-xl uppercase">Current Plan</h3>
            <p className="text-sm font-bold text-muted-foreground mt-1">Next billing date: <strong>Nov 1st, 2026</strong></p>
          </div>
          <Badge className="bg-yellow-400 text-black border-[2px] border-black uppercase font-black px-3 py-1">Hero Tier</Badge>
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
          <Button variant="destructive" className="font-black border-[3px] border-black">Cancel</Button>
        </div>
      </div>
    ),
    code: "<div className=\"w-full max-w-lg bg-white p-6 border-[3px]\"><Badge>Hero Tier</Badge>...</div>"
  },
  {
    name: "Billing History & Invoices",
    category: "SaaS & Billing",
    description: "Invoice history table with comic-styled download actions.",
    preview: (
      <div className="w-full max-w-2xl bg-white p-4 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black">
        <h3 className="font-black text-xl uppercase mb-4 pl-2">Billing History</h3>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100 border-b-[3px] border-border">
              <TableHead className="font-black text-black">Date</TableHead>
              <TableHead className="font-black text-black">Amount</TableHead>
              <TableHead className="font-black text-black">Status</TableHead>
              <TableHead className="text-right font-black text-black">Invoice</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b-[2px] border-border">
              <TableCell className="font-bold">Oct 1, 2026</TableCell>
              <TableCell className="font-black">$29.00</TableCell>
              <TableCell><Badge className="bg-green-400 text-black border-[2px] border-black">Paid</Badge></TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="font-bold border-[2px] border-border shadow-[var(--shadow-comic-sm)] hover:bg-gray-100">
                  <Download className="h-4 w-4 mr-2" /> PDF
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="border-b-[2px] border-border">
              <TableCell className="font-bold">Sep 1, 2026</TableCell>
              <TableCell className="font-black">$29.00</TableCell>
              <TableCell><Badge className="bg-green-400 text-black border-[2px] border-black">Paid</Badge></TableCell>
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
    code: "<Table>\n  <TableHeader>...\n</Table>"
  },
  {
    name: "API Usage Meter",
    category: "SaaS & Billing",
    description: "Visual indicator for tracking quota consumption.",
    preview: (
      <div className="w-full max-w-sm bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black flex flex-col gap-4">
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
    code: "<Progress value={85} indicatorColor=\"bg-red-500\" />"
  },
  {
    name: "Team Roles & Permissions",
    category: "SaaS & Billing",
    description: "Manage organization members with styled Selects and Avatars.",
    preview: (
      <div className="w-full max-w-lg bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black">
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
                 <AvatarFallback className="bg-yellow-400 font-bold text-black border-border">BR</AvatarFallback>
               </Avatar>
               <div>
                  <div className="font-black text-sm">Bruce Wayne</div>
                  <div className="text-xs font-bold text-muted-foreground">bruce@wayne.enterprises</div>
               </div>
             </div>
             <div className="flex items-center gap-2">
               <Badge className="bg-gray-100 text-black border-[2px] border-border">Owner</Badge>
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
                 <SelectTrigger className="w-[110px] h-8 bg-white font-black">
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
    code: "<Select defaultValue=\"editor\">\n  <SelectTrigger>...</SelectTrigger>\n</Select>"
  },
  {
    name: "API Key Management",
    category: "SaaS & Billing",
    description: "Panel to reveal, revoke, or generate new API credentials.",
    preview: (
      <div className="w-full max-w-xl bg-white p-6 rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] text-black">
        <div className="flex items-center gap-2 mb-6 border-b-[3px] border-border pb-4">
           <Key className="h-6 w-6 text-yellow-500" />
           <h3 className="font-black text-xl uppercase">API Keys</h3>
        </div>
        <div className="bg-gray-50 p-4 border-[3px] border-border rounded-[var(--radius-comic)] mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
           <div className="flex flex-col gap-1 w-full max-w-[300px]">
             <div className="font-black text-sm flex items-center justify-between mb-1">
               Production Key
               <Badge className="bg-green-400 text-black border-[2px] border-black text-[10px] h-5 px-1 py-0">Active</Badge>
             </div>
             <div className="flex gap-2 w-full">
               <Input className="font-mono text-xs border-[2px] h-9 bg-white" placeholder="sk_live_················" readOnly />
               <Button size="icon" className="h-9 w-9 shrink-0 bg-white text-black border-[2px] hover:bg-gray-100 shadow-[var(--shadow-comic-sm)]">
                 <Copy className="h-4 w-4" />
               </Button>
             </div>
           </div>
           <Button variant="destructive" className="font-black bg-red-500 text-white border-[3px] border-black hover:bg-red-600 mt-2 md:mt-0">Revoke</Button>
        </div>
        <Button className="font-black bg-black text-white hover:bg-gray-800 border-[3px] border-black w-full border-dashed">
          <Plus className="h-4 w-4 mr-2" />
          Generate New Key
        </Button>
      </div>
    ),
    code: "<Input className=\"font-mono\" placeholder=\"sk_live_...\" readOnly />"
  },

  {
    name: "Model Switcher",
    category: "AI & LLM",
    description: "A playful, heavy-bordered dropdown to select active LLM models.",
    preview: (
      <div className="bg-[#a78bfa] p-8 w-full max-w-sm rounded-[var(--radius-comic)] border-[3px] border-border shadow-[var(--shadow-comic)] flex items-center justify-center">
        <Select defaultValue="gemini">
          <SelectTrigger className="w-[180px] bg-white font-black hover:-translate-y-1 transition-transform">
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
    code: `<Select>\n  <SelectTrigger>\n    <SelectValue placeholder="Select a model" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="gemini">Gemini 1.5 Pro</SelectItem>\n  </SelectContent>\n</Select>`
  },
  {
    name: "Chat Bubbles",
    category: "AI & LLM",
    description: "Action-packed text bubbles distinguishing User and Assistant.",
    preview: (
      <div className="w-full max-w-md bg-white border-[3px] border-border rounded-[var(--radius-comic)] p-4 shadow-[var(--shadow-comic)] flex flex-col gap-4">
        <div className="flex gap-3 justify-end w-full">
          <div className="bg-yellow-400 p-4 border-[3px] border-border rounded-[var(--radius-comic)] rounded-tr-sm max-w-[80%] shadow-[var(--shadow-comic-sm)]">
            <p className="font-bold text-sm text-black">Can you explain quantum physics like it's a comic book?</p>
          </div>
          <div className="shrink-0 pt-1">
            <div className="w-10 h-10 rounded-full border-[3px] border-border bg-white flex items-center justify-center overflow-hidden shadow-[var(--shadow-comic-sm)]">
               <User className="h-6 w-6 text-black" />
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
             <p className="font-bold text-sm text-black">KA-POW! The atom is split! It's both a particle and a wave!</p>
          </div>
        </div>
      </div>
    ),
    code: `<div className="bg-yellow-400 p-4 border-[3px] border-border rounded-2xl">...</div>`
  },
  {
    name: "Code Block (with copy)",
    category: "AI & LLM",
    description: "Syntax highlighting block with a comic-style copy button.",
    preview: (
      <div className="w-full max-w-lg bg-black border-[3px] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] overflow-hidden relative">
        <div className="w-full bg-[#e5e7eb] border-b-[3px] border-border px-4 py-2 flex justify-between items-center">
          <span className="font-black text-xs uppercase text-black">Python</span>
          <button className="bg-white border-[2px] border-border p-1 rounded hover:-translate-y-0.5 hover:shadow-[var(--shadow-comic-sm)] transition-all text-black" title="Copy code">
            <Copy className="h-3 w-3" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto text-sm font-mono text-green-400">
          <div><span className="text-pink-400">def</span> <span className="text-blue-300">save_the_day</span>():</div>
          <div className="pl-4"><span className="text-pink-400">print</span>(<span className="text-yellow-300">"Hero arriving!"</span>)</div>
        </div>
      </div>
    ),
    code: `<div className="bg-black border-[3px] border-border rounded-[var(--radius-comic)]">\n  <div className="bg-gray-200 border-b-[3px] border-border px-4 py-2">...</div>\n  <pre><code>...</code></pre>\n</div>`
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
            <button key={pt.id} className="w-full text-left bg-white border-[3px] border-border p-4 rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] hover:-translate-y-1 hover:shadow-[var(--shadow-comic)] transition-all flex flex-col gap-2 group">
              <div className={`w-10 h-10 ${pt.color} border-[3px] border-border rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon className="h-5 w-5 text-black" />
              </div>
              <div>
                <div className="font-black text-black">{pt.title}</div>
                <div className="text-sm font-bold text-muted-foreground">{pt.desc}</div>
              </div>
            </button>
          )
        })}
      </div>
    ),
    code: `<button className="bg-white border-[3px] border-border p-4 rounded-[var(--radius-comic)]">...</button>`
  },
  {
    name: "Conversation Sidebar",
    category: "AI & LLM",
    description: "History list for AI chats with bold active states.",
    preview: (
      <div className="w-64 bg-[#fbbf24] border-[3px] border-border rounded-[var(--radius-comic)] overflow-hidden shadow-[var(--shadow-comic)] flex flex-col h-[300px]">
        <div className="p-4 border-b-[3px] border-border bg-white flex justify-between items-center z-10">
          <span className="font-black uppercase text-sm text-black">Chat History</span>
          <button className="bg-black text-white p-1 border-[2px] border-black rounded hover:-translate-y-0.5 hover:shadow-[var(--shadow-comic-sm)] transition-all">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
          {["Secret Base Defense", "Gadget Blueprints", "Villain Origins"].map((c, i) => (
             <div key={i} className={`p-3 rounded-md font-bold text-sm flex items-center gap-2 cursor-pointer border-[3px] border-transparent transition-all ${i === 0 ? 'bg-white border-black shadow-[var(--shadow-comic-sm)] text-black' : 'hover:bg-yellow-300 text-black/80'}`}>
               <MessageSquare className="h-4 w-4 shrink-0" />
               <span className="truncate">{c}</span>
             </div>
          ))}
        </div>
      </div>
    ),
    code: `<div className="w-64 bg-[#fbbf24] border-[3px] border-border">...</div>`
  },
  {
    name: "Streaming Text & Indicators",
    category: "AI & LLM",
    description: "Loading states and token usage specifically designed for LLMs.",
    preview: (
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div className="bg-white border-[3px] border-border p-4 rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)]">
           <div className="font-bold text-black flex items-center gap-1">
             <span>Generating plans</span>
             <span className="flex gap-0.5">
               <span className="animate-bounce">.</span>
               <span className="animate-bounce delay-75">.</span>
               <span className="animate-bounce delay-150">.</span>
             </span>
           </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-black text-white border-[2px] border-black px-3 py-1 font-black gap-1 text-sm">
            <Hash className="h-3 w-3" />
            1,204 tokens
          </Badge>
          <Badge className="bg-white text-black border-[2px] border-black px-3 py-1 font-bold text-sm">
            $0.02 cost
          </Badge>
        </div>
      </div>
    ),
    code: `<div className="flex flex-wrap gap-2">\n  <Badge>1,204 tokens</Badge>\n</div>`
  },
  {
    name: "Regenerate/Edit Prompt Actions",
    category: "AI & LLM",
    description: "Pill-shaped toolbars below assistant messages for quick actions.",
    preview: (
      <div className="w-max bg-white border-[3px] border-border p-1.5 rounded-full shadow-[var(--shadow-comic-sm)] flex gap-1 items-center">
        <Button variant="ghost" size="sm" className="rounded-full font-black h-8 px-4 text-black hover:bg-gray-100 hover:text-black">
           <RefreshCcw className="h-4 w-4 mr-2" />
           Regenerate
        </Button>
        <div className="w-[3px] h-5 bg-border rounded-full"></div>
        <Button variant="ghost" size="sm" className="rounded-full font-black h-8 px-4 text-black hover:bg-gray-100 hover:text-black">
           <SquarePen className="h-4 w-4 mr-2" />
           Edit
        </Button>
      </div>
    ),
    code: `<div className="bg-white border-[3px] border-border p-1.5 rounded-full flex">...</div>`
  },
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