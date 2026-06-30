"use client"

import { motion } from "framer-motion"
import { Code2, Database, Cloud, Brain, CreditCard, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "SQL", "Authentication"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    skills: ["Railway", "Supabase", "Cloudinary", "Vercel"],
  },
  {
    title: "AI",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    skills: ["Groq API", "OpenAI API", "Prompt Engineering", "AI Chatbots"],
  },
  {
    title: "Payments",
    icon: CreditCard,
    color: "from-yellow-500 to-orange-500",
    skills: ["M-Pesa Daraja API", "PayHero", "Paystack"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-gray-500 to-slate-500",
    skills: ["Git", "GitHub", "Linux", "VS Code"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
