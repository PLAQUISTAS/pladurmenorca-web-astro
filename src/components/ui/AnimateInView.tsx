'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'
import { type ReactNode } from 'react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

export function AnimateInView({
  children,
  className,
  delay = 0,
  variant = 'fadeUp',
}: {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'fadeUp' | 'fadeIn'
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const v = variant === 'fadeIn' ? fadeIn : fadeUp
  const transitionOverride = delay > 0 ? { delay } : undefined

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={v}
      transition={transitionOverride}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}
