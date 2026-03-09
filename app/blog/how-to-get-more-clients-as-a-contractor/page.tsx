import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Florida Contractors Get More Clients Without Paying for Ads — Pearl Labs',
  description: 'Florida contractors are winning more jobs without ad spend by optimizing Google Business Profile, building referral systems, and creating credible websites. Here\'s exactly how.',
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
          <span style={{ background: 'rgba(74,158,255,0.1)', color: BLUE, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '4px' }}>Growth</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>8 min read</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>March 2026</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#fff', lineHeight: 1.15, margin: '0 0 1.5rem' }}>
          How Florida Contractors Get More Clients Without Paying for Ads
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.15rem', lineHeight: 1.7, margin: 0 }}>
          Google Business Profile, referral systems, and a credible website are generating consistent leads for Ocala and Central Florida contractors — at zero ad spend.
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
              Most Florida contractors are spending $500–$2,000/month on ads and getting inconsistent results. The contractors winning the most jobs are spending that money on their website and Google presence instead.
            </p>
          </div>

          <p>The Florida contractor market is competitive. Whether you&apos;re doing fence, HVAC, roofing, landscaping, or remodeling in the Ocala / Central Florida area, you&apos;re competing with dozens of other businesses for the same homeowners and commercial clients. Most of them are buying Google Ads and hoping for clicks.</p>

          <p>But the contractors consistently landing quality jobs — the ones who have a waitlist, not a slow season — aren&apos;t necessarily the ones with the biggest ad budgets. They&apos;re the ones who built the right foundations. Here&apos;s what that looks like.</p>

          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#111', margin: '2.5rem 0 1rem' }}>1. Google Business Profile: Your Free Lead Machine</h2>
          <p>When someone in Ocala searches &quot;fence contractor near me&quot; or &quot;roofing company Ocala FL,&quot; Google shows a map pack — three local businesses with reviews, photos, and contact info. Getting into that map pack is worth more than any ad campaign you can run.</p>

          <p>Most contractors have a Google Business Profile. Almost none have optimized it. Here&apos;s the difference between a basic listing and one that generates consistent leads:</p>

          <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Photos:</strong> Add 20+ real photos of completed jobs. Before/after is gold. Google rewards profiles with recent, high-quality photos with better placement.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Reviews:</strong> 50+ reviews with 4.7+ rating puts you in the map pack. Ask every satisfied customer. Make it easy — send them a direct review link via text.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Posts:</strong> Google Business Posts are like mini social media posts that show on your listing. Post a completed project once a week. It signals activity and improves ranking.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Keywords:</strong> Your business description and service areas should include the exact phrases people search. &quot;Fence contractor Ocala FL&quot; not just &quot;we install fences.&quot;</li>
          </ul>

          <p>A fully optimized Google Business Profile in a mid-size Florida market like Ocala can generate 15–30 qualified leads per month at zero ongoing cost. That&apos;s the foundation everything else is built on.</p>

          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#111', margin: '2.5rem 0 1rem' }}>2. Build a Referral System, Not Just Referrals</h2>
          <p>Every contractor gets some referrals. The difference between occasional referrals and a referral machine is whether you have a system or just hope.</p>

          <p>A referral system has three components:</p>

          <ol style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Ask at the right moment.</strong> The best time to ask for a referral is right after the customer expresses satisfaction — when they say &quot;wow, this looks great.&quot; Not a week later via email. At that moment, on the job site.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Make it specific.</strong> &quot;Do you know anyone who needs a fence?&quot; is weak. &quot;You mentioned your neighbor was asking about your fence — can I drop off a card for them?&quot; is specific and actionable.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Reward it.</strong> A $100–$200 referral credit for the next job creates real incentive. Some contractors do gift cards. Whatever you do, follow through immediately when a referral converts.</li>
          </ol>

          <p>Contractors in high-density Florida markets like Marion County and Citrus County find that 40–60% of their jobs eventually come from referrals when they have a systematic approach versus 15–25% when they&apos;re relying on organic word of mouth.</p>

          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#111', margin: '2.5rem 0 1rem' }}>3. Website Trust Signals That Convert Visitors Into Calls</h2>
          <p>Your website isn&apos;t just a brochure — it&apos;s where leads decide whether to call you or click the back button. Most contractor websites fail this test because they look like they were built in 2012 and haven&apos;t been touched since.</p>

          <p>Here&apos;s what a high-converting contractor website needs:</p>

          <ul style={{ paddingLeft: '1.5rem', margin: '1rem 0' }}>
            <li style={{ marginBottom: '0.75rem' }}><strong>Phone number above the fold.</strong> Big, clickable on mobile. This is the single highest-leverage change most contractor sites can make.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Real project photos.</strong> Stock photos kill trust instantly. Real photos of real jobs you&apos;ve done in the local market build it.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Google reviews embedded.</strong> Show your reviews directly on the page. Social proof from a third party is more convincing than anything you write about yourself.</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Service area specificity.</strong> &quot;We serve Ocala, Belleview, The Villages, Dunnellon, and surrounding Marion County communities&quot; performs significantly better than &quot;serving Central Florida.&quot;</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Fast load times.</strong> If your site takes more than 2 seconds to load on mobile, you&apos;re losing leads before they even see it. This is a technical problem that requires a proper developer.</li>
          </ul>

          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#111', margin: '2.5rem 0 1rem' }}>4. The Ocala Market Opportunity</h2>
          <p>Ocala and Marion County are in a construction boom. Population growth, new development, and the influx of remote workers buying rural properties have created a surge in demand for home improvement services. The contractors positioned to capture this are the ones with visible, credible digital presence.</p>

          <p>The competition in this market is still largely behind on digital presence. Most local contractors have outdated websites, incomplete Google profiles, and no systematic approach to referrals. That gap is an opportunity. Contractors who build their digital foundation now will have a significant advantage as the market becomes more competitive over the next 3–5 years.</p>

          <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#111', margin: '2.5rem 0 1rem' }}>The Bottom Line</h2>
          <p>You don&apos;t need a $2,000/month ad budget to generate consistent leads. You need a Google Business Profile that&apos;s actually optimized, a referral system that runs on autopilot, and a website that converts visitors into calls. These are one-time investments that compound over time — unlike ad spend, which stops the moment you stop paying.</p>

          <div style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)', borderRadius: '16px', padding: '3rem', marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.75rem' }}>Ready to Build Your Digital Foundation?</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Pearl Labs builds fast, professional websites for Florida contractors. We handle everything — design, development, SEO setup, and Google Business optimization. No templates. No WordPress.
            </p>
            <Link
              href="/#contact"
              style={{ display: 'inline-block', background: BLUE, color: '#fff', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '10px', textDecoration: 'none', fontSize: '1rem' }}
            >
              Get a Free Consultation →
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}
