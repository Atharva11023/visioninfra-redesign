'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, ExternalLink } from 'lucide-react'

const TEAM = [
  {
    name:     'Sachin Gandhi',
    title:    'Chairman & Managing Director',
    initials: 'SG',
    bio:      'With a hands-on approach and 20+ years in infrastructure equipment, Mr. Gandhi has been the driving force behind VIESL\'s growth from a Pune workshop to a pan-India market leader.',
  },
  {
    name:     'Nilesh Pokharna',
    title:    'Chief Financial Officer',
    initials: 'NP',
    bio:      'Deep expertise in financial management and strategic planning. Instrumental in driving VIESL\'s financial discipline, enabling sustained growth and capital-efficient fleet expansion.',
  },
  {
    name:     'Operations Leadership',
    title:    'Head of Operations',
    initials: 'OT',
    bio:      'Seasoned operations team ensuring fleet availability, deployment efficiency, and maintenance standards across all project sites and client engagements pan-India.',
  },
]

export default function Team() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.15 })

  return (
    <section
      id="team"
      ref={ref}
      className="relative section-py overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #070d1f 0%, #040813 100%)' }}
    >
      <div className="wrap container-x relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-5">Leadership</div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="t-display font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            <span className="grad-white">The People Behind</span>
            <br />
            <span className="grad-gold">Every Machine</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 rounded-2xl border border-subtle hover:border-gold transition-all duration-400 flex flex-col overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 30% 0%, rgba(201,168,76,0.08), transparent 65%)' }}
              />

              <div className="relative z-10 flex flex-col flex-1">
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-light text-gold mb-5 border border-gold/25 group-hover:border-gold/50 transition-colors"
                  style={{
                    background: 'rgba(201,168,76,0.08)',
                    fontFamily: 'Cormorant Garamond, serif',
                  }}
                >
                  {member.initials}
                </div>

                {/* Info */}
                <h3
                  className="text-white/90 font-medium text-base mb-1"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs mb-4"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: '#c9a84c', letterSpacing: '0.05em' }}
                >
                  {member.title}
                </p>
                <p
                  className="text-white/40 text-sm leading-relaxed flex-1"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {member.bio}
                </p>

                {/* Footer */}
                <div
                  className="mt-5 pt-4 flex items-center justify-between"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <button
                    data-cursor
                    className="flex items-center gap-2 text-xs text-white/30 hover:text-gold transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    <Linkedin size={13} />
                    LinkedIn
                  </button>
                  <ExternalLink size={13} className="text-white/20 group-hover:text-gold/50 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
