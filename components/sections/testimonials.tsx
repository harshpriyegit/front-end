"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Google Reviews
  const googleReviews = [
    {
      name: "Dhruv Sharma",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Patel",
      text: "I got my company website rebuilt through Digitrix Solutions , I am genuinely impressed and honestly they seem like a solid choice. They handle everything websites, apps, marketing, the whole package. What I like most is their 24/7 support and straightforward process. If you need a reliable digital partner without the runaround, they’re worth considering.​​​​​​​​​​​​​​​​",
      rating: 5,
    },
    {
      name: "Aarti Shukla",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dubai",
      text: "Great experience with Digitrix Solutions. They understood our brand, improved our online presence, and delivered measurable results. Highly recommended!",
      rating: 5,
    },
    {
      name: "Akshat Kumar",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anurag",
      text: "Amazing digital marketing service! They delivered exactly what I needed and helped my business grow online.",
      rating: 5,
    },
    {
      name: "Sweksha sinha",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      text: "Outstanding quality and timely delivery. Their expertise in modern web technologies is impressive. Highly recommended!",
      rating: 5,
    },
    {
      name: "Vaidehi",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      text: "Professional and reliable team. Their website development service is top-notch — fast, clean, and totally customized.",
      rating: 5,
    },
    {
      name: "YASH JOLLY",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anurag",
      text: "Great team, good work ethic, on time delivery and reasonable charges.",
      rating: 5,
    },
    {
      name: "Shruti Mishra",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      text: "I appreciate their commitment to quality and would confidently recommend their services.",
      rating: 5,
    },
    {
      name: "Mohd Ali",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anurag",
      text: "One of the best tech solutions provider in Delhi.",
      rating: 5,
    },
    {
      name: "Kriti Ayush",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anurag",
      text: "Great service at minimum price ! Recommended 💯",
      rating: 5,
    },
  ]

  const itemsToShow = isMobile ? 1 : 3
  const maxSlideGoogle = Math.max(0, googleReviews.length - itemsToShow)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlideGoogle ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, maxSlideGoogle])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlideGoogle ? 0 : prev + 1))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlideGoogle : prev - 1))
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Google Reviews Section */}
        <div>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Google Reviews</h2>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">5.0</span>
            </div>
            <p className="text-muted-foreground">Powered by Google</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * (100 / itemsToShow)}%)` }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {googleReviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-1/3 flex-shrink-0 px-2 md:px-3"
                  >
                    <div className="bg-background rounded-2xl p-6 border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-12 h-12 rounded-full ring-2 ring-blue-500/20"
                          />
                          <div>
                            <h4 className="font-semibold text-foreground">{review.name}</h4>
                           {/*} <p className="text-sm text-muted-foreground">{review.role}</p>*/}
                          </div>
                        </div>
                        <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>

                      <div className="flex gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-foreground/80 leading-relaxed mb-4 flex-grow">{review.text}</p>

                    {/*}  <p className="text-xs text-muted-foreground">{review.timeAgo}</p>*/}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {googleReviews.length > itemsToShow && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-background border border-border rounded-full p-2 shadow-lg hover:bg-muted hover:border-blue-500/50 transition-all duration-300 z-10"
                  aria-label="Previous reviews"
                >
                  <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-background border border-border rounded-full p-2 shadow-lg hover:bg-muted hover:border-blue-500/50 transition-all duration-300 z-10"
                  aria-label="Next reviews"
                >
                  <ChevronRight size={20} className="md:w-6 md:h-6" />
                </button>
              </>
            )}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxSlideGoogle + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx)
                  setIsAutoPlaying(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-8 bg-blue-500" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://www.google.com/search?sca_esv=8dfe9edb86176f37&hl=en-IN&sxsrf=AE3TifM1FgoyuV6FiVvKWANfUFrwd_fLzA:1764788007714&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzZvpM6lmmCVJ_1VhQL1p0HLhWbbgB5nqpCbTjwlni955_ceULiSwND6bWjX0CJol3j1ST1Fe8q2REjRyuM7H-pTvdxMcnujWonD7oxdom1ATPxEUg%3D%3D&q=Digitrix+Solutions+Reviews&sa=X&ved=2ahUKEwiF4rbSi6KRAxX7yjgGHRbTAgwQ0bkNegQIHhAE&biw=1280&bih=585&dpr=1.5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-500 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 group"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Review us on Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}