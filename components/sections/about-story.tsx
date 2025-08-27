"use client"

import { GlassCard } from "@/components/ui/glass-card"

export function AboutStory() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Our Story</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-pretty">
            Industry professionals who decided to build the future of AI automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">From Big Tech to BloomIntel</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              After years of working in big tech companies, we witnessed firsthand how AI could transform entire
              industries. We saw the gap between what was possible and what businesses were actually implementing.
            </p>
            <p className="text-white/80 leading-relaxed">
              That's when we decided to start BloomIntel AI Inc – not just another tech company, but a movement toward
              AI-powered solutions for humanity's greatest challenges.
            </p>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Growing Our Team</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              We're building a team of exceptional individuals who embrace AI as their daily competitive advantage. Our
              team thinks strategically about business problems and global impact.
            </p>
            <p className="text-white/80 leading-relaxed">
              Every team member demonstrates relentless curiosity, works independently, and contributes to
              transformative goals that matter to humanity.
            </p>
          </GlassCard>
        </div>

        <GlassCard className="p-8 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Mission & Vision</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Mission</h4>
              <p className="text-white/80 leading-relaxed">
                We solve meaningful business problems that help customers scale, raising global GDP through AI
                innovation. We transform low-automation sectors first, then tackle humanity's greatest challenges across
                every critical industry.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Vision</h4>
              <p className="text-white/80 leading-relaxed">
                To become a billion-dollar company by deploying exceptional talent who leverage AI to solve the world's
                most pressing problems. Every client project becomes a global SaaS platform scaling from one customer to
                millions worldwide.
              </p>
            </div>
          </div>
        </GlassCard>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">Phase 1</div>
            <h4 className="text-lg font-semibold text-white mb-3">Low-Automation Domination</h4>
            <p className="text-white/70 text-sm">
              Target industries with minimal AI adoption for immediate, measurable impact
            </p>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">Phase 2</div>
            <h4 className="text-lg font-semibold text-white mb-3">Global Problem-Solving</h4>
            <p className="text-white/70 text-sm">
              Scale AI solutions across all critical sectors and transform entire industries
            </p>
          </GlassCard>

          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">Phase 3</div>
            <h4 className="text-lg font-semibold text-white mb-3">Breakthrough Innovation</h4>
            <p className="text-white/70 text-sm">Pioneer AI applications that create entirely new market categories</p>
          </GlassCard>
        </div>

        <GlassCard className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">AI</span>
              </div>
              <h4 className="font-semibold text-white mb-2">AI-First Everything</h4>
              <p className="text-white/70 text-sm">Every task leverages AI for 10x performance</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">BI</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Business Impact</h4>
              <p className="text-white/70 text-sm">Success measured by business outcomes and GDP impact</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">GS</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Global Scale</h4>
              <p className="text-white/70 text-sm">Every solution built for worldwide platform potential</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">OD</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Outcome-Driven</h4>
              <p className="text-white/70 text-sm">Results matter more than hours worked</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">CL</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Continuous Learning</h4>
              <p className="text-white/70 text-sm">Embrace lifelong learning and innovation</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">EX</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Excellence</h4>
              <p className="text-white/70 text-sm">Small teams of exceptional people build billion-dollar solutions</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
