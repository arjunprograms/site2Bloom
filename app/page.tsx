"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { TechnologyStack } from "@/components/sections/technology-stack"
import { ConsultationForm } from "@/components/consultation/consultation-form"
import { AboutStory } from "@/components/sections/about-story"

export default function HomePage() {
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
      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <AboutStory />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="technology">
          <TechnologyStack />
        </section>
        <section id="consultation" className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <ConsultationForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
