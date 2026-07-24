'use client'

import dubaiImg from '@/assets/dubai.jpg'

export function About() {
  return (
    <>
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <div>
              <img
                src={dubaiImg}
                alt="Dubai skyline at night"
                width={1600}
                height={900}
                loading="lazy"
                className="w-full border border-border object-cover"
              />
            </div>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
                Built from the floor of Dubai's hospitality scene.
              </h2>
              <div className="mt-8 space-y-5 text-sm leading-relaxed text-foreground/80">
                <p>
                  Talent Hub Middle East is a forthcoming sourcing concept — a single point of
                  contact between Dubai's premium venues and the freelance artists who elevate them.
                </p>
                <p>
                  We are not an agency, not a booker, not an entertainment company. We introduce
                  freelance DJs, singers, dancers and performers. We coordinate. We promote
                  thoughtfully online. And we do it with the discretion the industry expects.
                </p>
                <p>
                  The concept is being prepared for launch in Dubai. This site is a first
                  introduction — a place for venues, planners and hosts to make themselves known
                  ahead of opening.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#contact" className="btn-gold">Introduce Yourself</a>
                <a href="#services" className="btn-outline-gold">What We Do</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40 py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <span className="eyebrow">Principles</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl">
            Discretion. Taste. <span className="italic text-foreground/70">Follow-through</span>.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3 text-left">
            {[
              ['Discretion', 'Client conversations, artist rosters and venue details are held quietly and never shared.'],
              ['Taste', 'A curated network of freelance artists chosen for suitability, not scale.'],
              ['Follow-through', 'Coordination that respects timelines, staffing rhythms and the demands of premium hospitality.'],
            ].map(([t, c]) => (
              <div key={t} className="border-t border-gold/40 pt-6">
                <h3 className="font-display text-2xl text-gold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
