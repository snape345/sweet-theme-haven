'use client'

import { useState, useEffect } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import serviceSourcing from '../assets/service-sourcing.jpg'
import servicePromotion from '../assets/service-promotion.jpg'
import serviceCoordination from '../assets/service-coordination.jpg'
import serviceProgramming from '../assets/service-programming.jpg'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)

  const services = [
    {
      id: 'talent-curation',
      number: '01',
      title: 'Talent Curation',
      description:
        'We select freelance DJs, vocalists, dancers, musicians and speciality performers that fit your venue, event format and audience.',
      image: serviceSourcing,
    },
    {
      id: 'talent-booking',
      number: '02',
      title: 'Talent Booking',
      description:
        'We manage the booking process for performers, confirming availability and performance details so your lineup is clear and professional.',
      image: servicePromotion,
    },
    {
      id: 'performance-coordination',
      number: '03',
      title: 'Performance Coordination',
      description:
        'We coordinate schedules, call times and key logistics between talent and venue to help performances run smoothly.',
      image: serviceCoordination,
    },
    {
      id: 'venue-programming',
      number: '04',
      title: 'Venue Entertainment Programming',
      description:
        'For hotels, lounges and beach clubs, we support venue entertainment programming, from weekly sets to seasonal lineups.',
      image: serviceProgramming,
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="services"
      className="relative py-24"
      style={{
        background: 'linear-gradient(180deg, #2d1810 0%, #1a0f08 40%, #120804 100%)',
      }}
    >
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-amber-900/15 blur-3xl" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-3 mb-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-200/70">
              What We Quietly Do
            </span>
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-amber-50 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            Services
          </h2>

          <p
            className={`text-lg text-amber-100/60 leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Four focused offerings, sourcing, promotion and coordination for Dubai's premium hospitality.
          </p>
        </div>

        {/* Service Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-amber-200/10 bg-stone-950/60 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)] transition-colors duration-500 hover:border-amber-300/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent pointer-events-none" />
                <span className="absolute top-3 left-4 text-xs font-mono tracking-[0.25em] text-amber-300/70">
                  {service.number}
                </span>
              </div>

              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-lg font-bold text-amber-50 leading-tight">{service.title}</h3>
                <p className="text-sm text-amber-100/60 leading-relaxed">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-amber-200/60 leading-relaxed max-w-2xl mx-auto">
            Every shortlist is built quietly, deliberately, and matched to the room it will play in.
          </p>
        </div>
      </div>
    </section>
  )
}
