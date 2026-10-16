import { TerminalSquare } from 'lucide-react'
import { experienceEntries } from '../data/projects'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

/**
 * Experience & Development Journey section presenting project-based engineering responsibilities
 * without fabricated dates or unsupported employment claims.
 */
export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-16 lg:scroll-mt-0 border-b border-neutral-200 bg-neutral-50/40 px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24"
    >
      <div className="max-w-5xl mx-auto">
        <div id="experience-heading">
          <SectionHeading
            index="04"
            label="Development Journey"
            title="Academic &amp; Project-Based Experience"
            description="Hands-on engineering roles across software projects—focused on backend architecture, database implementation, API integrations, and system reliability."
          />
        </div>

        <div className="relative border-l border-neutral-300 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {experienceEntries.map((entry, idx) => (
            <Reveal key={entry.id} delay={idx * 0.08}>
              <article className="relative border border-neutral-200 bg-white p-6 sm:p-8 transition-colors hover:border-neutral-950">
                {/* Timeline node marker */}
                <span
                  className="absolute -left-[31px] sm:-left-[39px] top-7 h-3 w-3 bg-neutral-950 border-2 border-white ring-1 ring-neutral-950"
                  aria-hidden="true"
                />

                {/* Top Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-neutral-100">
                  <div className="inline-flex items-center gap-2">
                    <TerminalSquare
                      className="h-4 w-4 text-neutral-900"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-900">
                      {entry.role}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-neutral-500 bg-neutral-100 px-2.5 py-0.5 border border-neutral-200">
                    {entry.type}
                  </span>
                </div>

                {/* Project Title & Context */}
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-950 tracking-tight mb-1">
                  {entry.project}
                </h3>
                <p className="font-mono text-xs text-neutral-500 mb-4">
                  {entry.context}
                </p>

                {/* Summary */}
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-5">
                  {entry.summary}
                </p>

                {/* Key Responsibilities & Problem Solving */}
                <div className="mb-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2.5">
                    Responsibilities &amp; Technical Implementation
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    {entry.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="font-mono text-xs text-neutral-400 mt-1 select-none"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100">
                  {entry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-0.5 bg-neutral-50 text-neutral-700 border border-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
