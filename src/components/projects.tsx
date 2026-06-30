"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Kenya Jobs Portal",
    dek: "A modern Kenyan job board connecting employers with job seekers through an intuitive, responsive, fast platform.",
    liveUrl: "https://kenyajobs.vercel.app/",
    githubUrl: "https://github.com/Learninghub44/kenya-jobs-portal",
    tech: ["Next.js", "PostgreSQL", "Railway"],
  },
  {
    title: "CBC School ERP",
    dek: "A comprehensive school management system covering admissions, attendance, examinations, finance, and report cards.",
    liveUrl: "https://cbc-school-erp.pages.dev/",
    githubUrl: "https://github.com/Learninghub44/cbc-school-erp",
    tech: ["Next.js", "PostgreSQL", "Cloudflare"],
  },
  {
    title: "Kenya Voices",
    dek: "A modern publishing platform where users share articles, opinions, and stories with a clean reading experience.",
    liveUrl: "https://kenya-voices.vercel.app/",
    githubUrl: "https://github.com/Learninghub44/kenya-voices",
    tech: ["Next.js", "PostgreSQL"],
  },
  {
    title: "Mimoflorist",
    dek: "A florist business website showcasing products and services with a responsive, considered interface.",
    liveUrl: "https://mimofrorist.vercel.app/index.html",
    githubUrl: "https://github.com/Learninghub44/mimoflorist",
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Smart POS System",
    dek: "A cloud-based Point of Sale platform with inventory, customer management, sales tracking, and analytics.",
    liveUrl: "https://smart-pos-web-liart.vercel.app/",
    githubUrl: "https://github.com/Learninghub44/smart-pos",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-paper-soft border-b border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-line pb-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-rust">
            Features &middot; 04
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink mt-3">
            Selected Work
          </h2>
        </motion.div>

        <div className="divide-y divide-line border-t border-b border-line">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-8 items-baseline hover:bg-card transition-colors px-2 -mx-2"
            >
              <span className="md:col-span-1 font-mono text-sm text-rust">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-4 font-display text-2xl sm:text-3xl font-semibold text-ink leading-tight flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="h-5 w-5 text-ink-soft opacity-0 group-hover:opacity-100 group-hover:text-rust transition-all" />
              </h3>
              <p className="md:col-span-5 text-ink-soft leading-relaxed">
                {project.dek}
              </p>
              <div className="md:col-span-2 flex flex-wrap gap-2 md:justify-end">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] uppercase tracking-wider text-ink-soft border border-line px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
