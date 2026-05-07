"use client";

import { useState, useEffect } from "react";

export  function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    setIsVisible(true);

    // Auto-cycle through services
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 5);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const services = [
    { 
      name: "Web Development", 
      icon: "💻", 
      color: " from-cyan-500/20 to-blue-600/20",
      description: "Custom websites & web apps"
    },
    { 
      name: "Digital Marketing", 
      icon: "📈", 
      color: "from-purple-500/20 to-pink-600/20",
      description: "Growth-driven strategies"
    },
    { 
      name: "SEO Optimization", 
      icon: "🔍", 
      color: "from-green-500/20 to-emerald-600/20",
      description: "Search engine dominance"
    },
    { 
      name: "UI/UX Design", 
      icon: "🎨", 
      color: "from-cyan-500/20 to-blue-600/20",
      description: "Beautiful user experiences"
    },
    { 
      name: "Mobile Apps", 
      icon: "📱", 
      color: "from-amber-500/20 to-orange-600/20",
      description: "iOS & Android solutions"
    },
  ];



  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center py-20">
      {/* Dynamic Background Effects */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px, rgba(59,130,246,0.03), transparent 40%),
            radial-gradient(circle at ${100 - mousePosition.x * 0.3}px ${100 - mousePosition.y * 0.3}px, rgba(147,51,234,0.03), transparent 40%)
          `,
        }}
      />

      {/* Floating Background Elements /}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((el, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10 animate-pulse"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 12)}%`,
              animationDelay: el.delay,
              animationDuration: el.duration,
              transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px)`,
            }}
          >
            {el.icon}
          </div>
        ))}
      </div>*/}

      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <div className={`space-y-10 transform transition-all duration-1200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          
          {/* Header with Animated Underline */}
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              <span className="section-heading ">
                About Digitrix
              </span>
              
            </h2>
            
            {/* Floating Badge /}
            <div className="absolute -top-4 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg">
              Solutions ✨
            </div>*/}
          </div>

          {/* Main Description */}
          <div className="space-y-6">
            <p className="text-lg lg:text-xl section-subheading">
             
               Digitrix Solutions is a full-service digital agency focused on helping businesses succeed online We specialize in web development, digital marketing, SEO, UI/UX design, and mobile app solutions.
            </p>
            
           
            
            <p className="text-lg lg:text-xl section-subheading">
              With a team of creative and skilled professionals, 
              we deliver tailored strategies that drive growth
                enhance brand presence, and createlasting impact for our clients.
            </p>
          </div>

          {/* Interactive Services Tags */}
          <div className="flex flex-wrap gap-3 pt-2">
            {services.map((service, i) => (
              <div
                key={i}
                className={`group px-6 py-3 rounded-full cursor-pointer transition-all duration-500 hover:scale-110 hover:-translate-y-1
                           ${activeService === i 
                             ? `bg-gradient-to-r ${service.color} section-subheading shadow-xl transform scale-105` 
                             : 'bg-white/80 section-subheading hover:bg-white border border-slate-200 hover:border-slate-300'
                           }`}
                onMouseEnter={() => setActiveService(i)}
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${i * 100 + 800}ms`
                }}
              >
                <span className="text-lg mr-2">{service.icon}</span>
                <span className="font-semibold">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual Section */}
        <div className={`relative flex justify-center items-center transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          
          {/* Central Hub */}
          <div className="relative">
            {/* Main Central Circle */}
            <div className="w-48 h-48 bg-gradient-to-br from-white to-blue-50 rounded-full shadow-2xl border border-slate-200 flex items-center justify-center relative overflow-hidden group cursor-pointer">
              
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-spin" 
                   style={{ animation: 'spin 8s linear infinite' }} />
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white to-blue-50" />
              
              {/* Center Content */}
              <div className="relative z-10 text-center">
                <div className="mb-2 group-hover:scale-125 transition-transform duration-300">
                  <img 
                    src="/fevicon.png" 
                    alt="Digitrix Logo" 
                    className="w-full h-full mx-auto object-contain bg-transparent"
                  />
                </div>

              </div>


              {/* Pulsing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-30" />
            </div>

            {/* Orbiting Service Icons */}
            {services.map((service, i) => {
              const angle = (i * 72) - 90; // 360/5 = 72 degrees apart
              const radius = 140;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div
                  key={i}
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-125 hover:z-20
                             ${activeService === i 
                               ? `bg-gradient-to-r ${service.color} text-white shadow-xl scale-110` 
                               : 'bg-white text-slate-700 shadow-lg hover:shadow-xl border border-slate-200'
                             }`}
                  style={{
                    left: `calc(50% + ${x}px - 2rem)`,
                    top: `calc(50% + ${y}px - 2rem)`,
                    transform: `rotate(${scrollY * 0.2}deg)`,
                    animation: `orbit-${i} 20s linear infinite`,
                  }}
                  onMouseEnter={() => setActiveService(i)}
                >
                  <span className="text-2xl">{service.icon}</span>
                  
                  {/* Connection Line */}
                  
                </div>
              );
            })}

            {/* Service Description Popup */}
            <div className={`absolute top-full mt-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl border border-slate-200 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="text-center">
                <div className="text-lg font-bold text-slate-800 mb-1">
                  {services[activeService]?.name}
                </div>
                <div className="text-sm text-slate-600">
                  {services[activeService]?.description}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Achievement Badges /}
          <div className="absolute -top-8 -left-8 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce" 
               style={{ animationDelay: '1s' }}>
            Full-Service 🌟
          </div>
          
          <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce" 
               style={{ animationDelay: '2s' }}>
            Tailored Solutions 🎯
          </div> */}
        </div>
      </div>

      {/* Custom CSS for orbiting animation */}
      <style jsx>{`
        @keyframes orbit-0 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbit-1 { from { transform: rotate(72deg); } to { transform: rotate(432deg); } }
        @keyframes orbit-2 { from { transform: rotate(144deg); } to { transform: rotate(504deg); } }
        @keyframes orbit-3 { from { transform: rotate(216deg); } to { transform: rotate(576deg); } }
        @keyframes orbit-4 { from { transform: rotate(288deg); } to { transform: rotate(648deg); } }
      `}</style>
    </section>
  );
}