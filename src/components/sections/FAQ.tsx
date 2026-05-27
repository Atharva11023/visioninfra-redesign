'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'What types of equipment do you offer for rental?',
    a: 'VIESL offers a comprehensive 500+ machine fleet including excavators, motor graders, soil compactors, vibratory rollers, cold milling machines, asphalt pavers, soil stabilisers, cold recyclers, mobile crushers, screens, loaders and more — covering virtually every road construction requirement.',
  },
  {
    q: 'What are your minimum rental periods?',
    a: 'We offer flexible rental terms starting from daily basis for specialised machines to monthly and project-based contracts. For most equipment categories, 30-day minimum commitments are optimal for operational efficiency, though we accommodate shorter terms based on fleet availability.',
  },
  {
    q: 'Do you provide operators with the equipment?',
    a: 'Yes. We can provide certified, experienced operators trained on specific machinery with knowledge of safety protocols. If you have your own operators, we provide thorough equipment training and technical hand-holding at project commencement.',
  },
  {
    q: 'What happens if equipment breaks down on site?',
    a: 'We provide 24×7 technical support with rapid response times. Our service engineers are dispatched to your site within hours. We maintain standby equipment for critical project phases to ensure zero unplanned downtime. Maintenance and repair during the rental period is covered by VIESL.',
  },
  {
    q: 'Do you buy or trade used construction equipment?',
    a: 'Yes. VIESL is an active buyer and trader of pre-owned construction equipment, both domestically and internationally. We evaluate, refurbish and resell, giving contractors and companies an efficient exit route for their ageing fleet at fair market values.',
  },
  {
    q: 'Which geographies do you currently serve?',
    a: 'We operate pan-India with equipment deployed across Maharashtra, Delhi-NCR, Uttar Pradesh, Rajasthan, Telangana, Karnataka, Punjab, Madhya Pradesh and more. Our Pune headquarters coordinates rapid mobilisation to any project location across India.',
  },
  {
    q: 'Can you handle complete project execution as a works contract?',
    a: 'Yes. We offer end-to-end works contracts taking full responsibility for equipment, manpower and logistics for a defined project scope. This includes mobilisation, operation, maintenance and demobilisation — a single accountable partner for your project.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.08 })

  return (
    <section
      id="faq"
      ref={ref}
      className="relative section-py overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #02040a 0%, #040813 100%)' }}
    >
      <div className="wrap container-x max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-5">Common Questions</div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="t-display font-light grad-white"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Frequently Asked
            <br />
            <span className="grad-gold">Questions</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.055 }}
                className="rounded-xl border overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.07)',
                  background: isOpen ? 'rgba(201,168,76,0.04)' : 'rgba(255,255,255,0.02)',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-cursor
                  className="w-full flex items-start justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-sm font-medium leading-snug transition-colors"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      color: isOpen ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.65)',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-250"
                    style={{
                      background: isOpen ? '#c9a84c' : 'rgba(255,255,255,0.06)',
                      color: isOpen ? '#02040a' : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-5 pb-5 text-sm leading-relaxed"
                        style={{ fontFamily: 'DM Sans, sans-serif', color: 'rgba(255,255,255,0.45)' }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
