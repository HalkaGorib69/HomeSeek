'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useScroll } from '@/context/ScrollContext'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  parallaxStrength?: number
  id?: string
}

export default function ParallaxSection({
  children,
  className = '',
  parallaxStrength = 0.15,
  id,
}: ParallaxSectionProps) {
  const { scrollY } = useScroll()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [sectionOffset, setSectionOffset] = useState(0)

  useEffect(() => {
    if (!sectionRef.current) return

    const rect = sectionRef.current.getBoundingClientRect()
    const elementTop = window.scrollY + rect.top
    setSectionOffset(elementTop)
  }, [])

  const parallaxOffset = (scrollY - sectionOffset) * parallaxStrength

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.02s linear',
        }}
      >
        {children}
      </div>
    </div>
  )
}
