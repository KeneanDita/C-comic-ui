"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-[var(--radius-comic)] text-sm font-black uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background hover:bg-muted hover:text-muted-foreground border-[var(--border-comic)] border-border bg-background shadow-[var(--shadow-comic)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--shadow-comic-hover)] data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:translate-x-[4px] data-[state=on]:translate-y-[4px] data-[state=on]:shadow-[var(--shadow-comic-active)]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border-[var(--border-comic)] border-input hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
