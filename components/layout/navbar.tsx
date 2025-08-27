"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/bloomintel-logo.webp" alt="BloomIntel Logo" width={32} height={32} className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">BloomIntel</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <div className="relative group">
                <button className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/services/ai-automation"
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-t-lg"
                  >
                    AI Automation
                  </Link>
                  <Link
                    href="/services/it-support"
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10"
                  >
                    IT Support
                  </Link>
                  <Link
                    href="/services/business-analytics"
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10"
                  >
                    Business Analytics
                  </Link>
                  <Link
                    href="/services/crm-systems"
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-b-lg"
                  >
                    CRM Systems
                  </Link>
                </div>
              </div>
              <Link
                href="/about"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/case-studies"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/careers"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-white/90 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => {
                const consultationSection = document.getElementById("consultation")
                if (consultationSection) {
                  consultationSection.scrollIntoView({ behavior: "smooth" })
                } else {
                  window.location.href = "mailto:contact@bloomintel.com?subject=Strategy Session Request"
                }
              }}
              className="bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:border-white/40 shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20 font-semibold"
            >
              Strategy Session
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-white/80">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/10 border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="space-y-1">
              <div className="text-white/70 px-3 py-2 text-sm font-medium">Services</div>
              <Link href="/services/ai-automation" className="text-white block px-6 py-2 text-sm">
                AI Automation
              </Link>
              <Link href="/services/it-support" className="text-white block px-6 py-2 text-sm">
                IT Support
              </Link>
              <Link href="/services/business-analytics" className="text-white block px-6 py-2 text-sm">
                Business Analytics
              </Link>
              <Link href="/services/crm-systems" className="text-white block px-6 py-2 text-sm">
                CRM Systems
              </Link>
            </div>
            <Link href="/about" className="text-white block px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link href="/case-studies" className="text-white block px-3 py-2 text-base font-medium">
              Case Studies
            </Link>
            <Link href="/careers" className="text-white block px-3 py-2 text-base font-medium">
              Careers
            </Link>
            <Link href="/contact" className="text-white block px-3 py-2 text-base font-medium">
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-white/20">
              <Button
                variant="ghost"
                onClick={() => {
                  setIsOpen(false) // Close mobile menu
                  const consultationSection = document.getElementById("consultation")
                  if (consultationSection) {
                    consultationSection.scrollIntoView({ behavior: "smooth" })
                  } else {
                    window.location.href = "mailto:contact@bloomintel.com?subject=Strategy Session Request"
                  }
                }}
                className="bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:border-white/40 shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20 font-semibold w-full"
              >
                Strategy Session
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
