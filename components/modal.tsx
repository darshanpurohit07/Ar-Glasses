'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full h-full md:w-[90%] md:h-[90%] bg-white md:rounded-[32px] overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-[#aa70a7] text-white hover:bg-[#aa70a7]/90 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  )
}

