"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  serviceTitle: string
  ctaText: string
}

export function BookingModal({ isOpen, onClose, serviceTitle, ctaText }: BookingModalProps) {
  const [email, setEmail] = useState("")
  const [step, setStep] = useState<"email" | "calendly">("email")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call to save email
    await new Promise((resolve) => setTimeout(resolve, 800))

    setStep("calendly")
    setIsSubmitting(false)
  }

  const handleClose = () => {
    setStep("email")
    setEmail("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] p-4 sm:p-6">
        {step === "email" ? (
          <>
            <DialogHeader>
              <DialogTitle>Book a Call About {serviceTitle}</DialogTitle>
              <DialogDescription>
                Enter your email to schedule a consultation with our team.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitEmail} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base"
                />
              </div>
              <DialogFooter className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="w-full sm:w-auto h-12 text-base"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto h-12 text-base">
                  {isSubmitting ? "Processing..." : "Continue to Calendar"}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Schedule Your Consultation</DialogTitle>
              <DialogDescription>Choose a time that works for you.</DialogDescription>
            </DialogHeader>
            <div className="h-[500px] -mx-4 sm:-mx-6">
              {/* Calendly inline widget */}
              <div
                className="calendly-inline-widget w-full h-full"
                data-url="https://calendly.com/nativeai/30min?hide_gdpr_banner=1"
              ></div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
