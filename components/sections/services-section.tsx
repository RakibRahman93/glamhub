"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "../ui/button";

import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

const gentsServices = [
  {
    name: "Signature Style",
    image: "/images/sinature.jpg",
    rating: 94,
    reviews: 5,
    description:
      "A sanctuary of beauty and elegance, where every woman radiates confidence and style.",
  },
  {
    name: "Michael Barber Shop",
    image: "/images/michael.jpg",
    rating: 94,
    reviews: 5,
    description:
      "Where beauty blossoms—step in and let your radiance shine through personalized, luxurious treatments.",
  },
  {
    name: "Barber Shop",
    image: "/images/barbar.jpg",
    rating: 94,
    reviews: 5,
    description:
      "Experience refined beauty and timeless elegance with treatments crafted to bring out your inner glow.",
  },
  {
    name: "Salona Haircut",
    image: "/images/salon.jpg",
    rating: 94,
    reviews: 5,
    description: "Step into a sanctuary where radiance and relaxation meet.",
  },
  {
    name: "Signature Style",
    image: "/images/sinature.jpg",
    rating: 94,
    reviews: 5,
    description:
      "A sanctuary of beauty and elegance, where every woman radiates confidence and style.",
  },
  {
    name: "Michael Barber Shop",
    image: "/images/michael.jpg",
    rating: 94,
    reviews: 5,
    description:
      "Where beauty blossoms—step in and let your radiance shine through personalized, luxurious treatments.",
  },
  {
    name: "Barber Shop",
    image: "/images/barbar.jpg",
    rating: 94,
    reviews: 5,
    description:
      "Experience refined beauty and timeless elegance with treatments crafted to bring out your inner glow.",
  },
  {
    name: "Salona Haircut",
    image: "/images/salon.jpg",
    rating: 94,
    reviews: 5,
    description: "Step into a sanctuary where radiance and relaxation meet.",
  },
];

const womenServices = [
  {
    name: `Maya’s Beauty Icons`,
    image: "/images/maya.jpg",
    rating: 94,
    reviews: 5,
    description:
      "A sanctuary of beauty and elegance, where every woman radiates confidence and style.",
  },
  {
    name: "Lashes Beauty & Hair",
    image: "/images/lashcs.jpg",
    rating: 94,
    reviews: 5,
    description:
      "Where beauty blossoms—step in and let your radiance shine through personalized, luxurious treatments. ",
  },
  {
    name: "Elegance Essence",
    image: "/images/elegench.jpg",
    rating: 94,
    reviews: 5,
    description:
      "Experience refined beauty and timeless elegance with treatments crafted to bring out your inner glow.",
  },
  {
    name: "Radiant Realm",
    image: "/images/radiant.jpg",
    rating: 94,
    reviews: 5,
    description: "Step into a sanctuary where radiance and relaxation meet.",
  },
  {
    name: `Maya’s Beauty Icons`,
    image: "/images/maya.jpg",
    rating: 94,
    reviews: 5,
    description:
      "A sanctuary of beauty and elegance, where every woman radiates confidence and style.",
  },
  {
    name: "Lashes Beauty & Hair",
    image: "/images/lashcs.jpg",
    rating: 94,
    reviews: 5,
    description:
      "Where beauty blossoms—step in and let your radiance shine through personalized, luxurious treatments. ",
  },
  {
    name: "Elegance Essence",
    image: "/images/elegench.jpg",
    rating: 94,
    reviews: 5,
    description:
      "Experience refined beauty and timeless elegance with treatments crafted to bring out your inner glow.",
  },
  {
    name: "Radiant Realm",
    image: "/images/radiant.jpg",
    rating: 94,
    reviews: 5,
    description: "Step into a sanctuary where radiance and relaxation meet.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Gents Services */}
        <AnimatedSection className="mb-16">
          <div className="flex justify-between items-center align-middle">
            <SectionHeading className="mb-12">
              BEST SALOON FOR GENTS
            </SectionHeading>
            <div className="mb-12">
              <Button
                variant="outline"
                className="hover:underline text-saloon-brown uppercase"
              >
                Explore More
              </Button>
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
            {gentsServices.map((service, index) => (
              <SwiperSlide key={index}>
                <AnimatedSection delay={index * 0.1}>
                  <ServiceCard
                    title={service.name}
                    description={service.description}
                    rating={service.rating}
                    reviews={service.reviews}
                    image={service.image}
                    variant="gents"
                  />
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
              <Button
                variant="outline"
                className="hover:underline text-saloon-brown uppercase"
              >
                Explore More
              </Button>
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
            {womenServices.map((service, index) => (
              <SwiperSlide key={index}>
                <AnimatedSection delay={index * 0.1}>
                  <ServiceCard
                    title={service.name}
                    description={service.description}
                    rating={service.rating}
                    reviews={service.reviews}
                    image={service.image}
                    variant="women"
                  />
                </AnimatedSection>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </div>
    </section>
  );
}
