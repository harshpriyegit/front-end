import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Cookies Policy | Digitrix Solutions",
  description: "Cookies Policy for Digitrix Solutions",
}

export default function CookiesPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-28 md:pt-32 pb-20 max-w-4xl mx-auto px-4">
          <h1 className="section-heading mb-12 mt-8">Cookies Policy</h1>

          <div className="prose prose-invert max-w-none text-foreground">
            <p className="text-muted-foreground mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">What are Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Cookies are small files of letters and numbers that are stored on your browser or the hard drive of your
                computer. They contain information about browsing habits.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Do We Use Cookies?</h2>
              <p className="text-muted-foreground mb-4">We use cookies for several reasons:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>To recognize you and your preferences</li>
                <li>To understand how you use our website</li>
                <li>To improve our website and services</li>
                <li>To analyze website traffic</li>
                <li>To provide personalized content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
              <p className="text-muted-foreground mb-4">We use the following types of cookies:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how visitors use our website
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> Used to display relevant advertising
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Remember your preferences
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Cookie Control</h2>
              <p className="text-muted-foreground mb-4">
                Most web browsers allow you to control cookies through their settings. You can typically find these
                settings in the Options or Preferences menu of your browser. Please note that disabling cookies may
                affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to external websites. These third parties may use cookies on our website,
                but we do not have control over these cookies. We recommend checking the privacy policy of these
                third-party websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-foreground font-semibold">
                For questions about this Cookies Policy, please contact:
                <br />
                Digitrix Solutions
                <br />
                Email: info@digitrix.com
                <br />
                Phone: +91 98765 43210
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
