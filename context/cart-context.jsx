"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem("rccar-cart")
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("rccar-cart", JSON.stringify(cartItems))
    }
  }, [cartItems, isLoaded])

  const addToCart = (car) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === car.id)
      if (existing) {
        return prev.map((item) => (item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...car, quantity: 1 }]
    })
  }

  const removeFromCart = (carId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== carId))
  }

  const updateQuantity = (carId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(carId)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === carId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
