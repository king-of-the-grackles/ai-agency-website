import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#E8F5E9"
}

export const metadata: Metadata = {
  title: {
    default: "Native AI | Become an AI-First Company",
    template: "%s | Native AI",
  },
  description: "Launch AI-native apps and human-centered conversational experiences that solve meaningful customer problems and transform how your team works.",
  generator: 'v0.dev',
  keywords: "AI-first company, AI product development, AI prototypes, AI strategy, conversational AI, AI solutions, product operations, AI consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: "Native AI" }],
  category: "AI Solutions",
  alternates: {
    canonical: "https://www.buildnative.ai",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.buildnative.ai',
    siteName: 'Native AI',
    title: 'Native AI | Become an AI-First Company',
    description: 'Launch AI-native apps and human-centered conversational experiences that solve meaningful customer problems and transform how your team works.',
    images: [
      {
        url: 'https://www.buildnative.ai/api/og-image',
        width: 1200,
        height: 630,
        alt: 'Native AI - Become an AI-First Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Native AI | Become an AI-First Company',
    description: 'Launch AI-native apps and human-centered conversational experiences that solve meaningful customer problems and transform how your team works.',
    images: ['https://www.buildnative.ai/api/og-image'],
    creator: '@NativeAI',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="color-scheme" content="light dark" />
        <meta name="rating" content="General" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}