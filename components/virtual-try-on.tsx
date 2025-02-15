'use client'

import { useEffect, useRef } from 'react'

interface VirtualTryOnProps {
  productId: string
}

export function VirtualTryOn({ productId }: VirtualTryOnProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true })
      } catch (err) {
        console.error('Error accessing camera:', err)
      }
    }

    requestCameraPermission()
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src={`https://ar.vervear.com/glasses/${productId}`}
      className="w-full h-full"
      allow="camera"
      title="Virtual Try-On"
    />
  )
}

