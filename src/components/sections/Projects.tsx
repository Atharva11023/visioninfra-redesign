'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence, LayoutGroup } from 'framer-motion'
import { MapPin, ArrowUpRight, SlidersHorizontal } from 'lucide-react'

const CATEGORIES = ['All', 'Road Construction', 'Milling', 'Soil Stabilisation', 'Crushing'] as const
type Category = typeof CATEGORIES[number]

const PROJECTS = [
  {
    id: 1, title: 'NH-48 Expressway Resurfacing',
    category: 'Milling' as Category,
    location: 'Mumbai–Pune, Maharashtra',
    year: '2024', client: 'NHAI',
    highlight: '42 km milled — 15% ahead of schedule',
    equipment: ['Cold Milling', 'Pavers', 'Compactors'],
  },
  {
    id: 2, title: 'State Highway Stabilisation',
    category: 'Soil Stabilisation' as Category,
    location: 'Nashik–Aurangabad, Maharashtra',
    year: '2024', client: 'MSRDC',
    highlight: '80 km corridor, 22% cost reduction',
    equipment: ['Stabilisers', 'Recyclers', 'Graders'],
  },
  {
    id: 3, title: 'Aggregate Supply — Ring Road',
    category: 'Crushing' as Category,
    location: 'Outer Ring Road, Hyderabad',
    year: '2023', client: 'HMDA',
    highlight: '1.2 million tons processed on-site',
    equipment: ['Mobile Crushers', 'Screens', 'Conveyors'],
  },
  {
    id: 4, title: 'Greenfield Expressway Package',
    category: 'Road Construction' as Category,
    location: 'Delhi–Amritsar Expressway, Punjab',
    year: '2023', client: 'NHAI (HAM)',
    highlight: '28 km, 15+ machine fleet mobilised',
    equipment: ['Excavators', 'Graders', 'Pavers'],
  },
  {
    id: 5, title: 'Port Connectivity Road',
    category: 'Road Construction' as Category,
    location: 'JNPT Connectivity, Navi Mumbai',
    year: '2023', client: 'CIDCO',
    highlight: 'Heavy-duty access road, rigid pavement',
    equipment: ['Excavators', 'Compactors', 'Pavers'],
  },
  {
    id: 6, title: 'Mining Haul Road Rehabilitation',
    category: 'Milling' as Category,
    location: 'Singrauli, Madhya Pradesh',
    year: '2022', client: 'Coal India',
    highlight: '18 km — rated for 100-ton trucks',
    equipment: ['Heavy Milling', 'Heavy Compactors'],
  },
]

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: typeof PROJECTS[0]
  index: number
  inView: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.55, delay: index * 0.065, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor
      className="group relative rounded-2xl overflow-hidden border transition-all duration-400"
      style={{
        borderColor: hovered ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.07)',
        background: 'rgba(255,255,255,0.025)',
        boxShadow: hovered ? '0 8px 40px rgba(0,0,0,0.4), 0 0 20px rgba(201,168,76,0.08)' : 'none',
      }}
    >
      {/* Top accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #c9a84c, transparent)' }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400"
        style={{
          background: 'radial-gradient(ellipse at 30% 0%, rgba(201,168,76,0.07), transparent 65%)',
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="relative z-10 p-6">
        {/* Meta */}
        <div className="flex items-center justify-between mb-4">
          <span className="tag-gold">{project.category}</span>
          <span
            className="t-label text-white/30"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-white/90 font-medium text-base leading-snug mb-2 transition-colors duration-200"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            color: hovered ? 'rgba(255,255,255,0.98)' : undefined,
          }}
        >
          {project.title}
        </h3>

        {/* Location */}
        <div
          className="flex items-center gap-1.5 mb-3"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.32)',
          }}
        >
          <MapPin size={10} style={{ color: '#c9a84c', flexShrink: 0 }} />
          {project.location}
        </div>

        {/* Highlight */}
        <p
          className="text-white/45 text-xs leading-relaxed mb-4"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {project.highlight}
        </p>

        {/* Equipment tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.equipment.map(eq => (
            <span
              key={eq}
              className="px-2.5 py-1 text-[10px] text-white/30 rounded"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.05em',
              }}
            >
              {eq}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div>
            <div className="t-label text-white/22 mb-0.5" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Client</div>
            <div
              className="text-xs font-medium"
              style={{ fontFamily: 'DM Sans, sans-serif', color: '#c9a84c' }}
            >
              {project.client}
            </div>
          </div>
          <ArrowUpRight
            size={16}
            className="transition-all duration-300"
            style={{
              color: hovered ? '#c9a84c' : 'rgba(255,255,255,0.2)',
              transform: hovered ? 'translate(2px,-2px)' : 'none',
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [cat, setCat]  = useState<Category>('All')
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.08 })

  const filtered = cat === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === cat)

  return (
    <section
      id="projects"
      ref={ref}
      className="relative section-py overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #02040a 0%, #040813 50%, #02040a 100%)' }}
    >
      <div className="wrap container-x relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 mb-14">
          <div className="flex-1">
            <div className="section-label mb-5">Our Work</div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="t-display font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span className="grad-white">Projects That</span>
              <br />
              <span className="grad-gold">Define India</span>
            </motion.h2>
          </div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-2 items-center"
          >
            <SlidersHorizontal size={13} style={{ color: 'rgba(201,168,76,0.5)', flexShrink: 0 }} />
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                data-cursor
                className="px-4 py-2 rounded-lg text-xs transition-all duration-220"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  letterSpacing: '0.05em',
                  border: '1px solid',
                  borderColor: cat === c ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.07)',
                  background:  cat === c ? 'rgba(201,168,76,0.1)' : 'transparent',
                  color:       cat === c ? '#e8c97a' : 'rgba(255,255,255,0.4)',
                }}
              >
                {c}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} inView={inView} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="#contact" data-cursor className="btn-outline gap-2">
            Discuss Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
