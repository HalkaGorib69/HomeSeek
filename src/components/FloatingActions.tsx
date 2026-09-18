'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useScroll } from '@/context/ScrollContext'

export default function FloatingActions() {
  const whatsappLink = 'https://wa.me/61430654824?text=Hi%20HomeSeek%20Advisory,%20I%20would%20like%20to%20book%20a%20strategy%20call.'
  const phoneLink = 'tel:+61401540064'

  const { scrollY } = useScroll()
  const [isIdle, setIsIdle] = useState(true)
  const lastScrollY = useRef(scrollY)
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (scrollY !== lastScrollY.current) {
      lastScrollY.current = scrollY
      setIsIdle(false)

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      idleTimerRef.current = setTimeout(() => setIsIdle(true), 500)
    }

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
  }, [scrollY])

  return (
    <div
      className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4 transition-opacity duration-300 ${
        isIdle ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all transform hover:scale-110 overflow-hidden"
        title="Chat on WhatsApp"
      >
        <Image
          src="/images/whatsapp_icon.webp"
          alt="WhatsApp"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </a>

      {/* Phone Button */}
      <a
        href={phoneLink}
        className="flex items-center justify-center w-14 h-14 bg-navy-700 text-white rounded-full shadow-lg hover:bg-navy-800 hover:shadow-xl transition-all transform hover:scale-110"
        title="Call us"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>

      {/* Chat/Enquiry Button */}
      <a
        href="/contact"
        className="flex items-center justify-center w-14 h-14 bg-gold-500 text-white rounded-full shadow-lg hover:bg-gold-600 hover:shadow-xl transition-all transform hover:scale-110"
        title="Send inquiry"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </a>
    </div>
  )
}
