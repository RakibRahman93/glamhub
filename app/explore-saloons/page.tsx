"use client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { gentsServices, womenServices } from "@/lib/servicesData";
import { Gift } from "lucide-react";

export default function ExploreSaloonsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        {/* <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="EXPLORE OUR SALOON FOR GENTS"
              buttonLabel="Explore More"
              onButtonClick={() => console.log("Gents clicked")}
            />
             <AnimatedSection>
              <div className="text-center">
                <h1 className="font-gilroy-bold text-4xl md:text-5xl text-gray-900 mb-4">
                  Explore Saloons
                </h1>
                <p className="font-gilroy-regular text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover the best salons and barbershops in your area. From
                  traditional cuts to modern styling, find the perfect place for
                  your grooming needs.
                </p>
              </div>
            </AnimatedSection> 
          </div>
        </section> */}

        {/* Gents Services */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <AnimatedSection className="mb-12">
              <SectionHeader
                title="EXPLORE OUR SALOON FOR GENTS"
                buttonLabel="Explore More"
                onButtonClick={() => console.log("Gents clicked")}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {gentsServices.map((service, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <ServiceCard
                      title={service.name}
                      description={service.description}
                      rating={service.rating}
                      reviews={service.reviews}
                      image={service.image}
                      variant="gents"
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
                  Join our network of professional salons and barbershops. Get
                  access to exclusive business tools, marketing support, and
                  grow your business with us.
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
          <div className="container px-4 mx-auto">
            <AnimatedSection>
              <SectionHeader
                title="EXPLORE OUR SALOON FOR WOMAN"
                buttonLabel="Explore More"
                onButtonClick={() => console.log("Gents clicked")}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {womenServices.map((service, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <ServiceCard
                      title={service.name}
                      description={service.description}
                      rating={service.rating}
                      reviews={service.reviews}
                      image={service.image}
                      variant="women"
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
  );
}
