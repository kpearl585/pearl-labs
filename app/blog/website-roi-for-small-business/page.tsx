import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "What\'s the ROI of a Professional Website for a Small Business? — Pearl Labs",
  description: 'A professional website pays for itself many times over. Here\'s the real ROI math for small businesses investing in their online presence.',
}

const BLUE  = '#4A9EFF'
const BLACK = '#030507'

export default function ArticlePage() {
  return (
    <main style={{ background: BLACK, minHeight: '100vh', fontFamily: 'var(--font-inter), sans-serif' }}>
      {/* Nav */}
      <div style={{ borderBottom: '1px solid rgba(74,158,255,0.12)', padding: '0 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ textDecoration: 'none', fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>
            Pearl<span style={{ color: BLUE }}>Labs</span>
          </Link>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/#work" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Work</Link>
            <Link href="/#contact" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '0.875rem' }}>Contact</Link>
            <Link href="/blog" style={{ color: BLUE, textDecoration: 'none', fontSize: '0.875rem' }}>Blog</Link>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '5rem 2rem 3rem' }}>
        <Link href="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
          ← Back to Blog
        </Link>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(74,158,255,0.1)', color: BLUE, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '4px' }}>Strategy</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>7 min read</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>March 2026</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          What&apos;s the ROI of a Professional Website for a Small Business?
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.15rem', lineHeight: 1.7, margin: 0 }}>
          Most small businesses underestimate what a professional website is worth. Here&apos;s the real math — and why it&apos;s one of the highest-ROI investments you can make.
        </p>
      </div>

      {/* Article Body */}
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 2rem 2rem' }}>
        <div style={{
          background: '#fff',
          borderRadius: '16px',
          padding: 'clamp(2rem, 5vw, 4rem)',
          color: '#1a1a1a',
          lineHeight: 1.8,
          fontSize: '1.05rem',
        }}>
          <div style={{ background: '#EFF6FF', borderLeft: '4px solid #3B82F6', borderRadius: '0 8px 8px 0', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#1E40AF', fontSize: '1.1rem' }}>
              A small business website that converts just 2 additional clients per month — at $1,500 average value — generates $36,000/year in new revenue from a one-time investment.
            </p>
          </div>

          <p>The question business owners ask us most often is: &quot;How much does a website cost?&quot; The better question is: &quot;What&apos;s it worth?&quot; Because if you&apos;re asking about the cost before the value, you&apos;re thinking about it backwards.</p>

          <p>A professional website isn&apos;t a marketing expense. It&apos;s a revenue-generating asset. Like a piece of equipment that works 24/7, never calls in sick, and costs nothing to operate after the initial investment.</p>

          <p>Let&apos;s look at the actual ROI math.</p>

          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#111', margin: '2.5rem 0 1rem' }}>The Lead Conversion Math</h2>
          <p>Most small businesses with a basic or no website convert less than 2% of website visitors into leads. A professional, well-built site typically converts 5–10%. The difference sounds small. The revenue impact is massive.</p>

          <p>Take a local service business getting 500 website visits per month. At 2% conversion, that&apos;s 10 leads. At 7% conversion, it&apos;s 35 leads. If you close 30% of leads and your average job is $2,000, the difference is:</p>

          <div style={{ background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <p style={{ fontWeight: 700, color: '#666', marginBottom: '0.5rem' }}>Basic website (2% conversion)</p>
                <p style={{ margin: '0.25rem 0' }}>10 leads/month</p>
                <p style={{ margin: '0.25rem 0' }}>3 closed jobs</p>
                <p style={{ margin: '0.25rem 0', fontWeight: 700, color: '#e53e3e' }}>$6,000/month</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: '#2563eb', marginBottom: '0.5rem' }}>Professional site (7% conversion)</p>
                <p style={{ margin: '0.25rem 0' }}>35 leads/month</p>
                <p style={{ margin: '0.25rem 0' }}>10-11 closed jobs</p>
                <p style={{ margin: '0.25rem 0', fontWeight: 700, color: '#16a34a' }}>$20,000+/month</p>
              </div>
            </div>
          </div>

          <p>The website didn&apos;t bring more traffic. It just converted more of the traffic you were already getting. That&apos;s the highest-leverage improvement most small businesses can make.</p>

          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#111', margin: '2.5rem 0 1rem' }}>The Credibility Effect</h2>
          <p>Conversion rates aren&apos;t just about design. They&apos;re about trust. And your website is often the first real impression a potential client gets of your business.</p>

          <p>Studies consistently show that 75% of consumers judge a business&apos;s credibility based on their website design. Not their reviews. Not their prices. Their website. If your site looks dated, loads slowly, or doesn&apos;t work well on mobile, potential clients form a negative impression before they&apos;ve read a single word.</p>

          <p>The credibility effect works in multiple directions:</p>

          <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Referrals land differently.</strong> When someone refers you and the prospect checks your website and it looks professional, the referral converts faster. When the website looks sketchy, the referral doubts the recommendation.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Price resistance drops.</strong> A professional website justifies premium pricing. Clients expect to pay more for a business that clearly invests in quality. An outdated website signals a cheap operation.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>You attract better clients.</strong> Higher-value clients — the ones with bigger projects and fewer headaches — filter by credibility signals. Your website is the first one.</li>
          </ul>

          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#111', margin: '2.5rem 0 1rem' }}>Cost vs. Value: The Real Comparison</h2>
          <p>A professionally built website from an agency like Pearl Labs typically costs $2,000–$5,000 as a one-time investment. Let&apos;s be conservative and say $3,500.</p>

          <p>If that website generates just 2 additional clients per month — clients who would otherwise have bounced or gone to a competitor — and those clients have an average value of $1,500:</p>

          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0' }}>
            <p style={{ margin: 0, fontWeight: 700, color: '#15803d', fontSize: '1.1rem' }}>
              2 clients/month × $1,500 × 12 months = $36,000/year in new revenue<br />
              From a $3,500 investment = 928% ROI in year one
            </p>
          </div>

          <p>And unlike ad spend, the website keeps working in year two, year three, and beyond — at no additional cost.</p>

          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#111', margin: '2.5rem 0 1rem' }}>What Makes a Website Actually Convert</h2>
          <p>Not all websites are created equal. A $200 template from Wix won&apos;t get you 7% conversion. Here&apos;s what actually moves the needle:</p>

          <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Speed.</strong> Google data shows that a 1-second delay in page load reduces conversions by 7%. Most template-based sites are slow. Custom-built sites on modern frameworks like Next.js are fast by default.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Mobile-first design.</strong> Over 60% of web traffic is mobile. If your site wasn&apos;t designed for mobile first, you&apos;re handicapped before you start.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Clear calls to action.</strong> Every page should have one clear next step — call, request a quote, contact us. Generic template sites bury CTAs. Good design surfaces them.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>SEO foundation.</strong> A site that doesn&apos;t rank for your target keywords sends zero organic traffic. Technical SEO — proper meta tags, schema markup, fast load times, correct structure — is built in from day one on a custom site.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Social proof placement.</strong> Reviews and testimonials need to be on the page, not buried in a tab. Trust signals close to CTAs directly increase conversion rates.</li>
          </ul>

          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#111', margin: '2.5rem 0 1rem' }}>The Opportunity Cost of Waiting</h2>
          <p>Every month you operate without a professional website is a month of leads converting at 2% instead of 7%. For the average small business getting 500 monthly visitors, that&apos;s 25 leads per month you&apos;re leaving on the table. At a 30% close rate and $1,500 average value, that&apos;s $11,250/month in revenue that goes to whoever has the better website.</p>

          <p>The question isn&apos;t whether you can afford a professional website. It&apos;s whether you can afford not to have one.</p>

          <div style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)', borderRadius: '16px', padding: '3rem', marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.75rem' }}>Let&apos;s Build Something That Converts</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Pearl Labs builds custom Next.js websites engineered for speed, SEO, and conversion. No templates. No WordPress. Just fast, professional sites that work.
            </p>
            <Link
              href="/#contact"
              style={{ display: 'inline-block', background: BLUE, color: '#fff', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '10px', textDecoration: 'none', fontSize: '1rem' }}
            >
              Start the Conversation →
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}
