"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { title } from "process"
import { useRef } from "react"

const steps = [
  {
    title: "Strategic Discovery & Brand Understanding",
    description: "We start by understanding your business goals, audience, and brand identity. Through research and strategy planning, we define a clear roadmap to build a website that reflects your brand and drives measurable outcomes.",
    keywords: "website strategy, brand research, project planning",
  },
  {
    title: "Modern UI/UX Design That Converts",
    description: "Our design team creates clean, modern, and conversion-focused interfaces. Every layout, color, and component is crafted to deliver an intuitive experience across all devices — boosting engagement and trust.",
    keywords: "UI UX design, responsive website design, user experience",
  },
  {
    title: "High-Performance Frontend Development",
    description: "We use industry-leading technologies like Next.js, React, and Tailwind CSS to build responsive, optimized, and fast-loading websites. Your website isn’t just beautiful — it’s engineered for speed, stability, and scalability.",
    keywords: "Next.js development, React websites, fast-loading website",
  },
  {
    title: "Secure & Scalable Backend Architecture",
    description: "We develop a strong backend foundation using secure APIs and modern frameworks. From contact forms to dynamic pages, every feature is protected, scalable, and built for long-term performance.",
    keywords: "API development, secure websites, scalable backend",
  },
  {
    title:"SEO-Optimized Structure From Day One",
    description:"Your website is built with SEO best practices — optimized URLs, meta tags, schemas, and fast response times. This ensures higher visibility on Google, more organic traffic, and long-term search performance",
    keyword:"on-page SEO, technical SEO, schema optimization",
  },
  {
    title:"Testing, Launch & Ongoing Optimization",
    description:"We rigorously test your website for speed, responsiveness, accessibility, and browser compatibility. After launch, we continue optimizing performance, security, and content to ensure your site stays ahead of competitors",
    keyword:"website testing, website launch, maintenance",
  }
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
            How We  <span className="gradient-text">Develop Websites</span> .
          </h2>
          <p className=" section-subheading">
            Our proven development methodology ensures quality and timely delivery.
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
                <div className="ml-12 lg:ml-0 bg-primary/10 p-6 rounded-xl shadow-md w-full max-w-sm">
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