'use client'

import { useEffect, useState } from 'react'

export function About() {
  const [activeFrame, setActiveFrame] = useState(-1)
  const [animationStarted, setAnimationStarted] = useState(false)

  const processSteps = [
    {
      number: "01",
      title: "Enquire",
      description: "Share your venue, dates and the mood you have in mind.",
      color: "amber-500"
    },
    {
      number: "02",
      title: "Get matched",
      description: "We send you a shortlist of performers that suit your brief.",
      color: "rose-400"
    },
    {
      number: "03",
      title: "Confirm",
      description: "You select your preferred talent and we confirm the booking details.",
      color: "amber-600"
    },
    {
      number: "04",
      title: "Coordinate",
      description: "We coordinate schedules and key logistics between talent and venue.",
      color: "amber-500"
    },
    {
      number: "05",
      title: "Repeat",
      description: "For recurring dates or new events, we keep curating performers that match your guests and brand.",
      color: "rose-400"
    }
  ]

  useEffect(() => {
    // Start film animation after a 3 second pause
    setTimeout(() => {
      setAnimationStarted(true)
      processSteps.forEach((_, index) => {
        setTimeout(() => {
          setActiveFrame(index)
         
        }, index * 2000 + 1000) // Ultra slow: Start after 24s, then every 72s
      })
    }, 3000) // 3 second pause after section loads
  }, [])

  return (
    <section id="about" className="relative py-20 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #2d1810 0%, #1a0f08 40%, #0f0704 70%, #1a0f08 100%)'
    }}>
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      
      {/* Film Grain Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.8) 1px, transparent 0)`,
          backgroundSize: '3px 3px',
          animation: 'filmGrain 8s infinite'
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-crimson-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-amber-200/80">
              Process
            </span>
            <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-amber-100">
            How it works
          </h2>

          <p className="text-xl text-amber-200/80 leading-relaxed max-w-3xl mx-auto">
            From enquiry to performance
          </p>
        </div>

        {/* Film Strip Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Film Strip Background */}
          <div className="relative rounded-xl overflow-hidden"
               style={{ 
                 background: 'linear-gradient(90deg, #0f0704 0%, #1a0f08 50%, #0f0704 100%)',
                 boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.05)' 
               }}>
            
            {/* Film Perforations - Top - Now animated */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${
                animationStarted ? 'perforations-scroll-animation' : ''
              }`} style={{ width: '200%' }}>
                {/* First set of perforations */}
                {[...Array(20)].map((_, i) => (
                  <div key={`top-${i}`} className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0" 
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
                {/* Duplicate set for seamless loop */}
                {[...Array(20)].map((_, i) => (
                  <div key={`top-dup-${i}`} className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0" 
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
              </div>
            </div>
            
            {/* Film Perforations - Bottom - Now animated */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-black z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${
                animationStarted ? 'perforations-scroll-animation' : ''
              }`} style={{ width: '200%' }}>
                {/* First set of perforations */}
                {[...Array(20)].map((_, i) => (
                  <div key={`bottom-${i}`} className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0"
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
                {/* Duplicate set for seamless loop */}
                {[...Array(20)].map((_, i) => (
                  <div key={`bottom-dup-${i}`} className="w-4 h-3 bg-gray-800 rounded-sm border border-gray-700 flex-shrink-0"
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
              </div>
            </div>

            {/* Film Frames Container - Scrolling Animation */}
            <div className="relative py-6 px-8 overflow-hidden h-64 max-w-full">
              <div className={`flex transition-transform duration-1000 ease-in-out ${
                animationStarted ? 'film-scroll-animation' : ''
              }`} style={{ width: 'max-content', gap: '32px' }}>
                
                {/* Original sequence for seamless loop */}
                {/* Process Step Frames */}
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex-shrink-0 w-80 h-52 rounded-lg border-4 ${
                      activeFrame >= index 
                        ? step.color === 'amber-500' ? 'border-amber-500' : step.color === 'amber-600' ? 'border-amber-600' : 'border-rose-400'
                        : 'border-stone-700'
                    } bg-gradient-to-br from-stone-900 via-[#1a0f08] to-stone-950`}
                    style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                  >
                    
                    {/* Frame Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      
                      {/* Frame Number Badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-100 text-stone-900 rounded-full flex items-center justify-center font-black z-10 border-3 border-amber-200 text-lg"
                           style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.4)' }}>
                        {step.number}
                      </div>
                      
                      {/* Content */}
                      <div className="opacity-100">
                        
                        {/* Step Title */}
                        <h3 className="font-black text-xl leading-tight mb-4 text-amber-100">
                          {step.title}
                        </h3>
                        
                        {/* Step Description */}
                        <p className="text-sm text-amber-200/80 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Film frame edge lines */}
                      <div className="absolute left-1 top-1 bottom-1 w-px bg-amber-100/10" />
                      <div className="absolute right-1 top-1 bottom-1 w-px bg-amber-100/10" />
                      <div className="absolute top-1 left-1 right-1 h-px bg-amber-100/10" />
                      <div className="absolute bottom-1 left-1 right-1 h-px bg-amber-100/10" />
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {/* Process Step Frames duplicate */}
                {processSteps.map((step, index) => (
                  <div
                    key={`duplicate-${step.number}`}
                    className={`flex-shrink-0 w-80 h-52 rounded-lg border-4 ${
                      activeFrame >= index 
                        ? step.color === 'amber-500' ? 'border-amber-500' : step.color === 'amber-600' ? 'border-amber-600' : 'border-rose-400'
                        : 'border-stone-700'
                    } bg-gradient-to-br from-stone-900 via-[#1a0f08] to-stone-950`}
                    style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                  >
                    
                    {/* Frame Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      
                      {/* Frame Number Badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-100 text-stone-900 rounded-full flex items-center justify-center font-black z-10 border-3 border-amber-200 text-lg"
                           style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.4)' }}>
                        {step.number}
                      </div>
                      
                      {/* Content */}
                      <div className="opacity-100">
                        
                        {/* Step Title */}
                        <h3 className="font-black text-xl leading-tight mb-4 text-amber-100">
                          {step.title}
                        </h3>
                        
                        {/* Step Description */}
                        <p className="text-sm text-amber-200/80 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Film frame edge lines */}
                      <div className="absolute left-1 top-1 bottom-1 w-px bg-amber-100/10" />
                      <div className="absolute right-1 top-1 bottom-1 w-px bg-amber-100/10" />
                      <div className="absolute top-1 left-1 right-1 h-px bg-amber-100/10" />
                      <div className="absolute bottom-1 left-1 right-1 h-px bg-amber-100/10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced Projector Light Effect */}
          {activeFrame >= 0 && (
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, rgba(251,191,36,0.9) 0%, rgba(251,191,36,0.4) 20%, rgba(225,29,72,0.15) 40%, transparent 60%)',
                  animation: 'projectorLight 12s ease-in-out infinite'
                }}
              />
            </div>
          )}
        </div>


      </div>
      
    </section>
  )
}