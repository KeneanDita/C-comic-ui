import * as React from "react"
import { Zap, Home, Settings, Users, Folder, Search, Bell } from "lucide-react"
import { Input } from "@/components/comic-ui/input"
import { Button } from "@/components/comic-ui/button"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-background font-sans overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex w-64 flex-col border-r-[var(--border-comic)] border-border bg-white dark:bg-card z-20 shadow-[var(--shadow-comic)] relative">
        <div className="flex h-16 shrink-0 items-center justify-center border-b-[var(--border-comic)] bg-yellow-400 border-border px-6 shadow-sm z-10">
          <Zap className="h-6 w-6 text-black dark:text-foreground fill-black mr-2 animate-bounce" />
          <span className="font-black text-xl uppercase tracking-wider text-black dark:text-foreground drop-shadow-[1px_1px_0_#fff]">Comic<span className="text-white drop-shadow-[1px_1px_0_#000]">UI</span></span>
        </div>
        
        <nav className="flex-1 space-y-2 p-4 overflow-y-auto">
          <NavItem icon={<Home className="h-5 w-5" />} label="Headquarters" active />
          <NavItem icon={<Users className="h-5 w-5" />} label="Hero Roster" />
          <NavItem icon={<Folder className="h-5 w-5" />} label="Mission Logs" />
          <NavItem icon={<Settings className="h-5 w-5" />} label="Utility Belt" />
        </nav>

        <div className="p-4 border-t-[var(--border-comic)] border-border bg-blue-100 relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-300 rounded-full blur-xl opacity-50 pointer-events-none"></div>
          <div className="bg-white dark:bg-card border-[var(--border-comic)] border-border p-4 rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] text-center relative z-10 transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-yellow-400 text-black dark:text-foreground text-[10px] font-black uppercase px-2 py-0.5 border-[2px] border-black dark:border-border rounded-sm transform rotate-3">
              Pro Member
            </div>
            <p className="text-sm font-black mt-2">Maximum Power!</p>
            <p className="text-xs text-muted-foreground font-bold mt-1">All features unlocked.</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex flex-1 flex-col min-w-0 relative z-10 overflow-hidden bg-halftone">
        {/* Top Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b-[var(--border-comic)] border-border bg-white dark:bg-card px-6 z-20 shadow-[5px_5px_0_0_rgba(0,0,0,0.05)] relative">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-sm hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground font-bold" />
              <Input className="pl-9 bg-gray-50 border-[2px] border-black dark:border-border rounded-full" placeholder="Search the multiverse..." />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative rounded-full h-10 w-10 bg-gray-100 border-[2px] border-transparent hover:border-black dark:border-border">
              <Bell className="h-4 w-4" />
              <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-[2px] border-black dark:border-border animate-ping"></span>
              <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-[2px] border-black dark:border-border"></span>
            </Button>
            <div className="h-10 w-10 rounded-full border-[var(--border-comic)] border-black dark:border-border bg-purple-500 text-white flex items-center justify-center shadow-[var(--shadow-comic-sm)] font-black cursor-pointer hover:translate-y-[2px] hover:shadow-none transition-all">
              KW
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-3 py-3 rounded-[var(--radius-comic)] font-black transition-all border-[var(--border-comic)] ${active ? 'bg-primary border-black dark:border-border shadow-[var(--shadow-comic-sm)] translate-x-[2px] translate-y-[2px]' : 'border-transparent text-gray-600 hover:border-black dark:border-border hover:bg-white dark:bg-card hover:text-black dark:text-foreground shadow-none hover:shadow-[var(--shadow-comic-sm)] hover:-translate-y-1'}`}>
      {icon}
      {label}
    </a>
  )
}
