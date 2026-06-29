'use client'

import Spline from '@splinetool/react-spline'
import { useRouter } from 'next/navigation'

const KEY_SECTIONS = {
  'key-about-me': '/about',
  'key-resume': '/resume',
  'key-projects': '/projects',
  'key-experience': '/experience',
}

export default function SplineScene({ onKeyPress }) {
  function onSplineMouseDown(e) {
    const section = KEY_SECTIONS[e.target.name]
    if (section) onKeyPress(section)
  }

  return (
    <Spline
      scene="https://prod.spline.design/IAA9OKmS5RJjnCeT/scene.splinecode"
      onSplineMouseDown={onSplineMouseDown}
    />
  )
}