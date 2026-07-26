'use client'

import { useEffect, useState } from 'react'

export function About() {
  const [activeFrame, setActiveFrame] = useState(-1)
  const [animationStarted, setAnimationStarted] = useState(false)

  const processSteps = [
    {
      number: "01",
      title: "Inquire",
      description: "Share your venue, dates and the mood you have in mind",
      color: "amber-500"
    },
    {
      number: "02",
      title: "Get Matched",
      description: "A shortlist of freelance DJs, vocalists, dancers or performers",
      color: "rose-400"
    },
    {
      number: "03",
      title: "Coordinate",
      description: "Introductions, timing and logistics, quietly handled",
      color: "amber-600"
    },
    {
      number: "04",
      title: "Programme the Night",
      description: "The artist performs; you keep commercial terms direct",
      color: "amber-500"
    },
    {
      number: "05",
      title: "Promote & Repeat",
      description: "Light online promotion and a growing roster you can rebook",
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
      background: 'linear-gradient(135deg, #ffffff 0%, #faf7f3 40%, #ffffff 70%, #faf7f3 100%)'
    }}>
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] via-transparent to-black/[0.02]" />
      
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
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-stone-600">
              How It Works
            </span>
            <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-stone-900">
            From Enquiry to Encore
          </h2>
          
          <p className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
            A quiet, considered flow, designed around the tempo of premium hospitality in Dubai
          </p>
        </div>

        {/* Film Strip Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Film Strip Background */}
          <div className="relative rounded-xl overflow-hidden"
               style={{ 
                 background: 'linear-gradient(90deg, #f5f1ec 0%, #ffffff 50%, #f5f1ec 100%)',
                 boxShadow: '0 25px 50px rgba(0,0,0,0.12), inset 0 2px 0 rgba(255,255,255,0.6)' 
               }}>
            
            {/* Film Perforations - Top - Now animated */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-stone-200 z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${
                animationStarted ? 'perforations-scroll-animation' : ''
              }`} style={{ width: '200%' }}>
                {/* First set of perforations */}
                {[...Array(20)].map((_, i) => (
                  <div key={`top-${i}`} className="w-4 h-3 bg-stone-400 rounded-sm border border-stone-300 flex-shrink-0" 
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
                {/* Duplicate set for seamless loop */}
                {[...Array(20)].map((_, i) => (
                  <div key={`top-dup-${i}`} className="w-4 h-3 bg-stone-400 rounded-sm border border-stone-300 flex-shrink-0" 
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
              </div>
            </div>
            
            {/* Film Perforations - Bottom - Now animated */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-stone-200 z-20 overflow-hidden">
              <div className={`flex items-center justify-between px-12 h-full ${
                animationStarted ? 'perforations-scroll-animation' : ''
              }`} style={{ width: '200%' }}>
                {/* First set of perforations */}
                {[...Array(20)].map((_, i) => (
                  <div key={`bottom-${i}`} className="w-4 h-3 bg-stone-400 rounded-sm border border-stone-300 flex-shrink-0"
                       style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
                ))}
                {/* Duplicate set for seamless loop */}
                {[...Array(20)].map((_, i) => (
                  <div key={`bottom-dup-${i}`} className="w-4 h-3 bg-stone-400 rounded-sm border border-stone-300 flex-shrink-0"
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
                        : 'border-stone-300'
                    } bg-gradient-to-br from-white via-stone-50 to-stone-100`}
                    style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                  >
                    
                    {/* Frame Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      
                      {/* Frame Number Badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-black z-10 border-3 border-amber-200 text-lg"
                           style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.4)' }}>
                        {step.number}
                      </div>
                      
                      {/* Content */}
                      <div className="opacity-100">
                        
                        {/* Step Title */}
                        <h3 className="font-black text-xl leading-tight mb-4 text-stone-900">
                          {step.title}
                        </h3>
                        
                        {/* Step Description */}
                        <p className="text-sm text-stone-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Film frame edge lines */}
                      <div className="absolute left-1 top-1 bottom-1 w-px bg-stone-900/5" />
                      <div className="absolute right-1 top-1 bottom-1 w-px bg-stone-900/5" />
                      <div className="absolute top-1 left-1 right-1 h-px bg-stone-900/5" />
                      <div className="absolute bottom-1 left-1 right-1 h-px bg-stone-900/5" />
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
                        : 'border-stone-300'
                    } bg-gradient-to-br from-white via-stone-50 to-stone-100`}
                    style={{
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
                    }}
                  >
                    
                    {/* Frame Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between">
                      
                      {/* Frame Number Badge */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-black z-10 border-3 border-amber-200 text-lg"
                           style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.4)' }}>
                        {step.number}
                      </div>
                      
                      {/* Content */}
                      <div className="opacity-100">
                        
                        {/* Step Title */}
                        <h3 className="font-black text-xl leading-tight mb-4 text-stone-900">
                          {step.title}
                        </h3>
                        
                        {/* Step Description */}
                        <p className="text-sm text-stone-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Film frame edge lines */}
                      <div className="absolute left-1 top-1 bottom-1 w-px bg-stone-900/5" />
                      <div className="absolute right-1 top-1 bottom-1 w-px bg-stone-900/5" />
                      <div className="absolute top-1 left-1 right-1 h-px bg-stone-900/5" />
                      <div className="absolute bottom-1 left-1 right-1 h-px bg-stone-900/5" />
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

        {/* Film Controls */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 rounded-2xl px-8 py-4" style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0, 0, 0, 0.08)'
          }}>
            
            {/* Film Speed Indicator */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-stone-900">Freelance Roster</span>
            </div>
            
            <div className="w-px h-6 bg-stone-300" />
            
            {/* Duration */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <span className="text-sm font-semibold text-stone-900">Dubai Native</span>
            </div>
            
            <div className="w-px h-6 bg-stone-300" />
            
            {/* Quality */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <span className="text-sm font-semibold text-stone-900">Discreet Coordination</span>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  )
}