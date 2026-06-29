'use client'
import { useState } from 'react'

const tabs = ['photography', 'pc build', 'keyboard build'] as const
type Tab = typeof tabs[number]

const placeholderImages = Array.from({ length: 6 }, (_, i) => i)

export default function ForFunPage() {
  const [active, setActive] = useState<Tab>('photography')

  return (
    <div className="flex flex-col gap-6 font-mono pt-4">
      {/* tabs */}
      <div className="flex gap-6 border-b border-white/10 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`text-xs transition-colors ${
              active === tab
                ? 'text-white border-b border-white pb-3 -mb-3'
                : 'text-white/40 hover:text-white/70'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* content */}
      {active === 'photography' && <PhotoGrid />}
      {active === 'pc build' && <BuildTimeline title="pc build" />}
      {active === 'keyboard build' && <BuildTimeline title="keyboard build" />}
    </div>
  )
}

function PhotoGrid() {
  return (
    <div className="columns-2 sm:columns-3 gap-3 space-y-3">
      {placeholderImages.map((i) => (
        <div
          key={i}
          className="w-full bg-white/5 rounded overflow-hidden border border-white/10"
          style={{ height: `${180 + (i % 3) * 60}px` }}
        >
          <div className="w-full h-full flex items-center justify-center text-white/20 text-xs">
            photo {i + 1}
          </div>
        </div>
      ))}
    </div>
  )
}

function BuildTimeline({ title }: { title: string }) {
  const steps = Array.from({ length: 4 }, (_, i) => i)
  return (
    <div className="flex flex-col gap-8">
      {steps.map((i) => (
        <div
          key={i}
          className={`flex gap-6 items-start ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}
        >
          <div className="w-1/2 bg-white/5 rounded border border-white/10 aspect-video flex items-center justify-center text-white/20 text-xs shrink-0">
            image {i + 1}
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <span className="text-white/40 text-xs">step {i + 1}</span>
            <p className="text-white/70 text-xs leading-relaxed">
              Caption or description for this step goes here. Replace with your own notes about the build process.
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
