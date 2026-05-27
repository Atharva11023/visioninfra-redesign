'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const SERVICES = [
  'Equipment Rental',
  'Equipment Leasing',
  'Equipment Purchase',
  'Equipment Sale / Trade-In',
  'Works Contract',
  'Technical Consultation',
]

type FormState = {
  name:    string
  company: string
  phone:   string
  email:   string
  service: string
  message: string
}

const INITIAL: FormState = { name: '', company: '', phone: '', email: '', service: '', message: '' }

export default function Contact() {
  const [form,      setForm]      = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [sending,   setSending]   = useState(false)

  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.1 })

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => { setSending(false); setSubmitted(true) }, 1200)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative section-py overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #040813 0%, #070d1f 50%, #040813 100%)' }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #c9a84c, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #c9a84c, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="wrap container-x relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-5">Get In Touch</div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="t-display font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            <span className="grad-white">Let&apos;s Build India</span>
            <br />
            <span className="grad-gold">Together</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Info column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3
                className="text-white/90 font-medium text-lg mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Vision Infra Equipment Solutions Limited
              </h3>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Reach out to discuss equipment requirements, rental terms, or project needs.
                Our team responds within 4 business hours.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { icon: MapPin, label: 'Address',  value: '4th Floor, International Business Bay, Gurunanak Nagar, Pune 411042, Maharashtra', href: undefined },
                { icon: Phone,  label: 'Phone',    value: '+91 20 2644 0999',           href: 'tel:+912026440999' },
                { icon: Mail,   label: 'Email',    value: 'info@visioninfraindia.com',  href: 'mailto:info@visioninfraindia.com' },
                { icon: Clock,  label: 'Hours',    value: 'Mon–Sat 9AM–7PM IST · Emergency 24×7', href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-gold/20"
                    style={{ background: 'rgba(201,168,76,0.08)' }}
                  >
                    <Icon size={14} style={{ color: '#c9a84c' }} />
                  </div>
                  <div>
                    <div
                      className="text-[10px] mb-0.5 uppercase tracking-widest"
                      style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(201,168,76,0.55)' }}
                    >
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-white/60 hover:text-gold transition-colors"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick quote callout */}
            <div
              className="p-5 rounded-2xl border border-gold/20"
              style={{ background: 'rgba(201,168,76,0.05)' }}
            >
              <p className="text-gold text-xs font-medium mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                ✦ Quick Quote Available
              </p>
              <p className="text-white/40 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Share project details and receive a customised equipment proposal within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* ── Form column ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center gap-5 p-14 rounded-2xl border border-gold/25 text-center"
                style={{ background: 'rgba(201,168,76,0.04)' }}
              >
                <CheckCircle2 size={52} style={{ color: '#c9a84c' }} />
                <div>
                  <h3 className="text-white text-xl font-medium mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Message Received!
                  </h3>
                  <p className="text-white/45 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Thank you for reaching out. Our team will contact you within 4 business hours.
                  </p>
                </div>
                <button
                  onClick={() => { setForm(INITIAL); setSubmitted(false) }}
                  data-cursor
                  className="btn-outline py-2.5 px-6 text-xs mt-2"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-7 md:p-9 rounded-2xl border border-subtle flex flex-col gap-5"
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="float-group">
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={set('name')}
                    />
                    <label htmlFor="name">Full Name *</label>
                  </div>
                  {/* Company */}
                  <div className="float-group">
                    <input
                      type="text"
                      id="company"
                      placeholder="Company"
                      value={form.company}
                      onChange={set('company')}
                    />
                    <label htmlFor="company">Company</label>
                  </div>
                  {/* Phone */}
                  <div className="float-group">
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="Phone"
                      value={form.phone}
                      onChange={set('phone')}
                    />
                    <label htmlFor="phone">Phone *</label>
                  </div>
                  {/* Email */}
                  <div className="float-group">
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Email"
                      value={form.email}
                      onChange={set('email')}
                    />
                    <label htmlFor="email">Email *</label>
                  </div>
                </div>

                {/* Service */}
                <div className="float-group">
                  <select
                    id="service"
                    value={form.service}
                    onChange={set('service')}
                    required
                  >
                    <option value="" disabled>Select a service…</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <label htmlFor="service">Service Required *</label>
                </div>

                {/* Message */}
                <div className="float-group">
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Message"
                    value={form.message}
                    onChange={set('message')}
                    style={{ resize: 'none' }}
                  />
                  <label htmlFor="message">Project Details</label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  data-cursor
                  disabled={sending}
                  className="btn-gold gap-3 mt-1"
                  style={{ opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? 'Sending…' : 'Send Enquiry'}
                  <Send size={14} />
                </button>

                <p
                  className="text-center text-xs text-white/25"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
