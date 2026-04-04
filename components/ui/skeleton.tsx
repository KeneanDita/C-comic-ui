import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-[var(--radius-comic)] border-[3px] border-border border-dashed bg-muted shadow-[var(--shadow-comic-sm)]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }