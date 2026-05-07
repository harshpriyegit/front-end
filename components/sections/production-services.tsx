"use client"

import { Film, Camera, Edit3, Mic, Lightbulb, Zap } from "lucide-react"

export function ProductionServices() {
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
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading mb-4">Our Production Services</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Complete production solutions for all your visual content needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-border bg-background hover:border-primary/50 transition-all duration-300 p-8 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
              >
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-block p-3 rounded-lg bg-gradient-to-br ${service.color} bg-clip-padding mb-4`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
