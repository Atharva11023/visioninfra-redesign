'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Award, Target, Users } from 'lucide-react'

const VALUES = [
  { icon: Users,        title: 'People First', desc: "Our team's well-being is the foundation of our exceptional service quality."    },
  { icon: CheckCircle2, title: 'Integrity',    desc: 'Honesty and transparency form the bedrock of every relationship we build.'      },
  { icon: Award,        title: 'Safety',       desc: 'Zero-compromise safety protocols across every operation and project site.'       },
  { icon: Target,       title: 'Excellence',   desc: 'Continual improvement and superior service delivery as our unwavering standard.' },
]

export default function About() {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.12 })

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-py overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #02040a 0%, #040813 50%, #02040a 100%)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.08), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="wrap container-x grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* ── Left: Visual ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Main illustration card */}
          <div
            className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gold glass-dark"
          >
            <svg viewBox="0 0 400 533" className="w-full h-full" fill="none">
              <defs>
                <radialGradient id="about-bg" cx="50%" cy="30%" r="60%">
                  <stop offset="0%"   stopColor="#c9a84c" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#040813" stopOpacity="0"   />
                </radialGradient>
                <linearGradient id="crane-line" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#c9a84c" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect width="400" height="533" fill="#070d1f" />
              <rect width="400" height="533" fill="url(#about-bg)" />
              {/* Grid lines */}
              {[1,2,3,4].map(i => (
                <line key={`v${i}`} x1={i*80} y1="0" x2={i*80} y2="533" stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
              ))}
              {[1,2,3,4,5,6].map(i => (
                <line key={`h${i}`} x1="0" y1={i*80} x2="400" y2={i*80} stroke="rgba(201,168,76,0.04)" strokeWidth="1" />
              ))}
              {/* Road */}
              <rect x="0" y="420" width="400" height="113" fill="rgba(201,168,76,0.03)" />
              <line x1="0" y1="420" x2="400" y2="420" stroke="rgba(201,168,76,0.25)" strokeWidth="1" />
              {/* Centreline */}
              {[0,1,2,3,4,5].map(i => (
                <rect key={i} x="188" y={432 + i * 16} width="24" height="8" rx="2" fill="rgba(201,168,76,0.22)" />
              ))}
              {/* Milling machine */}
              <rect x="55" y="340" width="165" height="80" rx="6" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.38)" strokeWidth="1.5" />
              <rect x="70" y="318" width="135" height="28" rx="4" fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.28)" strokeWidth="1" />
              <circle cx="92" cy="423" r="20" fill="#070d1f" stroke="#c9a84c" strokeWidth="2" />
              <circle cx="92" cy="423" r="9"  fill="rgba(201,168,76,0.25)" />
              <circle cx="188" cy="423" r="20" fill="#070d1f" stroke="#c9a84c" strokeWidth="2" />
              <circle cx="188" cy="423" r="9"  fill="rgba(201,168,76,0.25)" />
              {/* Milling drum teeth */}
              <rect x="68" y="414" width="145" height="10" rx="2" fill="rgba(201,168,76,0.35)" />
              {[0,1,2,3,4,5,6,7,8].map(i => (
                <line key={i} x1={73 + i * 16} y1="414" x2={73 + i * 16} y2="424" stroke="#c9a84c" strokeWidth="1.5" opacity="0.55" />
              ))}
              {/* Cab */}
              <rect x="88" y="290" width="44" height="30" rx="3" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.35)" strokeWidth="1" />
              {/* Crane */}
              <line x1="312" y1="420" x2="312" y2="55" stroke="url(#crane-line)" strokeWidth="3" />
              <line x1="312" y1="68"  x2="388" y2="68" stroke="rgba(201,168,76,0.5)" strokeWidth="2" />
              <line x1="388" y1="68"  x2="388" y2="185" stroke="rgba(201,168,76,0.18)" strokeWidth="1" strokeDasharray="5 7" />
              <line x1="312" y1="68"  x2="344" y2="420" stroke="rgba(201,168,76,0.12)" strokeWidth="1.5" />
              <circle cx="388" cy="198" r="7" fill="rgba(201,168,76,0.3)" stroke="rgba(201,168,76,0.5)" strokeWidth="1" />
              <rect x="292" y="414" width="40" height="8" rx="2" fill="rgba(201,168,76,0.28)" />
              {/* Ambient particles */}
              {[[45,78],[355,150],[28,205],[385,295],[200,100],[355,55]].map(([x,y],i) => (
                <circle key={i} cx={x} cy={y} r="1.5" fill="rgba(201,168,76,0.5)" />
              ))}
              {/* Top label */}
              <text x="200" y="42" textAnchor="middle" fill="rgba(201,168,76,0.3)"
                fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="5">
                EQUIPMENT FLEET
              </text>
              <line x1="50" y1="52" x2="350" y2="52" stroke="rgba(201,168,76,0.1)" strokeWidth="1" strokeDasharray="4 8" />
            </svg>

            {/* Year badge */}
            <div
              className="absolute bottom-5 left-5 glass-gold rounded-xl px-4 py-3"
            >
              <div
                className="grad-gold font-light text-2xl"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                1983
              </div>
              <div
                className="text-white/50 text-xs mt-0.5"
                style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}
              >
                Est. Pune, India
              </div>
            </div>
          </div>

          {/* Floating metric */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-6 top-1/3 glass-gold rounded-2xl p-4 w-44 hidden lg:block border border-gold"
            style={{ boxShadow: '0 0 30px rgba(201,168,76,0.15)' }}
          >
            <div
              className="grad-gold font-light text-4xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              500+
            </div>
            <div
              className="text-white/55 text-xs leading-snug mt-1"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Active machines deployed across India
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: Content ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8"
        >
          <div>
            <div className="section-label mb-5">About VIESL</div>
            <h2
              className="t-display font-light mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span className="grad-white">Building India&apos;s</span>
              <br />
              <span className="grad-gold">Infrastructure</span>
              <br />
              <span className="grad-white">Since 1983</span>
            </h2>
            <p
              className="t-body text-white/55 leading-relaxed mb-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Our story started as a family business in Pune engaged in commercial vehicle
              refurbishment. Over four decades, we grew in purpose and scale — spreading our
              roots across every major infrastructure corridor in India.
            </p>
            <p
              className="t-body text-white/38 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Today, Vision Infra Equipment Solutions Limited (VIESL) is recognised as India&apos;s
              best-practices infrastructure equipment rental service provider — a trusted trader
              and solutions partner, meeting client needs efficiently, reliably, and safely.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {VALUES.map((val, i) => {
              const Icon = val.icon
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.28 + i * 0.09, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex gap-3 p-4 rounded-xl border border-subtle hover:border-gold transition-all duration-400"
                  style={{ background: 'rgba(255,255,255,0.025)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-gold/18 group-hover:border-gold/40 transition-colors"
                    style={{ background: 'rgba(201,168,76,0.08)' }}
                  >
                    <Icon size={15} style={{ color: '#c9a84c' }} />
                  </div>
                  <div>
                    <div
                      className="text-white/90 text-sm font-medium mb-0.5"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {val.title}
                    </div>
                    <div
                      className="text-white/40 text-xs leading-relaxed"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {val.desc}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="gold-line" />

          <a href="#contact" data-cursor className="btn-outline self-start gap-2">
            Partner with VIESL →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
