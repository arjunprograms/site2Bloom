"use client"

import { useState, useEffect } from "react"

export function FloatingDashboard() {
  const [activeMetric, setActiveMetric] = useState(0)

  const metrics = [
    { label: "AI Models", value: "47", unit: "Active" },
    { label: "Automation", value: "98%", unit: "Uptime" },
    { label: "Processing", value: "2.4M", unit: "Ops/sec" },
    { label: "Efficiency", value: "+340%", unit: "Boost" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
      {/* Rotating outer ring */}
      <div
        className="absolute inset-0 border border-white/10 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/30 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
        <div className="absolute right-0 top-1/2 w-1 h-1 bg-white/20 rounded-full transform translate-x-1 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-white/25 rounded-full transform -translate-x-1/2 translate-y-1"></div>
        <div className="absolute left-0 top-1/2 w-1 h-1 bg-white/15 rounded-full transform -translate-x-1 -translate-y-1/2"></div>
      </div>

      {/* Inner glass dashboard */}
      <div className="absolute inset-8 backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-white/[0.12] p-6 flex flex-col items-center justify-center">
        <div className="text-center space-y-2">
          <div className="text-2xl font-light text-white/90 transition-all duration-500">
            {metrics[activeMetric].value}
          </div>
          <div className="text-sm text-white/60 transition-all duration-500">{metrics[activeMetric].unit}</div>
          <div className="text-xs text-white/40 transition-all duration-500">{metrics[activeMetric].label}</div>
        </div>

        {/* Progress indicators */}
        <div className="flex space-x-1 mt-4">
          {metrics.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-1 rounded-full transition-all duration-300 ${
                index === activeMetric ? "bg-white/40" : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating data points */}
      <div className="absolute inset-0">
        <div
          className="absolute top-4 right-4 w-1 h-1 bg-white/30 rounded-full animate-bounce"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 left-2 w-1 h-1 bg-white/25 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  )
}
