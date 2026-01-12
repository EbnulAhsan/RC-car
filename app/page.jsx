import { CartProvider } from "@/context/cart-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import FeaturedCars from "@/components/featured-cars"
import CategoriesSection from "@/components/categories-section"

export default function HomePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturedCars />
          <CategoriesSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
