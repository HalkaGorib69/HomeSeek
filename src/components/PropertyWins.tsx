'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import PropertyModal from './PropertyModal'
import { Property } from '@/types/property'

export default function PropertyWins() {
  const [properties, setProperties] = useState<Property[]>([])
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)

  useEffect(() => {
    // Load properties from JSON
    const loadProperties = async () => {
      try {
        const response = await fetch('/src/data/properties.json')
        const data = await response.json()
        setProperties(data)
      } catch (error) {
        // Fallback data
        console.error('Error loading properties:', error)
      }
    }

    // For demo, use inline data
    setProperties([
      {
        id: 1,
        location: "Surry Hills, NSW",
        images: ["p1.webp"],
        bedrooms: 3,
        bathrooms: 2,
        parking: 2,
        landSize: "280 m²",
        yearPurchased: 2023,
        purchasedPrice: "$850,000",
        currentPrice: "$920,000",
        rent: "$520/week",
        description: "Strategic acquisition in one of Sydney's most sought-after suburbs."
      },
      {
        id: 2,
        location: "Bayside, VIC",
        images: ["p1.webp"],
        bedrooms: 4,
        bathrooms: 2,
        parking: 3,
        landSize: "450 m²",
        yearPurchased: 2022,
        purchasedPrice: "$1,200,000",
        currentPrice: "$1,380,000",
        rent: "$680/week",
        description: "Premium residential acquisition in prestigious Bayside location."
      },
      {
        id: 3,
        location: "Paddington, NSW",
        images: ["p1.webp"],
        bedrooms: 3,
        bathrooms: 2,
        parking: 1,
        landSize: "320 m²",
        yearPurchased: 2024,
        purchasedPrice: "$950,000",
        currentPrice: "$980,000",
        rent: "$580/week",
        description: "Recent acquisition in the vibrant Paddington area."
      },
      {
        id: 4,
        location: "Toorak, VIC",
        images: ["p1.webp"],
        bedrooms: 5,
        bathrooms: 3,
        parking: 3,
        landSize: "550 m²",
        yearPurchased: 2021,
        purchasedPrice: "$1,500,000",
        currentPrice: "$1,680,000",
        rent: "$750/week",
        description: "Premium acquisition in prestigious Toorak."
      }
    ])
  }, [])

  return (
    <>
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy-700 mb-4">
              Recent Buyer <span className="text-gold-500">Wins</span>
            </h2>
            <p className="text-lg text-gold-500 font-semibold mb-2">
              Specialists. Advocates. Not Salespeople.
            </p>
            <p className="text-xl text-gray-600">
              Here are just a few of the properties we've helped clients secure:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProperty(property)}
              >
                {/* Property Image */}
                <div className="relative h-64 w-full bg-gray-200">
                  <Image
                    src={`/images/portfolio/${property.images[0]}`}
                    alt={property.location}
                    fill
                    className="object-cover"
                    fallbackSrc="/images/slider-icon.png"
                  />
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <svg className="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-semibold">{property.location}</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year Purchased</span>
                      <span className="font-semibold text-navy-700">{property.yearPurchased}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Purchased Price</span>
                      <span className="font-semibold text-navy-700">{property.purchasedPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Price</span>
                      <span className="font-semibold text-gold-500">{property.currentPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Land Size</span>
                      <span className="font-semibold text-navy-700">{property.landSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rent</span>
                      <span className="font-semibold text-navy-700">{property.rent}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProperty(property)}
                    className="w-full px-6 py-2 bg-navy-700 text-white font-semibold rounded hover:bg-navy-800 transition-colors"
                  >
                    More Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-10 py-3 border-2 border-gold-500 text-gold-500 font-semibold rounded hover:bg-gold-50 transition-colors">
              See More Wins
            </button>
          </div>
        </div>
      </section>

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
