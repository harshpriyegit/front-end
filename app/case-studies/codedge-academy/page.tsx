"use client"
import Link from "next/link"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/interactive/whatsapp-widget"
import { ChatbotWidget } from "@/components/interactive/chatbot-widget"
import { PopupForm } from "@/components/sections/contactform"

import { 
  ExternalLink, 
  Zap, 
  TrendingUp, 
  Target, 
  CheckCircle2,
  AlertTriangle,
  Code2,
  Smartphone,
  Search,
  Layers
} from "lucide-react"
import Image from "next/image";




export default function CodedgeCaseStudy() {
  const challenges = [
    { icon: "⚠️", text: "Slow loading speed (7-9 seconds)" },
    { icon: "📱", text: "Poor mobile experience" },
    { icon: "🔌", text: "Plugin-heavy WordPress site" },
    { icon: "📉", text: "SEO performance issues" },
    { icon: "🎨", text: "Outdated UI/UX design" },
  ]

  const solutions = [
    "Next.js 14 redevelopment",
    "TypeScript re-architecture",
    "SEO optimization & structured data",
    "Modern UI/UX improvements",
    "Performance optimization & code splitting",
    "Responsive mobile-first design",
  ]

  const results = [
    { 
      value: "75%", 
      label: "Faster Load Time",
      description: "From 7-9s to 1-2s"
    },
    { 
      value: "40%", 
      label: "Better Mobile Speed",
      description: "Core Web Vitals improved"
    },
    { 
      value: "95+", 
      label: "Lighthouse Score",
      description: "Performance excellence"
    },
    { 
      value: "↓50%", 
      label: "Reduced Bounce Rate",
      description: "Better user engagement"
    },
  ]

  const technologies = [
    { name: "Next.js 14", icon: "⚡" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Vercel", icon: "▲" },
    { name: "WebP Optimization", icon: "🖼️" },
    { name: "React", icon: "⚛️" },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden mt-20">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/case-study/codedgehero.png" 
              alt="Codedge Academy"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/60"></div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Codedge Academy <span className="text-primary">Website Redevelopment</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Transforming a slow WordPress website into a high-performance Next.js platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <a 
                href="https://www.codedgeacademy.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                View Live Site <ExternalLink size={18} />
              </a>
              <PopupForm
              trigger={
              <Link href="#" className="btn-secondary inline-flex items-center justify-center gap-2">
                Start Your Project
              </Link>
              }/>
            </div>
          </div>
        </section>

        {/* Client Overview Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column */}
              <div className="space-y-6 animate-slide-up">
                <div className="bg-muted p-8 rounded-xl border border-border">
                  <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <Image 
                    src="/case-study/codedgefevicon.png"
                    alt="Service Icon" 
                    width={62} 
                    height={42} 
                    className="object-contain"
                  />
                </div>

                  <h3 className="text-2xl font-bold mb-2">Codedge Academy</h3>
                  <p className="text-muted-foreground mb-4">
                    A tech education platform offering industry-oriented courses and skill development programs.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-primary">Industry:</span>
                      <span className="ml-2 text-muted-foreground">Ed-Tech / Education</span>
                    </div>
                    <div>
                      <span className="font-semibold text-primary">Website:</span>
                      <a 
                        href="https://www.codedgeacademy.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-primary hover:underline inline-flex items-center gap-1"
                      >
                        codedgeacademy.com <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">🚩 Project Overview</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Codedge Academy approached us with a major challenge: their existing WordPress website was slow, unstable, and not optimized for performance. This was leading to high bounce rates, slow mobile loading, poor SEO rankings, difficulty managing content, and an inconsistent user experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  They wanted a modern, faster, and scalable website that reflects their brand and provides a smooth experience for learners.
                </p>
                
                <div className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="text-primary" size={20} />
                    Services Provided
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                      Website Redevelopment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                      UI/UX Optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                      Next.js + TypeScript Migration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                      Speed & Performance Optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                      SEO Improvements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Major issues affecting user experience and business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, idx) => (
                <div 
                  key={idx}
                  className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <p className="text-foreground font-medium">{challenge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A complete transformation using modern technologies and best practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {solutions.map((solution, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 p-6 bg-primary/5 rounded-xl border border-primary/20 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <span className="font-medium">{solution}</span>
                </div>
              ))}
            </div>

            {/* Approach Details */}
            <div className="bg-muted p-8 md:p-12 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">🛠 Our Approach</h3>
              
              <div className="space-y-8">
                <div className="animate-slide-up">
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">1</span>
                    Complete Analysis of Existing WordPress Setup
                  </h4>
                  <p className="text-muted-foreground ml-10">
                    We checked performance issues, unnecessary plugins, render-blocking scripts, and broken SEO structure.
                  </p>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                    Designed a New Lightweight Frontend Architecture
                  </h4>
                  <ul className="text-muted-foreground ml-10 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Next.js App Router
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Reusable components
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      SSR + SSG for maximum performance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Clean UI based on Codedge brand identity
                    </li>
                  </ul>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">3</span>
                    Built the Website in Next.js + TypeScript
                  </h4>
                  <p className="text-muted-foreground ml-10 mb-3">Why Next.js?</p>
                  <ul className="text-muted-foreground ml-10 space-y-2">
                    <li className="flex items-center gap-2">
                      <Zap size={16} className="text-primary flex-shrink-0" />
                      Faster rendering
                    </li>
                    <li className="flex items-center gap-2">
                      <Search size={16} className="text-primary flex-shrink-0" />
                      Better control over SEO
                    </li>
                    <li className="flex items-center gap-2">
                      <Layers size={16} className="text-primary flex-shrink-0" />
                      Highly optimized bundles
                    </li>
                    <li className="flex items-center gap-2">
                      <Smartphone size={16} className="text-primary flex-shrink-0" />
                      Modern animations + transitions
                    </li>
                  </ul>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">4</span>
                    Performance Optimization
                  </h4>
                  <p className="text-muted-foreground ml-10">
                    Images converted to WebP, lazy loading added, code splitting, reduced DOM size, and removed unused scripts.
                  </p>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                  <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">5</span>
                    SEO Improvements
                  </h4>
                  <p className="text-muted-foreground ml-10">
                    Structured data (JSON-LD), updated meta tags, clean URLs, improved content hierarchy, and OpenGraph tags for social sharing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before vs After Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">⚡ Before vs After</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dramatic improvements in performance and user experience
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Before */}
              <div className="bg-background p-8 rounded-xl border border-border animate-slide-up">
                <h3 className="text-xl font-bold mb-4 text-red-500 flex items-center gap-2">
                  <AlertTriangle size={24} />
                  Before (WordPress)
                </h3>
                <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="/case-study/beforecodedge.png" 
                    alt="Old WordPress Site"
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Load time: 7–9 seconds
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Low mobile performance
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Cluttered UI
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Plugin dependency
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Poor SEO health
                  </li>
                </ul>
              </div>

              {/* After */}
              <div className="bg-background p-8 rounded-xl border border-primary/50 shadow-lg shadow-primary/10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-xl font-bold mb-4 text-green-500 flex items-center gap-2">
                  <CheckCircle2 size={24} />
                  After (Next.js)
                </h3>
                <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="/case-study/codedgehero.png" 
                    alt="New Next.js Site"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                    Load time: 1–2 seconds
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                    95+ Lighthouse performance score
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                    Modern, responsive UI
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                    SEO-friendly architecture
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                    Faster navigation and engagement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">📊 Results Achieved</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Measurable improvements that drive real business value
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((result, idx) => (
                <div 
                  key={idx}
                  className="relative overflow-hidden p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {result.value}
                    </div>
                    <div className="text-lg font-semibold mb-1">
                      {result.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">💡 Technologies Used</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technologies for optimal performance
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, idx) => (
                <div 
                  key={idx}
                  className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center hover:shadow-lg hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <div className="font-semibold text-sm">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">🎉 Client Feedback</h2>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12 rounded-2xl border border-primary/20 animate-slide-up">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl flex-shrink-0">
                  🎓
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-1">Codedge Academy</h3>
                  <p className="text-muted-foreground">Ed-Tech Platform</p>
                </div>
              </div>
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
                "The website is now extremely fast and professional. Our students can browse courses smoothly, and the new performance has improved our SEO drastically. Great job by Digitrix!"
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want a High-Performance Website Like This?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your slow website into a lightning-fast experience that converts visitors into customers.
            </p>
            <PopupForm
            trigger={
            <Link href="#" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
              Get a Free Consultation
            </Link>
            }/>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
      <ChatbotWidget />
    </>
  )
}