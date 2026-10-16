import { motion, useReducedMotion } from 'motion/react'
import { cn } from '../../lib/utils'

/**
 * Reusable viewport-triggered reveal wrapper that respects reduced motion preferences.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  duration = 0.45,
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-48px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
