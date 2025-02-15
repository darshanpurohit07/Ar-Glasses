"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface BrandFilterProps {
  selectedBrands: string[]
  onBrandChange: (brands: string[]) => void
  onMobileFilterClick?: () => void
}

export function BrandFilter({ selectedBrands = [], onBrandChange, onMobileFilterClick }: BrandFilterProps) {
  const brands = ["Gucci", "Saint Laurent", "Fendi", "Cazal"]
  const isMobile = useMediaQuery("(max-width: 640px)")

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      onBrandChange(selectedBrands.filter((b) => b !== brand))
    } else {
      onBrandChange([...selectedBrands, brand])
    }
  }

  if (isMobile) {
    return (
      <Button variant="outline" className="w-full" onClick={onMobileFilterClick}>
        Filter by Brand
        {selectedBrands.length > 0 && ` (${selectedBrands.length})`}
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[140px]">
          Filter by Brand
          {selectedBrands.length > 0 && ` (${selectedBrands.length})`}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
        {brands.map((brand) => (
          <DropdownMenuCheckboxItem
            key={brand}
            checked={selectedBrands.includes(brand)}
            onSelect={(e) => {
              e.preventDefault()
              toggleBrand(brand)
            }}
          >
            {brand}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

