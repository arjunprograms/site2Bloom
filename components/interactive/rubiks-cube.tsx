"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Box } from "@react-three/drei"
import type * as THREE from "three"

function CubeGrid() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      groupRef.current.rotation.y += 0.005
    }
  })

  const colors = ["#ff0000", "#00ff00", "#00ff88", "#ffff00", "#ff8800", "#ffffff"]

  return (
    <group ref={groupRef}>
      {Array.from({ length: 27 }, (_, i) => {
        const x = (i % 3) - 1
        const y = Math.floor((i % 9) / 3) - 1
        const z = Math.floor(i / 9) - 1

        return (
          <Box
            key={i}
            position={[x * 1.1, y * 1.1, z * 1.1]}
            args={[1, 1, 1]}
            onClick={() => {
              // Add click interaction
              console.log(`Clicked cube at position: ${x}, ${y}, ${z}`)
            }}
          >
            <meshStandardMaterial color={colors[Math.floor(Math.random() * colors.length)]} transparent opacity={0.8} />
          </Box>
        )
      })}
    </group>
  )
}

export function RubiksCube() {
  return (
    <div className="absolute top-1/4 right-8 w-64 h-64 z-20">
      <div className="w-full h-full backdrop-blur-xl bg-white/[0.02] rounded-2xl border border-white/[0.08] overflow-hidden">
        <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <CubeGrid />
          <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} autoRotate={false} />
        </Canvas>
      </div>
    </div>
  )
}
