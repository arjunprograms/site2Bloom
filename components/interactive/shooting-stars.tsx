"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  delay: number
  duration: number
}

export function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      for (let i = 0; i < 5; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 2,
        })
      }
      setStars(newStars)
    }

    generateStars()
    const interval = setInterval(generateStars, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: `shootingStar ${star.duration}s linear ${star.delay}s infinite`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-20 h-px -translate-x-10 -translate-y-px"></div>
        </div>
      ))}
      <style jsx>{`
        @keyframes shootingStar {
          0% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100px) translateY(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
