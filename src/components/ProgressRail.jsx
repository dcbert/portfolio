import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion } from '@/lib/motion'

export default function ProgressRail() {
  const dotRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const dot = dotRef.current
    if (!dot) return

    const tween = gsap.to(dot, {
      top: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.35,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <div className="progress-rail" aria-hidden="true">
      <div className="progress-rail__line" />
      <div ref={dotRef} className="progress-rail__dot" />
      <div className="progress-rail__cross" />
    </div>
  )
}
