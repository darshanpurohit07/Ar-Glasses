"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 sm:pt-12 sm:pb-6 lg:pt-16 lg:pb-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 col-span-full lg:col-span-1 order-1 lg:order-1">
            <h1 className="font-playfair text-[30px] sm:text-[40px] leading-[1.4] lg:text-[55px] lg:leading-[1.3] font-bold tracking-tight max-w-[700px] mx-auto lg:mx-0">
              VIRTUAL <span className="text-[#AA70A7]">TRY-ON</span> FOR YOUR FAVOURITE{" "}
              <span className="text-[#AA70A7]">EYEWEAR</span> BRANDS
            </h1>
            <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start max-w-[330px] mx-auto lg:max-w-none lg:mx-0">
              <Button
                className="font-montserrat h-14 sm:h-12 bg-[#aa70a7] hover:bg-[#aa70a7]/90 text-white px-8 text-base sm:text-sm font-medium w-full"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                VIEW ALL PRODUCTS
              </Button>
              <Button
                className="font-montserrat h-14 sm:h-12 bg-[#28b4a4] hover:bg-[#28b4a4]/90 text-white px-8 text-base sm:text-sm font-medium w-full"
                onClick={() => window.open("https://www.dragarwal.com/appointment-booking-online/?utm_source=Google_Search&utm_campaign=HM_AEH_Search_Maharashtra_Mumbai_Mulund_Generic_18102024&utm_medium=Mulund_Eye_Doctor&utm_term=eye%20doctor&gad_source=1&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfhzeVd08BnGHpTY3FWxu56rNa_jYsT2om0RZwIDI2bzW1vurjZz7YxoCXwkQAvD_BwE", "_blank")}
              >
                SCHEDULE EYE EXAM
              </Button>
            </div>
          </div>
          <div className="relative col-span-full lg:col-span-1 order-2 lg:order-2 w-full max-w-[600px] mx-auto">
            <div className="aspect-[1/1] lg:aspect-auto w-full h-full lg:h-[500px] relative">
              <Image
                src="AB.JPG"alt="Virtual Try-On Demo"
                fill
                className="object-contain rounded-[39px] w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-10 items-center justify-items-center">
          <Image
            src="https://res.cloudinary.com/drnavq85s/image/upload/v1737607053/Saint_Laurent_lwb19c.png"
            alt="Saint Laurent"
            width={300}
            height={100}
            className="h-16 sm:h-20 md:h-24 lg:h-24 w-auto object-contain"
          />
          <Image
            src="https://res.cloudinary.com/drnavq85s/image/upload/v1737607044/Ferragamo_ggx8ne.png"
            alt="Salvatore Ferragamo"
            width={400}
            height={133}
            className="h-16 sm:h-20 md:h-24 lg:h-24 w-auto object-contain"
          />
          <Image
            src="https://res.cloudinary.com/drnavq85s/image/upload/v1737607044/Gucci_kbanuc.png"
            alt="Gucci"
            width={300}
            height={100}
            className="h-16 sm:h-20 md:h-24 lg:h-24 w-auto object-contain"
          />
          <Image
            src="https://res.cloudinary.com/drnavq85s/image/upload/v1737609472/Fendi_Logo_eidszy.png"
            alt="Fendi"
            width={300}
            height={100}
            className="h-16 sm:h-20 md:h-24 lg:h-24 w-auto object-contain"
          />
        </div>
        <div className="flex justify-center mt-8 sm:mt-12">
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </div>
      </div>
    </div>
  )
}

