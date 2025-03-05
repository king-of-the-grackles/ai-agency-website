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
        <section className="py-10 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-nativeCyan/20"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6 md:hidden">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="AI Innovation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black text-center md:text-left">
                Become an AI-First Company
              </h1>
              <p className="text-lg md:text-xl text-black/80 text-center md:text-left">
                Launch AI-native apps and engaging conversational experiences that solve real-world customer problems and amplify your team's productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" asChild>
                  <a href="mailto:contact@thinknative.ai">Work With Us</a>
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
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden hidden md:block">
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
            <a href="#services" className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-md">
              <ChevronDown className="h-5 w-5 text-nativeOrange" />
            </a>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider"></div>

        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-nativeGreen/5"></div>
          <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black inline-block">
                Why Choose Native AI
                <div className="h-1 bg-nativeOrange w-full mt-2 rounded-full"></div>
              </h2>
              <p className="mt-4 text-lg text-black/80 max-w-2xl mx-auto">
                We help businesses leverage AI technology to solve real problems and create meaningful value.
              </p>
            </div>
            
            <div className="text-center mb-12">
              <Button size="lg" asChild className="px-8 shadow-lg hover:shadow-xl transition-shadow">
                <a href="#services">Discover Our Approach</a>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-nativeCream">
                <div className="h-12 w-12 bg-nativeCream rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Zap className="h-6 w-6 text-nativeOrange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center md:text-left">Expertise</h3>
                <p className="text-black/80 text-center md:text-left">
                  Deep technical knowledge and industry experience to deliver results that transform your business.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-nativeCream">
                <div className="h-12 w-12 bg-nativeCream rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Brain className="h-6 w-6 text-nativeOrange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center md:text-left">Innovation</h3>
                <p className="text-black/80 text-center md:text-left">
                  Cutting-edge solutions that keep you ahead of the competition in the rapidly evolving AI landscape.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-nativeCream">
                <div className="h-12 w-12 bg-nativeCream rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Users className="h-6 w-6 text-nativeOrange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black text-center md:text-left">Partnership</h3>
                <p className="text-black/80 text-center md:text-left">
                  We work alongside you to ensure long-term success and growth with sustainable AI solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider-reverse"></div>

        {/* Services Section */}
        <section id="services" className="py-20 relative">
          <div className="absolute inset-0 bg-nativeCyan/15"></div>
          <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
          <div className="container relative mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black inline-block">
                Our Services
                <div className="h-1 bg-nativeOrange w-full mt-2 rounded-full"></div>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-nativeCream"
                >
                  <div className="h-12 w-12 bg-nativeCream rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black text-center md:text-left">{service.title}</h3>
                  <p className="text-black/80 mb-5 text-center md:text-left">{service.description}</p>

                  {/* Bullet Points */}
                  <ul className="mb-6 space-y-3">
                    {service.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-nativeGreen mr-2.5 flex-shrink-0 mt-0.5" />
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

        {/* Section Divider */}
        <div className="section-divider"></div>

        {/* About Section */}
        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 bg-nativeCream/30"></div>
          <div className="absolute inset-0 bg-wave-pattern opacity-20"></div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-black inline-block mb-6">
                Our Mission
                <div className="h-1 bg-nativeOrange w-full mt-2 rounded-full"></div>
              </h2>
              <p className="text-lg text-black/80">
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

