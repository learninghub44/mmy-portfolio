"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ExternalLink, Star, GitFork } from "lucide-react"

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
        setRepos(reposData)
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  if (loading) {
    return (
      <section id="github" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-4" />
            <div className="animate-pulse h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="github" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            GitHub Profile
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My open source contributions
          </p>
        </motion.div>

        {profile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={profile.avatar_url}
                  alt={profile.login}
                  className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 shadow-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                    {profile.login}
                  </h3>
                  {profile.bio && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {profile.bio}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="font-bold text-gray-900 dark:text-white">{profile.public_repos}</span>
                      <span>Repositories</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="font-bold text-gray-900 dark:text-white">{profile.followers}</span>
                      <span>Followers</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span className="font-bold text-gray-900 dark:text-white">{profile.following}</span>
                      <span>Following</span>
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-medium hover:shadow-lg transition-shadow"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Profile
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {repo.name}
                </h4>
                {repo.description && (
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                    {repo.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.language && (
                    <span className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Repository
                </motion.a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
