import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Briefing Request — Pearl Labs',
  description:
    'Request a briefing with Pearl Labs. For defense, national security, and enterprise prospects evaluating our decision-support and intelligence platform work.',
  alternates: { canonical: 'https://pearllab.io/briefing' },
  openGraph: {
    title: 'Briefing Request — Pearl Labs',
    description: 'For defense, national security, and enterprise prospects evaluating our decision-support work.',
    url: 'https://pearllab.io/briefing',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
