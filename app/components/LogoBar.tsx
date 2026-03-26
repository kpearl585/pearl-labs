'use client'
import { motion, useReducedMotion } from 'framer-motion'

const stack = ['Next.js', 'React', 'TypeScript', 'Supabase', 'Vercel', 'Stripe', 'PostgreSQL', 'Claude AI']

export default function LogoBar() {
  const reduce = useReducedMotion()

  return (
    <section className="py-12 lg:py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="flex items-center gap-6 lg:gap-10 flex-wrap"
        >
          <span className="text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/20 shrink-0">
            Built with
          </span>
          <div className="h-3 w-px bg-white/8 shrink-0" />
          {stack.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: reduce ? 0 : 0.05 + i * 0.03 }}
              className="text-[12px] font-mono font-medium tracking-wide text-white/22 hover:text-white/40 transition-colors duration-300 cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
