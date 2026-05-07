"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { PopupForm } from "@/components/sections/contactform"
export default function SampleProjects() {
  const projects = [
    {
      id: "01",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      badge: "E-commerce Strategy",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      title: "E-commerce Ads Strategy",
      subtitle: "Boosting Reach & Sales for a Fashion Brand",
      description: "We developed a complete paid ads funnel for a sample e-commerce store, focusing on interest-based targeting, retargeting, and A/B testing creatives.",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      glowColor: "blue-500",
      services: [
        "Ad creative concept",
        "Target audience breakdown",
        "Retargeting funnel",
        "Performance-based scaling plan"
      ],
      outcome: "Higher ROAS, lower CPA, improved ad relevance.",
      accentColor: "bg-blue-500"
    },
    {
      id: "02",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      badge: "Social Media Growth",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      title: "Instagram Growth System",
      subtitle: "Building a Strong Social Presence for Lifestyle Brands",
      description: "A complete IG growth strategy built for a demo lifestyle brand using content pillars, reel scripts, hashtag maps, and engagement playbooks.",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      glowColor: "purple-500",
      services: [
        "30-day content calendar",
        "Visual brand direction",
        "Reel & story templates",
        "Engagement workflow"
      ],
      outcome: "Improved engagement, follower growth, stronger brand personality.",
      accentColor: "bg-purple-500"
    },
    {
      id: "03",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      badge: "Lead Generation",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      title: "Lead Generation Funnel",
      subtitle: "Capturing High-Quality Leads for Real Estate Businesses",
      description: "We built a sample lead funnel using landing pages, automated email nurturing, and targeted ad sets.",
      gradient: "from-orange-500 via-amber-500 to-orange-600",
      glowColor: "orange-500",
      services: [
        "High-converting landing page",
        "Lead magnet design",
        "Email automation flow",
        "Retargeting ads concept"
      ],
      outcome: "Higher lead conversion, reduced CPL, predictable lead flow.",
      accentColor: "bg-orange-500"
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Sample Projects
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our strategic approach through demo projects showcasing real-world marketing solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => {
            return (
              <div
                key={project.id}
                className="group relative"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Main Card */}
                <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/60 hover:border-slate-300 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-900/10">
                  
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-all duration-700`}></div>
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 -z-10`}></div>

                  <div className="grid md:grid-cols-3 gap-8 p-8 md:p-10">
                    {/* Left Column - Image */}
                    <div className="md:col-span-1">
                      <div className="relative group/img overflow-hidden rounded-2xl">
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 z-10`}></div>
                        
                        {/* Glow effect */}
                        <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-all duration-700`}></div>
                        
                        {/* Project Number Overlay */}
                        <div className="absolute top-4 left-4 z-20">
                          <div className="relative">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-lg opacity-60`}></div>
                            <span className="relative text-4xl font-black text-white drop-shadow-lg">
                              {project.id}
                            </span>
                          </div>
                        </div>
                        
                        {/* Image */}
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="relative w-full h-full object-cover aspect-[4/3] transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="md:col-span-2 space-y-6">
                      {/* Badge & Title */}
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${project.badgeColor} mb-4`}>
                          {project.badge}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-lg text-slate-600 font-medium mb-4">{project.subtitle}</p>
                        <p className="text-slate-600 leading-relaxed">{project.description}</p>
                      </div>

                      {/* Services Grid */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <div className={`w-1 h-4 ${project.accentColor} rounded-full`}></div>
                          What We Did
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {project.services.map((service, i) => (
                            <div 
                              key={i} 
                              className="flex items-start gap-3 group/item"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              <CheckCircle2 size={20} className={`text-${project.glowColor} mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`} />
                              <span className="text-slate-700 group-hover/item:text-slate-900 transition-colors duration-300">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className="pt-4 border-t border-slate-200 flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Projected Outcome</p>
                          <p className="text-slate-800 font-medium">{project.outcome}</p>
                        </div>
                        
                        {/* CTA Button /}
                        <button className={`group/btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                          <span>View Details</span>
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button> */}
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <PopupForm
        trigger={
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Ready to see what we can do for your business?</p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-800 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <span>Start Your Project</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
        }/>
      </div>
    </section>
  )
}