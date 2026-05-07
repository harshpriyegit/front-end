"use client"

import Link from "next/link"
import { ArrowRight, Zap, Shield, Code } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { PopupForm } from "@/components/sections/contactform"

export function HeroBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Node network particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }> = []

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(75, 107, 251, 0.6)'
        ctx.fill()

        // Draw connections
        particles.forEach((p2, j) => {
          if (i === j) return
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(75, 107, 251, ${0.15 * (1 - distance / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#0d1117] to-[#010409]"
      onMouseMove={handleMouseMove}
    >
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(75,107,251,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(75,107,251,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent)]"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4B6BFB] rounded-full blur-[150px] opacity-20 animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00d4ff] rounded-full blur-[140px] opacity-15 animate-pulse-glow-delayed"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="z-10 space-y-8">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4B6BFB]/10 border border-[#4B6BFB]/30 backdrop-blur-sm animate-slide-in-left">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B6BFB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4B6BFB]"></span>
              </div>
              <span className="text-[#4B6BFB] text-sm font-medium">Building Digital Excellence</span>
            </div>

            {/* Main heading with gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-in-left-delayed">
              <span className="text-white">Build Websites .</span>
              <br/>
              <span className="bg-gradient-to-r from-[#4B6BFB] via-[#00d4ff] to-[#4B6BFB] bg-clip-text text-transparent animate-gradient-shift">
                That Convert
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed animate-fade-in-slow">
              Bring your brand online with fast, secure, and scalable websites tailored for your business. From landing pages to full-scale platforms we build experiences that drive results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-slower ">
              
              <PopupForm
              trigger={
              <Link
                href="/"
                className="group relative px-8 py-4 rounded-xl  btn-secondary  overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(75,107,251,0.5)] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project 
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#4B6BFB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              }/>

              <Link
                href="/case-studies"
                className="group px-8 py-4 rounded-xl border-2 border-[#4B6BFB]/30 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-[#4B6BFB]/10 hover:border-[#4B6BFB] hover:shadow-[0_0_20px_rgba(75,107,251,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                View Our Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-slowest">
              <div className="group relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#4B6BFB]/50 transition-all duration-300 cursor-default">
                <p className="text-3xl font-bold text-white mb-1">500+</p>
                <p className="text-sm text-gray-400">Projects</p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4B6BFB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#4B6BFB]/50 transition-all duration-300 cursor-default">
                <p className="text-3xl font-bold text-white mb-1">150+</p>
                <p className="text-sm text-gray-400">Clients</p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4B6BFB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#4B6BFB]/50 transition-all duration-300 cursor-default">
                <p className="text-3xl font-bold text-white mb-1">10+</p>
                <p className="text-sm text-gray-400">Years</p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#4B6BFB]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Right 3D Graphics */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            
            {/* Particle network canvas */}
            <canvas 
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />

            {/* Floating cards with 3D effect /}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              
              {/* Main card /}
              <div 
                className="absolute top-1/2 left-1/2 w-80 h-96 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_80px_rgba(75,107,251,0.3)] animate-float-3d"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${mousePos.x * 0.02}deg) rotateX(${-mousePos.y * 0.02}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4B6BFB]/20 to-transparent opacity-50"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4B6BFB] to-[#00d4ff] flex items-center justify-center mb-6 shadow-lg shadow-[#4B6BFB]/50 animate-pulse-glow">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Premium Solutions</h3>
                  <p className="text-gray-400 text-sm">Cutting-edge technology meets exceptional design</p>
                </div>
              </div>

              {/* Floating icon card 1 /}
              <div 
                className="absolute top-20 right-10 w-24 h-24 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center animate-float-delayed"
                style={{
                  transform: `translateY(${Math.sin(Date.now() * 0.001) * 10}px)`
                }}
              >
                <Shield className="text-[#4B6BFB]" size={32} />
              </div>

              {/* Floating icon card 2 /}
              <div 
                className="absolute bottom-32 left-10 w-28 h-28 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center animate-float-slower"
                style={{
                  transform: `translateY(${Math.sin(Date.now() * 0.0015) * 15}px)`
                }}
              >
                <Code className="text-[#00d4ff]" size={36} />
              </div>

              {/* Orbiting particles /}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-[#4B6BFB] shadow-lg shadow-[#4B6BFB]/50 animate-orbit"></div>
              <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#00d4ff] shadow-lg shadow-[#00d4ff]/50 animate-orbit-reverse"></div>
            </div>*/}
          </div>

          {/* Mobile 3D graphic */}
          <div className="relative h-80 lg:hidden flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(75,107,251,0.3)]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4B6BFB]/20 to-transparent opacity-50"></div>
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4B6BFB] to-[#00d4ff] flex items-center justify-center mb-4 shadow-lg shadow-[#4B6BFB]/50">
                  <Zap className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Premium Solutions</h3>
                <p className="text-gray-400 text-sm">Technology meets design</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        @keyframes pulse-glow-delayed {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.08); }
        }

        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slide-in-left-delayed {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-slower {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-slowest {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float-3d {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }

        @keyframes orbit {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg);
          }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }

        @keyframes orbit-reverse {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(250px) rotate(0deg);
          }
          100% { 
            transform: translate(-50%, -50%) rotate(-360deg) translateX(250px) rotate(360deg);
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-pulse-glow-delayed {
          animation: pulse-glow-delayed 5s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-in-left-delayed {
          animation: slide-in-left-delayed 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-slow {
          animation: fade-in-slow 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-slower {
          animation: fade-in-slower 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
          opacity: 0;
        }

        .animate-fade-in-slowest {
          animation: fade-in-slowest 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
          opacity: 0;
        }

        .animate-float-3d {
          animation: float-3d 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 5s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 15s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 20s linear infinite;
        }
      `}</style>

    </section>
  )
}