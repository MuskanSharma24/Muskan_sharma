import { Brain, Code2, Cloud, Database, Zap, Award } from "lucide-react"

const skills = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    items: ["LLaMA 3", "OpenAI GPT API", "Scikit-learn", "Random Forest", "Deep Learning", "NLP"],
  },
  {
    category: "Programming Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "TypeScript", "SQL", "PHP"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["Azure AI", "LangGraph", "Copilot Studio", "Cloud Computing", "Docker"],
  },
  {
    category: "Databases & Tools",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "SQLite", "Git", "REST API"],
  },
  {
    category: "Frameworks",
    icon: Zap,
    items: ["React", "Next.js", "Flask", "Node.js", "Express"],
  },
]

const achievements = [
  {
    title: "Machine Learning Workshop",
    organization: "Industry Certification",
    icon: Brain,
  },
  {
    title: "Cybersecurity Badge",
    organization: "CISCO",
    icon: Award,
  },
  {
    title: "Full Stack Web Development",
    organization: "IBM",
    icon: Code2,
  },
  {
    title: "Microsoft Azure Certification",
    organization: "Microsoft",
    icon: Cloud,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about creating intelligent solutions that bridge the gap between cutting-edge AI technology and
              real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Professional <span className="text-cyan-400">Summary</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Computer Science undergraduate with robust experience in AI, Machine Learning, and Full-Stack
                  Development. Successfully built and deployed intelligent systems using LLaMA 3, Azure LLM, and OpenAI
                  APIs.
                </p>
                <p>
                  Adept at building real-world AI solutions with cloud integration, data analytics, and scalable web
                  applications. Passionate about leveraging technology to solve complex problems and drive innovation.
                </p>
                <p>
                  Currently working as a Software Engineer at SpeedTech.ai, where I lead the development of AI-powered
                  recruitment systems and collaborate with cross-functional teams to deliver cutting-edge solutions.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-400/30 neon-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                    <div className="text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">15%</div>
                    <div className="text-gray-400">Performance Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">800+</div>
                    <div className="text-gray-400">Community Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg">Expertise across the full spectrum of modern technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group neon-border"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-cyan-400/10 rounded-lg mr-4 group-hover:bg-cyan-400/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-cyan-400">Education</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 neon-border">
                  <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Engineering - Computer Science</h3>
                  <p className="text-cyan-400 mb-2">Chandigarh University</p>
                  <p className="text-gray-400">Expected 2025</p>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 neon-border">
                  <h3 className="text-xl font-semibold text-white mb-2">12th Grade</h3>
                  <p className="text-cyan-400 mb-2">Government Model Sr. Sec. School</p>
                  <p className="text-gray-400">2020 - 2021</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-cyan-400">Certifications</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group neon-border text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-400/10 rounded-lg mb-4 group-hover:bg-cyan-400/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{achievement.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership & <span className="text-cyan-400">Community</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 neon-border">
              <h3 className="text-2xl font-bold text-white mb-4">
                Vice-Chair - <span className="text-cyan-400">IEEE WIE</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading over 60+ students, industry mentors and around 800+ members. Actively involved in facilitating
                online events, career conversations, and more alongside other admins and a team of volunteer moderators.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">800+</div>
                  <div className="text-gray-400 text-sm">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">60+</div>
                  <div className="text-gray-400 text-sm">Students</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 neon-border">
              <h3 className="text-2xl font-bold text-white mb-4">
                Co-president - <span className="text-cyan-400">Geeks for Geeks CU</span>
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Assisted students create unique projects, and guided them on how to improve their resume and study
                varied courses. Provided them with a platform to interact with corporate experts and colleagues.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">100+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">50+</div>
                  <div className="text-gray-400 text-sm">Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
