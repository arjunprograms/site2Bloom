"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp, Eye, Brain } from "lucide-react"

export default function BusinessAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light leading-tight text-white mb-6 tracking-wide">
              Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Analytics
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Deep insights with predictive modeling capabilities to drive data-driven decision making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <GlassCard className="p-6 text-center">
              <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Visualization</h3>
              <p className="text-white/70">Interactive dashboards and reports for clear business insights.</p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-white/70">Forecast trends and outcomes using advanced machine learning models.</p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Insights</h3>
              <p className="text-white/70">Live data monitoring and instant alerts for critical business metrics.</p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <Brain className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Analysis</h3>
              <p className="text-white/70">Intelligent pattern recognition and automated insight generation.</p>
            </GlassCard>
          </div>

          <div className="text-center">
            <GlassCard className="p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Transform Your Data Into Insights</h2>
              <p className="text-white/70 mb-6">
                Unlock the power of your business data with advanced analytics and AI-driven insights.
              </p>
              <Button
                onClick={() =>
                  (window.location.href =
                    "mailto:business@bloomintelai.com?subject=Business Analytics Consultation&body=Hi BloomIntel Team,%0D%0A%0D%0AI'm interested in learning more about business analytics solutions.%0D%0A%0D%0ABest regards")
                }
                className="bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:border-white/40 shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20 font-semibold px-8 py-3"
              >
                Get Analytics Solution
              </Button>
            </GlassCard>
          </div>
        </div>
      </main>
      <Footer />{" "}
    </div>
  )
}
