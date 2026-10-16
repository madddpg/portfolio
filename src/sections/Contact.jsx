import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'

/**
 * Contact section with dark monochrome editorial styling, verified email copy utility,
 * GitHub link, and honest mailto draft composer.
 */
export function Contact() {
  const [copied, setCopied] = useState(false)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleCopyEmail = async () => {
    if (!profile.email) return
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback if clipboard permission is denied
      setCopied(false)
    }
  }

  const handleMailtoSubmit = (event) => {
    event.preventDefault()
    if (!profile.email) return
    const encodedSubject = encodeURIComponent(
      subject.trim() || `Portfolio Inquiry — ${profile.name}`,
    )
    const encodedBody = encodeURIComponent(message.trim())
    window.location.href = `mailto:${profile.email}?subject=${encodedSubject}&body=${encodedBody}`
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 lg:scroll-mt-0 bg-neutral-950 text-white bg-dot-pattern-dark px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24"
    >
      <div className="max-w-5xl mx-auto">
        <div id="contact-heading">
          <SectionHeading
            index="06"
            label="Contact"
            title="Let&apos;s discuss backend systems, internships, or project collaborations."
            description="Reach out directly via email or connect on GitHub and LinkedIn. No third-party tracking or simulated form queues."
            dark
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Direct Verified Contact Channels */}
          <Reveal className="lg:col-span-6 space-y-6">
            <div className="border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                  Direct Contact
                </p>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  I am currently an Information Technology student at{' '}
                  <span className="text-white font-medium">
                    {profile.institution}
                  </span>{' '}
                  and open to internship opportunities, backend engineering
                  discussions, and collaborative software builds.
                </p>
              </div>

              {/* Verified Email Box */}
              {profile.email && (
                <div className="border border-neutral-800 bg-neutral-950 p-4">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                    Verified Academic / Developer Email
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-xs sm:text-sm text-white hover:underline break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {profile.email}
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center justify-center gap-1.5 font-mono text-xs px-3 py-1.5 border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-white hover:text-white transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                      aria-label="Copy email address to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Social Profiles */}
              <div className="space-y-3 pt-2">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                  Verified Profiles
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profile.socials?.github && (
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-200 hover:border-white hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span className="inline-flex items-center gap-2.5 font-mono text-xs">
                        <GithubIcon className="h-4 w-4" />
                        <span>{profile.socials.githubLabel}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}

                  {profile.socials?.linkedin && (
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-200 hover:border-white hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span className="inline-flex items-center gap-2.5 font-mono text-xs truncate">
                        <LinkedinIcon className="h-4 w-4 shrink-0" />
                        <span className="truncate">
                          {profile.socials.linkedinLabel || 'LinkedIn'}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Honest Mailto Client Composer */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <form
              onSubmit={handleMailtoSubmit}
              className="border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    Quick Email Draft
                  </p>
                  <span className="font-mono text-[11px] text-neutral-400 border border-neutral-800 px-2 py-0.5 bg-neutral-950">
                    Opens Default Mail Client
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                  Prepare a message below to launch directly in your email
                  application addressed to{' '}
                  <span className="text-neutral-200 font-mono">
                    {profile.email}
                  </span>
                  .
                </p>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block font-mono text-xs text-neutral-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Project inquiry / Internship opportunity"
                      className="w-full border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs text-neutral-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hello Ahmad, I'd like to connect regarding..."
                      className="w-full border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-white focus:outline-none resize-y"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
                <Button
                  type="submit"
                  variant="darkOutline"
                  className="bg-white text-neutral-950 border-white hover:bg-neutral-200 hover:text-neutral-950"
                >
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Open in Email Client</span>
                </Button>

                {profile.email && (
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Or open blank mailto link</span>
                  </a>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
