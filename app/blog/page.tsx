import Link from 'next/link'

const posts = [
  {
    slug: 'why-not-wordpress',
    title: "Why We Don't Do WordPress",
    desc: "WordPress powers 43% of the web. We don't touch it. Here's exactly why, and what you get instead.",
    date: 'Feb 2026',
    readTime: '7 min',
    tag: 'Web Development',
  },
  {
    slug: 'website-roi-for-small-business',
    title: 'Website ROI for Small Business',
    desc: 'How a professional website pays for itself through credibility, conversion, and competitive advantage.',
    date: 'Feb 2026',
    readTime: '5 min',
    tag: 'Business',
  },
  {
    slug: 'how-to-get-more-clients-as-a-contractor',
    title: 'How to Get More Clients as a Contractor',
    desc: 'Practical strategies for contractors who want to stop relying on word-of-mouth alone.',
    date: 'Feb 2026',
    readTime: '6 min',
    tag: 'Marketing',
  },
]

export default function BlogIndex() {
  return (
    <main className="pt-28 lg:pt-32 pb-28 lg:pb-36 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-white/20" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/30">Blog</span>
          </div>
          <h1 className="font-display font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
            Insights &amp; perspective
          </h1>
          <p className="text-[15px] leading-[1.7] text-white/34 max-w-[480px]">
            Real talk on web development, performance, and building technology that businesses actually own.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group rounded-xl p-7 lg:p-8 transition-all duration-500 block"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>

              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded text-[#00D4FF]/50"
                  style={{ background: 'rgba(0,212,255,0.06)' }}>
                  {post.tag}
                </span>
                <span className="text-[11px] text-white/18 font-mono">{post.readTime}</span>
              </div>

              <h2 className="font-display font-semibold text-white/80 text-[16px] tracking-tight mb-2 group-hover:text-white/95 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-[13px] leading-[1.65] text-white/28 mb-5">{post.desc}</p>

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-white/16 font-mono">{post.date}</span>
                <span className="text-[12px] font-medium text-white/25 group-hover:text-white/45 transition-colors duration-300">
                  Read &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
