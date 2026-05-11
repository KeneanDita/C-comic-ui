"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

export type CalendarProps = React.HTMLAttributes<HTMLDivElement> & {
  selected?: Date
  onSelect?: (date: Date) => void
  month?: Date
  onMonthChange?: (month: Date) => void
}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, selected, onSelect, month: monthProp, onMonthChange, ...props }, ref) => {
    const [currentMonth, setCurrentMonth] = React.useState(monthProp || new Date())
    
    // Update internal state if controlled prop changes
    React.useEffect(() => {
      if (monthProp) setCurrentMonth(monthProp)
    }, [monthProp])

    const handleMonthChange = (newMonth: Date) => {
      setCurrentMonth(newMonth)
      onMonthChange?.(newMonth)
    }

    const nextMonth = () => {
      handleMonthChange(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
    }

    const prevMonth = () => {
      handleMonthChange(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
    }

    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay()

    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i))
    }

    const isSameDay = (d1?: Date | null, d2?: Date | null) => {
      if (!d1 || !d2) return false
      return d1.getDate() === d2.getDate() && 
             d1.getMonth() === d2.getMonth() && 
             d1.getFullYear() === d2.getFullYear()
    }

    const monthYearString = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })
    const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

    return (
      <div 
        ref={ref} 
        className={cn(
          "p-4 bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] inline-block select-none", 
          className
        )} 
        {...props}
      >
        <div className="flex justify-between items-center mb-4">
          <button 
            type="button"
            onClick={prevMonth}
            className="h-8 w-8 inline-flex justify-center items-center rounded-full bg-white dark:bg-card border-[2px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] hover:-translate-y-[2px] transition-transform active:translate-y-0 active:shadow-none"
          >
            <ChevronLeft className="h-4 w-4 stroke-[3px]" />
          </button>
          <div className="font-black uppercase tracking-wider text-sm">
            {monthYearString}
          </div>
          <button 
            type="button"
            onClick={nextMonth}
            className="h-8 w-8 inline-flex justify-center items-center rounded-full bg-white dark:bg-card border-[2px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] hover:-translate-y-[2px] transition-transform active:translate-y-0 active:shadow-none"
          >
            <ChevronRight className="h-4 w-4 stroke-[3px]" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {dayNames.map(day => (
            <div key={day} className="text-[10px] font-black uppercase text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((date, i) => {
            if (!date) return <div key={`empty-${i}`} className="h-8 w-8" />
            
            const isSelected = isSameDay(date, selected)
            const isToday = isSameDay(date, new Date())

            return (
              <button
                key={date.toISOString()}
                type="button"
                onClick={() => onSelect?.(date)}
                className={cn(
                  "h-8 w-8 inline-flex justify-center items-center rounded-full text-sm font-bold border-[2px] transition-all",
                  isSelected 
                    ? "bg-primary text-primary-foreground border-black shadow-[var(--shadow-comic-sm)] scale-110 font-black z-10" 
                    : "bg-transparent border-transparent hover:border-black dark:hover:border-border hover:bg-secondary",
                  isToday && !isSelected && "text-blue-600 dark:text-blue-400 font-black underline underline-offset-2"
                )}
              >
                {date.getDate()}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
)
Calendar.displayName = "Calendar"

export { Calendar }