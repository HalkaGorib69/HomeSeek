'use client'

import React, { useRef, useState } from 'react'

interface Card3DProps {
  children: React.ReactNode
  className?: string
}

export default function Card3D({ children, className = '' }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * 10
    const rotateY = ((centerX - x) / centerX) * 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovering(false)
  }

  return (
    <div
      ref={cardRef}
      className={`${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovering(true)}
      style={{
        perspective: '1000px',
        transition: isHovering ? 'none' : 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
        transform: isHovering
          ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(20px)`
          : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
      }}
    >
      <div
        className="relative"
        style={{
          boxShadow: isHovering
            ? '0 20px 60px rgba(0, 0, 0, 0.3)'
            : '0 10px 30px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {children}
      </div>
    </div>
  )
}
