"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Code2, Sparkles, Zap, Layers, Database, Cpu, Cloud, GitBranch } from "lucide-react"
import { useState } from "react"

const iconMap = {
  "Frontend": Layers,
  "Backend": Database,
  "Platforms": Cloud,
  "Tools": GitBranch
}

const technologies = [
  { 
    category: "Frontend", 
    tools: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    gradient: " from-cyan-500 to-blue-600",
    bgGradient: "muted/50",
    particleColor: "bg-cyan-400"
  },
  { 
    category: "Backend", 
    tools: ["Node.js", "Express", "Python", "MongoDB"],
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "muted/50",
    particleColor: "bg-emerald-400"
  },
  { 
    category: "Platforms", 
    tools: ["WordPress", "Shopify", "Webflow", "Custom"],
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "muted/50",
    particleColor: "bg-orange-400"
  },
  { 
    category: "Tools", 
    tools: ["Git", "Docker", "AWS", "Firebase"],
    gradient: "from-amber-500 to-orange-600",
    bgGradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
    particleColor: "bg-violet-400"
  },
]

function FloatingParticle({ delay, duration, color }: { delay: number; duration: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [0, -100],
        x: [0, Math.random() * 40 - 20]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
      className={`absolute bottom-0 left-1/2 w-2 h-2 ${color} rounded-full blur-sm`}
    />
  )
}

function TechCard({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top
    const xPct = mouseXPos / width - 0.5
    const yPct = mouseYPos / height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const Icon = iconMap[tech.category as keyof typeof iconMap]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="perspective-1000"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative group"
      >
        {/* Glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute -inset-1 bg-gradient-to-r ${tech.gradient} rounded-2xl blur-xl opacity-30`}
        />

        {/* Main card */}
        <div className={`relative bg-gradient-to-br ${tech.bgGradient} rounded-2xl overflow-hidden border border-border/50 hover:border-transparent transition-all duration-500`}>
          <div className="relative bg-background/90 backdrop-blur-xl p-8">
            {/* Floating particles */}
            {isHovered && (
              <>
                {[...Array(5)].map((_, i) => (
                  <FloatingParticle 
                    key={i} 
                    delay={i * 0.2} 
                    duration={2 + i * 0.3}
                    color={tech.particleColor}
                  />
                ))}
              </>
            )}

            {/* Animated background grid */}
            <motion.div
              animate={{
                backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%"
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }}
            />

            {/* Header with icon */}
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <motion.div
                animate={{
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}
              >
                {/* Icon shine effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: isHovered ? "100%" : "-100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
                <Icon size={28} className="text-white relative z-10" />
              </motion.div>

              <div>
                <motion.h3
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-foreground"
                >
                  {tech.category}
                </motion.h3>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                  className={`h-0.5 bg-gradient-to-r ${tech.gradient} mt-1`}
                />
              </div>

              {/* Sparkle indicator */}
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  rotate: isHovered ? 180 : 0,
                  scale: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.4 }}
                className="ml-auto"
              >
                <Sparkles size={24} className={`text-transparent bg-gradient-to-r ${tech.gradient} bg-clip-text`} />
              </motion.div>
            </div>

            {/* Tools grid */}
            <div className="flex flex-wrap gap-3 relative z-10">
              {tech.tools.map((tool, tidx) => (
                <motion.div
                  key={tidx}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + tidx * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group/tool"
                >
                  {/* Tool chip glow */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute -inset-1 bg-gradient-to-r ${tech.gradient} rounded-full blur-md opacity-0 group-hover/tool:opacity-70 transition-opacity duration-300`}
                  />
                  
                  <div className={`relative px-5 py-2.5 rounded-full bg-gradient-to-r ${tech.bgGradient} border border-border/50 backdrop-blur-sm overflow-hidden`}>
                    {/* Shimmer effect */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    <span className="relative text-sm font-semibold text-foreground">
                      {tool}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Corner decoration */}
            <motion.div
              animate={{
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 0 : -90
              }}
              transition={{ duration: 0.4 }}
              className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${tech.gradient} rounded-full blur-2xl opacity-20`}
            />
          </div>
        </div>

        {/* 3D depth indicator */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.1 : 0,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-2xl -z-10 translate-z-[-10px]"
          style={{ transform: "translateZ(-10px)" }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 0.5px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
         {/*} <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-600 mb-6"
          >
            <Zap size={16} className="animate-pulse" />
            <span>Cutting-Edge Stack</span>
            <Sparkles size={16} className="animate-pulse" />
          </motion.div>*/}
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Technologies We{" "}
            <span className="gradient-text">
              Master
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Modern tools and frameworks that power exceptional digital experiences
          </p>
        </motion.div>

        {/* Tech cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {technologies.map((tech, index) => (
            <TechCard key={tech.category} tech={tech} index={index} />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center gap-2 text-muted-foreground"
          >
            <Code2 size={20} />
            <span className="text-sm font-medium">And many more technologies...</span>
            <Cpu size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}