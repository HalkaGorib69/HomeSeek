import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ScrollProvider } from '@/context/ScrollContext'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.homeseekadvisory.com.au'),
  title: 'Buyers Agent Sydney | HomeSeek Advisory - Independent Buyer\'s Agent',
  description: 'Sydney\'s independent buyers agent. We represent buyers, not sellers — data-driven suburb research, off-market access, and skilled negotiation for Sydney property buyers, investors, and first home buyers.',
  keywords: 'buyers agent Sydney, Sydney buyers agent, buyers advocate Sydney, property buyers agent Sydney, Sydney real estate buyers agent, buyers agent South West Sydney, buyers agent Western Sydney, investment property Sydney, first home buyer Sydney, independent buyers agent NSW, off market properties Sydney',
  authors: [{ name: 'HomeSeek Advisory' }],
  creator: 'HomeSeek Advisory',
  publisher: 'HomeSeek Advisory',
  formatDetection: {
    email: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.homeseekadvisory.com.au',
  },
  openGraph: {
    title: 'Buyers Agent Sydney | HomeSeek Advisory',
    description: 'Independent buyers agent serving Sydney, NSW. Data-driven suburb research, off-market access, and buyer-first negotiation.',
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.homeseekadvisory.com.au/',
    siteName: 'HomeSeek Advisory',
    images: [
      {
        url: 'https://www.homeseekadvisory.com.au/images/HomeSeek.png',
        width: 1200,
        height: 630,
        alt: 'HomeSeek Advisory - Buyers Agent Sydney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buyers Agent Sydney | HomeSeek Advisory',
    description: 'Independent buyers agent serving Sydney, NSW. Data-driven property decisions, buyer-first strategy.',
    images: ['https://www.homeseekadvisory.com.au/images/HomeSeek.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon & Icons */}
        <link rel="icon" href="/images/HomeSeek.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/HomeSeek.png" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />

        {/* Canonical & SEO */}
        <link rel="canonical" href="https://www.homeseekadvisory.com.au" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

        {/* Local SEO geo tags */}
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Sydney" />
        <meta name="geo.position" content="-33.8688;151.2093" />
        <meta name="ICBM" content="-33.8688, 151.2093" />

        {/* Fonts with Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=optional" rel="stylesheet" />

        {/* Primary Schema: Organization + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.homeseekadvisory.com.au/#organization',
                  name: 'HomeSeek Advisory',
                  url: 'https://www.homeseekadvisory.com.au',
                  logo: {
                    '@type': 'ImageObject',
                    '@id': 'https://www.homeseekadvisory.com.au/#logo',
                    inLanguage: 'en-AU',
                    url: 'https://www.homeseekadvisory.com.au/images/HomeSeek.png',
                    contentUrl: 'https://www.homeseekadvisory.com.au/images/HomeSeek.png',
                    width: 200,
                    height: 200,
                    caption: 'HomeSeek Advisory',
                  },
                  image: {
                    '@id': 'https://www.homeseekadvisory.com.au/#logo',
                  },
                  sameAs: [
                    'https://www.facebook.com/profile.php?id=61584138651078',
                    'https://www.instagram.com/homeseek_advisory',
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+61401540064',
                    contactType: 'Customer Service',
                    email: 'sabi.hossan@homeseekadvisory.com.au',
                    areaServed: 'Sydney, NSW',
                    availableLanguage: 'English',
                  },
                },
                {
                  '@type': 'RealEstateAgent',
                  '@id': 'https://www.homeseekadvisory.com.au/#localbusiness',
                  name: 'HomeSeek Advisory',
                  image: 'https://www.homeseekadvisory.com.au/images/HomeSeek.png',
                  description: 'Independent buyers agent serving Sydney, NSW. We represent buyers only — data-driven suburb research, off-market access, and skilled negotiation.',
                  url: 'https://www.homeseekadvisory.com.au',
                  telephone: '+61401540064',
                  email: 'sabi.hossan@homeseekadvisory.com.au',
                  priceRange: '$$',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Sydney',
                    addressRegion: 'NSW',
                    addressCountry: 'AU',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -33.8688,
                    longitude: 151.2093,
                  },
                  areaServed: [
                    { '@type': 'City', name: 'Sydney' },
                    { '@type': 'AdministrativeArea', name: 'Greater Western Sydney' },
                    { '@type': 'AdministrativeArea', name: 'South West Sydney' },
                    { '@type': 'State', name: 'New South Wales' },
                  ],
                  openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '17:00',
                  },
                  serviceType: ['Buyers Agent', 'Buyers Advocate', 'Property Investment Advisory', 'First Home Buyer Advisory', 'Real Estate Consulting'],
                  knowsAbout: ['Sydney property market', 'Suburb research', 'Property negotiation', 'Off-market properties', 'Investment property strategy'],
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '5',
                    ratingCount: '1',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.homeseekadvisory.com.au/#website',
                  url: 'https://www.homeseekadvisory.com.au',
                  name: 'HomeSeek Advisory',
                  description: 'Independent buyers agent for Sydney property buyers',
                  inLanguage: 'en-AU',
                  publisher: {
                    '@id': 'https://www.homeseekadvisory.com.au/#organization',
                  },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://www.homeseekadvisory.com.au/?search={search_term_string}',
                    },
                    query: 'required name=search_term_string',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-700">
        <ScrollProvider>
          {children}
        </ScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
