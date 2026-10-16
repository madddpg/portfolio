import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Download, ExternalLink, FileText, X } from 'lucide-react'
import { profile } from '../../data/profile'
import { certifications } from '../../data/certifications'

/**
 * Accessible in-page Resume / CV Viewer Modal with direct PDF download
 * and new-tab fallback so the resume is always viewable across all browsers.
 */
export function ResumeModal({ isOpen, onClose }) {
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/75 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 16, scale: 0.98 }
            }
            animate={
              prefersReducedMotion
                ? undefined
                : { opacity: 1, y: 0, scale: 1 }
            }
            exit={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, y: 12, scale: 0.98 }
            }
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col border border-neutral-950 bg-white shadow-2xl"
          >
            {/* Modal Top Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-neutral-200 bg-neutral-950 text-white">
              <div className="flex items-center gap-2.5">
                <FileText className="h-4 w-4 text-neutral-300" aria-hidden="true" />
                <span
                  id="resume-modal-title"
                  className="font-mono text-xs sm:text-sm font-medium tracking-tight"
                >
                  {profile.resumeFileName || 'Paguta_Ahmad_D_CV2026.pdf'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={profile.resumeUrl}
                  download={profile.resumeFileName || 'Paguta_Ahmad_D_CV2026.pdf'}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium px-3 py-1.5 bg-white text-neutral-950 hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 border border-neutral-700 text-neutral-200 hover:border-white hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Open PDF Tab</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume viewer"
                  className="inline-flex h-8 w-8 items-center justify-center border border-neutral-700 text-neutral-300 hover:border-white hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Scrollable Formatted CV Document */}
            <div className="overflow-y-auto p-6 sm:p-10 md:p-12 bg-neutral-100">
              <div className="max-w-3xl mx-auto bg-white border border-neutral-300 shadow-sm p-6 sm:p-10 text-neutral-950 font-serif">
                {/* CV Header */}
                <header className="text-center border-b border-neutral-300 pb-5 mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase text-neutral-950">
                    AHMAD D. PAGUTA
                  </h2>
                  <p className="text-sm sm:text-base tracking-widest uppercase text-neutral-800 mt-1">
                    INFORMATION TECHNOLOGY
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-700 mt-2 font-sans">
                    {profile.phone} |{' '}
                    <a
                      href={`mailto:${profile.email}`}
                      className="underline hover:text-neutral-950"
                    >
                      {profile.email}
                    </a>{' '}
                    | Batangas, Philippines
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-700 mt-1 font-sans">
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-neutral-950"
                    >
                      {profile.socials.github}
                    </a>{' '}
                    |{' '}
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-neutral-950"
                    >
                      {profile.socials.linkedinLabel}
                    </a>
                  </p>
                </header>

                {/* Education */}
                <section className="mb-6 font-sans">
                  <h3 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-950 pb-1 mb-2.5 text-neutral-950">
                    Education
                  </h3>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                    <span className="font-bold text-neutral-950">
                      National University
                    </span>
                    <span className="font-semibold text-neutral-800">
                      Expected 2027
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 mt-0.5">
                    Bachelor of Science in Information Technology - Specialization in Mobile and Web Applications
                  </p>
                </section>

                {/* Design & Technical Skills */}
                <section className="mb-6 font-sans">
                  <h3 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-950 pb-1 mb-2.5 text-neutral-950">
                    Design &amp; Technical Skills
                  </h3>
                  <div className="space-y-1 text-xs sm:text-sm text-neutral-800">
                    <p>
                      <span className="font-bold text-neutral-950">Languages:</span>{' '}
                      Java, JavaScript, TypeScript, Dart, PHP, C#, SQL
                    </p>
                    <p>
                      <span className="font-bold text-neutral-950">Frontend:</span>{' '}
                      React, Tailwind CSS, Bootstrap, Flutter, .NET MAUI
                    </p>
                    <p>
                      <span className="font-bold text-neutral-950">Backend:</span>{' '}
                      Node.js, Firebase Cloud Functions, PHP, Laravel
                    </p>
                    <p>
                      <span className="font-bold text-neutral-950">Database:</span>{' '}
                      MySQL, Cloud Firestore, Firebase, Supabase
                    </p>
                    <p>
                      <span className="font-bold text-neutral-950">
                        Developer Tools:
                      </span>{' '}
                      Visual Studio Code, Visual Studio, Antigravity, Cursor, Postman, Git, GitHub
                    </p>
                    <p>
                      <span className="font-bold text-neutral-950">
                        DevOps &amp; Cloud:
                      </span>{' '}
                      Firebase Hosting, Vercel, GitHub Actions, Cloud Functions
                    </p>
                    <p>
                      <span className="font-bold text-neutral-950">
                        Design &amp; Prototyping:
                      </span>{' '}
                      Figma, Canva
                    </p>
                  </div>
                </section>

                {/* Certifications */}
                <section className="mb-6 font-sans">
                  <h3 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-950 pb-1 mb-2.5 text-neutral-950">
                    Certifications
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-neutral-800">
                    {certifications.map((cert) => (
                      <div key={cert.id}>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <span>
                            <span className="font-bold text-neutral-950">
                              {cert.title}
                            </span>{' '}
                            | {cert.issuer}
                          </span>
                          <a
                            href={cert.credlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs underline text-neutral-900 hover:text-neutral-600"
                          >
                            Verify Credential (Credly)
                          </a>
                        </div>
                        <p className="text-neutral-700 mt-0.5 leading-relaxed">
                          • {cert.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Projects */}
                <section className="font-sans">
                  <h3 className="text-xs font-bold uppercase tracking-wider border-b border-neutral-950 pb-1 mb-2.5 text-neutral-950">
                    Projects
                  </h3>
                  <div className="space-y-4 text-xs sm:text-sm text-neutral-800">
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <span>
                          <span className="font-bold text-neutral-950">
                            iConstruct
                          </span>{' '}
                          | Flutter, React, Firebase, Cloud Functions, Gemini API
                        </span>
                        <a
                          href="https://iconstruct-builder-app.web.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs underline text-neutral-900"
                        >
                          iconstruct-builder-app.web.app
                        </a>
                      </div>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-neutral-700">
                        <li>
                          Engineered Firebase Firestore data architecture and Cloud Functions for real-time product management, project data, bidding workflows, and automated notifications.
                        </li>
                        <li>
                          Implemented an AI-powered Bill of Materials (BOM) generation system using Gemini API to assist builders with material planning based on project requirements.
                        </li>
                        <li>
                          Integrated Firebase Cloud Messaging (FCM) to deliver automated notifications for project postings and shop bidding activities.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p>
                        <span className="font-bold text-neutral-950">NUTrade</span>{' '}
                        | .NET MAUI, Firebase, Cloud Functions, PayMongo API, TypeScript
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-neutral-700">
                        <li>
                          Architected and developed a cross-platform mobile marketplace application tailored for National University Lipa students using .NET MAUI and Firebase.
                        </li>
                        <li>
                          Engineered an automated backend payment pipeline using Node.js/TypeScript Cloud Functions and PayMongo QR Ph API to handle digital listing settlements and instant auto-publishing via webhooks.
                        </li>
                        <li>
                          Designed a freemium monetization model featuring 1-hour periodic cached feed syncing, real-time peer-to-peer chat, and custom priority-pin listing upgrades.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p>
                        <span className="font-bold text-neutral-950">
                          Cups &amp; Cuddles
                        </span>{' '}
                        | PHP, MySQL, AJAX, PHPMailer, HTML, CSS, JavaScript
                      </p>
                      <ul className="list-disc pl-5 mt-1 space-y-1 text-neutral-700">
                        <li>
                          Developed a web-based ordering and management system for a beverage business using PHP, MySQL, and AJAX.
                        </li>
                        <li>
                          Implemented Email OTP verification via PHPMailer alongside product and menu management features, including item details, pricing, and availability.
                        </li>
                        <li>
                          Engineered database-driven ordering functionality to streamline customer orders and administrative operations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
