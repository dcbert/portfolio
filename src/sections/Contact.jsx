import { ArrowUpRight, Github, Mail } from 'lucide-react'
const EMAIL = 'dc.bert@outlook.com'

export default function Contact() {
  return (
    <section
      id="contact"
      className="chapter px-5 pt-24 pb-16 md:px-10 md:pt-36"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="contact-heading" className="statement max-w-[16ch]">
          Show me something <em>I don’t understand yet.</em>
        </h2>
        <p className="narrow-body mt-6">
          A system, a protocol, a machine that won’t talk to anything else. Write to me.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="group mt-10 inline-flex break-all min-h-11 items-center gap-3 border-b border-line pb-2 font-display text-3xl transition-colors hover:border-accent hover:text-accent-lift md:text-5xl"
        >
          <Mail size={28} strokeWidth={1.5} aria-hidden="true" />
          {EMAIL}
        </a>

        <div className="mt-24 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6">
            <a
              href="https://github.com/dcbert"
              target="_blank"
              rel="noopener noreferrer"
              className="quiet-link"
            >
              <Github size={16} aria-hidden="true" />
              dcbert
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href="https://x.com/bertdev"
              target="_blank"
              rel="noopener noreferrer"
              className="quiet-link"
            >
              X @bertdev
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <span>Trentino-Alto Adige, Italy · © {new Date().getFullYear()} Davide Bert</span>
        </div>
      </div>
    </section>
  )
}
