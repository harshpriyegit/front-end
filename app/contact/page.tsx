import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/interactive/whatsapp-widget"
import { ChatbotWidget } from "@/components/interactive/chatbot-widget"
import { Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Digitrix Solutions",
  description: "Get in touch with Digitrix Solutions. We'd love to hear about your project.",
  keywords: "contact, support, consultation, inquiry",
}

export default function Contact() {
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
              <h1 className="section-heading mb-6">Get in Touch</h1>
              <p className="section-subheading max-w-2xl">
                Let's discuss your project and how we can help transform your business.
              </p>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="p-8 rounded-xl border border-border bg-muted hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group animate-slide-up">
                    <Phone size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>

                  <div
                    className="p-8 rounded-xl border border-border bg-muted hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group animate-slide-up"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <Mail size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a
                      href="mailto:info@digitrix.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@digitrix.com
                    </a>
                  </div>

                  <div
                    className="p-8 rounded-xl border border-border bg-muted hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group animate-slide-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <MapPin size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2">Office</h3>
                    <p className="text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>

                {/* Form */}
                <div
                  className="md:col-span-2 p-8 rounded-xl border border-border bg-muted animate-slide-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    />

                    <select className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors">
                      <option value="">Select Service</option>
                      <option value="web-dev">Web Development</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="production">Production</option>
                      <option value="other">Other</option>
                    </select>

                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    ></textarea>

                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
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
