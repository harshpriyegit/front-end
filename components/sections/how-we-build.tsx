"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    title: "Discover & Strategize",
    description: "We start by understanding your business goals, customer behaviour, and competitive landscape. Through in-depth research, we define your brand messaging, positioning, and growth strategy. You receive a clear roadmap covering website structure, marketing strategy, content direction, and brand tone.",
    keywords: "brand strategy India, business growth plan, market research, branding roadmap",
  },
  {
    title: "Design & Differentiate",
    description: "Our creative team transforms strategy into a unique visual identity that connects with your target audience. From logo design and colour palette to website UI/UX, brand guidelines, and marketing creatives—we ensure every touchpoint is memorable and consistent.",
    keywords: "website design Delhi, creative branding, UI/UX development, visual identity design",
  },
  {
    title: "Develop & Amplify",
    description: "Once the designs are finalized, we build fast, scalable websites and launch data-driven marketing campaigns. Our digital marketing team handles SEO, Meta Ads, Google Ads, social media content, and performance marketing to increase visibility and attract qualified leads.",
    keywords: "website development services, SEO marketing India, digital marketing agency Delhi, performance marketing",
  },
  {
    title: "Deploy & Grow",
    description: "We manage the complete brand rollout with professional production services—pre-production planning, content shoots, video editing, and post-production. After launch, we continuously track performance, optimize campaigns, and support your brand's long-term growth.",
    keywords: "brand launch, video production services, post-production India, brand growth solutions",
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