'use client'

import ParallaxSection from './ParallaxSection'
import { useRef, useEffect, useState } from 'react'

const IconInvestment = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 7h7v7" />
  </svg>
)

const IconFirstHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-8 9 8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />
  </svg>
)

const IconInterstate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const IconOverseas = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a14.5 14.5 0 010 18M12 3a14.5 14.5 0 000 18" />
  </svg>
)

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [, setSectionOffset] = useState(0)

  useEffect(() => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    setSectionOffset(window.scrollY + rect.top)
  }, [])

  const services = [
    {
      icon: IconInvestment,
      title: 'Investment Property',
      description: 'Ideal for investors seeking a high-performing property aligned with their income, growth, and risk goals.',
    },
    {
      icon: IconFirstHome,
      title: 'First Home Buyer',
      description: 'Guidance and negotiation support to help first-time buyers avoid costly mistakes.',
    },
    {
      icon: IconInterstate,
      title: 'Interstate Buyers',
      description: 'We inspect, assess, and negotiate on your behalf anywhere in Australia.',
    },
    {
      icon: IconOverseas,
      title: 'Overseas Investors',
      description: 'Complete support for international buyers entering the Australian market.',
    },
  ]

  return (
    <ParallaxSection id="services" className="py-8 md:py-20 bg-gray-50" parallaxStrength={0.1}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-navy-700 mb-2 md:mb-4">Our Services</h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized buyer&apos;s agent services tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group py-3 md:py-6 px-1 sm:px-6 border-t-2 border-transparent hover:border-gold-500 transition-colors duration-300 ${
                  index !== 0 ? 'lg:border-l lg:border-gray-200' : ''
                }`}
              >
                <div className="w-8 h-8 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-white text-gold-600 flex items-center justify-center mb-2 md:mb-5 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                  <div className="w-4 h-4 md:w-5 md:h-5">
                    <Icon />
                  </div>
                </div>
                <h3 className="text-sm md:text-lg font-bold text-navy-700 mb-1 md:mb-2">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </ParallaxSection>
  )
}
