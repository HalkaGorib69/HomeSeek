'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left */}
          <Link href="#home" className="flex-shrink-0">
            <div className="relative w-40 h-12">
              <Image
                src="/images/HomeSeek.png"
                alt="HomeSeek Advisory"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex space-x-8 items-center flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-navy-700 transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Right */}
          <div className="hidden md:flex space-x-3 ml-8">
            <Link
              href="#contact"
              className="px-6 py-2.5 border-2 border-navy-700 text-navy-700 rounded hover:border-navy-800 hover:text-navy-800 transition-colors text-sm font-semibold"
            >
              CAREER
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-gold-500 text-white rounded hover:bg-gold-600 transition-colors text-sm font-bold"
            >
              REFERRAL
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-2 pt-4 border-t">
              <Link
                href="#contact"
                className="block px-4 py-2 border-2 border-navy-700 text-navy-700 rounded text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </Link>
              <Link
                href="#contact"
                className="block px-4 py-2 bg-gold-500 text-white rounded text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
