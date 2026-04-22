'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSlider() {
  return (
    <section id="home" className="relative w-full min-h-screen bg-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left: Text Content */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-12 bg-gradient-to-r from-gray-400/50 to-transparent">
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
              href="#contact"
              className="inline-block px-8 py-3 bg-gold-500 text-white text-lg font-semibold rounded hover:bg-gold-600 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right: Background Image */}
        <div className="relative h-full hidden md:block">
          <Image
            src="/images/banner-bg.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
