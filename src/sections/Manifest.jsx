import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { COLORS, pinTravel, prefersReducedMotion, wipeBg } from '@/lib/motion'

const LINES = [
  <>First I want to know how it works.</>,
  <>So I read the docs, the source, <em>the packets.</em></>,
  <>Then I build my own.</>,
]

export default function Manifest() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray('[data-line]')
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: pinTravel('+=220%', '+=140%'),
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          onEnter: () => wipeBg(COLORS.copperField),
          onEnterBack: () => wipeBg(COLORS.copperField),
          onLeave: () => wipeBg(COLORS.void),
          onLeaveBack: () => wipeBg(COLORS.void),
        },
      })

      // Each line enters, holds while the next arrives, then dims.
      lines.forEach((line, i) => {
        tl.fromTo(
          line,
          { yPercent: 60, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
          { yPercent: 0, opacity: 1, clipPath: 'inset(0 0 -10% 0)', duration: 1, ease: 'power2.out' },
          i * 1.1,
        )
        if (i < lines.length - 1) {
          tl.to(line, { opacity: 0.28, duration: 0.8, ease: 'none' }, i * 1.1 + 1.3)
        }
      })

      tl.fromTo(
        '[data-body]',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' },
        lines.length * 1.1,
      ).to({}, { duration: 0.8 })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="manifest"
      ref={sectionRef}
      className="chapter flex min-h-dvh flex-col justify-center overflow-hidden px-5 py-24 md:px-10"
      aria-labelledby="manifest-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 id="manifest-heading" className="kicker mb-8 md:mb-12">
          How I learn
        </h2>

        <div className="space-y-1 md:space-y-2">
          {LINES.map((line, i) => (
            <p key={i} data-line className="statement will-change-transform">
              {line}
            </p>
          ))}
        </div>

        <div data-body className="mt-10 grid gap-6 md:mt-14 md:grid-cols-12">
          <p className="narrow-body md:col-span-5 md:col-start-6">
            Reading alone never sticks for me. The moment I have to make something talk to something
            else — a line, a miner, a GPU, a model — the gaps show up, and those are where I learn.
          </p>
        </div>
      </div>
    </section>
  )
}
