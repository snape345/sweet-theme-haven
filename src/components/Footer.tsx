'use client'

import { LogoMark } from './LogoMark'

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="text-gold" size={36} />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg tracking-wide">Talent Hub</span>
                <span className="text-[0.6rem] tracking-[0.35em] text-gold uppercase">Middle East</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              A discreet talent sourcing and coordination concept for Dubai's premium hospitality
              scene. Launching soon.
            </p>
            <p className="eyebrow mt-6">Launching Soon · Dubai, UAE</p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-3 text-sm text-ink-foreground/75">
              <li><a href="#hero" className="hover:text-gold">Home</a></li>
              <li><a href="#about" className="hover:text-gold">About</a></li>
              <li><a href="#services" className="hover:text-gold">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-gold">How It Works</a></li>
              <li><a href="#contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Enquiries</p>
            <ul className="space-y-3 text-sm text-ink-foreground/75">
              <li>Dubai, United Arab Emirates</li>
              <li><a href="mailto:hello@talenthub.me" className="hover:text-gold">hello@talenthub.me</a></li>
              <li>
                <a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 hairline" />

        <div className="mt-8 flex flex-col gap-4 text-xs text-ink-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Talent Hub Middle East. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            This website is for informational and lead-inquiry purposes only. No online payments,
            bookings, or commercial transactions are processed on this site.
          </p>
        </div>
      </div>
    </footer>
  )
}
