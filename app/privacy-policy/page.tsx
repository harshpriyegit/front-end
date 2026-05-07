import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Digitrix Solutions",
  description: "Privacy Policy for Digitrix Solutions",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-28 md:pt-32 pb-20 max-w-4xl mx-auto px-4">
          <h1 className="section-heading mb-12 mt-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none text-foreground">
            <p className="text-muted-foreground mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Digitrix Solutions ("we," "us," "our," or "Company") respects the privacy of our users ("user" or
                "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site
                includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Name and Email Address</li>
                <li>Phone Number</li>
                <li>Company Name and Industry</li>
                <li>IP Address and Browser Information</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Use of Your Information</h2>
              <p className="text-muted-foreground mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Create and manage your account</li>
                <li>Email you regarding your account or order</li>
                <li>Fulfill and send you information related to your purchase</li>
                <li>Generate a personal profile about you</li>
                <li>Increase the efficiency and operation of the Site</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Disclosure of Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>By Law or to Protect Rights</li>
                <li>Third-Party Service Providers</li>
                <li>Affiliates</li>
                <li>Business Transfers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Security of Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use administrative, technical, and physical security measures to protect your personal information.
                However, perfect security is impossible to guarantee.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <p className="text-foreground font-semibold">
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
