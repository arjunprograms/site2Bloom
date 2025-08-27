"use client"

import { useEffect, useState } from "react"

export function DataStream() {
  const [dataPoints, setDataPoints] = useState<Array<{ id: number; value: string; delay: number }>>([])

  useEffect(() => {
    const data = [
      "Processing AI Model...",
      "Analyzing Data Patterns...",
      "Optimizing Workflows...",
      "Training Neural Networks...",
      "Generating Insights...",
      "Automating Tasks...",
      "Monitoring Performance...",
      "Scaling Operations...",
    ]

    const generateDataPoints = () => {
      const points = data.map((value, index) => ({
        id: index,
        value,
        delay: index * 0.8,
      }))
      setDataPoints(points)
    }

    generateDataPoints()
    const interval = setInterval(generateDataPoints, 6400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
      <div className="space-y-4">
        {dataPoints.map((point) => (
          <div
            key={point.id}
            className="animate-pulse opacity-0"
            style={{
              animation: `fadeInOut 6.4s infinite`,
              animationDelay: `${point.delay}s`,
            }}
          >
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.10] rounded-lg px-4 py-2 text-sm text-white/70 font-light whitespace-nowrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                {point.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical data flow lines */}
      <div className="absolute -right-4 top-0 h-full w-px">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div
          className="absolute top-0 w-2 h-2 bg-white/30 rounded-full animate-ping"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/4 w-1 h-1 bg-white/40 rounded-full animate-ping"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 w-3 h-3 bg-white/20 rounded-full animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-3/4 w-1 h-1 bg-white/35 rounded-full animate-ping"
          style={{ animationDelay: "4.5s" }}
        ></div>
      </div>
    </div>
  )
}
