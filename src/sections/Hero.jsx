import { useEffect, useRef } from 'react'
import { ArrowDown, Github } from 'lucide-react'
import gsap from 'gsap'
import { COLORS, pinTravel, prefersReducedMotion, wipeBg } from '@/lib/motion'

const PORTRAIT = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/me.jpg`

export default function Hero({ onNavigate }) {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const plateRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    wipeBg(COLORS.void)
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.from('[data-hero-in]', {
        y: 28,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.08,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: pinTravel('+=110%', '+=60%'),
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          onEnterBack: () => wipeBg(COLORS.void),
        },
      })

      tl.to(textRef.current, { y: -60, opacity: 0.1, ease: 'none' }, 0)
        .to(plateRef.current, { y: -110, scale: 0.94, opacity: 0.35, ease: 'none' }, 0)
    }, section)

    return () => ctx.revert()
  }, [])

  const go = (hash) => (e) => {
    e.preventDefault()
    onNavigate?.(hash)
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="chapter flex min-h-dvh items-end overflow-hidden px-5 pt-24 pb-14 md:px-10 md:pb-16"
      aria-labelledby="hero-name"
    >
      <div className="mx-auto grid w-full max-w-7xl items-end gap-10 lg:grid-cols-12">
        <div ref={textRef} className="relative z-10 lg:col-span-8">
          <div data-hero-in className="mb-6 flex items-center gap-4 lg:mb-8">
            <img
              src={PORTRAIT}
              alt=""
              width="56"
              height="56"
              className="portrait size-14 rounded-full object-cover object-top lg:hidden"
            />
            <div>
              <h1 id="hero-name" className="text-base font-medium text-fg">
                Davide Bert
              </h1>
              <p className="kicker mt-1">Senior software developer · Trento</p>
            </div>
          </div>

          <p data-hero-in className="statement max-w-[15ch] text-fg">
            I learn how things work <em>by building them.</em>
          </p>

          <p data-hero-in className="narrow-body mt-6 md:mt-8">
            Factory lines, Bitcoin miners, GPUs under load and, once, a fruit fly’s brain voting in
            parliament. This site is the trail of what that habit has produced.
          </p>

          <div data-hero-in className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="cta cta--accent" onClick={go('#work')}>
              See the work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="cta" onClick={go('#contact')}>
              Contact
            </a>
            <span className="mx-1 hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
            <a
              href="https://github.com/dcbert"
              target="_blank"
              rel="noopener noreferrer"
              className="quiet-link px-2"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://x.com/bertdev"
              target="_blank"
              rel="noopener noreferrer"
              className="quiet-link px-2"
            >
              X
            </a>
          </div>
        </div>

        <div className="relative hidden lg:col-span-4 lg:block">
          <figure ref={plateRef} className="relative">
            <img
              data-hero-in
              src={PORTRAIT}
              alt="Davide Bert"
              width="400"
              height="600"
              className="portrait aspect-[4/5] w-full rounded-[14px] object-cover object-top"
            />
            <figcaption className="kicker mt-3 flex justify-between">
              <span>Trento, IT</span>
              <span>Since 2017</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
