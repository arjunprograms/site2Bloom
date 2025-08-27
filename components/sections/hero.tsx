"use client"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { ShootingStars } from "@/components/interactive/shooting-stars"
import { LightBeams } from "@/components/interactive/light-beams"
import { FuturisticGlobe } from "@/components/interactive/futuristic-globe"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      <ShootingStars />
      <LightBeams />
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <FuturisticGlobe />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Faded minimalistic text */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-light leading-tight">
                <span className="text-white/90 block">CUSTOM AI</span>
                <span className="text-white/70 block">SOLUTIONS</span>
                <span className="text-white/50 block">TO YOUR BUSINESS</span>
              </h1>
              <p className="text-lg text-white/60 max-w-md leading-relaxed font-light">
                Build AI that thinks like you do — automate judgment, decisions, and operations 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  const consultationSection = document.getElementById("consultation")
                  if (consultationSection) {
                    consultationSection.scrollIntoView({ behavior: "smooth" })
                  } else {
                    // Fallback to email if no consultation section exists
                    window.location.href = "mailto:contact@bloomintel.com?subject=Strategy Session Request"
                  }
                }}
                className="bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:border-white/40 shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20"
              >
                Strategy Session
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <GlassCard className="backdrop-blur-xl bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300">
            <h3 className="text-xl font-light text-white/90 mb-2">AI Automation</h3>
            <p className="text-white/60 font-light">Streamline workflows with intelligent automation</p>
          </GlassCard>
          <GlassCard className="backdrop-blur-xl bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300">
            <h3 className="text-xl font-light text-white/90 mb-2">IT Support</h3>
            <p className="text-white/60 font-light">24/7 technical support and infrastructure management</p>
          </GlassCard>
          <GlassCard className="backdrop-blur-xl bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300">
            <h3 className="text-xl font-light text-white/90 mb-2">Custom Solutions</h3>
            <p className="text-white/60 font-light">Tailored software built for your specific needs</p>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
