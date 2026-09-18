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
    const el = sectionRef.current

    const measure = () => {
      const rect = el.getBoundingClientRect()
      setSectionOffset(window.scrollY + rect.top)
    }

    measure()

    // Re-measure whenever the section's size/position changes — e.g. when
    // async content (like property cards) finishes loading and the section
    // grows, which would otherwise leave this offset stale.
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(el)
    window.addEventListener('resize', measure)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  // Clamp the drift so content can never travel far enough to overlap
  // an adjacent section, regardless of scroll distance or section height.
  const maxOffset = 40
  const rawOffset = (scrollY - sectionOffset) * parallaxStrength
  const parallaxOffset = Math.max(-maxOffset, Math.min(maxOffset, rawOffset))

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
