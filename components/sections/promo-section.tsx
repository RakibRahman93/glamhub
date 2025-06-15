import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"

export function PromoSection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="font-gilroy-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              GET <span className="text-saloon-gold">30% OFF</span> ON YOUR FIRST BOOKING
            </h2>
            <p className="font-gilroy-regular text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              New customers enjoy exclusive discounts on all our premium services. Book your appointment today and
              experience luxury grooming at its finest.
            </p>
            <Button
              size="lg"
              className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-12 py-4 text-xl font-gilroy-medium"
            >
              Book Appointment
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
