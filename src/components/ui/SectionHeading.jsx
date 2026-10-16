import { cn } from '../../lib/utils'
import { Reveal } from './Reveal'

/**
 * Editorial section header with index label, heading, and optional summary.
 */
export function SectionHeading({
  index,
  label,
  title,
  description,
  className,
  dark = false,
}) {
  return (
    <Reveal className={cn('mb-10 md:mb-14', className)}>
      <div className="flex items-center gap-3 mb-3">
        {index && (
          <span
            className={cn(
              'font-mono text-xs uppercase tracking-widest px-2 py-0.5 border',
              dark
                ? 'border-neutral-800 text-neutral-400 bg-neutral-900/60'
                : 'border-neutral-200 text-neutral-600 bg-neutral-50',
            )}
          >
            {index}
          </span>
        )}
        {label && (
          <span
            className={cn(
              'font-mono text-xs uppercase tracking-widest',
              dark ? 'text-neutral-400' : 'text-neutral-500',
            )}
          >
            {label}
          </span>
        )}
        <div
          className={cn(
            'h-px flex-1',
            dark ? 'bg-neutral-800' : 'bg-neutral-200',
          )}
          aria-hidden="true"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end">
        <h2
          className={cn(
            'lg:col-span-7 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight',
            dark ? 'text-white' : 'text-neutral-950',
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              'lg:col-span-5 text-sm sm:text-base leading-relaxed',
              dark ? 'text-neutral-400' : 'text-neutral-600',
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}
