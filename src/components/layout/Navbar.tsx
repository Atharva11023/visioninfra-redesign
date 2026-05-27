'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Company',  href: '#about',    sub: ['About VIESL', 'Our Journey', 'Leadership'] },
  { label: 'Services', href: '#services', sub: ['Equipment Rental', 'Leasing', 'Trading', 'Refurbishment'] },
  { label: 'Projects', href: '#projects', sub: [] },
  { label: 'Process',  href: '#process',  sub: [] },
  { label: 'Contact',  href: '#contact',  sub: [] },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [open,      setOpen]      = useState(false)
  const [dropdown,  setDropdown]  = useState<string | null>(null)
  const dropTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 60)
  })

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 1024) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const openDrop  = (label: string) => {
    if (dropTimer.current) clearTimeout(dropTimer.current)
    setDropdown(label)
  }
  const closeDrop = () => {
    dropTimer.current = setTimeout(() => setDropdown(null), 160)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[900] transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(4,8,19,0.94)' : 'transparent',
          backdropFilter:   scrolled ? 'blur(32px) saturate(2)' : 'none',
          borderBottom:     scrolled ? '1px solid rgba(201,168,76,0.1)' : '1px solid transparent',
        }}
      >
        <div
          className="wrap container-x flex items-center justify-between"
          style={{
            paddingTop:    scrolled ? '0.875rem' : '1.5rem',
            paddingBottom: scrolled ? '0.875rem' : '1.5rem',
            transition: 'padding 0.4s ease',
          }}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" data-cursor>
            <svg width="36" height="36" viewBox="0 0 60 60" fill="none" className="transition-transform duration-300 group-hover:scale-105">
              <polygon points="4,56 30,4 56,56" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinejoin="round"/>
              <rect x="22" y="40" width="16" height="16" fill="#c9a84c"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span
                className="text-white tracking-[0.3em] text-xl transition-colors group-hover:text-gold"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
              >
                VIESL
              </span>
              <span
                className="text-[9px] tracking-[0.22em] uppercase mt-0.5"
                style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(201,168,76,0.65)' }}
              >
                Vision Infra
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.sub.length > 0 && openDrop(link.label)}
                onMouseLeave={closeDrop}
              >
                <a
                  href={link.href}
                  data-cursor
                  className="group relative flex items-center gap-1 px-4 py-2.5 text-[0.68rem] tracking-[0.18em] uppercase text-white/55 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {link.label}
                  {link.sub.length > 0 && (
                    <ChevronDown
                      size={10}
                      className={`transition-transform duration-200 ${dropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  )}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-gold-500/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {dropdown === link.label && link.sub.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0,  scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => openDrop(link.label)}
                      onMouseLeave={closeDrop}
                      className="absolute top-full left-0 mt-1 w-52 rounded-xl overflow-hidden border border-gold glass-dark shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                    >
                      {link.sub.map((sub) => (
                        <a
                          key={sub}
                          href={link.href}
                          className="block px-4 py-3 text-xs text-white/55 hover:text-white hover:bg-white/[0.04] border-b border-white/[0.05] last:border-0 transition-colors"
                          style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em' }}
                        >
                          {sub}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+912026440999"
              data-cursor
              className="flex items-center gap-2 text-[0.68rem] text-white/45 hover:text-gold transition-colors"
              style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.05em' }}
            >
              <Phone size={13} className="text-gold-600" />
              +91 20 2644 0999
            </a>
            <a href="#contact" data-cursor className="btn-gold">
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(v => !v)}
            data-cursor
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[850] flex flex-col justify-between p-8 pt-28 lg:hidden"
            style={{ backgroundColor: 'rgba(2,4,10,0.98)', backdropFilter: 'blur(40px)' }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl text-white hover:text-gold-400 transition-colors font-light"
                  style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.03em' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col gap-4 pt-8"
              style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}
            >
              <a href="tel:+912026440999" className="text-sm text-white/40" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                +91 20 2644 0999
              </a>
              <a href="mailto:info@visioninfraindia.com" className="text-sm text-white/40" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                info@visioninfraindia.com
              </a>
              <a href="#contact" className="btn-gold self-start mt-2" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
