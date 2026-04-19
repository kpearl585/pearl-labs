import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Small Business Software — Pearl Labs',
  description:
    'Custom websites, business software, and automation for small businesses. Veteran-owned software firm in Ocala, FL. Honest pricing. Full code ownership. No Squarespace, no WordPress, no templates.',
  alternates: { canonical: 'https://pearllab.io/for-small-business' },
  openGraph: {
    title: 'Small Business Software — Pearl Labs',
    description: 'Custom websites, business software, and automation for small businesses. Honest pricing. Full code ownership.',
    url: 'https://pearllab.io/for-small-business',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
