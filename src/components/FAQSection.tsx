'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What does HomeSeek Advisory do?',
    answer:
      'We are independent buyer\'s agents who act solely in the buyer\'s best interest. Our services include strategy development, suburb research, property sourcing, due diligence, and negotiation.',
  },
  {
    question: 'Do you work with investors or owner-occupiers?',
    answer:
      'We work with both property investors and owner-occupiers. Our approach is tailored based on your goals, whether that is capital growth, cash flow, lifestyle, or long-term portfolio building.',
  },
  {
    question: 'How do you choose suburbs and properties?',
    answer:
      'We analyse over 15,000 suburbs using data on supply, demand, vacancy rates, price trends, rental performance, and future infrastructure. Properties are then assessed individually for risk, value, and suitability.',
  },
  {
    question: 'Can you buy interstate on my behalf?',
    answer:
      'Yes. We regularly assist interstate and overseas buyers. We conduct inspections, coordinate building reports, liaise with local professionals, and negotiate on your behalf as if you were present.',
  },
  {
    question: 'Do you receive commissions from sellers or developers?',
    answer:
      'No. HomeSeek Advisory does not accept commissions, kickbacks, or referral fees from selling agents or developers. Our loyalty is 100% to our clients.',
  },
  {
    question: 'How do I get started?',
    answer:
      'The first step is a discovery call where we discuss your goals, budget, timeline, and strategy. From there, we outline the best way to support you and move forward.',
  },
]

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-navy-700 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about working with an independent buyer's agent and how
            HomeSeek Advisory supports you through the buying process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-left font-semibold text-navy-700">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 text-gold-500 transition-transform ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
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
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                </button>
                {expandedIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy-700 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="mb-6">
              Email us at{' '}
              <a
                href="mailto:sabi.hossan@homeseekadvisory.com.au"
                className="text-gold-400 hover:text-gold-300"
              >
                sabi.hossan@homeseekadvisory.com.au
              </a>
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gold-500 text-white font-semibold rounded hover:bg-gold-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
