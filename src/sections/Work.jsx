import { useEffect, useRef } from 'react'
import { ArrowUpRight, Box } from 'lucide-react'
import gsap from 'gsap'
import MinerDashboard from '@/visuals/MinerDashboard'
import { COLORS, pinTravel, prefersReducedMotion, wipeBg } from '@/lib/motion'

const FACTS = [
  ['One registry', 'Bitaxe, Avalon, NMAxe, NerdNOS in one device list'],
  ['One set of units', 'GH/s, W, °C, J/TH, whatever the vendor sends'],
  ['Alerts', 'Telegram, Discord, ntfy, Gotify or a webhook'],
  ['Controls', 'Reboot, fans, frequency and voltage presets, LAN discovery'],
  ['Solo odds', 'Pool best shares, energy cost, probability of a block'],
]

const PROJECTS = [
  {
    name: 'RaccBuddy',
    question: 'Can an AI remember people without the cloud?',
    line: 'A local companion with long-term memory and proactive nudges, on Telegram and WhatsApp.',
    tags: 'LangGraph · pgvector · Ollama',
    href: 'https://github.com/raccbuddy-labs/raccbuddy',
  },
  {
    name: 'Soryn',
    question: 'What is the GPU actually waiting on?',
    line: 'A terminal UI that reads NVML and tells you whether to tune the software or buy hardware.',
    tags: 'Python · NVML · VRAM · PCIe',
    href: 'https://github.com/dcbert/soryn',
  },
  {
    name: 'HyprGrok',
    question: 'Can an AI see my focused window without me pasting it in?',
    line: 'A glass panel for Hyprland that hands your focused window to Grok Build.',
    tags: 'Python · QML · Hyprland',
    href: 'https://github.com/dcbert/hyprgrok',
  },
  {
    name: 'NebulaProxy',
    question: 'How do I reach my homelab from anywhere without opening it to everyone?',
    line: 'One dashboard for self-hosted apps, reachable only through the VPN.',
    tags: 'FastAPI · React · Docker · Tailscale',
    href: 'https://github.com/dcbert/NebulaProxy',
  },
]

export default function Work() {
  const featureRef = useRef(null)
  const indexRef = useRef(null)

  useEffect(() => {
    const feature = featureRef.current
    const index = indexRef.current
    if (!feature || !index || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: feature,
          start: 'top top',
          end: pinTravel('+=160%', '+=90%'),
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          onEnter: () => wipeBg(COLORS.charcoal),
          onEnterBack: () => wipeBg(COLORS.charcoal),
          onLeaveBack: () => wipeBg(COLORS.void),
        },
      })

      tl.fromTo('[data-ms-title]', { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1 }, 0)
        .fromTo('[data-ms-dash]', { y: 80, opacity: 0, rotate: 1.5 }, { y: 0, opacity: 1, rotate: 0, duration: 1.2 }, 0.2)
        .fromTo(
          '[data-ms-fact]',
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.25 },
          0.8,
        )
        .to({}, { duration: 0.6 })

      gsap.utils.toArray('[data-row]', index).forEach((row) => {
        gsap.fromTo(
          row,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: { trigger: row, start: 'top 95%', end: 'top 65%', scrub: 0.5 },
          },
        )
      })

      gsap.to({}, {
        scrollTrigger: {
          trigger: index,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => wipeBg(COLORS.void),
          onEnterBack: () => wipeBg(COLORS.void),
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="work" aria-labelledby="work-heading">
      <div
        ref={featureRef}
        className="chapter flex min-h-dvh flex-col justify-center px-5 py-20 md:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="kicker mb-4">
              <b>02</b> · Flagship
            </p>
            <h2 id="work-heading" data-ms-title className="statement text-[clamp(3rem,7vw,6.5rem)]!">
              MinerSentinel
            </h2>
            <p className="mt-5 max-w-md text-lg leading-snug text-fg/90">
              What is each of these miners actually doing? Every vendor answers differently. MinerSentinel translates them all into one fleet, on your own box.
            </p>

            <ul className="mt-7 space-y-2.5">
              {FACTS.map(([k, v]) => (
                <li key={k} data-ms-fact className="grid grid-cols-[7.5rem_1fr] gap-3 text-sm">
                  <span className="text-fg">{k}</span>
                  <span className="text-muted">{v}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="umbrel-badge">
                <Box size={13} aria-hidden="true" />
                Published on the Umbrel App Store
              </span>
              <a
                href="https://github.com/dcbert/miner-sentinel"
                target="_blank"
                rel="noopener noreferrer"
                className="quiet-link font-mono text-[0.8rem]!"
              >
                dcbert/miner-sentinel
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div data-ms-dash className="lg:col-span-7">
            <MinerDashboard />
          </div>
        </div>
      </div>

      <div ref={indexRef} className="chapter px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="kicker mb-4">
                <b>03</b> · Also running
              </p>
              <h3 className="font-display text-4xl leading-none md:text-5xl">
                Each one started <em className="text-accent-lift">with a question.</em>
              </h3>
              <p className="narrow-body mt-5">
                Building the answer was the fastest way to understand it. All on GitHub.
              </p>
            </div>
          </div>

          <ol className="lg:col-span-8">
            {PROJECTS.map((p, i) => (
              <li key={p.name} data-row>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="index-row group"
                >
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="index-row__name">{p.name}</span>
                  <ArrowUpRight size={22} className="index-row__arrow self-center" aria-hidden="true" />
                  <span className="font-display col-start-2 col-end-4 mt-3 max-w-xl text-xl leading-snug text-accent-lift italic">
                    {p.question}
                  </span>
                  <span className="col-start-2 col-end-4 mt-1 max-w-xl text-[0.95rem] text-fg/75">
                    {p.line}
                  </span>
                  <span className="col-start-2 col-end-4 font-mono text-[0.7rem] text-muted">
                    {p.tags}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
