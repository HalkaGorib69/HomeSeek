'use client'

import Link from 'next/link'

export default function HeroQuickAccess() {
  return (
    <section className="bg-black/70 text-white py-10 px-4 relative -mt-20 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Our Services */}
          <Link
            href="/#services"
            className="group hover:bg-white/10 rounded-lg p-6 transition-all cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-3 text-gold-400 group-hover:text-gold-300">
              Our Services
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Investment Property | First Home Buyer | Interstate | Overseas
            </p>
            <p className="text-gold-400 mt-4 font-semibold text-sm">Explore →</p>
          </Link>

          {/* Recent Wins */}
          <Link
            href="/#portfolio"
            className="group hover:bg-white/10 rounded-lg p-6 transition-all cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-3 text-gold-400 group-hover:text-gold-300">
              Recent Wins
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Specialists | Advocates | Not Salespeople
            </p>
            <p className="text-gold-400 mt-4 font-semibold text-sm">Explore →</p>
          </Link>

          {/* General Enquiry */}
          <Link
            href="/contact"
            className="group hover:bg-white/10 rounded-lg p-6 transition-all cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4 text-gold-400 group-hover:text-gold-300">
              General Enquiry
            </h3>
            <div className="space-y-3 text-gray-100 text-sm">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Phone</span>
                <span className="text-gold-400 group-hover:text-gold-300">
                  +61 401 540 064
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Email</span>
                <span className="text-gold-400 group-hover:text-gold-300 break-all">
                  sabi@homeseekadvisory.com.au
                </span>
              </p>
            </div>
            <p className="text-gold-400 mt-4 font-semibold text-sm">Contact Us →</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
