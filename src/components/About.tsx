'use client'

import { useEffect, useState } from 'react'
import storyboardImage from '@/assets/storyboard-image.avif'

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
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-amber-200/80">
              How It Works
            </span>
            <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-amber-100">
            From Enquiry to Encore
          </h2>
          
          <p className="text-xl text-amber-200/80 leading-relaxed max-w-3xl mx-auto">
            A quiet, considered flow, designed around the tempo of premium hospitality in Dubai
          </p>
        </div>

        {/* Film Strip Container */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Film Strip Background */}
          <div className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 rounded-xl overflow-hidden"
               style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.05)' }}>
            
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

        {/* Film Controls */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 rounded-2xl px-8 py-4" style={{
            background: 'rgba(26, 15, 8, 0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(251, 191, 36, 0.15)'
          }}>
            
            {/* Film Speed Indicator */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-amber-100">Freelance Roster</span>
            </div>
            
            <div className="w-px h-6 bg-amber-100/20" />
            
            {/* Duration */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <span className="text-sm font-semibold text-amber-100">Dubai Native</span>
            </div>
            
            <div className="w-px h-6 bg-amber-100/20" />
            
            {/* Quality */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <span className="text-sm font-semibold text-amber-100">Discreet Coordination</span>
            </div>
          </div>
        </div>

        {/* AI Generated Content Gallery */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              A glimpse of the artists we source across Dubai's rooms
            </p>
          </div>
          
          {/* Gallery Image */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-4 overflow-hidden">
              
              {/* Film grain overlay for authenticity */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                   style={{
                     backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
                     backgroundSize: '4px 4px'
                   }} />
              
              {/* Main gallery image */}
              <img 
                src={storyboardImage}
                alt="A snapshot of Talent Source ME's freelance DJs, vocalists and performers across Dubai"
                className="w-full h-auto rounded-xl"
                style={{
                  filter: 'contrast(1.05) saturate(1.1) brightness(0.95)'
                }}
              />
              
              {/* Subtle overlay gradient for depth */}
              <div className="absolute inset-4 rounded-xl pointer-events-none"
                   style={{
                     background: 'linear-gradient(135deg, rgba(37,99,235,0.03) 0%, transparent 20%, transparent 80%, rgba(124,58,237,0.03) 100%)'
                   }} />
            </div>
            
            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground italic">
                "Curated freelance artists, matched to your room, your clientele, your tempo"
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}