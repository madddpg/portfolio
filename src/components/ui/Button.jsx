import { motion, useReducedMotion } from 'motion/react'
import { cn } from '../../lib/utils'

const variants = {
  primary:
    'bg-neutral-950 text-white border border-neutral-950 hover:bg-neutral-800 focus-visible:ring-neutral-950',
  secondary:
    'bg-white text-neutral-950 border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-50 focus-visible:ring-neutral-950',
  darkOutline:
    'bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-neutral-900 focus-visible:ring-white',
  ghost:
    'bg-transparent text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 border border-transparent focus-visible:ring-neutral-950',
}

const sizes = {
  sm: 'px-3.5 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-sm',
}

/**
 * Accessible, semantic Button / Anchor component with subtle Motion feedback.
 */
export function Button({
  as = 'button',
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  external = false,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion()
  const Component = href ? motion.a : motion[as] || motion.button

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -1 },
        whileTap: { scale: 0.985 },
        transition: { duration: 0.15, ease: 'easeOut' },
      }

  const externalProps =
    href && external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}

  return (
    <Component
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className,
      )}
      {...externalProps}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  )
}
