import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/interactive/whatsapp-widget"
import { ChatbotWidget } from "@/components/interactive/chatbot-widget"
import { Testimonials } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { FAQ } from "@/components/sections/faq"
import { HeroBanner } from "./hero"
import { Partners } from "@/components/sections/partners"
import MarketingServices from "./services"
import { HowWeBuild } from "./how-we-produce"
import ContactExample from "@/components/sections/contactform"

export const metadata: Metadata = {
  title: "Production Services | Digitrix Solutions",
  description: "Professional video production, content creation, and media services.",
  keywords: "video production, content creation, photography, animation, post-production",
}

export default function Production() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-28 md:pt-32 pb-20 md:pb-8">
          <HeroBanner />
          <Partners />
          <HowWeBuild />
          <MarketingServices />
          <Testimonials />
          <CTASection />
          <ContactExample />
          <FAQ />
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
      <ChatbotWidget />
    </>
  )
}
