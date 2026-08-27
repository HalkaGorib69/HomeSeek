'use client'

import { useState, useEffect, useRef } from 'react'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      id: 1,
      name: 'Charanya Rajagopal',
      date: '24 March 2026',
      rating: 5,
      text: 'Working with Shayne was a fantastic experience. From the very beginning, he was very helpful and gave us so much confidence. He was available to answer all of our questions and...',
      avatar: '👩'
    },
    {
      id: 2,
      name: 'Melissa Cook',
      date: '23 March 2026',
      rating: 5,
      text: 'Omar was a fantastic help in purchasing my first property. His assistance navigating the real estate market, purchase negotiations and all the paperwork that comes with...',
      avatar: '👩'
    },
    {
      id: 3,
      name: 'David Jack',
      date: '11 March 2026',
      rating: 5,
      text: 'We used Nicole from Moove for our first investment property and couldn\'t be happier with the experience. She was incredibly detail-oriented, moved quickly to get us into the market ahead of...',
      avatar: '👨'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      date: '8 March 2026',
      rating: 5,
      text: 'Absolutely outstanding service! The team went above and beyond to help us find the perfect property. Their expertise and dedication made the entire process smooth and stress-free.',
      avatar: '👩'
    },
    {
      id: 5,
      name: 'Michael Chen',
      date: '5 March 2026',
      rating: 4,
      text: 'Great experience working with the HomeSeek Advisory team. They provided excellent guidance throughout the buying process and helped us make informed decisions.',
      avatar: '👨'
    },
    {
      id: 6,
      name: 'Emma Thompson',
      date: '2 March 2026',
      rating: 5,
      text: 'Highly recommended! The team\'s attention to detail and market knowledge was invaluable. They made what could have been a stressful process enjoyable and transparent.',
      avatar: '👩'
    }
  ]

  useEffect(() => {
    if (!autoScroll) return

    scrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current)
      }
    }
  }, [autoScroll, testimonials.length])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setAutoScroll(false)
    setTimeout(() => setAutoScroll(true), 10000)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setAutoScroll(false)
    setTimeout(() => setAutoScroll(true), 10000)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return visible
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-700 mb-8">Glowing Testimonials!</h2>

          {/* Google Badge */}
          <div className="bg-gray-100 inline-flex items-center gap-3 px-6 py-4 rounded-lg mb-6">
            {/* Google Logo */}
            <div className="flex gap-0.5 font-bold text-xl">
              <span className="text-blue-600">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-600">g</span>
              <span className="text-red-500">l</span>
              <span className="text-green-600">e</span>
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 text-yellow-400 text-lg">
              ★★★★★
            </div>

            {/* Rating and Text */}
            <span className="font-bold text-gray-800">5.0</span>
            <span className="text-gray-700 font-medium">Top Rated Service</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                  <svg className="w-5 h-5 text-blue-500 ml-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-3">{testimonial.text}</p>

                {/* Read More */}
                <button className="text-blue-600 text-sm font-semibold hover:underline">
                  Read more
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-10 h-10 bg-navy-700 text-white rounded-full hover:bg-navy-800 transition-colors flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-10 h-10 bg-navy-700 text-white rounded-full hover:bg-navy-800 transition-colors flex items-center justify-center"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setAutoScroll(false)
                setTimeout(() => setAutoScroll(true), 10000)
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index >= currentIndex && index < currentIndex + 3
                  ? 'bg-navy-700'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
