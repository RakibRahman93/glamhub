import { AnimatedSection } from "@/components/ui/animated-section";
import { FeatureBox } from "@/components/ui/feature-box";
import { Award, Clock, Scissors, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Scissors className="w-8 h-8 text-white" />,
    title: "Top Expert Beauty Saloon & Parlor",
    description:
      "Our skilled team ensures every look is tailored to perfection.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "Premium Products & Hygiene Standards",
    description:
      "Only the best, safe, and hygienic products.",
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Easy Online Booking & Paying",
    description:
      "Book your appointment seamlessly from any device.",
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Top Experience Guaranteed",
    description:
      "We value users happiness above the all.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-feature-brown relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
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
