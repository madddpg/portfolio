import { projects } from '../data/projects'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectCard } from '../components/ui/ProjectCard'

/**
 * Featured Projects section rendering verified software projects from centralized data.
 */
export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-16 lg:scroll-mt-0 border-b border-neutral-200 bg-neutral-50/50 px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24"
    >
      <div className="max-w-5xl mx-auto">
        <div id="projects-heading">
          <SectionHeading
            index="02"
            label="Selected Work"
            title="Featured Software Projects"
            description="Real academic and project-based applications highlighting backend architecture, database design, and external service integrations."
          />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
