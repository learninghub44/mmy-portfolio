"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Full Stack Software Development",
    description: "Building end-to-end web applications using React, Next.js, Node.js, and PostgreSQL.",
  },
  {
    title: "SaaS Development",
    description: "Creating scalable Software-as-a-Service platforms with multi-tenancy, subscriptions, and cloud deployment.",
  },
  {
    title: "REST API Development",
    description: "Designing and building robust RESTful APIs with proper authentication, validation, and documentation.",
  },
  {
    title: "Payment Integration",
    description: "Implementing M-Pesa Daraja, PayHero, and Paystack for seamless local and global transactions.",
  },
  {
    title: "Cloud Deployment",
    description: "Deploying and managing applications across Cloudflare, Railway, Vercel, Render, and Supabase.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-paper border-b border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-line pb-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-rust">
            Field Notes &middot; 05
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink mt-3">
            Areas of Expertise
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="grid grid-cols-12 gap-4 py-7 border-b border-line last:border-0"
            >
              <span className="col-span-2 sm:col-span-1 font-mono text-sm text-rust">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="col-span-10 sm:col-span-4 font-display text-xl font-semibold text-ink leading-snug">
                {experience.title}
              </h3>
              <p className="col-span-12 sm:col-span-7 text-ink-soft leading-relaxed sm:pl-2">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
