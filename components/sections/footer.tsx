import { AnimatedSection } from "@/components/ui/animated-section";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Services: [
    "Facials",
    "Eyelash Extensions & Brow Tinting",
    "Makeup Services",
    "Nail Services",
    "Body Treatments",
    "Haircuts & Beard Grooming",
    "Massage Therapy",
  ],
  Company: [
    "Chat",
    "FAQ",
    "Booking and Return",
    "Contact",
    "Policies",
    "Accessibility",
    "My Account",
  ],
  Stores: [
    "Dhaka",
    "Chittagong",
    "Khulna",
    "Rajshahi",
    "Mymensingh",
    "Barishal",
    "Rangpur",
  ],
};

export function Footer() {
  return (
    <footer className="text-white">
      <div className="container mx-auto px-12 py-16 bg-[url('/images/footer-bg.jpg')] bg-cover bg-center">
       
          <AnimatedSection>
             <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
              {/* Brand / About Section */}
              <div className="space-y-4 text-center lg:text-left">
                <img src="/images/footer-logo.png" alt="footer-logo" />
                <p className="font-gilroy-regular text-gray-300 leading-relaxed max-w-sm">
                  Partnering with top salons to bring you premium grooming,
                  style, and care.
                </p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <Facebook className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                  <Instagram className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                  <Twitter className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                  <Youtube className="w-6 h-6 hover:text-gray-300 cursor-pointer" />
                </div>
              </div>

              {/* Dynamic Footer Links */}
              {Object.entries(footerLinks).map(([section, links]) => (
                <div
                  key={section}
                  className="space-y-4 text-center lg:text-left"
                >
                  <h4 className="font-gilroy-bold text-3xl text-white">
                    {section}
                  </h4>
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="font-gilroy-regular text-gray-300 hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            </div>
          </AnimatedSection>
        </div>

        {/* <Separator className="my-8 bg-saloon-brown" />

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-gilroy-regular text-gray-300 text-sm">
              © 2024 HairStyle. All rights reserved.
            </p>
            <p className="font-gilroy-regular text-gray-300 text-sm mt-2 md:mt-0">
              Designed with ❤️ for beautiful hair
            </p>
          </div>
        </AnimatedSection> */}
      </div>
    </footer>
  );
}
