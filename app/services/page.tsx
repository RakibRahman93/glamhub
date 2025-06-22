"use client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { PromoSection } from "@/components/sections/promo-section";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/servicesData";
import { ShoppingBasket } from "lucide-react";
import { useState } from "react";

const categories = [
  "Women's Services",
  "Men's Services",
  "Kid's Services",
  "Winter's Offers & Deals",
];

const sortOptions = ["Price (High To Low)", "Price (Low To High)"];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Price (High To Low)");

  const filteredAndSortedServices = services
    .flatMap((category) => category.items)
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    })
    .sort((a, b) =>
      sortOrder === "Price (High To Low)"
        ? b.price - a.price
        : a.price - b.price
    );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="mb-6">
              {/* Mobile Dropdown */}
              <div className="block md:hidden mb-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded text-sm"
                >
                  <option value="All">All Services</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Desktop Filter Label & Category Tabs */}
              <div className="hidden md:block relative mb-4">
                {/* Filter label */}
                <div className="absolute inset-0 w-[80px] left-0 bg-saloon-dark-brown text-white text-sm font-bold px-4 py-4">
                  Filter
                </div>

                <div className="flex justify-center gap-2 bg-black p-2 rounded-md flex-wrap">
                  <button
                    key="All"
                    onClick={() => setSelectedCategory("All")}
                    className={`text-sm font-semibold px-4 py-2 uppercase transition ${
                      selectedCategory === "All" ? " text-white" : "text-white"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-sm font-semibold px-4 py-2 uppercase transition ${
                        selectedCategory === cat ? "text-white" : "text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Count & Sort Dropdown */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <h2 className="text-lg font-semibold text-gray-700">
                {filteredAndSortedServices.length} result
                {filteredAndSortedServices.length !== 1 && "s"}
              </h2>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Sort By:</span>
                <select
                  className="border border-gray-300 px-2 py-1 rounded text-sm"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredAndSortedServices.length === 0 ? (
                <p className="text-center col-span-full text-gray-500">
                  No services found in this category.
                </p>
              ) : (
                filteredAndSortedServices.map((service, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <Card className="group transition-all duration-300 hover:shadow-xl border bg-white overflow-hidden flex flex-col h-full p-3">
                      <div className="relative h-56 overflow-hidden rounded">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-0 p-3 m-2 rounded-full bg-gray-600/80">
                          <ShoppingBasket className="text-white w-5 h-5" />
                        </div>
                        <div className="absolute bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex justify-between w-full">
                          <h3 className="text-white font-semibold text-base">
                            {service.name}
                          </h3>
                          <div className="flex items-center text-yellow-400 text-sm">
                            {"★".repeat(Math.floor(service.rating || 5))}
                            <span className="ml-1 text-white text-xs">
                              {service.rating || 0}
                            </span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="flex flex-col justify-between flex-1 p-4">
                        <div className="flex flex-row items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900 text-base">
                            {service.name}
                          </h4>
                          <span className="text-saloon-dark-brown font-bold">
                            Tk {service.price.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3 line-clamp-3">
                          {service.description}
                        </p>
                        <Button
                          variant="outline"
                          className="text-black border-saloon-brown hover:bg-saloon-dark-brown hover:text-white uppercase w-full"
                        >
                          book now
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <PromoSection
          title="GET 30% OFF ON YOUR FIRST BOOKING"
          description="Discover a full range of grooming and spa services tailored for both men and women, delivered by skilled professionals at salons or in the comfort of your home."
          primaryBtnText="Book Now"
          secondaryBtnText="Explore Now"
          backgroundImage="/images/saloon-bg.jpg"
        />
      </main>
      <Footer />
    </>
  );
}
