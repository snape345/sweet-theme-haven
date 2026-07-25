'use client'

import { Zap, ShieldCheck, Gem } from 'lucide-react'

const features = [
  {
    icon: <Zap size={18} />,
    title: 'Responsive',
    copy: 'Fast, considered replies from a single point of contact — not a queue of agents.',
  },
  {
    icon: <ShieldCheck size={18} />,
    // title: 'Professional',
    copy: "A vetted network of freelance talent, referenced through Dubai's hospitality circles.",
  },
  {
    icon: <Gem size={18} />,
    title: 'Premium',
    copy: 'Coordination and online promotion tailored to venues that value discretion and taste.',
  },
]

export function Awards() {
  return (
    <section className="relative border-y border-border bg-surface/40 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow">02 · Why Talent Source ME</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl">
            Responsive, professional, <span className="italic text-foreground/70">quietly premium</span>.
          </h2>
        </div>

        <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-10 lg:p-12">
              <div className="grid h-12 w-12 place-items-center border border-gold/60 text-gold">
                {f.icon}
              </div>
              <h3 className="mt-8 font-display text-2xl">{f.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
