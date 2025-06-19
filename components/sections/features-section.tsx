import { AnimatedSection } from "@/components/ui/animated-section";
import { FeatureBox } from "@/components/ui/feature-box";


const features = [
  {
    icon: <img src="/images/service-1.png" alt="Scissors" className="w-55 h-55" />,
    title: "Top Expert Beauty Saloon & Parlor",
    description: "Our skilled team ensures every look is tailored to perfection.",
  },
  {
    icon: <img src="/images/service-2.png" alt="Sparkles" className="w-55 h-55" />,
    title: "Premium Products & Hygiene Standards",
    description: "Only the best, safe, and hygienic products.",
  },
  {
    icon: <img src="/images/service-3.png" alt="Clock" className="w-55 h-55" />,
    title: "Easy Online Booking & Paying",
    description: "Book your appointment seamlessly from any device.",
  },
  {
    icon: <img src="/images/service-4.png" alt="Award" className="w-55 h-55" />,
    title: "Top Experience Guaranteed",
    description: "We value users happiness above the all.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20  relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 bg-feature-brown">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <FeatureBox
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
