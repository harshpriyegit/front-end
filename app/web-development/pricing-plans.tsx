"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { PopupForm } from "@/components/sections/contactform"

export function PricingPlans() {
  const plans = [
    {
      name: "Starter",
      price: "₹25,000",
      description: "Perfect for small businesses",
      features: ["5 Pages", "Mobile Responsive", "Basic SEO", "Contact Form", "30 Days Support"],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹50,000",
      description: "For growing businesses",
      features: ["Up to 15 Pages", "E-Commerce Ready", "Advanced SEO", "Analytics Integration", "90 Days Support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Unlimited Pages", "Custom Features", "Full SEO Suite", "API Integration", "1 Year Support"],
      popular: false,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading mb-4">Transparent Pricing</h2>
          <p className="section-subheading max-w-2xl mx-auto">Flexible packages tailored to your budget and needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border transition-all duration-300 p-8 group animate-slide-up ${
                plan.popular
                  ? "border-primary bg-gradient-to-br from-primary/10 to-secondary/10 hover:shadow-2xl hover:shadow-primary/30 md:scale-105"
                  : "border-border bg-muted hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              }`}
              style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-background text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/project</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>


              <PopupForm
              trigger={
              <Link
                href="#"
                className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular ? "btn-primary" : "btn-outline"
                }`}
              >
                Get Started
              </Link>
              }/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
