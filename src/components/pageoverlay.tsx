'use client'
import { AnimatePresence, motion } from 'framer-motion'

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
          {/* content */}
          <button onClick={onClose}>close</button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}