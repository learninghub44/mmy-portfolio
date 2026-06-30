"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5 / CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "SQL", "Authentication"],
  },
  {
    title: "Cloud & Infra",
    skills: ["Cloudflare", "Railway", "Render", "Vercel", "Supabase", "Cloudinary"],
  },
  {
    title: "Payments",
    skills: ["M-Pesa Daraja API", "PayHero", "Paystack", "Pesapal"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux", "VS Code"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-paper-soft border-b border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 border-b border-line pb-6"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-rust">
              Departments &middot; 02
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink mt-3">
              The Stack
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-soft max-w-xs">
            Tools and technologies in regular rotation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-l border-line">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="border-r border-b border-line p-6"
            >
              <span className="font-mono text-xs text-ink-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink mt-2 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-ink-soft leading-relaxed">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
