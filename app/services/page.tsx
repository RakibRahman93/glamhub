import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { PromoSection } from "@/components/sections/promo-section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/servicesData";
import { ShoppingBasket } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((category, categoryIndex) => (
                <AnimatedSection
                  key={categoryIndex}
                  delay={categoryIndex * 0.2}
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center mb-8">
                      <div className={`${category.color} p-3 rounded-lg mr-4`}>
                        {category.icon}
                      </div>
                      <h2 className="font-gilroy-bold text-3xl text-gray-900">
                        {category.category}
                      </h2>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {category.items.map((service, serviceIndex) => (
                        <AnimatedSection
                          key={serviceIndex}
                          delay={serviceIndex * 0.1}
                        >
                          <Card className="group transition-all duration-300 hover:shadow-xl border bg-white overflow-hidden flex flex-col h-full p-3">
                            {/* Image Section with overlay */}
                            <div className="relative h-56 overflow-hidden">
                              <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-0 p-3 m-2 rounded-full bg-gray-500">
                                <ShoppingBasket className="text-white w-6 h-6" />
                              </div>
                              <div className="absolute bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-row gap-4 justify-between w-full">
                                <div className="">
                                  <h3 className="text-white font-gilroy-bold text-lg">
                                    {service.name}
                                  </h3>
                                </div>
                                <div className="flex items-center mt-1 text-yellow-400 text-sm font-gilroy-medium">
                                  {"★".repeat(Math.floor(service.rating || 5))}
                                  <span className="ml-1 text-white">
                                    {service.rating || 0}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Content Section */}
                            <CardContent className="flex flex-col justify-between flex-1 p-4">
                              <div className="mb-4 flex flex-row items-start justify-between">
                                <div className="">
                                  <div className="">
                                    <h4 className="font-gilroy-semibold text-base text-gray-900 font-bold">
                                      {service.name}
                                    </h4>
                                  </div>
                                  <div className="flex justify-between items-center text-sm mt-1">
                                    <span className="text-gray-500">
                                      {service.description}
                                    </span>
                                  </div>
                                </div>
                                <div className="">
                                  <span className="font-bold text-saloon-dark-brown">
                                    Tk {service.price.toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                className="text-black border-bg-brown hover:bg-transparent hover:text-white uppercase w-full"
                              >
                                book now
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
        <PromoSection
          title="GET 30% OFF ON YOUR FIRST BOOKING"
          description="Discover a full range of grooming and spa services tailored for both men and women, delivered by skilled professionals at salons or in the comfort of your home."
          primaryBtnText="Book Now"
          secondaryBtnText="Explore Now"
          backgroundImage="/images/saloon-bg.jpg"
        />
      </main>
      <Footer />
    </>
  );
}
