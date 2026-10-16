import { useEffect, useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { MobileNav } from './components/layout/MobileNav'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Certifications } from './sections/Certifications'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'
import { profile } from './data/profile'

export function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sectionIds = profile.navigation.map((item) => item.id)
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white text-neutral-950 flex flex-col">
      {/* Keyboard Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-neutral-950 focus:text-white focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Fixed Desktop Sidebar */}
      <Sidebar activeSection={activeSection} />

      {/* Mobile & Tablet Sticky Header */}
      <MobileNav activeSection={activeSection} />

      {/* Main Content Area offset by Desktop Sidebar */}
      <div className="lg:pl-72 xl:pl-80 flex-1 flex flex-col min-w-0">
        <main id="main-content" className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
