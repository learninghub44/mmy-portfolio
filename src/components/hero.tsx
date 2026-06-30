"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Download, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

const techIcons = [
  { icon: "⚛️", x: 10, y: 20, delay: 0 },
  { icon: "🚀", x: 80, y: 15, delay: 0.2 },
  { icon: "🔷", x: 20, y: 70, delay: 0.4 },
  { icon: "🟢", x: 75, y: 65, delay: 0.6 },
  { icon: "🐍", x: 50, y: 30, delay: 0.8 },
  { icon: "☁️", x: 30, y: 85, delay: 1 },
  { icon: "🤖", x: 70, y: 40, delay: 1.2 },
  { icon: "💾", x: 15, y: 50, delay: 1.4 },
]

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Software Developer | AI & SaaS Engineer"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index])
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20 dark:opacity-30"
          style={{
            left: `${tech.x}%`,
            top: `${tech.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6,
            delay: tech.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {tech.icon}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">Available for Freelance</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Chris Odhiambo
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium h-8"
          >
            <span>{text}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-6 bg-gray-600 dark:bg-gray-300 ml-1"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            I build scalable web applications, AI-powered solutions, SaaS platforms, and business software that solve real-world problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Learninghub44"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:chrisdeveloper8@gmail.com"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/254701059192"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
