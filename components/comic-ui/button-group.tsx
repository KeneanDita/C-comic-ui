import * as React from "react"
import { cn } from "@/lib/utils"

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex -space-x-[3px] rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)]",
        "[&>button]:rounded-none [&>button]:shadow-none [&>button]:border-[3px] [&>button]:border-border",
        "[&>button:first-child]:rounded-l-[var(--radius-comic)]",
        "[&>button:last-child]:rounded-r-[var(--radius-comic)]",
        "[&>button:active]:translate-x-0 [&>button:active]:translate-y-0", // override comic button translation because they share borders
        "active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all", // the whole group translates instead
        className
      )}
      {...props}
    />
  )
})
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup }