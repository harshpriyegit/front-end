"use client"

import { Target, Eye, Heart, Sparkles } from "lucide-react"

export default function MissionVisionValues() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 mb-6">
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Who We Are</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Our Foundation
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Driven by purpose, guided by values, focused on your success
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 md:space-y-16">
          
          {/* Mission Section - Text Left, Image Right */}
          <div className="group relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="relative order-2 md:order-1">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
                
                <div className="space-y-6 md:pr-8">
                  {/* Icon & Badge */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 transform group-hover:rotate-6 transition-all duration-500">
                        <Target size={28} className="text-white" />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-wider px-4 py-2 rounded-full bg-blue-50 border border-blue-200">
                      Our Mission
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    Empowering Brands to Thrive
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We exist to help businesses unlock their full potential through strategic digital marketing. Our mission is to deliver measurable results that drive growth, build lasting relationships, and create meaningful impact in the digital landscape.
                  </p>

                  {/* Key Points */}
                  <div className="space-y-3 pt-4">
                    {[
                      "Data-driven strategies that deliver real ROI",
                      "Transparent partnerships built on trust",
                      "Innovative solutions for modern challenges"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                        <span className="text-slate-700 group-hover/item:text-slate-900 transition-colors duration-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 md:order-2 group/img">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-[shimmer_3s_ease-in-out_infinite]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section - Image Left, Text Right */}
          <div className="group relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative group/img">
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop" 
                    alt="Future vision"
                    className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(168,85,247,0.1)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-[shimmer_3s_ease-in-out_infinite]"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative">
                <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
                
                <div className="space-y-6 md:pl-8">
                  {/* Icon & Badge */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-b from-green-500 to-emerald-600 transform group-hover:rotate-6 transition-all duration-500">
                        <Eye size={28} className="text-white" />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-purple-600 uppercase tracking-wider px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
                      Our Vision
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                    Leading Digital Transformation
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To be the most trusted digital marketing partner for businesses worldwide, setting new standards for excellence, innovation, and results. We envision a future where every brand can harness the full power of digital marketing to achieve extraordinary growth.
                  </p>

                  {/* Key Points */}
                  <div className="space-y-3 pt-4">
                    {[
                      "Pioneer cutting-edge marketing technologies",
                      "Set industry benchmarks for performance",
                      "Create lasting impact for businesses globally"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                        <span className="text-slate-700 group-hover/item:text-slate-900 transition-colors duration-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section - Text Left, Image Right */}
          <div className="group relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="relative order-2 md:order-1">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-amber-500 to-orange-500 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>
                
                <div className="space-y-6 md:pr-8">
                  {/* Icon & Badge */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-amber-500  to-orange-600  transform group-hover:rotate-6 transition-all duration-500">
                        <Heart size={28} className="text-white" />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-orange-600 uppercase tracking-wider px-4 py-2 rounded-full bg-orange-50 border border-orange-200">
                      Our Values
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                    Principles That Guide Us
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our core values shape every decision we make and every strategy we craft. They're the foundation of our culture and the promise we make to every client we serve.
                  </p>

                  {/* Values Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[
                      { title: "Integrity", desc: "Honest, transparent partnerships" },
                      { title: "Excellence", desc: "Quality in every detail" },
                      { title: "Innovation", desc: "Always pushing boundaries" },
                      { title: "Collaboration", desc: "Success through teamwork" }
                    ].map((value, i) => (
                      <div key={i} className="group/item p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-start gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                          <h4 className="font-bold text-slate-900 group-hover/item:text-orange-600 transition-colors duration-300">{value.title}</h4>
                        </div>
                        <p className="text-sm text-slate-600">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative order-1 md:order-2 group/img">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop" 
                    alt="Team values"
                    className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(249,115,22,0.1)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-[shimmer_3s_ease-in-out_infinite]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  )
}