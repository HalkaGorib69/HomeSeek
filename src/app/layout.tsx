import type { Metadata } from 'next'
import './globals.css'
import { ScrollProvider } from '@/context/ScrollContext'

export const metadata: Metadata = {
  title: 'HomeSeek Advisory | Independent Buyer\'s Agent Australia',
  description: 'Independent buyer\'s agent helping Australians buy property with confidence. Data-driven suburb research, property strategy, and buyer-first representation across Australia.',
  keywords: 'buyers agent, property buyers agent, real estate advisory, investment property advice, home buying, Sydney buyers agent, Australia property',
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
  openGraph: {
    title: 'HomeSeek Advisory | Independent Buyer\'s Agent',
    description: 'Expert property buying guidance for Australian buyers. Data-driven decisions, suburb research, and buyer-first strategy.',
    type: 'website',
    url: 'https://www.homeseekadvisory.com.au/',
    siteName: 'HomeSeek Advisory',
    images: [
      {
        url: 'https://www.homeseekadvisory.com.au/images/HomeSeek.png',
        width: 1200,
        height: 630,
        alt: 'HomeSeek Advisory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HomeSeek Advisory | Buyer\'s Agent',
    description: 'Data-driven property buying guidance for Australians.',
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
        <meta name="google-site-verification" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

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
                    areaServed: 'AU',
                  },
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://www.homeseekadvisory.com.au/#localbusiness',
                  name: 'HomeSeek Advisory',
                  image: 'https://www.homeseekadvisory.com.au/images/HomeSeek.png',
                  description: 'Independent buyer\'s agent providing data-driven property buying advice across Australia.',
                  url: 'https://www.homeseekadvisory.com.au',
                  telephone: '+61401540064',
                  email: 'sabi.hossan@homeseekadvisory.com.au',
                  priceRange: '$$',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '3 Casandra Ct',
                    addressLocality: 'Berwick',
                    addressRegion: 'VIC',
                    postalCode: '3806',
                    addressCountry: 'AU',
                  },
                  areaServed: {
                    '@type': 'Country',
                    name: 'AU',
                  },
                  openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '17:00',
                  },
                  serviceType: ['Real Estate Buyer Agent', 'Property Investment Advisory', 'Real Estate Consulting'],
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
                  description: 'Independent buyer\'s agent for Australian property buyers',
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
      </body>
    </html>
  )
}
