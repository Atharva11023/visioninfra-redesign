'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const MILESTONES = [
  { year: '1983',  title: 'The Beginning',           desc: 'Founded as a family business in Pune focused on commercial vehicle refurbishment — the seed of a four-decade legacy.',   side: 'left'  },
  { year: '1990s', title: 'Construction Equipment',  desc: 'Expanded into specialised construction equipment refurbishment, building deep machinery expertise across categories.',    side: 'right' },
  { year: '2000',  title: 'Rental Launch',            desc: 'Pivotal strategic shift: launched equipment rental operations, opening an entirely new growth dimension.',                side: 'left'  },
  { year: '2005',  title: 'Road Construction Focus',  desc: 'Expanded into dedicated road construction equipment rental as India\'s National Highway boom began in earnest.',          side: 'right' },
  { year: '2010',  title: 'Vision Infra Formation',   desc: 'Established the Vision Infra brand — formalising corporate identity, governance, and operational scale.',                side: 'left'  },
  { year: '2015',  title: 'Full-Service Provider',    desc: 'Launched milling, paving, soil stabilisation and cold recycling — becoming India\'s one-stop infrastructure partner.',    side: 'right' },
  { year: '2020',  title: 'VIESL Incorporation',      desc: 'Incorporated as Vision Infra Equipment Solutions Limited. Pan-India operations with 200+ active client accounts.',       side: 'left'  },
  { year: '2024+', title: 'The Next Chapter',         desc: 'Expanding to 500+ fleet, entering new geographies, and supporting India\'s ₹10 lakh crore infrastructure ambition.',   side: 'right' },
]

interface MilestoneItemProps {
  m: typeof MILESTONES[0]
  i: number
  inView: boolean
}

function MilestoneItem({ m, i, inView }: MilestoneItemProps) {
  const isLeft = m.side === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'lg:pr-20 lg:text-right' : 'lg:pl-20'}`}>
        <div
          className="mb-2"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            letterSpacing: '0.28em',
            color: 'rgba(201,168,76,0.65)',
            textTransform: 'uppercase',
          }}
        >
          {m.year}
        </div>
        <h3
          className="text-white/90 font-medium text-base mb-2"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {m.title}
        </h3>
        <p
          className="text-white/40 text-sm leading-relaxed"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {m.desc}
        </p>
      </div>

      {/* Centre dot — desktop only */}
      <div className="relative shrink-0 hidden lg:flex items-center justify-center z-10 px-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: i * 0.09 + 0.3, type: 'spring', stiffness: 280, damping: 22 }}
          className="w-4 h-4 rounded-full border-2"
          style={{
            borderColor: '#c9a84c',
            background: '#040813',
            boxShadow: '0 0 14px rgba(201,168,76,0.45)',
          }}
        >
          <div
            className="absolute inset-[3px] rounded-full"
            style={{ background: '#c9a84c' }}
          />
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  )
}

export default function Timeline() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.05 })

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative section-py overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #040813 0%, #070d1f 50%, #040813 100%)',
      }}
    >
      {/* Vertical centre spine — desktop */}
      <motion.div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          left: '50%',
          top: '12rem',
          bottom: '8rem',
          width: 1,
          background:
            'linear-gradient(to bottom, transparent, rgba(201,168,76,0.2), rgba(201,168,76,0.15), transparent)',
        }}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="wrap container-x relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label justify-center mb-5">Our Journey</div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="t-display font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            <span className="grad-gold">40 Years</span>{' '}
            <span className="grad-white">of Building Excellence</span>
          </motion.h2>
        </div>

        {/* Milestones */}
        <div className="flex flex-col gap-12 lg:gap-10">
          {MILESTONES.map((m, i) => (
            <MilestoneItem key={m.year} m={m} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
