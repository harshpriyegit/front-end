"use client"

import { useState } from "react"
import { PopupForm } from "./contactform"

export default function CustomerLogos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)
  
  // Replace these with your actual client logos
  const clients = [
    { name: "AJ Enterprises", logo: "/partner/ajenterprises.webp" },
    { name: "Eventure", logo: "/partner/eventurelogo.png" },
    { name: "YJ solutions", logo: "/partner/yjsolutionlogo.png" },
    { name: "EngageHub", logo: "/partner/logoengage.png" },
    { name: "Codedge Academy", logo: "/partner/logocodedge.png" },
  ]

  // Create rows
  const row1 = [...clients, ...clients] // Duplicate for seamless loop
  const row2 = [...clients, ...clients]
  const row3 = [...clients, ...clients]

  const renderCard = (client: { name: string; logo: string }, idx: number, rowNum: number) => (
    <div
      key={`${rowNum}-${idx}`}
      className="flex-shrink-0 mx-4"
      onMouseEnter={() => {
        setHoveredIndex(idx)
        setHoveredRow(rowNum)
      }}
      onMouseLeave={() => {
        setHoveredIndex(null)
        setHoveredRow(null)
      }}
    >
      {/* Card Container */}
      <div className="group relative w-64 h-36">
        <div className={`
          relative w-full h-full bg-white rounded-3xl
          transition-all duration-500 ease-out
          ${hoveredIndex === idx && hoveredRow === rowNum 
            ? 'shadow-2xl scale-105 -translate-y-2' 
            : 'shadow-lg hover:shadow-xl'}
          cursor-pointer overflow-hidden
          flex items-center justify-center p-8
        `}>
          {/* Logo Image - Full bleed */}
          <img 
            src={client.logo}
            alt={client.name}
            className={`
              w-full h-full object-contain
              transition-all duration-500
              ${hoveredIndex === idx && hoveredRow === rowNum ? 'scale-110 grayscale-0' : 'scale-100 grayscale-0'}
            `}
            onError={(e) => {
              // Fallback to company name if image fails
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'text-2xl font-bold text-gray-400';
              fallback.textContent = client.name;
              target.parentElement?.appendChild(fallback);
            }}
          />

          {/* Subtle shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

          {/* Border glow on hover */}
          <div className={`
            absolute inset-0 rounded-3xl border-2 border-blue-400/0
            transition-all duration-500
            ${hoveredIndex === idx && hoveredRow === rowNum ? 'border-blue-400/50' : ''}
          `}></div>
        </div>

        {/* Subtle shadow */}
        <div className={`
          absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl -z-10
          transition-opacity duration-500
          ${hoveredIndex === idx && hoveredRow === rowNum ? 'opacity-100' : 'opacity-0'}
        `}></div>
      </div>
    </div>
  )

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
      </div>

      <div className="relative max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-20 px-4">
          <span className="text-sm font-semibold text-[#38728E] tracking-[0.2em] uppercase mb-4 block">
            TRUSTED BY INDUSTRY LEADERS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by the best
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies that trust us with their business
          </p>
        </div>

        {/* Row 1 - Scroll Right */}
        <div className="relative mb-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-right hover:animation-paused">
            {row1.map((client, idx) => renderCard(client, idx, 1))}
          </div>
        </div>

        {/* Row 2 - Scroll Left }
        <div className="relative mb-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-left hover:animation-paused">
            {row2.map((client, idx) => renderCard(client, idx, 2))}
          </div>
        </div>

        {/* Row 3 - Scroll Right }
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-right-slow hover:animation-paused">
            {row3.map((client, idx) => renderCard(client, idx, 3))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 px-4">
          <p className="text-gray-600 text-lg mb-6">
            Ready to join them?
          </p>
          <PopupForm
          trigger={
          <button className="group relative px-8 py-4 btn-primary rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10 flex items-center gap-2">
              Get Started Today
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          }/> 
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes scroll-right-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-right {
          animation: scroll-right 10s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 10s linear infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right-slow 10s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover,
        .animate-scroll-right-slow:hover {
          animation-play-state: paused;
        }

        .animation-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}