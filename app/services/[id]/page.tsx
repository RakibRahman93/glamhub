import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services } from "@/lib/servicesData";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Utility to shuffle and pick N random items
function getRandomRelatedServices(all, currentId, count = 3) {
  const filtered = all.filter((s) => String(s.id) !== String(currentId));
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }
  return filtered.slice(0, count);
}

export default function ServiceDetailsPage({ params }) {
  const { id } = params;
  const service = services.find((s) => String(s.id) === String(id));

  if (!service) return <div>Service not found</div>;

  // Get 3 random related services (excluding current)
  const relatedServices = getRandomRelatedServices(services, id, 3);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Deep Cleanse Detox Facial" },
          ]}
        />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[50%] w-full">
            <div className="p-2 border">
              <Image
                src={service.images[0]}
                alt={service.heading}
                width={750}
                height={500}
                className="rounded object-cover"
              />
            </div>
            <div className="flex gap-2 mt-2">
              {service.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded object-cover"
                />
              ))}
            </div>
          </div>
          <div className="md:w-[50%] w-full space-y-9">
            <div className="heading-area">
              <h1 className="text-2xl font-bold">{service.heading}</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-500">★★★★★{service.rating}</span>
              </div>

              <p className="mt-4 text-gray-700 max-w-2xl">
                {service.description}
              </p>
            </div>
            <hr />
            <div className="pricing-area">
              <div className="mt-2">
                <span className="line-through text-gray-400 mr-4">
                  {service.oldPrice?.toLocaleString()} TK
                </span>
                <span className="text-xl font-bold text-saloon-brown">
                  Tk {service.price.toLocaleString()} TK ONLY
                </span>
              </div>
            </div>
            <hr />
            <div className="mt-4">
              <h3 className="font-semibold">Purpose:</h3>
              <ul className="list-disc ml-6">
                {service.purpose.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="mt-4">
              <h3 className="font-semibold">Benefits:</h3>
              <ul className="list-disc ml-6">
                {service.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="mt-6 flex gap-4">
              <Button className="w-96 bg-transparent border border-[#654321] text-saloon-brown hover:text-white hover:bg-[#654321] px-4 py-2 rounded uppercase">
                Book Now
              </Button>
              <Button className="bg-saloon-dark-brown text-white px-4 py-2 rounded">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs for Description, Information, FAQs */}
        <div className="mt-10">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="flex gap-8 justify-start">
              <TabsTrigger
                value="description"
                className="py-3 text-sm font-semibold uppercase tracking-wide text-gray-500 
data-[state=active]:text-saloon-brown data-[state=active]:border-t data-[state=active]:border-l data-[state=active]:border-r data-[state=active]:border-saloon-brown bg-[#F1F1F1] rounded-none"
              >
                Descriptions
              </TabsTrigger>
              <TabsTrigger
                value="information"
                className="py-3 text-sm font-semibold uppercase tracking-wide text-gray-500 
data-[state=active]:text-saloon-brown data-[state=active]:border-t data-[state=active]:border-l data-[state=active]:border-r data-[state=active]:border-saloon-brown bg-transparent rounded-none bg-[#F1F1F1]"
              >
                Information
              </TabsTrigger>
              <TabsTrigger
                value="faq"
                className="py-3 text-sm font-semibold uppercase tracking-wide text-gray-500 
data-[state=active]:text-saloon-brown data-[state=active]:border-t data-[state=active]:border-l data-[state=active]:border-r data-[state=active]:border-saloon-brown bg-transparent rounded-none bg-[#F1F1F1]"
              >
                FAQs
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="description"
              className="p-6 bg-white border mt-0 text-gray-800 leading-relaxed"
            >
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </TabsContent>

            <TabsContent
              value="information"
              className="p-6 bg-white border mt-0 text-gray-800 leading-relaxed"
            >
              <ul className="list-disc pl-5">
                <li>Removes toxins and impurities</li>
                <li>Hydrates and nourishes the skin</li>
                <li>Improves blood circulation</li>
              </ul>
            </TabsContent>

            <TabsContent
              value="faq"
              className="p-6 bg-white border mt-0 text-gray-800 leading-relaxed"
            >
              <p>
                <strong>Q:</strong> How often should I get a detox facial?
                <br />
                <strong>A:</strong> Once every 4–6 weeks for best results.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Services */}
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">RELATED SERVICES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedServices.map((rel) => (
              <Link key={rel.id} href={`/services/${rel.id}`}>
                <Card className="group transition-all duration-300 hover:shadow-xl border bg-white overflow-hidden flex flex-col h-full p-3 cursor-pointer">
                  <div className="relative h-full overflow-hidden rounded">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full min-h-[400px] object-cover"
                    />
                    <div className="absolute top-0 left-0 p-3 m-2 rounded-full bg-gray-600/80">
                      <ShoppingBasket className="text-white w-5 h-5" />
                    </div>
                    <div className="absolute bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex justify-between w-full">
                      <h3 className="text-white font-semibold text-base">
                        {rel.name}
                      </h3>
                      <div className="flex items-center text-yellow-400 text-sm">
                        {"★".repeat(Math.floor(rel.rating || 5))}
                        <span className="ml-1 text-white text-xs">
                          {rel.rating || 0}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex flex-col justify-between flex-1 p-4">
                    <div className="flex flex-row items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-900 text-base">
                        {rel.heading}
                      </h4>
                      <span className="text-saloon-dark-brown font-bold">
                        Tk {rel.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-3">
                      {rel.description}
                    </p>
                    <Button
                      variant="outline"
                      className="text-black border-saloon-brown hover:bg-saloon-dark-brown hover:text-white uppercase w-full"
                    >
                      book now
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
