"use client"

import type React from "react"

import { useState } from "react"
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

  // Define services with themed CTAs
  const services: Service[] = [
    {
      id: "custom-ai",
      title: "Custom AI Implementations",
      description:
        "We design and develop bespoke AI solutions tailored to your specific business needs. From intelligent AI Agents and Automations to sophisticated Voice Agents and Chatbots, we create systems that enhance efficiency and customer engagement.",
      bulletPoints: [
        "AI-powered chatbots and virtual assistants",
        "Custom language models fine-tuned to your domain",
        "Seamless integration with existing systems",
      ],
      icon: <Zap className="h-6 w-6 text-nativeOrange" />,
      ctaText: "Book a Call",
      ctaTheme: "default",
    },
    {
      id: "consulting",
      title: "Consulting & Coaching",
      description:
        "Our expert consultants provide strategic insights to help you navigate the AI landscape. We identify opportunities for operational improvements, cost savings, and competitive advantages through thoughtful AI integration.",
      bulletPoints: [
        "AI readiness assessment and gap analysis",
        "Strategic roadmap development",
        "ROI-focused implementation planning",
      ],
      icon: <Brain className="h-6 w-6 text-nativeOrange" />,
      ctaText: "Book a Call",
      ctaTheme: "default",
    },
    {
      id: "training",
      title: "Team Trainings",
      description:
        "Empower your workforce with practical AI knowledge. Our training programs focus on upskilling staff, ensuring seamless AI adoption, and fostering a culture of innovation that prepares your organization for the future.",
      bulletPoints: [
        "Customized workshops for technical and non-technical teams",
        "Hands-on learning with real-world applications",
        "Ongoing support and knowledge resources",
      ],
      icon: <Users className="h-6 w-6 text-nativeOrange" />,
      ctaText: "Book a Call",
      ctaTheme: "default",
    },
    {
      id: "strategy",
      title: "AI Strategy & Roadmap",
      description:
        "We collaborate with your leadership team to develop comprehensive AI strategies and implementation roadmaps. Our approach ensures alignment with business objectives, prioritizes high-impact initiatives, and creates a clear path to AI maturity.",
      bulletPoints: [
        "Competitive analysis and market positioning",
        "Phased implementation planning",
        "Risk assessment and mitigation strategies",
      ],
      icon: <BarChart3 className="h-6 w-6 text-nativeOrange" />,
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
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-nativeCream">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-xl text-black">Native AI</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-sm font-medium text-black hover:text-nativeCyan">
              About
            </a>
            <a href="#services" className="text-sm font-medium text-black hover:text-nativeCyan">
              Services
            </a>
            <a href="#contact" className="text-sm font-medium text-black hover:text-nativeCyan">
              Contact
            </a>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <a href="#contact">Work With Us</a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <ChevronDown className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-nativeCyan/5 to-nativeGreen/5 -z-10"></div>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
                AI-Native Apps & Conversational Solutions
              </h1>
              <p className="text-lg md:text-xl text-black/80">
                Transforming businesses through Custom AI, Voice Agents, Chatbots, Consulting, and Team Trainings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">Work With Us</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-nativeOrange text-nativeOrange hover:bg-nativeOrange/10"
                >
                  <a href="#services">Explore Services</a>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="AI Innovation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md">
              <ChevronDown className="h-5 w-5 text-nativeOrange" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-black">About Our Agency</h2>
              <p className="text-lg text-black/80">
                Founded by AI specialists with a passion for innovation, our agency bridges the gap between cutting-edge
                AI technology and practical business applications. We recognized that while AI offers tremendous
                potential, many organizations struggle with implementation. Our mission is to demystify AI and create
                tailored solutions that drive real business value, enhance customer experiences, and optimize
                operations.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-black">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-nativeCream rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 bg-white rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
                  <p className="text-black/80 mb-4">{service.description}</p>

                  {/* Bullet Points */}
                  <ul className="mb-6 space-y-2">
                    {service.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-nativeGreen mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-black/90">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="default"
                    onClick={() => handleServiceClick(service)}
                    className="w-full py-6 text-base font-medium"
                    size="lg"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    {service.ctaText}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-black">Work With Us</h2>
              <div className="bg-nativeCream rounded-lg p-8 shadow-sm">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-black">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 rounded-md border border-nativeCream bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-black">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-md border border-nativeCream bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-black">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full p-3 rounded-md border border-nativeCream bg-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-black">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-3 rounded-md border border-nativeCream bg-white resize-none"
                      placeholder="Tell us about your project or inquiry"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Native AI</h3>
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
                  <a href="#contact" className="text-sm text-nativeCyan hover:text-nativeCyan/80">
                    Contact
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
          <a href="#contact">
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

