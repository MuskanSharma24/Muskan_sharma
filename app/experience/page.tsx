import { Building, Calendar, MapPin, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "SpeedTech.ai",
    location: "Pune, India",
    period: "May 2025 – Present",
    type: "Full-time",
    achievements: [
      "Spearheading the development of an AI-powered recruitment system tailored to automate candidate evaluation and matching",
      "Utilized Azure services and integrated multiple LLMs to streamline job-candidate compatibility analysis through NLP-driven prompts",
      "Engineered the backend architecture using PHP and Python, ensuring scalable API integrations and low-latency performance",
      "Developed interactive and responsive frontend modules using JavaScript for recruiter dashboards",
      "Designed and maintained the MySQL database schema to optimize candidate data storage and retrieval",
      "Collaborated closely with product and HR teams to align technological solutions with recruitment workflows",
    ],
    technologies: ["Azure", "Python", "PHP", "JavaScript", "MySQL", "NLP", "LLMs"],
  },
  {
    title: "AI Engineer",
    company: "PWC",
    location: "India",
    period: "June 2024 - March 2025",
    type: "Full-time",
    achievements: [
      "Trained Llama 3 and Mistral models for the firm's framework",
      "Researched and worked to optimize and utilize Quantum within the firm",
      "Developed a Pension Bot for the Bhopal Government using Azure LLM, leveraging a vector database to organize and retrieve government schemes efficiently",
      "Created Cybersecure solutions that identified the threats regarding prompts, codes and commands",
      "Achieved 15% boost in the system by fine tuning the Gemini model for the Cybersecure system",
      "Developed the backend for a data analysis tool using Azure API and LangGraph, integrating LLMs like GPT-4.0 for automated insights",
    ],
    technologies: [
      "LLaMA 3",
      "Mistral",
      "Azure LLM",
      "Gemini",
      "GPT-4.0",
      "LangGraph",
      "Vector DB",
      "Quantum Computing",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Ways Ahead Global",
    location: "Remote",
    period: "May 2023 - September 2023",
    type: "Internship",
    achievements: [
      "Achieved 10% growth for startups using Analytical and logical thinking skills",
      "Led a team which assisted in gathering the data for the startups in need of investments",
      "Developed an algorithm that divided the companies on the bases of their ROIs and profit rate using clustering and deep learning",
    ],
    technologies: ["Python", "Data Analysis", "Machine Learning", "Clustering", "Deep Learning"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A journey through cutting-edge AI development, full-stack engineering, and innovative solutions across
              leading technology companies.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline marker */}
                  <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black glow-cyan-strong"></div>

                  {/* Content */}
                  <div className="ml-20">
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group neon-border">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-gray-400 mb-2">
                            <div className="flex items-center space-x-2">
                              <Building className="h-4 w-4" />
                              <span className="font-medium text-cyan-400">{experience.company}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                            <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">
                              {experience.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                        <ul className="space-y-3">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-3">
                              <ChevronRight className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Core <span className="text-cyan-400">Competencies</span>
            </h2>
            <p className="text-gray-400 text-lg">Skills developed and refined through professional experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { skill: "AI/ML Development", level: 95 },
              { skill: "Full-Stack Development", level: 90 },
              { skill: "Cloud Computing", level: 88 },
              { skill: "Data Analysis", level: 85 },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgba(75, 85, 99, 0.3)" strokeWidth="8" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgb(34, 211, 238)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - item.level / 100)}`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-cyan-400">{item.level}%</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">{item.skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
