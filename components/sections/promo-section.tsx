import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";

interface PromoSectionProps {
  title: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText?: string;
  backgroundImage?: string;
}

export function PromoSection({
  title,
  description,
  primaryBtnText,
  secondaryBtnText,
  backgroundImage = "/images/saloon-bg.jpg",
}: PromoSectionProps) {
  return (
    <section className="relative overflow-hidden mb-4">
      <div
        className="container mx-auto px-4 py-24 relative z-10 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <AnimatedSection>
          <div className="text-center text-white max-w-5xl mx-auto">
            <h2 className="font-gilroy-bold text-4xl md:text-5xl mb-6">
              {title}
            </h2>
            <p className="font-gilroy-regular text-xl text-[#D6D6D6] mb-8 leading-relaxed mx-auto">
              {description}
            </p>
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border border-white hover:bg-saloon-dark-brown text-white uppercase rounded-none font-bold"
                >
                  {primaryBtnText}
                </Button>
                {secondaryBtnText && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border border-white hover:bg-saloon-dark-brown text-white uppercase rounded-none font-bold"
                  >
                    {secondaryBtnText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
