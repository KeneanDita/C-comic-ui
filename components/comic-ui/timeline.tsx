import * as React from "react"
import { cn } from "@/lib/utils"

export interface TimelineItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  iconBgColor?: string;
  title: React.ReactNode;
  time: React.ReactNode;
  children?: React.ReactNode;
  isLast?: boolean;
  isActive?: boolean;
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, icon, iconBgColor = "bg-zinc-200", title, time, children, isLast, isActive, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex gap-4 relative z-10", className)} {...props}>
        <div 
          className={cn(
            "w-8 h-8 rounded-full border-[3px] border-black dark:border-border flex items-center justify-center shrink-0 shadow-[var(--shadow-comic-sm)]",
            iconBgColor,
            isActive && "animate-pulse"
          )}
        >
          {icon}
        </div>
        <div className="pb-6">
          <div className="font-black text-sm uppercase">{title}</div>
          <div className="text-xs font-bold text-gray-500">{time}</div>
          {children && (
            <div className="mt-2 text-sm font-bold bg-blue-50 dark:bg-blue-950/30 p-2 rounded-[var(--radius-comic)] border-[2px] border-black dark:border-border">
              {children}
            </div>
          )}
        </div>
      </div>
    )
  }
)
TimelineItem.displayName = "TimelineItem"

export interface TimelineProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  icon?: React.ReactNode;
}

const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn(
          "w-full max-w-md bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] p-6",
          className
        )}
        {...props}
      >
        {(title || icon) && (
          <h4 className="font-black text-2xl uppercase tracking-tight mb-6 flex items-center gap-2">
            {icon} {title}
          </h4>
        )}
        <div className="flex flex-col relative">
          <div className="absolute left-[15px] top-4 bottom-4 w-[3px] bg-black dark:bg-border"></div>
          {children}
        </div>
      </div>
    )
  }
)
Timeline.displayName = "Timeline"

export { Timeline, TimelineItem }