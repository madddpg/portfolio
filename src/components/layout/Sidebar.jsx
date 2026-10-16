import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { cn } from '../../lib/utils'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

/**
 * Fixed desktop left sidebar with monogram, wordmark, active section indicator,
 * verified social links, and status badge.
 */
export function Sidebar({ activeSection, onOpenResume }) {
  return (
    <aside
      aria-label="Primary Sidebar Navigation"
      className="hidden lg:flex lg:flex-col lg:justify-between lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 xl:w-80 border-r border-neutral-200 bg-white px-8 py-10 z-30 select-none"
    >
      {/* Top Identity & Navigation */}
      <div>
        {/* Profile Avatar, Monogram & Wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
        >
          {profile.avatar ? (
            <span className="relative inline-flex h-11 w-11 shrink-0 overflow-hidden border border-neutral-950 bg-neutral-100">
              <img
                src={profile.avatar}
                alt={profile.avatarAlt || profile.name}
                className="h-full w-full object-cover object-top"
              />
            </span>
          ) : (
            <span className="inline-flex h-10 w-10 items-center justify-center bg-neutral-950 text-white font-mono text-sm font-semibold tracking-tighter border border-neutral-950 transition-colors group-hover:bg-white group-hover:text-neutral-950">
              {profile.initials}
            </span>
          )}
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="block text-base font-semibold tracking-tight text-neutral-950 truncate">
                {profile.name}
              </span>
              <span className="font-mono text-[10px] font-semibold px-1.5 py-0.5 bg-neutral-950 text-white leading-none">
                {profile.initials}
              </span>
            </div>
            <span className="block font-mono text-[11px] text-neutral-500 truncate mt-0.5">
              {profile.role}
            </span>
          </div>
        </a>

        {/* Divider */}
        <div className="my-8 h-px bg-neutral-200" aria-hidden="true" />

        {/* Section Navigation */}
        <nav aria-label="Page sections">
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 mb-3">
            Index / Navigation
          </p>
          <ul className="space-y-1">
            {profile.navigation.map((item, idx) => {
              const isActive = activeSection === item.id
              const indexNumber = String(idx + 1).padStart(2, '0')
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'group flex items-center justify-between py-2 px-3 text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950',
                      isActive
                        ? 'bg-neutral-950 text-white font-medium'
                        : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100',
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          'font-mono text-xs',
                          isActive
                            ? 'text-neutral-400'
                            : 'text-neutral-400 group-hover:text-neutral-700',
                        )}
                      >
                        {indexNumber}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <span
                      className={cn(
                        'h-1.5 w-1.5 rounded-full transition-opacity',
                        isActive
                          ? 'bg-white opacity-100'
                          : 'bg-neutral-950 opacity-0 group-hover:opacity-40',
                      )}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom Status & Verified External Links */}
      <div className="space-y-6 pt-6 border-t border-neutral-200">
        {/* Availability / Status Indicator */}
        {profile.status?.available && (
          <div className="border border-neutral-200 bg-neutral-50 p-3.5">
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-700 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-950" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                Current Status
              </span>
            </div>
            <p className="text-xs text-neutral-800 font-medium leading-snug">
              {profile.status.label}
            </p>
          </div>
        )}

        {/* Verified Social & Contact Links */}
        <div className="space-y-2">
          {profile.resumeUrl && (
            <button
              type="button"
              onClick={onOpenResume}
              className="w-full flex items-center justify-between text-xs font-mono text-neutral-600 hover:text-neutral-950 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Resume / CV</span>
              </span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
          {profile.socials?.github && (
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xs font-mono text-neutral-600 hover:text-neutral-950 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
            >
              <span className="inline-flex items-center gap-2">
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub (@{profile.handle})</span>
              </span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}

          {profile.socials?.linkedin && (
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xs font-mono text-neutral-600 hover:text-neutral-950 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
            >
              <span className="inline-flex items-center gap-2">
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}

          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between text-xs font-mono text-neutral-600 hover:text-neutral-950 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 truncate"
              title={profile.email}
            >
              <span className="inline-flex items-center gap-2 truncate">
                <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span className="truncate">{profile.email}</span>
              </span>
            </a>
          )}
        </div>
      </div>
    </aside>
  )
}
