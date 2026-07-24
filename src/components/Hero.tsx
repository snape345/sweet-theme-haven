'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { LogoMark } from './LogoMark'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#contact', label: 'Contact' },
]

export function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-background/80 backdrop-blur-sm border-b border-border/60'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#hero" className="group flex items-center gap-3">
            <LogoMark className="text-gold" size={36} />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg tracking-wide">Talent Hub</span>
              <span className="text-[0.6rem] tracking-[0.35em] text-gold uppercase">Middle East</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs tracking-[0.22em] uppercase text-foreground/75 hover:text-gold transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden lg:inline-flex btn-outline-gold text-[0.7rem] px-5 py-2.5">
            Enquire
          </a>

          <button
            className="lg:hidden text-gold"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col px-6 py-6 gap-5">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.22em] uppercase text-foreground/80"
                >
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-outline-gold mt-2 self-start">
                Enquire
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen w-full overflow-hidden bg-background">
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-between px-6 pt-32 pb-14 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs tracking-[0.28em] uppercase text-muted-foreground">
            <span className="eyebrow">Launching Soon · Dubai, UAE</span>
            <span className="hidden sm:inline">Est. 2026 / Talent Sourcing Concept</span>
          </div>

          <div className="py-16 lg:py-8">
            <h1 className="font-sans font-black uppercase leading-[0.92] tracking-[-0.03em] text-[12vw] sm:text-[10vw] lg:text-[8vw]">
              <span className="block">Talent</span>
              <span className="block">
                <span className="italic font-display font-normal normal-case tracking-tight gold-text">for </span>
                Dubai's
              </span>
              <span className="block">finest venues.</span>
            </h1>
          </div>

          <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-[1.2fr_1fr_auto] md:items-end">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-base">
              A discreet sourcing concept connecting hotels, lounges and beach clubs with freelance
              DJs, singers, dancers and performers — supported by online promotion and thoughtful
              booking coordination.
            </p>

            <div className="text-sm">
              <p className="eyebrow mb-3">Focus</p>
              <p className="font-display text-2xl leading-tight">
                DJs, vocalists, dancers and premium coordination.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-gold">
                Enquire <ArrowRight size={14} />
              </a>
              <a href="#services" className="btn-outline-gold">Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="relative overflow-hidden border-y border-border bg-ink py-8 text-ink-foreground">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10 font-display text-4xl lg:text-6xl">
              <span>DJ Sourcing</span>
              <span className="text-gold">✦</span>
              <span className="italic">Vocalist Introductions</span>
              <span className="text-gold">✦</span>
              <span>Dancer &amp; Performer Sourcing</span>
              <span className="text-gold">✦</span>
              <span>Online Promotion</span>
              <span className="text-gold">✦</span>
              <span className="italic">Booking Coordination</span>
              <span className="text-gold">✦</span>
              <span>Dubai Native</span>
              <span className="text-gold">✦</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
