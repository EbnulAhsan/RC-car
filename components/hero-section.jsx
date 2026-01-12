import Link from "next/link"
import { ArrowRight, Zap, Shield, Truck } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-primary)_0%,_transparent_50%)] opacity-20" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--color-border)_1px,_transparent_1px),linear-gradient(to_bottom,_var(--color-border)_1px,_transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            New 2026 Collection Available
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Unleash the Power of
            <span className="block text-primary">Remote Control</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Discover our premium collection of high-performance RC cars. From off-road monsters to precision drift
            machines, find your perfect ride.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cars"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/cars?category=Racing"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-secondary/80 transition-all"
            >
              Explore Racing
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">2-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm">Fast Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
