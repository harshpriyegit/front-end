"use client"

import Image from "next/image"

export function Partners() {
  const partners = [
    { name: "AJ Enterprises", logo: "/partner/ajenterprises.webp" },
    { name: "Eventure", logo: "/partner/eventurelogo.png" },
    { name: "YJ Solutions", logo: "/partner/yjsolutionlogo.png" },
  ]

  return (
    <section className="py-12 md:py-16 border-y border-border">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-center text-muted-foreground text-sm font-semibold mb-8 uppercase tracking-wider">
          Our Partners
        </h3>

        <div className="flex flex-wrap justify-center gap-7">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="w-60 px-6 py-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer"
            >
              <div className="relative w-full h-20 mb-2">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain  filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors text-center">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}