import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FenceEstimatePro Case Study | Pearl Labs',
  description: 'How Pearl Labs built a full SaaS contractor management platform — estimates, job tracking, digital signatures, and PDF contracts — from zero to production.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
