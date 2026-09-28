const PRINCIPLES = [
  {
    title: 'Counts are copied, never invented.',
    body: 'If the source says 412, the screen says 412. Units get normalized, numbers do not get massaged.',
  },
  {
    title: 'Self-hosted by default.',
    body: 'The cloud is an option you switch on, not the place your data has to live.',
  },
  {
    title: 'Say what it isn’t.',
    body: 'A tool that is honest about its limits gets trusted with everything else.',
  },
]

const SOURCES = {
  ewo: { label: 'ewo', href: '#experience' },
  roechling: { label: 'Röchling', href: '#experience' },
  fercam: { label: 'Fercam', href: '#experience' },
  miner: { label: 'MinerSentinel', href: 'https://github.com/dcbert/miner-sentinel' },
  racc: { label: 'RaccBuddy', href: 'https://github.com/raccbuddy-labs/raccbuddy' },
  soryn: { label: 'Soryn', href: 'https://github.com/dcbert/soryn' },
  hypr: { label: 'HyprGrok', href: 'https://github.com/dcbert/hyprgrok' },
  nebula: { label: 'NebulaProxy', href: 'https://github.com/dcbert/NebulaProxy' },
}

const SKILLS = [
  {
    group: 'Work stack',
    items: [
      {
        name: 'C# / .NET',
        proof: 'Where I started in 2017, and what I ship every day now: the product configurators at ewo.',
        seen: ['ewo', 'fercam'],
      },
      {
        name: 'React',
        proof: 'Configurator front ends at work, and the dashboards of my own tools.',
        seen: ['ewo', 'miner', 'nebula'],
      },
      {
        name: 'MySQL · PostgreSQL',
        proof: 'MySQL behind the configurators at ewo. PostgreSQL for device time-series in MinerSentinel and vector memory in RaccBuddy.',
        seen: ['ewo', 'miner', 'racc'],
      },
      {
        name: 'Kubernetes · Pulumi · GCP',
        proof: 'Where ewo’s services run, with the infrastructure written as code.',
        seen: ['ewo'],
      },
    ],
  },
  {
    group: 'Factory floor',
    items: [
      {
        name: 'IIoT / Industry 4.0',
        proof: 'Five years on Röchling’s smart factory platform: 22 plants and 400+ production lines on one system.',
        seen: ['roechling'],
      },
      {
        name: 'Team leadership',
        proof: 'Joined as a specialist, left as the lead of the Smart Factory Systems team.',
        seen: ['roechling'],
      },
    ],
  },
  {
    group: 'Own tools',
    items: [
      {
        name: 'Python · Django · FastAPI',
        proof: 'The backends of my side projects: Django REST behind MinerSentinel, FastAPI behind NebulaProxy.',
        seen: ['miner', 'nebula', 'racc'],
      },
      {
        name: 'Docker',
        proof: 'The self-hosted projects ship as a compose file, so they run the same on a NAS as on my desk.',
        seen: ['miner', 'racc', 'nebula'],
      },
      {
        name: 'LangGraph · Ollama · pgvector',
        proof: 'RaccBuddy’s agent graph, local models and long-term memory, with no cloud required.',
        seen: ['racc'],
      },
      {
        name: 'NVIDIA / NVML',
        proof: 'Soryn reads GPU load, VRAM and PCIe traffic straight from NVML instead of parsing nvidia-smi.',
        seen: ['soryn'],
      },
    ],
  },
  {
    group: 'Linux & self-hosting',
    items: [
      {
        name: 'Arch + Hyprland',
        proof: 'My daily desktop. HyprGrok is built for it and ships as an Arch package.',
        seen: ['hypr'],
      },
      {
        name: 'Umbrel',
        proof: 'MinerSentinel is packaged for Umbrel and listed in its App Store.',
        seen: ['miner'],
      },
      {
        name: 'Tailscale · homelab',
        proof: 'NebulaProxy keeps homelab apps reachable only from inside the VPN.',
        seen: ['nebula'],
      },
    ],
  },
]

function SourceLink({ id }) {
  const s = SOURCES[id]
  const external = s.href.startsWith('http')
  return (
    <a
      href={s.href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex min-h-8 items-center rounded-full border border-line px-2.5 font-mono text-[0.68rem] text-muted transition-colors hover:border-accent hover:text-accent-lift"
    >
      {s.label}
    </a>
  )
}

export default function HowIWork() {
  return (
    <section id="how" className="chapter px-5 py-24 md:px-10 md:py-32" aria-labelledby="how-heading">
      <div className="mx-auto max-w-7xl">
        <p className="kicker mb-4">
          <b>05</b> · Habits
        </p>
        <h2 id="how-heading" className="font-display text-4xl leading-none md:text-5xl">
          How I work
        </h2>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} className="border-t border-line pt-6">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-display mt-3 text-3xl leading-[1.05]">{p.title}</p>
              <p className="mt-3 text-[0.95rem] text-muted">{p.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-24 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h3 className="font-display text-4xl leading-none md:text-5xl">
                Skills, <em className="text-accent-lift">with receipts.</em>
              </h3>
              <p className="narrow-body mt-5">
                No logo wall. Each skill sits next to the job or the repo where you can see it in
                use.
              </p>
            </div>
          </div>

          <div className="space-y-14 lg:col-span-8">
            {SKILLS.map((g) => (
              <div key={g.group}>
                <h4 className="kicker mb-2 text-accent!">{g.group}</h4>
                <ul>
                  {g.items.map((s) => (
                    <li
                      key={s.name}
                      className="grid gap-2 border-t border-line py-5 md:grid-cols-[13rem_1fr] md:gap-6"
                    >
                      <p className="font-display text-2xl leading-tight">{s.name}</p>
                      <div>
                        <p className="text-[0.95rem] text-fg/80">{s.proof}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="sr-only">Seen in:</span>
                          {s.seen.map((id) => (
                            <SourceLink key={id} id={id} />
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
