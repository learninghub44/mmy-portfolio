"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, MapPin } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-paper border-b border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-line pb-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-rust">
            Letters &middot; 07
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink mt-3">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-lg text-ink-soft leading-relaxed mb-8">
              Open to discussing new projects, freelance work, or
              opportunities to be part of your build. Reach out through
              whichever channel suits you.
            </p>

            <div className="divide-y divide-line border-t border-b border-line">
              <a
                href="mailto:chrisdeveloper8@gmail.com"
                className="flex items-center gap-4 py-5 group hover:bg-card transition-colors px-2 -mx-2"
              >
                <Mail className="h-5 w-5 text-rust" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">Email</p>
                  <p className="text-ink group-hover:text-rust transition-colors">chrisdeveloper8@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/254701059192"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-5 group hover:bg-card transition-colors px-2 -mx-2"
              >
                <MessageCircle className="h-5 w-5 text-rust" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">WhatsApp</p>
                  <p className="text-ink group-hover:text-rust transition-colors">+254 701 059 192</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-5 group hover:bg-card transition-colors px-2 -mx-2"
              >
                <svg className="h-5 w-5 text-rust" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">LinkedIn</p>
                  <p className="text-ink group-hover:text-rust transition-colors">Connect with me</p>
                </div>
              </a>

              <div className="flex items-center gap-4 py-5 px-2 -mx-2">
                <MapPin className="h-5 w-5 text-rust" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">Location</p>
                  <p className="text-ink">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="border border-line bg-card p-6 sm:p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-ink-soft mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-paper border border-line text-ink focus:outline-none focus:border-rust transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-ink-soft mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-paper border border-line text-ink focus:outline-none focus:border-rust transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-ink-soft mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-paper border border-line text-ink focus:outline-none focus:border-rust transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-ink text-paper font-mono text-xs uppercase tracking-wider hover:bg-rust transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
