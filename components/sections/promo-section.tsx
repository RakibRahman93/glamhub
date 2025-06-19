import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

export function PromoSection() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/salon-bg.jpg')] bg-cover bg-center opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center text-white max-w-5xl mx-auto">
            <h2 className="font-gilroy-bold text-4xl md:text-5xl  mb-6">
              GET 30% OFF ON YOUR FIRST BOOKING
            </h2>
            <p className="font-gilroy-regular text-xl text-[##D6D6D6] mb-8 leading-relaxed mx-auto">
              Discover a full range of grooming and spa services tailored for
              both men and women, delivered by skilled professionals at salons
              or in the comfort of your home.
            </p>
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3">
                <Button
                  variant={"outline"}
                  size="sm"
                  className="border border-bg-white hover:bg-saloon-dark-brown text-white uppercase rounded-none fon-bold"
                >
                  Book Now
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  className="border border-bg-white hover:bg-saloon-dark-brown text-white uppercase rounded-none fon-bold"
                >
                  Explore Now
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
