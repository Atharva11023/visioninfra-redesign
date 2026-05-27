'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Truck, Wrench, ShoppingCart, Repeat,
  Layers, Drill, HardHat, Package, ArrowUpRight,
} from 'lucide-react'

const SERVICES = [
  {
    Icon:  Truck,
    title: 'Equipment Rental',
    short: 'Flexible, maintained fleet',
    desc:  "India's largest road construction equipment rental fleet. Short-term, long-term and project-based contracts. All machinery maintained to OEM standards with 24×7 support.",
    tags:  ['Excavators', 'Graders', 'Compactors', 'Pavers'],
  },
  {
    Icon:  Wrench,
    title: 'Equipment Leasing',
    short: 'Smart capital deployment',
    desc:  'Strategic leasing solutions — access premium machinery without capital lock-in. Full maintenance, operator training and dedicated service included throughout the lease term.',
    tags:  ['Finance', 'Maintenance', 'Training', 'Support'],
  },
  {
    Icon:  ShoppingCart,
    title: 'Equipment Trading',
    short: 'Trusted buy, sell & export',
    desc:  'Domestic and international marketplace for new and certified pre-owned infrastructure equipment. Quality-verified machinery at optimal market prices.',
    tags:  ['New', 'Pre-Owned', 'Export', 'Import'],
  },
  {
    Icon:  Repeat,
    title: 'Refurbishment',
    short: 'Restore peak performance',
    desc:  'Expert reconditioning of commercial vehicles and construction equipment. Significantly extend machine life while restoring factory-grade performance and safety ratings.',
    tags:  ['Engine Rebuild', 'Body Repair', 'Certification', 'OEM Parts'],
  },
  {
    Icon:  Layers,
    title: 'Milling & Paving',
    short: 'Road surface specialists',
    desc:  'Specialised milling, paving and cold-in-place recycling. High-performance Wirtgen and Vögele machines for highway construction, rehabilitation and maintenance.',
    tags:  ['Milling', 'Paving', 'Cold Recycling', 'Finishing'],
  },
  {
    Icon:  Drill,
    title: 'Soil Stabilisation',
    short: 'Ground improvement systems',
    desc:  'Advanced soil stabilisation using state-of-the-art machinery. Improve bearing capacity, reduce material cost and significantly accelerate project timelines.',
    tags:  ['Stabilisers', 'In-Place Recycling', 'Sub-base', 'Base Course'],
  },
  {
    Icon:  HardHat,
    title: 'Crushing & Screening',
    short: 'Aggregate production at scale',
    desc:  'Mobile and stationary crushing and screening plants for continuous aggregate supply. Ideal for highway projects, quarry operations and construction material supply.',
    tags:  ['Jaw Crushers', 'Impact Crushers', 'Screens', 'Mobile Plants'],
  },
  {
    Icon:  Package,
    title: 'Works Contracts',
    short: 'End-to-end project ownership',
    desc:  'Complete turnkey works contracts — we manage equipment, operators and logistics. A single accountable partner for your entire defined project scope.',
    tags:  ['Turnkey', 'Project Management', 'QA/QC', 'Commissioning'],
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.08 })

  const svc = SERVICES[active]

  return (
    <section
      id="services"
      ref={ref}
      className="relative section-py overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #02040a 0%, #040813 100%)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 pointer-events-none"
        style={{
          width: 800,
          height: 400,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="wrap container-x relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="section-label mb-5">What We Do</div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="t-display font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span className="grad-white">Solutions That</span>
              <br />
              <span className="grad-gold">Move India</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-sm t-small text-white/40 lg:text-right"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            From single machine hire to complete works contracts — every service engineered
            for maximum uptime and project success.
          </motion.p>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Service tabs */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {SERVICES.map((s, i) => {
              const isActive = i === active
              return (
                <motion.button
                  key={s.title}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                  data-cursor
                  className="group relative flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 border overflow-hidden"
                  style={{
                    borderColor: isActive ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.07)',
                    background:  isActive ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.02)',
                    boxShadow:   isActive ? '0 0 20px rgba(201,168,76,0.08)' : 'none',
                  }}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceBar"
                      className="absolute left-0 inset-y-0 w-0.5"
                      style={{ background: 'linear-gradient(to bottom, transparent, #c9a84c, transparent)' }}
                    />
                  )}
                  {/* Icon */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background:  isActive ? 'rgba(201,168,76,0.18)' : 'rgba(255,255,255,0.04)',
                      border:      isActive ? '1px solid rgba(201,168,76,0.4)' : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <s.Icon
                      size={15}
                      style={{ color: isActive ? '#c9a84c' : 'rgba(255,255,255,0.45)' }}
                    />
                  </div>
                  {/* Labels */}
                  <div>
                    <div
                      className="text-sm font-medium transition-colors"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        color: isActive ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.55)',
                      }}
                    >
                      {s.title}
                    </div>
                    <div
                      className="text-xs"
                      style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.28)' }}
                    >
                      {s.short}
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border overflow-hidden"
              style={{
                borderColor: 'rgba(201,168,76,0.2)',
                background:
                  'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 pointer-events-none"
                style={{
                  width: 260,
                  height: 260,
                  background: 'radial-gradient(circle at 100% 0%, rgba(201,168,76,0.12), transparent 65%)',
                }}
              />

              <div className="relative z-10 p-8 lg:p-10">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-gold/28"
                  style={{ background: 'rgba(201,168,76,0.1)' }}
                >
                  <svc.Icon size={28} style={{ color: '#c9a84c' }} />
                </div>

                {/* Title */}
                <h3
                  className="t-title text-white/95 mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                >
                  {svc.title}
                </h3>

                {/* Description */}
                <p
                  className="t-body text-white/52 leading-relaxed mb-8"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {svc.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {svc.tags.map(tag => (
                    <span key={tag} className="tag-gold">{tag}</span>
                  ))}
                </div>

                <div className="gold-line mb-7" />

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { v: '500+', l: 'Fleet Size' },
                    { v: '24×7', l: 'Support'    },
                    { v: '40+',  l: 'Yrs Exp.'   },
                  ].map(m => (
                    <div key={m.l}>
                      <div
                        className="grad-gold font-light"
                        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem,2.5vw,2rem)', lineHeight: 1.1 }}
                      >
                        {m.v}
                      </div>
                      <div className="t-label text-white/35 mt-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {m.l}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href="#contact" data-cursor className="btn-gold gap-2">
                  Request This Service
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
