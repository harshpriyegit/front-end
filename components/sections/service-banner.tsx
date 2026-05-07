"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceBannerProps {
  title: string
  subtitle: string
  description: string
  image: string
}

export function ServiceBanner({ title, subtitle, description, image }: ServiceBannerProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-background">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-primary text-sm font-medium">Professional Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{title}</h1>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/919876543210"
                className="btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Chat Now
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div
              className={`aspect-square rounded-2xl border border-primary/20 bg-gradient-to-br ${image} overflow-hidden group`}
            >
              <div className="w-full h-full flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 shadow-2xl shadow-primary/50"></div>
                  <p className="text-foreground font-semibold">{title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
