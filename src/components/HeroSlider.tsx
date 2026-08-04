'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useScroll } from '@/context/ScrollContext'

export default function HeroSlider() {
  const { scrollY } = useScroll()

  return (
    <section id="home" className="relative w-full min-h-screen bg-gray-300 overflow-hidden z-0">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left: Text Content */}
        <div
          className="relative z-10 flex flex-col justify-center px-8 md:px-12 bg-gradient-to-r from-gray-400/50 to-transparent"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: 'transform 0.03s linear',
          }}
        >
          <div className="text-white">
            <p className="text-lg md:text-xl font-light mb-4 opacity-90">
              Independent Buyer's Agents On Your Side.
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Smart Property <br />
              <span className="text-gold-400">Advisory</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 max-w-lg">
              HomeSeek Advisory helps Australians buy property with confidence using
              data-driven suburb research, strategy, and buyer-first representation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-gold-500 text-white text-lg font-semibold rounded hover:bg-gold-600 transition-colors depth-2 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right: Background Image */}
        <div
          className="relative h-full hidden md:block overflow-hidden"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: 'transform 0.03s linear',
          }}
        >
          <Image
            src="/images/banner-bg.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Floating depth indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 pointer-events-none"
        style={{
          opacity: Math.max(0, 1 - scrollY / 200),
          transform: `translate(-50%, ${scrollY * 0.2}px)`,
        }}
      >
        <div className="text-center">
          <p className="text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
