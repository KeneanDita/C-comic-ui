"use client"

import * as React from "react"
import Link from "next/link"
import { Search, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b-[3px] border-border bg-card text-card-foreground shadow-[var(--shadow-comic)]">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-6 md:gap-10 text-white">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-black text-xl tracking-tight uppercase">C-Comic UI</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className="flex items-center text-sm font-bold uppercase transition-colors hover:text-white/80"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="flex items-center text-sm font-bold uppercase transition-colors hover:text-white/80"
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="flex items-center text-sm font-bold uppercase transition-colors hover:text-white/80"
            >
              Components
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="w-full flex-1 md:w-auto md:flex-none max-w-sm rounded-[var(--radius-comic)] flex items-center relative text-foreground">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search components..."
              className="pl-8 bg-background border-[3px] border-border w-full md:w-[300px] shadow-none focus-visible:shadow-[var(--shadow-comic-sm)] h-9"
            />
          </div>
          <nav className="flex items-center gap-2">
            <Link href="https://github.com/keneandita/c-comic-ui" target="_blank" rel="noreferrer">
              <Button variant="outline" size="icon" className="h-9 w-9 bg-white text-black border-border shadow-[var(--shadow-comic-sm)] hover:shadow-[var(--shadow-comic)] dark:bg-card dark:text-foreground">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="h-9 w-9 bg-white text-black border-border shadow-[var(--shadow-comic-sm)] hover:shadow-[var(--shadow-comic)] dark:bg-card dark:text-foreground">
              <Moon className="h-4 w-4 hidden dark:block" />
              <Sun className="h-4 w-4 block dark:hidden" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}