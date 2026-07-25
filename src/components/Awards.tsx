'use client'

import catHosts from '../assets/cat-hosts.jpg'
import catDjs from '../assets/cat-djs.jpg'
import catDancers from '../assets/cat-dancers.jpg'
import catModels from '../assets/cat-models.jpg'
import catActors from '../assets/cat-actors.jpg'
import catSpeciality from '../assets/cat-speciality.jpg'

export function Awards() {
  const categories = [
    { image: catHosts, title: 'Event Hosts & Presenters' },
    { image: catDjs, title: 'Live Music & DJs' },
    { image: catDancers, title: 'Dancers & Stage Performers' },
    { image: catModels, title: 'Models & Brand Ambassadors' },
    { image: catActors, title: 'Actors & Voiceover Talent' },
    { image: catSpeciality, title: 'Speciality & Interactive Entertainment' },
  ]

  return (
    <section id="awards" className="relative py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Trusted Across Dubai
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground">
            Programmed for the city's finest rooms
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Freelance artists we source play hotels, beach clubs, rooftops, lounges and private venues across the UAE.
          </p>
        </div>

        {/* Category Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-md"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {cat.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
