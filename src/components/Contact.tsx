import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/integrations/supabase/client'

export function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: 'Please fill in all fields', variant: 'destructive' })
      return
    }
    setIsSubmitting(true)
    try {
      const { error } = await supabase.functions.invoke('send-lead-email', {
        body: formData,
      })
      if (error) throw error
      toast({ title: 'Message sent!', description: "We'll get back to you soon." })
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Lead submit failed:', err)
      toast({ title: 'Could not send message', description: 'Please try again shortly.', variant: 'destructive' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1a0f08 0%, #2d1810 40%, #120804 100%)' }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0f0704] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-rose-900/10 blur-3xl" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-amber-200/70">
              A Quiet Conversation
            </span>
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-8 text-amber-50">
            <span className="block mb-2">Source Talent. Programme Nights.</span>
          </h2>

          <p className="text-lg lg:text-xl text-amber-100/60 max-w-3xl mx-auto leading-relaxed">
            Tell us about your venue, dates and the mood you have in mind, we'll come back with a shortlist.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-stone-950/60 border border-amber-200/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
            <div className="px-8 py-6 border-b border-amber-200/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-amber-50 mb-1">
                    Enquire
                  </h3>
                  <p className="text-amber-100/50 text-sm">
                    Share your brief, a single point of contact will reply discreetly
                  </p>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  <span className="text-sm text-amber-100/50 font-medium">Launching soon · Dubai</span>
                </div>
              </div>
            </div>

            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/50 transition-all resize-none"
                  placeholder="Venue, dates, mood, anything you'd like us to know"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-foreground text-background font-black text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-blue rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Inquire</h4>
              <p className="text-muted-foreground text-sm">
                Share your venue, dates and the mood you have in mind
              </p>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-emerald rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Get Matched</h4>
              <p className="text-muted-foreground text-sm">
                A shortlist of freelance DJs, vocalists, dancers or performers
              </p>
            </div>
            
            <div className="bg-background clean-border rounded-2xl p-6 subtle-shadow">
              <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-accent-purple rounded-full" />
              </div>
              <h4 className="font-black text-foreground mb-2">Coordinate</h4>
              <p className="text-muted-foreground text-sm">
                Introductions, timing and light online promotion, no online payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}