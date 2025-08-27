"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Mail, Phone, Building, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    preferredDate: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        toast.success("Consultation request sent successfully! Check your email for confirmation.")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          preferredDate: "",
          message: "",
        })
      } else {
        toast.error(result.error || "Failed to send consultation request. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-2">Request Sent!</h2>
        <p className="text-white/70 mb-6">
          Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="ghost"
          className="bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/[0.20] backdrop-blur-xl transition-all duration-300"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Book a Consultation</h2>
        <p className="text-white/70">Let's discuss how we can transform your business</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white/90 flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/90 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white/90 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-white/90 flex items-center gap-2">
              <Building className="w-4 h-4" />
              Company Name
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
              placeholder="Enter your company name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="service" className="text-white/90">
            Service Interest
          </Label>
          <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
            <SelectTrigger className="bg-white/5 border-white/20 text-white">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ai-automation">AI Automation</SelectItem>
              <SelectItem value="it-support">IT Support</SelectItem>
              <SelectItem value="custom-solutions">Custom Solutions</SelectItem>
              <SelectItem value="business-analytics">Business Analytics</SelectItem>
              <SelectItem value="process-automation">Process Automation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredDate" className="text-white/90 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Preferred Date
          </Label>
          <Input
            id="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="bg-white/5 border-white/20 text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-white/90">
            Project Details
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 min-h-[100px]"
            placeholder="Tell us about your project and requirements..."
          />
        </div>

        <Button
          type="submit"
          variant="ghost"
          disabled={isSubmitting}
          className="w-full bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:border-white/40 shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20 font-semibold py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending Request...
            </>
          ) : (
            <>
              <Clock className="w-4 h-4 mr-2" />
              Schedule Consultation
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
