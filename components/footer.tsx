import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black/50 backdrop-blur-md border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Muskan<span className="text-cyan-400">.</span>dev
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              AI Engineer & Full-Stack Developer crafting intelligent solutions for tomorrow's challenges. Specializing
              in machine learning, cloud computing, and scalable web applications.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/muskanshar"
                target="_blank"
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 neon-border"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muskansharma02"
                target="_blank"
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 neon-border"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:sharmamuskanofficial@gmail.com"
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 neon-border"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">sharmamuskanofficial@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Muskan Sharma. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">Built with Next.js & TypeScript</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
