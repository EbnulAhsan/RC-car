"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { CartProvider } from "@/context/cart-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CarCard from "@/components/car-card"
import { carsData, categories } from "@/data/cars"
import { Search, SlidersHorizontal } from "lucide-react"

function CarsContent() {
  const searchParams = useSearchParams()
  const [filteredCars, setFilteredCars] = useState(carsData)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    const searchParam = searchParams.get("search")

    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
    if (searchParam) {
      setSearchQuery(searchParam)
    }
  }, [searchParams])

  useEffect(() => {
    let result = carsData

    if (selectedCategory !== "All") {
      result = result.filter((car) => car.category === selectedCategory)
    }

    if (searchQuery.trim()) {
      result = result.filter(
        (car) =>
          car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredCars(result)
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">All RC Cars</h1>
            <p className="text-muted-foreground mt-2">Browse our complete collection of high-performance RC vehicles</p>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search cars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 bg-secondary rounded-xl text-foreground font-medium"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>

            {/* Category Filters - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filters - Mobile */}
          {showFilters && (
            <div className="lg:hidden flex flex-wrap gap-2 mb-8 p-4 bg-card rounded-xl border border-border">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setShowFilters(false)
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing {filteredCars.length} {filteredCars.length === 1 ? "car" : "cars"}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>

          {/* Cars Grid */}
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No cars found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function CarsPage() {
  return (
    <CartProvider>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <CarsContent />
      </Suspense>
    </CartProvider>
  )
}
