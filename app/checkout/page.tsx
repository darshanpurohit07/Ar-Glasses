"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate checkout process
    setTimeout(() => {
      router.push("/success"); // Redirect to success page
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p className="mb-4">Review your items before proceeding to payment.</p>
        <Button className="w-full bg-[#28b4a4]" onClick={handleCheckout} disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Proceed to Payment"}
        </Button>
      </div>
    </div>
  );
}
