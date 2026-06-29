'use client'

import Spline from '@splinetool/react-spline'
import { useEffect, useRef } from 'react'

const KEY_SECTIONS = {
  'key-about-me': 'about',
  'key-resume': 'resume',
  'key-projects': 'projects',
  'key-experience': 'experience',
}

export default function SplineScene({ onKeyPress }) {
  const pendingKey = useRef(null)

  function onSplineMouseDown(e) {
    pendingKey.current = KEY_SECTIONS[e.target.name] ?? null
  }

  function onSplineMouseUp(e) {
    const section = KEY_SECTIONS[e.target.name] ?? pendingKey.current
    pendingKey.current = null
    if (section) onKeyPress(section)
  }

  return (
    <Spline
      scene="https://prod.spline.design/IAA9OKmS5RJjnCeT/scene.splinecode"
      onSplineMouseDown={onSplineMouseDown}
      onSplineMouseUp={onSplineMouseUp}
    />
  )
}
