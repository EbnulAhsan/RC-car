import { carsData } from "@/data/cars"
import CarCard from "./car-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedCars() {
  const featuredCars = carsData.slice(0, 4)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Cars</h2>
            <p className="text-muted-foreground mt-2">Our most popular high-performance RC vehicles</p>
          </div>
          <Link
            href="/cars"
            className="group flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Cars
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}
