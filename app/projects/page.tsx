import Link from "next/link"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Recruitment System",
    description:
      "Spearheading the development of an AI-powered recruitment system that automates candidate evaluation and matching using advanced NLP and machine learning algorithms.",
    longDescription:
      "A comprehensive recruitment platform that leverages Azure services and multiple LLMs to streamline job-candidate compatibility analysis. The system uses NLP-driven prompts to evaluate candidates and provides intelligent matching recommendations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Azure", "Python", "PHP", "JavaScript", "MySQL", "NLP", "LLMs"],
    features: [
      "Automated candidate evaluation using AI",
      "NLP-driven compatibility analysis",
      "Scalable backend architecture",
      "Interactive recruiter dashboards",
      "Real-time candidate matching",
    ],
    status: "In Development",
    category: "AI/ML",
  },
  {
    title: "Budget Buddy",
    description:
      "AI-powered expense tracking application that enables users to digitally record, categorize, and analyze their expenses with intelligent spending predictions.",
    longDescription:
      "A full-stack financial management application that uses machine learning to predict spending trends and provide personalized financial insights. Features visual analytics dashboards and AI-driven budget recommendations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Flask", "React", "MongoDB", "Scikit-learn", "ML"],
    features: [
      "Machine Learning spending predictions",
      "Visual analytics dashboards",
      "Real-time expense categorization",
      "Personalized financial insights",
      "Budget optimization recommendations",
    ],
    status: "Completed",
    category: "Full-Stack",
    github: "#",
    demo: "#",
  },
  {
    title: "CoinPledge",
    description:
      "Web3-based crowdfunding platform utilizing blockchain technology to ensure secure, transparent, and decentralized funding with smart contract automation.",
    longDescription:
      "A decentralized crowdfunding platform built on Ethereum that eliminates intermediaries through smart contracts. Features automatic pledge execution, transparent fund management, and reduced transaction costs.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Ethereum", "React", "Node.js", "Web3.js", "Solidity", "Smart Contracts"],
    features: [
      "Smart contract-based trust model",
      "Automatic pledge execution",
      "Transparent fund management",
      "Reduced transaction costs",
      "Decentralized governance",
    ],
    status: "Completed",
    category: "Blockchain",
    github: "#",
    demo: "#",
  },
  {
    title: "DataX",
    description:
      "Advanced AI-powered data analysis tool that processes natural language queries to generate SQL queries, analysis plans, and automated insights.",
    longDescription:
      "An intelligent data analysis platform that bridges the gap between natural language and database queries. Uses AI to understand user intent and automatically generate optimized SQL queries and visualizations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["PostgreSQL", "Azure", "OpenAI GPT", "Python", "NLP", "Data Visualization"],
    features: [
      "Natural language to SQL conversion",
      "AI-driven query optimization",
      "Automated insight generation",
      "Interactive data visualizations",
      "Real-time analysis capabilities",
    ],
    status: "Completed",
    category: "AI/ML",
    github: "#",
    demo: "#",
  },
  {
    title: "Sage Matrimony",
    description:
      "Full-stack matrimony platform featuring personalized matchmaking, user authentication, and preference-based recommendations with integrated payment systems.",
    longDescription:
      "A comprehensive matrimony platform that connects people based on preferences and compatibility. Features advanced matching algorithms, subscription management, and secure payment processing.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Payment Gateway", "cPanel"],
    features: [
      "Preference-based matching",
      "User authentication system",
      "Subscription management",
      "Payment gateway integration",
      "Profile verification system",
    ],
    status: "Completed",
    category: "Full-Stack",
    github: "#",
    demo: "#",
  },
  {
    title: "Pension Bot",
    description:
      "AI-powered chatbot for the Bhopal Government that helps citizens navigate pension schemes using Azure LLM and vector database technology.",
    longDescription:
      "An intelligent government service bot that assists citizens in understanding and applying for various pension schemes. Uses vector databases for efficient information retrieval and Azure LLM for natural conversations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Azure LLM", "Vector Database", "Python", "NLP", "Government APIs"],
    features: [
      "Natural language conversations",
      "Scheme recommendation engine",
      "Document processing automation",
      "Multi-language support",
      "Government system integration",
    ],
    status: "Completed",
    category: "AI/ML",
  },
]

const categories = ["All", "AI/ML", "Full-Stack", "Blockchain"]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Innovative solutions spanning AI/ML, full-stack development, and blockchain technology. Each project
              represents a unique challenge solved with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 neon-border"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 neon-border"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">{project.title}</div>
                      <div className="text-cyan-400">{project.category}</div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-400/20 text-green-400 border border-green-400/30"
                          : "bg-yellow-400/20 text-yellow-400 border border-yellow-400/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      {project.github && (
                        <Link
                          href={project.github}
                          className="p-2 bg-gray-800/50 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all neon-border"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      )}
                      {project.demo && (
                        <Link
                          href={project.demo}
                          className="p-2 bg-gray-800/50 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all neon-border"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <ChevronRight className="h-4 w-4 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <Button
                    variant="outline"
                    className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 neon-border group"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interested in <span className="text-cyan-400">Collaborating?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold glow-cyan"
          >
            <Link href="/contact">
              Get In Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
