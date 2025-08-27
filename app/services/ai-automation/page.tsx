"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Bot, Zap, Target, TrendingUp } from "lucide-react"

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light leading-tight text-white mb-6 tracking-wide">
              AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Automation
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Deploy advanced AI agents powered by Large Language Models (LLMs) that predict, adapt, and automate
              complex business workflows with unprecedented intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <GlassCard className="p-6 text-center">
              <Bot className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">LLM-Powered Workflows</h3>
              <p className="text-white/70">
                Advanced language models that understand context, make predictions, and execute complex business logic
                autonomously.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Optimization</h3>
              <p className="text-white/70">
                AI models that forecast bottlenecks, predict outcomes, and optimize processes before issues occur.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Decision Modeling</h3>
              <p className="text-white/70">
                Custom AI models trained on your data to make complex decisions with human-level reasoning and accuracy.
              </p>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Performance Analytics</h3>
              <p className="text-white/70">
                Real-time AI-driven insights that predict future performance and recommend optimizations.
              </p>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">AI-Powered Business Transformation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">AI-Driven Benefits</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Deploy autonomous AI agents that reduce manual tasks by 70% through predictive automation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Custom LLM models that understand your business context and make intelligent decisions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Predictive modeling that prevents issues before they impact your operations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    AI-powered scaling that adapts to demand patterns and business growth automatically
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Implementation Areas</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Intelligent customer service with sentiment analysis and predictive response generation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    AI-powered CRM systems with predictive lead scoring and automated nurturing
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Predictive financial modeling and automated reporting with anomaly detection
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Smart supply chain optimization with demand forecasting and inventory predictions
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <div className="text-center">
            <GlassCard className="p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
              <p className="text-white/70 mb-6">
                Let's discuss how AI automation can transform your operations and drive unprecedented growth.
              </p>
              <Button
                onClick={() =>
                  (window.location.href =
                    "mailto:business@bloomintelai.com?subject=AI Automation Consultation&body=Hi BloomIntel Team,%0D%0A%0D%0AI'm interested in learning more about AI automation solutions for my business.%0D%0A%0D%0ABest regards")
                }
                className="bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:border-white/40 shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20 font-semibold px-8 py-3"
              >
                Get Started Today
              </Button>
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
