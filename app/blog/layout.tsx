import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: { default: 'Blog — Pearl Labs', template: '%s — Pearl Labs' },
  description: 'Insights on web development, performance, and building technology that businesses actually own.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#050508] min-h-screen overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
