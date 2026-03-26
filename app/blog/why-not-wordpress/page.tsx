import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Why We Don\'t Do WordPress (And Why That\'s a Feature, Not a Bug) — Pearl Labs',
  description: 'Pearl Labs builds custom Next.js sites — not WordPress. Here\'s exactly why, and what you get instead.',
}

export default function WhyNotWordPress() {
  return (
    <article className="pt-20 pb-24">
      <div className="max-w-[720px] mx-auto px-6">

        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] text-white/30 hover:text-white/50 transition-colors mb-10">
          &larr; Back to Blog
        </Link>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[11px] font-mono px-2 py-0.5 rounded text-[#00D4FF]/60 bg-[#00D4FF]/[0.08] uppercase tracking-[0.08em] font-medium">Web Development</span>
          <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">7 min read</span>
          <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">February 2026</span>
        </div>

        {/* Title */}
        <h1 className="font-display font-semibold tracking-[-0.03em] text-white mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.15 }}>
          Why We Don&apos;t Do WordPress<br />(And Why That&apos;s a Feature, Not a Bug)
        </h1>

        {/* Subtitle */}
        <p className="text-[17px] leading-relaxed text-white/45 mb-16">
          Pearl Labs builds custom Next.js sites — not WordPress. Here&apos;s exactly why, and what you get instead.
        </p>

        {/* Article body */}
        <div className="text-[15px] leading-[1.8] text-white/50">

          {/* Intro */}
          <p className="text-[16px] font-medium text-white/70 mt-0 leading-[1.75]">
            WordPress powers 43% of the internet. It&apos;s the most widely deployed CMS on the planet, with millions of themes, tens of thousands of plugins, and a massive ecosystem of agencies that live and die by it.
          </p>
          <p className="mt-6">
            We don&apos;t touch it.
          </p>
          <p className="mt-6">
            That&apos;s not a contrarian stance. It&apos;s a deliberate choice made after building sites for real businesses and watching what actually happens when something goes wrong at 6pm on a Friday. This post is our honest breakdown of why we build on Next.js instead — including the cases where WordPress actually does make sense.
          </p>

          <div className="h-px my-10" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }} />

          {/* Section 1 */}
          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">
            Section 1: The Plugin Problem
          </h2>
          <p className="mt-6">
            WordPress&apos;s plugin directory has over 58,000 plugins. That sounds like a feature. It&apos;s actually a liability.
          </p>
          <p className="mt-6">
            Every plugin is a dependency you don&apos;t control, written by a developer you&apos;ve never met, maintained on a timeline that isn&apos;t tied to yours. The average WordPress site runs 20–30 active plugins. Each one is a potential security vulnerability, a performance drag, and a future compatibility problem.
          </p>
          <p className="mt-6">
            Here&apos;s what the plugin lifecycle actually looks like in practice: You install a plugin to add a feature. It works. A year later, WordPress releases a major update. Two of your plugins haven&apos;t been updated in eight months. You update WordPress anyway — the site breaks. You&apos;re now debugging a conflict between a plugin from 2021 and a theme from 2019 on a WordPress version from last Tuesday.
          </p>
          <p className="mt-6">
            This isn&apos;t a worst-case scenario. It&apos;s routine. According to Wordfence, over 90% of WordPress security breaches come from vulnerable plugins and themes — not WordPress core itself. The ecosystem that makes WordPress flexible is the same ecosystem that makes it fragile.
          </p>
          <p className="mt-6">
            Security plugins help — but they&apos;re also plugins. So now you&apos;re running a plugin to protect you from the vulnerabilities introduced by other plugins. At some point, the complexity compounds into something unmanageable.
          </p>

          <div className="h-px my-10" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }} />

          {/* Section 2 */}
          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">
            Section 2: Speed Reality
          </h2>
          <p className="mt-6">
            WordPress sites average 3–5 seconds to load. Next.js sites built and deployed correctly average 0.8–1.2 seconds.
          </p>
          <p className="mt-6">
            That gap matters because Google ranks fast sites higher. Core Web Vitals — specifically Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) — are direct ranking factors. A slow site isn&apos;t just annoying, it&apos;s algorithmically penalized.
          </p>
          <p className="mt-6">
            Google&apos;s own data shows that as page load time increases from 1 second to 3 seconds, bounce rate increases by 32%. At 5 seconds, it&apos;s a 90% increase. You can have the best service in your market and lose the customer before they ever read your headline — because your page took 4 seconds to show them anything.
          </p>
          <p className="mt-6">
            WordPress is slow by default because it&apos;s a server-side CMS that generates pages dynamically, runs PHP on every request, queries a database, and then piles on whatever your theme and plugins add to the mix. You can partially mitigate this with caching plugins and CDN configuration — but you&apos;re working against the architecture.
          </p>
          <p className="mt-6">
            Next.js is fast by default. Pages are pre-rendered at build time (static generation) or server-side with optimized caching. Images are automatically optimized and lazy-loaded. There&apos;s no database roundtrip for every page load. No PHP overhead. The result is a site that scores in the 90s on Google PageSpeed without heroics.
          </p>

          <div className="h-px my-10" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }} />

          {/* Section 3 */}
          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">
            Section 3: The Ownership Trap
          </h2>
          <p className="mt-6">
            Try migrating a complex WordPress site. A real one — with a page builder, custom post types, a membership plugin, WooCommerce. Just try.
          </p>
          <p className="mt-6">
            What you&apos;ll find is that the site isn&apos;t really portable. It&apos;s a tangle of theme customizations stored in a MySQL database, shortcodes that only work with specific plugins, and CSS overrides layered on top of CSS overrides. Move it to a different host and half the styling breaks. Rebuild it with a different page builder and you&apos;re starting from scratch.
          </p>
          <p className="mt-6">
            That&apos;s not an accident. It&apos;s the inevitable result of building a site inside a proprietary builder ecosystem. The content is yours in theory. In practice, it&apos;s entangled with the tools used to build it.
          </p>
          <p className="mt-6">
            What you get with a custom Next.js codebase is genuinely different. The code is in a GitHub repository. It&apos;s readable, maintainable, and portable. Any competent developer can pick it up. You can move it to any hosting provider. You can add features without touching the existing ones. You own the technology, not just the domain.
          </p>

          <div className="h-px my-10" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }} />

          {/* Section 4 */}
          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">
            Section 4: What You Get Instead
          </h2>
          <p className="mt-6">
            When Pearl Labs ships a site, here&apos;s what the client receives:
          </p>
          <ul className="pl-6 mt-4 flex flex-col gap-3 text-white/50">
            <li><strong className="text-white/70">A GitHub repository.</strong> Your code, your ownership. No agency lock-in, no proprietary builder dependency.</li>
            <li><strong className="text-white/70">No monthly plugin fees.</strong> No Elementor Pro renewal. No WooCommerce extensions. No &quot;premium add-on required&quot; for basic features.</li>
            <li><strong className="text-white/70">No white screen of death.</strong> No plugin update breaking your site at the worst possible moment. No 3am panic because the site is down before a launch.</li>
            <li><strong className="text-white/70">Speed by default.</strong> Not something we add on at the end — it&apos;s baked into the architecture from day one.</li>
            <li><strong className="text-white/70">Built for your specific needs.</strong> Not a template stretched to fit your brand. A design system and codebase built around your actual requirements.</li>
            <li><strong className="text-white/70">Vercel deployment.</strong> Global edge network, automatic deployments on git push, built-in preview environments. Infrastructure that works without babysitting.</li>
          </ul>
          <p className="mt-6">
            This doesn&apos;t mean the site costs more to maintain. In most cases, it costs less — because there&apos;s nothing to maintain. No plugin updates, no PHP version compatibility checks, no hosting plans that come with 47 features you don&apos;t use.
          </p>

          <div className="h-px my-10" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }} />

          {/* Section 5 */}
          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">
            Section 5: When WordPress Actually Makes Sense
          </h2>
          <p className="mt-6">
            We&apos;re going to be honest here, because the answer isn&apos;t &quot;never.&quot;
          </p>
          <p className="mt-6">
            WordPress is a genuinely good choice in specific situations:
          </p>
          <ul className="pl-6 mt-4 flex flex-col gap-3 text-white/50">
            <li><strong className="text-white/70">Content-heavy publishing sites</strong> where non-technical editors need to publish dozens of articles per week and the editorial workflow needs to be accessible to people who aren&apos;t developers.</li>
            <li><strong className="text-white/70">Large existing ecosystems</strong> — if you&apos;ve already got 5 years of WooCommerce orders, customer accounts, and integrations, rebuilding isn&apos;t a simple calculation.</li>
            <li><strong className="text-white/70">Organizations with existing WordPress expertise in-house</strong> who specifically want their team to manage the platform without developer involvement.</li>
          </ul>
          <p className="mt-6">
            In those cases, WordPress is the right tool. We&apos;ll tell you that directly in a discovery call rather than pushing you toward something that doesn&apos;t fit.
          </p>
          <p className="mt-6">
            But for the vast majority of small and mid-size businesses — service companies, local businesses, startups, agencies, SaaS products, portfolios — a custom Next.js build outperforms a WordPress site on every dimension that actually affects the business: speed, security, cost, and ownership.
          </p>

          <div className="h-px my-10" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }} />

          {/* Conclusion */}
          <h2 className="font-display font-semibold text-white/85 text-xl tracking-tight mt-12 mb-4">
            The Bottom Line
          </h2>
          <p className="mt-6">
            WordPress is a rental. You put money into it every month — hosting, plugins, maintenance — and what you own at the end of it is a configuration sitting on someone else&apos;s infrastructure, dependent on someone else&apos;s software.
          </p>
          <p className="mt-6">
            That&apos;s fine if that&apos;s the trade-off you want to make. Some businesses prefer the flexibility of a managed ecosystem over the responsibility of ownership. We get it.
          </p>
          <p className="mt-6">
            We build for businesses that want to own their technology. Not rent it. A site that belongs to you, performs out of the box, and doesn&apos;t surprise you with a broken homepage the week before your biggest campaign.
          </p>
          <p className="mt-6">
            That&apos;s what a custom build is. That&apos;s what Pearl Labs delivers.
          </p>
        </div>

        {/* CTA Card */}
        <div className="mt-20 rounded-xl border border-[#00D4FF]/15 bg-[#00D4FF]/[0.03] p-10 text-center">
          <h2 className="font-display font-semibold text-white text-xl tracking-tight mb-3">
            Ready for a site you actually own?
          </h2>
          <p className="text-[15px] text-white/45 mb-6 leading-relaxed">
            Let&apos;s build something fast, clean, and yours.
          </p>
          <Link
            href="/estimate"
            className="inline-block bg-[#00D4FF] text-[#050508] font-semibold text-[15px] px-8 py-3 rounded-lg hover:bg-[#00D4FF]/90 transition-colors"
          >
            Get in Touch &rarr;
          </Link>
        </div>

      </div>
    </article>
  )
}
