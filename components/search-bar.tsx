"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <div className="relative">
      <Input type="text" placeholder="Search products..." onChange={handleSearch} className="pr-10" />
      <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  )
}

