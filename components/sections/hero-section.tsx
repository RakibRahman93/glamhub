"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./custom.css";

export function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
      >
        <div className="absolute top-0 w-full z-20 left-0">
          {/* Top Banner */}
          <div className="w-full text-center bg-[#000] text-sm text-gray-300 py-2">
            Do you need a business account?{" "}
            <a href="#" className="text-white underline hover:text-[#FFAC0E]">
              Sign up now
            </a>
          </div>

          {/* Custom Down Arrow */}
          {/* Simple Triangle Down Arrow */}
          <div className="relative h-[20px]">
            {/* Custom Down Arrow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:w-0 after:h-0 after:border-l-[10px] after:border-l-transparent after:border-r-[10px] after:border-r-transparent after:border-t-[10px] after:border-t-black" />
          </div>
        </div>
        {/* Background Swiper Image Slider */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-80">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="h-full pb-12 swiper-custom"
          >
            <SwiperSlide>
              <img
                src="images/slider_1.jpg"
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/radiant.jpg"
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/iphone.jpg"
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Content Slider */}
        <div className="relative z-10 text-left text-white px-4 max-w-7xl mx-auto w-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            slidesPerView={1}
          >
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <h1 className="font-gilroy-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight mt-0">
                  <span className="heading-sacramento text-4xl md:text-7xl text-[#FFDFC9] -mt-4">
                    Welcome
                  </span>{" "}
                  <br /> Make Your Own <br />
                  <span className="text-white">Hair Story</span>
                </h1>
                <p className="font-gilroy-regular text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-lg">
                  Best Hair Salon & Barber Shop in the city. Experience premium
                  grooming services with our expert stylists.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium uppercase"
                  >
                    Explore Now
                  </Button>
                  <Button
                    variant={"outline"}
                    size="lg"
                    className="bg-white border border-saloon-brown hover:bg-saloon-dark-brown text-saloon-brown px-8 py-4 text-lg font-gilroy-medium text-saloon-brown"
                  >
                    Book Now
                  </Button>
                </div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <h1 className="font-gilroy-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                  Discover <br />
                  <span className="text-saloon-gold">Your Unique Style</span>
                </h1>
                <p className="font-gilroy-regular text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-lg">
                  Personalized cuts and luxury grooming to bring out your best
                  look.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium uppercase"
                  >
                    Explore Now
                  </Button>
                  <Button
                    variant={"outline"}
                    size="lg"
                    className="bg-white border border-saloon-brown hover:bg-saloon-dark-brown text-saloon-brown px-8 py-4 text-lg font-gilroy-medium text-saloon-brown"
                  >
                    Book Now
                  </Button>
                </div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <h1 className="font-gilroy-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                  Premium Cuts <br />
                  <span className="text-saloon-gold">Professional Touch</span>
                </h1>
                <p className="font-gilroy-regular text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-lg">
                  From fades to shaves — get styled by the city's finest
                  barbers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium uppercase"
                  >
                    Explore Now
                  </Button>
                  <Button
                    variant={"outline"}
                    size="lg"
                    className="bg-white border border-saloon-brown hover:bg-saloon-dark-brown text-saloon-brown px-8 py-4 text-lg font-gilroy-medium text-saloon-brown"
                  >
                    Book Now
                  </Button>
                </div>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
