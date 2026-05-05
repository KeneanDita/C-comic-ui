"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:text-foreground group-[.toaster]:border-[3px] group-[.toaster]:border-border group-[.toaster]:shadow-[var(--shadow-comic)] group-[.toaster]:rounded-[var(--radius-comic)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
          success: "group-[.toaster]:bg-green-400 group-[.toaster]:text-black group-[.toaster]:border-black",
          error: "group-[.toaster]:bg-red-400 group-[.toaster]:text-black group-[.toaster]:border-black",
          warning: "group-[.toaster]:bg-yellow-400 group-[.toaster]:text-black group-[.toaster]:border-black",
          info: "group-[.toaster]:bg-blue-400 group-[.toaster]:text-white group-[.toaster]:border-black",
          title: "text-sm font-black uppercase tracking-wider",
          description: "group-[.toast]:text-muted-foreground group-data-[type]:text-current text-sm font-bold opacity-90",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:shadow-[var(--shadow-comic-sm)] font-black uppercase tracking-wider text-xs h-8 px-3 border-[2px] border-black rounded-[var(--radius-comic)]",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:border-[2px] group-[.toast]:border-black group-[.toast]:rounded-[var(--radius-comic)] font-black uppercase tracking-wider text-xs h-8 px-3",
          closeButton:
            "group-[.toast]:border-[2px] border-transparent hover:border-black group-[.toast]:rounded-[var(--radius-comic)] active:translate-x-[2px] active:translate-y-[2px] transition group-data-[type]:border-black/20 group-data-[type]:text-current hover:group-data-[type]:border-black",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
