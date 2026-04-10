'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)

  // Slow rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
    if (materialRef.current) {
      materialRef.current.distort = 0.3 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  // Wireframe rings
  const rings = useMemo(() => {
    const ringGeometries = []
    for (let i = 0; i < 7; i++) {
      const scale = 1 + i * 0.15
      ringGeometries.push({
        scale,
        rotation: [Math.PI / 2, 0, (i * Math.PI) / 7] as [number, number, number],
      })
    }
    return ringGeometries
  }, [])

  return (
    <group>
      {/* Rings */}
      {rings.map((ring, i) => (
        <mesh key={i} rotation={ring.rotation} scale={ring.scale}>
          <torusGeometry args={[1, 0.01, 16, 100]} />
          <meshBasicMaterial
            color="#2E6BFF"
            transparent
            opacity={0.3 - i * 0.03}
            wireframe={false}
          />
        </mesh>
      ))}

      {/* Core sphere */}
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={0.8}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#2E6BFF"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Glow effect */}
      <Sphere args={[1.3, 32, 32]}>
        <meshBasicMaterial
          color="#2E6BFF"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  )
}

export default function Sphere3D() {
  return (
    <div className="sphere-3d-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}
