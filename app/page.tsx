"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email")
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically handle the login logic
    // For now, we'll just redirect to the main page
    router.push("/products")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8f8f6]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div>
                <Label htmlFor="loginMethod">Login Method</Label>
                <div className="flex mt-1">
                  <Button
                    type="button"
                    variant={loginMethod === "email" ? "default" : "outline"}
                    className="w-1/2"
                    onClick={() => setLoginMethod("email")}
                  >
                    Email
                  </Button>
                  <Button
                    type="button"
                    variant={loginMethod === "phone" ? "default" : "outline"}
                    className="w-1/2"
                    onClick={() => setLoginMethod("phone")}
                  >
                    Phone
                  </Button>
                </div>
              </div>
              {loginMethod === "email" ? (
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
              ) : (
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
              )}
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Enter your address" required />
              </div>
            </div>
            <CardFooter className="flex justify-center mt-6">
              <Button type="submit" className="w-full bg-[#aa70a7] hover:bg-[#aa70a7]/90">
                Login
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

