import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/interactive/whatsapp-widget"
import { ChatbotWidget } from "@/components/interactive/chatbot-widget"
import TechStack from "./tech-stack"
import { PricingPlans } from "@/app/web-development/pricing-plans"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta-section"
import { HeroBanner } from "./hero"
import { Partners } from "@/components/sections/partners"
import { HowWeBuild } from "./how-we-build"
import LatestProjects from "./latestroject"
import ContactExample from "@/components/sections/contactform"
import ServicesSection from "./services"

export const metadata: Metadata = {
  title: "Web Development Services | Digitrix Solutions",
  description:
    "Professional web development services. We build scalable, high-performance websites using React, Next.js, WordPress, and more.",
  keywords: "web development, custom websites, React development, Next.js, responsive design, e-commerce development",
  openGraph: {
    title: "Web Development Services | Digitrix Solutions",
    description: "Professional web development services for your business",
  },
}

export default function WebDevelopment() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-28 md:pt-32 pb-20 md:pb-8">
          <HeroBanner />
          <Partners />
          <HowWeBuild />
          <LatestProjects />
          <ServicesSection />
          <TechStack />
          <PricingPlans />
          <Testimonials />
          <ContactExample />
          <FAQ />
          <CTASection />
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
      <ChatbotWidget />
    </>
  )
}
