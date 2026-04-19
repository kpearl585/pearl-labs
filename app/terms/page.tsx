import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service — Pearl Labs',
  description: 'Terms for working with Pearl Labs. Short, honest, readable.',
  alternates: { canonical: 'https://pearllab.io/terms' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'April 19, 2026'

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section style={{ paddingTop: 'calc(var(--space-32) + 40px)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <p className="section-label">Legal</p>
              <h1 className="section-title" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                Terms of Service
              </h1>
              <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-muted)', marginBottom: 'var(--space-10)' }}>
                Last updated: {lastUpdated}
              </p>

              <div className="legal-body">
                <p>
                  These are the terms for using pearllab.io. Engagement-specific terms (scope, price, timeline, payment, intellectual property transfer) are governed by the Statement of Work we sign together before work begins. This page covers the website and the inquiry process.
                </p>

                <h2>Use of the site</h2>
                <p>
                  You may read the site, submit forms, and follow links. You may not scrape the site at abusive rates, attempt to breach its security, or use its content to impersonate Pearl Labs. Content published here — case studies, essays, pricing, this page — is the intellectual property of Pearl Labs and may not be reproduced commercially without written permission.
                </p>

                <h2>Form submissions</h2>
                <p>
                  When you submit an inquiry, you represent that the information you provide is accurate and that you have the authority to share it. Submissions are not a contract. A contract only exists when we sign a Statement of Work.
                </p>

                <h2>48-hour brief response</h2>
                <p>
                  We commit to a two-business-day response on inquiries during normal operating weeks. We do not guarantee a signed engagement, a specific price, or a specific scope until we&apos;ve reviewed your brief and returned a scoped plan. If we can&apos;t respond within two business days for any reason (holiday, capacity, emergency), we will communicate a timeline.
                </p>

                <h2>Work-for-hire model</h2>
                <p>
                  When we engage on a project, we operate under a work-for-hire model. On final payment and project delivery, all code, designs, and deliverables produced specifically for your engagement transfer to your ownership, except for third-party dependencies under their own licenses and any Pearl Labs internal tooling that was used but not built specifically for you. The specific IP transfer terms are written into each Statement of Work.
                </p>

                <h2>Pricing and payments</h2>
                <p>
                  Prices listed on the site are starting ranges. Final engagement price is fixed in the Statement of Work after the 48-hour brief. Payment schedules, milestone gates, and refund eligibility are defined per engagement. The $500 Website Audit and $1,500 48-Hour Brief tiers are paid up front via Stripe and are non-refundable once delivered.
                </p>

                <h2>Warranties and liability</h2>
                <p>
                  The site is provided as-is. We stand behind the quality of work delivered under signed engagements per the specific warranty and support terms in the Statement of Work. We are not liable for indirect, incidental, or consequential damages arising from use of this website or content found here. Our total liability in any dispute is limited to fees paid by you under the active engagement.
                </p>

                <h2>Governing law</h2>
                <p>
                  These terms are governed by the laws of the State of Florida, United States. Disputes are resolved in state or federal courts located in Marion County, Florida.
                </p>

                <h2>Changes</h2>
                <p>
                  If these terms change, the &ldquo;Last updated&rdquo; date above will reflect the change. Engagement-specific terms do not change retroactively.
                </p>

                <h2>Contact</h2>
                <p>
                  Questions about these terms: <a href="mailto:keegan@pearllab.io">keegan@pearllab.io</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
