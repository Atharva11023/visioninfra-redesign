'use client'

import { useRef, useEffect, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

const HEADLINE_LINES = ['WE EQUIP', 'YOUR VISION']

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 85,
  size: Math.random() * 1.5 + 0.5,
  delay: Math.random() * 5,
  duration: 5 + Math.random() * 6,
}))

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [ready, setReady] = useState(false)

  // Mouse tracking for glow
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(40)
  const springX = useSpring(mouseX, { stiffness: 25, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 25, damping: 20 })

  // useMotionTemplate creates a reactive string from motion values — no .get() in render
  const glowBg = useMotionTemplate`radial-gradient(ellipse at ${springX}% ${springY}%, rgba(201,168,76,0.1) 0%, transparent 55%)`

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const bgScale  = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 100)
      mouseY.set((e.clientY / window.innerHeight) * 100)
    }
    window.addEventListener('mousemove', handleMouse, { passive: true })
    // Delay content reveal until after loader exits (~2.7s)
    const t = setTimeout(() => setReady(true), 2800)
    return () => {
      window.removeEventListener('mousemove', handleMouse)
      clearTimeout(t)
    }
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* ── Parallax background layer ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(155deg, #02040a 0%, #040813 40%, #070d1f 65%, #02040a 100%)',
          }}
        />

        {/* Mouse-reactive glow — uses motion template, safe on server */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: glowBg }}
        />

        {/* Static ambient glows */}
        <div
          className="absolute top-0 left-1/3 w-[600px] h-[450px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgba(201,168,76,0.1) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.035) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(201,168,76,0.035) 1px, transparent 1px)',
            backgroundSize: '110px 110px',
          }}
        />

        {/* Floating particles */}
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: 'rgba(201,168,76,0.7)',
            }}
            animate={{ y: [0, -16, 0], opacity: [0.25, 0.8, 0.25] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Infrastructure silhouette SVG */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
          viewBox="0 0 1440 280"
          fill="none"
          preserveAspectRatio="none"
          style={{ opacity: 0.07 }}
        >
          {/* Road beds */}
          <path
            d="M0 280 L0 210 Q360 165 720 185 Q1080 205 1440 155 L1440 280Z"
            fill="#c9a84c"
          />
          <path
            d="M0 280 L0 240 Q360 225 720 235 Q1080 245 1440 220 L1440 280Z"
            fill="rgba(201,168,76,0.45)"
          />
          {/* Road centreline dashes */}
          {[0,1,2,3,4,5,6].map(i => (
            <rect key={i} x={80 + i * 200} y={250} width={80} height={6} rx={3} fill="rgba(201,168,76,0.35)" />
          ))}
          {/* Compactor */}
          <rect x="80" y="195" width="155" height="65" rx="5" fill="rgba(201,168,76,0.5)" />
          <rect x="95" y="180" width="125" height="20" rx="4" fill="rgba(201,168,76,0.35)" />
          <circle cx="115" cy="263" r="20" fill="none" stroke="#c9a84c" strokeWidth="2.5" />
          <circle cx="115" cy="263" r="9" fill="rgba(201,168,76,0.3)" />
          <circle cx="210" cy="263" r="20" fill="none" stroke="#c9a84c" strokeWidth="2.5" />
          <circle cx="210" cy="263" r="9" fill="rgba(201,168,76,0.3)" />
          {/* Paver */}
          <rect x="900" y="185" width="195" height="65" rx="5" fill="rgba(201,168,76,0.45)" />
          <rect x="910" y="205" width="175" height="18" rx="3" fill="rgba(201,168,76,0.2)" />
          <circle cx="930" cy="255" r="19" fill="none" stroke="#c9a84c" strokeWidth="2" />
          <circle cx="1075" cy="255" r="19" fill="none" stroke="#c9a84c" strokeWidth="2" />
          {/* Tower crane */}
          <line x1="580" y1="280" x2="580" y2="50"  stroke="#c9a84c" strokeWidth="3.5" />
          <line x1="580" y1="62"  x2="780" y2="62"  stroke="#c9a84c" strokeWidth="2.5" />
          <line x1="780" y1="62"  x2="780" y2="175" stroke="#c9a84c" strokeWidth="1.5" strokeDasharray="6 8" />
          <line x1="580" y1="62"  x2="615" y2="280" stroke="#c9a84c" strokeWidth="1.5" opacity="0.4" />
          <rect x="558" y="272" width="44" height="10" rx="3" fill="#c9a84c" />
        </svg>
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 wrap container-x w-full flex flex-col items-center text-center pt-36 pb-28"
      >
        {/* Eyebrow */}
        {ready && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="tag-gold mb-8"
          >
            <Zap size={10} style={{ color: '#c9a84c' }} />
            India&apos;s Premier Infrastructure Equipment Solutions — Since 1983
          </motion.div>
        )}

        {/* Headline — cinematic line reveal */}
        <div className="mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          {ready &&
            HEADLINE_LINES.map((line, li) => (
              <div key={li} className="overflow-hidden leading-none">
                <motion.div
                  initial={{ y: '106%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1.1,
                    delay: li * 0.18,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className={`t-hero block ${li === 0 ? 'grad-white' : 'grad-gold'}`}
                  style={{ fontWeight: 300 }}
                >
                  {line}
                </motion.div>
              </div>
            ))}
        </div>

        {/* Sub-headline */}
        {ready && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="t-body text-white/50 max-w-xl leading-relaxed mb-10"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Road construction equipment rental, leasing, trading and refurbishment.
            Milling, paving, crushing, soil stabilisation — we power every kilometre of
            India&apos;s infrastructure ambition.
          </motion.p>
        )}

        {/* CTAs */}
        {ready && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a href="#services" data-cursor className="btn-gold gap-2">
              Explore Services
              <ArrowRight size={14} />
            </a>
            <a href="#about" data-cursor className="btn-outline">
              Our Story
            </a>
          </motion.div>
        )}

        {/* Stats ribbon */}
        {ready && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="w-full max-w-3xl glass rounded-2xl overflow-hidden border border-gold"
          >
            <div className="grid grid-cols-2 md:grid-cols-4">
              {[
                { v: '40+',   l: 'Years of Excellence' },
                { v: '500+',  l: 'Equipment Fleet'     },
                { v: '1000+', l: 'Projects Delivered'  },
                { v: '24×7',  l: 'Technical Support'   },
              ].map((s, i) => (
                <div
                  key={i}
                  className="px-6 py-5 text-center"
                  style={{
                    borderRight:  i < 3 ? '1px solid rgba(255,255,255,0.07)' : undefined,
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div
                    className="grad-gold font-light mb-1"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1.6rem,3vw,2.25rem)',
                      lineHeight: 1.1,
                    }}
                  >
                    {s.v}
                  </div>
                  <div
                    className="t-label text-white/40"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      {ready && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: '1px solid rgba(201,168,76,0.3)' }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{ background: 'rgba(201,168,76,0.6)' }}
            />
          </motion.div>
          <span
            className="t-label text-white/25"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Scroll
          </span>
        </motion.div>
      )}

      {/* Bottom fade vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #02040a)' }}
      />
    </section>
  )
}
