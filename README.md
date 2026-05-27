# VIESL — Vision Infra Equipment Solutions Limited

> **Premium agency-quality website for India's premier infrastructure equipment rental company.**
> Dark navy + gold design system · Framer Motion animations · Lenis smooth scroll · Fully responsive · Zero TypeScript errors · `npm run build` passes cleanly.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Quick Start](#quick-start)
5. [Environment Variables](#environment-variables)
6. [Contact Form Setup](#contact-form-setup)
7. [Vercel Deployment](#vercel-deployment)
8. [Other Deployment Options](#other-deployment-options)
9. [Performance Summary](#performance-summary)
10. [Customisation Guide](#customisation-guide)
11. [Browser Support](#browser-support)
12. [Troubleshooting](#troubleshooting)

---

## Project Overview

A world-class, cinematic website for VIESL built to agency standards. Every pixel is intentional.

### Sections
| # | Section | Key Feature |
|---|---------|-------------|
| 1 | **Loader** | SVG triangle build-up, cycling words, gold progress bar |
| 2 | **Navbar** | Transparent → glass on scroll, animated dropdown, cinematic fullscreen mobile menu |
| 3 | **Hero** | `useMotionTemplate` mouse glow, parallax layers, particle field, SVG infrastructure silhouette, line-by-line text reveal |
| 4 | **Logo Strip** | Infinite CSS marquee with fade masks |
| 5 | **About** | Split layout, SVG machinery illustration, floating metric card |
| 6 | **Services** | Interactive tab panel with `layoutId` transition |
| 7 | **Stats** | Scroll-triggered count-up counters |
| 8 | **Projects** | Filterable card grid with `LayoutGroup` animated layout transitions |
| 9 | **Timeline** | Alternating milestone layout, animated centre spine |
| 10 | **Why Choose Us** | Feature grid, highlight metrics, social proof bar |
| 11 | **Process** | 6-step numbered grid with ghost numbers |
| 12 | **Testimonials** | Auto-rotating glassmorphism carousel |
| 13 | **Team** | Leadership cards with hover glow |
| 14 | **FAQ** | AnimatePresence accordion |
| 15 | **Contact** | Floating-label form, simulated submit state |
| 16 | **Footer** | CTA banner, link columns, social icons |

---

## Tech Stack

```
Framework   Next.js 14.2.5      App Router, static pre-rendering
Language    TypeScript 5.5.3    Strict mode, zero errors
Styling     Tailwind CSS 3.4.7  Utility classes + CSS custom properties
Animation   Framer Motion 11    Variants, layout animations, scroll transforms
Scroll      Lenis 1.3.23        Buttery 1.4s smooth scroll
Icons       Lucide React 0.408  Consistent SVG icon set
Utilities   clsx + tailwind-merge  Safe class merging
```

---

## Folder Structure

```
viesl-website/
│
├── public/
│   ├── robots.txt              SEO crawler rules
│   └── sitemap.xml             Search engine sitemap
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          Root layout · metadata · font <link> tags · viewport
│   │   └── page.tsx            Page composition · all section imports
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      Sticky navbar · glass blur · dropdown · mobile menu
│   │   │   └── Footer.tsx      CTA banner · link columns · social icons
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx        Parallax · mouse glow · particles · text reveal
│   │   │   ├── LogoStrip.tsx   Infinite marquee client logos
│   │   │   ├── About.tsx       Split layout · SVG illustration · floating card
│   │   │   ├── Services.tsx    Tab panel · animated detail · layoutId bar
│   │   │   ├── Stats.tsx       Scroll-triggered count-up counters
│   │   │   ├── Projects.tsx    Filter grid · layout group transitions
│   │   │   ├── Timeline.tsx    Alternating milestones · animated spine
│   │   │   ├── WhyChooseUs.tsx Feature grid · social proof
│   │   │   ├── Process.tsx     6-step workflow · ghost numbers
│   │   │   ├── Testimonials.tsx Auto-carousel · glassmorphism card
│   │   │   ├── Team.tsx        Leadership cards
│   │   │   ├── FAQ.tsx         Animated accordion
│   │   │   └── Contact.tsx     Floating-label form · success state
│   │   │
│   │   └── ui/
│   │       ├── Loader.tsx      Cinematic preloader · progress bar
│   │       ├── Cursor.tsx      Custom ring+dot cursor (desktop only)
│   │       ├── ScrollBar.tsx   Gold gradient scroll progress indicator
│   │       └── SmoothScroll.tsx  Lenis provider
│   │
│   ├── hooks/
│   │   └── useReveal.ts        Scroll-reveal hook wrapping framer useInView
│   │
│   ├── lib/
│   │   └── animations.ts       Framer Motion variant library · easing constants
│   │
│   └── styles/
│       └── globals.css         Design tokens · utility classes · keyframes · form styles
│
├── .env.example                Environment variable template
├── .gitignore                  Git ignore rules
├── next.config.js              Next.js config · security headers · image formats
├── package.json                Dependencies · scripts
├── postcss.config.js           PostCSS for Tailwind
├── tailwind.config.js          Tailwind theme extension
├── tsconfig.json               TypeScript compiler options
└── README.md                   This file
```

---

## Quick Start

### Requirements
- **Node.js** ≥ 18.17.0 (LTS recommended)
- **npm** ≥ 9.0.0

Check versions:
```bash
node -v   # should print v18.x.x or higher
npm -v    # should print 9.x.x or higher
```

### 1. Install dependencies
```bash
cd viesl-website
npm install
```

### 2. Start development server
```bash
npm run dev
```
→ Open **http://localhost:3000**

Hot reload is active. Edit any file in `src/` and the browser updates instantly.

### 3. Production build
```bash
npm run build
npm start
```

### 4. Type check (CI / pre-commit)
```bash
npm run type-check
```

### All scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Optimised production build |
| `npm start` | Serve production build locally |
| `npm run lint` | ESLint check |
| `npm run type-check` | TypeScript compile check (no emit) |

---

## Environment Variables

Copy `.env.example` → `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

### Available variables

```env
# Contact form backend (Resend — https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

> `.env.local` is git-ignored. Never commit real keys.

---

## Contact Form Setup

The form in `Contact.tsx` currently simulates a 1.2s delay then shows a success state.
To connect it to a real email backend, follow one of these methods:

### Option A — Resend (Recommended, free tier available)

**1. Install:**
```bash
npm install resend
```

**2. Create `src/app/api/contact/route.ts`:**
```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, company, phone, email, service, message } = await req.json()

  await resend.emails.send({
    from:    'VIESL Website <no-reply@visioninfraindia.com>',
    to:      'info@visioninfraindia.com',
    subject: `New Enquiry — ${service || 'General'} — ${name}`,
    html: `
      <h2>New Website Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
```

**3. Update `handleSubmit` in `Contact.tsx`:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSending(true)
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) setSubmitted(true)
  } catch (err) {
    console.error(err)
  } finally {
    setSending(false)
  }
}
```

**4. Add to `.env.local`:**
```env
RESEND_API_KEY=re_your_key_here
```

### Option B — Formspree (No backend code)
1. Create a form at [formspree.io](https://formspree.io)
2. Replace `handleSubmit` with a `fetch` POST to your Formspree endpoint

### Option C — WhatsApp / Telegram Bot
Use [CallMeBot](https://www.callmebot.com) or Telegram Bot API to push form data as messages.

---

## Vercel Deployment

Vercel is the recommended deployment platform for Next.js.

### Method 1: Git Integration (Zero-config, recommended)

**Step 1** — Push to GitHub:
```bash
git init
git add .
git commit -m "feat: initial production build"
git remote add origin https://github.com/YOUR_USERNAME/viesl-website.git
git push -u origin main
```

**Step 2** — Deploy on Vercel:
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your repository
4. Framework is **auto-detected as Next.js**
5. Root directory: leave as `./` (or `viesl-website/` if in a monorepo)
6. Click **Deploy**

**Step 3** — Add environment variables (if using contact form):
- Vercel Dashboard → Project → Settings → Environment Variables
- Add `RESEND_API_KEY` → Value → Production

**Step 4** — Custom domain:
- Vercel Dashboard → Project → Settings → Domains
- Add `visioninfraindia.com` and `www.visioninfraindia.com`
- Update DNS `A` record → `76.76.21.21`
- Update DNS `CNAME www` → `cname.vercel-dns.com`

### Method 2: Vercel CLI

```bash
# Install CLI
npm install -g vercel

# Login
vercel login

# Deploy (from project root)
vercel --prod
```

### Method 3: GitHub Actions CI/CD

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## Other Deployment Options

### Netlify

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --dir=.next --prod
```

Add `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Docker (Self-hosted / AWS / GCP)

Add `output: 'standalone'` to `next.config.js`:
```js
const nextConfig = {
  output: 'standalone',
  // ...rest of config
}
```

**`Dockerfile`:**
```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

```bash
docker build -t viesl-website .
docker run -p 3000:3000 viesl-website
```

### Static Export (if no API routes needed)

Add to `next.config.js`:
```js
output: 'export'
```
Then `npm run build` → upload `out/` folder to any CDN (Cloudflare Pages, S3, Firebase Hosting).

---

## Performance Summary

### Build Output
```
Route (app)           Size      First Load JS
/ (home page)         65.7 kB   153 kB total
Shared chunks                   87 kB
```

### Optimisation techniques applied

| Technique | Implementation |
|-----------|---------------|
| **Static pre-rendering** | All pages generated at build time (`○ Static`) |
| **Font loading** | `<link rel="preconnect">` + `display=swap` — no layout shift |
| **No `.get()` in render** | `useMotionTemplate` for mouse glow — SSR safe, no hydration mismatch |
| **`'use client'` boundary** | Only components that need browser APIs are client components |
| **`useInView` once:true** | Animations trigger once and stay — no scroll re-firing overhead |
| **Particles from stable array** | `Array.from({length:20})` outside component — no hydration key mismatch |
| **Cursor disabled on mobile** | `pointer: coarse` media query check — saves ~2kb JS on touch devices |
| **Lenis RAF loop** | `cancelAnimationFrame` cleanup prevents memory leaks |
| **Image formats** | `avif` + `webp` configured for future image assets |
| **Security headers** | X-Frame-Options, XSS-Protection, Content-Type-Options set via `next.config.js` |
| **No unused dependencies** | `gsap` removed (not used), `clsx`/`tailwind-merge` tree-shaken |

### Lighthouse estimates (on real hosting)
| Metric | Estimated Score |
|--------|----------------|
| Performance | 90–96 |
| Accessibility | 95+ |
| Best Practices | 100 |
| SEO | 100 |

> Run `npx lighthouse https://your-domain.com --view` after deploying for actual scores.

---

## Customisation Guide

### Design tokens
All colour and spacing tokens live in `src/styles/globals.css` `:root` block:

```css
:root {
  --gold:        #c9a84c;   /* Primary brand gold */
  --gold-light:  #e8c97a;   /* Lighter gold, hover states */
  --gold-dark:   #9a7c32;   /* Darker gold, gradient end */
  --navy-950:    #02040a;   /* Page background */
  --navy-900:    #040813;   /* Section backgrounds */
  --navy-800:    #070d1f;   /* Card backgrounds */
}
```

### Typography
Three fonts, all loaded via Google Fonts in `layout.tsx`:
- **Display**: Cormorant Garamond — headings, numbers
- **Body**: DM Sans — body text, UI
- **Mono**: JetBrains Mono — labels, tags, metadata

To change fonts, update the `<link>` href in `layout.tsx` and the `--font-*` CSS variables.

### Content
All content is hard-coded in component files — no CMS required.

| Content type | File to edit |
|---|---|
| Hero headline | `Hero.tsx` → `HEADLINE_LINES` |
| Services list | `Services.tsx` → `SERVICES` array |
| Stats numbers | `Stats.tsx` → `STATS` array |
| Projects | `Projects.tsx` → `PROJECTS` array |
| Timeline milestones | `Timeline.tsx` → `MILESTONES` array |
| Team members | `Team.tsx` → `TEAM` array |
| Testimonials | `Testimonials.tsx` → `TESTIMONIALS` array |
| FAQ | `FAQ.tsx` → `FAQS` array |
| Contact info | `Contact.tsx` → contact details JSX |
| Footer links | `Footer.tsx` → `FOOTER_LINKS` object |

### Adding real images
Replace SVG illustrations in `About.tsx` and `Hero.tsx` with `<Image>` from `next/image`:
```tsx
import Image from 'next/image'
<Image src="/images/equipment.jpg" alt="Equipment" fill className="object-cover" />
```
Place images in `public/images/`.

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 100+ | ✅ Full support |
| Firefox | 100+ | ✅ Full support |
| Safari | 15.4+ | ✅ Full support |
| Edge | 100+ | ✅ Full support |
| iOS Safari | 15.4+ | ✅ Full (cursor disabled) |
| Android Chrome | 100+ | ✅ Full (cursor disabled) |

> Backdrop-filter (glassmorphism) requires Safari 15.4+. Falls back gracefully to semi-transparent background on older browsers.

---

## Troubleshooting

### `npm install` fails
```bash
# Clear cache and retry
rm -rf node_modules package-lock.json
npm install
```

### Fonts not loading locally
The Google Fonts `<link>` requires internet access. When offline, the site falls back to system serif/sans-serif. This is expected behaviour.

### Build warning about font minification
```
⚠ Failed to minify the stylesheet for https://fonts.googleapis.com/...
```
This warning **only appears in sandboxed/offline build environments**. It does **not** appear on Vercel, Netlify, or any internet-connected build server. Safe to ignore.

### Animations not playing
Ensure the component has `'use client'` directive at the top — Framer Motion requires a browser environment.

### Hydration mismatch errors
All browser-only code (`window`, `document`) is inside `useEffect` hooks or guarded with `useState(false)` + `setMounted(true)` patterns. If you add new browser-only code, follow the same pattern.

### Custom cursor flickers on page load
The cursor starts at `(-100, -100)` off-screen until the first `mousemove` event — this is intentional and prevents a flash at `(0,0)`.

---

## License

Proprietary — Vision Infra Equipment Solutions Limited.
All rights reserved. Not for redistribution.

---

*Built with precision. Designed for impact. Engineered for India's infrastructure future.*
