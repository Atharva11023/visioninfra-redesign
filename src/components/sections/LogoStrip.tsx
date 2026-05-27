'use client'

const CLIENTS = [
  'NHAI',
  'L&T Construction',
  'Wirtgen India',
  'Balajee Infratech',
  'Markolines',
  'IRB Infrastructure',
  'Gawar Construction',
  'GR Infraprojects',
  'Dilip Buildcon',
  'PNC Infratech',
  'NCC Limited',
  'Afcons Infrastructure',
]

export default function LogoStrip() {
  // Double the list so the seamless loop has enough content
  const doubled = [...CLIENTS, ...CLIENTS]

  return (
    <section
      className="relative py-7 border-y overflow-hidden"
      style={{
        borderColor: 'rgba(201,168,76,0.1)',
        background: 'rgba(4,8,19,0.85)',
      }}
    >
      {/* Fade masks */}
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #02040a, transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #02040a, transparent)' }}
      />

      <div className="flex items-center gap-6">
        {/* Label */}
        <span
          className="shrink-0 pl-8 hidden sm:block t-label text-white/25"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Trusted by
        </span>

        {/* Scrolling strip */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-14 animate-marquee"
            style={{ width: 'max-content' }}
          >
            {doubled.map((client, i) => (
              <span
                key={i}
                className="shrink-0 t-label text-white/30 hover:text-gold-500 transition-colors duration-300 cursor-default"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, letterSpacing: '0.14em' }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
