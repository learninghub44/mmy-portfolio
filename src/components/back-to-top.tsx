"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow",
        !isVisible && "pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  )
}
