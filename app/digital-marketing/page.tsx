import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/interactive/whatsapp-widget"
import { ChatbotWidget } from "@/components/interactive/chatbot-widget"
import  MarketingServices  from "@/app/digital-marketing/marketing-services"
import  RecentProjects  from "@/app/digital-marketing/recent-projects"
import { PricingPlans } from "./pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta-section"
import { HeroBanner } from "./hero"
import { Partners } from "@/components/sections/partners"
import { HowWeBuild }   from "@/components/sections/how-we-build" 
import ContactExample from "@/components/sections/contactform"

export const metadata: Metadata = {
  title: "Digital Marketing Services | Digitrix Solutions",
  description:
    "Strategic digital marketing services including SEO, Google Ads, Meta Ads, LinkedIn Ads, and performance marketing.",
  keywords: "digital marketing, Google Ads, Meta Ads, LinkedIn Ads, SEO marketing, performance marketing, branding",
  openGraph: {
    title: "Digital Marketing Services | Digitrix Solutions",
    description: "Strategic digital marketing services for business growth",
  },
}

export default function DigitalMarketing() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-28 md:pt-32 pb-20 md:pb-8">
          <HeroBanner />
          <Partners />
          <HowWeBuild />
          <MarketingServices />
          <RecentProjects  />
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
