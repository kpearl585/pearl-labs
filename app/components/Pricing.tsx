'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$1,500',
    period: 'one-time',
    tagline: 'Launch fast. Look professional.',
    features: [
      'Up to 5 pages, custom-coded',
      'Mobile-first responsive design',
      'SEO foundation + sitemap',
      'Contact form + analytics',
      '14-day delivery',
      '30-day support window',
    ],
    cta: 'Get Started',
    href: 'https://calendly.com/pearllabs',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$3,000',
    period: 'one-time',
    tagline: 'Built for conversion and scale.',
    features: [
      'Up to 12 pages + blog',
      'Headless CMS integration',
      'Advanced animations & interactions',
      'Stripe / payment integration',
      'Auth + user accounts',
      'Performance audit (95+ Lighthouse)',
      '21-day delivery',
      '60-day support window',
    ],
    cta: 'Start a Project',
    href: 'https://calendly.com/pearllabs',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$8,000+',
    period: 'custom scope',
    tagline: 'Full-stack products that compound.',
    features: [
      'Full SaaS or AI product build',
      'Database architecture + API design',
      'Auth, billing, dashboards',
      'AI/LLM integration',
      'CI/CD + deployment pipeline',
      'Dedicated Slack channel',
      'Custom timeline',
      '90-day support + retainer option',
    ],
    cta: 'Contact Us',
    href: 'https://calendly.com/pearllabs',
    featured: false,
  },
]

export default function Pricing() {
  const reduce = useReducedMotion()

  return (
    <section className="py-40 px-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-20 text-center"
          initial={{ opacity: 1, y: reduce ? 0 : 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
            style={{ color: 'rgba(255,255,255,0.25)' }}>Transparent pricing</p>
          <h2 className="font-display font-bold text-white tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            No retainers. No surprises.<br />
            <span className="gradient-text">Just results.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 1, y: reduce ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
              style={{
                background: '#060608',
                border: p.featured
                  ? '1px solid rgba(0,212,255,0.3)'
                  : '1px solid rgba(255,255,255,0.06)',
                boxShadow: p.featured ? '0 0 80px rgba(0,212,255,0.08)' : 'none',
              }}
            >
              {p.featured && (
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, #00D4FF, transparent)' }} />
              )}
              {p.featured && (
                <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', color: '#00D4FF' }}>
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-2"
                  style={{ color: 'rgba(255,255,255,0.4)' }}>{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-bold text-white"
                    style={{ fontSize: '2.25rem', letterSpacing: '-0.02em' }}>{p.price}</span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>{p.period}</span>
                </div>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>{p.tagline}</p>
              </div>
              <ul className="flex flex-col gap-3 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm"
                    style={{ color: 'rgba(255,255,255,0.55)' }}>
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#00D4FF' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={p.href} target="_blank" rel="noopener noreferrer"
                className="w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:brightness-110"
                style={p.featured ? {
                  background: '#00D4FF', color: '#000',
                } : {
                  background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
