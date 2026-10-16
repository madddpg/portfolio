import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'

const CURRENT_YEAR = new Date().getFullYear()

/**
 * Minimalist footer with dynamic copyright year, centralized profile owner name,
 * and return-to-top anchor.
 */
export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-5 sm:px-8 md:px-12 lg:px-16 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
          <span className="font-mono text-neutral-900 font-medium">
            © {CURRENT_YEAR} {profile.name}
          </span>
          <span aria-hidden="true">·</span>
          <span>{profile.role}</span>
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-600 hover:text-neutral-950 border border-neutral-200 hover:border-neutral-950 px-3 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
        >
          <span>Return to top</span>
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
