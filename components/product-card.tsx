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
    // Generate a random price between 5000 and 20000
    setPrice(Math.floor(Math.random() * (20000 - 5000 + 1) + 5000))
  }, [])

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
          className="w-1/2 bg-[#aa70a7] hover:bg-[#aa70a7]/90 text-white text-sm h-auto md:h-10 py-3 md:py-2 flex items-center justify-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Camera className="w-4 h-4" />
          TRY-ON
        </Button>
        <Button
          className="w-1/2 bg-[#28b4a4] hover:bg-[#28b4a4]/90 text-white text-sm h-auto md:h-10 py-3 md:py-2 flex items-center justify-center gap-2"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4" />
          ADD TO CART
        </Button>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {tryOnLink ? (
            <iframe src={tryOnLink} className="w-full h-full border-0" allow="camera" title="Virtual Try-On" />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-semibold">Virtual Try-On coming soon</p>
            </div>
          )}
        </Modal>
      )}
    </div>
  )
}

