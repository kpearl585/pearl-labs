import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="font-display font-bold text-white text-lg mb-3">Pearl Labs</div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Elite technology studio building websites, AI systems, and SaaS platforms for businesses that intend to win.
          </p>
          <div className="flex gap-4 mt-6">
            {[
              { icon: Github, href: 'https://github.com/kpearl585' },
              { icon: Twitter, href: 'https://twitter.com/pearllabs' },
              { icon: Linkedin, href: 'https://linkedin.com/company/pearllabs' },
              { icon: Mail, href: 'mailto:hello@pearllab.io' },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/5"
                style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}>
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Services</h4>
          <ul className="flex flex-col gap-3">
            {['Custom Websites', 'AI Systems', 'SaaS Development', 'Landing Pages', 'Infrastructure'].map(s => (
              <li key={s}><a href="#services" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>{s}</a></li>
            ))}
          </ul>
        </div>
        {/* Company */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Company</h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Work', href: '#work' },
              { label: 'Process', href: '#process' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Book a Call', href: 'https://calendly.com/pearllabs' },
            ].map(l => (
              <li key={l.label}><a href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-8 flex items-center justify-between gap-4 flex-wrap"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>© 2026 Pearl Labs LLC. All rights reserved.</span>
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>Veteran Owned &amp; Operated · Ocala, FL</span>
      </div>
    </footer>
  )
}
