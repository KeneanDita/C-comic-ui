import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8 bg-halftone min-h-[calc(100vh-64px)]">
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
        </div>
      </div>

      <div className="mt-20 w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription className="text-white/80">Join the hero association today.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase tracking-tight">Hero Name</label>
              <Input placeholder="e.g. Captain Thunder" className="text-black" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase tracking-tight">Secret Identity</label>
              <Input type="password" placeholder="••••••••" className="text-black" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button variant="default" className="w-full text-black">Sign Up (BAM!)</Button>
            <Button variant="destructive" className="w-full text-white">Cancel</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}