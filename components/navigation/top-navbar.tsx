"use client"
import Link from "next/link"
import { Mail, Phone, MessageCircle, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { label: "Web Development", href: "/web-development" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Production", href: "/production" },
  { label: "About Us", href: "/about" }
]

export function TopNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Contact Bar - Hides on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
          scrolled
            ? "translate-y-[-100%] opacity-0"
            : "translate-y-0 opacity-100"
        } bg-gradient-to-b from-background to-transparent`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 overflow-x-hidden">
          <div className="flex items-center justify-between">
            {/* Contact Info */}
            <div className="flex items-center gap-3 md:gap-6">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <Phone size={16} />
                <span className="hidden md:inline">+91 8810550522</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <Phone size={16} />
                <span className="hidden md:inline">+91 7294969479</span>
              </a>
              <a
                href="mailto:info@digitrix.com"
                className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <Mail size={16} />
                <span className="hidden md:inline">info@digitrixsolutions.in</span>
              </a>
            </div>

            {/* Right Side - WhatsApp + Mobile Menu */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/918810550522"
                className="flex items-center gap-1 md:gap-2 text-primary/80 hover:text-primary transition-all duration-300 hover:scale-110 text-xs md:text-sm"
              >
                <MessageCircle size={16} />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              {/* Mobile Menu Toggle */}
              
            </div>
          </div>

          
        </div>
      </div>

      {/* Desktop Navigation Bar - Shows on scroll */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="hidden md:flex backdrop-blur-xl bg-background/95 border-b border-primary/10 shadow-lg rounded-2xl px-6 py-3 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg shadow-primary/30">
                <span className="text-background text-xs font-bold">DX</span>
              </div>
              <span className="text-foreground font-bold">Digitrix Solutions</span>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative whitespace-nowrap px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full scale-x-0 group-hover:scale-x-75 transition-transform duration-300" />
                </Link>
              ))}
            </div>

            {/* Contact Actions */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all"
              >
                <Phone size={16} />
              </a>
              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all duration-300"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}