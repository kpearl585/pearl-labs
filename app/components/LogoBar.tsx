'use client'
import { motion, useReducedMotion } from 'framer-motion'

const stack = ['Next.js', 'React', 'TypeScript', 'Supabase', 'Vercel', 'Stripe', 'PostgreSQL', 'Claude AI']

export default function LogoBar() {
  const reduce = useReducedMotion()

  return (
    <section className="py-10 lg:py-12">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-8 lg:gap-12 flex-wrap">
          <span className="text-[12px] font-mono font-medium uppercase tracking-[0.1em] text-white/18 shrink-0">
            Built with
          </span>
          <div className="h-4 w-px bg-white/6 shrink-0" />
          {stack.map((name, i) => (
            <motion.span key={name}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: reduce ? 0 : 0.05 + i * 0.03 }}
              className="text-[13px] font-mono font-medium tracking-wide text-white/18 hover:text-white/35 transition-colors duration-300 cursor-default">
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
