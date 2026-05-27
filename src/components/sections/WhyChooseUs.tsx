'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Clock, Wrench, MapPin, TrendingUp, Headphones, Star } from 'lucide-react'

const REASONS = [
  { Icon: Shield,      title: 'Safety First',           desc: 'Zero-compromise safety protocols across all operations. ISO-aligned procedures and certified operators on every project site.'            },
  { Icon: Clock,       title: '24×7 Availability',      desc: "Round-the-clock technical support and rapid mobilisation. Breakdowns don't wait — neither do we. Response anywhere in India within hours."  },
  { Icon: Wrench,      title: 'In-House Engineering',    desc: 'Dedicated workshop and service engineers ensure peak machine performance. Preventive maintenance schedules and on-site repair capabilities.'   },
  { Icon: MapPin,      title: 'Pan-India Reach',         desc: 'Equipment deployed across 20+ states. Local knowledge combined with national logistics for swift mobilisation to any project site.'          },
  { Icon: TrendingUp,  title: 'Optimal Pricing',         desc: 'Market expertise ensures best value. Transparent contracts, no hidden costs. Our sourcing relationships deliver genuine competitive advantage.' },
  { Icon: Headphones,  title: 'Dedicated Support',       desc: 'Single point of contact for every project need. Relationship managers who know your requirements and anticipate challenges proactively.'       },
]

const HIGHLIGHTS = [
  { stat: '85%+', label: 'Client Return Rate'      },
  { stat: '<4h',  label: 'Avg. Response Time'       },
  { stat: '100%', label: 'Project Completion Record' },
]

export default function WhyChooseUs() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.08 })

  return (
    <section
      ref={ref}
      className="relative section-py overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #02040a 0%, #040813 100%)' }}
    >
      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 900,
          height: 240,
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.08), transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="wrap container-x relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-16">
          <div className="flex-1">
            <div className="section-label mb-5">Why VIESL</div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="t-display font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span className="grad-white">The Preferred Choice of</span>
              <br />
              <span className="grad-gold">India&apos;s Infrastructure Leaders</span>
            </motion.h2>
          </div>

          {/* Highlight metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="flex flex-col gap-4"
          >
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="flex items-center gap-4 lg:justify-end">
                <div
                  className="grad-gold font-light"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.5rem,2.5vw,2rem)', lineHeight: 1.1 }}
                >
                  {h.stat}
                </div>
                <div
                  className="text-white/38 text-xs"
                  style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em' }}
                >
                  {h.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 rounded-2xl border border-subtle hover:border-gold overflow-hidden transition-all duration-400"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 20% 20%, rgba(201,168,76,0.07), transparent 65%)' }}
              />

              <div className="relative z-10">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border border-gold/18 group-hover:border-gold/40 transition-colors"
                  style={{ background: 'rgba(201,168,76,0.08)' }}
                >
                  <Icon size={18} style={{ color: '#c9a84c' }} />
                </div>
                <h3
                  className="text-white/90 font-medium mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {title}
                </h3>
                <p
                  className="text-white/40 text-sm leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 rounded-2xl border border-gold flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: 'rgba(201,168,76,0.04)' }}
        >
          <div className="flex items-center gap-3">
            <div className="flex">
              {[0, 1, 2, 3, 4].map(s => (
                <Star key={s} size={15} className="fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span
              className="text-white/60 text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Rated top infrastructure equipment partner by clients across India
            </span>
          </div>
          <a href="#testimonials" data-cursor className="btn-outline shrink-0 py-2.5 px-5">
            Read Testimonials →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
