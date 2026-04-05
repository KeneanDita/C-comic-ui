import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-black uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-[var(--border-comic)] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--shadow-comic-hover)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[var(--shadow-comic-active)]",
        destructive:
          "bg-destructive text-destructive-foreground border-[var(--border-comic)] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--shadow-comic-hover)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[var(--shadow-comic-active)]",
        outline:
          "border-[var(--border-comic)] border-border bg-background hover:bg-secondary hover:text-secondary-foreground rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--shadow-comic-hover)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[var(--shadow-comic-active)]",
        secondary:
          "bg-secondary text-secondary-foreground border-[var(--border-comic)] border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[var(--shadow-comic-hover)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[var(--shadow-comic-active)]",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-[var(--radius-comic)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
