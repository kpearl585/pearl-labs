'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled ? 'border-b border-white/[0.06]' : 'border-b border-transparent'
        }`}
        style={
          scrolled
            ? { background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }
            : { background: 'transparent' }
        }
      >
        <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between" aria-label="Main navigation">
          <a
            href="#"
            className="font-display font-bold text-white text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            Pearl Labs
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                role="listitem"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://calendly.com/pearllabs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-white/90 hover:scale-[1.03] transition-all duration-200"
            >
              Start a Project →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2 min-w-[44px] min-h-[44px] items-center justify-center"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-[1.5px] bg-white transition-transform duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[3.25px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-opacity duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-transform duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[3.25px]' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 1, y: prefersReduced ? 0 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReduced ? 0 : -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0A0A0F] flex flex-col items-center justify-center gap-6 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 1, y: prefersReduced ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: prefersReduced ? 0 : 0.3,
                  delay: prefersReduced ? 0 : i * 0.06,
                  ease: 'easeOut',
                }}
                className="text-2xl font-display font-semibold text-white hover:text-accent-light transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://calendly.com/pearllabs"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 1, y: prefersReduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReduced ? 0 : 0.3,
                delay: prefersReduced ? 0 : navLinks.length * 0.06,
                ease: 'easeOut',
              }}
              className="mt-4 bg-white text-black font-semibold text-lg px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Start a Project →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
