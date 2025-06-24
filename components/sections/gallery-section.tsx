import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-8 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20 bg-[#FFFAEF]">
        <AnimatedSection>
          <SectionHeading centered className="mb-8">
            EXPLORE OUR PARLOURS
          </SectionHeading>
          <p className="font-gilroy-regular text-gray-600 text-lg leading-relaxed text-center max-w-2xl mx-auto">
            Discover a full range of grooming and spa services tailored for both
            men and women, delivered by skilled professionals at salons or in
            the comfort of your home.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-14">
          <AnimatedSection>
            <div className="space-y-4 flex flex-col items-center borer  border-2 border-[#8E98A8] p-2">
              <img src="/images/model1.jpg" alt="model" />
              <div className="bg-[#5F402B] text-center p-3">
                <h3 className="font-gilroy-bold text-xl md:text-4xl text-white leading-tight">
                  Boys Beauty Saloon & Parlors
                </h3>
                <p className="font-gilroy-regular text-white text-md md:text-lg leading-relaxed mt-4">
                  Discover a full range of grooming and spa services tailored
                  for both men and women, delivered by skilled professionals at
                  salons or in the comfort of your home.
                </p>
                <Button
                  variant={"outline"}
                  className="bg-transparent border border-white hover:bg-saloon-dark-brown text-white px-8 py-4 text-sm font-gilroy-medium mt-4"
                >
                  Explore Now
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="space-y-4 flex flex-col items-center border-2 border-[#8E98A8] p-2">
              <img src="/images/model1.jpg" alt="model" />
              <div className="bg-[#5F402B] text-center p-3">
                <h3 className="font-gilroy-bold text-xl md:text-4xl text-white leading-tight">
                  Girls Beauty Saloon & Parlors
                </h3>
                <p className="font-gilroy-regular text-white text-md md:text-lg leading-relaxed mt-4">
                  Discover a full range of grooming and spa services tailored
                  for both men and women, delivered by skilled professionals at
                  salons or in the comfort of your home.
                </p>
                <Button
                  variant={"outline"}
                  className="bg-transparent border border-white hover:bg-saloon-dark-brown text-white px-8 py-4 text-sm font-gilroy-medium mt-4"
                >
                  Explore Now
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
