import { Header } from "@/components/layout/header"
import { Footer } from "@/components/sections/footer"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scissors, Sparkles, Crown, Users, Clock } from "lucide-react"

const services = [
  {
    category: "Hair Services",
    icon: <Scissors className="w-8 h-8" />,
    color: "bg-blue-600",
    services: [
      {
        name: "Classic Hair Cut",
        price: "$25",
        duration: "45 min",
        description: "Traditional hair cutting with modern techniques",
      },
      {
        name: "Beard Trimming",
        price: "$15",
        duration: "30 min",
        description: "Professional beard shaping and styling",
      },
      { name: "Hair Washing", price: "$10", duration: "20 min", description: "Premium hair washing with conditioning" },
      {
        name: "Hair Styling",
        price: "$20",
        duration: "30 min",
        description: "Professional hair styling for any occasion",
      },
    ],
  },
  {
    category: "Premium Services",
    icon: <Crown className="w-8 h-8" />,
    color: "bg-purple-600",
    services: [
      {
        name: "Hair Coloring",
        price: "$65",
        duration: "2 hours",
        description: "Professional hair coloring and highlights",
      },
      {
        name: "Hair Treatment",
        price: "$40",
        duration: "1 hour",
        description: "Deep conditioning and repair treatment",
      },
      {
        name: "Keratin Treatment",
        price: "$120",
        duration: "3 hours",
        description: "Smoothing and strengthening treatment",
      },
      {
        name: "Hair Extensions",
        price: "$150",
        duration: "2.5 hours",
        description: "Premium hair extension application",
      },
    ],
  },
  {
    category: "Spa & Wellness",
    icon: <Sparkles className="w-8 h-8" />,
    color: "bg-green-600",
    services: [
      { name: "Head Massage", price: "$30", duration: "45 min", description: "Relaxing scalp and head massage" },
      { name: "Face Cleansing", price: "$35", duration: "1 hour", description: "Deep cleansing facial treatment" },
      {
        name: "Eyebrow Shaping",
        price: "$20",
        duration: "30 min",
        description: "Professional eyebrow trimming and shaping",
      },
      { name: "Manicure & Pedicure", price: "$45", duration: "1.5 hours", description: "Complete nail care service" },
    ],
  },
  {
    category: "Special Packages",
    icon: <Users className="w-8 h-8" />,
    color: "bg-orange-600",
    services: [
      { name: "Bridal Package", price: "$200", duration: "4 hours", description: "Complete bridal hair and makeup" },
      {
        name: "Groom Package",
        price: "$80",
        duration: "2 hours",
        description: "Complete grooming for special occasions",
      },
      { name: "Father & Son", price: "$35", duration: "1 hour", description: "Special package for father and son" },
      { name: "Group Booking", price: "15% OFF", duration: "Varies", description: "Discount for 3 or more people" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-r from-saloon-brown to-saloon-dark-brown text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center">
                <h1 className="font-gilroy-bold text-4xl md:text-5xl mb-4 text-saloon-brown">Our Services</h1>
                <p className="font-gilroy-regular text-lg max-w-2xl mx-auto text-saloon-brown">
                  Discover our comprehensive range of professional hair and beauty services designed to make you look
                  and feel your best.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((category, categoryIndex) => (
                <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.2}>
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center mb-8">
                      <div className={`${category.color} p-3 rounded-lg mr-4`}>{category.icon}</div>
                      <h2 className="font-gilroy-bold text-3xl text-gray-900">{category.category}</h2>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <AnimatedSection key={serviceIndex} delay={serviceIndex * 0.1}>
                          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 bg-white h-full">
                            <CardHeader className="pb-4">
                              <div className="flex items-center justify-between mb-2">
                                <CardTitle className="font-gilroy-bold text-lg text-gray-900">{service.name}</CardTitle>
                                <Badge className={`${category.color} text-white`}>{service.price}</Badge>
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="w-4 h-4 mr-1" />
                                {service.duration}
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="font-gilroy-regular text-gray-600 text-sm mb-4 leading-relaxed">
                                {service.description}
                              </p>
                              <Button
                                size="sm"
                                className="w-full bg-saloon-brown hover:bg-saloon-dark-brown text-white font-gilroy-medium"
                              >
                                Book Now
                              </Button>
                            </CardContent>
                          </Card>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
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
                  Ready to Transform Your Look?
                </h2>
                <p className="font-gilroy-regular text-lg text-gray-600 mb-8">
                  Book your appointment today and experience our premium services with expert stylists who care about
                  your satisfaction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium"
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-saloon-brown text-saloon-brown hover:bg-saloon-brown hover:text-white px-8 py-4 text-lg font-gilroy-medium"
                  >
                    View Gallery
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
