'use client'

import { motion } from 'framer-motion'

export default function SphereSkeleton() {
  return (
    <div className="sphere-skeleton">
      <motion.div
        className="sphere-skeleton__core"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="sphere-skeleton__ring"
          style={{
            width: `${80 - i * 15}%`,
            height: `${80 - i * 15}%`,
          }}
          animate={{
            rotate: 360,
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            rotate: {
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            },
            opacity: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      ))}
    </div>
  )
}
