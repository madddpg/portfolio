import { Code, Database, Smartphone, Wrench } from 'lucide-react'
import { skillCategories } from '../data/skills'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

const categoryIcons = {
  languages: Code,
  'backend-services': Database,
  'application-development': Smartphone,
  'tools-workflow': Wrench,
}

/**
 * Skills and Technologies section grouped by category with monochrome icons
 * and practical application context (no fake percentage bars).
 */
export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-16 lg:scroll-mt-0 border-b border-neutral-200 bg-white px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24"
    >
      <div className="max-w-5xl mx-auto">
        <div id="skills-heading">
          <SectionHeading
            index="03"
            label="Technical Stack"
            title="Skills &amp; Technologies"
            description="Grouped by functional domain and grounded in tools actively used across my backend, web, and mobile projects."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = categoryIcons[category.id] || Code
            return (
              <Reveal key={category.id} delay={idx * 0.06}>
                <div className="h-full border border-neutral-200 bg-white p-6 sm:p-7 flex flex-col justify-between transition-colors hover:border-neutral-950">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center bg-neutral-950 text-white">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div>
                          <span className="block font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                            Category /{category.index}
                          </span>
                          <h3 className="text-lg font-semibold text-neutral-950 tracking-tight">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                      {category.description}
                    </p>

                    {/* Technology List */}
                    <ul className="divide-y divide-neutral-100 border-t border-neutral-100">
                      {category.items.map((item) => (
                        <li
                          key={item.name}
                          className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                        >
                          <span className="font-mono text-xs sm:text-sm font-semibold text-neutral-900">
                            {item.name}
                          </span>
                          <span className="text-xs text-neutral-500">
                            {item.context}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
