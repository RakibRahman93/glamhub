"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./custom.css";

export function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      image: "images/slider_1.jpg",
      title: "Welcome",
      headline: "Make Your Own",
      subHeadline: "Hair Story",
      description:
        "Best Hair Salon & Barber Shop in the city. Experience premium grooming services with our expert stylists.",
    },
    {
      image: "images/radiant.jpg",
      title: "Discover",
      headline: "Your Unique Style",
      subHeadline: "",
      description:
        "Personalized cuts and luxury grooming to bring out your best look.",
    },
    {
      image: "images/slider_1.jpg",
      title: "Premium Cuts",
      headline: "Professional Touch",
      subHeadline: "",
      description:
        "From fades to shaves — get styled by the city's finest barbers.",
    },
  ];

  return (
    <section
      id="home"
      className="container mx-auto relative min-[80vh] flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Top Banner */}
      <div className="absolute top-0 w-full z-20 left-0">
        <div className="container mx-auto text-center bg-[#000] text-sm text-gray-300 py-2">
          Do you need a business account?{" "}
          <a href="#" className="text-white underline hover:text-[#FFAC0E]">
            Sign up now
          </a>
        </div>
        <div className="relative h-[20px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:w-0 after:h-0 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-t-[10px] after:border-t-black" />
        </div>
      </div>

      {/* Background Swiper Image and Content Slider */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
        spaceBetween={0}
        slidesPerView={1}
        className="h-[60vh] swiper-custom relative"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* Image Slide */}
            <motion.img
              src={slide.image}
              alt={`Slide ${i + 1}`}
              initial={{ filter: "blur(10px)", scale: 1.05 }}
              animate={{ filter: "blur(0px)", scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover bg-[url('/images/hero-overlay.jpg')]"
            />
            {/* Content Slide */}
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-5 left-0 w-full h-full flex items-center justify-star z-10 text-left text-white max-w-7xl px-8"
            >
              <div className="max-w-2xl">
                <h1 className="font-gilroy-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight mt-0">
                  <span className="heading-sacramento text-4xl md:text-7xl text-[#FFDFC9] -mt-4">
                    {slide.title}
                  </span>
                  <br />
                  {slide.headline && (
                    <>
                      {slide.headline} <br />
                    </>
                  )}
                  {slide.subHeadline && (
                    <span className="text-white">{slide.subHeadline}</span>
                  )}
                </h1>
                <p className="font-gilroy-regular text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-lg">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/explore-saloons">
                    <Button
                      size="lg"
                      className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium uppercase"
                    >
                      Explore Now
                    </Button>
                  </Link>
                  <Link href="/booking">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white border border-saloon-brown hover:bg-saloon-dark-brown text-saloon-brown px-8 py-4 text-lg font-gilroy-medium"
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
