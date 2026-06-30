"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, ArrowDown } from "lucide-react"

const coverLines = [
  { label: "Profile", title: "Building software for Kenyan business" },
  { label: "Feature", title: "Five platforms, one developer" },
  { label: "Departments", title: "Web, SaaS & payments — a working method" },
]

export function Hero() {
  return (
    <section id="top" className="relative bg-paper border-b border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Main cover column */}
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-rust mb-4"
            >
              The Developer Issue &middot; Nairobi Edition
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink"
            >
              Software, built
              <br />
              for how Kenya
              <br />
              <span className="italic text-rust">actually pays.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft border-l-2 border-rust pl-5"
            >
              I&apos;m a full stack developer based in Nairobi. I design and ship web
              applications, SaaS platforms, and business software — wired for
              M-Pesa, built for local markets, and engineered to scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper font-mono text-xs uppercase tracking-wider hover:bg-rust transition-colors"
              >
                Read the features
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-ink text-ink font-mono text-xs uppercase tracking-wider hover:border-rust hover:text-rust transition-colors"
              >
                Get in touch
              </a>
              <a
                href="/cv.pdf"
                download
                className="font-mono text-xs uppercase tracking-wider text-ink-soft underline underline-offset-4 hover:text-rust transition-colors"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex items-center gap-5"
            >
              <a
                href="mailto:chrisdeveloper8@gmail.com"
                aria-label="Email"
                className="text-ink-soft hover:text-rust transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/254701059192"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-ink-soft hover:text-rust transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Learninghub44"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-ink-soft hover:text-rust transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Cover lines sidebar — table of contents */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft mb-6">
              In this issue
            </p>
            <ul className="space-y-6">
              {coverLines.map((line, i) => (
                <li key={line.label} className="border-b border-line pb-6 last:border-0">
                  <span className="font-mono text-xs uppercase tracking-wider text-rust">
                    {String(i + 1).padStart(2, "0")} — {line.label}
                  </span>
                  <p className="font-display text-xl mt-2 text-ink leading-snug">
                    {line.title}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 border border-olive text-olive font-mono text-xs uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-olive" />
              </span>
              Open for freelance work
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-soft hover:text-rust transition-colors"
      >
        Continue reading <ArrowDown className="h-3 w-3" />
      </a>
    </section>
  )
}
