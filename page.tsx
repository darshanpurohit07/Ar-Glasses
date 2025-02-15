import { Banner } from './components/banner'
import { Header } from './components/header'
import { ProductGrid } from './components/product-grid'

export default function VirtualTryOn() {
  return (
    <div className="min-h-screen bg-[#f8f8f6]">
      <Banner />
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#aa70a7]">
          <span className="text-[#aa70a7]">Virtual Try-On</span>{' '}
          <span className="text-black">Products</span>
        </h1>
        <ProductGrid />
      </main>
    </div>
  )
}

