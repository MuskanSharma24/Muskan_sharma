"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code, Cpu, Zap, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const titles = [
  "AI Engineer",
  "Full-Stack Developer",
  "Machine Learning Expert",
  "Cloud Computing Specialist",
  "Problem Solver",
]

export default function HomePage() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const title = titles[currentTitle]

    if (!isDeleting && displayText === title) {
      setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    } else {
      setTimeout(() => {
        setDisplayText((prev) => (isDeleting ? prev.slice(0, -1) : title.slice(0, prev.length + 1)))
      }, typeSpeed)
    }
  }, [displayText, isDeleting, currentTitle])

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Holographic overlay */}
        <div className="absolute inset-0 holographic opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                <span className="block">Hello, I'm</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-glow">
                  Muskan Sharma
                </span>
              </h1>

              <div className="h-16 flex items-center justify-center">
                <p className="text-2xl md:text-3xl text-gray-300 font-mono">
                  {"<"}
                  <span className="text-cyan-400">{displayText}</span>
                  <span className="animate-pulse">|</span>
                  {" />"}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting intelligent solutions with cutting-edge AI and full-stack development. Specializing in machine
              learning, cloud computing, and scalable applications that push the boundaries of what's possible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 glow-cyan group"
              >
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 rounded-lg font-semibold transition-all duration-200 neon-border"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400/10 rounded-lg mb-4 group-hover:bg-cyan-400/20 transition-colors neon-border">
                  <Code className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400/10 rounded-lg mb-4 group-hover:bg-cyan-400/20 transition-colors neon-border">
                  <Cpu className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">3+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400/10 rounded-lg mb-4 group-hover:bg-cyan-400/20 transition-colors neon-border">
                  <Zap className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">15%</h3>
                <p className="text-gray-400">Performance Boost</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-cyan-400" />
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A glimpse into my latest work in AI, machine learning, and full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Recruitment System",
                description: "Automated candidate evaluation using Azure LLMs and NLP",
                tech: ["Azure", "Python", "LLaMA 3"],
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Budget Buddy",
                description: "AI-powered expense tracking with ML predictions",
                tech: ["React", "Python", "ML"],
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "CoinPledge",
                description: "Web3 crowdfunding platform with smart contracts",
                tech: ["Ethereum", "React", "Web3.js"],
                gradient: "from-green-500 to-teal-500",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 neon-border"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 neon-border"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
