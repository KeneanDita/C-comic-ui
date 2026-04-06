import * as React from "react"
import { cn } from "@/lib/utils"

export function TypographyH1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl uppercase",
        className
      )}
      {...props}
    />
  )
}

export function TypographyH2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b-[3px] border-border pb-2 text-3xl font-black tracking-tight first:mt-0 uppercase",
        className
      )}
      {...props}
    />
  )
}

export function TypographyH3({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-bold tracking-tight uppercase",
        className
      )}
      {...props}
    />
  )
}

export function TypographyP({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6 font-semibold", className)}
      {...props}
    />
  )
}

export function TypographyBlockquote({
  className,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-[3px] border-border pl-6 italic font-semibold text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}