"use client"

import { motion } from "framer-motion"
import { Code, Layers, Zap, School, ShoppingCart, Cpu, MessageSquare, CreditCard } from "lucide-react"

const services = [
  {
    title: "Full Stack Web Development",
    description: "End-to-end web application development with modern technologies and best practices.",
    icon: Code,
  },
  {
    title: "SaaS Development",
    description: "Scalable Software-as-a-Service platforms with subscription management and multi-tenancy.",
    icon: Layers,
  },
  {
    title: "Payment Integration",
    description: "Wiring M-Pesa Daraja, Paystack, and Pesapal into checkout flows that actually convert.",
    icon: CreditCard,
  },
  {
    title: "API Integration",
    description: "Seamless third-party API integration and robust, well-documented RESTful APIs.",
    icon: Zap,
  },
  {
    title: "School Management Systems",
    description: "Comprehensive educational management solutions for schools and institutions.",
    icon: School,
  },
  {
    title: "POS Systems",
    description: "Point of Sale solutions with inventory management, sales tracking, and analytics.",
    icon: ShoppingCart,
  },
  {
    title: "Business Automation",
    description: "Automating business processes to increase efficiency and reduce manual work.",
    icon: Cpu,
  },
  {
    title: "Technical Consulting",
    description: "Advice on technology stack selection, architecture, and engineering best practices.",
    icon: MessageSquare,
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-paper border-b border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-line pb-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-rust">
            Services &middot; 03
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink mt-3">
            What I Cover
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card p-6 hover:bg-paper-soft transition-colors"
              >
                <Icon className="h-5 w-5 text-rust mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-semibold text-ink mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
