import { Header } from "@/components/layout/header"
import { Footer } from "@/components/sections/footer"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Percent, Clock, Star } from "lucide-react"

const offers = [
  {
    title: "First Visit Special",
    discount: "30% OFF",
    description: "Get 30% off on your first booking with any of our premium services",
    validUntil: "Valid until Dec 31, 2024",
    code: "FIRST30",
    icon: <Gift className="w-8 h-8" />,
    color: "bg-green-600",
  },
  {
    title: "Weekend Warriors",
    discount: "25% OFF",
    description: "Special weekend rates for all grooming services. Book your Saturday or Sunday slot now",
    validUntil: "Valid on weekends only",
    code: "WEEKEND25",
    icon: <Clock className="w-8 h-8" />,
    color: "bg-blue-600",
  },
  {
    title: "Student Discount",
    discount: "20% OFF",
    description: "Students get exclusive discounts on all services. Valid student ID required",
    validUntil: "Valid with student ID",
    code: "STUDENT20",
    icon: <Star className="w-8 h-8" />,
    color: "bg-purple-600",
  },
  {
    title: "Group Booking",
    discount: "15% OFF",
    description: "Book for 3 or more people and get 15% off on total bill",
    validUntil: "Minimum 3 people required",
    code: "GROUP15",
    icon: <Percent className="w-8 h-8" />,
    color: "bg-orange-600",
  },
  {
    title: "Monthly Package",
    discount: "40% OFF",
    description: "Subscribe to our monthly grooming package and save big on regular visits",
    validUntil: "Monthly subscription",
    code: "MONTHLY40",
    icon: <Gift className="w-8 h-8" />,
    color: "bg-red-600",
  },
  {
    title: "Bridal Special",
    discount: "35% OFF",
    description: "Complete bridal package including hair, makeup, and styling services",
    validUntil: "Book 2 weeks in advance",
    code: "BRIDAL35",
    icon: <Star className="w-8 h-8" />,
    color: "bg-pink-600",
  },
]

export default function OffersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-r from-saloon-brown to-saloon-dark-brown text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center">
                <h1 className="font-gilroy-bold text-4xl md:text-5xl mb-4 text-saloon-brown">Special Offers</h1>
                <p className="font-gilroy-regular text-lg max-w-2xl mx-auto text-saloon-brown">
                  Don't miss out on our exclusive deals and discounts. Save money while getting the best grooming
                  services in town.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offers.map((offer, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 overflow-hidden bg-white">
                    <CardContent className="p-0">
                      <div className={`${offer.color} p-6 text-white relative overflow-hidden`}>
                        <div className="absolute top-4 right-4 opacity-20">{offer.icon}</div>
                        <div className="relative z-10">
                          <Badge className="bg-white/20 text-white mb-4">{offer.discount}</Badge>
                          <h3 className="font-gilroy-bold text-2xl mb-2">{offer.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="font-gilroy-regular text-gray-600 mb-4 leading-relaxed">{offer.description}</p>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-gilroy-medium text-sm text-gray-500">{offer.validUntil}</span>
                            <Badge variant="outline" className="font-gilroy-medium">
                              {offer.code}
                            </Badge>
                          </div>
                          <Button className="w-full bg-saloon-brown hover:bg-saloon-dark-brown text-white font-gilroy-medium">
                            Claim Offer
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-gilroy-bold text-3xl md:text-4xl text-gray-900 mb-6">
                  Ready to Save on Your Next Visit?
                </h2>
                <p className="font-gilroy-regular text-lg text-gray-600 mb-8">
                  Book your appointment now and use any of our exclusive promo codes to get amazing discounts on premium
                  grooming services.
                </p>
                <Button
                  size="lg"
                  className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium"
                >
                  Book Appointment Now
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
