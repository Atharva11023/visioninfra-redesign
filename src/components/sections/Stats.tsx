'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 40,   suffix: '+',  label: 'Years of Excellence', sub: 'Since 1983'           },
  { value: 500,  suffix: '+',  label: 'Equipment Fleet',      sub: 'Pan-India deployed'   },
  { value: 1000, suffix: '+',  label: 'Projects Completed',   sub: 'Roads & highways'     },
  { value: 200,  suffix: '+',  label: 'Trusted Clients',      sub: 'Repeat business >85%' },
  { value: 20,   suffix: '+',  label: 'States Covered',       sub: 'Pan-India reach'      },
  { value: 24,   suffix: '×7', label: 'Technical Support',    sub: 'Never off the line'   },
]

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!active) return
    let current = 0
    const totalDuration = 2000
    const intervalMs = 16
    const increment = target / (totalDuration / intervalMs)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setVal(target)
        clearInterval(timer)
      } else {
        setVal(Math.floor(current))
      }
    }, intervalMs)
    return () => clearInterval(timer)
  }, [active, target])

  return <>{val.toLocaleString('en-IN')}{suffix}</>
}

export default function Stats() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden section-py"
      style={{ background: '#040813' }}
    >
      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-0 gold-line" />
      <div className="absolute inset-x-0 bottom-0 gold-line" />

      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.12), transparent 65%)',
        }}
      />

      <div className="wrap container-x relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label justify-center mb-5"
          >
            Impact in Numbers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="t-display grad-white font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Four Decades of <span className="grad-gold">Building India</span>
          </motion.h2>
        </div>

        {/* Stats grid — border handled via className only, no invalid style props */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 rounded-[1.25rem] overflow-hidden"
          style={{ border: '1px solid rgba(201,168,76,0.12)' }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="group relative p-8 lg:p-10 flex flex-col gap-1 hover:bg-white/[0.025] transition-colors duration-500"
              style={{ borderRight: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(201,168,76,0.07), transparent 65%)',
                }}
              />

              {/* Number */}
              <div
                className="grad-gold font-light relative z-10"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                <Counter target={s.value} suffix={s.suffix} active={inView} />
              </div>

              {/* Label */}
              <div
                className="text-white/80 font-medium text-sm relative z-10"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {s.label}
              </div>

              {/* Sub */}
              <div
                className="relative z-10"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.18em',
                  color: 'rgba(201,168,76,0.5)',
                  textTransform: 'uppercase',
                }}
              >
                {s.sub}
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'linear-gradient(to right, transparent, #c9a84c, transparent)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
