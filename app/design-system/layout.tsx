import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design System — Pearl Labs',
  description: 'Internal design system reference for Pearl Labs. Tokens, typography, components.',
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
