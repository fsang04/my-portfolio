'use client'
import { useState } from 'react'
import SplineScene from '@/components/spline-scene'
import { PageOverlay } from '@/components/page-overlay'
import { ProfileDrawer } from '@/components/profile-drawer'
import { ControlsKey } from '@/components/controls-key'

export default function Home() {
  const [activeSection, setActiveSection] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <main>
      <button
        onClick={() => setDrawerOpen(true)}
        className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 p-2"
      >
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
        <span className="block w-6 h-0.5 bg-white" />
      </button>
      <ControlsKey />
      <SplineScene onKeyPress={setActiveSection} />
      <PageOverlay section={activeSection} onClose={() => setActiveSection(null)} />
      <ProfileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </main>
  )
}