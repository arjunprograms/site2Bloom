"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Shield, Bot } from "lucide-react"

export default function ITSupportPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light leading-tight text-white mb-6 tracking-wide">
              AI-POWERED{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-400">
                IT SUPPORT
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Intelligent infrastructure management with predictive AI models that prevent issues before they occur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <GlassCard className="p-6 text-center">
              <Brain className="w-12 h-12 text-lime-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3 font-thin">Predictive Maintenance</h3>
              <p className="text-white/70 font-thin">
                AI models predict system failures 72 hours in advance with 94% accuracy.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3 font-thin">Intelligent Security</h3>
              <p className="text-white/70 font-thin">
                LLM-powered threat detection that learns from global attack patterns.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <Zap className="w-12 h-12 text-lime-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3 font-thin">Auto-Optimization</h3>
              <p className="text-white/70 font-thin">
                Self-tuning infrastructure that optimizes performance in real-time.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <Bot className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3 font-thin">AI Help Desk</h3>
              <p className="text-white/70 font-thin">
                Autonomous support agents that resolve 85% of issues without human intervention.
              </p>
            </GlassCard>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 font-thin">Predictive Infrastructure Intelligence</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 font-thin">System Uptime</span>
                  <span className="text-green-400 font-semibold">99.97%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 font-thin">Issue Prevention Rate</span>
                  <span className="text-lime-400 font-semibold">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 font-thin">Response Time</span>
                  <span className="text-purple-400 font-semibold">&lt; 30 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 font-thin">Cost Reduction</span>
                  <span className="text-lime-400 font-semibold">67%</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 font-thin">Custom AI Models</h2>
              <ul className="space-y-3 text-white/70 font-thin">
                <li className="flex items-start">
                  <span className="text-lime-400 mr-2">•</span>
                  Network traffic pattern analysis with deep learning
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Hardware failure prediction using sensor data
                </li>
                <li className="flex items-start">
                  <span className="text-lime-400 mr-2">•</span>
                  Security anomaly detection with behavioral modeling
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Performance optimization through reinforcement learning
                </li>
              </ul>
            </GlassCard>
          </div>

          <div className="text-center">
            <GlassCard className="p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4 font-thin">Deploy AI-Powered IT Infrastructure</h2>
              <p className="text-white/70 mb-6 font-thin">
                Transform your IT operations with predictive AI models and autonomous management systems.
              </p>
              <Button
                onClick={() =>
                  (window.location.href =
                    "mailto:business@bloomintelai.com?subject=AI IT Support Consultation&body=Hi BloomIntel Team,%0D%0A%0D%0AI'm interested in learning more about AI-powered IT support services.%0D%0A%0D%0ABest regards")
                }
                className="bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:border-white/40 shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20 font-semibold px-8 py-3"
              >
                Schedule AI Consultation
              </Button>
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
