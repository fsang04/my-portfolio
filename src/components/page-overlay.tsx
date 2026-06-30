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
  const [expanded, setExpanded] = useState(false) // when panel is expanded to full height
  const contentRef = useRef<HTMLDivElement>(null)
  const ignoringScroll = useRef(false)            // block scroll event for one frame (prevent choppy panel behavior)
  const isReady = useRef(false)                   // prevent browser from auto-scrolling when rendering tall content

  // expand the panel to full height
  function handleScroll(e: React.UIEvent<HTMLDivElement>) { // expand the panel to full height 
    const el = contentRef.current
    if (!el || ignoringScroll.current) return

    if (!expanded && el.scrollTop > 0) { 
      // user scrolled up — expand the panel, reset scroll position
      setExpanded(true) // trigger re-render
      ignoringScroll.current = true
      el.scrollTop = 0 // fire a scroll event
      requestAnimationFrame(() => { ignoringScroll.current = false })
    // } else if (expanded && e.nativeEvent instanceof WheelEvent && e.nativeEvent.deltaY > 0) {
    //   setExpanded(false)
    }
  }

  // collapse panel when scrolling down
  function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
    const el = contentRef.current
    if (expanded && e.deltaY < 0 && el && el.scrollTop === 0) {
      setExpanded(false)
    }
  }

  return (
    <AnimatePresence onExitComplete={() => { setExpanded(false)}}>
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
            initial={{ y: '100%', height: '60vh'}}
            animate={{ y: 0, height: expanded ? '95vh' : '60vh' }}
            exit={{ y: '100%' }}
            transition={{
              y: { type: 'tween', duration: 0.35, ease: [0, 0, 0.2, 1] },     // ease-out curve for initial slide-up of panel
              height: { type: 'tween', duration: 0.35, ease: [0.4, 0, 1, 1] }, // ease-in curve for expanding panel
            }}
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
              // onWheel={handleWheel}
              // slow down scroll speed by preventing default browser and manually setting scroll speed 
              onWheelCapture={(e) => { 
                e.preventDefault() 
                const el = contentRef.current
                if (el) el.scrollTop += e.deltaY * 0.01
                handleWheel(e)
              }}
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