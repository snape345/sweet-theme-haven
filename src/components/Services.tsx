'use client'

import { Disc3, Mic2, Sparkles, Share2, Handshake, ArrowRight } from 'lucide-react'
import djImg from '@/assets/dj.jpg'
import singerImg from '@/assets/singer.jpg'
import dancerImg from '@/assets/dancer.jpg'

const services = [
  {
    icon: <Disc3 size={20} />,
    label: '01',
    title: 'Freelance DJ Sourcing',
    copy: "Open-format, house, deep, Afro and Arabic. A considered shortlist of freelance DJs matched to your venue's clientele, room and format.",
    img: djImg,
  },
  {
    icon: <Mic2 size={20} />,
    label: '02',
    title: 'Vocalist Sourcing',
    copy: 'Live singers for lounge, dining and hotel programming — from jazz and soul to acoustic and contemporary sets.',
    img: singerImg,
  },
  {
    icon: <Sparkles size={20} />,
    label: '03',
    title: 'Dancer & Performer Sourcing',
    copy: 'Elegant dancers and specialty performers for immersive lounge experiences, private events and hotel programming, matched to your brand and audience.',
    img: dancerImg,
  },
  {
    icon: <Share2 size={20} />,
    label: '04',
    title: 'Online Promotion',
    copy: 'Discreet social-media promotion for talent and venue collaborations — thoughtfully produced content that respects your brand.',
    img: null as string | null,
  },
  {
    icon: <Handshake size={20} />,
    label: '05',
    title: 'Client Introductions & Booking Coordination',
    copy: 'A single point of contact for introductions, availability, and coordination logistics — with no commercial transactions handled online.',
    img: null as string | null,
  },
]

export function Services() {
  return (
    <section className="relative">
      <div className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Services</span>
          </div>
          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight lg:text-7xl">
            What we quietly do.
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground lg:text-lg">
            Five focused offerings, designed around the tempo of Dubai's premium hospitality.
          </p>
        </div>
      </div>

      <div className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 space-y-24">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid gap-12 lg:grid-cols-2 lg:gap-20 items-center ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div>
                {s.img ? (
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full border border-border object-cover aspect-[4/5]"
                  />
                ) : (
                  <div className="relative aspect-[4/5] w-full border border-border bg-surface/40 flex items-center justify-center overflow-hidden">
                    <span className="font-display text-[14rem] text-gold/10 leading-none">{s.label}</span>
                    <span className="absolute grid h-20 w-20 place-items-center border border-gold text-gold">
                      {s.icon}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center border border-gold/60 text-gold">
                    {s.icon}
                  </span>
                  <span className="eyebrow">Service {s.label}</span>
                </div>
                <h3 className="mt-6 font-display text-4xl lg:text-5xl leading-tight">{s.title}</h3>
                <p className="mt-6 text-base leading-relaxed text-foreground/80 max-w-md">{s.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <h3 className="font-display text-3xl lg:text-4xl">
            A single, quiet enquiry is the beginning.
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn-gold">
              Enquire <ArrowRight size={14} />
            </a>
            <a href="#how-it-works" className="btn-outline-gold">How It Works</a>
          </div>
        </div>
      </div>
    </section>
  )
}
