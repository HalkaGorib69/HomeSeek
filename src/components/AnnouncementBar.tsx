'use client'

export default function AnnouncementBar() {
  return (
    <div className="bg-navy-700 text-white shadow-lg" style={{ marginLeft: '15rem', marginRight: '15rem', paddingTop: '0.8rem', paddingBottom: '0.8rem', paddingLeft: '10rem', paddingRight: '10rem', borderBottomLeftRadius: '10.5rem', borderBottomRightRadius: '10.5rem' }}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 text-xs font-semibold">
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.79l.291 1.991a1 1 0 01-.523 1.12l-2.292 1.148A4 4 0 0011.71 12.738l1.932-1.146a1 1 0 011.12.523l.291 1.991a1 1 0 01-.79.986l-2.153.291a1 1 0 00-.822.997V19a1 1 0 01-1 1h-2C6.77 20 3 16.23 3 11.5 3 7.358 5.358 3 9.5 3H11a1 1 0 011-1h2.153z" />
            </svg>
            +61401540064
          </span>
        </div>
        <div className="flex-1 text-center text-sm mx-4">
          <span className="animate-scroll inline-block">Buy Better. Build Equity. Secure the Right Property with Confidence</span>
        </div>
        <div className="flex gap-3">
          <a href="#" className="text-white hover:text-purple-200"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
          <a href="#" className="text-white hover:text-purple-200"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" /></svg></a>
          <a href="#" className="text-white hover:text-purple-200"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
        </div>
      </div>
    </div>
  )
}
