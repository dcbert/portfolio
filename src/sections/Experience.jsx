const ROLES = [
  {
    when: '2025 — now',
    title: 'Senior Software Developer',
    place: 'ewo · Cortaccia',
    detail:
      'Building the product configurators that sales and production use to turn a lighting order into a buildable spec — C# / .NET and React, on Kubernetes in GCP.',
  },
  {
    when: '2020 — 2025',
    title: 'Team Leader, Smart Factory Systems',
    place: 'Röchling Automotive · Laives',
    detail:
      'Started as a specialist, ended up leading the team behind the IIoT platform: 22 manufacturing plants, 400+ production lines.',
  },
  {
    when: '2017',
    title: 'Software Developer',
    place: 'Fercam · logistics',
    detail: 'Junior .NET developer. Where it started.',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="chapter px-5 py-24 md:px-10 md:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kicker mb-4">
            <b>01</b> · Paid work
          </p>
          <h2 id="experience-heading" className="font-display text-4xl leading-none md:text-5xl">
            Day jobs
          </h2>
          <p className="narrow-body mt-5">
            Where someone else paid for the learning curve.
          </p>
        </div>

        <ol className="lg:col-span-8">
          {ROLES.map((r) => (
            <li key={r.when} className="timeline-row">
              <span className="font-mono text-xs text-muted">{r.when}</span>
              <div>
                <p className="font-display text-2xl leading-tight md:text-3xl">{r.title}</p>
                <p className="mt-1 text-sm text-accent-lift">{r.place}</p>
                <p className="mt-3 max-w-xl text-[0.95rem] text-muted">{r.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
