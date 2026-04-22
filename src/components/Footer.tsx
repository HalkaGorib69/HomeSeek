export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-gold-400 mb-4">HomeSeek Advisory</h3>
            <p className="text-gray-300 text-sm">
              Independent buyer's agent helping Australians purchase property with
              data-driven insights, suburb research, and buyer-first strategy across
              Australia.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Recent Wins
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-gold-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-start gap-2">
                <svg className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.79l.291 1.991a1 1 0 01-.523 1.12l-2.292 1.148A4 4 0 0011.71 12.738l1.932-1.146a1 1 0 011.12.523l.291 1.991a1 1 0 01-.79.986l-2.153.291a1 1 0 00-.822.997V19a1 1 0 01-1 1h-2C6.77 20 3 16.23 3 11.5 3 7.358 5.358 3 9.5 3H11a1 1 0 011-1h2.153z" />
                </svg>
                <a href="tel:+61401540064" className="hover:text-gold-400 transition-colors">
                  +61 401 540 064
                </a>
              </p>
              <p className="text-gray-300 flex items-start gap-2">
                <svg className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:sabi.hossan@homeseekadvisory.com.au" className="hover:text-gold-400 transition-colors break-all">
                  sabi.hossan@homeseekadvisory.com.au
                </a>
              </p>
              <p className="text-gray-300 flex items-start gap-2">
                <svg className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Sydney, NSW | Australia</span>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61584138651078"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/homeseek_advisory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()} HomeSeek Advisory | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
