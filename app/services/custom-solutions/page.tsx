"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Bot, Shield, Zap, BarChart3, Brain, Cog } from "lucide-react"

export default function CustomSolutionsPage() {
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
            <h1 className="text-5xl md:text-7xl font-thin text-white mb-8 tracking-wide">
              Custom AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-400">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-4xl mx-auto font-light leading-relaxed">
              Purpose-built AI systems tailored to your business needs, designed to scale and evolve with your
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <GlassCard className="p-8 text-left">
              <Bot className="w-16 h-16 text-lime-400 mb-6" />
              <h3 className="text-2xl font-thin text-white mb-4 tracking-wide">Autonomous Business Agents</h3>
              <p className="text-white/70 mb-4 font-light leading-relaxed">
                Deploy AI workers that handle complex workflows, make decisions, and optimize operations 24/7.
              </p>
              <div className="text-lime-400 font-medium">Average 70% reduction in manual tasks</div>
            </GlassCard>

            <GlassCard className="p-8 text-left">
              <Shield className="w-16 h-16 text-purple-400 mb-6" />
              <h3 className="text-2xl font-thin text-white mb-4 tracking-wide">Predictive Infrastructure</h3>
              <p className="text-white/70 mb-4 font-light leading-relaxed">
                Self-monitoring systems that prevent problems, not just fix them.
              </p>
              <div className="text-purple-400 font-medium">99.9% uptime with AI-powered maintenance</div>
            </GlassCard>

            <GlassCard className="p-8 text-left">
              <Zap className="w-16 h-16 text-lime-400 mb-6" />
              <h3 className="text-2xl font-thin text-white mb-4 tracking-wide">AI-Native Applications</h3>
              <p className="text-white/70 mb-4 font-light leading-relaxed">
                Purpose-built AI systems that become smarter with every interaction.
              </p>
              <div className="text-lime-400 font-medium">ROI improvement of 300%+ within 12 months</div>
            </GlassCard>

            <GlassCard className="p-8 text-left">
              <BarChart3 className="w-16 h-16 text-green-400 mb-6" />
              <h3 className="text-2xl font-thin text-white mb-4 tracking-wide">Business Analytics</h3>
              <p className="text-white/70 mb-4 font-light leading-relaxed">
                Turn your data into actionable insights with our advanced analytics platforms.
              </p>
              <div className="text-green-400 font-medium">Real-time data dashboards</div>
            </GlassCard>

            <GlassCard className="p-8 text-left">
              <Brain className="w-16 h-16 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-thin text-white mb-4 tracking-wide">Business Intelligence</h3>
              <p className="text-white/70 mb-4 font-light leading-relaxed">
                Leverage AI to forecast trends and make smarter, data-driven decisions.
              </p>
              <div className="text-yellow-400 font-medium">AI-powered forecasting</div>
            </GlassCard>

            <GlassCard className="p-8 text-left">
              <Cog className="w-16 h-16 text-pink-400 mb-6" />
              <h3 className="text-2xl font-thin text-white mb-4 tracking-wide">Process Automation</h3>
              <p className="text-white/70 mb-4 font-light leading-relaxed">
                Automate repetitive business processes to increase efficiency and reduce errors.
              </p>
              <div className="text-pink-400 font-medium">Up to 80% faster processing</div>
            </GlassCard>
          </div>

          <GlassCard className="p-12 mb-16">
            <h2 className="text-4xl font-thin text-white mb-8 text-center tracking-wide">
              Tailored Solutions for Your Industry
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-thin text-white mb-6 tracking-wide">Our Approach</h3>
                <ul className="space-y-4 text-white/80 font-light">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lime-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Deep analysis of your business processes and pain points
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Custom AI architecture designed for your specific requirements
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lime-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Seamless integration with existing systems and workflows
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Continuous optimization and performance monitoring
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-thin text-white mb-6 tracking-wide">Industries We Serve</h3>
                <ul className="space-y-4 text-white/80 font-light">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lime-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Healthcare and medical technology
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Financial services and fintech
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-lime-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    Manufacturing and supply chain
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    E-commerce and retail technology
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <div className="text-center">
            <GlassCard className="p-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-thin text-white mb-6 tracking-wide">Ready to Build Your Custom Solution?</h2>
              <p className="text-white/70 mb-8 font-light text-lg leading-relaxed">
                Let's discuss how we can create a tailored AI solution that transforms your business operations and
                drives unprecedented growth.
              </p>
              <Button
                onClick={() =>
                  (window.location.href =
                    "mailto:business@bloomintelai.com?subject=Custom AI Solutions Consultation&body=Hi BloomIntel Team,%0D%0A%0D%0AI'm interested in learning more about custom AI solutions for my business.%0D%0A%0D%0ABest regards")
                }
                className="bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/[0.20] backdrop-blur-xl transition-all duration-300 hover:border-white/40 shadow-lg hover:shadow-xl shadow-white/10 hover:shadow-white/20 font-light px-12 py-4 text-lg tracking-wide"
              >
                Start Your Custom Project
              </Button>
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
