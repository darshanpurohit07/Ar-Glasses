"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  const router = useRouter()
  const [orderId, setOrderId] = useState("")
  const [dateTime, setDateTime] = useState("")
  const [cartItems, setCartItems] = useState<any[]>([])

  // Generate a random order ID
  useEffect(() => {
    const randomOrderId = `#${Math.floor(10000 + Math.random() * 90000)}` // Example: #12345
    setOrderId(randomOrderId)

    // Get the current date and time
    const now = new Date()
    const formattedDate = now.toLocaleDateString()
    const formattedTime = now.toLocaleTimeString()
    setDateTime(`${formattedDate} ${formattedTime}`)

    // Fetch cart items from localStorage
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">Order Successful!</h1>
        <p className="text-gray-600 mt-2">Thank you for your purchase.</p>

        <div className="mt-4 text-left">
          <p className="text-lg font-semibold">Order ID: {orderId}</p>
          <p className="text-gray-600">Date & Time: {dateTime}</p>
          <ul className="mt-3">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <li key={index} className="flex justify-between text-gray-700">
                  <span>{item.quantity} x {item.name}</span>
                  <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No items found.</p>
            )}
          </ul>
          <hr className="my-3" />
          <p className="text-lg font-semibold">Total: ₹{totalAmount.toLocaleString()}</p>
        </div>

        <Button
          className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2"
          onClick={() => router.push("/products")} // ✅ Redirects to Product Page
        >
          Return to Home
        </Button>
      </div>
    </div>
  )
}
