import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "What's the ROI of a Professional Website for a Small Business? — Pearl Labs",
  description: 'A professional website pays for itself many times over. Here\'s the real ROI math for small businesses investing in their online presence.',
}

export default function ArticlePage() {
  return (
    <article className="pt-20 pb-24">
      <div className="max-w-[720px] mx-auto px-6">

        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] text-white/30 hover:text-white/50 transition-colors mb-10">
          &larr; Back to Blog
        </Link>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[11px] font-mono px-2 py-0.5 rounded text-[#00D4FF]/60 bg-[#00D4FF]/[0.08] uppercase tracking-[0.08em] font-medium">Strategy</span>
          <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">7 min read</span>
          <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">March 2026</span>
        </div>

        {/* Title */}
        <h1 className="font-display font-semibold tracking-[-0.03em] text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.15 }}>
          What&apos;s the ROI of a Professional Website for a Small Business?
        </h1>

        {/* Subtitle */}
        <p className="text-[17px] leading-relaxed text-white/45 mb-16">
          Most small businesses underestimate what a professional website is worth. Here&apos;s the real math — and why it&apos;s one of the highest-ROI investments you can make.
        </p>

        {/* Article body */}
        <div className="text-[15px] leading-[1.8] text-white/50">

          {/* Callout */}
          <div className="border-l-2 border-[#00D4FF]/30 bg-[#00D4FF]/[0.04] rounded-r-lg px-5 py-4 mb-10">
            <p className="m-0 font-semibold text-[#00D4FF]/80 text-[15px] leading-[1.7]">
              A small business website that converts just 2 additional clients per month — at $1,500 average value — generates $36,000/year in new revenue from a one-time investment.
            </p>
          </div>

          <p>The question business owners ask us most often is: &quot;How much does a website cost?&quot; The better question is: &quot;What&apos;s it worth?&quot; Because if you&apos;re asking about the cost before the value, you&apos;re thinking about it backwards.</p>

          <p className="mt-6">A professional website isn&apos;t a marketing expense. It&apos;s a revenue-generating asset. Like a piece of equipment that works 24/7, never calls in sick, and costs nothing to operate after the initial investment.</p>

          <p className="mt-6">Let&apos;s look at the actual ROI math.</p>

          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">The Lead Conversion Math</h2>
          <p className="mt-6">Most small businesses with a basic or no website convert less than 2% of website visitors into leads. A professional, well-built site typically converts 5–10%. The difference sounds small. The revenue impact is massive.</p>

          <p className="mt-6">Take a local service business getting 500 website visits per month. At 2% conversion, that&apos;s 10 leads. At 7% conversion, it&apos;s 35 leads. If you close 30% of leads and your average job is $2,000, the difference is:</p>

          {/* Comparison cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
              <p className="font-semibold text-white/40 text-[13px] uppercase tracking-wide mb-3">Basic website (2% conversion)</p>
              <p className="text-white/50 my-1">10 leads/month</p>
              <p className="text-white/50 my-1">3 closed jobs</p>
              <p className="font-semibold text-red-400/80 my-1">$6,000/month</p>
            </div>
            <div className="rounded-lg border border-[#00D4FF]/10 bg-[#00D4FF]/[0.03] p-5">
              <p className="font-semibold text-[#00D4FF]/60 text-[13px] uppercase tracking-wide mb-3">Professional site (7% conversion)</p>
              <p className="text-white/50 my-1">35 leads/month</p>
              <p className="text-white/50 my-1">10-11 closed jobs</p>
              <p className="font-semibold text-emerald-400/80 my-1">$20,000+/month</p>
            </div>
          </div>

          <p className="mt-6">The website didn&apos;t bring more traffic. It just converted more of the traffic you were already getting. That&apos;s the highest-leverage improvement most small businesses can make.</p>

          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">The Credibility Effect</h2>
          <p className="mt-6">Conversion rates aren&apos;t just about design. They&apos;re about trust. And your website is often the first real impression a potential client gets of your business.</p>

          <p className="mt-6">Studies consistently show that 75% of consumers judge a business&apos;s credibility based on their website design. Not their reviews. Not their prices. Their website. If your site looks dated, loads slowly, or doesn&apos;t work well on mobile, potential clients form a negative impression before they&apos;ve read a single word.</p>

          <p className="mt-6">The credibility effect works in multiple directions:</p>

          <ul className="pl-6 mt-4 flex flex-col gap-3 text-white/50">
            <li><strong className="text-white/70">Referrals land differently.</strong> When someone refers you and the prospect checks your website and it looks professional, the referral converts faster. When the website looks sketchy, the referral doubts the recommendation.</li>
            <li><strong className="text-white/70">Price resistance drops.</strong> A professional website justifies premium pricing. Clients expect to pay more for a business that clearly invests in quality. An outdated website signals a cheap operation.</li>
            <li><strong className="text-white/70">You attract better clients.</strong> Higher-value clients — the ones with bigger projects and fewer headaches — filter by credibility signals. Your website is the first one.</li>
          </ul>

          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">Cost vs. Value: The Real Comparison</h2>
          <p className="mt-6">A professionally built website from an agency like Pearl Labs typically costs $2,000–$5,000 as a one-time investment. Let&apos;s be conservative and say $3,500.</p>

          <p className="mt-6">If that website generates just 2 additional clients per month — clients who would otherwise have bounced or gone to a competitor — and those clients have an average value of $1,500:</p>

          {/* ROI highlight */}
          <div className="border border-emerald-400/15 bg-emerald-400/[0.04] rounded-lg px-5 py-4 my-8">
            <p className="m-0 font-semibold text-emerald-400/80 text-[15px] leading-[1.7]">
              2 clients/month x $1,500 x 12 months = $36,000/year in new revenue<br />
              From a $3,500 investment = 928% ROI in year one
            </p>
          </div>

          <p className="mt-6">And unlike ad spend, the website keeps working in year two, year three, and beyond — at no additional cost.</p>

          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">What Makes a Website Actually Convert</h2>
          <p className="mt-6">Not all websites are created equal. A $200 template from Wix won&apos;t get you 7% conversion. Here&apos;s what actually moves the needle:</p>

          <ul className="pl-6 mt-4 flex flex-col gap-3 text-white/50">
            <li><strong className="text-white/70">Speed.</strong> Google data shows that a 1-second delay in page load reduces conversions by 7%. Most template-based sites are slow. Custom-built sites on modern frameworks like Next.js are fast by default.</li>
            <li><strong className="text-white/70">Mobile-first design.</strong> Over 60% of web traffic is mobile. If your site wasn&apos;t designed for mobile first, you&apos;re handicapped before you start.</li>
            <li><strong className="text-white/70">Clear calls to action.</strong> Every page should have one clear next step — call, request a quote, contact us. Generic template sites bury CTAs. Good design surfaces them.</li>
            <li><strong className="text-white/70">SEO foundation.</strong> A site that doesn&apos;t rank for your target keywords sends zero organic traffic. Technical SEO — proper meta tags, schema markup, fast load times, correct structure — is built in from day one on a custom site.</li>
            <li><strong className="text-white/70">Social proof placement.</strong> Reviews and testimonials need to be on the page, not buried in a tab. Trust signals close to CTAs directly increase conversion rates.</li>
          </ul>

          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">The Opportunity Cost of Waiting</h2>
          <p className="mt-6">Every month you operate without a professional website is a month of leads converting at 2% instead of 7%. For the average small business getting 500 monthly visitors, that&apos;s 25 leads per month you&apos;re leaving on the table. At a 30% close rate and $1,500 average value, that&apos;s $11,250/month in revenue that goes to whoever has the better website.</p>

          <p className="mt-6">The question isn&apos;t whether you can afford a professional website. It&apos;s whether you can afford not to have one.</p>
        </div>

        {/* CTA Card */}
        <div className="mt-20 rounded-xl border border-[#00D4FF]/15 bg-[#00D4FF]/[0.03] p-10 text-center">
          <h2 className="font-display font-semibold text-white text-xl tracking-tight mb-3">
            Let&apos;s Build Something That Converts
          </h2>
          <p className="text-[15px] text-white/45 mb-6 leading-relaxed max-w-md mx-auto">
            Pearl Labs builds custom Next.js websites engineered for speed, SEO, and conversion. No templates. No WordPress. Just fast, professional sites that work.
          </p>
          <Link
            href="/estimate"
            className="inline-block bg-[#00D4FF] text-[#050508] font-semibold text-[15px] px-8 py-3 rounded-lg hover:bg-[#00D4FF]/90 transition-colors"
          >
            Start the Conversation &rarr;
          </Link>
        </div>

      </div>
    </article>
  )
}
