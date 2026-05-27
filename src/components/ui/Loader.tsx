'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CYCLING_WORDS = ['BUILDING', 'MOVING', 'PAVING', 'EQUIPPING', 'DELIVERING']

export default function Loader() {
  const [progress, setProgress]  = useState(0)
  const [wordIdx,  setWordIdx]   = useState(0)
  const [visible,  setVisible]   = useState(true)
  const [mounted,  setMounted]   = useState(false)

  useEffect(() => {
    setMounted(true)
    document.body.style.overflow = 'hidden'

    const wordTimer = setInterval(
      () => setWordIdx(i => (i + 1) % CYCLING_WORDS.length),
      480,
    )

    let p = 0
    const progTimer = setInterval(() => {
      p += Math.random() * 9 + 3
      if (p >= 100) {
        p = 100
        clearInterval(progTimer)
        clearInterval(wordTimer)
        setTimeout(() => {
          setVisible(false)
          document.body.style.overflow = ''
        }, 650)
      }
      setProgress(Math.min(Math.floor(p), 100))
    }, 70)

    return () => {
      clearInterval(progTimer)
      clearInterval(wordTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="viesl-loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ backgroundColor: '#02040a' }}
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),' +
                'linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
              backgroundSize: '90px 90px',
            }}
          />

          {/* Radial glow */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: 640,
              height: 640,
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              background: 'radial-gradient(circle, rgba(201,168,76,0.14) 0%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo */}
            <div className="flex flex-col items-center gap-3">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <motion.polygon
                  points="4,56 30,4 56,56"
                  fill="none"
                  stroke="#c9a84c"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.3, ease: 'easeInOut', delay: 0.15 }}
                />
                <motion.rect
                  x="22" y="40" width="16" height="16"
                  fill="#c9a84c"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 1.25, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{ transformOrigin: 'bottom' }}
                />
                <motion.line
                  x1="4" y1="56" x2="56" y2="56"
                  stroke="#c9a84c"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 1.45 }}
                />
              </svg>

              <div
                className="tracking-[0.55em] text-white text-5xl font-light"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                VIESL
              </div>

              <div
                className="tracking-[0.35em] text-[10px] uppercase"
                style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(201,168,76,0.65)' }}
              >
                Vision Infra Equipment Solutions
              </div>
            </div>

            {/* Cycling word */}
            <div className="h-5 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[10px] tracking-[0.45em] uppercase"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    color: 'rgba(201,168,76,0.55)',
                    position: 'absolute',
                  }}
                >
                  {CYCLING_WORDS[wordIdx]} INDIA
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="flex flex-col gap-2.5 w-72">
              <div
                className="h-px relative overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{
                    background: 'linear-gradient(90deg, #9a7c32, #c9a84c, #e8c97a)',
                    transformOrigin: 'left',
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.12 }}
                />
              </div>
              <div className="flex justify-between items-center">
                <span
                  className="text-[9px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.2)' }}
                >
                  Loading
                </span>
                <span
                  className="text-[9px] tabular-nums"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(201,168,76,0.55)' }}
                >
                  {progress}%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Corner text */}
          <div
            className="absolute bottom-8 left-8 text-[9px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.12)' }}
          >
            Est. 1983 · Pune, India
          </div>
          <div
            className="absolute bottom-8 right-8 text-[9px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(255,255,255,0.12)' }}
          >
            We Equip Your Vision
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
