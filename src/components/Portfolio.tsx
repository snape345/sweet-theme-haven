'use client'

import { Play, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              The Roster
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Nights that feel effortless.</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A short reel of the sound and energy our freelance DJs, vocalists and performers bring to Dubai's rooms.
          </p>
        </div>

        {/* Featured Video */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-card clean-border rounded-3xl overflow-hidden elevated-shadow">
            {/* Video Embed */}
            <div className="relative">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/fIbDWDh6aYw?rel=0&showinfo=0&modestbranding=1"
                  title="Talent Hub Middle East — mood reel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-t-3xl"
                />
              </div>
              
              {/* Floating Status Badge */}
              <div className="absolute top-6 right-6">
                <span className="glass-effect rounded-xl px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  Mood Reel
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full text-sm font-medium">
                    Venue Programming
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Dubai · Hospitality
                  </span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Sunset to Sunrise
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A snapshot of the tempo we source for — open-format DJs at golden hour, a live vocalist over dinner, a specialty performer as the room shifts. One point of contact from brief to booking.
                </p>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground block">Format</span>
                    <span className="font-medium">DJ · Vocalist · Dancer</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Venues</span>
                    <span className="font-medium">Hotels · Lounges · Beach Clubs</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Model</span>
                    <span className="font-medium">Freelance Sourcing</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Location</span>
                    <span className="font-medium">Dubai, UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}