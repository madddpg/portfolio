import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  ExternalLink,
  FolderGit2,
  Layers,
  Server,
} from 'lucide-react'
import { cn } from '../../lib/utils'

const projectIcons = {
  iconstruct: Server,
  nutrade: Layers,
  'cups-and-cuddles': Database,
}

/**
 * Editorial monochrome project card with real project artwork, architectural schematic preview,
 * interactive feature inspection, and verified links/status.
 */
export function ProjectCard({ project, index = 0 }) {
  const [expanded, setExpanded] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const IconComponent = projectIcons[project.id] || Cpu

  const hasRepo = Boolean(project.links?.repoUrl)
  const hasLive = Boolean(project.links?.liveUrl)

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border border-neutral-200 bg-white transition-colors duration-200 hover:border-neutral-950"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left/Top Visual Preview & Architectural Card */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-neutral-200 bg-neutral-50/70 bg-architectural-grid p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between gap-2 z-10">
            <span className="font-mono text-xs font-medium tracking-widest uppercase px-2.5 py-1 bg-white border border-neutral-200 text-neutral-800">
              {project.visualSpec.code}
            </span>
            <span className="font-mono text-xs text-neutral-400">
              /{project.index}
            </span>
          </div>

          {/* Project Artwork + Architectural Spec Card */}
          <div className="my-6 z-10 space-y-4">
            {project.image && (
              <div className="border border-neutral-300 bg-white p-6 flex items-center justify-center h-48 sm:h-52 overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(10,10,10,0.06)]">
                <img
                  src={project.image}
                  alt={project.imageAlt || `${project.name} preview`}
                  loading="lazy"
                  className={cn(
                    'max-h-36 w-auto object-contain transition-transform duration-300 ease-out',
                    project.imageFit === 'cover' && 'rounded-xs max-h-36',
                    !prefersReducedMotion && 'group-hover:scale-105',
                  )}
                />
                {hasLive && (
                  <a
                    href={project.links.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name} live web app`}
                    className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider bg-neutral-950 text-white px-2.5 py-1 hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
                  >
                    <span>Live App</span>
                    <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}

            <div
              className={cn(
                'border border-neutral-300 bg-white p-4 shadow-[2px_2px_0px_0px_rgba(10,10,10,0.08)] transition-transform duration-300 ease-out',
                !prefersReducedMotion && 'group-hover:scale-[1.01]',
              )}
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2.5 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center bg-neutral-950 text-white">
                    <IconComponent className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs font-semibold tracking-tight text-neutral-900">
                    {project.name}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-neutral-500">
                  {project.role}
                </span>
              </div>

              <p className="font-mono text-[11px] leading-relaxed text-neutral-600 mb-3">
                {project.visualSpec.architectureLabel}
              </p>

              <dl className="grid grid-cols-3 gap-2 pt-2.5 border-t border-neutral-100">
                {project.visualSpec.metrics.map((metric) => (
                  <div key={metric.label} className="min-w-0">
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 truncate">
                      {metric.label}
                    </dt>
                    <dd className="font-mono text-[11px] font-medium text-neutral-900 truncate mt-0.5">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="z-10 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-600">
              {project.category}
            </span>
          </div>
        </div>

        {/* Right/Bottom Project Content */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Top Meta Row: Role & Status */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="inline-flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-950" />
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-neutral-800">
                  Role: {project.role}
                </span>
              </div>
              <span className="font-mono text-xs text-neutral-500 border border-neutral-200 px-2 py-0.5 bg-neutral-50">
                {project.status}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950 mb-3">
              {project.fullTitle}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4">
              {project.summary}
            </p>

            {/* Implementation Scope Callout */}
            <div className="border-l-2 border-neutral-950 pl-3.5 py-1 mb-5">
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <span className="font-semibold text-neutral-950">
                  Implementation focus:{' '}
                </span>
                {project.implementationScope}
              </p>
            </div>

            {/* Key Implemented Workflows (always show top 3, toggle full list if more) */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2.5">
                Key Workflows &amp; Architecture
              </h4>
              <ul className="space-y-1.5 text-sm text-neutral-700">
                {(expanded
                  ? project.features
                  : project.features.slice(0, 3)
                ).map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className="font-mono text-xs text-neutral-400 mt-1 select-none"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {project.features.length > 3 && (
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  aria-expanded={expanded}
                  className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-neutral-700 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 py-1 cursor-pointer"
                >
                  {expanded ? (
                    <>
                      <span>Show fewer technical details</span>
                      <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <span>
                        View all {project.features.length} technical highlights
                      </span>
                      <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Footer: Tech Tags + Verified Links */}
          <div className="pt-5 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 bg-neutral-100 text-neutral-800 border border-neutral-200 transition-colors group-hover:border-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {hasRepo && (
                <a
                  href={project.links.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium px-3 py-1.5 border border-neutral-300 text-neutral-900 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
                >
                  <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Repository</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}

              {hasLive && (
                <a
                  href={project.links.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium px-3.5 py-2 bg-neutral-950 text-white border border-neutral-950 hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
                >
                  <span>{project.links.liveLabel || 'Live Demo'}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}

              {!hasRepo && !hasLive && (
                <span className="font-mono text-[11px] text-neutral-500">
                  {project.links.formerDomain
                    ? `Archive: ${project.links.formerDomain}`
                    : project.links.statusNote}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
