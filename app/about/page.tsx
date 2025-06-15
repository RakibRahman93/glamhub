import { Header } from "@/components/layout/header";
import { Footer } from "@/components/sections/footer";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Heart, Scissors, Star, Users } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "500+",
    label: "Happy Clients",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "10+",
    label: "Years Experience",
  },
  { icon: <Award className="w-8 h-8" />, number: "50+", label: "Awards Won" },
  {
    icon: <Star className="w-8 h-8" />,
    number: "4.9",
    label: "Average Rating",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Master Stylist",
    experience: "12 years",
    specialty: "Hair Coloring & Styling",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mike Rodriguez",
    role: "Senior Barber",
    experience: "8 years",
    specialty: "Classic Cuts & Beard Styling",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Emily Chen",
    role: "Beauty Specialist",
    experience: "6 years",
    specialty: "Bridal & Special Occasions",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "David Thompson",
    role: "Hair Treatment Expert",
    experience: "10 years",
    specialty: "Hair Care & Treatments",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-r from-saloon-brown to-saloon-dark-brown text-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center">
                <h1 className="font-gilroy-bold text-4xl md:text-5xl mb-4 text-saloon-brown">
                  About HairStyle
                </h1>
                <p className="font-gilroy-regular text-lg max-w-2xl mx-auto text-saloon-brown">
                  Discover our story, meet our talented team, and learn why
                  we're the premier destination for hair and beauty services.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div>
                  <h2 className="font-gilroy-bold text-3xl md:text-4xl text-gray-900 mb-6">
                    Our Story
                  </h2>
                  <p className="font-gilroy-regular text-lg text-gray-600 mb-6 leading-relaxed">
                    Founded in 2014, HairStyle began as a small neighborhood
                    salon with a big dream: to provide exceptional hair and
                    beauty services that make every client feel confident and
                    beautiful.
                  </p>
                  <p className="font-gilroy-regular text-lg text-gray-600 mb-6 leading-relaxed">
                    Over the years, we've grown into a premier destination for
                    hair styling, coloring, and beauty treatments, serving
                    hundreds of satisfied clients who trust us with their most
                    important moments.
                  </p>
                  <p className="font-gilroy-regular text-lg text-gray-600 mb-8 leading-relaxed">
                    Our commitment to excellence, continuous learning, and
                    staying ahead of the latest trends has made us the go-to
                    salon for discerning clients who demand the best.
                  </p>
                  <Button
                    size="lg"
                    className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium"
                  >
                    Book Your Visit
                  </Button>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=500&width=600"
                    alt="Our salon interior"
                    className="rounded-lg shadow-lg w-full"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-saloon-brown text-white p-6 rounded-lg">
                    <Scissors className="w-8 h-8 mb-2" />
                    <p className="font-gilroy-bold text-lg">10+ Years</p>
                    <p className="font-gilroy-regular text-sm">of Excellence</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-saloon-brown">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <h3 className="font-gilroy-bold text-3xl mb-2">
                      {stat.number}
                    </h3>
                    <p className="font-gilroy-regular">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="font-gilroy-bold text-3xl md:text-4xl text-gray-900 mb-8">
                  Our Mission
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <Heart className="w-12 h-12 text-saloon-brown mx-auto mb-4" />
                      <h3 className="font-gilroy-bold text-xl text-gray-900 mb-4">
                        Passion
                      </h3>
                      <p className="font-gilroy-regular text-gray-600">
                        We're passionate about making you look and feel your
                        absolute best with every visit.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <Award className="w-12 h-12 text-saloon-brown mx-auto mb-4" />
                      <h3 className="font-gilroy-bold text-xl text-gray-900 mb-4">
                        Excellence
                      </h3>
                      <p className="font-gilroy-regular text-gray-600">
                        We strive for excellence in every service, using only
                        the finest products and techniques.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <Users className="w-12 h-12 text-saloon-brown mx-auto mb-4" />
                      <h3 className="font-gilroy-bold text-xl text-gray-900 mb-4">
                        Community
                      </h3>
                      <p className="font-gilroy-regular text-gray-600">
                        We're proud to be part of our community and build
                        lasting relationships with our clients.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="font-gilroy-bold text-3xl md:text-4xl text-gray-900 mb-4">
                  Meet Our Team
                </h2>
                <p className="font-gilroy-regular text-lg text-gray-600 max-w-2xl mx-auto">
                  Our talented team of stylists and beauty experts are here to
                  help you achieve your perfect look.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="border-0 shadow-lg overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gray-200 overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-gilroy-bold text-xl text-gray-900 mb-2">
                          {member.name}
                        </h3>
                        <p className="font-gilroy-medium text-saloon-brown mb-2">
                          {member.role}
                        </p>
                        <p className="font-gilroy-regular text-sm text-gray-600 mb-2">
                          {member.experience} experience
                        </p>
                        <p className="font-gilroy-regular text-sm text-gray-500">
                          {member.specialty}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-gilroy-bold text-3xl md:text-4xl text-gray-900 mb-6">
                  Ready to Experience the Difference?
                </h2>
                <p className="font-gilroy-regular text-lg text-gray-600 mb-8">
                  Join hundreds of satisfied clients who trust HairStyle for
                  their beauty and grooming needs. Book your appointment today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium"
                  >
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-saloon-brown text-saloon-brown hover:bg-saloon-brown hover:text-white px-8 py-4 text-lg font-gilroy-medium"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
