const DEVICES = [
  { name: 'Bitaxe Gamma', make: 'bitaxe', rate: '1.21 TH/s', temp: '58 °C', power: '17 W', health: 96 },
  { name: 'Avalon Nano 3S', make: 'avalon', rate: '6.02 TH/s', temp: '71 °C', power: '139 W', health: 84 },
  { name: 'NerdQAxe++', make: 'nerdnos', rate: '4.84 TH/s', temp: '63 °C', power: '76 W', health: 91 },
]

const SPARK = [42, 48, 46, 55, 52, 60, 58, 64, 61, 67, 63, 70, 68, 72, 69, 74]

function Sparkline() {
  const max = Math.max(...SPARK)
  const min = Math.min(...SPARK)
  const pts = SPARK.map((v, i) => {
    const x = (i / (SPARK.length - 1)) * 100
    const y = 100 - ((v - min) / (max - min)) * 80 - 10
    return `${x},${y}`
  }).join(' ')
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-16 w-full">
      <polyline points={`0,100 ${pts} 100,100`} fill="var(--accent)" opacity="0.12" />
      <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export default function MinerDashboard() {
  return (
    <div className="miner-dash" role="img" aria-label="Illustration of the MinerSentinel fleet dashboard">
      <div className="flex items-center justify-between gap-3 border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          <span className="font-mono text-xs text-fg">miner-sentinel</span>
          <span className="font-mono text-xs text-muted">/ overview</span>
        </div>
        <span className="font-mono text-[0.68rem] text-muted">3 devices · LAN</span>
      </div>

      <div className="grid grid-cols-3 gap-3 py-4 font-mono">
        {[
          ['Fleet', '12.07', 'TH/s'],
          ['Power', '232', 'W'],
          ['Efficiency', '19.2', 'J/TH'],
        ].map(([label, value, unit]) => (
          <div key={label}>
            <div className="text-[0.62rem] tracking-wider text-muted uppercase">{label}</div>
            <div className="mt-1 text-lg text-fg sm:text-xl">
              {value}
              <span className="ml-1 text-[0.65rem] text-muted">{unit}</span>
            </div>
          </div>
        ))}
      </div>

      <Sparkline />

      <ul className="mt-4 space-y-3.5">
        {DEVICES.map((d) => (
          <li key={d.name}>
            <div className="mb-1.5 flex items-baseline justify-between gap-2">
              <span className="text-sm text-fg">
                {d.name}
                <span className="ml-2 font-mono text-[0.62rem] text-muted uppercase">{d.make}</span>
              </span>
              <span className="font-mono text-[0.68rem] text-muted">
                {d.rate} · {d.temp} · {d.power}
              </span>
            </div>
            <div className="miner-dash__bar">
              <span style={{ width: `${d.health}%` }} />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between border-t border-line pt-3 font-mono text-[0.66rem] text-muted">
        <span>Best share 2.41 G · Public Pool</span>
        <span className="text-accent-lift">ntfy: Avalon 71 °C</span>
      </div>
    </div>
  )
}
