'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import PropertyModal from './PropertyModal'
import Card3D from './Card3D'
import ParallaxSection from './ParallaxSection'
import { Property } from '@/types/property'
import { useScroll } from '@/context/ScrollContext'

export default function PropertyWins() {
  const { scrollY } = useScroll()
  const [properties, setProperties] = useState<Property[]>([])
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [sectionOffset, setSectionOffset] = useState(0)

  useEffect(() => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const elementTop = window.scrollY + rect.top
    setSectionOffset(elementTop)
  }, [])

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const response = await fetch('/api/properties')
        const data = await response.json()
        setProperties(data)
      } catch (error) {
        console.error('Error loading properties:', error)
      }
    }

    loadProperties()
  }, [])

  const distanceFromCenter = Math.abs(scrollY - sectionOffset)
  const staggerDelay = 0.05

  return (
    <>
      <ParallaxSection id="portfolio" className="pt-20 pb-32 bg-white" parallaxStrength={0.05}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy-700 mb-4">
              Recent Buyer <span className="text-gold-500">Wins</span>
            </h2>
            <p className="text-lg text-gold-500 font-semibold mb-2">
              Specialists. Advocates. Not Salespeople.
            </p>
            <p className="text-xl text-gray-600">
              Here are just a few of the properties we&apos;ve helped clients secure:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {properties.map((property, index) => (
              <Card3D
                key={property.id}
                className="bg-white rounded-lg overflow-hidden cursor-pointer transform"
              >
                <div
                  onClick={() => setSelectedProperty(property)}
                >
                  {/* Property Image */}
                  <div className="relative h-40 w-full bg-gray-200 overflow-hidden">
                    <Image
                      src={`/images/portfolio/${property.images[0]}`}
                      alt={property.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Property Details */}
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <svg className="w-3.5 h-3.5 text-gold-500 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-semibold text-sm">{property.title}</span>
                    </div>

                    <div className="space-y-1.5 mb-4">
                      {property.fields.map((field) => (
                        <div key={field.label} className="flex justify-between text-xs">
                          <span className="text-gray-600">{field.label}</span>
                          <span className="font-semibold text-navy-700">{field.value}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProperty(property)}
                      className="w-full px-4 py-1.5 text-sm bg-navy-700 text-white font-semibold rounded hover:bg-navy-800 transition-colors depth-2"
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <div className="text-center">
            <button className="px-10 py-3 border-2 border-gold-500 text-gold-500 font-semibold rounded hover:bg-gold-50 transition-colors depth-2 hover:depth-3">
              See More Wins
            </button>
          </div>
        </div>
      </ParallaxSection>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </>
  )
}
