import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Download } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function AppSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h2 className="font-gilroy-bold text-4xl md:text-5xl text-gray-900">
                PICK US IN YOUR
                <br />
                <span className="text-saloon-brown">POCKET</span>
              </h2>
              <p className="font-gilroy-regular text-gray-600 text-lg leading-relaxed">
                Download our mobile app for easy booking, exclusive offers, and seamless salon experience. Available on
                both iOS and Android platforms with user-friendly interface.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 font-gilroy-medium">
                  <Download className="w-5 h-5 mr-2" />
                  App Store
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 font-gilroy-medium">
                  <Download className="w-5 h-5 mr-2" />
                  Google Play
                </Button>
              </div>

              <div className="pt-6">
                <div className="w-32 h-32 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-900 rounded grid grid-cols-8 gap-px p-2">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className={`${Math.random() > 0.5 ? "bg-white" : "bg-gray-900"} rounded-sm`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex justify-center">
              <Card className="w-80 overflow-hidden shadow-2xl bg-saloon-brown">
                <CardContent className="p-4">
                  <div className="aspect-[9/16] bg-white rounded-2xl p-4 flex flex-col">
                    <div className="h-12 bg-saloon-brown rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="h-3 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                      <div className="h-16 bg-gray-100 rounded" />
                      <div className="h-3 bg-gray-200 rounded w-2/3" />
                      <div className="h-3 bg-gray-200 rounded w-1/3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
