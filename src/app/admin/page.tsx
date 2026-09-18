'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Property } from '@/types/property'
import { Inquiry } from '@/types/inquiry'

export default function AdminDashboard() {
  const [propertyCount, setPropertyCount] = useState<number | null>(null)
  const [inquiryCount, setInquiryCount] = useState<number | null>(null)
  const [pendingCount, setPendingCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/properties')
      .then((res) => res.json())
      .then((data: Property[]) => setPropertyCount(data.length))
      .catch(() => setPropertyCount(0))

    fetch('/api/inquiries')
      .then((res) => res.json())
      .then((data: Inquiry[]) => {
        setInquiryCount(data.length)
        setPendingCount(data.filter((i) => i.status === 'pending').length)
      })
      .catch(() => {
        setInquiryCount(0)
        setPendingCount(0)
      })
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy-700 mb-2">Dashboard</h2>
      <p className="text-gray-500 mb-8">Manage your HomeSeek Advisory website content.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Link
          href="/admin/properties"
          className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
        >
          <p className="text-sm text-gray-500 mb-1">Recent Buyer Wins</p>
          <p className="text-3xl font-bold text-navy-700 mb-3">
            {propertyCount === null ? '—' : propertyCount}
          </p>
          <p className="text-gold-500 font-semibold text-sm">Manage Properties →</p>
        </Link>

        <Link
          href="/admin/inquiries"
          className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
        >
          <p className="text-sm text-gray-500 mb-1">Contact Inquiries</p>
          <p className="text-3xl font-bold text-navy-700 mb-3">
            {inquiryCount === null ? '—' : inquiryCount}
          </p>
          <p className="text-gold-500 font-semibold text-sm">
            {pendingCount ? `${pendingCount} pending →` : 'View Inquiries →'}
          </p>
        </Link>

        <div className="bg-white rounded-lg shadow p-6 opacity-50 cursor-not-allowed">
          <p className="text-sm text-gray-500 mb-1">Testimonials</p>
          <p className="text-3xl font-bold text-navy-700 mb-3">—</p>
          <p className="text-gray-400 font-semibold text-sm">Coming soon</p>
        </div>
      </div>
    </div>
  )
}
