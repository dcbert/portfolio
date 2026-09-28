import { useEffect, useRef } from 'react'
import SkipLink from '@/components/SkipLink'
import TopBar from '@/components/TopBar'
import ProgressRail from '@/components/ProgressRail'
import Hero from '@/sections/Hero'
import Manifest from '@/sections/Manifest'
import Work from '@/sections/Work'
import SideFun from '@/sections/SideFun'
import Experience from '@/sections/Experience'
import HowIWork from '@/sections/HowIWork'
import Contact from '@/sections/Contact'
import { createMotion } from '@/lib/motion'

export default function App() {
  const motionRef = useRef(null)

  useEffect(() => {
    const motion = createMotion()
    motionRef.current = motion
    return () => motion.destroy()
  }, [])

  const navigate = (hash) => {
    const motion = motionRef.current
    if (motion?.scrollTo) {
      motion.scrollTo(hash)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="color-field" aria-hidden="true" />
      <SkipLink />
      <TopBar onContact={() => navigate('#contact')} />
      <ProgressRail />

      <main id="main" className="page">
        <Hero onNavigate={navigate} />
        <Manifest />
        <Experience />
        <Work />
        <SideFun />
        <HowIWork />
        <Contact />
      </main>
    </>
  )
}
