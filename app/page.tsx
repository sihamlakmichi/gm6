import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        <ServicesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
