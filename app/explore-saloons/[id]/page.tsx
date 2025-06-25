import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { gentsServices, womenServices } from "@/lib/servicesData";
import { ChevronLeft, MoreVertical, Search } from "lucide-react";
import Image from "next/image";

export default function ExploreSaloonDetails({ params }) {
  const { id } = params;
  const allSalons = [...gentsServices, ...womenServices];
  const salon = allSalons.find((s) => String(s.id) === String(id));

  if (!salon) return <div>Salon not found</div>;

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Explore Saloons", href: "/explore-saloons" },
            { label: salon.name },
          ]}
        />
        {/* Top Section */}
        <div className="relative w-full h-[48rem] md:h-[26rem] lg:h-96 overflow-hidden rounded-lg">
          {/* Background Image */}
          <Image
            src={salon.image}
            alt={salon.name}
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40">
            {/* Top Search Bar */}
            <div className="flex items-center px-4 py-3 md:px-6 gap-4">
              {/* Left: Back Icon */}
              <button className="text-white text-xl flex-shrink-0">
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Center: Full Width Search */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 bg-white/10 border border-white/30 backdrop-blur-sm rounded-md px-3 py-2 w-full text-white">
                  <Search className="w-5 h-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent border-none outline-none text-white placeholder-white/70 w-full"
                  />
                </div>
              </div>

              {/* Right: Menu Icon */}
              <button className="text-white text-xl flex-shrink-0">
                <MoreVertical className="w-6 h-6" />
              </button>
            </div>

            {/* Glass Card */}
            <div className="flex items-center px-6 justify-center h-auto lg:h-[280px] w-full">
              <div className="w-full h-full rounded-sm border border-white p-4">
                <div className="backdrop-blur-md bg-white/10 p-6 w-full max-w-[90rem] mx-auto">
                  {/* Top Row */}
                  <div className="flex justify-between items-start">
                    {/* Left: Logo + Text */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 text-white">
                      {/* Thumbnail */}
                      <Image
                        src={salon.image}
                        alt={salon.name}
                        width={120}
                        height={120}
                        className="rounded"
                      />

                      {/* Info */}
                      <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-1 uppercase">
                          {salon.name}
                        </h1>
                        <p className="text-sm md:text-base max-w-xl text-white/80 mb-4 uppercase">
                          A SANCTUARY OF BEAUTY AND ELEGANCE, WHERE EVERY WOMAN
                          RADIATES CONFIDENCE AND STYLE.
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition">
                            BOOK NOW
                          </button>
                          <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition">
                            EXPLORE SHOP
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right: Contact Button */}
                    <div className="hidden md:block">
                      <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition">
                        CONTACT INFO
                      </button>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-6 flex flex-wrap gap-6 text-sm md:text-base text-white font-medium justify-between">
                    <span>
                      <span className="font-bold">{salon.positiveRating}%</span>{" "}
                      Best positive seller rating
                    </span>
                    <span>
                      <span className="font-bold">{salon.bookedPerDay}+</span>{" "}
                      Booked per day
                    </span>
                    <span>
                      Located{" "}
                      <span className="font-bold">{salon.location}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-[#FFFAEF] my-8 md:my-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Stack */}
              <div className="relative h-[450px] w-full max-w-[550px] mx-auto lg:mx-0">
                {/* Background Image */}
                <div className="absolute top-0 left-0 w-[65%] h-[85%] rounded-lg overflow-hidden shadow-md border-[6px] border-white">
                  <img
                    src="/about-back.jpg"
                    alt="Facial treatment"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Foreground Image */}
                <div className="absolute bottom-0 right-0 w-[65%] h-[85%] rounded-lg overflow-hidden shadow-md z-10 border-[6px] border-white">
                  <img
                    src="/about-front.jpg"
                    alt="Hair styling"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-24 md:pt-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  ABOUT US
                </h2>
                <p className="text-gray-700 leading-relaxed max-w-xl space-y-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>

                <button className="absolute md:right-8 bottom-4 md:bottom-8 text-right border border-amber-800 text-amber-800 px-6 py-2 text-sm rounded hover:bg-amber-800 hover:text-white transition">
                  WATCH MORE REVIEWS
                </button>
              </div>
            </div>
            {/* Floating Review Card */}
            <div className="absolute md:left-[45%] lg:top-2/3 top-[47%] md:top-[62%] md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10 mt-0">
              <div className="backdrop-blur-md bg-white/30 border border-white rounded-md shadow-lg p-4 md:w-[380px] text-sm text-left">
                <div className="flex items-center flex-row justify-between">
                  <div className="">
                    <p className="font-bold text-gray-800 md:text-lg">
                      Mrs. Afia Kathun
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs mt-1">
                    ⭐⭐⭐⭐⭐
                    <span className="text-gray-800 ml-1 font-semibold">94</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-2 text-xs">
                  A perfect facial for oily or acne-prone skin, featuring a deep
                  cleanse, extraction, and clay mask to remove impurities and
                  soothe skin.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
