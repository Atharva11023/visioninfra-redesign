'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name:    'Director',
    company: 'Balajee Infratech & Constructions Pvt. Ltd.',
    role:    'Director',
    stars:   5,
    text:    'Ever since our association with Vision Infra Equipment Solutions Ltd, we have not felt the need to look elsewhere for our road construction equipment requirements. They have proven to be a one-stop solution with excellent support and 24×7 availability for problem resolution. Highly recommend.',
  },
  {
    name:    'VP Sales',
    company: 'Wirtgen India Pvt. Ltd.',
    role:    'Vice President, Head of Sales',
    stars:   5,
    text:    'With their extensive range of Crushers, Milling Machines, Soil Stabilisers, Cold Recyclers, Pavers and Compactors, VIESL has helped us considerably in resource management. All equipment is well-maintained and performs at optimum levels — giving us confidence in achieving required productivity.',
  },
  {
    name:    'CMD',
    company: 'Markolines Pavement Technologies Limited',
    role:    'Chairman & Managing Director',
    stars:   5,
    text:    'VIESL is redefining the infrastructure equipment rental and trading space. They remain committed to bringing value to partners by delivering solid results. For over two decades they have provided superior equipment and trustworthy service — the right machinery at the right price.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused,  setPaused]  = useState(false)
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.2 })

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), 5500)
    return () => clearInterval(t)
  }, [paused])

  const prev = () => { setPaused(true); setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length) }
  const next = () => { setPaused(true); setCurrent(c => (c + 1) % TESTIMONIALS.length) }

  const t = TESTIMONIALS[current]

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative section-py overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #040813 0%, #070d1f 50%, #040813 100%)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, #c9a84c, transparent 60%)', filter: 'blur(60px)' }}
      />

      <div className="wrap container-x relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-5">Client Voices</div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="t-display font-light grad-white"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            What Our Partners Say
          </motion.h2>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl p-8 md:p-12 border border-gold glass-dark"
        >
          {/* Noise overlay */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-40"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
            }}
          />

          <div className="relative z-10">
            {/* Quote icon */}
            <Quote size={32} style={{ color: 'rgba(201,168,76,0.3)' }} className="mb-6" />

            {/* Stars */}
            <div className="flex gap-1 mb-7">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
              ))}
            </div>

            {/* Text */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={`text-${current}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/70 leading-relaxed mb-8"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(0.9rem,1.5vw,1.1rem)', fontStyle: 'italic' }}
              >
                &ldquo;{t.text}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-gold font-bold text-lg border border-gold/25"
                  style={{ background: 'rgba(201,168,76,0.1)', fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white/90 font-medium text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {t.role}
                  </div>
                  <div className="text-gold text-xs mt-0.5" style={{ fontFamily: 'DM Sans, sans-serif', color: '#c9a84c' }}>
                    {t.company}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div
              className="flex items-center justify-between mt-8 pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Dots */}
              <div className="flex gap-2 items-center">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setPaused(true); setCurrent(i) }}
                    className="rounded-full transition-all duration-300"
                    aria-label={`Go to testimonial ${i + 1}`}
                    style={{
                      height: 4,
                      width: i === current ? 28 : 8,
                      background: i === current ? '#c9a84c' : 'rgba(255,255,255,0.2)',
                    }}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-2">
                {[
                  { label: 'Previous', onClick: prev, Icon: ChevronLeft },
                  { label: 'Next',     onClick: next, Icon: ChevronRight },
                ].map(({ label, onClick, Icon }) => (
                  <button
                    key={label}
                    onClick={onClick}
                    aria-label={label}
                    data-cursor
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white/35 hover:text-white transition-all duration-200 border border-white/10 hover:border-gold/30"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
