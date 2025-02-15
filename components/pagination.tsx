"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SearchBar } from "./search-bar"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  onSearch: (query: string) => void
}

export function Pagination({ currentPage, totalPages, onPageChange, onSearch }: PaginationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 w-full">
      <div className="w-full sm:w-[200px]">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="flex items-center justify-center sm:justify-end gap-2 overflow-x-auto w-full sm:w-auto py-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            className={`${currentPage === page ? "bg-[#aa70a7] hover:bg-[#aa70a7]/90" : ""} min-w-[40px]`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

