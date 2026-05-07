"use client"

import { Film, Camera, Edit3, Mic, Lightbulb, Zap } from "lucide-react"

export default function MarketingServices() {
  const services = [
     {
      icon: Film,
      title: "Video Production",
      description: "From concept to final cut - professional video production for all needs.",
      color: "from-red-500 to-orange-600",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for products, events, and branding.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Edit3,
      title: "Post-Production",
      description: "Expert editing, color grading, and visual effects enhancement.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Mic,
      title: "Audio Production",
      description: "Professional voice-over, sound design, and audio mastering services.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Lightbulb,
      title: "Creative Concept",
      description: "Innovative ideas and creative direction for your visual content.",
      color: "from-amber-500 to-yellow-600",
    },
    {
      icon: Zap,
      title: "Animation",
      description: "Stunning 2D and 3D animations to engage your audience.",
      color: "from-indigo-500 to-blue-600",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-slate-100/30 to-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur-sm hover:border-blue-300/30 transition-all duration-500 p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 cursor-pointer"
              >
                {/* Gradient orb effect */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-all duration-700 rounded-full blur-2xl group-hover:scale-150`}
                ></div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 blur-sm -z-10"></div>

                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className="relative mb-6 inline-block">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-all duration-500 group-hover:scale-110`}></div>
                    <div
                      className={`relative p-3.5 rounded-xl bg-gradient-to-br ${service.color} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                  </div>

                  {/* Content with stagger animation */}
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-all duration-300 transform group-hover:translate-x-1">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Animated arrow indicator */}
                  <div className="mt-6 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${service.color} opacity-20 rounded-bl-full`}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}