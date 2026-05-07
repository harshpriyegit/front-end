"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { PopupForm } from "./contactform"

export function PremiumServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Web Development",
      description: "Scalable, high-performance websites built with modern technologies and best practices that deliver exceptional user experiences.",
      href: "/web-development",
      gradient: "from-[#4B6BFB] via-[#00d4ff] to-[#4B6BFB]",
      thumbnail: "/thumbnail/webdevthumbnail.jpg",
      stats: "50+ Projects",
      tag: "Development",
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive growth, engagement, and maximize your ROI through data-driven insights and creative execution.",
      href: "/digital-marketing",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      thumbnail: "/thumbnail/marketingthumbnail.jpg",
      stats: "200% Growth",
      tag: "Marketing",
    },
    {
      title: "Production",
      description: "Professional content creation and video production services that captivate audiences and tell compelling brand stories.",
      href: "/production",
      gradient: "from-amber-500 via-orange-500 to-amber-600",
      thumbnail: "/thumbnail/productionthumbnail.jpg",
      stats: "100+ Videos",
      tag: "Media",
    },
    {
      title: "Brand Design",
      description: "Comprehensive branding solutions that reflect your vision and resonate with customers through powerful visual identity.",
      href: "/brand-design",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      thumbnail: "/thumbnail/brandthumbnail.jpg",
      stats: "75+ Brands",
      tag: "Design",
    },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-muted/10 to-background">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(75,107,251,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(75,107,251,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] animate-pulse-slow-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-2 animate-slide-down">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-primary text-sm font-medium">What We Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl gradient-text mb-4 animate-fade-in-up">
            Our Premium Services
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up-delayed">
            Comprehensive solutions designed to elevate your digital presence and drive measurable results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {services.map((service, idx) => {
            const isHovered = hoveredIndex === idx

            return (
              <Link
                key={idx}
                href={service.href}
                className="group relative block"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="relative h-full overflow-hidden rounded-2xl bg-muted/50 border border-border transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ">
                  
                  {/* Cover Image */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    {/* Placeholder gradient - replace with actual image */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 transition-opacity duration-500 group-hover:opacity-40`}></div>
                    
                    {/* Uncomment when you have real images */}
                     <Image
                      src={service.thumbnail}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    /> 
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Service Number - Decorative /}
                    <div className="absolute top-6 left-6 text-8xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
                      0{idx + 1}
                    </div>

                    {/* Tag badge */}
                    <div className="absolute top-6 left-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-colors duration-300">
                      <span className="text-black text-xs font-semibold tracking-wide">{service.tag}</span>
                    </div>

                    {/* Title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      
                      
                      {/* Animated underline */}
                      <div className="h-1 w-0 bg-gradient-to-r from-white via-white/80 to-transparent group-hover:w-24 transition-all duration-500 rounded-full"></div>
                    </div>

                    {/* Stats badge - appears on hover */}
                    <div className={`absolute bottom-6 right-6 px-4 py-2 rounded-full bg-primary backdrop-blur-md border border-primary/20 shadow-lg transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <span className="text-white text-sm font-bold">{service.stats}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} 
                    opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                    <h3 className="text-3xl md:text-4xl font-bold section-subtitle mb-2 transform transition-transform duration-500 group-hover:translate-x-2">
                        {service.title}
                      </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 transition-colors duration-300 group-hover:text-foreground">
                      {service.description}
                    </p>

                    {/* CTA with animated elements */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                        <span className="relative ">
                          Explore Service
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
                      </span>
                      
                      {/* Animated circle */}
                      <div className="relative w-10 h-10 rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors duration-300">
                        <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Corner glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-3xl`}></div>
                  </div>
                </div>

                {/* Floating particle effects */}
                {isHovered && (
                  <>
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/50 animate-float-particle-1"></div>
                    <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-secondary/50 animate-float-particle-2"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-1 h-1 rounded-full bg-primary/50 animate-float-particle-3"></div>
                  </>
                )}
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <PopupForm
        trigger={
        <div className="text-center mt-16 animate-fade-in-up-slower">
          <p className="text-muted-foreground mb-4">Need a custom solution tailored to your business?</p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-primary hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 group"
          >
            Let's Discuss Your Project
            <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>
        }/>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.08); }
        }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up-slower {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float-particle-1 {
          0% { opacity: 0; transform: translate(0, 0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translate(-30px, -40px); }
        }

        @keyframes float-particle-2 {
          0% { opacity: 0; transform: translate(0, 0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translate(25px, -35px); }
        }

        @keyframes float-particle-3 {
          0% { opacity: 0; transform: translate(0, 0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translate(-15px, -45px); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 8s ease-in-out infinite;
        }

        .animate-slide-down {
          animation: slide-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-slower {
          animation: fade-in-up-slower 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
          opacity: 0;
        }

        .animate-float-particle-1 {
          animation: float-particle-1 2s ease-out infinite;
        }

        .animate-float-particle-2 {
          animation: float-particle-2 2.5s ease-out infinite;
          animation-delay: 0.3s;
        }

        .animate-float-particle-3 {
          animation: float-particle-3 2.2s ease-out infinite;
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  )
}