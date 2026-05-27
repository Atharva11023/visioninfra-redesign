'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Youtube } from 'lucide-react'

const FOOTER_LINKS = {
  Company:   [
    { label: 'About VIESL', href: '#about'     },
    { label: 'Leadership',  href: '#team'      },
    { label: 'Our Journey', href: '#timeline'  },
    { label: 'Why VIESL',   href: '#why'       },
  ],
  Services:  [
    { label: 'Equipment Rental',  href: '#services' },
    { label: 'Equipment Leasing', href: '#services' },
    { label: 'Equipment Trading', href: '#services' },
    { label: 'Refurbishment',     href: '#services' },
    { label: 'Works Contracts',   href: '#services' },
  ],
  Solutions: [
    { label: 'Milling & Paving',      href: '#services' },
    { label: 'Soil Stabilisation',    href: '#services' },
    { label: 'Crushing & Screening',  href: '#services' },
    { label: 'Project Showcase',      href: '#projects' },
  ],
  Connect:   [
    { label: 'Contact Us',   href: '#contact' },
    { label: 'Get a Quote',  href: '#contact' },
    { label: 'FAQ',          href: '#faq'     },
  ],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#02040a', borderTop: '1px solid rgba(201,168,76,0.1)' }}>

      {/* ── CTA Banner ── */}
      <div style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="wrap container-x py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="grad-white font-light leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem,4vw,3rem)' }}
            >
              Ready to Power<br />
              <span className="grad-gold">Your Project?</span>
            </h3>
            <p className="text-white/40 text-sm mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Get a customised equipment proposal within 24 hours.
            </p>
          </div>
          <a href="#contact" data-cursor className="btn-gold shrink-0 gap-2">
            Request a Quote
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="wrap container-x py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

          {/* Brand column */}
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-5 group" data-cursor>
              <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
                <polygon points="4,56 30,4 56,56" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinejoin="round"/>
                <rect x="22" y="40" width="16" height="16" fill="#c9a84c"/>
              </svg>
              <span
                className="text-white text-xl tracking-[0.3em] font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                VIESL
              </span>
            </a>
            <p
              className="text-white/35 text-xs leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Vision Infra Equipment Solutions Limited — India&apos;s trusted infrastructure
              equipment rental, trading and solutions company since 1983.
            </p>

            {/* Contact mini */}
            <div className="flex flex-col gap-3">
              {[
                { icon: Phone, label: '+91 20 2644 0999',              href: 'tel:+912026440999' },
                { icon: Mail,  label: 'info@visioninfraindia.com',     href: 'mailto:info@visioninfraindia.com' },
                { icon: MapPin,label: 'Pune 411042, Maharashtra',      href: undefined },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={11} className="text-gold-600 shrink-0" />
                  {href ? (
                    <a
                      href={href}
                      className="text-xs text-white/40 hover:text-gold-400 transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-xs text-white/40" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter,  href: '#' },
                { icon: Youtube,  href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  data-cursor
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 hover:border-gold/40 text-white/35 hover:text-gold transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white/60 text-[10px] tracking-[0.25em] uppercase mb-5 font-medium"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-white/35 hover:text-white/70 transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.03em' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="wrap container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-white/25 text-[11px]"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            © {new Date().getFullYear()} Vision Infra Equipment Solutions Limited. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(link => (
              <a
                key={link}
                href="#"
                className="text-[11px] text-white/25 hover:text-white/50 transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
