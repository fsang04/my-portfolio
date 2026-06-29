'use client'

import Spline from '@splinetool/react-spline'
import { useRouter } from 'next/navigation'

const KEY_ROUTES = {
  'key-about-me': '/about',
  'key-resume': '/resume',
  'key-projects': '/projects',
  'key-experience': '/experience',
}

export default function SplineScene() {
  const router = useRouter()

  function onSplineMouseDown(e) {
    console.log('clicked:', e.target.name)
    const route = KEY_ROUTES[e.target.name]
    if (route) {
      router.push(route, { transitionTypes: ['nav-forward'] })
    }
  }

  return (
    <Spline
      scene="https://prod.spline.design/IAA9OKmS5RJjnCeT/scene.splinecode"
      onSplineMouseDown={onSplineMouseDown}
    />
  )
}
