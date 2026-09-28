import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { COLORS, prefersReducedMotion, wipeBg } from '@/lib/motion'

const MISSION = [
  ['Launch', 'Falcon 9 · LC-39A · 15 Jan 2025'],
  ['Mission', 'Firefly Blue Ghost 1 · NASA CLPS · Copernic Space Moon Mission I'],
  ['Landing', 'Mare Crisium · 2 Mar 2025'],
  ['Edition', '1 of 1 · Real World Space Asset'],
]

export default function SideFun() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.to({}, {
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => wipeBg(COLORS.charcoal),
          onEnterBack: () => wipeBg(COLORS.charcoal),
          onLeave: () => wipeBg(COLORS.void),
          onLeaveBack: () => wipeBg(COLORS.void),
        },
      })

      gsap.utils.toArray('[data-side]', section).forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 62%', scrub: 0.5 },
          },
        )
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="side-fun"
      ref={sectionRef}
      className="chapter overflow-hidden px-5 py-24 md:px-10 md:py-32"
      aria-labelledby="side-fun-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p className="kicker mb-4">
          <b>04</b> · Not the day job
        </p>
        <h2 id="side-fun-heading" className="font-display text-4xl leading-none md:text-5xl">
          Off the clock
        </h2>

        <article data-side className="relative mt-14 grid gap-10 border-t border-line pt-10 lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <p className="kicker">Digital artwork · 2023</p>
            <h3 className="font-display mt-3 text-5xl leading-none md:text-7xl">Doge Astronaut</h3>
            <p className="mt-5 max-w-md text-lg text-fg/90">
              The first internet meme physically delivered to the Moon.
            </p>
            <a
              href="https://dogeonthemoon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cta mt-7"
            >
              dogeonthemoon.com
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <dl className="relative self-end lg:col-span-5 lg:col-start-8">
            {MISSION.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6rem_1fr] gap-3 border-t border-line py-3 text-sm">
                <dt className="kicker">{k}</dt>
                <dd className="m-0 text-fg/85">{v}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article data-side className="relative mt-16 grid gap-6 border-t border-line pt-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="kicker">Satire · with units</p>
            <h3 className="font-display mt-3 text-4xl leading-none md:text-5xl">
              Il Plebiscito della Mosca
            </h3>
            <p className="kicker mt-2">The Fly’s Plebiscite</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-fg/85">
              Eight fruit flies vote on real Italian parliamentary motions, using a 2,781-neuron cut
              of a public connectome. The fly never reads the bill.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6">
              <a
                href="https://dcbert.github.io/plebiscito-della-mosca/"
                target="_blank"
                rel="noopener noreferrer"
                className="quiet-link"
              >
                Live demo <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                href="https://github.com/dcbert/plebiscito-della-mosca"
                target="_blank"
                rel="noopener noreferrer"
                className="quiet-link font-mono text-[0.8rem]!"
              >
                dcbert/plebiscito-della-mosca
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
