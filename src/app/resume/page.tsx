import { ViewTransition } from 'react'

export default function ResumePage() {
  return (
    <ViewTransition
      name="page"
      enter={{ 'nav-forward': 'nav-forward', default: 'none' }}
      exit={{ 'nav-forward': 'nav-forward', default: 'none' }}
      default="none"
    >
      <main>Resume</main>
    </ViewTransition>
  )
}
