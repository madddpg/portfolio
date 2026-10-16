import { Award, ExternalLink, FileText, ShieldCheck } from 'lucide-react'
import { certifications } from '../data/certifications'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'

/**
 * Certifications section displaying verified Certiport / Pearson VUE credentials
 * with local badge images and direct Credly verification links.
 */
export function Certifications({ onOpenResume }) {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="scroll-mt-16 lg:scroll-mt-0 border-b border-neutral-200 bg-white px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24"
    >
      <div className="max-w-5xl mx-auto">
        <div id="certifications-heading">
          <SectionHeading
            index="04"
            label="Credentials"
            title="Verified Certifications"
            description="Industry-recognized credentials issued by Certiport (a Pearson VUE business) and independently verifiable via Credly."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {certifications.map((cert, idx) => (
            <Reveal key={cert.id} delay={idx * 0.08}>
              <article className="group h-full border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-neutral-950">
                <div>
                  {/* Top Meta & Badge Header */}
                  <div className="flex items-start justify-between gap-4 pb-6 mb-6 border-b border-neutral-200 bg-neutral-50/70 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 p-6 sm:p-8">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-neutral-600 bg-white border border-neutral-200 px-2.5 py-1">
                        <ShieldCheck
                          className="h-3.5 w-3.5 text-neutral-950"
                          aria-hidden="true"
                        />
                        <span>Verified Credential /{cert.index}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-neutral-950 tracking-tight leading-snug pt-1">
                        {cert.title}
                      </h3>
                      <p className="font-mono text-xs text-neutral-500">
                        Issued by {cert.issuer}
                      </p>
                    </div>

                    {/* Official Credly Badge Artwork */}
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${cert.title} on Credly`}
                      className="shrink-0 inline-flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 border border-neutral-200 bg-white p-2 shadow-[2px_2px_0px_0px_rgba(10,10,10,0.06)] transition-transform duration-300 group-hover:scale-105"
                    >
                      <img
                        src={cert.badgeImage}
                        alt={cert.badgeAlt}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                    {cert.summary}
                  </p>

                  {/* Validated Competencies */}
                  <div className="mb-6">
                    <h4 className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-2.5">
                      Validated Domains
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.competencies.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-xs px-2.5 py-1 bg-neutral-50 text-neutral-800 border border-neutral-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Verification Action */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-500">
                    <Award className="h-3.5 w-3.5 text-neutral-800" aria-hidden="true" />
                    <span>Credly Open Badge</span>
                  </span>

                  <a
                    href={cert.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-medium px-3.5 py-2 bg-neutral-950 text-white border border-neutral-950 hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
                  >
                    <span>Verify on Credly</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Resume / CV Callout Bar */}
        {profile.resumeUrl && (
          <Reveal>
            <div className="border border-neutral-200 bg-neutral-50 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-neutral-950">
                  Full Curriculum Vitae (CV 2026)
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                  Includes complete academic background, technical stack, verified Certiport credentials, and project engineering details.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 font-mono text-xs font-medium px-4 py-2.5 bg-neutral-950 text-white border border-neutral-950 hover:bg-neutral-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  <span>View Resume</span>
                </button>

                <a
                  href={profile.resumeUrl}
                  download={profile.resumeFileName || 'Paguta_Ahmad_D_CV2026.pdf'}
                  className="inline-flex items-center justify-center gap-2 font-mono text-xs font-medium px-4 py-2.5 bg-white text-neutral-950 border border-neutral-300 hover:border-neutral-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950"
                >
                  <span>Download PDF</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
