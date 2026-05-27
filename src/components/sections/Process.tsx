'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STEPS = [
  { n: '01', title: 'Requirement Analysis',   desc: 'Deep project consultation to understand scope, timeline, terrain conditions and equipment specifications needed.' },
  { n: '02', title: 'Equipment Selection',     desc: 'Expert recommendation of optimal machinery from 500+ fleet — precisely matching spec to project requirements.' },
  { n: '03', title: 'Commercial Proposal',     desc: 'Transparent pricing with flexible rental, lease or purchase options. No hidden costs — clear contract terms.' },
  { n: '04', title: 'Mobilisation',            desc: 'Swift equipment deployment to your project site with certified operators if required. Full handover documentation.' },
  { n: '05', title: 'On-Site Support',         desc: '24×7 technical assistance, preventive maintenance and spare parts — zero unplanned downtime commitment.' },
  { n: '06', title: 'Project Completion',       desc: 'Smooth demobilisation, performance review and relationship continuity for future projects and long-term partnership.' },
]

export default function Process() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.08 })

  return (
    <section
      id="process"
      ref={ref}
      className="relative section-py overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #040813 0%, #070d1f 60%, #040813 100%)' }}
    >
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 gold-line" />

      <div className="wrap container-x relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <div className="section-label mb-5">How It Works</div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="t-display font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span className="grad-white">Our Proven</span>
              <br />
              <span className="grad-gold">6-Step Process</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-sm text-white/40 text-sm leading-relaxed lg:text-right"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            A streamlined, client-focused workflow refined over 40 years to ensure zero friction
            from enquiry through to project completion.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 rounded-2xl border border-subtle hover:border-gold overflow-hidden transition-all duration-400"
              style={{ background: 'rgba(255,255,255,0.025)' }}
            >
              {/* Ghost number */}
              <div
                className="absolute right-4 top-3 font-light leading-none pointer-events-none select-none transition-colors duration-400"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '5rem',
                  color: 'rgba(201,168,76,0.05)',
                }}
              >
                {step.n}
              </div>

              {/* Active glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 20% 20%, rgba(201,168,76,0.07), transparent 65%)' }}
              />

              <div className="relative z-10">
                {/* Badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border border-gold/25 text-xs text-gold"
                  style={{ background: 'rgba(201,168,76,0.08)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em' }}
                >
                  {step.n}
                </div>
                <h3
                  className="text-white/90 font-medium mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/40 text-sm leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'linear-gradient(to right, transparent, #c9a84c, transparent)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute inset-x-0 bottom-0 gold-line" />
    </section>
  )
}
