import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { PromoSection } from "@/components/sections/promo-section"
import { AppSection } from "@/components/sections/app-section"
import { Footer } from "@/components/sections/footer"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <GallerySection />
        <PromoSection />
        <AppSection />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}
