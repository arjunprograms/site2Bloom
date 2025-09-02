"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { GlassCard } from "@/components/ui/glass-card"
import { Mail, MapPin, Clock, Users } from "lucide-react"

export default function CareersPage() {
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
            <h1 className="text-5xl md:text-7xl font-light leading-tight text-white mb-6">
              Join Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-400">
                AI Revolution
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Build the future of business automation with industry professionals who left big tech to solve humanity's
              greatest challenges.
            </p>
          </div>

          <div className="mb-16">
            <GlassCard className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4">Junior AI Engineer - Full-Stack AI Solutions</h2>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-white/70">
                      <MapPin className="w-4 h-4 mr-2" />
                      Remote Position
                    </div>
                    <div className="flex items-center text-white/70">
                      <Clock className="w-4 h-4 mr-2" />
                      Full-time
                    </div>
                    <div className="flex items-center text-white/70">
                      <Users className="w-4 h-4 mr-2" />
                      AI Development Team
                    </div>
                  </div>

                  <div className="space-y-6 text-white/80">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">About the Role</h3>
                      <p>
                        We are seeking a Junior AI Engineer to join our team building complete automation solutions for
                        enterprise clients. This role involves developing full-stack AI systems including CRM solutions,
                        predictive analytics, cloud-based data management, and intelligent business process automation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Core Responsibilities</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Build complete CRM systems with AI-powered features from scratch</li>
                        <li>Develop analytics dashboards and business intelligence platforms</li>
                        <li>Implement cloud-based data management solutions and pipelines</li>
                        <li>Create machine learning predictive models for business forecasting</li>
                        <li>Design and deploy AI agents for automated business operations</li>
                        <li>Handle entire solution delivery lifecycle from requirements to deployment</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Required Qualifications</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Recent graduate in Computer Science, AI/ML, Data Science, or related field</li>
                        <li>Exceptional English communication - client-facing role</li>
                        <li>Full-stack development understanding across web, backend, and database technologies</li>
                        <li>Experience with AI development tools and prompt engineering techniques</li>
                        <li>Basic knowledge of cloud platforms and deployment processes</li>
                        <li>Problem-solving mindset with ability to architect complete solutions</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">What We Offer</h3>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Work on complete solution builds rather than isolated features</li>
                        <li>Access to latest AI development tools and unlimited tool subscriptions</li>
                        <li>Mentorship from experienced US-based solution architects</li>
                        <li>Direct client exposure and enterprise project experience</li>
                        <li>Competitive compensation with potential for rapid advancement</li>
                        <li>Remote-first with flexible hours accommodating global collaboration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:w-80">
                  <GlassCard className="p-6 sticky top-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Ready to Apply?</h3>
                    <p className="text-white/70 mb-6">
                      Send your resume and portfolio demonstrating full-stack project experience to get started.
                    </p>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Mail className="w-5 h-5 mr-2 text-white/70" />
                        <span className="text-white font-semibold">Email your application to:</span>
                      </div>
                      <a
                        href="mailto:business@bloomintelai.com?subject=Junior AI Engineer Application&body=Hi BloomIntel Team,%0D%0A%0D%0AI'm interested in the Junior AI Engineer position. Please find my resume attached.%0D%0A%0D%0ABest regards"
                        className="text-lime-400 hover:text-lime-300 font-semibold text-lg transition-colors duration-200"
                      >
                        business@bloomintelai.com
                      </a>
                      <p className="text-sm text-white/50 mt-3">
                        Include "Junior AI Engineer Application" in the subject line
                      </p>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">AI-First Culture</h3>
              <p className="text-white/70">
                Every task leverages AI. Every process optimizes through AI. Achieve 10x performance through intelligent
                automation.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
              <p className="text-white/70">
                Build platforms that transform entire industry categories and solve humanity's greatest challenges.
              </p>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-white/70">
                Embrace lifelong learning and contribute to the AI community with cutting-edge tools and methodologies.
              </p>
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
