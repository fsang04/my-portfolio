// src/components/profile-drawer.tsx
'use client'
import { AnimatePresence, motion } from 'framer-motion'

export function ProfileDrawer({ open, onClose }: { open: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* dark backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 z-20"
            onClick={onClose}
          />

          {/* side panel */}
          <motion.div
            key="drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 h-full w-110 backdrop-blur-sm z-30 p-8 flex flex-col gap-6 font-mono"
          >
            <button onClick={onClose} className="self-end text-sm text-white/60">✕</button>
            <div>
                <h1 className="text-2xl font-bold text-white">Felicia Sang</h1>
                <p className="text-white/60 mt-1">Robotics Engineer</p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.

                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60">
              <a href="mailto:fsang@umich.edu" className="hover:text-white transition-colors">
                fsang@umich.edu
              </a>
              <span className="h-4 w-px bg-white/30" />
              <a href="https://www.linkedin.com/in/felicia-sang-9071aa270/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}