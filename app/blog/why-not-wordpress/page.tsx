import type { Metadata } from 'next'
import Link from 'next/link'
import NightOpsIcon from '@/app/components/NightOpsIcon'

const title = "Why We Don't Do WordPress"
const description = "Pearl Labs builds custom Next.js sites — not WordPress. Here's exactly why, and what you get instead."
const datePublished = '2026-02-15T00:00:00.000Z'
const dateModified = '2026-02-15T00:00:00.000Z'
const url = 'https://pearllab.io/blog/why-not-wordpress'

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

export default function WhyNotWordPress() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <Link href="/blog" className="blog-back">← Back to Field Notes</Link>

      <div className="blog-post-meta">
        <span className="tag">Web Development</span>
        <span>7 min read</span>
        <span>February 2026</span>
      </div>

      <h1>
        Why we don&apos;t do WordPress<br />(and why that&apos;s a feature, not a bug).
      </h1>

      <p className="blog-post-sub">
        Pearl Labs builds custom Next.js sites — not WordPress. Here&apos;s exactly why, and what you get instead.
      </p>

      <div className="blog-post-body">
        <p>
          <strong>WordPress powers 43% of the internet.</strong> It&apos;s the most widely deployed CMS on the planet, with millions of themes, tens of thousands of plugins, and a massive ecosystem of agencies that live and die by it.
        </p>
        <p>We don&apos;t touch it.</p>
        <p>
          That&apos;s not a contrarian stance. It&apos;s a deliberate choice made after building sites for real businesses and watching what actually happens when something goes wrong at 6pm on a Friday. This post is our honest breakdown of why we build on Next.js instead — including the cases where WordPress actually does make sense.
        </p>

        <hr />

        <h2>The plugin problem.</h2>
        <p>
          WordPress&apos;s plugin directory has over 58,000 plugins. That sounds like a feature. It&apos;s actually a liability.
        </p>
        <p>
          Every plugin is a dependency you don&apos;t control, written by a developer you&apos;ve never met, maintained on a timeline that isn&apos;t tied to yours. The average WordPress site runs 20–30 active plugins. Each one is a potential security vulnerability, a performance drag, and a future compatibility problem.
        </p>
        <p>
          Here&apos;s what the plugin lifecycle actually looks like in practice: you install a plugin to add a feature. It works. A year later, WordPress releases a major update. Two of your plugins haven&apos;t been updated in eight months. You update WordPress anyway — the site breaks. You&apos;re now debugging a conflict between a plugin from 2021 and a theme from 2019 on a WordPress version from last Tuesday.
        </p>
        <p>
          This isn&apos;t a worst-case scenario. It&apos;s routine. According to Wordfence, over 90% of WordPress security breaches come from vulnerable plugins and themes — not WordPress core itself. The ecosystem that makes WordPress flexible is the same ecosystem that makes it fragile.
        </p>

        <hr />

        <h2>Speed reality.</h2>
        <p>
          WordPress sites average 3–5 seconds to load. Next.js sites built and deployed correctly average 0.8–1.2 seconds.
        </p>
        <p>
          That gap matters because Google ranks fast sites higher. Core Web Vitals — specifically Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) — are direct ranking factors. A slow site isn&apos;t just annoying, it&apos;s algorithmically penalized.
        </p>
        <p>
          Google&apos;s own data shows that as page load time increases from 1 second to 3 seconds, bounce rate increases by 32%. At 5 seconds, it&apos;s a 90% increase. You can have the best service in your market and lose the customer before they ever read your headline — because your page took 4 seconds to show them anything.
        </p>
        <p>
          WordPress is slow by default because it&apos;s a server-side CMS that generates pages dynamically, runs PHP on every request, queries a database, and then piles on whatever your theme and plugins add to the mix. Next.js is fast by default — pages are pre-rendered at build time, images are automatically optimized, and there&apos;s no database roundtrip for every page load.
        </p>

        <hr />

        <h2>The ownership trap.</h2>
        <p>
          Try migrating a complex WordPress site. A real one — with a page builder, custom post types, a membership plugin, WooCommerce. Just try.
        </p>
        <p>
          What you&apos;ll find is that the site isn&apos;t really portable. It&apos;s a tangle of theme customizations stored in a MySQL database, shortcodes that only work with specific plugins, and CSS overrides layered on top of CSS overrides. Move it to a different host and half the styling breaks. Rebuild it with a different page builder and you&apos;re starting from scratch.
        </p>
        <p>
          That&apos;s not an accident. It&apos;s the inevitable result of building a site inside a proprietary builder ecosystem. The content is yours in theory. In practice, it&apos;s entangled with the tools used to build it.
        </p>
        <p>
          What you get with a custom Next.js codebase is genuinely different. The code is in a GitHub repository. It&apos;s readable, maintainable, and portable. Any competent developer can pick it up. You can move it to any hosting provider. You own the technology, not just the domain.
        </p>

        <hr />

        <h2>What you get instead.</h2>
        <p>When Pearl Labs ships a site, here&apos;s what the client receives:</p>
        <ul>
          <li><strong>A GitHub repository.</strong> Your code, your ownership. No agency lock-in, no proprietary builder dependency.</li>
          <li><strong>No monthly plugin fees.</strong> No Elementor Pro renewal. No WooCommerce extensions. No &ldquo;premium add-on required&rdquo; for basic features.</li>
          <li><strong>No white screen of death.</strong> No plugin update breaking your site at the worst possible moment. No 3am panic because the site is down before a launch.</li>
          <li><strong>Speed by default.</strong> Not something we add on at the end — it&apos;s baked into the architecture from day one.</li>
          <li><strong>Built for your specific needs.</strong> Not a template stretched to fit your brand. A design system and codebase built around your actual requirements.</li>
          <li><strong>Vercel deployment.</strong> Global edge network, automatic deployments on git push, built-in preview environments. Infrastructure that works without babysitting.</li>
        </ul>
        <p>
          This doesn&apos;t mean the site costs more to maintain. In most cases, it costs less — because there&apos;s nothing to maintain. No plugin updates, no PHP version compatibility checks, no hosting plans that come with 47 features you don&apos;t use.
        </p>

        <hr />

        <h2>When WordPress actually makes sense.</h2>
        <p>We&apos;re going to be honest here, because the answer isn&apos;t &ldquo;never.&rdquo;</p>
        <p>WordPress is a genuinely good choice in specific situations:</p>
        <ul>
          <li><strong>Content-heavy publishing sites</strong> where non-technical editors need to publish dozens of articles per week and the editorial workflow needs to be accessible to people who aren&apos;t developers.</li>
          <li><strong>Large existing ecosystems</strong> — if you&apos;ve already got 5 years of WooCommerce orders, customer accounts, and integrations, rebuilding isn&apos;t a simple calculation.</li>
          <li><strong>Organizations with existing WordPress expertise in-house</strong> who specifically want their team to manage the platform without developer involvement.</li>
        </ul>
        <p>
          In those cases, WordPress is the right tool. We&apos;ll tell you that directly in a discovery call rather than pushing you toward something that doesn&apos;t fit.
        </p>
        <p>
          But for the vast majority of small and mid-size businesses — service companies, local businesses, startups, agencies, SaaS products, portfolios — a custom Next.js build outperforms a WordPress site on every dimension that actually affects the business: speed, security, cost, and ownership.
        </p>

        <hr />

        <h2>The bottom line.</h2>
        <p>
          WordPress is a rental. You put money into it every month — hosting, plugins, maintenance — and what you own at the end of it is a configuration sitting on someone else&apos;s infrastructure, dependent on someone else&apos;s software.
        </p>
        <p>
          We build for businesses that want to own their technology. Not rent it. A site that belongs to you, performs out of the box, and doesn&apos;t surprise you with a broken homepage the week before your biggest campaign.
        </p>
        <p>That&apos;s what a custom build is. That&apos;s what Pearl Labs delivers.</p>
      </div>

      <div className="blog-post-cta">
        <h2>Ready for a site you actually own?</h2>
        <p>Let&apos;s build something fast, clean, and yours. 48-hour brief back.</p>
        <Link href="/for-small-business#form" className="case-btn case-btn-primary">
          Request a Brief <NightOpsIcon name="arrow-right" size={14} />
        </Link>
      </div>
    </article>
  )
}
