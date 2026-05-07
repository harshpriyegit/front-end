"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Code, Smartphone, TrendingUp, Palette, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

const services = [
  {
    id: 1,
    icon: Code,
    title: "Website Development",
    tag: "Full-Stack Solutions",
    description: "Crafting high-performance, scalable websites with cutting-edge technologies. From responsive designs to complex web applications, we build digital experiences that drive results.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    features: ["React & Next.js", "E-Commerce", "CMS Integration", "API Development"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    bgGradient: "from-cyan-500/20 to-blue-600/20"
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile Development",
    tag: "iOS & Android",
    description: "Native and cross-platform mobile apps that users love. We create intuitive, feature-rich applications that work seamlessly across all devices and platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Launch"],
    gradient: "from-purple-500/20 to-pink-600/20",
    bgGradient: "from-purple-500/20 to-pink-600/20"
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "SEO Optimization",
    tag: "Growth & Visibility",
    description: "Data-driven SEO strategies that boost your rankings and drive organic traffic. We optimize every aspect of your digital presence for maximum search engine visibility.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics & Reporting"],
    gradient: "from-green-500/20 to-emerald-600/20",
    bgGradient: "from-green-500/20 to-emerald-600/20"
  },
  {
    id: 4,
    icon: Palette,
    title: "UI/UX Design",
    tag: "Beautiful Interfaces",
    description: "User-centered design that combines aesthetics with functionality. We create stunning interfaces that provide exceptional user experiences and drive engagement.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    bgGradient: "from-cyan-500/20 to-blue-600/20"
  }
]

interface Service {
  id: number
  icon: any
  title: string
  tag: string
  description: string
  image: string
  features: string[]
  gradient: string
  bgGradient: string
}

interface ServiceCardProps {
  service: Service
  index: number
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 })

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

  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group perspective-1000"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`relative bg-gradient-to-br ${service.bgGradient} rounded-3xl overflow-hidden border border-border hover:border-transparent transition-colors duration-500`}
      >
        {/* Gradient Border Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 blur-xl`}
        />

        <div className="relative bg-background/80 rounded-3xl p-8 backdrop-blur-sm">
          {/* Image Section */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Icon Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-sm`}
            >
              <Icon size={28} className="text-white" />
            </motion.div>

            {/* Sparkle Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-8 left-8"
            >
              <Sparkles size={20} className="text-white" />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="space-y-4">
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`inline-block px-4 py-1.5 bg-gradient-to-r ${service.gradient} bg-opacity-10 rounded-full text-sm font-semibold text-transparent bg-clip-text`}
              style={{ 
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                WebkitBackgroundClip: 'text'
              }}
            >
              {service.tag}
            </motion.span>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-muted-foreground leading-relaxed"
            >
              {service.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {service.features.map((feature: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                  className="px-3 py-1.5 bg-muted rounded-lg text-xs font-medium text-muted-foreground border border-border group-hover:border-primary/30 transition-colors duration-300"
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Button /}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-foreground font-semibold mt-4 group/btn"
            >
              <span>Learn More</span>
              <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.button> */}
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-20`}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-semibold text-blue-600">
              What We Offer
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to elevate your brand and accelerate your growth in the digital landscape
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA /}
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span>Discuss Your Project</span>
            <ArrowRight size={24} />
          </motion.a>
        </motion.div> */}
      </div>

      {/* Decorative Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
    </section>
  )
}