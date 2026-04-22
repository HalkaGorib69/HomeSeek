'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Property } from '@/types/property'

interface PropertyModalProps {
  property: Property
  onClose: () => void
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="float-right text-3xl font-bold text-gray-500 hover:text-gray-700"
          >
            ×
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Image Gallery */}
            <div>
              <div className="relative h-96 w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={`/images/portfolio/${property.images[currentImageIndex]}`}
                  alt={property.location}
                  fill
                  className="object-cover"
                  fallbackSrc="/images/slider-icon.png"
                />
              </div>

              {/* Image Counter */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">
                  {currentImageIndex + 1} / {property.images.length}
                </span>
                <div className="flex gap-2">
                  {property.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-navy-700' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Gallery Controls */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrevImage}
                  className="flex-1 px-4 py-2 bg-navy-700 text-white rounded hover:bg-navy-800 transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={handleNextImage}
                  className="flex-1 px-4 py-2 bg-navy-700 text-white rounded hover:bg-navy-800 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Right: Property Details */}
            <div>
              <h2 className="text-4xl font-bold text-navy-700 mb-6">
                {property.location}
              </h2>

              {/* Property Highlights */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-navy-700 mb-4">
                  Property Highlights
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-600 text-sm mb-1">Bedrooms</p>
                    <p className="text-2xl font-bold text-navy-700">
                      {property.bedrooms}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-600 text-sm mb-1">Bathrooms</p>
                    <p className="text-2xl font-bold text-navy-700">
                      {property.bathrooms}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-600 text-sm mb-1">Parking</p>
                    <p className="text-2xl font-bold text-navy-700">
                      {property.parking}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-600 text-sm mb-1">Land Size</p>
                    <p className="text-2xl font-bold text-navy-700">
                      {property.landSize}
                    </p>
                  </div>
                </div>
              </div>

              {/* Deal Snapshot */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-navy-700 mb-4">
                  Deal Snapshot
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Year Purchased</span>
                    <span className="font-semibold">{property.yearPurchased}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Purchased Price</span>
                    <span className="font-semibold text-navy-700">
                      {property.purchasedPrice}
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Current Price</span>
                    <span className="font-semibold text-gold-500">
                      {property.currentPrice}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rent</span>
                    <span className="font-semibold">{property.rent}</span>
                  </div>
                </div>
              </div>

              {/* About Property */}
              <div>
                <h3 className="text-2xl font-bold text-navy-700 mb-4">
                  About This Property
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
