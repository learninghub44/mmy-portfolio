"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Kenya Jobs Portal",
    description: "A modern Kenyan job board connecting employers with job seekers through an intuitive, responsive, and fast platform.",
    liveUrl: "https://kenyajobs.vercel.app/",
    githubUrl: "https://github.com/Learninghub44/kenya-jobs-portal",
    tech: ["Next.js", "PostgreSQL", "Railway", "Tailwind CSS"],
    image: "/projects/kenya-jobs.jpg",
  },
  {
    title: "CBC School ERP",
    description: "A comprehensive school management system supporting admissions, attendance, examinations, finance, report cards, and school administration.",
    liveUrl: "https://cbc-school-erp.pages.dev/",
    githubUrl: "https://github.com/Learninghub44/cbc-school-erp",
    tech: ["Next.js", "PostgreSQL", "Railway", "Cloudinary"],
    image: "/projects/cbc-school.jpg",
  },
  {
    title: "Kenya Voices",
    description: "A modern publishing platform where users can share articles, opinions, and stories with a clean reading experience.",
    liveUrl: "https://kenya-voices.vercel.app/",
    githubUrl: "https://github.com/Learninghub44/kenya-voices",
    tech: ["Next.js", "PostgreSQL"],
    image: "/projects/kenya-voices.jpg",
  },
  {
    title: "Mimoflorist",
    description: "A modern florist business website showcasing products, services, and contact information with a responsive user interface.",
    liveUrl: "https://mimofrorist.vercel.app/index.html",
    githubUrl: "https://github.com/Learninghub44/mimoflorist",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/mimoflorist.jpg",
  },
  {
    title: "Smart POS System",
    description: "A cloud-based Point of Sale solution featuring inventory management, customer management, sales tracking, receipts, and business analytics.",
    liveUrl: "https://smart-pos-web-liart.vercel.app/",
    githubUrl: "https://github.com/Learninghub44/smart-pos",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/smart-pos.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real projects I've built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20">{project.title.charAt(0)}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
