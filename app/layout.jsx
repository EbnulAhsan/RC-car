import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RC CAR - Premium Remote Control Cars",
  description:
    "Shop the best collection of RC cars, trucks, and accessories. High-performance remote control vehicles for enthusiasts.",
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
