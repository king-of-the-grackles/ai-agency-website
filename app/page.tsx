"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  Mail,
  Zap,
  Brain,
  Users,
  BarChart3,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  CheckCircle2,
  Rocket,
  Telescope,
  Compass,
} from "lucide-react"
import Image from "next/image"

// Define service types for type safety
type Service = {
  id: string
  title: string
  description: string
  bulletPoints: string[]
  icon: React.ReactNode
  ctaText: string
  ctaTheme: "default" | "outline" | "secondary" | "destructive"
}

export default function Home() {
  // Calendar functionality is handled directly in the button click handlers
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  function handleScroll(id: string) {
    // Get the element by ID
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll with proper offset
      const yOffset = window.innerWidth < 768 ? -70 : -80; // Mobile vs desktop offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    } else {
      // Fallback to simple anchor navigation
      window.location.href = `#${id}`;
    }
    
    setMobileMenuOpen(false); // Close menu after clicking a link
  }

  // Define services with themed CTAs
  const services: Service[] = [
    {
      id: "custom-ai",
      title: "AI Prototype Design & Implementation",
      description:
        "Turn your product vision into a working AI prototype in weeks, not months. We build focused solutions that validate core assumptions, generate user feedback, and create scalable foundations for future growth.",
      bulletPoints: [
        "Rapid AI concept validation with minimal investment",
        "Custom AI solution development tailored to your specific use case",
        "Integration planning with your existing product architecture",
        "User testing framework to gather actionable feedback",
        "Technical implementation with scalability in mind",
      ],
      icon: <Zap className="h-7 w-7 text-black" />,
      ctaText: "Book a Discovery Call",
      ctaTheme: "default",
    },
    {
      id: "consulting",
      title: "AI Strategy Consulting",
      description:
        "Advance your AI product vision with strategic guidance that cuts through complexity. We help founders and product teams identify opportunities and implement features that create genuine competitive advantage.",
      bulletPoints: [
        "Clear-eyed assessment of where AI can actually add business and customer value",
        "Customer journey mapping and AI roadmap development",
        "Hands-on assistance with prompt engineering and conversational design",
        "Competitive analysis and differentiation strategy",
        "What other challenges can we solve for you?",
      ],
      icon: <Brain className="h-7 w-7 text-black" />,
      ctaText: "Book a Discovery Call",
      ctaTheme: "default",
    },
    {
      id: "training",
      title: "AI-First Product Ops Workshop",
      description:
        "Reimagine your product operations with an AI-first approach. Our training equips teams to integrate AI throughout their workflow—automating repetitive tasks, enhancing research, and improving prioritization—allowing your team to focus on high-leverage activities that directly impact growth.",
      bulletPoints: [
        "Tailored AI workshops addressing your team's unique operational bottlenecks",
        "Rapid prototyping approaches using AI coding and design tools",
        "Prompt engineering fundamentals for effective AI tool utilization",
        "Using AI tools to uncover hidden opportunities in customer feedback",
      ],
      icon: <Users className="h-7 w-7 text-black" />,
      ctaText: "Book a Discovery Call",
      ctaTheme: "default",
    },
  ]

  const handleServiceClick = (service: Service) => {
    // @ts-ignore
    window.Calendly?.initPopupWidget({
      url: 'https://calendly.com/chris_ivester/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1'
    });
    return false;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl text-black flex items-center">
            <span className="w-10 h-10 flex items-center justify-center bg-nativeCream rounded-lg mr-3 shadow-sm">
              <span className="text-xl">🌱</span>
            </span>
            Native AI
          </div>
          <nav className="hidden md:flex space-x-6">
            <a 
              href="#why-us"
              className="text-sm font-medium text-black hover:text-nativeCyan bg-transparent border-none cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("why-us");
              }}
            >
              About
            </a>
            <a 
              href="#services"
              className="text-sm font-medium text-black hover:text-nativeCyan bg-transparent border-none cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("services");
              }}
            >
              Services
            </a>
            <a 
              href="#journey"
              className="text-sm font-medium text-black hover:text-nativeCyan bg-transparent border-none cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("journey");
              }}
            >
              Journey
            </a>
          </nav>
          <Button 
            size="sm" 
            className="hidden md:flex"
            onClick={() => {
              // @ts-ignore
              window.Calendly?.initPopupWidget({
                url: 'https://calendly.com/chris_ivester/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1'
              });
              return false;
            }}
          >
            Work With Us
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-180' : ''}`} />
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-3 px-4 flex flex-col space-y-4 bg-white">
            <a 
              href="#why-us"
              className="text-sm font-medium text-black hover:text-nativeCyan py-1"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("why-us");
              }}
            >
              About
            </a>
            <a 
              href="#services"
              className="text-sm font-medium text-black hover:text-nativeCyan py-1"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("services");
              }}
            >
              Services
            </a>
            <a 
              href="#journey"
              className="text-sm font-medium text-black hover:text-nativeCyan py-1"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("journey");
              }}
            >
              Journey
            </a>
            <Button 
              size="sm" 
              className="w-full justify-center mt-2"
              onClick={() => {
                // @ts-ignore
                window.Calendly?.initPopupWidget({
                  url: 'https://calendly.com/chris_ivester/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1'
                });
                setMobileMenuOpen(false);
                return false;
              }}
            >
              Work With Us
            </Button>
          </div>
        </div>
        
        <div className="h-[1px] bg-black"></div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 md:py-36 relative overflow-visible section-hero" style={{ userSelect: 'text' }}>
          <div className="wave-container pointer-events-none">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center pt-8 pb-12" style={{ userSelect: 'text' }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black" style={{ userSelect: 'text' }}>
                Become an <span className="text-gradient" style={{ userSelect: 'text' }}>AI-First</span> Company
              </h1>
              <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto" style={{ userSelect: 'text' }}>
                Launch AI-native apps and human-centered conversational experiences that solve meaningful customer problems and transform how your team works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ userSelect: 'none' }}>
                <Button 
                  size="lg" 
                  className="shadow-lg cursor-pointer"
                  onClick={() => {
                    // @ts-ignore
                    window.Calendly?.initPopupWidget({
                      url: 'https://calendly.com/chris_ivester/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1'
                    });
                    return false;
                  }}
                >
                  Book a Discovery Call
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-black text-black hover:bg-black/10 cursor-pointer"
                  asChild
                >
                  <a href="#services">Explore Services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider"></div>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-20 relative section-why-us">
          <div className="absolute inset-0 bg-pattern-dots opacity-15"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black section-title mb-6">
              Solve the AI Product Puzzle
              </h2>
              <p className="mt-4 text-lg text-black/80 max-w-2xl mx-auto">
              We address the fundamental challenges that derail most AI initiatives: validating real market needs, reducing time-to-launch, and navigating complex technology decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-nativeCream">
                <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center mb-4 mx-auto border-2 border-black">
                  <Telescope className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center">Turn Vision Into Traction</h3>
                <p className="text-black/80 text-center">
                Transform your concept into a product users love. We validate core assumptions through targeted discovery, focus development on high-impact features, and build solutions that drive early adoption.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-nativeCream">
                <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center mb-4 mx-auto border-2 border-black">
                  <Rocket className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center">Launch in 30 Days, Not Months</h3>
                <p className="text-black/80 text-center">
                Get a functional prototype into users' hands in just 30 days. Our AI-augmented development approach compresses the build cycle, delivering real feedback faster and preserving runway for critical iterations while competitors are still building.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-nativeCream">
                <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center mb-4 mx-auto border-2 border-black">
                  <Compass className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center">Demystifying Your AI Tech Stack</h3>
                <p className="text-black/80 text-center">
                Navigate the complex landscape of AI tools with confidence. We cut through the noise of emerging frameworks to design and implement a tailored tech stack that aligns with your product vision, user needs, and scalability requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider-reverse"></div>

        {/* Services Section */}
        <section id="services" className="py-20 relative section-services">
          <div className="absolute inset-0 bg-pattern-dots opacity-15"></div>
          <div className="container relative mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black section-title mb-6">
              Navigate AI with Confidence
              </h2>
              <p className="mt-4 text-lg text-black/80 max-w-2xl mx-auto">
                Accelerate product decisions with focused prototype development, strategic AI consulting, and hands-on training.
              </p>
            </div>
            <div className="grid gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg p-8 shadow-md border border-nativeCream flex flex-col h-full"
                >
                  <div className="flex items-center mb-3">
                    <div className="h-14 w-14 bg-white rounded-lg flex items-center justify-center mr-3 border-2 border-black shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-black">{service.title}</h3>
                  </div>
                  <p className="text-black/80 mb-4 text-left">{service.description}</p>
                  
                  {/* Divider */}
                  <div className="h-px bg-gray-200 my-4"></div>

                  {/* Bullet Points */}
                  <div className="flex-grow">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.bulletPoints.map((point, index) => (
                        <div 
                          key={index} 
                          className={`flex items-start ${
                            service.bulletPoints.length === 5 && index === 4 
                              ? 'md:col-span-2 max-w-md mx-auto' 
                              : ''
                          }`}
                        >
                          <CheckCircle2 className="h-5 w-5 text-nativeGreen mr-2.5 flex-shrink-0 mt-0.5" />
                          <span className="text-black/90">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-200 my-4"></div>

                  <div className="mt-4 flex justify-center">
                    <Button
                      variant="default"
                      onClick={() => handleServiceClick(service)}
                      className="px-10 py-6 text-base font-semibold shadow-md w-56 tracking-wide hover:scale-105 transition-transform duration-200 rounded-xl"
                      size="lg"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Calendar className="h-5 w-5" />
                        <span>{service.ctaText}</span>
                      </div>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider"></div>

        {/* Your Journey Section */}
        <section id="journey" className="py-16 md:py-20 relative section-journey" style={{ userSelect: 'text', pointerEvents: 'auto' }}>
          <div className="absolute inset-0 bg-pattern-dots opacity-15 pointer-events-none"></div>
          <div className="container mx-auto px-2 md:px-4">
            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-12 gap-5 items-center">
              <div className="space-y-4 md:col-span-5">
                <h2 className="text-3xl font-bold text-black section-title mb-3" style={{ userSelect: 'text' }}>
                  Native AI Journey
                </h2>
                <p className="text-lg text-black/80" style={{ userSelect: 'text' }}>
                  We follow a collaborative, iterative approach to deliver AI solutions that truly meet your business needs and drive measurable results.
                </p>
                <Button 
                  size="lg" 
                  className="shadow-lg mt-2 cursor-pointer px-8 py-6 text-base font-semibold tracking-wide hover:scale-105 transition-transform duration-200 rounded-xl w-64"
                  onClick={() => {
                    // @ts-ignore
                    window.Calendly?.initPopupWidget({
                      url: 'https://calendly.com/chris_ivester/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1'
                    });
                    return false;
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="h-5 w-5" />
                    <span>Book a Discovery Call</span>
                  </div>
                </Button>
              </div>
              <div className="relative w-full h-[400px] md:col-span-7 md:ml-auto md:max-w-2xl lg:max-w-3xl pointer-events-none">
                <Image
                  src="/native-ai-journey-final.svg"
                  alt="Native AI Journey"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 65vw, 55vw"
                />
              </div>
            </div>
            
            {/* Mobile layout with centered elements */}
            <div className="md:hidden space-y-3 px-2">
              <div className="text-center mb-4 mt-2">
                <h2 className="text-3xl font-bold text-black section-title mb-4" style={{ userSelect: 'text' }}>
                  Native AI Journey
                </h2>
              </div>
              
              <div className="relative w-full h-[320px] mx-auto mb-4 pointer-events-none" style={{ maxWidth: "100%" }}>
                <Image
                  src="/native-ai-journey-final.svg"
                  alt="Native AI Journey"
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
              </div>
              
              <p className="text-lg text-black/80 text-center px-3 mb-4" style={{ userSelect: 'text' }}>
                We follow a collaborative, iterative approach to deliver AI solutions that truly meet your business needs and drive measurable results.
              </p>
              
              <div className="flex justify-center mt-2 mb-2">
                <Button 
                  size="lg" 
                  className="shadow-lg cursor-pointer px-8 py-6 text-base font-semibold tracking-wide hover:scale-105 transition-transform duration-200 rounded-xl w-64"
                  onClick={() => {
                    // @ts-ignore
                    window.Calendly?.initPopupWidget({
                      url: 'https://calendly.com/chris_ivester/discovery_call?hide_event_type_details=1&hide_gdpr_banner=1'
                    });
                    return false;
                  }}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="h-5 w-5" />
                    <span>Book a Discovery Call</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider-reverse"></div>

        {/* About Section */}
        <section id="about" className="py-20 relative section-about">
          <div className="absolute inset-0 bg-wave-pattern opacity-25"></div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-black section-title mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-black/80 mt-6">
              We're dedicated to democratizing AI for forward-thinking businesses by bridging the gap between emerging technologies and practical applications. We build AI-native apps and human-centered conversational experiences that solve meaningful customer problems and transform how your team works. Our mission is to empower companies with the tools, strategies, and expertise needed to become truly AI-first.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-black py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="col-span-full md:col-span-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <span className="w-9 h-9 flex items-center justify-center bg-nativeCream rounded-lg mr-3 shadow-sm">
                  <span className="text-lg">🌱</span>
                </span>
                Native AI
              </h3>
              <p className="text-white/80 text-sm max-w-xs">Launch AI-native apps and human-centered conversational experiences that solve customer problems and transform your team.</p>
            </div>
            <div className="col-span-6 md:col-span-3 mt-6 md:mt-0">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#why-us" 
                    className="text-sm text-nativeCyan hover:text-nativeCyan/80"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("why-us");
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    className="text-sm text-nativeCyan hover:text-nativeCyan/80"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("services");
                    }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#journey" 
                    className="text-sm text-nativeCyan hover:text-nativeCyan/80"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("journey");
                    }}
                  >
                    Journey
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 md:col-span-3 mt-6 md:mt-0">
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-nativeCyan hover:text-nativeCyan/80">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-nativeCyan hover:text-nativeCyan/80">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-nativeCyan hover:text-nativeCyan/80">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="mailto:contact@thinknative.ai" className="text-nativeCyan hover:text-nativeCyan/80">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
            <p>© {new Date().getFullYear()} Native AI. All rights reserved.</p>
          </div>
        </div>
      </footer>


      {/* Calendly integration is now directly in buttons */}
    </div>
  )
}

