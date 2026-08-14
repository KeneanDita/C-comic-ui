"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "./utils"

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn("relative group w-full", className)} 
        {...props}
      >
        {children}
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

export interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="overflow-hidden w-full h-full rounded-[var(--radius-comic)] border-[3px] border-black dark:border-border shadow-[var(--shadow-comic)] bg-white dark:bg-card">
        <div
          ref={ref}
          className={cn(
            "flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar p-2 gap-4",
            className
          )}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          {...props}
        >
          {children}
        </div>
      </div>
    )
  }
)
CarouselContent.displayName = "CarouselContent"

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full snap-center",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CarouselItem.displayName = "CarouselItem"

export interface CarouselPreviousProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  containerRef?: React.RefObject<HTMLDivElement | null>
}

const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(
  ({ className, containerRef, onClick, ...props }, ref) => {
    const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (containerRef?.current) {
        containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' })
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleScroll}
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 z-10 inline-flex items-center justify-center rounded-full bg-white dark:bg-card border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] hover:-translate-y-[calc(50%+2px)] active:shadow-none active:-translate-y-1/2 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 focus-visible:opacity-100 outline-none",
          className
        )}
        {...props}
      >
        <ArrowLeft className="h-5 w-5 stroke-[3px]" />
        <span className="sr-only">Previous slide</span>
      </button>
    )
  }
)
CarouselPrevious.displayName = "CarouselPrevious"

export interface CarouselNextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  containerRef?: React.RefObject<HTMLDivElement | null>
}

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  ({ className, containerRef, onClick, ...props }, ref) => {
    const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (containerRef?.current) {
        containerRef.current.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' })
      }
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleScroll}
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-10 w-10 z-10 inline-flex items-center justify-center rounded-full bg-white dark:bg-card border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-sm)] hover:-translate-y-[calc(50%+2px)] active:shadow-none active:-translate-y-1/2 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 focus-visible:opacity-100 outline-none",
          className
        )}
        {...props}
      >
        <ArrowRight className="h-5 w-5 stroke-[3px]" />
        <span className="sr-only">Next slide</span>
      </button>
    )
  }
)
CarouselNext.displayName = "CarouselNext"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
