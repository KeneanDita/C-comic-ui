import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/comic-ui/button"

export interface RichCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  badgeText?: string;
  badgeIcon?: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

const RichCard = React.forwardRef<HTMLDivElement, RichCardProps>(
  ({ className, imageSrc, badgeText, badgeIcon, icon, title, description, actionText, onAction, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          "w-full max-w-sm rounded-[var(--radius-comic)] border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-lg)] overflow-hidden bg-white dark:bg-card group hover:-translate-y-1 transition-transform cursor-pointer",
          className
        )}
        {...props}
      >
        <div className="h-40 bg-zinc-200 relative border-b-[3px] border-black dark:border-border overflow-hidden">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-80 group-hover:scale-110 transition-transform duration-500"></div>
          )}
          {badgeText && (
            <div className="absolute top-3 right-3 bg-yellow-400 text-black font-black uppercase text-[10px] px-2 py-1 rounded-[var(--radius-comic)] border-[2px] border-black flex items-center gap-1 shadow-sm">
              {badgeIcon} {badgeText}
            </div>
          )}
        </div>
        <div className="p-6 relative">
          {icon && (
            <div className="absolute -top-10 left-6 w-16 h-16 rounded-[var(--radius-comic)] bg-white dark:bg-card border-[3px] border-black shadow-[var(--shadow-comic-sm)] flex items-center justify-center overflow-hidden">
              {icon}
            </div>
          )}
          <div className={cn("mt-8", !icon && "mt-2")}>
            <h3 className="font-black text-2xl uppercase tracking-tight leading-none mb-2">{title}</h3>
            <p className="text-sm font-bold text-gray-600 mb-6">{description}</p>
            {actionText && (
              <Button 
                onClick={onAction} 
                className="w-full font-black uppercase border-[3px] border-black shadow-[var(--shadow-comic-sm)] hover:bg-yellow-400 hover:text-black"
              >
                {actionText}
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }
)
RichCard.displayName = "RichCard"

export { RichCard }