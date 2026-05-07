"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How long does a typical web development project take?",
      answer:
        "Project timelines vary based on complexity. Typically, small websites take 4-6 weeks, while larger projects can take 2-3 months. We provide detailed timelines after initial consultation.",
    },
    {
      question: "What is your approach to SEO optimization?",
      answer:
        "We implement SEO best practices throughout the development process, including technical SEO, keyword optimization, and content strategy to ensure your website ranks well in search results.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes! We offer comprehensive maintenance packages including updates, security patches, performance optimization, and continuous improvement based on analytics.",
    },
    {
      question: "How do you determine project pricing?",
      answer:
        "Our pricing is based on project scope, complexity, timeline, and specific requirements. We provide transparent quotes after understanding your needs through detailed consultation.",
    },
    {
      question: "Can you help with existing website improvements?",
      answer:
        "We audit existing websites and provide recommendations for improvements including design updates, performance optimization, and functionality enhancements.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
          <p className="section-subheading">Everything you need to know about our services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors animate-slide-up"
              style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full p-6 flex items-center justify-between bg-muted hover:bg-muted/80 transition-colors"
              >
                <h3 className="font-semibold text-left text-foreground">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-background text-muted-foreground leading-relaxed border-t border-border animate-slide-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
