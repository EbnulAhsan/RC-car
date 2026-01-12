import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">RC</span>
              </div>
              <span className="text-xl font-bold text-foreground">RC CAR</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your premier destination for high-performance RC cars. Quality vehicles for enthusiasts of all levels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  All Cars
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cars?category=Off-Road"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Off-Road
                </Link>
              </li>
              <li>
                <Link
                  href="/cars?category=Racing"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Racing
                </Link>
              </li>
              <li>
                <Link
                  href="/cars?category=Drift"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Drift
                </Link>
              </li>
              <li>
                <Link
                  href="/cars?category=Crawler"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Crawler
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                support@rccar.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Los Angeles, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2026 RC CAR. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
