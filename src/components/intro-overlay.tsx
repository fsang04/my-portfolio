'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/feliciasang' },
  // { label: 'GitHub', href: 'https://github.com/fsang' },
  { label: 'Email', href: 'mailto:fsang@umich.edu' },
]

export function IntroOverlay() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-black/55 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer select-none"
          onClick={() => setVisible(false)}
        >
          <div className="text-center px-8 max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-5 tracking-tight">
              {/* Hi, I&apos;m Felicia. */}
              Felicia Sang
            </h1>
            <p className="text-lg text-white/65 mb-10 leading-relaxed">
              Robotics @ University of Michigan
            </p>
            <div className="flex gap-8 justify-center mb-16">
              {LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors duration-200 text-sm font-mono tracking-wide"
                  onClick={e => e.stopPropagation()}
                >
                  {label}
                </a>
              ))}
            </div>
            <motion.p
              animate={{ opacity: [0.35, 0.7, 0.35] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-white/50 text-xs font-mono tracking-[0.2em] uppercase"
            >
              click anywhere to continue
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
