import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const footerLinks = {
  services: [
    "Hair Cutting & Styling",
    "Beard Trimming",
    "Hair Coloring",
    "Hair Treatment",
    "Bridal Packages",
    "Men's Grooming",
  ],
  company: ["About Us", "Our Team", "Careers", "Contact", "Privacy Policy", "Terms of Service"],
  locations: ["Downtown Branch", "Mall Location", "Uptown Salon", "City Center", "Suburban Branch"],
}

export function Footer() {
  return (
    <footer className="bg-saloon-dark-brown text-white">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-gilroy-bold text-2xl text-saloon-gold">HairStyle</h3>
              <p className="font-gilroy-regular text-gray-300 leading-relaxed">
                Premium hair styling and grooming services with over 10 years of experience in the beauty industry.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-saloon-gold hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-saloon-gold hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-saloon-gold hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-saloon-gold hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-gilroy-bold text-lg text-saloon-gold">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <a href="#" className="font-gilroy-regular text-gray-300 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-gilroy-bold text-lg text-saloon-gold">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="font-gilroy-regular text-gray-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-gilroy-bold text-lg text-saloon-gold">Contact Info</h4>
              <div className="space-y-3">
                <p className="font-gilroy-regular text-gray-300">
                  123 Beauty Street
                  <br />
                  Downtown, City 12345
                </p>
                <p className="font-gilroy-regular text-gray-300">
                  Phone: (555) 123-4567
                  <br />
                  Email: info@hairstyle.com
                </p>
                <p className="font-gilroy-regular text-gray-300">
                  Mon-Sat: 9AM-8PM
                  <br />
                  Sunday: 10AM-6PM
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <Separator className="my-8 bg-saloon-brown" />

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-gilroy-regular text-gray-300 text-sm">© 2024 HairStyle. All rights reserved.</p>
            <p className="font-gilroy-regular text-gray-300 text-sm mt-2 md:mt-0">Designed with ❤️ for beautiful hair</p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
