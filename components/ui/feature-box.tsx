import type React from "react"
import { cn } from "@/lib/utils"

interface FeatureBoxProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureBox({ icon, title, description, className }: FeatureBoxProps) {
  return (
    <div
      className={cn(
        "bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center group hover:bg-white/20 transition-all duration-300",
        className,
      )}
    >
      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-gilroy-bold text-white text-xl mb-4">{title}</h3>
      <p className="font-gilroy-regular text-white/90 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
