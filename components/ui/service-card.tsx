import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description?: string
  image: string
  price?: string
  rating?: number
  reviews?: number
  className?: string
  variant?: "gents" | "women"
  logoColor?: string
}

export function ServiceCard({
  title,
  description,
  image,
  price,
  rating = 5,
  reviews = 0,
  className,
  variant = "gents",
  logoColor = "bg-blue-600",
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 overflow-hidden bg-white",
        className,
      )}
    >
      <CardContent className="p-0">
        <div
          className={cn("aspect-square relative overflow-hidden", variant === "gents" ? "bg-gray-800" : "bg-gray-900")}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={cn("w-20 h-20 rounded-lg flex items-center justify-center", logoColor)}>
              <span className="font-gilroy-bold text-white text-2xl">{title.charAt(0)}</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-gilroy-bold text-xl text-gray-900 mb-2">{title}</h3>
          {description && <p className="font-gilroy-regular text-gray-600 text-sm mb-3">{description}</p>}

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn("w-4 h-4", i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300")}
                />
              ))}
            </div>
            <span className="font-gilroy-regular text-sm text-gray-500 ml-2">({reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            {price && <span className="font-gilroy-bold text-saloon-brown text-lg">{price}</span>}
            <Button size="sm" className="bg-saloon-brown hover:bg-saloon-dark-brown text-white">
              Book Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
