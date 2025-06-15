"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-left text-white px-4 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <motion.h1
            className="font-gilroy-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Make Your Own
            <br />
            <span className="text-saloon-gold">Hair Story</span>
          </motion.h1>

          <motion.p
            className="font-gilroy-regular text-lg md:text-xl mb-8 text-gray-300 leading-relaxed max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Best Hair Salon & Barber Shop in the city. Experience premium grooming services with our expert stylists.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-saloon-brown hover:bg-saloon-dark-brown text-white px-8 py-4 text-lg font-gilroy-medium"
            >
              Book Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-gray-900 hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-gilroy-medium"
            >
              <Play className="w-5 h-5 mr-2" />
              Play Video
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
