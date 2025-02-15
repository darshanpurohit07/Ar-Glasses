"use client"
import Image from "next/image"
import { Menu, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"

interface HeaderProps {
  selectedBrand: string
  onBrandChange: (brand: string) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Header({ selectedBrand, onBrandChange, isOpen, setIsOpen }: HeaderProps) {
  const brands = ["All", "Gucci", "Saint Laurent", "Fendi", "Cazal"]
  const router = useRouter()

  const handleBrandSelect = (brand: string) => {
    onBrandChange(brand === "All" ? "" : brand)
    setIsOpen(false)
  }

  const handleLogout = () => {
    // Here you would typically handle the logout logic
    // For now, we'll just redirect to the login page
    router.push("/")
  }

  return (
    <header className="border-b border-[#dcdcdc]">
      <div className="container mx-auto px-4 lg:px-[90px]">
        <div className="max-w-[1440px] mx-auto py-4 flex justify-between items-center">
          <div className="w-32 sm:w-48 md:w-64">
            <Image
              src="new.svg"
              alt="The Eye Doctor Unlimited"
              width={240}
              height={80}
              className="w-full h-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button
              className="hidden md:inline-flex bg-[#28b4a4] hover:bg-[#28b4a4]/90 text-white"
              onClick={() => window.open("https://www.dragarwal.com/appointment-booking-online/?utm_source=Google_Search&utm_campaign=HM_AEH_Search_Maharashtra_Mumbai_Mulund_Generic_18102024&utm_medium=Mulund_Eye_Doctor&utm_term=eye%20doctor&gad_source=1&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfhzeVd08BnGHpTY3FWxu56rNa_jYsT2om0RZwIDI2bzW1vurjZz7YxoCXwkQAvD_BwE", "_blank")}
            >
              Schedule Eye Exam Here
            </Button>
            <Button variant="outline" className="hidden md:inline-flex" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="w-[38px] h-[38px]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8 flex flex-col gap-6">
                <Button
                  className="w-full bg-[#28b4a4] hover:bg-[#28b4a4]/90 text-white"
                  onClick={() => window.open("https://www.dragarwal.com/appointment-booking-online/?utm_source=Google_Search&utm_campaign=HM_AEH_Search_Maharashtra_Mumbai_Mulund_Generic_18102024&utm_medium=Mulund_Eye_Doctor&utm_term=eye%20doctor&gad_source=1&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfhzeVd08BnGHpTY3FWxu56rNa_jYsT2om0RZwIDI2bzW1vurjZz7YxoCXwkQAvD_BwE", "_blank")}
                >
                  Schedule Eye Exam Here
                </Button>
                <Button variant="outline" className="w-full" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
                <div>
                  <h3 className="mb-4 text-lg font-medium">Filter by Brand</h3>
                  <RadioGroup value={selectedBrand || "All"} onValueChange={handleBrandSelect}>
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <RadioGroupItem value={brand} id={brand} />
                        <Label htmlFor={brand}>{brand}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

