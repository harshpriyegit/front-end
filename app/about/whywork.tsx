"use client"

import { Target, Layers, Sparkles, MessageSquare, Puzzle, TrendingUp } from "lucide-react"

export default function WhyWorkWithUs() {
  const features = [
    {
      icon: Target,
      title: "Strategy-Driven, Not Guesswork",
      description: "Every project begins with research, insights, and a clear roadmap. We create solutions that align with your business goals, audience behavior, and long-term growth plan.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Layers,
      title: "Complete End-to-End Solutions",
      description: "From branding and web development to marketing, content production, and ads — we handle everything under one roof so you don't need multiple agencies.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Creative Work That Looks Great and Performs",
      description: "Our designs, campaigns, and productions aren't just visually impressive — they're built to convert, engage, and deliver measurable results.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication & Reliable Delivery",
      description: "You get timely updates, clear timelines, real results, and honest reporting. No hidden processes, no confusing jargon.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Puzzle,
      title: "Custom Solutions for Your Business",
      description: "We don't believe in templates or shortcuts. Every brand, strategy, and campaign is uniquely crafted to match your industry, goals, and positioning.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: TrendingUp,
      title: "Focus on Long-Term Growth, Not Short-Term Wins",
      description: "We're not here for one project — we're here to help you scale. Our approach ensures consistency, quality, and continuous improvement.",
      color: "from-teal-500 to-cyan-500"
    }
  ]

  return (
    <div className="min-h-screen bg-muted/50 py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900">
              Why Work With Us
            </h2>
          </div>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto mt-4">
            We're not just another agency. Here's what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-2xl sm:blur-3xl transition-opacity duration-500 rounded-full`} />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
       
      </div>
    </div>
  )
}