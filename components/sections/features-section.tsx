import { FeatureBox } from "@/components/ui/feature-box"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Scissors, Sparkles, Clock, Award } from "lucide-react"

const features = [
  {
    icon: <Scissors className="w-8 h-8 text-white" />,
    title: "Hair Cutting",
    description:
      "Professional hair cutting services with the latest techniques and precision styling for every hair type.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-white" />,
    title: "Advance Trimming",
    description: "Advanced trimming techniques using modern tools and methods for the perfect finish every time.",
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    title: "Fast Trimming",
    description: "Quick and efficient trimming services without compromising on quality or attention to detail.",
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Top Professionals",
    description: "Experienced stylists and barbers with years of expertise in the latest trends and techniques.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-saloon-brown relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <FeatureBox icon={feature.icon} title={feature.title} description={feature.description} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
