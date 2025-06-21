"use client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ServiceCard } from "@/components/ui/service-card";
import { gentsServices, womenServices } from "@/lib/servicesData";
import { useState } from "react";

const ITEMS_PER_PAGE = 4;

export default function ExploreSaloonsPage() {
  const [gentsPage, setGentsPage] = useState(1);
  const gentsTotalPages = Math.ceil(gentsServices.length / ITEMS_PER_PAGE);

  const [womenPage, setWomenPage] = useState(1);
  const womenTotalPages = Math.ceil(womenServices.length / ITEMS_PER_PAGE);

  const currentGents = gentsServices.slice(
    (gentsPage - 1) * ITEMS_PER_PAGE,
    gentsPage * ITEMS_PER_PAGE
  );

  const currentWomen = womenServices.slice(
    (womenPage - 1) * ITEMS_PER_PAGE,
    womenPage * ITEMS_PER_PAGE
  );
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
                {currentGents.map((service, index) => (
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
            {/* Pagination */}
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setGentsPage((prev) => Math.max(prev - 1, 1))
                    }
                    className={
                      gentsPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {[...Array(gentsTotalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      isActive={gentsPage === index + 1}
                      onClick={() => setGentsPage(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setGentsPage((prev) =>
                        Math.min(prev + 1, gentsTotalPages)
                      )
                    }
                    className={
                      gentsPage === gentsTotalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>

        {/* Business Account Promo */}
        <section className="py-16 bg-saloon-brown relative overflow-hidden bg-[url('/images/footer-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-white rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <AnimatedSection>
                <div className="text-white max-w-3xl mx-auto">
                  <h2 className="font-gilroy-bold text-3xl md:text-4xl mb-6">
                    WANNA OPEN YOUR OWN
                    <br />
                    BUSINESS ACCOUNT?
                  </h2>
                  <p className="font-gilroy-regular text-lg mb-8 text-white/90 max-w-xl">
                    Discover a full range of grooming and spa services tailored
                    for both men and women,delivered by skilled professionals at
                    salons or in the comfort of your home.
                  </p>
                  <div className="flex flex-row gap-4 items-center">
                    <Button
                      variant="outline"
                      className="hover:bg-transparent hover:text-white text-white border-2 border-bg-white uppercase"
                    >
                      open now
                    </Button>
                    <Button
                      variant="outline"
                      className="hover:bg-transparent hover:text-white text-white border-2 border-bg-white uppercase"
                    >
                      know our policy
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
              <div className="">
                <img src="/images/barber-shop.png" alt="barbar" />
              </div>
            </div>
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
                {currentWomen.map((service, index) => (
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
            {/* Pagination */}
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setWomenPage((prev) => Math.max(prev - 1, 1))
                    }
                    className={
                      womenPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>

                {[...Array(womenTotalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      isActive={womenPage === index + 1}
                      onClick={() => setWomenPage(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setWomenPage((prev) =>
                        Math.min(prev + 1, womenTotalPages)
                      )
                    }
                    className={
                      womenPage === womenTotalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
