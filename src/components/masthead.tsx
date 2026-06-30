"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

const sections = [
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "The Stack" },
  { href: "#services", label: "Departments" },
  { href: "#projects", label: "Features" },
  { href: "#experience", label: "Field Notes" },
  { href: "#contact", label: "Letters" },
]

function todayIssue() {
  return new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

export function Masthead() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration guard, standard SSR-safe pattern
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-line" : "bg-paper border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="font-mono text-xs tracking-[0.2em] uppercase text-ink-soft">
            Vol. I — {mounted ? todayIssue() : ""}
          </a>

          <a href="#top" className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink">
            Chris Odhiambo
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-5 font-mono text-xs uppercase tracking-wider text-ink-soft">
              {sections.map((s) => (
                <a key={s.href} href={s.href} className="hover:text-rust transition-colors">
                  {s.label}
                </a>
              ))}
            </nav>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 border border-line rounded-full hover:border-rust hover:text-rust transition-colors"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 flex flex-col gap-4 border-t border-line pt-4">
            {sections.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-ink-soft hover:text-rust transition-colors"
              >
                {s.label}
              </a>
            ))}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="self-start flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-ink-soft hover:text-rust transition-colors"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {theme === "dark" ? "Light edition" : "Night edition"}
              </button>
            )}
          </div>
        )}
      </div>
      <div className="h-[3px] w-full bg-rust" />
    </header>
  )
}
