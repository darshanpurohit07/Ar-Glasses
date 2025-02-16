"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false)
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email")
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (otpSent && otp.length === 6) {
      // Verify OTP logic here
      router.push("/products")
    } else if (!otpSent) {
      // Send OTP logic here
      setOtpSent(true)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8f8f6]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {isRegistering ? "Register" : "Login"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {isRegistering && (
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
              )}

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

              {otpSent ? (
                <div>
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter OTP"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
              ) : (
                <Button type="button" onClick={() => setOtpSent(true)} className="w-full">
                  Send OTP
                </Button>
              )}

              {isRegistering && (
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" required />
                </div>
              )}

              {isRegistering && (
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
                </div>
              )}
            </div>

            <CardFooter className="flex flex-col gap-3 mt-6">
              <Button type="submit" className="w-full bg-[#aa70a7] hover:bg-[#aa70a7]/90" disabled={otpSent && otp.length !== 6}>
                {isRegistering ? "Register" : "Login"}
              </Button>
              <Button variant="link" onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
