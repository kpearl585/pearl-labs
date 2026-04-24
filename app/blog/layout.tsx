import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: { default: 'Field Notes — Pearl Labs', template: '%s — Pearl Labs' },
  description: 'Field notes on web development, performance, and building technology that businesses actually own.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="case-page">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
