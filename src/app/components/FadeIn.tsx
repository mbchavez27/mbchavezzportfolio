import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  distance?: number
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, distance = 20, duration = 0.5, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
