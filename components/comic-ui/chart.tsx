"use client"

import * as React from "react"
import { TooltipProps } from "recharts"

import { cn } from "@/lib/utils"

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: Record<string, { label: string; color: string }>
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, config, children, ...props }, ref) => {
    // Generate CSS variables for the chart colors based on config
    const styleStr = Object.entries(config).map(([key, val]) => {
      return `--color-${key}: ${val.color};`
    }).join(' ')

    return (
      <div 
        ref={ref} 
        className={cn(
          "w-full bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] p-4 relative font-bold",
          className
        )}
        style={{ ...props.style } as React.CSSProperties}
        {...props}
      >
        <style dangerouslySetInnerHTML={{ __html: `[data-chart-container] { ${styleStr} }` }} />
        <div data-chart-container className="w-full h-full">
          {children}
        </div>
      </div>
    )
  }
)
ChartContainer.displayName = "ChartContainer"

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  any
>(({ active, payload, label, hideLabel, className }, ref) => {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-sm)] p-3",
        className
      )}
    >
      {!hideLabel && (
        <div className="font-black uppercase text-xs mb-2 border-b-[2px] border-border pb-1">
          {label}
        </div>
      )}
      <div className="space-y-1">
        {payload.map((item: any, index: number) => {
          return (
            <div key={`item-${index}`} className="flex items-center justify-between gap-4 font-bold text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full border-[2px] border-black dark:border-border" 
                  style={{ backgroundColor: item.color || item.payload.fill }} 
                />
                <span className="capitalize">{item.name}</span>
              </div>
              <span className="font-black">{item.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltipContent }
