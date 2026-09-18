'use client'

import { useState, useEffect } from 'react'
import { Property, PropertyField } from '@/types/property'
import { useScroll } from '@/context/ScrollContext'

const defaultFields: PropertyField[] = [
  { label: 'Bedrooms', value: '' },
  { label: 'Bathrooms', value: '' },
  { label: 'Parking', value: '' },
  { label: 'Land Size', value: '' },
  { label: 'Year Purchased', value: '' },
  { label: 'Purchased Price', value: '' },
  { label: 'Current Price', value: '' },
  { label: 'Rent', value: '' },
]

const emptyForm = {
  title: '',
  description: '',
  images: 'p1.webp',
  fields: defaultFields,
}

export default function PropertiesAdminPage() {
  const { stopScroll, startScroll } = useScroll()
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [saving, setSaving] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    loadProperties()
  }, [])

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    if (modalOpen) {
      stopScroll()
    } else {
      startScroll()
    }
    return () => {
      document.body.style.overflow = ''
      startScroll()
    }
  }, [modalOpen])

  const loadProperties = async () => {
    setLoading(true)
    const res = await fetch('/api/properties')
    const data = await res.json()
    setProperties(data)
    setLoading(false)
  }

  const resetForm = () => {
    setForm(emptyForm)
    setEditingId(null)
  }

  const openAddModal = () => {
    resetForm()
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    resetForm()
  }

  const updateField = (index: number, key: 'label' | 'value', value: string) => {
    setForm((prev) => ({
      ...prev,
      fields: prev.fields.map((field, i) => (i === index ? { ...field, [key]: value } : field)),
    }))
  }

  const addField = () => {
    setForm((prev) => ({ ...prev, fields: [...prev.fields, { label: '', value: '' }] }))
  }

  const removeField = (index: number) => {
    setForm((prev) => ({ ...prev, fields: prev.fields.filter((_, i) => i !== index) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const payload = {
      ...form,
      images: form.images.split(',').map((s) => s.trim()).filter(Boolean),
      fields: form.fields.filter((f) => f.label.trim() && f.value.trim()),
    }

    const res = await fetch(
      editingId ? `/api/properties/${editingId}` : '/api/properties',
      {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    if (res.ok) {
      await loadProperties()
      closeModal()
    } else {
      alert('Failed to save property')
    }
    setSaving(false)
  }

  const handleEdit = (property: Property) => {
    setEditingId(property.id)
    setForm({
      title: property.title,
      description: property.description,
      images: property.images.join(', '),
      fields: property.fields.length > 0 ? property.fields : defaultFields,
    })
    setModalOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this property? This cannot be undone.')) return
    const res = await fetch(`/api/properties/${id}`, { method: 'DELETE' })
    if (res.ok) {
      await loadProperties()
      if (editingId === id) closeModal()
    } else {
      alert('Failed to delete property')
    }
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-navy-700 mb-1">Manage Recent Buyer Wins</h2>
          <p className="text-gray-500">Add, edit, or remove properties shown in the portfolio section.</p>
        </div>
        <button
          onClick={openAddModal}
          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 text-white font-semibold rounded hover:bg-gold-600 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Property
        </button>
      </div>

      {/* Property List */}
      <h3 className="text-lg font-bold text-navy-700 mb-4">
        Current Properties ({properties.length})
      </h3>
      {loading ? (
        <p className="text-gray-500">Loading properties...</p>
      ) : properties.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-10 text-center">
          <p className="text-gray-500 mb-4">No properties yet.</p>
          <button
            onClick={openAddModal}
            className="px-5 py-2.5 bg-gold-500 text-white font-semibold rounded hover:bg-gold-600 transition-colors"
          >
            Add Your First Property
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <p className="font-bold text-navy-700">{property.title}</p>
                {property.fields.length > 0 && (
                  <p className="text-sm text-gray-600">
                    {property.fields.map((f) => `${f.label}: ${f.value}`).join(' · ')}
                  </p>
                )}
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => handleEdit(property)}
                  className="px-4 py-2 text-sm bg-navy-700 text-white rounded hover:bg-navy-800 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(property.id)}
                  className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-lg">
              <h3 className="text-lg font-bold text-navy-700">
                {editingId ? `Editing Property #${editingId}` : 'Add New Property'}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Title / Location</label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Surry Hills, NSW"
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded focus:outline-none focus:border-gold-500"
                />
              </div>

              {/* Image Upload (disabled placeholder) */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Property Image</label>
                <button
                  type="button"
                  disabled
                  className="w-full flex flex-col items-center justify-center gap-2 px-4 py-8 border-2 border-dashed border-gray-300 rounded text-gray-400 cursor-not-allowed bg-gray-50"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="font-semibold">Upload Image</span>
                </button>
                <p className="text-xs text-gray-400 italic mt-2">
                  This feature is coming soon. For now, images are pulled from filenames already in /public/images/portfolio/.
                </p>
              </div>

              {/* Dynamic Fields */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Property Fields (custom title + info pairs)
                  </label>
                  <button
                    type="button"
                    onClick={addField}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-gold-600 hover:text-gold-700"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Field
                  </button>
                </div>

                <div className="space-y-2">
                  {form.fields.length === 0 && (
                    <p className="text-sm text-gray-400 italic">No fields yet. Click &quot;Add Field&quot; to create one.</p>
                  )}
                  {form.fields.map((field, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={field.label}
                        onChange={(e) => updateField(index, 'label', e.target.value)}
                        placeholder="Title (e.g. Bedrooms)"
                        className="w-2/5 px-3 py-2 border-2 border-gray-200 rounded focus:outline-none focus:border-gold-500 text-sm"
                      />
                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) => updateField(index, 'value', e.target.value)}
                        placeholder="Info (e.g. 3)"
                        className="flex-1 px-3 py-2 border-2 border-gray-200 rounded focus:outline-none focus:border-gold-500 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeField(index)}
                        className="flex-shrink-0 p-2 text-gray-400 hover:text-red-600 transition-colors"
                        aria-label="Remove field"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
                <textarea
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Describe the property win..."
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="flex gap-3 justify-end border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 bg-gold-500 text-white font-semibold rounded hover:bg-gold-600 transition-colors disabled:opacity-50"
                >
                  {saving ? 'Saving...' : editingId ? 'Update Property' : 'Add Property'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
