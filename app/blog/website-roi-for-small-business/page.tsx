import type { Metadata } from 'next'
import Link from 'next/link'
import NightOpsIcon from '@/app/components/NightOpsIcon'

const title = "What's the ROI of a Professional Website for a Small Business?"
const description = "A professional website pays for itself many times over. Here's the real ROI math for small businesses investing in their online presence."
const datePublished = '2026-02-20T00:00:00.000Z'
const dateModified = '2026-02-20T00:00:00.000Z'
const url = 'https://pearllab.io/blog/website-roi-for-small-business'

export const metadata: Metadata = {
  title: `${title} — Pearl Labs`,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article', publishedTime: datePublished },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  datePublished,
  dateModified,
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  author: { '@type': 'Person', name: 'Keegan Pearl', url: 'https://pearllab.io' },
  publisher: { '@type': 'Organization', name: 'Pearl Labs', url: 'https://pearllab.io' },
}

export default function ArticlePage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <Link href="/blog" className="blog-back">← Back to Field Notes</Link>

      <div className="blog-post-meta">
        <span className="tag">Business</span>
        <span>5 min read</span>
        <span>February 2026</span>
      </div>

      <h1>Website ROI for small business.</h1>

      <p className="blog-post-sub">
        Most small businesses underestimate what a professional website is worth. Here&apos;s the real math — and why it&apos;s one of the highest-ROI investments you can make.
      </p>

      <div className="blog-post-body">
        <div className="blog-callout">
          A small business website that converts just 2 additional clients per month — at $1,500 average value — generates $36,000/year in new revenue from a one-time investment.
        </div>

        <p>
          The question business owners ask us most often is: &ldquo;How much does a website cost?&rdquo; The better question is: &ldquo;What&apos;s it worth?&rdquo; Because if you&apos;re asking about the cost before the value, you&apos;re thinking about it backwards.
        </p>
        <p>
          A professional website isn&apos;t a marketing expense. It&apos;s a revenue-generating asset. Like a piece of equipment that works 24/7, never calls in sick, and costs nothing to operate after the initial investment.
        </p>
        <p>Let&apos;s look at the actual ROI math.</p>

        <hr />

        <h2>The lead conversion math.</h2>
        <p>
          Most small businesses with a basic or no website convert less than 2% of website visitors into leads. A professional, well-built site typically converts 5–10%. The difference sounds small. The revenue impact is massive.
        </p>
        <p>
          Take a local service business getting 500 website visits per month. At 2% conversion, that&apos;s 10 leads. At 7% conversion, it&apos;s 35 leads. If you close 30% of leads and your average job is $2,000, the difference is:
        </p>

        <div className="blog-compare">
          <div className="blog-compare-card blog-compare-card--low">
            <span className="label">Basic website · 2% conversion</span>
            <p>10 leads / month</p>
            <p>3 closed jobs</p>
            <p className="num">$6,000 / month</p>
          </div>
          <div className="blog-compare-card blog-compare-card--high">
            <span className="label">Professional site · 7% conversion</span>
            <p>35 leads / month</p>
            <p>10–11 closed jobs</p>
            <p className="num">$20,000+ / month</p>
          </div>
        </div>

        <p>
          The website didn&apos;t bring more traffic. It just converted more of the traffic you were already getting. That&apos;s the highest-leverage improvement most small businesses can make.
        </p>

        <hr />

        <h2>The credibility effect.</h2>
        <p>
          Conversion rates aren&apos;t just about design. They&apos;re about trust. And your website is often the first real impression a potential client gets of your business.
        </p>
        <p>
          Studies consistently show that 75% of consumers judge a business&apos;s credibility based on their website design. Not their reviews. Not their prices. Their website. If your site looks dated, loads slowly, or doesn&apos;t work well on mobile, potential clients form a negative impression before they&apos;ve read a single word.
        </p>
        <p>The credibility effect works in multiple directions:</p>
        <ul>
          <li><strong>Referrals land differently.</strong> When someone refers you and the prospect checks your website and it looks professional, the referral converts faster. When the website looks sketchy, the referral doubts the recommendation.</li>
          <li><strong>Price resistance drops.</strong> A professional website justifies premium pricing. Clients expect to pay more for a business that clearly invests in quality. An outdated website signals a cheap operation.</li>
          <li><strong>You attract better clients.</strong> Higher-value clients — the ones with bigger projects and fewer headaches — filter by credibility signals. Your website is the first one.</li>
        </ul>

        <hr />

        <h2>Cost vs. value: the real comparison.</h2>
        <p>
          A professionally built website from an agency like Pearl Labs typically costs $2,000–$5,000 as a one-time investment. Let&apos;s be conservative and say $3,500.
        </p>
        <p>
          If that website generates just 2 additional clients per month — clients who would otherwise have bounced or gone to a competitor — and those clients have an average value of $1,500:
        </p>

        <div className="blog-callout blog-callout--success">
          2 clients / month × $1,500 × 12 months = <strong>$36,000 / year</strong> in new revenue.<br />
          From a $3,500 investment = <strong>928% ROI</strong> in year one.
        </div>

        <p>
          And unlike ad spend, the website keeps working in year two, year three, and beyond — at no additional cost.
        </p>

        <hr />

        <h2>What makes a website actually convert.</h2>
        <p>Not all websites are created equal. A $200 template from Wix won&apos;t get you 7% conversion. Here&apos;s what actually moves the needle:</p>
        <ul>
          <li><strong>Speed.</strong> Google data shows a 1-second delay in page load reduces conversions by 7%. Custom-built sites on modern frameworks are fast by default.</li>
          <li><strong>Mobile-first design.</strong> Over 60% of web traffic is mobile. If your site wasn&apos;t designed for mobile first, you&apos;re handicapped before you start.</li>
          <li><strong>Clear calls to action.</strong> Every page should have one clear next step — call, request a quote, contact us. Generic template sites bury CTAs.</li>
          <li><strong>SEO foundation.</strong> Technical SEO — proper meta tags, schema markup, fast load times, correct structure — is built in from day one on a custom site.</li>
          <li><strong>Social proof placement.</strong> Trust signals close to CTAs directly increase conversion rates.</li>
        </ul>

        <hr />

        <h2>The opportunity cost of waiting.</h2>
        <p>
          Every month you operate without a professional website is a month of leads converting at 2% instead of 7%. For the average small business getting 500 monthly visitors, that&apos;s 25 leads per month you&apos;re leaving on the table. At a 30% close rate and $1,500 average value, that&apos;s $11,250/month in revenue that goes to whoever has the better website.
        </p>
        <p>
          The question isn&apos;t whether you can afford a professional website. It&apos;s whether you can afford not to have one.
        </p>
      </div>

      <div className="blog-post-cta">
        <h2>Let&apos;s build something that converts.</h2>
        <p>Pearl Labs builds custom Next.js websites engineered for speed, SEO, and conversion. No templates. No WordPress.</p>
        <Link href="/for-small-business#form" className="case-btn case-btn-primary">
          Start the Conversation <NightOpsIcon name="arrow-right" size={14} />
        </Link>
      </div>
    </article>
  )
}
