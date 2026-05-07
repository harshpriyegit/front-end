import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best Website Development | Result-Driven Marketing Agency Helping Businesses Grow | SEO, Branding & Social Media Experts in Delhi NCR ",
  description:
    "Digitrix Solutions – Leading digital marketing & website development company in Delhi. We build websites, SEO, branding & growth strategies that drive real business results.",
  keywords: "web development, digital marketing, content production, website design, SEO, digital marketing agency , website designer, marketing agency, advertising agency, software company,digital marketing services in delhi, website development company delhi, SEO services in delhi, social media management, branding and ui/ux services, free audit, best digital marketing company in delhi, best website development company in delhi, result-driven marketing agency, helping business grow",
  generator: "Digitrix Solutions",
  
   icons: {
  icon: "/favicondigitrix.png",
  shortcut: "/favicondigitrix.png",
  apple: "/favicondigitrix.png",
},


  openGraph: {
    title: "Best Website Development | Result-Driven Marketing Agency Helping Businesses Grow | SEO, Branding & Social Media Experts in Delhi NCR ",
    description: "Digitrix Solutions – Leading digital marketing & website development company in Delhi. We build websites, SEO, branding & growth strategies that drive real business results.",
    type: "website",
    locale: "en_IN",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0e27",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="_MzepDzEflIapc9d1C7puxIdQIhIv1Fm0XWq3aQv4ZY" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digitrix Solutions",
              url: "https://digitrixsolutions.in",
              logo: "https://digitrixsolutions.in/fevicon.png",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} bg-background text-foreground antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
