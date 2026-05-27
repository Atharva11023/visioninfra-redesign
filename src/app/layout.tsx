import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import SmoothScroll from '@/components/ui/SmoothScroll'

export const metadata: Metadata = {
  title: {
    default:  'VIESL — Vision Infra Equipment Solutions Limited',
    template: '%s | VIESL',
  },
  description:
    "India's premier infrastructure equipment rental, trading & solutions company. " +
    "Road construction, milling, paving, soil stabilisation, crushing — " +
    "powering every kilometre since 1983.",
  keywords: [
    'infrastructure equipment rental India',
    'road construction equipment Pune',
    'equipment leasing Maharashtra',
    'milling machines rental',
    'paving equipment hire',
    'soil stabilisation India',
    'crushing plant rental',
    'VIESL',
    'Vision Infra Equipment Solutions',
    'construction machinery India',
  ],
  authors: [{ name: 'Vision Infra Equipment Solutions Limited' }],
  metadataBase: new URL('https://www.visioninfraindia.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.visioninfraindia.com',
    siteName: 'VIESL',
    title: 'VIESL — Vision Infra Equipment Solutions Limited',
    description: "India's premier infrastructure equipment rental & solutions since 1983.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'VIESL — We Equip Your Vision' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIESL — Vision Infra Equipment Solutions Limited',
    description: "India's premier infrastructure equipment rental & solutions since 1983.",
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#c9a84c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
