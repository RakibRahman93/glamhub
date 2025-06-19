"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "./custom.css"
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
    >
      {/* Background Swiper Image Slider */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
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
              src="images/barbar.jpg"
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
              <h1 className="font-gilroy-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Make Your Own <br />
                <span className="text-saloon-gold">Hair Story</span>
              </h1>
              <p className="font-gilroy-regular text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-lg">
                Best Hair Salon & Barber Shop in the city. Experience premium
                grooming services with our expert stylists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium"
                >
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-gray-900 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-gilroy-medium"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Play Video
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
                  className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium"
                >
                  Try Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-gray-900 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-gilroy-medium"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
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
                From fades to shaves — get styled by the city's finest barbers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium"
                >
                  Book Your Seat
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-gray-900 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-gilroy-medium"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
