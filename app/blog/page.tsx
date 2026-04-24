import Link from 'next/link'
import NightOpsIcon from '../components/NightOpsIcon'

const posts = [
  {
    slug: 'why-not-wordpress',
    title: "Why we don't do WordPress.",
    desc: "WordPress powers 43% of the web. We don't touch it. Here's exactly why, and what you get instead.",
    date: 'Feb 2026',
    readTime: '7 min',
    tag: 'Web Development',
  },
  {
    slug: 'website-roi-for-small-business',
    title: 'Website ROI for small business.',
    desc: 'How a professional website pays for itself through credibility, conversion, and competitive advantage.',
    date: 'Feb 2026',
    readTime: '5 min',
    tag: 'Business',
  },
  {
    slug: 'how-to-get-more-clients-as-a-contractor',
    title: 'How to get more clients as a contractor.',
    desc: 'Practical strategies for Florida contractors who want to stop relying on word-of-mouth alone.',
    date: 'Feb 2026',
    readTime: '6 min',
    tag: 'Growth',
  },
]

export default function BlogIndex() {
  return (
    <>
      <section className="case-hero">
        <div className="container">
          <Link href="/" className="case-back">← Back to Pearl Labs</Link>
          <div className="case-hero-cat">Field Notes · Engineering Briefs</div>
          <h1>Field notes.</h1>
          <p className="case-hero-lead" style={{ maxWidth: 620 }}>
            Real talk on web development, performance, and building technology that businesses actually own. Written by the engineers who shipped the work.
          </p>
        </div>
      </section>

      <section className="section-narrow">
        <div className="container">
          <div className="blog-grid">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-meta">
                  <span className="tag">{post.tag}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.desc}</p>
                <div className="blog-card-foot">
                  <span>{post.date}</span>
                  <span className="read">
                    Read <NightOpsIcon name="arrow-right" size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
