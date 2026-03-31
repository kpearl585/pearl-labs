import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://pearllab.io'),
  title: 'Pearl Labs — Build Systems That Generate Revenue',
  description:
    'Pearl Labs builds production software systems — SaaS platforms, revenue infrastructure, and defense-grade tools. Full code ownership. One senior engineer.',
  keywords:
    'production software, SaaS development, revenue systems, defense intelligence, custom software, veteran owned',
  openGraph: {
    title: 'Pearl Labs — Build Systems That Generate Revenue',
    description: 'Production software for companies that need systems shipped. Three systems live. Full code ownership.',
    url: 'https://pearllab.io',
    siteName: 'Pearl Labs',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pearl Labs — Build Systems That Generate Revenue',
    description: 'Production software for companies that need systems shipped.',
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
  serviceType: 'Custom Software Systems',
  description: 'Production software systems — SaaS platforms, revenue infrastructure, and defense-grade tools.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-dots">
        <a href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
