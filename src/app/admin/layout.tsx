'use client'

import { useState, useEffect, ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Dashboard', href: '/admin' },
  { name: 'Properties', href: '/admin/properties' },
  { name: 'Inquiries', href: '/admin/inquiries' },
]

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    fetch('/api/admin/session')
      .then((res) => res.json())
      .then((data) => setAuthenticated(data.authenticated))
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      setAuthenticated(true)
    } else {
      setLoginError('Incorrect password')
    }
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    setAuthenticated(false)
  }

  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-lg shadow-xl p-8 w-full max-w-sm"
        >
          <h1 className="text-2xl font-bold text-navy-700 mb-6 text-center">
            Admin Login
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            required
            autoFocus
            className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:outline-none focus:border-gold-500 mb-4"
          />
          {loginError && (
            <p className="text-red-600 text-sm mb-4">{loginError}</p>
          )}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-navy-700 text-white font-semibold rounded hover:bg-navy-800 transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-navy-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">HomeSeek Admin</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm bg-white/10 hover:bg-white/20 rounded transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                    isActive
                      ? 'border-gold-500 text-navy-700'
                      : 'border-transparent text-gray-500 hover:text-navy-700 hover:border-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </div>
    </div>
  )
}
