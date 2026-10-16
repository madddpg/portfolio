import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Mail, Menu, X } from 'lucide-react'
import { profile } from '../../data/profile'
import { cn } from '../../lib/utils'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

/**
 * Accessible mobile and tablet navigation header with slide-down drawer.
 */
export function MobileNav({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="lg:hidden sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-xs">
      <div className="flex items-center justify-between px-4 sm:px-6 h-16">
        <a
          href="#top"
          onClick={handleLinkClick}
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
        >
          {profile.avatar ? (
            <span className="inline-flex h-8 w-8 shrink-0 overflow-hidden border border-neutral-950 bg-neutral-100">
              <img
                src={profile.avatar}
                alt={profile.avatarAlt || profile.name}
                className="h-full w-full object-cover object-top grayscale contrast-110"
              />
            </span>
          ) : (
            <span className="inline-flex h-8 w-8 items-center justify-center bg-neutral-950 text-white font-mono text-xs font-semibold">
              {profile.initials}
            </span>
          )}
          <div>
            <div className="flex items-center gap-1.5">
              <span className="block text-sm font-semibold tracking-tight text-neutral-950 leading-none">
                {profile.name}
              </span>
              <span className="font-mono text-[9px] font-semibold px-1 py-0.5 bg-neutral-950 text-white leading-none">
                {profile.initials}
              </span>
            </div>
          </div>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-10 w-10 items-center justify-center border border-neutral-200 text-neutral-900 hover:border-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 cursor-pointer"
        >
          {isOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation-menu"
            aria-label="Mobile Navigation"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="border-b border-neutral-200 bg-white px-4 sm:px-6 py-5 shadow-lg"
          >
            <ul className="space-y-1">
              {profile.navigation.map((item, idx) => {
                const isActive = activeSection === item.id
                const indexNumber = String(idx + 1).padStart(2, '0')
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={handleLinkClick}
                      aria-current={isActive ? 'location' : undefined}
                      className={cn(
                        'flex items-center justify-between px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950',
                        isActive
                          ? 'bg-neutral-950 text-white'
                          : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950',
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-neutral-400">
                          {indexNumber}
                        </span>
                        <span>{item.label}</span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-5 pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
              {profile.socials?.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-700 hover:text-neutral-950"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}

              {profile.socials?.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-700 hover:text-neutral-950"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}

              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-700 hover:text-neutral-950"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{profile.email}</span>
                </a>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
