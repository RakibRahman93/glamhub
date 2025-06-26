// components/Card.tsx
import Image from "next/image";
import { FC } from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
}

const DiscountCard: FC<CardProps> = ({
  title,
  description,
  imageSrc,
  altText,
}) => {
  return (
    <div className="border p-3">
      <div className="relative overflow-hidden rounded-sm group h-[240px]">
        <div className="absolute inset-0 ">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-5 text-white">
          <h3 className="text-xl font-semibold mb-1 leading-tight">{title}</h3>
          <p className="text-sm text-gray-200 mb-4 line-clamp-2 opacity-90">
            {description}
          </p>
          <button className="border border-white py-2 w-full text-center text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors duration-300">
            GET 20% DISCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
