"use client"

import { motion } from "framer-motion"
import { Code, Bot, Zap, Layers, School, ShoppingCart, Cpu, MessageSquare } from "lucide-react"

const services = [
  {
    title: "Full Stack Web Development",
    description: "End-to-end web application development with modern technologies and best practices.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "SaaS Development",
    description: "Building scalable Software-as-a-Service platforms with subscription management and multi-tenancy.",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Solutions",
    description: "Integrating AI and machine learning capabilities into applications for intelligent automation.",
    icon: Bot,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "API Integration",
    description: "Seamlessly integrating third-party APIs and building robust RESTful APIs.",
    icon: Zap,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "School Management Systems",
    description: "Comprehensive educational management solutions for schools and institutions.",
    icon: School,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "POS Systems",
    description: "Point of Sale solutions with inventory management, sales tracking, and analytics.",
    icon: ShoppingCart,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Business Automation",
    description: "Automating business processes to increase efficiency and reduce manual work.",
    icon: Cpu,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Technical Consulting",
    description: "Expert advice on technology stack selection, architecture, and best practices.",
    icon: MessageSquare,
    color: "from-amber-500 to-orange-500",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            What I can help you build
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
