"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Zap, Target } from "lucide-react"

export default function CaseStudiesPage() {
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
              Case{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-400">
                Studies
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Discover how custom AI solutions have been transforming businesses across industries in the next decade.
            </p>
          </div>

          <div className="space-y-12">
            <GlassCard className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Manufacturing Giant Reduces Costs by 45%</h2>
                  <p className="text-white/70 mb-6">
                    A Fortune 500 manufacturing company implemented our AI-powered predictive maintenance system,
                    resulting in significant operational improvements and cost savings.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-white/80">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-3" />
                      45% reduction in maintenance costs
                    </div>
                    <div className="flex items-center text-white/80">
                      <Zap className="w-5 h-5 text-cyan-400 mr-3" />
                      78% decrease in unplanned downtime
                    </div>
                    <div className="flex items-center text-white/80">
                      <Target className="w-5 h-5 text-purple-400 mr-3" />
                      $2.3M annual savings achieved
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-lime-500/20 to-purple-500/20 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Technologies</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• IoT sensor integration</li>
                    <li>• Machine learning algorithms</li>
                    <li>• Real-time analytics dashboard</li>
                    <li>• Automated alert systems</li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-gradient-to-br from-lime-500/20 to-green-500/20 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Implementation Timeline</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Week 1-2: System analysis</li>
                    <li>• Week 3-6: AI model development</li>
                    <li>• Week 7-8: Integration & testing</li>
                    <li>• Week 9-12: Deployment & training</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Healthcare Network Improves Patient Care by 60%
                  </h2>
                  <p className="text-white/70 mb-6">
                    A regional healthcare network deployed our AI diagnostic assistance system, enhancing patient
                    outcomes and operational efficiency across multiple facilities.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-white/80">
                      <Users className="w-5 h-5 text-lime-400 mr-3" />
                      60% improvement in diagnostic accuracy
                    </div>
                    <div className="flex items-center text-white/80">
                      <Zap className="w-5 h-5 text-green-400 mr-3" />
                      40% reduction in patient wait times
                    </div>
                    <div className="flex items-center text-white/80">
                      <Target className="w-5 h-5 text-lime-400 mr-3" />
                      25% increase in patient satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Financial Services Firm Automates 80% of Operations
                  </h2>
                  <p className="text-white/70 mb-6">
                    A mid-size financial services company transformed their operations with our comprehensive AI
                    automation suite, achieving unprecedented efficiency gains.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-white/80">
                      <TrendingUp className="w-5 h-5 text-purple-400 mr-3" />
                      80% of processes automated
                    </div>
                    <div className="flex items-center text-white/80">
                      <Users className="w-5 h-5 text-lime-400 mr-3" />
                      300% increase in processing speed
                    </div>
                    <div className="flex items-center text-white/80">
                      <Target className="w-5 h-5 text-green-400 mr-3" />
                      99.7% accuracy in compliance reporting
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">ROI Metrics</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• 6-month payback period</li>
                    <li>• 400% ROI in first year</li>
                    <li>• $1.8M operational savings</li>
                    <li>• 50% staff reallocation to strategic roles</li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="text-center mt-16">
            <GlassCard className="p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-white/70 mb-6">
                Join the companies already benefiting from custom AI solutions. Let's discuss your transformation
                journey.
              </p>
              <Button
                onClick={() =>
                  (window.location.href =
                    "mailto:business@bloomintelai.com?subject=Custom AI Solution Consultation&body=Hi BloomIntel Team,%0D%0A%0D%0AI'm interested in learning more about custom AI solutions for my business.%0D%0A%0D%0ABest regards")
                }
                className="bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:border-white/40 shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20 font-semibold px-8 py-3"
              >
                Start Your Transformation
              </Button>
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
