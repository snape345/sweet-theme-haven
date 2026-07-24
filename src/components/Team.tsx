'use client'

import { ArrowRight } from 'lucide-react'

const steps = [
  {
    n: '01',
    t: 'Inquire',
    c: 'Share your venue, upcoming dates and the mood you have in mind through a short enquiry form or a direct WhatsApp message. There are no fees or commitments at this stage.',
    detail: 'Every enquiry is handled by a single point of contact — no ticket queues, no forwarded threads.',
  },
  {
    n: '02',
    t: 'Get Matched',
    c: 'We prepare a shortlist of suitable freelance DJs, vocalists, dancers or performers, with references, sample sets and clear availability. You review at your own pace.',
    detail: 'Shortlists are shaped around your clientele, room format and programming rhythm.',
  },
  {
    n: '03',
    t: 'Coordinate',
    c: "Once you've selected, we introduce you directly to the artist and coordinate logistics, timing and light online promotion — leaving all commercial terms to you and the artist.",
    detail: 'No online payments or booking transactions are processed through Talent Hub Middle East.',
  },
]

export function Team() {
  return (
    <section id="how-it-works" className="relative">
      <div className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">How It Works</span>
          </div>
          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight lg:text-7xl">
            Three steps. Quietly done.
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground lg:text-lg">
            A human, considered flow — designed around the tempo of premium hospitality.
          </p>
        </div>
      </div>

      <div className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <ol className="space-y-20">
            {steps.map((s, i) => (
              <li key={s.n} className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-14">
                <div className="flex md:flex-col md:items-start gap-4">
                  <span className="font-display text-6xl md:text-8xl text-gold/50 leading-none">
                    {s.n}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden md:block mt-6 h-40 w-px bg-gradient-to-b from-gold/50 to-transparent" />
                  )}
                </div>
                <div className="border-t border-gold/30 pt-6">
                  <h3 className="font-display text-4xl lg:text-5xl">{s.t}</h3>
                  <p className="mt-5 text-base leading-relaxed text-foreground/80 max-w-xl">
                    {s.c}
                  </p>
                  <p className="mt-5 text-sm italic text-muted-foreground max-w-xl">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-24 border-t border-border pt-16 text-center">
            <span className="eyebrow">Ready?</span>
            <h3 className="mt-4 font-display text-3xl lg:text-4xl">
              Begin your enquiry in under two minutes.
            </h3>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#contact" className="btn-gold">
                Enquire Now <ArrowRight size={14} />
              </a>
              <a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noreferrer"
                className="btn-outline-gold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
