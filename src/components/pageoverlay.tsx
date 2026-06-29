'use client'
import { AnimatePresence, motion } from 'framer-motion'
import AboutContent from '@/app/about/page'
import ExperienceContent from '@/app/experience/page'
import ProjectsContent from '@/app/projects/page'
import ResumeContent from '@/app/resume/page'

const CONTENT = {
  about: <AboutContent />,
  experience: <ExperienceContent />,
  projects: <ProjectsContent />,
  resume: <ResumeContent />,
}

export function PageOverlay({ section, onClose }) {
  return (
    <AnimatePresence>
      {section && (
        <motion.div
          key={section}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 h-[60vh] bg-white rounded-t-2xl p-8"
        >
          <button onClick={onClose}>close</button>
          {CONTENT[section]}
        </motion.div>
      )}
    </AnimatePresence>
  )
}