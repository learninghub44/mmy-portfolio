"use client"

import { motion } from "framer-motion"
import { Code, Layers, Bot, Zap, Cloud, Database } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Software Development",
    description: "Building end-to-end web applications using modern technologies like React, Next.js, Node.js, and PostgreSQL.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "SaaS Development",
    description: "Creating scalable Software-as-a-Service platforms with multi-tenancy, subscription management, and cloud deployment.",
    icon: Layers,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Application Development",
    description: "Integrating AI capabilities using OpenAI and Groq APIs to build intelligent chatbots and automation tools.",
    icon: Bot,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "REST API Development",
    description: "Designing and building robust RESTful APIs with proper authentication, validation, and documentation.",
    icon: Zap,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Payment Integration",
    description: "Implementing payment gateways including M-Pesa Daraja API, PayHero, and Paystack for seamless transactions.",
    icon: Cloud,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Cloud Deployment",
    description: "Deploying and managing applications on cloud platforms including Railway, Vercel, Supabase, and Cloudinary.",
    icon: Database,
    color: "from-teal-500 to-cyan-500",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Areas I specialize in
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2" />

            {/* Experience Items */}
            {experiences.map((experience, index) => {
              const Icon = experience.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2 z-10 ring-4 ring-white dark:ring-gray-800" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${experience.color} mb-4 ${isEven ? 'md:ml-auto' : ''}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
