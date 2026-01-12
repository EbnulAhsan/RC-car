"use client"

import Link from "next/link"
import { CartProvider, useCart } from "@/context/cart-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CartItem from "@/components/cart-item"
import { ShoppingBag, ArrowRight, Trash2 } from "lucide-react"

function CartContent() {
  const { cartItems, cartTotal, clearCart } = useCart()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Shopping Cart</h1>
              <p className="text-muted-foreground mt-2">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
              </p>
            </div>
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span className="text-success">Free</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Tax</span>
                      <span>${(cartTotal * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-center justify-between text-foreground font-bold text-lg">
                      <span>Total</span>
                      <span>${(cartTotal * 1.1).toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                    Checkout
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <Link
                    href="/cars"
                    className="block w-full text-center mt-4 py-3 px-6 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Looks like you haven't added any RC cars yet.</p>
              <Link
                href="/cars"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground py-3 px-8 rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              >
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function CartPage() {
  return (
    <CartProvider>
      <CartContent />
    </CartProvider>
  )
}
