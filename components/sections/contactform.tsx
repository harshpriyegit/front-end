"use client"

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Users, Target, Globe, ArrowRight, Loader2, Send, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, CheckCircle } from 'lucide-react';

// Main Contact Section Component (for page)
const ContactSection = () => {
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-br from-purple-100 to-blue-100 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactFormContent />
      </div>
    </div>
  );
};

// Popup Form Component with trigger prop
export const PopupForm = ({ trigger }: { trigger: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className="absolute inset-0"
        onClick={() => setIsOpen(false)}
      />
      
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto z-10">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>
        
        <ContactFormContent onSuccess={() => setIsOpen(false)} />
      </div>
    </div>
  ) : null;

  return (
    <>
      {React.cloneElement(trigger as React.ReactElement<any>, {
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          setIsOpen(true);
        }
      })}

      {mounted && typeof document !== 'undefined' && createPortal(
        modalContent,
        document.body
      )}
    </>
  );
};

// Success Modal Component
const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform animate-bounce">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// Shared Form Content Component
const ContactFormContent = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91',
    country: '',
    service: '',
    description: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Services",
    "E-commerce Solutions",
    "Cloud Services",
    "Consulting",
    "Other"
  ];

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "India",
    "Germany",
    "France",
    "Japan",
    "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    
    if (!formData.country) {
      newErrors.country = "Please select a country";
    }
    
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }

      const data = await response.json();
      console.log('Success:', data);

      // Show success modal
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        countryCode: '+91',
        country: '',
        service: '',
        description: ''
      });
      
      // Call onSuccess callback after a delay
      setTimeout(() => {
        onSuccess?.();
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Form */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Let's talk</h2>
              <p className="text-gray-600 leading-relaxed">
                To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.
              </p>
            </div>

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                {submitError}
              </div>
            )}

            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                    errors.fullName ? "border-red-500" : "border-transparent"
                  } focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
              </div>

              {/* Phone and Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                      errors.phone ? "border-red-500" : "border-transparent"
                    } focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                      errors.email ? "border-red-500" : "border-transparent"
                    } focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              {/* Country and Service Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                      errors.country ? "border-red-500" : "border-transparent"
                    } focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all cursor-pointer`}
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                      errors.service ? "border-red-500" : "border-transparent"
                    } focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all cursor-pointer`}
                  >
                    <option value="">Select Service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-red-500">{errors.service}</p>}
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                    errors.description ? "border-red-500" : "border-transparent"
                  } focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none`}
                  placeholder="Type something if you want..."
                />
                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 btn-primary rounded-full  hover:from-purple-700 hover:to-indigo-700 focus:ring-4 focus:ring-purple-300 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side - Contact Info & Illustration */}
          <div className="relative bg-secondary p-8 md:p-12 text-white overflow-hidden">
            {/* Decorative Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Illustration */}
              <div className="mb-12 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-white/20 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-center">
                    <div className="relative">
                      {/* Email Icon */}
                      <div className="w-40 h-32 bg-black/50 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <Mail size={48} className="text-white relative z-10" />
                        <div className="absolute inset-0 bg-white/10" />
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
                      <div className="absolute top-1/2 -right-8 w-6 h-6 bg-cyan-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/20 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-white/80 text-sm">Tilak Nagr</p>
                    <p className="text-white/80 text-sm">New Delhi,India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/20 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/80 text-sm">+91 8810550522</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-white/20 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80 text-sm">info@digitrixsolutions.in</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <p className="font-medium mb-4">Follow Us</p>
                <div className="flex gap-3">
                  
                  
                  <a
                    href="https://www.linkedin.com/company/digitrix-soln/posts/?feedView=all"
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/digitrix.solutions/"
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
};

// Example usage component with demo sections
export const ContactExample = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ContactExample;