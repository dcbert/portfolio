export default function TopBar({ onContact }) {
  return (
    <header className="top-bar">
      <a
        href="#hero"
        aria-label="Davide Bert — home"
        className="font-display text-2xl leading-none text-fg"
      >
        db<span className="text-accent">.</span>
      </a>
      <a
        href="#contact"
        className="text-[0.8rem] tracking-[0.14em] uppercase text-fg"
        onClick={(e) => {
          if (onContact) {
            e.preventDefault()
            onContact()
          }
        }}
      >
        Contact
      </a>
    </header>
  )
}
