"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { gentsServices, womenServices } from "@/lib/servicesData";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";

import Link from "next/link";
import "swiper/css";
import "swiper/css/scrollbar";

export function ServicesSection() {
  return (
    <section id="services" className="md:py-8 py-4 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Gents Services */}
        <AnimatedSection className="mb-16">
          <div className="flex justify-between items-center align-middle">
            <SectionHeading className="mb-12">
              BEST SALOON FOR GENTS
            </SectionHeading>
            <div className="mb-12">
              <Link href="/explore-saloons">
              <Button
                variant="outline"
                className="hover:underline text-saloon-brown uppercase"
              >
                Explore More
              </Button>
              </Link>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Scrollbar]}
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            //scrollbar={{ draggable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {gentsServices.map((saloon, index) => (
              <SwiperSlide key={index}>
                <AnimatedSection delay={index * 0.1}>
                  <Link href={`/explore-saloons/${saloon.id}`} key={saloon.id} passHref>
                    <ServiceCard
                      title={saloon.name}
                      description={saloon.description}
                      rating={saloon.rating}
                      reviews={saloon.reviews}
                      image={saloon.image}
                      variant="gents"
                    />
                  </Link>
                </AnimatedSection>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>

        {/* Women Services */}
        <AnimatedSection>
          <div className="flex justify-between items-center align-middle">
            <SectionHeading className="mb-12">
              BEST SALOON FOR WOMEN
            </SectionHeading>
            <div className="mb-12">
              <Link href="/explore-saloons">
              <Button
                variant="outline"
                className="hover:underline text-saloon-brown uppercase"
              >
                Explore More
              </Button>
              </Link>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Scrollbar]}
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            //scrollbar={{ draggable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {womenServices.map((saloon, index) => (
              <SwiperSlide key={index}>
                <AnimatedSection delay={index * 0.1}>
                  <Link
                    href={`/explore-saloons/${saloon.id}`}
                    className="block" passHref
                  >
                    <ServiceCard
                      title={saloon.name}
                      description={saloon.description}
                      rating={saloon.rating}
                      reviews={saloon.reviews}
                      image={saloon.image}
                      variant="women"
                    />
                  </Link>
                </AnimatedSection>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </div>
    </section>
  );
}
