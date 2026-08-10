'use client'

import React, { createContext, useContext, useEffect, useRef, ReactNode } from 'react'
import Lenis from 'lenis'

interface ScrollContextType {
  scrollProgress: number
  scrollY: number
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const [scrollY, setScrollY] = React.useState(0)
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number>()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)

      const height = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setScrollProgress(height > 0 ? scrolled / height : 0)
      setScrollY(scrolled)

      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)

    // Handle anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href*="#"]')

      if (!link) return

      const href = link.getAttribute('href')
      if (!href || href === '#') return

      const hash = href.split('#')[1]
      if (!hash) return

      const element = document.getElementById(hash)
      if (!element) return

      e.preventDefault()
      lenis.scrollTo(element, {
        duration: 1.2,
      })
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      lenis.destroy()
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollProgress, scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll() {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within ScrollProvider')
  }
  return context
}
