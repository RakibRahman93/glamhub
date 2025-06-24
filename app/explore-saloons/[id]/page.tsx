import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { gentsServices, womenServices } from "@/lib/servicesData";
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

        {/* Banner Section */}
        <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 mt-6 border border-white">
          <div className="relative w-full h-[30rem] md:h-96 border-2">
            <Image
              src={salon.image}
              alt={salon.name}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="container px-4 md:px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-center gap-6 text-white">
                  {/* Thumbnail */}
                  <div className="flex-shrink-0">
                    <Image
                      src={salon.image}
                      alt={salon.name}
                      width={150}
                      height={150}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h1 className="text-2xl md:text-4xl font-bold mb-2">
                      {salon.name}
                    </h1>
                    <p className="mb-4 text-sm md:text-base max-w-xl">
                      {salon.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-transparent border border-white px-4 py-2 text-white">
                        BOOK NOW
                      </button>
                      <button className="bg-transparent border border-white px-4 py-2 text-white">
                        EXPLORE NOW
                      </button>
                      {/* Desktop Only */}
                      {/* <button className="hidden md:inline-block bg-transparent border border-white px-4 py-2 text-white ml-auto">
                        CONTACT INFO
                      </button> */}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-lg font-medium text-white justify-between">
                  <span>
                    <span className="font-bold">{salon.positiveRating}%</span>{" "}
                    Positive rating
                  </span>
                  <span>
                    <span className="font-bold">{salon.bookedPerDay}+</span>{" "}
                    Booked per day
                  </span>
                  <span>
                    Located {" "}
                    <span className="font-bold">{salon.location}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Contact Button */}
          <div className="absolute top-6 right-8">
            <button className="hidden md:inline-block bg-transparent border border-white px-4 py-2 text-white ml-auto">
              CONTACT INFO
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
