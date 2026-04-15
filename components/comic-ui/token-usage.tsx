import * as React from "react"
import { cn } from "@/lib/utils"
import { Progress } from "@/components/comic-ui/progress"

export interface TokenUsageProps extends React.HTMLAttributes<HTMLDivElement> {
  promptTokens: number;
  responseTokens: number;
  maxTokens: number;
  title?: string;
  subtitle?: string;
}

const TokenUsage = React.forwardRef<HTMLDivElement, TokenUsageProps>(
  ({ className, promptTokens, responseTokens, maxTokens, title = "Token Usage", subtitle = "Current Session", ...props }, ref) => {
    const total = promptTokens + responseTokens;
    const percentage = Math.min(100, Math.round((total / maxTokens) * 100));

    return (
      <div
        ref={ref}
        className={cn(
          "w-full max-w-sm bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] p-6 flex flex-col gap-4",
          className
        )}
        {...props}
      >
        <div className="flex justify-between items-end">
          <div>
            <h4 className="font-black text-xl uppercase tracking-tight">{title}</h4>
            <p className="text-xs font-bold text-gray-500">{subtitle}</p>
          </div>
          <div className="text-right">
            <span className="font-black text-2xl">{(total / 1000).toFixed(1)}k</span>
            <span className="text-sm font-bold text-gray-500">/{(maxTokens / 1000).toFixed(1)}k</span>
          </div>
        </div>
        <Progress value={percentage} className="h-4 border-[2px] border-black dark:border-border bg-gray-100" />
        <div className="flex gap-4 text-xs font-bold mt-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 border border-black"></div> 
            Prompt: {(promptTokens / 1000).toFixed(1)}k
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div> 
            Response: {(responseTokens / 1000).toFixed(1)}k
          </div>
        </div>
      </div>
    )
  }
)
TokenUsage.displayName = "TokenUsage"

export { TokenUsage }