// small guide on main page for scroll/zoom/pan controls
import { RotateCcw, ZoomIn, Hand } from 'lucide-react'

export function ControlsKey() {
  return (
    <div className="fixed bottom-4 right-4 z-10 flex flex-col gap-2 text-white/40 font-mono text-xs">
      {/* <div className="flex items-center gap-2">
        <RotateCcw size={12} />
        <span>left click + drag to orbit</span>
      </div> */}
      <div className="flex items-center gap-2">
        <ZoomIn size={12} />
        <span>scroll to zoom</span>
      </div>
      <div className="flex items-center gap-2">
        <Hand size={12} />
        <span>middle click + drag to pan</span>
      </div>
    </div>
  )
}