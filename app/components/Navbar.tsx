'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'Work', href: '#featured' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}
        style={{
          background: scrolled ? 'rgba(5,5,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
        }}
      >
        <nav className="w-full px-8 md:px-12 lg:px-20 xl:px-32 h-full flex items-center justify-between">
          <a href="#" className="font-display font-semibold text-white text-base tracking-tight flex items-center gap-2.5">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" className="opacity-90">
              <rect width="20" height="20" rx="5" fill="url(#lg)" />
              <text x="5.5" y="14.5" fill="#fff" fontSize="11" fontWeight="700" fontFamily="system-ui">P</text>
              <defs><linearGradient id="lg" x1="0" y1="0" x2="20" y2="20"><stop stopColor="#00D4FF"/><stop offset="1" stopColor="#0090B0"/></linearGradient></defs>
            </svg>
            Pearl Labs
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <a key={l.label} href={l.href}
                className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors duration-200">
                {l.label}
              </a>
            ))}
            <a href="/estimate"
              className="text-sm font-semibold text-[#050508] bg-white px-5 py-2.5 rounded-lg transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              Get an Estimate
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-[5px]"
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            <span className={`block w-5 h-[1.5px] bg-white/80 transition-transform duration-300 origin-center ${open ? 'rotate-45 translate-y-[3.25px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white/80 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white/80 transition-transform duration-300 origin-center ${open ? '-rotate-45 -translate-y-[3.25px]' : ''}`} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ background: 'rgba(5,5,8,0.98)' }}>
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
                className="text-2xl font-display font-medium text-white/90 hover:text-white transition-colors">
                {l.label}
              </motion.a>
            ))}
            <motion.a href="/estimate" onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.04, duration: 0.25 }}
              className="mt-4 text-base font-semibold px-6 py-3 rounded-lg bg-white text-[#050508]">
              Get an Estimate
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
