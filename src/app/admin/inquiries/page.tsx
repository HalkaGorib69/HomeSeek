'use client'

import { useState, useEffect } from 'react'
import { Inquiry, InquiryStatus } from '@/types/inquiry'

const statusStyles: Record<InquiryStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  responded: 'bg-green-100 text-green-800 border-green-300',
  'no-response': 'bg-red-100 text-red-800 border-red-300',
}

const statusLabels: Record<InquiryStatus, string> = {
  pending: 'Pending',
  responded: 'Responded',
  'no-response': 'No Response',
}

export default function InquiriesAdminPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [filter, setFilter] = useState<InquiryStatus | 'all'>('all')
  const [updatingId, setUpdatingId] = useState<number | null>(null)

  useEffect(() => {
    loadInquiries()
  }, [])

  const loadInquiries = async () => {
    setLoading(true)
    const res = await fetch('/api/inquiries')
    if (res.ok) {
      const data = await res.json()
      setInquiries(data)
    }
    setLoading(false)
  }

  const updateStatus = async (id: number, status: InquiryStatus) => {
    setUpdatingId(id)
    const res = await fetch(`/api/inquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    if (res.ok) {
      const updated = await res.json()
      setInquiries((prev) => prev.map((i) => (i.id === id ? updated : i)))
    } else {
      alert('Failed to update status')
    }
    setUpdatingId(null)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this inquiry? This cannot be undone.')) return
    const res = await fetch(`/api/inquiries/${id}`, { method: 'DELETE' })
    if (res.ok) {
      setInquiries((prev) => prev.filter((i) => i.id !== id))
      if (expandedId === id) setExpandedId(null)
    } else {
      alert('Failed to delete inquiry')
    }
  }

  const filteredInquiries = filter === 'all' ? inquiries : inquiries.filter((i) => i.status === filter)

  const formatDate = (iso: string) => {
    const d = new Date(iso)
    return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' }) +
      ' · ' + d.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-navy-700 mb-1">Contact Form Inquiries</h2>
          <p className="text-gray-500">All submissions from the website&apos;s contact forms.</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(['all', 'pending', 'responded', 'no-response'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-colors ${
              filter === f
                ? 'bg-navy-700 text-white border-navy-700'
                : 'bg-white text-gray-600 border-gray-300 hover:border-navy-700'
            }`}
          >
            {f === 'all' ? 'All' : statusLabels[f]}
            {f !== 'all' && (
              <span className="ml-1.5 opacity-70">
                ({inquiries.filter((i) => i.status === f).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-gray-500">Loading inquiries...</p>
      ) : filteredInquiries.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-10 text-center">
          <p className="text-gray-500">No inquiries {filter !== 'all' ? `with status "${statusLabels[filter as InquiryStatus]}"` : 'yet'}.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredInquiries.map((inquiry) => {
            const isExpanded = expandedId === inquiry.id
            return (
              <div
                key={inquiry.id}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                {/* Row Header - click to expand */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : inquiry.id)}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <svg
                      className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="min-w-0">
                      <p className="font-bold text-navy-700 truncate">{inquiry.name}</p>
                      <p className="text-sm text-gray-500 truncate">{inquiry.email} · {inquiry.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-gray-400 whitespace-nowrap">{formatDate(inquiry.createdAt)}</span>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border whitespace-nowrap ${statusStyles[inquiry.status]}`}
                    >
                      {statusLabels[inquiry.status]}
                    </span>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-gray-100 p-5 bg-gray-50">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-0.5">Name</p>
                        <p className="font-semibold text-navy-700">{inquiry.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-0.5">Email</p>
                        <a href={`mailto:${inquiry.email}`} className="font-semibold text-gold-600 hover:underline">
                          {inquiry.email}
                        </a>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-0.5">Phone</p>
                        <a href={`tel:${inquiry.phone}`} className="font-semibold text-gold-600 hover:underline">
                          {inquiry.phone}
                        </a>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-0.5">Source</p>
                        <p className="font-semibold text-navy-700">{inquiry.source}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-0.5">Submitted</p>
                        <p className="font-semibold text-navy-700">{formatDate(inquiry.createdAt)}</p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <p className="text-gray-500 text-sm mb-1">Message</p>
                      <p className="bg-white border border-gray-200 rounded p-3 text-gray-700 whitespace-pre-wrap">
                        {inquiry.message || <span className="italic text-gray-400">No message provided</span>}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
                      <div className="flex items-center gap-2">
                        <label className="text-sm font-semibold text-gray-700">Status:</label>
                        <select
                          value={inquiry.status}
                          disabled={updatingId === inquiry.id}
                          onChange={(e) => updateStatus(inquiry.id, e.target.value as InquiryStatus)}
                          className="px-3 py-1.5 border-2 border-gray-200 rounded text-sm font-semibold focus:outline-none focus:border-gold-500 disabled:opacity-50"
                        >
                          <option value="pending">Pending</option>
                          <option value="responded">Responded</option>
                          <option value="no-response">No Response</option>
                        </select>
                      </div>
                      <button
                        onClick={() => handleDelete(inquiry.id)}
                        className="px-4 py-1.5 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors self-start sm:self-auto"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
