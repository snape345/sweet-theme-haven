'use client'

import { useState, type FormEvent } from 'react'
import { Send, Check, MessageCircle, Mail, MapPin } from 'lucide-react'

function Field({
  label,
  name,
  type = 'text',
  required,
  as = 'input',
  rows,
  children,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  as?: 'input' | 'textarea' | 'select'
  rows?: number
  children?: React.ReactNode
}) {
  const base =
    'w-full bg-transparent border-b border-border px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors'
  return (
    <label className="block">
      <span className="eyebrow block mb-1">
        {label}
        {required && ' *'}
      </span>
      {as === 'textarea' ? (
        <textarea name={name} rows={rows} required={required} className={base + ' resize-none'} />
      ) : as === 'select' ? (
        <select name={name} className={base + ' appearance-none'}>
          {children}
        </select>
      ) : (
        <input type={type} name={name} required={required} className={base} />
      )}
    </label>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="border border-gold/40 bg-surface/40 p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold text-gold">
          <Check size={22} />
        </div>
        <h3 className="mt-6 font-display text-2xl">Thank you</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Your enquiry has been noted. A member of our team will reach out discreetly at launch.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Company / Venue" name="company" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone / WhatsApp" name="phone" />
      </div>
      <Field label="Interest" name="interest" as="select">
        <option value="dj">DJ Sourcing</option>
        <option value="singer">Singer Sourcing</option>
        <option value="both">DJ &amp; Singer</option>
        <option value="promotion">Online Promotion</option>
        <option value="other">Other</option>
      </Field>
      <Field label="Message" name="message" as="textarea" rows={5} />

      <button type="submit" className="btn-gold w-full md:w-auto">
        <Send size={14} /> Submit Enquiry
      </button>
      <p className="text-xs text-muted-foreground">
        By submitting, you consent to be contacted regarding your enquiry. No payment or booking is
        processed.
      </p>
    </form>
  )
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 place-items-center border border-gold/60 text-gold shrink-0">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="eyebrow">{label}</p>
        <p className="mt-1 text-sm text-foreground/85">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="block hover:text-gold transition-colors"
    >
      {content}
    </a>
  ) : (
    content
  )
}

export function Contact() {
  return (
    <section className="relative">
      <div className="border-y border-border py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Contact</span>
          </div>
          <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight lg:text-7xl">
            A quiet conversation.
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground lg:text-lg">
            Share the details of your venue or programming. We'll reach out discreetly at launch.
          </p>
        </div>
      </div>

      <div className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.3fr]">
            <div>
              <span className="eyebrow">Direct</span>
              <h3 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
                Reach us on your terms.
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-sm">
                No agents, no tickets. A single point of contact for all enquiries — reachable by
                form, email or WhatsApp.
              </p>

              <div className="mt-12 space-y-6">
                <InfoRow icon={<MapPin size={16} />} label="Based" value="Dubai, United Arab Emirates" />
                <InfoRow
                  icon={<Mail size={16} />}
                  label="Email"
                  value="hello@talenthub.me"
                  href="mailto:hello@talenthub.me"
                />
                <InfoRow
                  icon={<MessageCircle size={16} />}
                  label="WhatsApp"
                  value="Message the concierge"
                  href="https://wa.me/971500000000"
                />
              </div>

              <div className="mt-12 border-l-2 border-gold/60 pl-5 py-2">
                <p className="text-xs tracking-[0.2em] uppercase text-gold">Please note</p>
                <p className="mt-2 text-sm text-muted-foreground max-w-sm leading-relaxed">
                  No payments or bookings are processed online. This site is for informational and
                  lead-inquiry purposes only.
                </p>
              </div>
            </div>

            <div className="border border-border bg-surface/40 p-8 lg:p-12">
              <span className="eyebrow">Enquiry Form</span>
              <h3 className="mt-3 font-display text-3xl">Tell us about your venue.</h3>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
