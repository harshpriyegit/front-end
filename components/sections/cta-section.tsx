"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PopupForm } from "./contactform"

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 p-12 md:p-20 text-center group">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative z-10">
            <h2 className="section-heading mb-4">Ready to Transform Your Business?</h2>
            <p className="section-subheading max-w-2xl mx-auto mb-8">
              Let's create something extraordinary together. Get in touch with our team today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PopupForm
              trigger={
              <Link href="#" className="btn-primary inline-flex items-center justify-center gap-2">
                Start Your Project <ArrowRight size={18} />
              </Link>
              }/>
              <a
                href="https://wa.me/918810550522"
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
