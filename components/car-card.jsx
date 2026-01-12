"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/cart-context"
import { ShoppingCart, Eye } from "lucide-react"

export default function CarCard({ car }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(car)
  }

  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link href={`/cars/${car.id}`} className="block w-full h-full">
          <Image
            src={car.image || "/placeholder.svg"}
            alt={car.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          <Link
            href={`/cars/${car.id}`}
            className="p-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <Link href={`/cars/${car.id}`} className="block p-4">
        <span className="text-xs text-primary font-medium uppercase tracking-wide">{car.category}</span>
        <h3 className="text-foreground font-semibold mt-1 group-hover:text-primary transition-colors">{car.name}</h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-foreground">${car.price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground">{car.quantity} in stock</span>
        </div>
      </Link>
    </div>
  )
}
