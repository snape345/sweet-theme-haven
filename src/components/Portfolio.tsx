'use client'

import { Disc3, Mic2, Sparkles, ArrowRight } from 'lucide-react'
import djImg from '@/assets/dj.jpg'
import singerImg from '@/assets/singer.jpg'
import dancerImg from '@/assets/dancer.jpg'

function ServiceCard({
  img,
  icon,
  label,
  title,
  copy,
}: {
  img: string
  icon: React.ReactNode
  label: string
  title: string
  copy: string
}) {
  return (
    <div className="group">
      <div className="relative overflow-hidden border border-border">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-6 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center border border-gold/60 text-gold">{icon}</span>
        <span className="eyebrow">{label}</span>
      </div>
      <h3 className="mt-4 font-display text-3xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-sm">{copy}</p>
    </div>
  )
}

export function Portfolio() {
  return (
    <section className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">01 · The Offering</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl lg:text-6xl">
              Sourcing that feels effortless.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Three focused disciplines. One considered concierge. We introduce the right freelance
            artist for your space, then coordinate the details.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          <ServiceCard
            img={djImg}
            icon={<Disc3 size={18} />}
            label="Service I"
            title="Freelance DJ Sourcing"
            copy="From open-format sunset sets to late-night house residencies, matched to the mood, format and clientele of your venue."
          />
          <ServiceCard
            img={singerImg}
            icon={<Mic2 size={18} />}
            label="Service II"
            title="Vocalist Sourcing"
            copy="Live vocalists for lounges, private dinners and hotel programming — from jazz and soul to acoustic and contemporary."
          />
          <ServiceCard
            img={dancerImg}
            icon={<Sparkles size={18} />}
            label="Service III"
            title="Dancer & Performer Sourcing"
            copy="Elegant dancers and specialty performers for immersive lounge experiences, private events and hotel programming."
          />
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#services" className="btn-outline-gold">
            All Services <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
