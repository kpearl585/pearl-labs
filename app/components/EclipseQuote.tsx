'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function EclipseQuote() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="eclipse-quote">
      <Image
        src="/photo-eclipse-earth.png"
        alt=""
        fill
        className="eclipse-bg"
        sizes="100vw"
      />
      <div className="eclipse-vignette" />

      <div className="container eclipse-inner">
        <motion.div
          className="eclipse-eyebrow mono"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {'// Operating Doctrine'}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="q-mark">&ldquo;</span>
          Pearl Labs doesn&apos;t just write code.<br />
          We build systems for operators who can&apos;t afford to be wrong.
        </motion.blockquote>

        <motion.div
          className="eclipse-attrib"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="line" />
          <span>{'Pearl Labs // Est. 2024'}</span>
        </motion.div>
      </div>
    </section>
  )
}
