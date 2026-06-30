import dynamic from "next/dynamic"
import { ScrollProgress } from "@/components/scroll-progress"
import { Masthead } from "@/components/masthead"

const Hero = dynamic(() => import("@/components/hero").then(mod => ({ default: mod.Hero })))
const About = dynamic(() => import("@/components/about").then(mod => ({ default: mod.About })))
const Skills = dynamic(() => import("@/components/skills").then(mod => ({ default: mod.Skills })))
const Services = dynamic(() => import("@/components/services").then(mod => ({ default: mod.Services })))
const Projects = dynamic(() => import("@/components/projects").then(mod => ({ default: mod.Projects })))
const GitHub = dynamic(() => import("@/components/github").then(mod => ({ default: mod.GitHub })))
const Experience = dynamic(() => import("@/components/experience").then(mod => ({ default: mod.Experience })))
const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })))
const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })))

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Masthead />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <GitHub />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
