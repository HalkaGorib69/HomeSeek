'use client'

import Image from 'next/image'

export default function ServicesSection() {
  const services = [
    {
      icon: '/images/service-icon-01.png',
      title: 'Investment Property',
      description: 'Ideal for investors seeking a high-performing property aligned with their income, growth, and risk goals.',
    },
    {
      icon: '/images/service-icon-02.png',
      title: 'First Home Buyer',
      description: 'Guidance and negotiation support to help first-time buyers avoid costly mistakes.',
    },
    {
      icon: '/images/service-icon-03.png',
      title: 'Interstate Buyers',
      description: 'We inspect, assess, and negotiate on your behalf anywhere in Australia.',
    },
    {
      icon: '/images/service-icon-02.png',
      title: 'Overseas Investors',
      description: 'Complete support for international buyers entering the Australian market.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-navy-700 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized buyer's agent services tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1"
            >
              <div className="relative w-20 h-20 mx-auto mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-navy-700 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>
              <button className="w-full px-6 py-2 border-2 border-gold-500 text-gold-500 font-semibold rounded hover:bg-gold-50 transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
