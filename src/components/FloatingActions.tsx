'use client'

export default function FloatingActions() {
  const whatsappLink = 'https://wa.me/61430654824?text=Hi%20HomeSeek%20Advisory,%20I%20would%20like%20to%20book%20a%20strategy%20call.'
  const phoneLink = 'tel:+61401540064'

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171A9.904 9.904 0 002.064 12c0 5.444 4.412 9.944 9.842 9.944 2.326 0 4.5-.822 6.255-2.176l4.525 1.187-1.21-4.396a9.86 9.86 0 001.922-5.96c0-5.444-4.413-9.944-9.842-9.944Z" />
        </svg>
      </a>

      {/* Phone Button */}
      <a
        href={phoneLink}
        className="flex items-center justify-center w-14 h-14 bg-navy-700 text-white rounded-full shadow-lg hover:bg-navy-800 hover:shadow-xl transition-all transform hover:scale-110"
        title="Call us"
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>

      {/* Chat/Enquiry Button */}
      <a
        href="#contact"
        className="flex items-center justify-center w-14 h-14 bg-gold-500 text-white rounded-full shadow-lg hover:bg-gold-600 hover:shadow-xl transition-all transform hover:scale-110"
        title="Send inquiry"
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </a>
    </div>
  )
}
