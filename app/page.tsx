"use client"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/interactive/whatsapp-widget"
import { ChatbotWidget } from "@/components/interactive/chatbot-widget"
import { HeroBanner } from "@/components/sections/hero-banner"
import { Partners } from "@/components/sections/partners"
import { AboutSection } from "@/components/sections/about"
import { PremiumServices } from "@/components/sections/premium-services"
import  CustomerLogos  from "@/components/sections/customer-logos"
import  PortfolioShowcase  from "@/components/sections/portfolio-showcase"
import { HowWeBuild } from "@/components/sections/how-we-build"
import  WhyChooseUs  from "@/components/sections/why-choose-us"
import { Testimonials } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { FAQ } from "@/components/sections/faq"
import ContactFormDemo from "@/components/sections/contactform"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-28 md:pt-32 pb-20 md:pb-8">
          <HeroBanner />
          <Partners />
          <AboutSection />
          <PremiumServices />
          <CustomerLogos />
          <PortfolioShowcase />
          <HowWeBuild />
          <WhyChooseUs />
          <Testimonials />
          <CTASection />
          <FAQ />
          <ContactFormDemo />
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
      <ChatbotWidget />
    </>
  )
}
