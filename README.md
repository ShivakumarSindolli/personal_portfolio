# Shivakumar A Sindolli — Portfolio 

Monochrome, cinematic, MotionSites "cosmic hero" style portfolio.
Vite + React 18 + TypeScript + Tailwind CSS + GSAP + Framer Motion + HLS.js.

## Stack

- Vite + React 18 + TypeScript
- React Router (page-transition ready, single route today)
- Tailwind CSS with HSL design tokens (`--bg`, `--surface`, `--text`, `--muted`, `--stroke`, `--accent`)
- GSAP + ScrollTrigger — hero entrance timeline, Explorations parallax
- Framer Motion — scroll reveals, route transitions, role-cycling text
- hls.js — streams the hero/footer background video

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Structure

```
src/
  components/       LoadingScreen, Navbar, Hero, HlsVideo, SelectedWorks,
                     Journal, Explorations, Stats, Contact, SectionHeader,
                     GradientRingButton
  pages/            Index.tsx (assembles all sections behind the loading gate), NotFound.tsx
  data/             works.ts, journal.ts, explorations.ts — edit these to update copy
  lib/               cn() className helper
  index.css         Design tokens, fonts, marquee/gradient utilities
```

## Sections implemented

1. **Loading screen** — rAF-driven 000→100 counter, rotating word cycle, progress bar
2. **Navbar** — floating pill nav, active-link state, gradient "Say hi" hover
3. **Hero** — HLS background video, GSAP name-reveal + blur-in stagger, role-cycling subhead, magnetic-style CTAs
4. **Selected Work** — bento grid of your 4 real projects (AQI ML, Book Exchange, Ride Booking, AI Doctor Pro) with gradient placeholder covers and a hover reveal overlay
5. **Journal** — dev-notes cards, one per project
6. **Explorations** — GSAP ScrollTrigger parallax tile gallery
7. **Stats** — count-up-on-scroll numbers (kept honest for a student profile — no fake "years of experience")
8. **Contact / Footer** — flipped HLS video, infinite marquee, social links

## Content to personalize

- `src/data/works.ts` — swap the gradient placeholder covers for real screenshots/GIFs when you have them, add GitHub/demo links
- `src/components/Contact.tsx` — real email + social URLs
- `src/components/HlsVideo.tsx` — swap `HLS_SRC` for your own hosted video once you have one (currently reuses the motionsites.ai demo stream for the hero/footer video)
- `src/data/journal.ts` / `src/data/explorations.ts` — placeholder copy, edit freely

## Build

```bash
npm run build
```

Outputs to `dist/`. The main bundle is ~275 kB gzipped (gsap + framer-motion + hls.js); code-split further with `build.rollupOptions.output.manualChunks` if you want to shave it down.
