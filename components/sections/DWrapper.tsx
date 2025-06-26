// components/CardGrid.tsx
"use client";

import { serviceCard } from "@/lib/servicesData";
import { FC, useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DiscountCard from "./DiscountCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface CardGridProps {
  category?: string;
}

const DWrapper: FC<CardGridProps> = ({ category = "facials" }) => {
  // Get the correct category data from the JSON
  const items = serviceCard[category as keyof typeof serviceCard] || [];

  // Use client-side hydration to prevent hydration mismatch with Swiper
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a placeholder or loading state until client-side code is ready
    return (
      <div className="container mx-auto px-4 py-8 relative z-10 bg-cover bg-center opacity-90">
        <div className="h-[320px] bg-gray-100 animate-pulse rounded-md"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto md:px-8 md:py-8 relative z-10 bg-cover bg-center opacity-90 border my-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}

        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // When window width is >= 768px (tablet and above)
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <DiscountCard
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              altText={item.altText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DWrapper;
