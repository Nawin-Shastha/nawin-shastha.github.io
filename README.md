# Nawin Shastha Portfolio — Next.js 15 Liquid Glass

## Stack
- **Framework:** Next.js 15 (App Router, Static Export)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 3 + custom glass utilities
- **Fonts:** Clash Display (headings) + DM Sans (body) + JetBrains Mono
- **Animations:** Pure CSS keyframes + canvas thunder effect
- **Deploy:** Cloudflare Pages / Vercel (static export)

## Setup

```bash
npm install
npm run dev      # localhost:3000
npm run build    # generates /out folder for static deploy
```

## Add Your Avatar
Place your avatar image at: `public/avatar.png`

## Deploy to Cloudflare Pages
1. `npm run build` — creates `out/` folder
2. Upload `out/` to Cloudflare Pages
3. Or connect your GitHub repo and set build command to `npm run build`, output to `out`

## Folder Structure
```
app/
  layout.tsx       — root layout + metadata + fonts
  page.tsx         — home page (Hero + Services + Contact)
  globals.css      — Liquid Glass design system
components/
  shared/
    Navbar.tsx     — sticky nav + thunder Hire Me button
    Footer.tsx     — minimal footer
    CursorGlow.tsx — parallax cursor glow effect
  sections/
    Hero.tsx       — hero with avatar pulse rings + thunder canvas
    Services.tsx   — bento grid services + Salesforce hub + resume CTA
    Contact.tsx    — glass contact form + mailto
lib/
  data.ts          — all content data (services, skills, stats, nav)
types/
  index.ts         — TypeScript interfaces
public/
  avatar.png       — your avatar image (add manually)
tailwind.config.ts — full design token system
```

## Customization
Edit `lib/data.ts` to update services, skills, nav links, and stats.
All colors are CSS variables in `app/globals.css` under `:root`.

## Contact
nawinshasthasr@gmail.com | Chennai, India
