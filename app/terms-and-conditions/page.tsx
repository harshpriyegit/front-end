import type { Metadata } from "next"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms and Conditions | Digitrix Solutions",
  description: "Terms and Conditions for Digitrix Solutions",
}

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-28 md:pt-32 pb-20 max-w-4xl mx-auto px-4">
          <h1 className="section-heading mb-12 mt-8">Terms and Conditions</h1>

          <div className="prose prose-invert max-w-none text-foreground">
            <p className="text-muted-foreground mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on
                Digitrix Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The materials on Digitrix Solutions' website are provided on an 'as is' basis. Digitrix Solutions makes
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-muted-foreground mb-4">
                In no event shall Digitrix Solutions or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground mb-4">
                The materials appearing on Digitrix Solutions' website could include technical, typographical, or
                photographic errors. Digitrix Solutions does not warrant that any of the materials on the website are
                accurate, complete, or current. We may make changes to the materials contained on the website at any
                time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Links</h2>
              <p className="text-muted-foreground mb-4">
                Digitrix Solutions has not reviewed all of the sites linked to its website and is not responsible for
                the contents of any such linked site. The inclusion of any link does not imply endorsement by Digitrix
                Solutions of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
              <p className="text-muted-foreground mb-4">
                Digitrix Solutions may revise these terms of service for the website at any time without notice. By
                using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
              <p className="text-foreground font-semibold">
                For any questions about these Terms and Conditions, please contact:
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
