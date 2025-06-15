import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
  centered?: boolean
}

export function SectionHeading({ children, className, centered = false }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-gilroy-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-8",
        centered && "text-center",
        className,
      )}
    >
      {children}
    </h2>
  )
}
