"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const reasons = [
    {
      number: "01",
      title: "Result-Driven Strategies That Boost Your Growth",
      description: "We build every project with a clear focus on conversions, user experience, and long-term results — not just aesthetics. Our strategies are designed to increase engagement, sales, and brand visibility.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
      accentColor: "bg-blue-600",
      features: ["ROI-Focused", "Data-Driven", "Conversion Optimized"],
    },
    {
      number: "02",
      title: "Modern, High-Performance Websites & Campaigns",
      description: "From fast-loading websites to smart marketing funnels, we use the latest technologies and industry best practices to deliver high-performance digital solutions that stand out.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      gradient: "from-purple-600 via-purple-500 to-pink-500",
      accentColor: "bg-purple-600",
      features: ["Latest Tech", "Fast Loading", "SEO Optimized"],
    },
    {
      number: "03",
      title: "Creative Designs Tailored to Your Brand Identity",
      description: "Your brand is unique — your design should be too. We create custom visuals, layouts, and brand experiences that reflect your business personality and instantly attract the right audience.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      gradient: "from-orange-600 via-orange-500 to-red-500",
      accentColor: "bg-orange-600",
      features: ["Custom Design", "Brand Identity", "Unique Visuals"],
    },
    {
      number: "04",
      title: "Transparent Process & Clear Communication",
      description: "No confusion, no delays. You'll know exactly what we're working on, what's coming next, and how your project is progressing. We value clarity, honesty, and smooth collaboration.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      gradient: "from-green-600 via-green-500 to-emerald-500",
      accentColor: "bg-green-600",
      features: ["Clear Updates", "No Surprises", "Full Transparency"],
    },
    {
      number: "05",
      title: "End-to-End Support From Idea to Launch",
      description: "We don't just build — we support, refine, and grow your digital presence. From strategy to design to final launch, you get complete assistance to ensure long-term success.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      gradient: "from-indigo-600 via-indigo-500 to-violet-500",
      accentColor: "bg-indigo-600",
      features: ["Full Support", "Launch Ready", "Long-term Growth"],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (rect.top <= 0 && rect.bottom > windowHeight) {
        const scrolledIntoSection = Math.abs(rect.top)
        const maxScroll = rect.height - windowHeight
        const progress = scrolledIntoSection / maxScroll
        setScrollProgress(Math.max(0, Math.min(1, progress)))
      } else if (rect.top > 0) {
        setScrollProgress(0)
      } else {
        setScrollProgress(1)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const cardProgress = scrollProgress * reasons.length

  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50" style={{ isolation: 'isolate' }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose <span className="gradient-text">Digitrix</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Partnership with a team that truly cares about your success. We don't just deliver projects, we deliver results.
          </p>
        </div>
      </div>

      {/* Stack Scrolling Section */}
      <div
        ref={sectionRef}
        style={{
          height: `${reasons.length * 100}vh`,
          position: 'relative',
          background: 'transparent',
          contain: 'paint',
        }}
      >
        <div 
          style={{
            position: 'sticky',
            top: '0px',
            left: '0px',
            right: '0px',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            zIndex: 10,
            willChange: 'transform',
          }}
        >
          <div className="max-w-6xl w-full mx-auto px-4" style={{ perspective: '1500px' }}>
            {reasons.map((reason, index) => {
              const distanceFromActive = index - cardProgress
              
              let translateY = 0
              let scale = 1
              let opacity = 1
              let rotateX = 0
              
              if (distanceFromActive < -0.5) {
                translateY = -200
                scale = 0.85
                opacity = 0
                rotateX = 10
              } else if (distanceFromActive > 0.5) {
                translateY = distanceFromActive * 40
                scale = 1 - (distanceFromActive * 0.08)
                opacity = Math.max(0.2, 1 - (distanceFromActive * 0.2))
                rotateX = -distanceFromActive * 4
              } else {
                translateY = distanceFromActive * 40
                scale = 1 - (Math.abs(distanceFromActive) * 0.08)
                opacity = 1
                rotateX = -distanceFromActive * 4
              }

              const isActive = Math.abs(distanceFromActive) < 0.5

              return (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`,
                    opacity: opacity,
                    zIndex: reasons.length - index,
                    transformStyle: 'preserve-3d',
                    transition: 'all 0.4s ease-out',
                    width: '100%',
                    maxWidth: '72rem',
                  }}
                >
                  {/* Card */}
                  <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Left - Image Section */}
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        {/* Image */}
                        <img
                          src={reason.image}
                          alt={reason.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} mix-blend-multiply opacity-80`}></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                          {/* Number Badge */}
                          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-4`}>
                            <span className="text-3xl font-black text-white">{reason.number}</span>
                          </div>
                          
                          {/* Features */}
                          <div className="flex flex-wrap gap-2">
                            {reason.features.map((feature, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right - Content Section */}
                      <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                          {reason.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                          {reason.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-semibold text-gray-700">Progress</span>
                            <span className="text-gray-500">{index + 1} / {reasons.length}</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${reason.gradient} transition-all duration-500`}
                              style={{
                                width: isActive ? '100%' : '0%',
                              }}
                            />
                          </div>
                        </div>

                        {/* CTA Button /}
                        <button className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl ${reason.accentColor} text-white font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 w-fit`}>
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button> */}

                        {/* Decorative Element */}
                        <div className={`absolute top-8 right-8 w-24 h-24 rounded-full bg-gradient-to-br ${reason.gradient} opacity-10 blur-2xl`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200">
          <div className="flex flex-col gap-2">
            {reasons.map((_, index) => {
              const isActive = Math.floor(cardProgress) === index
              return (
                <div
                  key={index}
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 w-8 h-2"
                      : "bg-gray-300 w-2 h-2"
                  }`}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom CTA /}
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Decorative circles *}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to Experience the Digitrix Difference?
            </h3>
            <p className="text-lg md:text-xl text-blue-50 mb-8">
              Let's transform your digital presence with strategies that actually work.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 text-base font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span>Start Your Project Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>*/}
    </div>
  )
}