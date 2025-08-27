"use client"

export function LightBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Vertical light beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
      <div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Diagonal light beams */}
      <div
        className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 origin-top-right animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-45 origin-bottom-left animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Moving horizontal beam */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-ping"></div>
      </div>

      {/* Floating light orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-white/40 rounded-full animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce"
        style={{ animationDelay: "2.5s", animationDuration: "5s" }}
      ></div>
    </div>
  )
}
