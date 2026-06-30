"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-paper border-b border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-rust">
                Profile &middot; 01
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink mt-3">
                About
              </h2>
              <p className="font-mono text-xs text-ink-soft mt-4 uppercase tracking-wider">
                By Chris Odhiambo<br />Nairobi, Kenya
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <p className="drop-cap text-lg leading-relaxed text-ink">
              I build web applications, SaaS platforms, and business software —
              the kind that handles real transactions, real users, and real
              local payment rails. Most of my work serves Kenyan businesses
              directly: schools running daily attendance and report cards,
              shops processing sales through M-Pesa, and founders who need a
              working product, not a prototype.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              My stack runs on React, Next.js, and Node.js on the front and
              back end, with PostgreSQL doing the heavy lifting underneath.
              I deploy across Cloudflare, Railway, Render, and Vercel
              depending on what a project needs, and I integrate the payment
              systems — M-Pesa Daraja, Paystack, Pesapal — that make software
              actually usable here.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              I work on several products at once, switching between client
              work and my own ventures, and I favour thorough architecture
              planning before a single line of UI gets written.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 lg:border-l lg:border-line lg:pl-8"
          >
            <blockquote className="font-display text-2xl italic leading-snug text-ink">
              &ldquo;Good software here means it works on a slow connection
              and settles in M-Pesa.&rdquo;
            </blockquote>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-soft mt-4">
              — Working principle
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
