import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description?: string;
  image: string;
  price?: string;
  rating?: number;
  reviews?: number;
  className?: string;
  variant?: "gents" | "women";
  logoColor?: string;
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
        "group cursor-pointer transition-all duration-300 hover:shadow-xl border-2 border-[#8E98A8] overflow-hidden bg-white",
        className
      )}
    >
      <CardContent className="p-0 flex flex-col h-full">
        {/* Image */}
        <div className="aspect-square relative overflow-hidden">
          <div className="aspect-square overflow-hidden p-2">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between min-h-[220px] flex-1">
          <div>
            <div className="flex justify-between">
              <h3 className="font-gilroy-bold text-xl text-gray-900 mb-2">
                {title}
              </h3>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    )}
                  />
                ))}
                <span className="font-gilroy-regular text-sm text-gray-500 ml-2">
                  ({reviews})
                </span>
              </div>
            </div>

            {description && (
              <p className="font-gilroy-regular text-gray-600 text-sm">
                {description}
              </p>
            )}
          </div>

          {/* Button group pinned to bottom */}
          <div className="mt-6 flex items-center justify-between">
            <Button
              variant={"outline"}
              size="sm"
              className="border hover:bg-saloon-dark-brown text-[#5F402B] uppercase rounded-none"
            >
              Book Now
            </Button>
            <Button
              variant={"outline"}
              size="sm"
              className="border hover:bg-saloon-dark-brown text-[#5F402B] uppercase rounded-none"
            >
              Learn More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
