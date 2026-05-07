"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Web Development", href: "/web-development" },
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "Production", href: "/production" },
  { label: "About Us", href: "/about" },
]

export function BottomNavbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Move navbar to top when scrolled down past 100px
      if (currentScrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav 
      className={`fixed left-0 right-0 z-40 transition-all duration-500 overflow-hidden ${
        scrolled ? "top-0" : "top-14 md:top-16"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 overflow-x-hidden">
        <div className="backdrop-blur-xl bg-card  rounded-2xl shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
          <div className="px-3 md:px-6 py-3">
            <div className="flex items-center justify-between gap-2">
              {/* Logo */}
              <Link
                href="/"
                className=" flex items-center gap-2 group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-40 h-17  overflow-hidden">
                  <img 
                    src="/logo-digitrix.png" 
                    alt="Digitrix Solutions" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>


              {/* Desktop Navigation Items */}
              <div className="hidden md:flex flex-1 items-center gap-1 justify-center">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative whitespace-nowrap px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                        isActive ? "text-primary" : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-75"
                        }`}
                      />
                    </Link>
                  )
                })}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-border/30 animate-fade-in">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive 
                            ? "text-primary bg-primary/10" 
                            : "text-muted-foreground hover:text-primary hover:bg-card/50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}