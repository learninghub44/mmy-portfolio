"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowUpRight, Star, GitFork } from "lucide-react"
import Image from "next/image"

interface GitHubProfile {
  login: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
  html_url: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
}

export function GitHub() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const profileRes = await fetch("https://api.github.com/users/Learninghub44")
        const profileData = await profileRes.json()
        setProfile(profileData)

        const reposRes = await fetch("https://api.github.com/users/Learninghub44/repos?sort=updated&per_page=6")
        const reposData = await reposRes.json()
        setRepos(Array.isArray(reposData) ? reposData : [])
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <section id="github" className="py-20 lg:py-28 bg-paper-soft border-b border-line">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-line pb-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-rust">
            Archive &middot; 06
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ink mt-3">
            From the Repository
          </h2>
        </motion.div>

        {loading ? (
          <div className="animate-pulse h-32 bg-line/40" />
        ) : (
          <>
            {profile && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 border border-line bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <Image
                  src={profile.avatar_url}
                  alt={profile.login}
                  width={80}
                  height={80}
                  className="w-20 h-20 border border-line"
                  unoptimized
                />
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {profile.login}
                  </h3>
                  {profile.bio && (
                    <p className="text-ink-soft mt-1">{profile.bio}</p>
                  )}
                  <div className="flex gap-6 mt-3 font-mono text-xs uppercase tracking-wider text-ink-soft">
                    <span><strong className="text-ink">{profile.public_repos}</strong> repositories</span>
                    <span><strong className="text-ink">{profile.followers}</strong> followers</span>
                  </div>
                </div>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-rust hover:underline underline-offset-4"
                >
                  View profile <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            )}

            {repos.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
                {repos.map((repo, index) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group bg-card p-6 hover:bg-paper transition-colors"
                  >
                    <h4 className="font-display text-lg font-semibold text-ink mb-2 flex items-center gap-1">
                      {repo.name}
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-rust transition-opacity" />
                    </h4>
                    {repo.description && (
                      <p className="text-sm text-ink-soft mb-4 line-clamp-2">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 font-mono text-xs text-ink-soft">
                      {repo.language && <span>{repo.language}</span>}
                      <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" />{repo.stargazers_count}</span>
                      <span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" />{repo.forks_count}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
