import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className=" items-center gap-2 mb-4">
              <div className=" items-center justify-center w-40 h-20 rounded-lg overflow-hidden">
                <img
                  src="/logo-digitrix.png"
                  alt="Digitrix Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-muted-foreground text-sm">
              Transforming businesses with innovative digital solutions and creative excellence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "Digital  Marketing", "Production"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+918810550522" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 8810550522
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+917294969479" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 7294969479
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@digitrixsolutions.in"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@digitrixsolutions.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Tilak Nagar, New Delhi, India - 110018</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/company/digitrix-soln/posts/?feedView=all" },
              { icon: Instagram, href: "https://www.instagram.com/digitrix.solutions/" },
            ].map((social, idx) => {
              const Icon = social.icon
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border hover:bg-primary hover:text-background hover:border-primary transition-all flex items-center justify-center"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/cookies-policy" className="hover:text-primary transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border text-muted-foreground text-sm">
          <p>&copy; 2025 Digitrix Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
