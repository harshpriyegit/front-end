"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      {isVisible && (
        <a
          href="https://wa.me/918810550522"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-30 group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-glow"></div>
            <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer animate-float">
              <MessageCircle size={28} className="text-white" />
            </div>
          </div>
        </a>
      )}
    </>
  )
}
