"use client"

import { ProductCard } from "./product-card"

interface Product {
  name: string
  imageUrl: string
  tryOnLink?: string
}

interface ProductGridProps {
  currentPage: number
  products: Product[]
  onAddToCart: (product: { name: string; price: number }) => void
}

export function ProductGrid({ currentPage, products, onAddToCart }: ProductGridProps) {
  const ITEMS_PER_PAGE = 15
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProducts = products.slice(startIndex, endIndex)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-6">
      {currentProducts.map((product, index) => (
        <ProductCard
          key={startIndex + index}
          name={product.name}
          imageUrl={product.imageUrl}
          tryOnLink={product.tryOnLink}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

