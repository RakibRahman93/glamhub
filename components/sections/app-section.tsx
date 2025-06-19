import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AppSection() {
  return (
    <section className="py-20 ">
     <div className="container mx-auto px-8 md:px-12 bg-gradient-to-br from-amber-50 to-orange-50 bg-[url('/images/pocket-bg.jpg')] bg-cover bg-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h2 className="font-gilroy-bold text-2xl md:text-[45px] text-[#5F402B]">
                PICK US IN YOUR POCKET
              </h2>
              <p className="font-gilroy-regular text-[#5F402B] text-lg leading-relaxed">
                Download our mobile apps to get more good user experience.
              </p>
              <div className="flex items-center gap-3 flex-col sm:flex-row">
                <div className="">
                  <img src="/images/qr-code.png" alt="qr-code" />
                </div>
                <div className="text-[17px] text-black max-w-md ml-6">
                  <p>
                    Discover a full range of grooming and spa services tailored
                    for both men and women, delivered by skilled professionals
                    at salons or in the comfort of your home.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="">
                  <img src="/images/apple.png" alt="qr-code" />
                </div>
                <div className="">
                  <img src="/images/play-store.png" alt="qr-code" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex justify-center">
              <img src={"/images/iPhone.png"} alt="Phone" />
              {/* <Card className="w-80 overflow-hidden shadow-2xl bg-saloon-brown">
                <CardContent className="p-4">
                  <div className="aspect-[9/16] bg-white rounded-2xl p-4 flex flex-col">
                    <div className="h-12 bg-saloon-brown rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="h-3 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                      <div className="h-16 bg-gray-100 rounded" />
                      <div className="h-3 bg-gray-200 rounded w-2/3" />
                      <div className="h-3 bg-gray-200 rounded w-1/3" />
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
