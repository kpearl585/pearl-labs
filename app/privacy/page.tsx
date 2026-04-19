import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — Pearl Labs',
  description: 'How Pearl Labs handles your data. Short, honest, no dark patterns.',
  alternates: { canonical: 'https://pearllab.io/privacy' },
  robots: { index: true, follow: true },
}

const lastUpdated = 'April 19, 2026'

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section style={{ paddingTop: 'calc(var(--space-32) + 40px)', paddingBottom: 'var(--space-20)' }}>
          <div className="container">
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <p className="section-label">Legal</p>
              <h1 className="section-title" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                Privacy Policy
              </h1>
              <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-muted)', marginBottom: 'var(--space-10)' }}>
                Last updated: {lastUpdated}
              </p>

              <div className="legal-body">
                <p>
                  Pearl Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates pearllab.io. This page explains what we collect, why we collect it, and what we do with it. We keep it short on purpose.
                </p>

                <h2>What we collect</h2>
                <p>
                  When you submit a form on this site — the intake modal, the small-business form, or the estimate form — we collect the information you give us: name, email, phone (optional), company (optional), industry (optional), budget range (optional), and the project brief you write. If you mention a SCORE mentor, we record the mentor&apos;s name so we can honor the referral benefit.
                </p>
                <p>
                  We do not run advertising trackers, behavioral analytics, cookies, or fingerprinting scripts on this site. There is no Google Analytics, no Facebook Pixel, no session recorder. Server request logs are kept by Vercel (our hosting provider) under their standard policy.
                </p>

                <h2>How we use it</h2>
                <p>
                  Form submissions are sent to our email inbox via Resend, a transactional email service. We use the information to respond to your inquiry, scope the engagement, and deliver the work if we end up working together. We do not sell your data to anyone. We do not add you to marketing sequences without your consent.
                </p>

                <h2>How long we keep it</h2>
                <p>
                  Project inquiry emails sit in our inbox. If we work together, we keep the relevant correspondence and project artifacts for as long as the engagement and post-engagement support require. If we don&apos;t work together, we may keep your inquiry email but we won&apos;t contact you further unless you reach out again.
                </p>
                <p>
                  You can ask us to delete any record of your inquiry at any time by emailing <a href="mailto:keegan@pearllab.io">keegan@pearllab.io</a>. We will confirm deletion within seven business days.
                </p>

                <h2>Third parties</h2>
                <p>
                  The services we rely on to run the site:
                </p>
                <ul>
                  <li><strong>Vercel</strong> — hosting and request routing. Standard access logs.</li>
                  <li><strong>Resend</strong> — transactional email delivery for form submissions.</li>
                </ul>
                <p>
                  We do not share your data with any party outside of what&apos;s required to deliver the service you contacted us about.
                </p>

                <h2>Security</h2>
                <p>
                  The site is served over HTTPS with HSTS preload. Form submissions are rate-limited to prevent abuse. We do not store passwords, financial data, or personal health information on this domain. If we work together on a project that handles sensitive data, we scope security requirements explicitly in the engagement.
                </p>

                <h2>Changes</h2>
                <p>
                  If this policy changes, the &ldquo;Last updated&rdquo; date above will reflect the change. We do not version or archive old versions publicly, but we will not materially reduce your rights without a clear notice on the site.
                </p>

                <h2>Contact</h2>
                <p>
                  Questions about privacy: <a href="mailto:keegan@pearllab.io">keegan@pearllab.io</a>.
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
