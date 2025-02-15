import type { Metadata } from "next"
import { Outfit, Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Virtual Try-On",
  description: "Try on your favorite eyewear virtually",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} ${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}



import './globals.css'