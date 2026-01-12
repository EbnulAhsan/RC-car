"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { Minus, Plus, Trash2 } from "lucide-react"

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex gap-4 p-4 bg-card rounded-xl border border-border">
      {/* Image */}
      <Link href={`/cars/${item.id}`} className="shrink-0">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-muted">
          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
        </div>
      </Link>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/cars/${item.id}`}>
            <h3 className="text-foreground font-semibold hover:text-primary transition-colors">{item.name}</h3>
          </Link>
          <span className="text-sm text-primary">{item.category}</span>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1.5 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Minus className="w-4 h-4 text-foreground" />
            </button>
            <span className="w-8 text-center text-foreground font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1.5 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <Plus className="w-4 h-4 text-foreground" />
            </button>
          </div>

          {/* Price & Remove */}
          <div className="flex items-center gap-4">
            <span className="text-foreground font-bold">${(item.price * item.quantity).toFixed(2)}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
