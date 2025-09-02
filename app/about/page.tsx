import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AboutStory } from "@/components/sections/about-story"

export default function AboutPage() {
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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-400">
                BloomIntel
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Industry professionals who left big tech to solve humanity's greatest challenges through AI innovation.
            </p>
          </div>

          <AboutStory />
        </div>
      </main>

      <Footer />
    </div>
  )
}
