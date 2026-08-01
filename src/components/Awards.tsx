'use client'

import catHosts from '../assets/cat-hosts.jpg'
import catDjs from '../assets/cat-djs.jpg'
import catDancers from '../assets/cat-dancers.jpg'
import catModels from '../assets/cat-models.jpg'
import catActors from '../assets/cat-actors.jpg'
import catSpeciality from '../assets/cat-speciality.jpg'

export function Awards() {
  const whatsappPhone = '971528896974'

  const categories = [
    { image: catHosts, title: 'Event hosts and presenters' },
    { image: catDjs, title: 'Live music and DJs' },
    { image: catDancers, title: 'Dancers and stage performers' },
    { image: catModels, title: 'Models and brand ambassadors' },
    { image: catActors, title: 'Actors and voiceover talent' },
    { image: catSpeciality, title: 'Speciality and interactive entertainment' },
  ]

  const getWhatsAppUrl = (category: string) => {
    const message = `Hello, I would like to request ${category} for an event in Dubai.`
    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
  }

  return (
    <section
      id="awards"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0b0503 0%, #1a0f08 45%, #2d1810 100%)' }}
    >
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-amber-900/15 blur-3xl" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-200/70">
              Trusted Across Dubai
            </span>
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-amber-50">
            <span className="block">Nights that feel effortless.</span>
            <span className="block">Programmed for the city's finest rooms.</span>
          </h2>

          <p className="text-lg text-amber-100/60 leading-relaxed max-w-3xl mx-auto">
            Freelance artists we source play hotels, beach clubs, rooftops, lounges and private venues across the UAE.
          </p>
        </div>


        {/* Category Grid */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {categories.map((cat, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="group relative overflow-hidden rounded-xl border border-amber-200/10 bg-stone-950/60 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(cat.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-amber-400/30 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold text-amber-100 transition-all hover:bg-amber-500 hover:text-stone-950 active:scale-[0.98]"
                >
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
