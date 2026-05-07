"use client"

import { useState, useEffect, useRef } from "react"

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "development", label: "Development" },
    { id: "marketing", label: "Marketing" },
    { id: "templates", label: "Templates" },
  ]

  const projects = [
    {
      id: 1,
      title: "CodeEdge Academy – Modern Learning Platform",
      category: "development",
      description: "Responsive education website designed for CodeEdge Academy with optimized pages and a user-friendly learning interface.",
      image: "/snapshot/codedge.png",
      liveUrl: "https://www.codedgeacademy.com/",
      tags: ["React", "Node.js", "Tailwindcss"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 2,
      title: "EngageHub – Empowering Ambitions",
      category: "development",
      description: "AI-powered customer-journey platform that automates cross-channel communication for brands, delivering scalable, real-time engagement and seamless user experience.",
      image: "/snapshot/engagehub.png",
      liveUrl: "https://www.engagehub.me/",
      tags: ["React", "Node.js", "Tailwindcss"],
      gradient: "from-cyan-500 to-blue-600",
    },
    
    {
      id: 3,
      title: "Portfolio",
      category: "templates",
      description: "Stylish personal portfolio site with clean design, responsive layout and smooth navigation — perfect for showcasing creative work and professional identity.",
      image: "/snapshot/omisabansal.png",
      liveUrl: "https://www.omisaabansal.in/",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 4,
      title: "Portfolio",
      category: "Templates",
      description: "Professional personal website built with a clean, modern design to showcase services, portfolio highlights, and seamless user navigation.",
      image: "/snapshot/amritraj.png",
      liveUrl: "https://www.amritrajlamba.com/",
      tags: ["React Native", "Firebase", "Security"],
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: 5,
      title: "India Conference",
      category: "development",
      description: "Interactive conference website with modern UI, responsive design and seamless navigation — built for smooth user experience across devices.",
      image: "/snapshot/indiaconf.png",
      liveUrl: "https://indea-conf.vercel.app/",
      tags: ["HTML", "CSS", "JavaScript"],
      gradient: "from-rose-500 to-pink-600",
    },
    {
      id: 6,
      title: "Portfolio website",
      category: "development",
      description: "Modern personal portfolio website showcasing skills, projects and professional identity clean design, responsive layout and easy navigation for all devices",
      image: "/snapshot/vivan.png",
      liveUrl: "https://www.vivyankumar.com/",
      tags: ["React", "Typescript", "NextJs"],
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      id: 7,
      title: "AJ Enterprises",
      category: "development",
      description: "Professional business website with sleek design, responsive layout, and intuitive navigation — built to represent brand identity and services effectively",
      image: "/snapshot/ajenterprises.png",
      liveUrl: "https://www.aj-entp.com/",
      tags: ["React", "Typescript", "NextJs"],
      gradient: "from-teal-500 to-cyan-600",
    },
   
  ]

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  // Auto play functionality
  useEffect(() => {
    if (isAutoPlay) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)
      }, 3500)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlay, filteredProjects.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredProjects.length
    goToSlide(newIndex)
  }

  const getCardPosition = (index: number) => {
    const totalCards = filteredProjects.length
    let position = index - currentIndex
    
    if (position < -Math.floor(totalCards / 2)) {
      position += totalCards
    } else if (position > Math.floor(totalCards / 2)) {
      position -= totalCards
    }
    
    return position
  }

  return (
    <section className="relative bg-background py-12 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16">
        <div className="text-center">
          <span className="text-xs md:text-sm font-semibold text-[#38728E] tracking-[0.2em] uppercase mb-3 md:mb-4 block">
            OUR WORK
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Projects That Drive Results
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12">
            Explore our portfolio of transformative projects across development,
            marketing, and design
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                  setCurrentIndex(0)
                }}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "btn-secondary scale-105"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3D Carousel */}
      <div className="relative h-[500px] md:h-[650px]" style={{ perspective: "2000px" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {filteredProjects.map((project, index) => {
            const position = getCardPosition(index)
            const isCenter = position === 0
            const isHovered = hoveredCard === index
            
            // Calculate transformations based on position
            const angle = position * 45
            const translateZ = isCenter ? 0 : -300
            const translateX = position * 400
            const scale = isCenter ? 1 : 0.7
            const opacity = Math.abs(position) > 2 ? 0 : isCenter ? 1 : 0.5
            const zIndex = isCenter ? 50 : 10 - Math.abs(position)

            return (
              <div
                key={project.id}
                className="absolute transition-all duration-700 ease-out cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${angle}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  width: "380px",
                  transformStyle: "preserve-3d",
                }}
                onClick={() => !isCenter && goToSlide(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className="relative w-full h-[450px] md:h-[550px] rounded-2xl shadow-2xl overflow-hidden bg-muted/50">
                  {/* Image Section */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-500`}
                    style={{
                      transform: isCenter && isHovered ? "translateY(-100%)" : "translateY(0)",
                    }}
                  >
                    <img
                      src={project.image}
                      className="w-full h-full object-cover"
                      alt={project.title}
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                    
                    {/* Fallback icon */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="text-8xl opacity-20">
                        {project.category === 'development' && '💻'}
                        {project.category === 'marketing' && '📈'}
                        {project.category === 'templates' && '🎨'}
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-semibold rounded-full shadow-lg">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>

                    {/* Title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Section (slides up on hover) */}
                  <div
                    className="absolute inset-0 bg-primary text-white p-6 flex flex-col justify-center transition-all duration-500"
                    style={{
                      transform: isCenter && isHovered ? "translateY(0)" : "translateY(100%)",
                    }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-base md:text-lg text-white mb-6 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-base text-center font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>View Live</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      <button 
                        className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-100 text-gray-900 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-100 text-gray-900 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation & Controls */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="flex flex-col items-center gap-6">
          {/* Dots */}
          <div className="flex gap-2">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-8 h-3 bg-blue-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Auto Play Toggle /}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-300"
          >
            {isAutoPlay ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                Pause Auto Play
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Start Auto Play
              </>
            )}
          </button>

          {/* Project Counter */}
          <div className="text-center text-sm font-semibold text-gray-600">
            Project {currentIndex + 1} of {filteredProjects.length}
          </div>
        </div>
      </div>

      {/* CTA /}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 text-center mt-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
          Ready to start your project?
        </h3>
        <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
          Let's create something amazing together
        </p>
        <button className="px-6 md:px-8 py-3 md:py-4 btn-primary rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/30">
          Get in Touch
        </button>
      </div> */}
    </section>
  )
}