"use client"

import { useEffect, useState } from "react"
import { MessageSquare, X } from "lucide-react"
import type { FormEvent, ChangeEvent } from "react"

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsOpen(false)
    alert("Thank you! Our expert will contact you shortly.")
  }

  if (!isVisible) return null

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="fixed bottom-20 md:bottom-8 left-4 md:left-8 z-30 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-glow"></div>
            <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer animate-float">
              <MessageSquare size={28} className="text-background" />
            </div>
          </div>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-20 md:bottom-8 left-4 md:left-8 z-30 w-80 bg-muted rounded-2xl shadow-2xl border border-border animate-slide-up">
          <div className="bg-primary text-background p-4 rounded-t-2xl flex items-center justify-between">
            <h3 className="font-bold">Chat with Us</h3>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-75 transition-opacity">
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-background text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
            />
            <textarea
              name="message"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 bg-background text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-2 bg-primary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get Expert Advice
            </button>
          </form>
        </div>
      )}
    </>
  )
}
