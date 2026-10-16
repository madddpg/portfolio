import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowDownRight,
  ArrowUpRight,
  FileText,
  Mail,
  Terminal,
} from 'lucide-react'
import { profile } from '../data/profile'
import { Button } from '../components/ui/Button'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'

/**
 * Hero section with editorial typography, CSS dotted background pattern,
 * primary/secondary CTAs, and technology focus summary.
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative border-b border-neutral-200 bg-white bg-dot-pattern px-5 sm:px-8 md:px-12 lg:px-16 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-28 overflow-hidden"
    >
      {/* Subtle radial mask to soften the dot pattern near edges */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/90"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14 sm:mb-16">
          <div className="lg:col-span-8">
            {/* Top Eyebrow / Introduction */}
            <motion.div
              variants={itemVariants}
              className="inline-flex flex-wrap items-center gap-2 border border-neutral-300 bg-white px-3 py-1.5 mb-6 sm:mb-8"
            >
              <Terminal
                className="h-3.5 w-3.5 text-neutral-900"
                aria-hidden="true"
              />
              <span className="font-mono text-xs font-medium text-neutral-900">
                Hello, I&apos;m {profile.name}
              </span>
              {profile.status?.label && (
                <>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span className="font-mono text-xs text-neutral-600">
                    {profile.status.label}
                  </span>
                </>
              )}
            </motion.div>

            {/* Main Display Heading */}
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.08] mb-6"
            >
              {profile.headline}
            </motion.h1>

            {/* Concise Approach Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-9"
            >
              {profile.shortBio}
            </motion.p>

            {/* Primary, Secondary, Resume & Social Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3.5"
            >
              <Button href="#projects" variant="primary" size="lg">
                <span>View Featured Projects</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </Button>

              {profile.resumeUrl && (
                <Button
                  href={profile.resumeUrl}
                  external
                  variant="secondary"
                  size="lg"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  <span>Resume</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              )}

              <Button href="#contact" variant="secondary" size="lg">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Get in Touch</span>
              </Button>

              {profile.socials?.github && (
                <Button
                  href={profile.socials.github}
                  external
                  variant="secondary"
                  size="lg"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              )}

              {profile.socials?.linkedin && (
                <Button
                  href={profile.socials.linkedin}
                  external
                  variant="secondary"
                  size="lg"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              )}
            </motion.div>
          </div>

          {/* Editorial Profile Portrait Card */}
          {profile.avatar && (
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 flex justify-start lg:justify-end"
            >
              <figure className="group relative w-64 sm:w-72 lg:w-full max-w-xs border border-neutral-950 bg-white p-2.5 shadow-[6px_6px_0px_0px_rgba(10,10,10,1)]">
                <div className="relative aspect-square overflow-hidden border border-neutral-200 bg-neutral-100">
                  <img
                    src={profile.avatar}
                    alt={profile.avatarAlt || profile.name}
                    className="h-full w-full object-cover object-top grayscale contrast-110 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="pt-2.5 px-1 flex items-center justify-between font-mono text-[11px] text-neutral-600">
                  <span className="font-semibold text-neutral-950">
                    {profile.name}
                  </span>
                  <span>@{profile.handle}</span>
                </figcaption>
              </figure>
            </motion.div>
          )}
        </div>

        {/* Bottom Architectural Summary Bar */}
        <motion.div
          variants={itemVariants}
          className="border border-neutral-200 bg-white/95 p-4 sm:p-5"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-2 w-2 bg-neutral-950" />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                Core Technical Focus
              </span>
            </div>

            <ul
              className="flex flex-wrap items-center gap-2"
              aria-label="Core technologies"
            >
              {profile.heroTechSummary.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-neutral-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
