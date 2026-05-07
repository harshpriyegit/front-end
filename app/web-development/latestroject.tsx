"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "CodeEdge Academy",
    category: "EdTech Platform & Branding",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    description: "A complete digital learning ecosystem crafted for a modern coding academy, featuring an interactive curriculum, seamless user onboarding, and a performance-driven brand identity.",
    tags: ["Next.js", "LMS Design", "Brand Strategy"],
    color: "from-purple-500/20 to-pink-500/20",
    link: "https://codedgeacademy.com"
  },
  {
   
  id: 2,
  title: "EngageHub ",
  category: "Empowering Students Through Quality Education",
  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
  description: "Transform your academic journey with personalized tutoring, expert guidance, and proven learning strategies designed for your success.",
  tags: ["Next.js", "SaaS Design", "Automation UI"],
  color: "from-blue-500/20 to-cyan-500/20",
  link: "https://www.engagehub.me/"
  },
 
]

export default function LatestProjects() {
  const [hoveredProject, setHoveredProject] = useState<number|null>(null)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Latest <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming visions into digital masterpieces
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 md:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className={`grid md:grid-cols-2 gap-0 md:gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}>
                {/* Image Side */}
                <motion.div
                  className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${
                    index % 2 === 1 ? 'md:col-start-2' : ''
                  }`}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply`} />
                  
                  {/* Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Hover Details Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20 flex flex-col justify-end p-6 md:p-8"
                  >
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredProject === project.id ? 0 : 20,
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-white/90 text-sm md:text-base mb-4"
                    >
                      {project.description}
                    </motion.p>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredProject === project.id ? 0 : 20,
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Corner Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-30"
                  >
                    <ExternalLink size={20} className="text-foreground" />
                  </motion.div>
                </motion.div>

                {/* Content Side */}
                <div className={`flex flex-col justify-center space-y-4 md:space-y-6 p-6 md:p-0 ${
                  index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
                }`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="inline-block px-4 py-1.5 bg-muted rounded-full text-xs md:text-sm font-medium text-muted-foreground mb-4">
                      {project.category}
                    </span>
                    
                    <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:hidden">
                      {project.description}
                    </p>

                    <motion.a
                      href={project.link}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-foreground font-semibold group/link"
                    >
                      <span>View Project</span>
                      <ArrowUpRight 
                        size={20} 
                        className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" 
                      />
                    </motion.a>
                  </motion.div>

                  {/* Decorative Element */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full origin-left"
                  />
                </div>
              </div>

              {/* Background Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-5 pointer-events-none">
                <span className="text-[20rem] font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 md:mt-24"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <span>View All Projects</span>
            <ArrowUpRight size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}