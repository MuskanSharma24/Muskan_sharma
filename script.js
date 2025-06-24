// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
})

document.addEventListener("DOMContentLoaded", () => {
  // Create particles
  createParticles()

  // Initialize typing effect
  initTypingEffect()

  // Initialize mode toggle
  initModeToggle()

  // Initialize skill animations
  initSkillAnimations()

  // Initialize scroll animations
  initScrollAnimations()

  // Initialize interactive effects
  initInteractiveEffects()

  const toggleButtons = document.querySelectorAll(".toggle-btn")
  const contentSections = document.querySelectorAll(".content-section")

  // Handle mode toggle
  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const mode = this.getAttribute("data-mode")

      // Remove active class from all buttons
      toggleButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Hide all content sections
      contentSections.forEach((section) => section.classList.remove("active"))

      // Show selected content section
      const targetSection = document.getElementById(mode + "-mode")
      if (targetSection) {
        targetSection.classList.add("active")
      }
    })
  })

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add animation to cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all cards
  document.querySelectorAll(".card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })

  // Add typing effect to the name (optional enhancement)
  const nameElement = document.querySelector(".name")
  if (nameElement) {
    const originalText = nameElement.textContent
    nameElement.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < originalText.length) {
        nameElement.textContent += originalText.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500)
  }

  // Add hover effects to project cards
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Add click effect to skill tags
  document.querySelectorAll(".skill-tag, .tech-tag").forEach((tag) => {
    tag.addEventListener("click", function () {
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  })
})

// Add some interactive features
function addInteractiveFeatures() {
  // Add a subtle parallax effect to the background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallax = document.body
    const speed = scrolled * 0.5
    parallax.style.backgroundPosition = `center ${speed}px`
  })

  // Add a progress indicator for reading
  const progressBar = document.createElement("div")
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 1000;
        transition: width 0.3s ease;
    `
  document.body.appendChild(progressBar)

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.body.offsetHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    progressBar.style.width = scrollPercent + "%"
  })
}

// Initialize interactive features
addInteractiveFeatures()

// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById("particles")
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 15 + "s"
    particle.style.animationDuration = Math.random() * 10 + 10 + "s"
    particlesContainer.appendChild(particle)
  }
}

// Typing effect for title
function initTypingEffect() {
  const titles = [
    "AI Engineer & Full-Stack Developer",
    "Machine Learning Enthusiast",
    "Cloud Computing Expert",
    "Problem Solver & Innovator",
  ]

  const typingElement = document.getElementById("typing-text")
  let titleIndex = 0
  let charIndex = 0
  let isDeleting = false

  function typeEffect() {
    const currentTitle = titles[titleIndex]

    if (isDeleting) {
      typingElement.textContent = currentTitle.substring(0, charIndex - 1)
      charIndex--
    } else {
      typingElement.textContent = currentTitle.substring(0, charIndex + 1)
      charIndex++
    }

    let typeSpeed = isDeleting ? 50 : 100

    if (!isDeleting && charIndex === currentTitle.length) {
      typeSpeed = 2000
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      titleIndex = (titleIndex + 1) % titles.length
      typeSpeed = 500
    }

    setTimeout(typeEffect, typeSpeed)
  }

  typeEffect()
}

// Mode toggle functionality
function initModeToggle() {
  const modeButtons = document.querySelectorAll(".mode-btn")
  const experienceContent = document.getElementById("experience-content")
  const projectsContent = document.getElementById("projects-content")
  const toggleBackground = document.querySelector(".toggle-background")

  modeButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const mode = this.getAttribute("data-mode")

      // Remove active class from all buttons
      modeButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Move toggle background
      if (mode === "projects") {
        toggleBackground.style.transform = "translateX(100%)"
      } else {
        toggleBackground.style.transform = "translateX(0)"
      }

      // Show/hide content with animation
      if (mode === "experience") {
        projectsContent.classList.add("hidden")
        setTimeout(() => {
          experienceContent.classList.remove("hidden")
        }, 150)
      } else if (mode === "projects") {
        experienceContent.classList.add("hidden")
        setTimeout(() => {
          projectsContent.classList.remove("hidden")
        }, 150)
      }

      // Add click animation
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  })
}

// Skill animations
function initSkillAnimations() {
  const skillTags = document.querySelectorAll(".skill-tag")

  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
      const skill = this.getAttribute("data-skill")
      if (skill) {
        // Create skill level indicator
        const indicator = document.createElement("div")
        indicator.className = "skill-indicator"
        indicator.textContent = skill + "%"
        indicator.style.cssText = `
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 0.8rem;
          white-space: nowrap;
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.3s ease;
        `

        this.style.position = "relative"
        this.appendChild(indicator)

        setTimeout(() => {
          indicator.style.opacity = "1"
        }, 10)
      }
    })

    tag.addEventListener("mouseleave", function () {
      const indicator = this.querySelector(".skill-indicator")
      if (indicator) {
        indicator.style.opacity = "0"
        setTimeout(() => {
          if (indicator.parentNode) {
            indicator.parentNode.removeChild(indicator)
          }
        }, 300)
      }
    })
  })
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loaded")

        // Animate counters
        if (entry.target.classList.contains("stat-number")) {
          animateCounter(entry.target)
        }
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".section, .stat-number").forEach((el) => {
    el.classList.add("loading")
    observer.observe(el)
  })
}

// Counter animation
function animateCounter(element) {
  const target = Number.parseInt(element.textContent)
  const duration = 2000
  const step = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.textContent = Math.floor(current) + (element.textContent.includes("+") ? "+" : "")
  }, 16)
}

// Interactive effects
function initInteractiveEffects() {
  // Parallax effect for floating shapes
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const shapes = document.querySelectorAll(".shape")

    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.1
      shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`
    })
  })

  // Mouse move effect for cards
  document.querySelectorAll(".project-card, .job-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
    })
  })

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add ripple effect to buttons
  document.querySelectorAll(".mode-btn, .social-link, .project-link").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `

      this.style.position = "relative"
      this.style.overflow = "hidden"
      this.appendChild(ripple)

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple)
        }
      }, 600)
    })
  })
}

// Add ripple animation keyframes
const style = document.createElement("style")
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)

// Initialize everything when page loads
window.addEventListener("load", () => {
  document.body.classList.add("loaded")

  // Stagger animation for elements
  const elements = document.querySelectorAll(".section")
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = "1"
      el.style.transform = "translateY(0)"
    }, index * 100)
  })
})

// Performance optimization
let ticking = false

function updateAnimations() {
  // Update any continuous animations here
  ticking = false
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateAnimations)
    ticking = true
  }
})
