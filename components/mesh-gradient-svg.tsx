"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export function MeshGradientSVG() {
  const [mounted, setMounted] = useState(false)
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svgRef.current?.getBoundingClientRect()
      if (rect) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const deltaX = (e.clientX - centerX) * 0.08
        const deltaY = (e.clientY - centerY) * 0.08

        const maxOffset = 8
        setEyeOffset({
          x: Math.max(-maxOffset, Math.min(maxOffset, deltaX)),
          y: Math.max(-maxOffset, Math.min(maxOffset, deltaY)),
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mounted])

  if (!mounted) {
    return (
      <div className="relative w-full max-w-sm mx-auto rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="231" height="289" viewBox="0 0 231 289" className="w-full h-auto">
          <defs>
            <linearGradient id="meshGradientStatic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFB3D9" />
              <stop offset="50%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#2C3E50" />
            </linearGradient>
          </defs>
          <path
            d="M230.809 115.385V249.411C230.809 269.923 214.985 287.282 194.495 288.411C184.544 288.949 175.364 285.718 168.26 280C159.746 273.154 147.769 273.461 139.178 280.23C132.638 285.384 124.381 288.462 115.379 288.462C106.377 288.462 98.1451 285.384 91.6055 280.23C82.912 273.385 70.9353 273.385 62.2415 280.23C55.7532 285.334 47.598 288.411 38.7246 288.462C17.4132 288.615 0 270.667 0 249.359V115.385C0 51.6667 51.6756 0 115.404 0C179.134 0 230.809 51.6667 230.809 115.385Z"
            fill="url(#meshGradientStatic)"
          />
          <ellipse cx="80" cy="120" rx="20" ry="30" fill="currentColor" />
          <ellipse cx="150" cy="120" rx="20" ry="30" fill="currentColor" />
        </svg>
      </div>
    )
  }

  return (
    <motion.div
      className="relative w-full max-w-sm mx-auto rounded-lg"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="231"
        height="289"
        viewBox="0 0 231 289"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB3D9">
              <animate attributeName="stop-color" values="#FFB3D9;#87CEEB;#4A90E2;#FFB3D9" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#87CEEB">
              <animate attributeName="stop-color" values="#87CEEB;#4A90E2;#FFB3D9;#87CEEB" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#2C3E50">
              <animate attributeName="stop-color" values="#2C3E50;#1A1A2E;#4A90E2;#2C3E50" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        <path
          d="M230.809 115.385V249.411C230.809 269.923 214.985 287.282 194.495 288.411C184.544 288.949 175.364 285.718 168.26 280C159.746 273.154 147.769 273.461 139.178 280.23C132.638 285.384 124.381 288.462 115.379 288.462C106.377 288.462 98.1451 285.384 91.6055 280.23C82.912 273.385 70.9353 273.385 62.2415 280.23C55.7532 285.334 47.598 288.411 38.7246 288.462C17.4132 288.615 0 270.667 0 249.359V115.385C0 51.6667 51.6756 0 115.404 0C179.134 0 230.809 51.6667 230.809 115.385Z"
          fill="url(#meshGradient)"
        />

        <ellipse
          cx={80 + eyeOffset.x}
          cy={120 + eyeOffset.y}
          rx="20"
          ry="30"
          fill="currentColor"
        >
          <animate attributeName="ry" values="30;30;3;30;30" keyTimes="0;0.9;0.95;1;1" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse
          cx={150 + eyeOffset.x}
          cy={120 + eyeOffset.y}
          rx="20"
          ry="30"
          fill="currentColor"
        >
          <animate attributeName="ry" values="30;30;3;30;30" keyTimes="0;0.9;0.95;1;1" dur="3s" repeatCount="indefinite" />
        </ellipse>
      </svg>
    </motion.div>
  )
}
