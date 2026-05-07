import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/interactive/whatsapp-widget"
import { ChatbotWidget } from "@/components/interactive/chatbot-widget"
import { CheckCircle2, Users, Target, Zap } from "lucide-react"
import { HeroBanner } from "./hero"
import MissionVisionValues from "./mission"
import WhyChooseUs from "@/components/sections/why-choose-us"
import TeamSection from "./ourteam"
import WhyWorkWithUs from "./whywork"
import ContactExample from "@/components/sections/contactform"
import { PopupForm } from "@/components/sections/contactform"

export const metadata: Metadata = {
  title: "About Digitrix Solutions | Our Story & Mission",
  description: "Learn about Digitrix Solutions - a leading digital agency transforming businesses through innovation.",
  keywords: "about us, digital agency, company mission, team, expertise",
}

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-28 md:pt-32 pb-20 md:pb-8">
          <HeroBanner />
          <MissionVisionValues />
         

          {/* Journey */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="section-heading mb-16 text-center">Our Journey</h2>

              <div className="space-y-8">
                {[
                  
                  {
                    year: "2024 ",
                    title: "Founded",
                    desc: "The Beginning of Our Digital Journey Our agency was founded in 2024 with a vision to deliver modern, high-quality digital solutions for businesses. Starting with a small team and big ambition, we set out to transform how brands grow online through strategy, creativity, and performance-driven marketing.",
                  },
                   {
                    year: "2025",
                    title: "Growth & Leadership",
                    desc: "Becoming a Trusted Digital Partner By 2025, we evolved into a recognized agency delivering end-to-end digital services — from branding and websites to marketing and production. With a growing client base and industry recognition, we are on the path to becoming leaders in digital innovation and brand growth.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-8 items-start animate-slide-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="w-32 flex-shrink-0">
                      <p className="text-3xl font-bold text-primary">{item.year}</p>
                    </div>
                    <div className="flex-grow p-6 rounded-lg border border-border bg-muted hover:border-primary/50 hover:bg-muted/80 transition-all">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <TeamSection/>
          

          {/* Why Work With Us */}
          <WhyWorkWithUs />
          <WhyChooseUs />

          {/* CTA */}
          <section className="py-16 md:py-24 bg-muted/50">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="section-heading mb-6">Let's Build Something Great Together</h2>
              <p className="section-subheading mb-8">
                Join 150+ satisfied clients who've transformed their businesses with us.
              </p>
              <PopupForm
              trigger={
              <Link href="/#" className="btn-primary inline-flex items-center justify-center gap-2">
                Start Your Project Now
              </Link>
              }/>
            </div>
          </section>

          <ContactExample />
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
      <ChatbotWidget />
    </>
  )
}
