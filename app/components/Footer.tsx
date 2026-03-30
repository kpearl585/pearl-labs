import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="w-full px-8 md:px-12 lg:px-20 xl:px-32 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <div className="font-display font-semibold text-white/70 text-base mb-4 tracking-tight">
              Pearl Labs
            </div>
            <p className="text-sm leading-relaxed text-white/22 max-w-sm mb-6">
              Custom development studio. Websites, SaaS, and business systems — built from scratch.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com/kpearl585', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/company/pearllabs', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@pearllab.io', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/18 hover:text-white/40 hover:bg-white/[0.03] transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-3 md:col-start-8">
            <div className="text-[11px] font-mono font-medium uppercase tracking-[0.15em] text-white/18 mb-5">Services</div>
            <ul className="space-y-3">
              {['Custom Websites', 'SaaS Platforms', 'AI Systems', 'Business Systems'].map(l => (
                <li key={l}>
                  <a href="#services" className="text-sm text-white/22 hover:text-white/45 transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className="text-[11px] font-mono font-medium uppercase tracking-[0.15em] text-white/18 mb-5">Company</div>
            <ul className="space-y-3">
              {[
                { label: 'Work', href: '#work' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/estimate' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/22 hover:text-white/45 transition-colors duration-200">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full px-8 md:px-12 lg:px-20 xl:px-32 py-5 flex items-center justify-between gap-4 flex-wrap"
        style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <span className="text-[11px] text-white/14">&copy; {new Date().getFullYear()} Pearl Labs LLC</span>
        <span className="text-[11px] text-white/10">Veteran Owned &middot; Ocala, FL</span>
      </div>
    </footer>
  )
}
