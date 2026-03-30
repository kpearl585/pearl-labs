import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="flex items-center gap-5">
            <span className="text-[13px] text-white/25 font-display font-medium tracking-tight">Pearl Labs</span>
            <span className="text-[11px] text-white/12">&copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[11px] text-white/12">Veteran Owned &middot; Ocala, FL</span>
            <div className="flex gap-1.5">
              {[
                { icon: Github, href: 'https://github.com/kpearl585', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/company/pearllabs', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@pearllab.io', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-7 h-7 rounded-md flex items-center justify-center text-white/16 hover:text-white/35 transition-colors duration-200">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
