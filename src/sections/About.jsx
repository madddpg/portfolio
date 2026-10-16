import { ArrowUpRight, Code2, Database, Layers, Server } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'
import githubContributionsImg from '../assets/github-contributions.png'

const principleIcons = {
  'functional-solutions': Server,
  'maintainable-code': Code2,
  'practical-projects': Database,
  'system-integration': Layers,
}

/**
 * About section presenting student-appropriate background, GitHub contributions,
 * and core development principles.
 */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 lg:scroll-mt-0 border-b border-neutral-200 bg-white px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="01"
          label="About"
          title="Backend-minded engineering grounded in practical software builds."
          description="Focusing on how databases, server-side functions, and client interfaces work together reliably."
        />

        {/* Narrative & Profile Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <Reveal className="lg:col-span-8 space-y-4">
            <p
              id="about-heading"
              className="text-base sm:text-lg font-medium text-neutral-900 leading-relaxed"
            >
              {profile.about.lead}
            </p>
            {profile.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm sm:text-base text-neutral-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <aside
              aria-label="Developer profile summary"
              className="border border-neutral-200 bg-neutral-50 p-5 sm:p-6 space-y-4"
            >
              <div className="border-b border-neutral-200 pb-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                  Profile Overview
                </p>
              </div>

              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-mono text-xs text-neutral-500">
                    Primary Focus
                  </dt>
                  <dd className="font-medium text-neutral-950 mt-0.5">
                    Backend Systems &amp; Web/Mobile Apps
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-xs text-neutral-500">
                    Academic Background
                  </dt>
                  <dd className="font-medium text-neutral-950 mt-0.5">
                    IT Student — {profile.institution}
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-xs text-neutral-500">
                    Location
                  </dt>
                  <dd className="font-medium text-neutral-950 mt-0.5">
                    {profile.location}
                  </dd>
                </div>
              </dl>

              {/* Direct GitHub & LinkedIn Profile Links */}
              <div className="pt-3 border-t border-neutral-200 flex flex-wrap gap-2">
                {profile.socials?.github && (
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 bg-neutral-950 text-white hover:bg-neutral-800 transition-colors"
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
                    className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 border border-neutral-300 bg-white text-neutral-900 hover:border-neutral-950 transition-colors"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </aside>
          </Reveal>
        </div>

        {/* GitHub Contributions Showcase */}
        <Reveal className="mb-14">
          <div className="group border border-neutral-200 bg-neutral-50/60 p-5 sm:p-6 transition-colors hover:border-neutral-950">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-neutral-200">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-7 w-7 items-center justify-center bg-neutral-950 text-white">
                  <GithubIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-neutral-950 tracking-tight">
                    GitHub Activity &amp; Contributions
                  </h3>
                  <p className="font-mono text-xs text-neutral-500">
                    330 contributions in the last year · @{profile.handle}
                  </p>
                </div>
              </div>

              {profile.socials?.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-neutral-700 hover:text-neutral-950"
                >
                  <span>View profile on GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>

            <div className="overflow-hidden border border-neutral-200 bg-white p-2 sm:p-3">
              <img
                src={githubContributionsImg}
                alt={`GitHub contribution graph for ${profile.name} showing 330 contributions in the last year`}
                loading="lazy"
                className="w-full h-auto object-contain grayscale contrast-125 transition-all duration-300 group-hover:grayscale-0 group-hover:contrast-100"
              />
            </div>
          </div>
        </Reveal>

        {/* Personal Development Principles */}
        <div>
          <Reveal className="mb-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Development Principles
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {profile.about.principles.map((principle, idx) => {
              const Icon = principleIcons[principle.id] || Code2
              return (
                <Reveal key={principle.id} delay={idx * 0.06}>
                  <div className="h-full border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-950">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold text-neutral-400">
                        /{principle.number}
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center border border-neutral-200 bg-neutral-50 text-neutral-900">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-neutral-950 mb-2 tracking-tight">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
