"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeItem = (name: string) => {
    const updatedCart = cart.filter((item) => item.name !== name);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (name: string, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.name === name ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 md:px-10">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <ShoppingCart className="w-7 h-7" />
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
          <ul>
            {cart.map((item) => (
              <li key={item.name} className="flex justify-between items-center border-b py-3">
                <div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-500">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.name, parseInt(e.target.value))}
                    className="w-12 p-1 border rounded"
                  />
                  <Button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={() => removeItem(item.name)}>
                    <Trash2 className="w-4 h-4" /> Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-xl font-semibold flex justify-between">
            <span>Total:</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>

          <Button
            className="w-full mt-4 bg-[#28b4a4] hover:bg-[#28b4a4]/90 text-white text-lg py-3 rounded-lg"
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </Button>
        </div>
      )}
    </div>
  );
}
