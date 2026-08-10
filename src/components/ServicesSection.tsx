'use client'

import Image from 'next/image'
import Card3D from './Card3D'
import ParallaxSection from './ParallaxSection'
import { useScroll } from '@/context/ScrollContext'
import { useRef, useEffect, useState } from 'react'

export default function ServicesSection() {
  const { scrollY } = useScroll()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [sectionOffset, setSectionOffset] = useState(0)

  useEffect(() => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const elementTop = window.scrollY + rect.top
    setSectionOffset(elementTop)
  }, [])

  const services = [
    {
      icon: '/images/service-icon-01.png',
      title: 'Investment Property',
      description: 'Ideal for investors seeking a high-performing property aligned with their income, growth, and risk goals.',
    },
    {
      icon: '/images/service-icon-02.png',
      title: 'First Home Buyer',
      description: 'Guidance and negotiation support to help first-time buyers avoid costly mistakes.',
    },
    {
      icon: '/images/service-icon-03.png',
      title: 'Interstate Buyers',
      description: 'We inspect, assess, and negotiate on your behalf anywhere in Australia.',
    },
    {
      icon: '/images/service-icon-02.png',
      title: 'Overseas Investors',
      description: 'Complete support for international buyers entering the Australian market.',
    },
  ]

  return (
    <ParallaxSection id="services" className="py-20 bg-gray-50" parallaxStrength={0.1}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-navy-700 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized buyer's agent services tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
          {services.map((service, index) => (
            <Card3D
              key={service.title}
              className="bg-white rounded-lg p-8 depth-2 hover:depth-4 flex flex-col"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center p-4 shadow-lg">
                    <div className="relative w-full h-full">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy-700 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6 flex-grow">
                  {service.description}
                </p>
                <button className="w-full px-6 py-2 border-2 border-gold-500 text-gold-500 font-semibold rounded hover:bg-gold-50 transition-colors depth-1 mt-auto">
                  Read More
                </button>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </ParallaxSection>
  )
}
