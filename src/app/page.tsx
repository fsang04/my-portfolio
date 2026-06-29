'use client'
import { useState } from 'react'
import SplineScene from '@/components/spline-scene'
import { PageOverlay } from '@/components/pageoverlay'

export default function Home() {
  const [activeSection, setActiveSection] = useState(null)

  return (
    <main>
      <SplineScene onKeyPress={setActiveSection} />
      <PageOverlay section={activeSection} onClose={() => setActiveSection(null)} />
    </main>
  )
}