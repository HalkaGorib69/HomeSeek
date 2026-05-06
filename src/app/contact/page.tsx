'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    financeApproval: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          financeApproval: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-navy-700 mb-6">Get In Touch</h2>

                {/* Email */}
                <div className="mb-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-navy-700"
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
                    </div>
                    <div>
                      <p className="text-navy-700 font-semibold">sabi.hossan@homeseekadvisory.com.au</p>
                      <p className="text-navy-700">contact@homeseekadvisory.com.au</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-navy-700"
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
                    </div>
                    <div>
                      <a href="tel:+61401540064" className="text-navy-700 font-semibold hover:text-gold-500">
                        0483 967 180
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-navy-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-navy-700">3 Casandra Ct, Berwick,</p>
                      <p className="text-navy-700">Melbourne, Victoria, Australia.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book a Consultation Button */}
              <button className="px-6 py-3 bg-navy-700 text-white font-bold rounded hover:bg-navy-800 transition-colors flex items-center gap-2 w-fit">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3m-9 8h18V5a2 2 0 00-2-2H7a2 2 0 00-2 2v8zm0 0a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2m-2 4a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Book a Consultation
              </button>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-navy-700 mb-8">Contact Us</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-navy-700 font-semibold mb-1.5">
                    Name <span className="text-gold-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-2.5 border-2 border-navy-700 rounded focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-navy-700 font-semibold mb-1.5">
                    Email <span className="text-gold-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-2.5 border-2 border-navy-700 rounded focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-navy-700 font-semibold mb-2">
                    Phone <span className="text-gold-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Phone Number"
                    required
                    className="w-full px-4 py-2.5 border-2 border-navy-700 rounded focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-navy-700 font-semibold mb-1.5">
                    When would you like to be contacted? <span className="text-gold-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border-2 border-navy-700 rounded focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  />
                </div>

                {/* Finance Pre-approval */}
                <div>
                  <label className="block text-navy-700 font-semibold mb-2">
                    Do you have a Finance pre-approval ?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="financeApproval"
                        value="yes"
                        checked={formData.financeApproval === 'yes'}
                        onChange={handleChange}
                        className="w-4 h-4 border-2 border-navy-700 accent-navy-700"
                      />
                      <span className="text-navy-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="financeApproval"
                        value="no"
                        checked={formData.financeApproval === 'no'}
                        onChange={handleChange}
                        className="w-4 h-4 border-2 border-navy-700 accent-navy-700"
                      />
                      <span className="text-navy-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-navy-700 font-semibold mb-1.5">
                    Anything else you would like to mention?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    rows={5}
                    className="w-full px-4 py-2.5 border-2 border-navy-700 rounded focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-2.5 bg-navy-700 text-white font-bold rounded hover:bg-navy-800 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center font-semibold">
                    Message sent successfully! We'll be in touch soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center font-semibold">
                    Error sending message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
