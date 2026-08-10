'use client'

import Image from 'next/image'
import Link from 'next/link'
import Card3D from './Card3D'
import ParallaxSection from './ParallaxSection'
import { useScroll } from '@/context/ScrollContext'
import { useRef, useEffect, useState } from 'react'

export default function AboutSection() {
  const { scrollY } = useScroll()
  const benefits = [
    {
      icon: '/images/about-icon-01.png',
      title: 'Data-Driven Decisions',
      description: 'We use real suburb-level data to identify growth, yield, and risk',
    },
    {
      icon: '/images/about-icon-02.png',
      title: 'Buyer-Only Representation',
      description: 'We work exclusively for buyers — never for developers or sellers.',
    },
    {
      icon: '/images/about-icon-03.png',
      title: 'End-to-End Support',
      description: 'From strategy to settlement, we manage the entire buying process.',
    },
  ]

  const aboutRef = useRef<HTMLDivElement>(null)
  const [aboutOffset, setAboutOffset] = useState(0)

  useEffect(() => {
    if (!aboutRef.current) return
    const rect = aboutRef.current.getBoundingClientRect()
    const elementTop = window.scrollY + rect.top
    setAboutOffset(elementTop)
  }, [])

  return (
    <ParallaxSection id="about" className="py-20 bg-white" parallaxStrength={0.1}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={aboutRef}>
        {/* Who We Are Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <Card3D className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/left-image.png"
              alt="About HomeSeek"
              fill
              className="object-cover"
            />
          </Card3D>
          <div>
            <h2 className="text-5xl font-bold mb-6 text-navy-700">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-4">
              HomeSeek Advisory is an independent buyer&apos;s agency focused on helping
              clients make smarter property decisions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We analyse over 15,000 suburbs across Australia, using supply, demand,
              growth indicators, and risk metrics to remove emotion from the buying process.
              Our role is simple, represent <strong>you</strong>, not the seller.
            </p>
            <Link
              href="#services"
              className="inline-block px-8 py-3 bg-gold-500 text-white font-semibold rounded hover:bg-gold-600 transition-colors depth-2 hover:depth-4 transform hover:scale-105 duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div
          className="bg-gradient-to-r from-navy-700 to-navy-800 rounded-lg p-12 text-white depth-3"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-4xl font-bold mb-6">Why Buyers Choose HomeSeek Advisory</h3>
              <p className="text-lg text-gray-100 mb-8">
                Buying property without independent advice can be risky. We exist to level
                the playing field for buyers.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex gap-4 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16">
                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gold-400">{benefit.title}</h4>
                    <p className="text-gray-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}
