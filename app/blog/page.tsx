'use client'
import Link from 'next/link'


const posts = [
  {
    slug: 'why-not-wordpress',
    title: 'Why We Don\'t Do WordPress (And Why That\'s a Feature, Not a Bug)',
    desc: 'WordPress powers 43% of the web. We don\'t touch it. Here\'s exactly why, and what you get instead.',
    date: 'February 2026',
    readTime: '7 min read',
    tag: 'Web Development',
  },
]

const BLUE  = '#4A9EFF'
const BLACK = '#030507'

export default function BlogIndex() {
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

      {/* Header */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2rem 3rem' }}>
        <p style={{ color: BLUE, fontFamily: 'var(--font-grotesk), sans-serif', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Pearl Labs Blog</p>
        <h1 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#fff', lineHeight: 1.1, margin: '0 0 1rem' }}>
          Insights & Perspective
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.7 }}>
          Real talk on web development, performance, and building technology that businesses actually own.
        </p>
      </div>

      {/* Posts */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 6rem' }}>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))' }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <article style={{
                background: '#0c1220',
                border: '1px solid rgba(74,158,255,0.12)',
                borderRadius: '12px',
                padding: '2rem',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'pointer',
              }}
  
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ background: 'rgba(74,158,255,0.1)', color: BLUE, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '4px' }}>{post.tag}</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-grotesk), sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#fff', lineHeight: 1.3, marginBottom: '0.75rem' }}>{post.title}</h2>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{post.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>{post.date}</span>
                  <span style={{ color: BLUE, fontSize: '0.875rem', fontWeight: 600 }}>Read →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
