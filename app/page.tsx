"use client"

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
      
      {/* Hero Section */}
      <section className="w-full py-24 px-8 bg-halftone flex flex-col items-center justify-center border-b-[4px] border-border">
        <div className="flex flex-col items-center gap-6 max-w-2xl text-center bg-card text-card-foreground p-12 border-[4px] border-border shadow-[var(--shadow-comic)] rounded-[var(--radius-comic-lg)]">
          <TypographyH1 className="text-white">C-Comic UI</TypographyH1>
          <TypographyP className="text-white">
            A shadcn/ui inspired comic library for React and Next.js developers. Build hero-worthy interfaces with hand-drawn vibes and bold colors.
          </TypographyP>
          
          <div className="flex gap-4 mt-8">
            <Link href="/docs">
              <Button variant="default" className="text-lg px-8 py-6">Get Started (POW!)</Button>
            </Link>
            <Link href="/components">
              <Button variant="secondary" className="text-lg px-8 py-6">Browse Components</Button>
            </Link>
            <Link href="/dash">
              <Button variant="outline" className="text-lg px-8 py-6 bg-yellow-400 border-black hover:bg-yellow-500 text-black">View V1 Demo</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="w-full py-24 px-8 bg-background flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col gap-12 items-center">
          <div className="text-center">
            <TypographyH2 className="border-none text-4xl">Comic-Style Examples</TypographyH2>
            <TypographyP className="text-muted-foreground mt-4 text-lg">
              Combine basic primitives to create powerful, playful interfaces.
            </TypographyP>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 w-full">
            {/* Example 1: Profile Card */}
            <Card className="shadow-[var(--shadow-comic)] hover:-translate-y-1 hover:shadow-[var(--shadow-comic-lg)] transition-all">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <Avatar className="h-16 w-16 border-[3px] border-border">
                  <AvatarImage src="/Headshot%20(1).jpg" alt="@hero" />
                  <AvatarFallback className="text-2xl">HQ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Hero Profile</CardTitle>
                  <CardDescription className="text-white/80 mt-1">Level 99 Adventurer</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center space-x-3 bg-white p-3 rounded-[var(--radius-comic)] border-[3px] border-border text-black">
                  <Badge variant="destructive" className="text-sm px-3">PRO User</Badge>
                  <span className="font-bold flex-1 text-right">Rank: S-Class</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-[var(--radius-comic)] border-[3px] border-border text-black">
                  <Checkbox id="notifications" defaultChecked />
                  <Label htmlFor="notifications" className="text-black text-lg">Enable Alert Signals</Label>
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="default" className="w-full text-lg">View Stats</Button>
                <Button variant="outline" className="w-full text-lg text-black">Edit Info</Button>
              </CardFooter>
            </Card>

            {/* Example 2: Settings Panel */}
            <Card className="shadow-[var(--shadow-comic)] hover:-translate-y-1 hover:shadow-[var(--shadow-comic-lg)] transition-all">
              <CardHeader>
                <CardTitle>Gadget Settings</CardTitle>
                <CardDescription className="text-white/80">Adjust your utility belt preferences.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex items-center justify-between bg-white p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black">
                  <Label htmlFor="auto-deploy" className="text-black text-lg">Auto-Deploy Parachute</Label>
                  <Switch id="auto-deploy" defaultChecked />
                </div>
                <div className="flex items-center justify-between bg-white p-4 rounded-[var(--radius-comic)] border-[3px] border-border text-black">
                  <Label htmlFor="stealth-mode" className="text-black text-lg">Stealth Mode</Label>
                  <Switch id="stealth-mode" />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <Label className="text-white">Emergency Contact</Label>
                  <Input placeholder="BAT-SIGNAL FREQUENCY" className="text-black bg-white" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full text-lg">Save Configuration</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
    </div>
  );
}
