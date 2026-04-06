"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Zap, Palette, Layers, Terminal as CmdTerminal, ArrowRight, Shield, Star, Crown, Copy, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText("npm install c-comic-ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-halftone flex flex-col lg:flex-row items-center justify-between border-b-[4px] border-border overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-[120px] opacity-20 hidden lg:block -z-10"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 hidden lg:block -z-10"></div>
        
        <div className="flex-1 flex flex-col gap-8 max-w-2xl text-center lg:text-left z-10">
          <Badge className="w-fit mx-auto lg:mx-0 px-4 py-1.5 text-sm bg-yellow-400 text-black border-[3px] border-black hover:bg-yellow-300 dark:border-border">
            <Zap className="w-4 h-4 mr-2" /> V1.0 is Live Now
          </Badge>
          
          <div className="space-y-4">
            <TypographyH1 className="text-6xl md:text-7xl tracking-tighter leading-[1.3] md:leading-[1.2]">
              Build <span className="bg-blue-600 text-white px-4 py-1 mx-2 -rotate-3 inline-block rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] border-[3px] border-border dark:bg-blue-600 dark:text-white relative">Hero-Worthy</span> UI
            </TypographyH1>
            <TypographyP className="text-xl md:text-2xl text-foreground/80 max-w-xl mx-auto lg:mx-0">
              A playful, heavily stylized, and highly accessible component library for Next.js. Give your React apps that comic-book aesthetic instantly.
            </TypographyP>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link href="/docs">
              <Button variant="default" className="text-lg px-8 py-6 h-auto w-full sm:w-auto shadow-[var(--shadow-comic)] hover:shadow-[var(--shadow-comic-lg)] transition-all">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/components">
              <Button variant="outline" className="text-lg px-8 py-6 h-auto w-full sm:w-auto bg-white text-black hover:bg-gray-100 border-border dark:bg-card dark:text-foreground">
                Browse Components
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-8 justify-center lg:justify-start mt-4 pt-4 border-t-[3px] border-border/50 max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col">
              <span className="text-3xl font-black">50+</span>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Components</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black">100%</span>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Accessible</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black">Next.js</span>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Optimized</span>
            </div>
          </div>
        </div>

        {/* Right Side Visual/Preview */}
        <div className="flex-1 w-full max-w-xl mt-16 lg:mt-0 relative z-10 perspective-[1000px]">
          <div className="relative rotate-y-[-10deg] rotate-x-[5deg] transition-transform duration-500 hover:rotate-y-0 hover:rotate-x-0">
            <Card className="border-[4px] border-border shadow-[var(--shadow-comic)] overflow-hidden">
              <div className="bg-muted px-4 py-3 border-b-[3px] border-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-border shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-border shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-border shadow-sm"></div>
                <div className="ml-4 font-bold text-xs bg-background px-3 py-1 rounded-[var(--radius-comic)] border-[2px] border-border w-48 text-center truncate">
                  c-comic-ui preview
                </div>
              </div>
              <CardContent className="p-6 bg-card flex flex-col gap-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16 border-[3px] border-border">
                    <AvatarImage src="/Headshot%20(1).jpg" className="object-cover" />
                    <AvatarFallback>HQ</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-background rounded border-[2px] border-border w-3/4"></div>
                    <div className="h-4 bg-background rounded border-[2px] border-border w-1/2"></div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="w-full">Follow</Button>
                  <Button variant="secondary" className="w-full">Message</Button>
                </div>
                <div className="bg-background rounded-[var(--radius-comic)] border-[3px] border-border p-4 text-black dark:text-foreground">
                  <div className="flex items-center justify-between">
                    <Label className="font-bold text-base text-black dark:text-foreground">Super Power</Label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Value Prop Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 border-b-[4px] border-border bg-white dark:bg-background">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <TypographyH2 className="text-center mb-16 text-4xl lg:text-5xl border-none">
            Why Choose <span className="bg-primary px-2 text-black border-[3px] border-black rounded-[var(--radius-comic)] rotate-2 inline-block shadow-sm">C-Comic UI?</span>
          </TypographyH2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <Card className="hover:-translate-y-2 transition-transform duration-300 shadow-[var(--shadow-comic)] border-[3px] border-border bg-pink-100 dark:bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-white dark:bg-background rounded-[var(--radius-comic)] border-[3px] border-border flex items-center justify-center mb-4 shadow-[var(--shadow-comic-sm)] rotate-3">
                  <Palette className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <CardTitle className="text-2xl text-black dark:text-foreground">Bold Aesthetics</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-black/80 dark:text-foreground/80 mt-0">
                  Built heavily on sharp borders, deep shadows, and high contrast. Forget minimalist boring layouts. Make your product impossible to ignore.
                </TypographyP>
              </CardContent>
            </Card>

            <Card className="hover:-translate-y-2 transition-transform duration-300 shadow-[var(--shadow-comic)] border-[3px] border-border bg-green-100 dark:bg-card transform md:translate-y-4">
              <CardHeader>
                <div className="w-12 h-12 bg-white dark:bg-background rounded-[var(--radius-comic)] border-[3px] border-border flex items-center justify-center mb-4 shadow-[var(--shadow-comic-sm)] -rotate-3">
                  <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl text-black dark:text-foreground">Built on Radix</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-black/80 dark:text-foreground/80 mt-0">
                  We don't sacrifice usability for style. Powered by Radix Primitives guaranteeing WAI-ARIA compliance, keyboard navigation, and structural integrity.
                </TypographyP>
              </CardContent>
            </Card>

            <Card className="hover:-translate-y-2 transition-transform duration-300 shadow-[var(--shadow-comic)] border-[3px] border-border bg-blue-100 dark:bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-white dark:bg-background rounded-[var(--radius-comic)] border-[3px] border-border flex items-center justify-center mb-4 shadow-[var(--shadow-comic-sm)] rotate-6">
                  <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-black dark:text-foreground">Zero Config Drop-in</CardTitle>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-black/80 dark:text-foreground/80 mt-0">
                  Uses Tailwind CSS variables seamlessly. Just copy and paste the components you want directly into your Next.js app, like Shadcn UI but punchier.
                </TypographyP>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples & Showcase Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-halftone flex flex-col items-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-black hover:bg-gray-100 border-[3px] border-border dark:bg-card dark:text-foreground">Showcase</Badge>
            <TypographyH2 className="border-none text-4xl lg:text-5xl">See It In Action</TypographyH2>
            <TypographyP className="text-muted-foreground mt-4 text-lg lg:text-xl max-w-2xl mx-auto">
              Everything from fully fleshed-out dashboards down to the finest granular primitives, designed to look perfect together.
            </TypographyP>
          </div>

          <Tabs defaultValue="dashboard" className="w-full flex justify-center flex-col items-center">
            <TabsList className="mb-8 w-fit bg-card border-[3px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic)]">
              <TabsTrigger value="dashboard" className="text-lg px-6 font-bold py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-[2px] data-[state=active]:border-border m-1 rounded-[calc(var(--radius-comic)-2px)]">The V1 Demo</TabsTrigger>
              <TabsTrigger value="components" className="text-lg px-6 font-bold py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-[2px] data-[state=active]:border-border m-1 rounded-[calc(var(--radius-comic)-2px)]">Interactive Primitives</TabsTrigger>
            </TabsList>

            {/* Tab 1: Dashboard V1 Showcase */}
            <TabsContent value="dashboard" className="w-full max-w-5xl mt-0 focus-visible:ring-0 focus-visible:outline-none">
              <Card className="border-[4px] border-border shadow-[var(--shadow-comic-lg)] overflow-hidden bg-card">
                <div className="bg-yellow-400 dark:bg-primary px-6 py-4 border-b-[4px] border-border flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Crown className="w-6 h-6 text-black dark:text-primary-foreground" />
                    <h3 className="font-black text-xl text-black dark:text-primary-foreground">Dashboard Demo App</h3>
                  </div>
                  <Link href="/dash">
                    <Button variant="default" size="sm" className="shadow-[var(--shadow-comic-sm)]">Open Live App <ArrowRight className="ml-2 w-4 h-4" /></Button>
                  </Link>
                </div>
                <CardContent className="p-0 relative group">
                  {/* Faux Browser Window rendering an abstract dashboard */}
                  <div className="h-[500px] w-full bg-background flex">
                    <div className="w-64 border-r-[3px] border-border bg-card p-6 hidden md:flex flex-col gap-4">
                      <div className="h-8 bg-blue-500 rounded border-[2px] border-border"></div>
                      <div className="h-8 bg-secondary rounded border-[2px] border-border mt-8"></div>
                      <div className="h-8 bg-secondary rounded border-[2px] border-border"></div>
                      <div className="h-8 bg-secondary rounded border-[2px] border-border"></div>
                    </div>
                    <div className="flex-1 p-6 lg:p-10 flex flex-col gap-6 bg-slate-50 dark:bg-background overflow-hidden relative">
                      <div className="flex justify-between items-center">
                        <TypographyH2 className="border-none mt-0 text-3xl">Overview</TypographyH2>
                        <div className="flex gap-2">
                          <Avatar className="border-[3px] border-border"><AvatarImage src="" /><AvatarFallback>US</AvatarFallback></Avatar>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(idx => (
                          <div key={idx} className="bg-white dark:bg-card border-[3px] border-border rounded-[var(--radius-comic)] p-4 shadow-[var(--shadow-comic-sm)]">
                            <div className="h-4 w-1/2 bg-muted rounded mb-4"></div>
                            <div className="h-8 w-3/4 bg-primary/20 dark:bg-primary/10 rounded"></div>
                          </div>
                        ))}
                      </div>

                      <div className="flex-1 bg-white dark:bg-card border-[3px] border-border rounded-[var(--radius-comic)] p-6 shadow-[var(--shadow-comic-sm)] mt-4">
                        <div className="h-full w-full border-[2px] border-dashed border-muted flex items-center justify-center rounded bg-secondary/50 dark:bg-background/50">
                            <span className="font-bold text-muted-foreground flex items-center gap-2"><ArrowRight className="w-5 h-5"/> Interactive charts & tables in live demo</span>
                        </div>
                      </div>

                      {/* Overlay to push to real demo */}
                      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link href="/dash">
                          <Button variant="default" className="text-xl px-10 py-8 shadow-[var(--shadow-comic-lg)] hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                            Enter The Panel
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab 2: Primitives Layout */}
            <TabsContent value="components" className="w-full max-w-5xl mt-0">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Login Demo */}
                  <Card className="shadow-[var(--shadow-comic)] border-[3px] border-border hover:-translate-y-1 transition-transform">
                    <CardHeader>
                      <CardTitle>Login Card</CardTitle>
                      <CardDescription>Authentication form primitive.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input placeholder="hero@hq.com" className="bg-white dark:bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label>Password</Label>
                        <Input type="password" placeholder="••••••••" className="bg-white dark:bg-background" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Sign In</Button>
                    </CardFooter>
                  </Card>

                  {/* Settings Demo */}
                  <Card className="shadow-[var(--shadow-comic)] border-[3px] border-border hover:-translate-y-1 transition-transform">
                    <CardHeader>
                      <CardTitle>Preferences</CardTitle>
                      <CardDescription>Toggle switches & states.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center justify-between border-[2px] border-border p-3 rounded-[var(--radius-comic)] bg-white dark:bg-background">
                        <Label className="text-base font-bold cursor-pointer text-black dark:text-foreground" htmlFor="notif">Alerts</Label>
                        <Switch id="notif" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between border-[2px] border-border p-3 rounded-[var(--radius-comic)] bg-white dark:bg-background">
                        <Label className="text-base font-bold cursor-pointer text-black dark:text-foreground" htmlFor="news">Newsletter</Label>
                        <Switch id="news" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Accordion Demo */}
                  <Card className="shadow-[var(--shadow-comic)] border-[3px] border-border hover:-translate-y-1 transition-transform md:col-span-2 lg:col-span-1">
                    <CardHeader>
                      <CardTitle>FAQ Accordion</CardTitle>
                      <CardDescription>Revealable content blocks.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full bg-white dark:bg-background border-[3px] border-border rounded-[var(--radius-comic)] overflow-hidden text-black dark:text-foreground">
                        <AccordionItem value="item-1" className="border-b-[3px] border-border">
                          <AccordionTrigger className="hover:no-underline hover:bg-muted px-4 font-bold text-black dark:text-foreground">Is it accessible?</AccordionTrigger>
                          <AccordionContent className="px-4 py-2 border-t-[3px] border-border bg-secondary text-black dark:text-secondary-foreground">
                            Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-b-0">
                          <AccordionTrigger className="hover:no-underline hover:bg-muted px-4 font-bold text-black dark:text-foreground">Is it styled?</AccordionTrigger>
                          <AccordionContent className="px-4 py-2 border-t-[3px] border-border bg-secondary text-black dark:text-secondary-foreground">
                            Yes. It comes with default styles that match the aesthetic.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
               </div>
               <div className="w-full flex justify-center mt-10">
                 <Link href="/components">
                   <Button variant="secondary" className="px-8 shadow-[var(--shadow-comic)]">View All 50+ Components</Button>
                 </Link>
               </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-24 px-6 md:px-12 bg-primary text-primary-foreground border-y-[4px] border-border flex flex-col items-center text-center overflow-hidden relative">
        <Star className="absolute top-10 right-20 w-16 h-16 text-black opacity-10 animate-spin-slow" />
        <Star className="absolute bottom-10 left-20 w-24 h-24 text-black opacity-10" />
        <CmdTerminal className="w-16 h-16 mb-8 text-black" />
        <TypographyH2 className="text-black text-5xl md:text-6xl border-none font-black uppercase mb-6 tracking-tight">
          Ready to save the day?
        </TypographyH2>
        <TypographyP className="text-black/80 font-bold text-xl md:text-2xl max-w-2xl mb-10">
          Drop C-Comic UI into your project today and start crafting interfaces that pack a punch!
        </TypographyP>
        <div className="flex bg-white rounded-[var(--radius-comic)] border-[4px] border-black p-2 items-center justify-between shadow-[var(--shadow-comic-lg)] max-w-2xl w-full flex-wrap gap-4 md:flex-nowrap">
          <code className="text-black font-bold px-4 py-2 text-lg font-mono flex-1 text-left">npm install c-comic-ui</code>
          <div className="flex items-center justify-end gap-2 w-full md:w-auto">
            <Button variant="outline" size="icon" onClick={onCopy} className="h-12 w-12 border-black bg-gray-100 hover:bg-gray-200">
              {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5 text-black" />}
            </Button>
            <Link href="/docs">
               <Button variant="default" className="text-lg h-12 px-6">Read Setup</Button>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}