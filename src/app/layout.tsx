import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HomeSeek Advisory | Independent Buyer\'s Agent',
  description: 'Independent buyer\'s agent helping Australians buy property with data-driven insights, suburb research, and buyer-first strategy.',
  keywords: 'buyers agent NSW, property buyers agent, real estate advisory Australia, investment property advice, HomeSeek Advisory',
  authors: [{ name: 'HomeSeek Advisory' }],
  openGraph: {
    title: 'HomeSeek Advisory | Independent Buyer\'s Agent',
    description: 'Independent buyer\'s advisory helping Australians buy smarter through data-driven property decisions.',
    type: 'website',
    url: 'https://www.homeseekadvisory.com.au/',
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
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-700">
        {children}
      </body>
    </html>
  )
}
