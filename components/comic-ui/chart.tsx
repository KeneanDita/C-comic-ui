"use client"

import * as React from "react"

import { cn } from "./utils"

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: Record<string, { label: string; color: string }>
}

export interface ChartTooltipPayloadItem {
  name?: React.ReactNode
  value?: React.ReactNode
  color?: string
  payload?: { fill?: string }
}

export interface ChartTooltipContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean
  payload?: ChartTooltipPayloadItem[]
  label?: React.ReactNode
  hideLabel?: boolean
}

const CSS_IDENT = /^[a-zA-Z_][a-zA-Z0-9_-]*$/

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, config, children, ...props }, ref) => {
    // Scoped inline custom properties instead of an injected <style> tag, so
    // config values can never break out into arbitrary CSS.
    const colorVars = Object.entries(config).reduce<Record<string, string>>(
      (vars, [key, val]) => {
        if (CSS_IDENT.test(key)) vars[`--color-${key}`] = val.color
        return vars
      },
      {}
    )

    return (
      <div
        ref={ref}
        className={cn(
          "w-full bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] p-4 relative font-bold",
          className
        )}
        {...props}
      >
        <div
          data-chart-container
          className="w-full h-full"
          style={colorVars as React.CSSProperties}
        >
          {children}
        </div>
      </div>
    )
  }
)
ChartContainer.displayName = "ChartContainer"

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentProps
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
        {payload.map((item, index) => {
          return (
            <div key={`item-${index}`} className="flex items-center justify-between gap-4 font-bold text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full border-[2px] border-black dark:border-border" 
                  style={{ backgroundColor: item.color || item.payload?.fill }} 
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
