"use client"

import { useRef, useEffect, useState } from "react"

export function FuturisticGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0, isDown: false })
  const rotationRef = useRef({ x: 0, y: 0 })
  const autoRotateRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 500
    canvas.height = 500

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 200

    console.log("[v0] Globe component initialized")

    const points: Array<{ x: number; y: number; z: number; alpha: number }> = []

    for (let i = 0; i < 800; i++) {
      const phi = Math.acos(-1 + (2 * i) / 800)
      const theta = Math.sqrt(800 * Math.PI) * phi

      points.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        alpha: Math.random() * 0.8 + 0.2,
      })
    }

    const gridLines: Array<Array<{ x: number; y: number; z: number }>> = []

    for (let lat = -80; lat <= 80; lat += 20) {
      const line = []
      for (let lng = 0; lng <= 360; lng += 5) {
        const phi = (90 - lat) * (Math.PI / 180)
        const theta = lng * (Math.PI / 180)
        line.push({
          x: radius * Math.sin(phi) * Math.cos(theta),
          y: radius * Math.sin(phi) * Math.sin(theta),
          z: radius * Math.cos(phi),
        })
      }
      gridLines.push(line)
    }

    for (let lng = 0; lng < 360; lng += 30) {
      const line = []
      for (let lat = -90; lat <= 90; lat += 5) {
        const phi = (90 - lat) * (Math.PI / 180)
        const theta = lng * (Math.PI / 180)
        line.push({
          x: radius * Math.sin(phi) * Math.cos(theta),
          y: radius * Math.sin(phi) * Math.sin(theta),
          z: radius * Math.cos(phi),
        })
      }
      gridLines.push(line)
    }

    const rotatePoint = (point: { x: number; y: number; z: number }, rotX: number, rotY: number) => {
      const x = point.x * Math.cos(rotY) - point.z * Math.sin(rotY)
      let z = point.x * Math.sin(rotY) + point.z * Math.cos(rotY)
      const y = point.y * Math.cos(rotX) - z * Math.sin(rotX)
      z = point.y * Math.sin(rotX) + z * Math.cos(rotX)
      return { x, y, z }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const currentRotX = rotationRef.current.x
      const currentRotY = rotationRef.current.y + (isDragging ? 0 : autoRotateRef.current)

      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1

      gridLines.forEach((line) => {
        ctx.beginPath()
        let firstPoint = true

        line.forEach((point) => {
          const rotated = rotatePoint(point, currentRotX, currentRotY)
          const screenX = centerX + rotated.x
          const screenY = centerY + rotated.y

          if (rotated.z > 0) {
            if (firstPoint) {
              ctx.moveTo(screenX, screenY)
              firstPoint = false
            } else {
              ctx.lineTo(screenX, screenY)
            }
          }
        })
        ctx.stroke()
      })

      points.forEach((point) => {
        const rotated = rotatePoint(point, currentRotX, currentRotY)

        if (rotated.z > 0) {
          const screenX = centerX + rotated.x
          const screenY = centerY + rotated.y
          const distance = rotated.z / radius
          const size = 1 + distance * 2
          const alpha = point.alpha * distance

          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
          ctx.beginPath()
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      const coreAlpha = 0.1 + Math.sin(Date.now() * 0.003) * 0.05
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 0.8)
      gradient.addColorStop(0, `rgba(255, 255, 255, ${coreAlpha})`)
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.8, 0, Math.PI * 2)
      ctx.fill()

      if (!isDragging) {
        autoRotateRef.current += 0.005
      }
      animationRef.current = requestAnimationFrame(draw)
    }

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault()
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.isDown = true
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      setIsDragging(true)
      console.log("[v0] Mouse down at:", mouseRef.current.x, mouseRef.current.y)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current.isDown) return
      e.preventDefault()

      const rect = canvas.getBoundingClientRect()
      const currentX = e.clientX - rect.left
      const currentY = e.clientY - rect.top

      const deltaX = currentX - mouseRef.current.x
      const deltaY = currentY - mouseRef.current.y

      rotationRef.current.y += deltaX * 0.01
      rotationRef.current.x += deltaY * 0.01

      mouseRef.current.x = currentX
      mouseRef.current.y = currentY

      console.log("[v0] Rotating:", deltaX, deltaY)
    }

    const handleMouseUp = () => {
      mouseRef.current.isDown = false
      setIsDragging(false)
      console.log("[v0] Mouse up")
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    canvas.addEventListener("contextmenu", (e) => e.preventDefault())

    draw()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      canvas.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      canvas.removeEventListener("contextmenu", (e) => e.preventDefault())
    }
  }, []) // Removed isDragging dependency to prevent re-initialization

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className={`${isDragging ? "cursor-grabbing" : "cursor-grab"} select-none`}
      style={{ display: "block", touchAction: "none" }}
    />
  )
}
