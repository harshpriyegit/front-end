"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    title: "Discover & Strategize",
    description: "We begin with a deep understanding of your brand, audience, and communication goals. Through creative discovery sessions and production-focused research, we define your story, message, and visual direction. This includes script planning, moodboards, shot lists, and a complete production roadmap.",
    keywords: "production strategy India, creative planning Delhi, content strategy for brands, pre-production planning",
  },
  {
    title: "Design & Differentiate",
    description: "Our team transforms ideas into powerful visuals through thoughtful design and storytelling.We craft storyboards, visual styles, lighting direction, framing guides, brand-aligned aesthetics, and content layouts. Whether it's for ads, branding videos, or social content , we ensure your production stands out with a unique and memorable identity.",
    keywords: "creative direction agency, storyboard design India, visual production design, branding video concepts",
  },
  {
    title: "Develop & Amplify",
    description: "Once the creative direction is approved, we bring your vision to life through high-quality production.We handle the complete execution—shoots, cinematography, drone footage, product videography, reel production, voiceovers, and advanced editing. After production, we optimize your content for platforms like Instagram, YouTube, Meta Ads, and Google Ads to amplify reach and performance.",
    keywords: "video production services India, film editing Delhi, content production agency, social media video production",
  },
  {
    title: "Deploy & Grow",
    description: "We deliver polished, platform-ready content and support ongoing brand growth.This includes color grading, sound design, motion graphics, and final exports tailored for ads, websites, and social media. After deployment, we track performance, refine content strategy, and provide continuous creative support to help your brand scale.",
    keywords: "post-production services India, video editing agency Delhi, brand content rollout, production growth solutions",
  },
]

export function HowWeBuild() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100px", "end end"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section className="relative py-20 bg-muted/50" ref={containerRef}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16 ">
          <h2 className=" section-heading">
            How We <span className="gradient-text">Build Brand</span> .
          </h2>
          <p className=" section-subheading">
            Simplifying Work with Easy and Reliable Support System
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-center">
          {/* Static gray line (background) */}
          <div className="absolute top-0 left-4 lg:left-1/2 lg:-translate-x-1/2 w-1 bg-gray-200 rounded-full h-full"></div>

          {/* Animated gradient line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-0 left-4 lg:left-1/2 lg:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full h-full"
          />

          {/* Steps */}
          <div className="flex flex-col space-y-20 w-full max-w-4xl">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex gap-6 ${
                  // On mobile → always row, on desktop → alternate
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-row`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Dot on line */}
                <motion.div
                  className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-4 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />

                {/* Step card */}
                <div className="ml-12 lg:ml-0 from-cyan-500/20 to-blue-600/20 p-6 rounded-xl shadow-md w-full max-w-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <p className="text-xs text-gray-500 italic">{step.keywords}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}