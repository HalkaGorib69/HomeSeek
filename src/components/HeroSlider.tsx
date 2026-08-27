'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScroll } from '@/context/ScrollContext'

export default function HeroSlider() {
  const { scrollY } = useScroll()

  return (
    <section id="home" className="relative w-full min-h-screen bg-gray-50 overflow-hidden z-0 pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left: Text Content */}
        <div
          className="relative z-10 flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: 'transform 0.03s linear',
          }}
        >
          {/* Subtitle */}
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <p className="text-gray-700 font-semibold text-sm md:text-base">Buyer&apos;s Advisory</p>
          </div>

          {/* Main Heading - Critical for SEO */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Smart Property Decisions Without the Bias | Buyer&apos;s Advisory
          </h1>

          {/* Description with left border */}
          <div className="pl-6 border-l-4 border-orange-500 mb-8">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Data-driven advisory for Australian buyers. We represent you, not the seller. From strategy to settlement, we ensure you buy with confidence.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition-colors"
            >
              Start Your Journey
            </Link>
          </div>
        </div>

        {/* Right: House Image */}
        <div
          className="relative h-full hidden md:flex items-center justify-center overflow-hidden pr-8"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
            transition: 'transform 0.03s linear',
          }}
        >
          <div className="relative w-96 h-screen">
            <Image
              src="/images/hero-banner.png"
              alt="Modern house - HomeSeek Advisory property buying guidance"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 pointer-events-none"
        style={{
          opacity: Math.max(0, 1 - scrollY / 200),
          transform: `translate(-50%, ${scrollY * 0.2}px)`,
        }}
      >
        <div className="text-center">
          <p className="text-xs mb-2">Scroll to explore</p>
          <svg className="w-5 h-5 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
