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
} from "lucide-react"
import Image from "next/image"
import { BookingModal } from "@/components/booking-modal"

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
  const [activeService, setActiveService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  function handleScroll(id: string) {
    console.log("Scrolling to:", id); // Add debugging
    const element = document.getElementById(id);
    console.log("Element found:", !!element); // Check if element exists
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to direct anchor navigation if element not found
      window.location.href = `#${id}`;
    }
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
      icon: <Zap className="h-6 w-6 text-nativeOrange" />,
      ctaText: "Book a Call",
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
      icon: <Brain className="h-6 w-6 text-nativeOrange" />,
      ctaText: "Book a Call",
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
      icon: <Users className="h-6 w-6 text-nativeOrange" />,
      ctaText: "Book a Call",
      ctaTheme: "default",
    },
  ]

  const handleServiceClick = (service: Service) => {
    setActiveService(service)
    setIsModalOpen(true)
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
            <button 
              onClick={() => handleScroll('about')}
              className="text-sm font-medium text-black hover:text-nativeCyan bg-transparent border-none cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => handleScroll('services')}
              className="text-sm font-medium text-black hover:text-nativeCyan bg-transparent border-none cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => handleScroll('process')}
              className="text-sm font-medium text-black hover:text-nativeCyan bg-transparent border-none cursor-pointer"
            >
              Process
            </button>
            <button 
              onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-sm font-medium text-black hover:text-nativeCyan bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
          </nav>
          <Button 
            size="sm" 
            className="hidden md:flex"
            onClick={() => {
              const emailLink = document.createElement('a');
              emailLink.href = 'mailto:contact@thinknative.ai';
              emailLink.click();
            }}
          >
            Work With Us
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <ChevronDown className="h-5 w-5" />
          </Button>
        </div>
        <div className="h-[1px] bg-black"></div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-10 md:py-16 relative overflow-hidden section-hero">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6 md:hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="AI Innovation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black text-center md:text-left">
                Become an <span className="text-gradient">AI-First</span> Company
              </h1>
              <p className="text-lg md:text-xl text-black/80 text-center md:text-left">
              Launch AI-native apps and human-centered conversational experiences that solve meaningful customer problems and transform how your team works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="shadow-lg"
                  onClick={() => {
                    const emailLink = document.createElement('a');
                    emailLink.href = 'mailto:contact@thinknative.ai';
                    emailLink.click();
                  }}
                >
                  Work With Us
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-black text-black hover:bg-black/10"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Force scroll to element
                    const element = document.getElementById('services');
                    if (element) {
                      // Try both methods
                      element.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => {
                        window.location.href = '#services';
                      }, 100);
                    } else {
                      window.location.href = '#services';
                    }
                  }}
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden hidden md:block shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="AI Innovation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Down arrow removed temporarily
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <a href="#services" className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md">
              <ChevronDown className="h-5 w-5 text-black" />
            </a>
          </div>
          */}
        </section>

        {/* Section Divider */}
        <div className="section-divider"></div>

        {/* Why Choose Us Section */}
        <section className="py-20 relative section-why-us">
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
                <div className="h-12 w-12 bg-nativeCream rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Zap className="h-6 w-6 text-nativeOrange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center md:text-left">Turn Vision Into Traction</h3>
                <p className="text-black/80 text-center md:text-left">
                Transform your concept into a product users love. We validate core assumptions through targeted discovery, focus development on high-impact features, and build solutions that drive early adoption.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-nativeCream">
                <div className="h-12 w-12 bg-nativeCream rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Brain className="h-6 w-6 text-nativeOrange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center md:text-left">Launch in 30 Days, Not Months</h3>
                <p className="text-black/80 text-center md:text-left">
                Get a functional prototype into users' hands in just 30 days. Our AI-augmented development approach compresses the build cycle, delivering real feedback faster and preserving runway for critical iterations while competitors are still building.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md border border-nativeCream">
                <div className="h-12 w-12 bg-nativeCream rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Users className="h-6 w-6 text-nativeOrange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center md:text-left">Demystifying Your AI Tech Stack</h3>
                <p className="text-black/80 text-center md:text-left">
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
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg p-6 shadow-md border border-nativeCream flex flex-col h-full"
                >
                  <div className="h-12 w-12 bg-nativeCream rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black text-center md:text-left">{service.title}</h3>
                  <p className="text-black/80 mb-5 text-center md:text-left">{service.description}</p>

                  {/* Bullet Points */}
                  <ul className="space-y-3 flex-grow">
                    {service.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-nativeGreen mr-2.5 flex-shrink-0 mt-0.5" />
                        <span className="text-black/90">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button
                      variant="default"
                      onClick={() => handleServiceClick(service)}
                      className="w-full py-6 text-base font-medium shadow-md"
                      size="lg"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      {service.ctaText}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider"></div>

        {/* Our Process Section */}
        <section id="process" className="py-20 relative section-process">
          <div className="absolute inset-0 bg-pattern-dots opacity-15"></div>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black section-title mb-6">
                Our Process
              </h2>
              <p className="text-lg text-black/80">
                We follow a collaborative, iterative approach to deliver AI solutions that truly meet your business needs and drive measurable results.
              </p>
              <Button size="lg" asChild className="shadow-lg">
                <a href="#contact">Learn More</a>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Our Process"
                fill
                className="object-cover"
                priority
              />
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
              Native AI seeks to revolutionize human-computer interaction by crafting intuitive, powerful, and delightful AI-native experiences. We empower businesses to seamlessly integrate cutting-edge AI solutions—reshaping how brands connect, automate, and innovate.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <span className="w-9 h-9 flex items-center justify-center bg-nativeCream rounded-lg mr-3 shadow-sm">
                  <span className="text-lg">🌱</span>
                </span>
                Native AI
              </h3>
              <p className="text-white/80 text-sm">Transforming businesses through innovative AI solutions.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-sm text-nativeCyan hover:text-nativeCyan/80">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-nativeCyan hover:text-nativeCyan/80">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-sm text-nativeCyan hover:text-nativeCyan/80">
                    Process
                  </a>
                </li>
              </ul>
            </div>
            <div>
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
            <div className="mt-2 space-x-4">
              <a href="#" className="text-nativeCyan hover:text-nativeCyan/80">
                Privacy Policy
              </a>
              <a href="#" className="text-nativeCyan hover:text-nativeCyan/80">
                Terms of Service
              </a>
            </div>
            <div className="mt-2">
              <a href="https://thinknative.ai" className="text-nativeCyan hover:text-nativeCyan/80">
                thinknative.ai
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA for mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Button asChild size="lg" className="rounded-full shadow-lg">
          <a href="mailto:contact@thinknative.ai">
            <Mail className="h-5 w-5 mr-2" />
            Contact Us
          </a>
        </Button>
      </div>

      {/* Booking Modal */}
      {activeService && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceTitle={activeService.title}
          ctaText={activeService.ctaText}
        />
      )}
    </div>
  )
}

