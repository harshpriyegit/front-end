"use client"

import React, { useState, useEffect } from 'react';
import { ExternalLink,ArrowRight, CheckCircle, XCircle, Code, Smartphone, Zap, Target, TrendingUp, Users, Layout, Globe } from 'lucide-react';
import Image from 'next/image';
import { Footer } from '@/components/footer';
import { WhatsAppWidget } from '@/components/interactive/whatsapp-widget';
import { ChatbotWidget } from '@/components/interactive/chatbot-widget';
import { Header } from '@/components/navigation/header';
import { PopupForm } from '@/components/sections/contactform';


const EngageHubCaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState<'before' | 'after'>('after');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const challenges = [
    { icon: XCircle, text: "Outdated or unclear website structure" },
    { icon: XCircle, text: "Not mobile-friendly" },
    { icon: XCircle, text: "Low engagement" },
    { icon: XCircle, text: "Needed modern student-focused design" },
    { icon: XCircle, text: "No strong SEO foundation" },
    { icon: XCircle, text: "Required scalable architecture" }
  ];

  const solutions = [
    { icon: CheckCircle, text: "Modern UI design tailored for education" },
    { icon: CheckCircle, text: "Built scalable website from scratch" },
    { icon: CheckCircle, text: "Fast, responsive layout for all devices" },
    { icon: CheckCircle, text: "SEO-optimized architecture & content structure" }
  ];

  const results = [
    { icon: TrendingUp, title: "Better SEO", desc: "Optimized structure for search visibility" },
    { icon: Smartphone, title: "Improved Mobile UX", desc: "Seamless experience across devices" },
    { icon: Zap, title: "Fast Performance", desc: "Optimized page load times" },
    { icon: Target, title: "Clear Navigation", desc: "Enhanced user journey & clarity" }
  ];

  const technologies = [
    { name: "React", color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", color: "from-blue-600 to-blue-700" },
    { name: "Tailwind CSS", color: "from-teal-500 to-cyan-600" },
    { name: "Vercel", color: "from-gray-800 to-black" },
    { name: "SEO Optimized", color: "from-green-500 to-emerald-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
        <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
          <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                Featured Case Study
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                EngageHub
              </h1>
              <p className="text-2xl text-gray-700 font-light">
                Complete Website Build for an Education Service Platform
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A clean, modern, responsive website designed to elevate EngageHub's digital presence with improved user experience and SEO performance.
              </p>
              <div className="flex flex-wrap gap-4">
                 <a 
                href="https://www.engagehub.me/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                View Live Site <ExternalLink size={18} />
              </a>
              <PopupForm
              trigger={
                <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all">
                  Start Your Project
                </button>
              }/>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative">
        <div className="relative transform rotate-3 transition-all duration-500 hover:rotate-0">
            <div className=" rounded-2xl shadow-2xl overflow-hidden border-8 border-gray-200">

            {/* Browser top bar */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-600 ml-2">
                engagehub.me
                </div>
            </div>

            {/* IMAGE ONLY */}
            <Image
                src="/case-study/engagehubhero.png"
                alt="EngageHub Website Screenshot"
                width={1200}
                height={800}
                className="object-cover"
                />



            </div>
        </div>
</div>

          </div>
        </div>
      </section>

      {/* Client Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-60 h-25 rounded-2xl overflow-hidden mb-6 relative">
                <Image
                    src="/case-study/engagehublogo.png"   // update your path
                    alt="EngageHub Logo"
                    fill
                    className="object-cover"
                />
                </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Client</p>
                  <p className="text-xl font-semibold text-gray-900">EngageHub</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Industry</p>
                  <p className="text-xl font-semibold text-gray-900">Education / EdTech</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Website</p>
                  <a href="https://engagehub.me" className="text-xl font-semibold text-indigo-600 hover:text-indigo-700">engagehub.me</a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Services Provided</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Web Development</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">UI/UX Design</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">SEO Setup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About EngageHub</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                EngageHub is an innovative education and learning-services platform dedicated to providing comprehensive educational services that go beyond traditional tutoring.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                They needed a modern, professional online presence that would reflect their commitment to quality education, build trust with students and parents, and provide an intuitive experience for visitors exploring their services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Challenge</h2>
            <p className="text-xl text-gray-300">What EngageHub was facing before the redesign</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1">
                <challenge.icon className="text-red-400 mb-4" size={32} />
                <p className="text-gray-100">{challenge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-xl text-gray-600">How we transformed EngageHub's digital presence</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <solution.icon className="text-green-600 mb-4" size={40} />
                <p className="text-lg text-gray-800 font-medium">{solution.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Transformation</h2>
            <p className="text-xl text-gray-600">Visual comparison of the redesign impact</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveSlide('before')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeSlide === 'before' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'}`}
            >
              Before
            </button>
            <button 
              onClick={() => setActiveSlide('after')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeSlide === 'after' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'}`}
            >
              After
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 ${activeSlide === 'before' ? 'ring-4 ring-indigo-600' : ''}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Before</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                <p className="text-gray-500 text-center px-4">Outdated structure, poor mobile experience, unclear navigation</p>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Confusing layout</li>
                <li>• Slow performance</li>
                <li>• No mobile optimization</li>
              </ul>
            </div>

            <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 ${activeSlide === 'after' ? 'ring-4 ring-indigo-600' : ''}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">After</h3>
              
               <div className="w-full h-65 mx-auto mb-2 relative rounded-2xl">
                <Image
                    src="/case-study/engagehubhero.png"  // Change path to your image
                    alt="EngageHub Icon"
                    fill
                    className="object-contain"
                />
                </div>

              <ul className="space-y-2 text-gray-600">
                <li>• Intuitive navigation</li>
                <li>• Lightning-fast performance</li>
                <li>• Fully responsive design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-4xl font-bold mb-4">Measurable Results</h2>
            <p className="text-xl ">The impact of our work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <result.icon size={48} className="mb-4 text-black" />
                <h3 className="text-2xl font-bold mb-2 text-black">{result.title}</h3>
                <p className="text-black">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies Used</h2>
            <p className="text-xl text-gray-400">Built with modern, powerful tools</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${tech.color} rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-sm bg-opacity-90`}>
                  <Code size={32} className="mx-auto mb-2 opacity-90" />
                  <p className="font-semibold text-sm">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white bg-opacity-40 backdrop-blur-xl rounded-3xl p-12 border border-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                EH
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">EngageHub Team</p>
                <p className="text-gray-600">Education Platform</p>
              </div>
            </div>
            <p className="text-xl text-gray-800 leading-relaxed italic">
              "The new website looks extremely professional and clearly represents our services. The user flow is smoother, and the layout is clean and modern. Amazing work!"
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Want a High-Quality Website Like EngageHub?</h2>
          <p className="text-2xl text-indigo-200 mb-12">
            Let's build something amazing for your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <PopupForm
                trigger={
            <button className="px-10 py-5 bg-white text-indigo-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2">
              Start Your Project <ArrowRight size={24} />
            </button>
                }/>
                <PopupForm
                trigger={
            <button className="px-10 py-5 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all">
              Book Free Consultation
            </button>
                }/>
          </div>
        </div>
      </section>
      <Footer />
          <WhatsAppWidget />
          <ChatbotWidget />
    </div>
    
    
  );
};

export default EngageHubCaseStudy;