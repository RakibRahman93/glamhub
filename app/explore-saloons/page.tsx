"use client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import PaginationControls from "@/components/ui/PaginationControls";

import { ServiceCard } from "@/components/ui/service-card";
import { gentsServices, womenServices } from "@/lib/servicesData";
import Link from "next/link";
import { useState } from "react";

const ITEMS_PER_PAGE = 8;

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

  const showGentsPagination = gentsServices.length > ITEMS_PER_PAGE;
  const showWomenPagination = womenServices.length > ITEMS_PER_PAGE;
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
              <SectionHeader title="EXPLORE OUR SALOON FOR GENTS" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentGents.map((saloon, index) => (
                  <Link href={`/explore-saloons/${saloon.id}`} key={saloon.id}>
                    <AnimatedSection key={index} delay={index * 0.1}>
                      <ServiceCard
                        title={saloon.name}
                        description={saloon.description}
                        rating={saloon.rating}
                        reviews={saloon.reviews}
                        image={saloon.image}
                        variant="gents"
                      />
                    </AnimatedSection>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
            {/* Pagination */}
            {showGentsPagination && (
              <PaginationControls
                currentPage={gentsPage}
                totalPages={gentsTotalPages}
                onPageChange={setGentsPage}
              />
            )}
          </div>
        </section>

        {/* Business Account Promo */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4 py-16 md:px-12 bg-[url('/images/footer-bg.jpg')] bg-cover bg-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <AnimatedSection className="text-white max-w-2xl">
                <h2 className="font-gilroy-bold text-xl md:text-4xl mb-6 leading-snug">
                  WANNA OPEN YOUR OWN
                  <br />
                  BUSINESS ACCOUNT?
                </h2>
                <p className="font-gilroy-regular text-lg mb-8 text-white/90">
                  Discover a full range of grooming and spa services tailored
                  for both men and women, delivered by skilled professionals at
                  salons or in the comfort of your home.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-transparent hover:text-white uppercase"
                  >
                    open now
                  </Button>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-transparent hover:text-white uppercase"
                  >
                    know our policy
                  </Button>
                </div>
              </AnimatedSection>

              <div className="max-w-sm w-full">
                <img
                  src="/images/barber-shop.png"
                  alt="barber"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Women Services */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <AnimatedSection>
              <SectionHeader title="EXPLORE OUR SALOON FOR WOMAN" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentWomen.map((saloon, index) => (
                  <Link href={`/explore-saloons/${saloon.id}`} key={saloon.id}>
                    <AnimatedSection key={index} delay={index * 0.1}>
                      <ServiceCard
                        title={saloon.name}
                        description={saloon.description}
                        rating={saloon.rating}
                        reviews={saloon.reviews}
                        image={saloon.image}
                        variant="women"
                      />
                    </AnimatedSection>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
            {/* Pagination */}
            {showWomenPagination && (
              <PaginationControls
                currentPage={womenPage}
                totalPages={womenTotalPages}
                onPageChange={setWomenPage}
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
