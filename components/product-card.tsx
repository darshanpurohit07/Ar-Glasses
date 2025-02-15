"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Modal } from "./modal"
import { Camera, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  name: string
  imageUrl: string
  tryOnLink?: string
  onAddToCart: (product: { name: string; price: number }) => void
}

export function ProductCard({
  name,
  imageUrl,
  tryOnLink = "https://ar.vervear.com/glasses/675f91cf6a00d6990d91f08e",
  onAddToCart,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    const storedPrice = localStorage.getItem(`price-${name}`)
    if (storedPrice) {
      setPrice(Number(storedPrice)) 
    } else {
      const newPrice = Math.floor(Math.random() * (50000 - 4000 + 1) + 4000) // Generate price ₹4000 - ₹50000
      localStorage.setItem(`price-${name}`, newPrice.toString()) // Store price in localStorage
      setPrice(newPrice)
    }
  }, [name])

  const handleAddToCart = () => {
    onAddToCart({ name, price })
  }

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
      <div className="aspect-square relative mb-4 bg-[#F8F8F6]">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-contain" />
      </div>
      <h3 className="font-montserrat text-[14px] font-medium text-center mb-3 min-h-[48px] line-clamp-2 text-[#515151]">
        {name}
      </h3>
      <p className="text-center font-bold mb-3">₹{price.toLocaleString()}</p>
      <div className="flex gap-2">
        <Button
          className="w-1/2 bg-[#aa70a7] hover:bg-[#aa70a7]/90 text-white text-[10px] h-auto md:h-10 py-1 md:py-1.5 flex items-center justify-center gap-1 flex-shrink-0"
          onClick={() => setIsModalOpen(true)}
        >
          <Camera className="w-3 h-3" />
          TRY-ON
        </Button>
        <Button
          className="w-1/2 bg-[#28b4a4] hover:bg-[#28b4a4]/90 text-white text-[10px] h-auto md:h-10 py-1 md:py-1.5 flex items-center justify-center gap-1 flex-shrink-0"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-3 h-3" />
          ADD TO CART
        </Button>
      </div>
      {isModalOpen && (
  <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    <div className="w-[90vw] md:w-[60vw] h-[75vh] md:h-[80vh] flex flex-col bg-white p-4 rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        {tryOnLink ? (
          <iframe
            src={tryOnLink}
            className="w-full h-full border-0 rounded-lg"
            allow="camera"
            title="Virtual Try-On"
            style={{ overflow: "auto", maxHeight: "100%" }}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-semibold">Virtual Try-On coming soon</p>
          </div>
        )}
      </div>
    </div>
  </Modal>
)}

    </div>
  )
}
