'use client'
import { useRef, useState } from 'react'
import { AnimatePresence, motion, useDragControls } from 'framer-motion'
import AboutPage from '@/app/about/page'
import ExperiencePage from '@/app/experience/page'
import ProjectsPage from '@/app/projects/page'
import ResumePage from '@/app/resume/page'
import ForFunPage from '@/app/for-fun/page'

const SECTIONS: Record<string, React.ReactNode> = {
  about: <AboutPage />,
  experience: <ExperiencePage />,
  projects: <ProjectsPage />,
  resume: <ResumePage />,
  forfun: <ForFunPage />
}

export function PageOverlay({ section, onClose }: { section: string | null, onClose: () => void }) {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  console.log('active section:', section)
  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const el = contentRef.current
    if (!el) return

    if (!expanded && el.scrollTop > 0) {
      // user scrolled up — expand the panel, reset scroll position
      setExpanded(true)
      el.scrollTop = 0
    } else if (expanded && el.scrollTop === 0) {
      // user scrolled back to top — collapse
      setExpanded(false)
    }
  }

  return (
    <AnimatePresence onExitComplete={() => setExpanded(false)}>
      {section && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />

          <motion.div
            key={section}
            initial={{ y: '100%' }}
            animate={{ y: 0, height: expanded ? '95vh' : '60vh' }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 backdrop-blur-sm rounded-t-2xl flex flex-col overflow-hidden z-50 shadow-[0_-8px_32px_rgba(0,0,0,0.6)]" // bg-white/70 
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-8 text-sm font-mono text-white/50 hover:text-white transition-colors z-10"
            >
              close
            </button>

            <div
              ref={contentRef}
              onScroll={handleScroll}
              className="overflow-y-auto flex-1 px-8 pt-4 pb-15"
            >
              {SECTIONS[section]}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}