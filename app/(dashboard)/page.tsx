import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/comic-ui/card"
import { Button } from "@/components/comic-ui/button"
import { Users, DollarSign, Activity, ArrowRight, TrendingUp, AlertTriangle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12 relative">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-[var(--radius-comic)] border-[var(--border-comic)] border-black dark:border-border shadow-[var(--shadow-comic-lg)] -rotate-12 translate-x-1/2 -translate-y-1/3 opacity-20 pointer-events-none blur-sm"></div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-yellow-400 drop-shadow-[3px_3px_0_#000] relative">
            <span className="absolute -left-4 -top-2 text-2xl rotate-12 drop-shadow-none text-red-500">BOOM!</span>
            Mission Control
          </h1>
          <p className="text-xl font-bold bg-white dark:bg-card inline-block px-3 py-1 border-[var(--border-comic)] border-black dark:border-border rounded-[var(--radius-comic)] mt-2 shadow-[var(--shadow-comic-sm)] rotate-1">
            Welcome back to the headquarters, hero.
          </p>
        </div>
        <Button size="lg" className="text-base bg-black text-white hover:bg-gray-800 border-[var(--border-comic)] shadow-[var(--shadow-comic)] hover:translate-y-[2px] transition-transform">
          New Mission <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Stats Grid using Composable Primitives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <StatCard title="Active Heroes" value="1,204" icon={<Users className="h-24 w-24" />} trend="+12% this month" bg="bg-blue-400" text="text-white" cardClass="-rotate-1 hover:rotate-2 transition-transform" />
        <StatCard title="Bounties Collected" value="$45,231" icon={<DollarSign className="h-24 w-24" />} trend="+18% this month" bg="bg-green-400" text="text-black dark:text-foreground" cardClass="rotate-2 hover:-rotate-1 transition-transform" />
        <StatCard title="Threat Level" value="Minimal" icon={<Activity className="h-24 w-24" />} trend="All systems normal" bg="bg-yellow-400" text="text-black dark:text-foreground" cardClass="-rotate-2 hover:rotate-1 transition-transform" />
      </div>

      {/* Main Content Areas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        <div className="lg:col-span-2 space-y-6">
          <Card className="h-[450px] flex flex-col bg-white dark:bg-card">
            <CardHeader className="bg-purple-100 rounded-t-[calc(var(--radius-comic)-3px)]" style={{ borderBottom: 'var(--border-comic) solid var(--border)' }}>
              <div className="absolute top-[-15px] left-8 bg-black text-white text-xs font-black uppercase px-3 py-1 -rotate-3 border-[2px] border-white shadow-sm">Live Feed</div>
              <CardTitle className="flex items-center gap-2 text-2xl pt-2">
                <TrendingUp className="h-6 w-6 text-purple-600" /> Hero Transport Network
              </CardTitle>
              <CardDescription className="text-purple-800 font-bold">Real-time dropship locations across the metro.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center bg-gray-50 m-6 border-[3px] border-dashed border-gray-300 rounded-[var(--radius-comic)] shadow-[inset_0_4px_10px_rgba(0,0,0,0.05)]">
               <span className="font-black text-2xl text-gray-400 uppercase tracking-tighter rotate-1">Chart Primitive Area</span>
               <p className="text-gray-500 font-bold mt-2">Requires Recharts abstraction.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full sm:w-auto font-black shadow-[var(--shadow-comic-sm)]">Generate PDF</Button>
              <Button variant="ghost" className="w-full sm:w-auto font-black shadow-none border-[2px] border-transparent hover:border-black dark:border-border hover:bg-yellow-200">Share Report</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-white dark:bg-card overflow-hidden">
            <CardHeader className="bg-red-400 text-white rounded-t-[calc(var(--radius-comic)-3px)]" style={{ borderBottom: 'var(--border-comic) solid var(--border)' }}>
              <CardTitle className="flex items-center gap-2 drop-shadow-[1px_1px_0_#000] text-xl">
                <AlertTriangle className="h-6 w-6 stroke-black stroke-[3px]" /> Top Threats
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y-[var(--border-comic)] divide-black">
                <ThreatItem name="Doctor Doom" location="Downtown District" status="At Large" />
                <ThreatItem name="Laser Beak" location="Industrial Zone" status="Tracking" />
                <ThreatItem name="The Scrambler" location="Cyber Web" status="Contained" />
                <ThreatItem name="Null Void" location="Unknown Sector" status="At Large" />
                <ThreatItem name="Omega Protocol" location="Facility 7" status="Contained" />
              </div>
            </CardContent>
            <CardFooter className="bg-gray-100 p-4 border-t-[var(--border-comic)] border-black dark:border-border flex justify-center">
              <Button variant="link" className="text-black dark:text-foreground font-black uppercase tracking-wider text-xs">View Full Rogues Gallery &rarr;</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon, trend, bg, text, cardClass }: { title: string, value: string, icon: React.ReactNode, trend: string, bg: string, text: string, cardClass?: string }) {
  return (
    <Card className={`${bg} ${text} overflow-hidden relative shadow-[var(--shadow-comic-lg)] ${cardClass || ''}`}>
      <div className="absolute right-[-20px] top-[-10px] opacity-[0.15] pointer-events-none z-0">
        {icon}
      </div>
      <CardHeader className="border-b-[var(--border-comic)] border-black dark:border-border/20 pb-4 z-10 relative">
        <CardTitle className="text-lg opacity-90 drop-shadow-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 pb-4 z-10 relative">
        <div className="text-5xl font-black drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)] tracking-tighter">{value}</div>
      </CardContent>
      <CardFooter className="bg-black/10 border-t-[var(--border-comic)] border-black dark:border-border/20 py-3 mt-0 z-10 relative">
        <span className="text-sm font-black uppercase tracking-widest">{trend}</span>
      </CardFooter>
    </Card>
  )
}

function ThreatItem({ name, location, status }: { name: string, location: string, status: string }) {
  const isDanger = status === 'At Large';
  const isTracking = status === 'Tracking';
  
  return (
    <div className={`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors bg-white dark:bg-card`}>
      <div>
        <div className="font-black uppercase text-lg tracking-tight leading-none">{name}</div>
        <div className="text-xs font-bold text-gray-500 mt-1">{location}</div>
      </div>
      <div className={`text-[10px] font-black uppercase px-2 py-1 border-[2px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[1px_1px_0_0_rgba(0,0,0,1)]
        ${isDanger ? 'bg-red-400 text-white' : isTracking ? 'bg-yellow-400 text-black dark:text-foreground' : 'bg-green-400 text-black dark:text-foreground'} 
      `}>
        {status}
      </div>
    </div>
  )
}
