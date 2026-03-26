import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display-var', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono-var', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://pearllab.io'),
  title: 'Pearl Labs — Custom Development Studio',
  description:
    'Pearl Labs is a custom development studio that builds websites, SaaS platforms, and business systems from scratch. Veteran owned.',
  keywords:
    'custom development studio, software engineering, SaaS development, AI systems, Next.js, custom software, veteran owned',
  openGraph: {
    title: 'Pearl Labs — Custom Development Studio',
    description: 'High-performance websites, SaaS platforms, and intelligent systems. Engineered to perform.',
    url: 'https://pearllab.io',
    siteName: 'Pearl Labs',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pearl Labs — Custom Development Studio',
    description: 'High-performance websites, SaaS platforms, and intelligent systems. Engineered to perform.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://pearllab.io' },
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Pearl Labs',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Pearl Labs',
  url: 'https://pearllab.io',
  email: 'hello@pearllab.io',
  address: { '@type': 'PostalAddress', addressLocality: 'Ocala', addressRegion: 'FL', addressCountry: 'US' },
  serviceType: 'Custom Software Development',
  description: 'Custom development studio building high-performance websites, SaaS platforms, and AI systems. Veteran owned.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
