import { Header } from "@/components/layout/header"
import { Footer } from "@/components/sections/footer"
import { AnimatedSection } from "@/components/ui/animated-section"
import { SectionHeading } from "@/components/ui/section-heading"
import { ServiceCard } from "@/components/ui/service-card"
import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"

const gentsServices = [
  {
    title: "Salon Pro",
    description: "Premium hair cutting and styling services",
    price: "From $25",
    rating: 5,
    reviews: 124,
    logoColor: "bg-blue-600",
  },
  {
    title: "Barber Shop",
    description: "Traditional barbering with modern touch",
    price: "From $20",
    rating: 5,
    reviews: 98,
    logoColor: "bg-gray-600",
  },
  {
    title: "Golden Cut",
    description: "Luxury grooming experience",
    price: "From $35",
    rating: 5,
    reviews: 87,
    logoColor: "bg-yellow-600",
  },
  {
    title: "Style Master",
    description: "Expert styling and grooming",
    price: "From $30",
    rating: 5,
    reviews: 156,
    logoColor: "bg-purple-600",
  },
  {
    title: "Elite Cuts",
    description: "Professional hair cutting services",
    price: "From $28",
    rating: 5,
    reviews: 203,
    logoColor: "bg-green-600",
  },
  {
    title: "Modern Barber",
    description: "Contemporary barbering techniques",
    price: "From $22",
    rating: 5,
    reviews: 145,
    logoColor: "bg-red-600",
  },
  {
    title: "Gentleman's",
    description: "Classic gentleman's grooming",
    price: "From $40",
    rating: 5,
    reviews: 178,
    logoColor: "bg-indigo-600",
  },
  {
    title: "Sharp Cuts",
    description: "Precision cutting and styling",
    price: "From $26",
    rating: 5,
    reviews: 234,
    logoColor: "bg-pink-600",
  },
]

const womenServices = [
  {
    title: "Maya's Salon",
    description: "Premium women's hair and beauty",
    price: "From $40",
    rating: 5,
    reviews: 203,
    logoColor: "bg-pink-600",
  },
  {
    title: "Lashes & More",
    description: "Eyelash extensions & beauty treatments",
    price: "From $30",
    rating: 5,
    reviews: 145,
    logoColor: "bg-orange-600",
  },
  {
    title: "Hair Studio",
    description: "Creative hair styling and coloring",
    price: "From $50",
    rating: 5,
    reviews: 178,
    logoColor: "bg-green-600",
  },
  {
    title: "Beauty Lounge",
    description: "Complete beauty and wellness",
    price: "From $35",
    rating: 5,
    reviews: 234,
    logoColor: "bg-blue-800",
  },
  {
    title: "Glamour Studio",
    description: "High-end styling and treatments",
    price: "From $45",
    rating: 5,
    reviews: 189,
    logoColor: "bg-purple-600",
  },
  {
    title: "Chic Salon",
    description: "Modern hair styling boutique",
    price: "From $38",
    rating: 5,
    reviews: 167,
    logoColor: "bg-yellow-600",
  },
  {
    title: "Elegance",
    description: "Sophisticated beauty services",
    price: "From $42",
    rating: 5,
    reviews: 198,
    logoColor: "bg-red-600",
  },
  {
    title: "Divine Beauty",
    description: "Luxury beauty and hair care",
    price: "From $48",
    rating: 5,
    reviews: 221,
    logoColor: "bg-indigo-600",
  },
]

export default function ExploreSaloonsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center">
                <h1 className="font-gilroy-bold text-4xl md:text-5xl text-gray-900 mb-4">Explore Saloons</h1>
                <p className="font-gilroy-regular text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover the best salons and barbershops in your area. From traditional cuts to modern styling, find
                  the perfect place for your grooming needs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Gents Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12">
              <SectionHeading centered className="mb-12">
                EXPLORE OUR SALOON FOR GENTS
              </SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gentsServices.map((service, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      price={service.price}
                      rating={service.rating}
                      reviews={service.reviews}
                      image="/placeholder.svg"
                      variant="gents"
                      logoColor={service.logoColor}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Business Account Promo */}
        <section className="py-16 bg-saloon-brown relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-white rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <div className="text-center text-white max-w-3xl mx-auto">
                <Gift className="w-16 h-16 mx-auto mb-6 text-white" />
                <h2 className="font-gilroy-bold text-3xl md:text-4xl mb-6">
                  WANNA OPEN YOUR OWN
                  <br />
                  BUSINESS ACCOUNT?
                </h2>
                <p className="font-gilroy-regular text-lg mb-8 text-white/90">
                  Join our network of professional salons and barbershops. Get access to exclusive business tools,
                  marketing support, and grow your business with us.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-saloon-brown hover:bg-gray-100 px-8 py-4 text-lg font-gilroy-medium"
                >
                  Start Your Business
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Women Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <SectionHeading centered className="mb-12">
                EXPLORE OUR SALOON FOR WOMAN
              </SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {womenServices.map((service, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      price={service.price}
                      rating={service.rating}
                      reviews={service.reviews}
                      image="/placeholder.svg"
                      variant="women"
                      logoColor={service.logoColor}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
