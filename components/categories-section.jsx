import Link from "next/link"
import { Truck, Trophy, Wind, Mountain } from "lucide-react"

const categories = [
  {
    name: "Off-Road",
    description: "Conquer any terrain",
    icon: Truck,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Racing",
    description: "Speed machines",
    icon: Trophy,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Drift",
    description: "Sideways action",
    icon: Wind,
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "Crawler",
    description: "Technical climbing",
    icon: Mountain,
    color: "from-green-500 to-emerald-500",
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Shop by Category</h2>
          <p className="text-muted-foreground mt-2">Find the perfect RC car for your driving style</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/cars?category=${category.name}`}
              className="group relative bg-background rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
