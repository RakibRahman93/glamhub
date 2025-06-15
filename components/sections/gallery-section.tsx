import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading centered className="mb-16">
            EXPLORE OUR PARLOURS
          </SectionHeading>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h3 className="font-gilroy-bold text-4xl text-gray-900 leading-tight">
                Creative Styles &<br />
                Niche Look
              </h3>
              <p className="font-gilroy-regular text-gray-600 text-lg leading-relaxed">
                Experience the artistry of professional hair styling in our modern salon environment. Our expert
                stylists create unique looks tailored to your personality and lifestyle, ensuring you leave feeling
                confident and beautiful.
              </p>
              <Button className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium">
                Book Beauty Saloon & Parlors
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300">
                    <img
                      src="/placeholder.svg?height=500&width=400"
                      alt="Salon interior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden mt-8">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300">
                    <img
                      src="/placeholder.svg?height=500&width=400"
                      alt="Hair styling"
                      className="w-full h-full object-cover"
                    />
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
