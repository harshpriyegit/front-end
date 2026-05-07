import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/interactive/whatsapp-widget"
import { ChatbotWidget } from "@/components/interactive/chatbot-widget"
import { TrendingUp } from "lucide-react"
import { PopupForm } from "@/components/sections/contactform"

export const metadata: Metadata = {
  title: "Case Studies | Digitrix Solutions",
  description: "Explore our successful project case studies showcasing real results.",
  keywords: "case studies, success stories, project portfolio, results",
}

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Codedge Academy Website Redevelopment",
      category: "Web Development",
      result: "75% Faster Load Speed + Sales Increase",
      description:
        "Redeveloped Codedge Academy’s slow WordPress website into a high-performance Next.js platform, resulting in significantly improved loading speed, enhanced SEO performance, and a smoother user experience.",
      results: ["250% increase in sales", "45% improvement in conversion rate", "75% improvement in loading speed","Higher engagement and reduced bounce rate"],
      image: "/case-study/codedgehero.png",
      slug: "/case-studies/codedge-academy",
    },
    {
       title: "EngageHub – Professional Education Website Build",
        category: "Web Development",
        result: "Brand-new professional website & improved user experience",
        description:
          "Designed and developed a modern, responsive, SEO-friendly website for EngageHub — an education services platform — delivering a clean UI/UX, fast performance, and scalable architecture.",
        results: [
          "Brand new professional, student-friendly website",
          "Fully responsive and mobile-optimized design",
          "SEO-ready structure and content architecture",
          "Scalable build for future expansion"
        ],
      image: "/case-study/engagehubhero.png",
      slug: "/case-studies/engagehub",
    },
    
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-28 md:pt-32 pb-20 md:pb-8">
          {/* Hero */}
          <section className="relative min-h-[50vh] flex items-center overflow-hidden py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-background">
              <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-3xl">
                <h1 className="section-heading mb-6">Success Stories</h1>
                <p className="section-subheading">
                  Real results from real clients. Discover how we've transformed businesses across industries.
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudies.map((study, idx) => (
                  <Link
                    key={idx}
                    href={study.slug}
                    className="group relative overflow-hidden rounded-xl border border-border bg-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-slide-up cursor-pointer"
                    style={{ animationDelay: `${(idx % 2) * 0.15}s` }}
                  >
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:blur-lg transition-all"></div>

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-xl -m-8 mb-0">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    </div>

                    <div className="relative z-10 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-primary text-sm font-semibold mb-1">{study.category}</p>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {study.title}
                          </h3>
                        </div>
                        <TrendingUp size={24} className="text-primary flex-shrink-0" />
                      </div>

                      <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
                        <span className="text-primary font-bold text-lg">{study.result}</span>
                      </div>

                      <p className="text-muted-foreground mb-6">{study.description}</p>

                      <ul className="space-y-2">
                        {study.results.map((result, ridx) => (
                          <li key={ridx} className="text-foreground text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {result}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Read Full Case Study <span>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 bg-muted/50">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="section-heading mb-6">Ready to Be Our Next Success Story?</h2>
              <p className="section-subheading mb-8">Let's create something remarkable together.</p>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Start Your Project
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
      <ChatbotWidget />
    </>
  )
}