import { Header } from "@/components/layout/header";
import { AppSection } from "@/components/sections/app-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { Footer } from "@/components/sections/footer";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PromoSection } from "@/components/sections/promo-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <GallerySection />
        <PromoSection
          title="GET 30% OFF ON YOUR FIRST BOOKING"
          description="Discover a full range of grooming and spa services tailored for both men and women, delivered by skilled professionals at salons or in the comfort of your home."
          primaryBtnText="Book Now"
          secondaryBtnText="Explore Now"
          backgroundImage="/images/saloon-bg.jpg"
        />

        <AppSection />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
