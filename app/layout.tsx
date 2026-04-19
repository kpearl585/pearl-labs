import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://pearllab.io'),
  title: 'Pearl Labs — Real Software for Real Businesses',
  description:
    'Pearl Labs builds custom websites, business software, and automation for small businesses and serious operators. Veteran-owned. Full code ownership. Florida-based.',
  keywords:
    'custom software, small business software, Next.js development, veteran owned, SCORE service partner, SaaS development, workflow automation, custom websites, Florida software firm',
  openGraph: {
    title: 'Pearl Labs — Real Software for Real Businesses',
    description: 'Custom websites, business software, and automation — built by one senior engineer. Veteran-owned. Florida-based.',
    url: 'https://pearllab.io',
    siteName: 'Pearl Labs',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pearl Labs — Real Software for Real Businesses',
    description: 'Custom websites, business software, and automation. Veteran-owned. Florida-based.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://pearllab.io' },
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Pearl Labs',
  url: 'https://pearllab.io',
  email: 'keegan@pearllab.io',
  address: { '@type': 'PostalAddress', addressLocality: 'Ocala', addressRegion: 'FL', addressCountry: 'US' },
  areaServed: { '@type': 'Country', name: 'United States' },
  priceRange: '$$$',
  serviceType: ['Custom Software Development', 'SaaS Development', 'Workflow Automation', 'Strategic Advisory'],
  description: 'Pearl Labs builds custom websites, business software, and automation for small businesses and serious operators.',
  founder: {
    '@type': 'Person',
    name: 'Keegan Pearl',
    jobTitle: 'Founder & Engineer',
  },
  knowsAbout: [
    'Next.js development',
    'Custom SaaS platforms',
    'Workflow automation',
    'Business software',
    'Strategic advisory',
    'Defense intelligence platforms',
    'SCORE Service Partner',
    'Small business software development',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  )
}
