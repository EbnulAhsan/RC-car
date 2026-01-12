"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { CartProvider, useCart } from "@/context/cart-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { carsData } from "@/data/cars"
import { ShoppingCart, ArrowLeft, Check, Zap, Battery, Maximize, Radio } from "lucide-react"

function CarDetailsContent({ car }) {
  const { addToCart, cartItems } = useCart()
  const [added, setAdded] = useState(false)

  const isInCart = cartItems.some((item) => item.id === car.id)

  const handleAddToCart = () => {
    addToCart(car)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const specIcons = {
    speed: Zap,
    battery: Battery,
    scale: Maximize,
    range: Radio,
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Car not found</h1>
          <Link href="/cars" className="text-primary hover:underline">
            Back to cars
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to cars
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
              <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" priority />
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <span className="text-primary font-medium uppercase tracking-wide text-sm">{car.category}</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">{car.name}</h1>
              </div>

              <p className="text-muted-foreground leading-relaxed">{car.description}</p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(car.specs).map(([key, value]) => {
                  const Icon = specIcons[key] || Zap
                  return (
                    <div key={key} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{key}</p>
                        <p className="text-foreground font-semibold">{value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Price & Stock */}
              <div className="flex items-center justify-between py-4 border-t border-b border-border">
                <div>
                  <span className="text-3xl font-bold text-foreground">${car.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${car.quantity > 0 ? "bg-success" : "bg-red-500"}`} />
                  <span className="text-muted-foreground">
                    {car.quantity > 0 ? `${car.quantity} in stock` : "Out of stock"}
                  </span>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={car.quantity <= 0}
                className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all ${
                  added
                    ? "bg-success text-white"
                    : car.quantity > 0
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    {isInCart ? "Add Another" : "Add to Cart"}
                  </>
                )}
              </button>

              {isInCart && !added && (
                <Link
                  href="/cart"
                  className="block w-full text-center py-3 px-6 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors"
                >
                  View Cart
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function CarDetailsPage({ params }) {
  const resolvedParams = use(params)
  const car = carsData.find((c) => c.id === Number.parseInt(resolvedParams.id))

  return (
    <CartProvider>
      <CarDetailsContent car={car} />
    </CartProvider>
  )
}
