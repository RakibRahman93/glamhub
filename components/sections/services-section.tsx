import { SectionHeading } from "@/components/ui/section-heading"
import { ServiceCard } from "@/components/ui/service-card"
import { AnimatedSection } from "@/components/ui/animated-section"

const gentsServices = [
  {
    title: "Salon",
    description: "Professional hair cutting and styling",
    price: "From $25",
    rating: 5,
    reviews: 124,
    logoColor: "bg-blue-600",
  },
  {
    title: "Barber",
    description: "Traditional barbering services",
    price: "From $20",
    rating: 5,
    reviews: 98,
    logoColor: "bg-gray-600",
  },
  {
    title: "Spa",
    description: "Relaxing spa treatments",
    price: "From $45",
    rating: 5,
    reviews: 87,
    logoColor: "bg-yellow-600",
  },
  {
    title: "Massage",
    description: "Professional massage therapy",
    price: "From $35",
    rating: 5,
    reviews: 156,
    logoColor: "bg-purple-600",
  },
]

const womenServices = [
  {
    title: "Maya's",
    description: "Premium women's salon",
    price: "From $40",
    rating: 5,
    reviews: 203,
    logoColor: "bg-pink-600",
  },
  {
    title: "Lashes",
    description: "Eyelash extensions & treatments",
    price: "From $30",
    rating: 5,
    reviews: 145,
    logoColor: "bg-orange-600",
  },
  {
    title: "Hair Studio",
    description: "Creative hair styling",
    price: "From $50",
    rating: 5,
    reviews: 178,
    logoColor: "bg-green-600",
  },
  {
    title: "Beauty",
    description: "Complete beauty services",
    price: "From $35",
    rating: 5,
    reviews: 234,
    logoColor: "bg-blue-800",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Gents Services */}
        <AnimatedSection className="mb-16">
          <SectionHeading className="mb-12">
            BEST SALOON FOR GENTS
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

        {/* Women Services */}
        <AnimatedSection>
          <SectionHeading className="mb-12">
            BEST SALOON FOR WOMAN
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
  )
}
