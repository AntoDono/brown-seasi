# Brown SEASI — Website

Marketing and information site for the **Southeast Asian Studies Initiative (SEASI)** at [Brown University](https://www.brown.edu/) — a student- and community-led effort to grow Southeast Asian studies through advocacy, programming, faculty support, and academic proposals.

## What’s on the site

- **Home** — Hero, about SEASI, publications (annual report), events, image breakers, and marquees.
- **Symposium** (`/symposium`) — 6th Annual Symposium (2026): schedule, venue, and RSVP/contact links.

Design direction: editorial typography (Cormorant Garamond + DM Sans), crimson accents aligned with Brown, and motion used for hero load, scroll reveals, parallax on large images, and animated stats on the about section.

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | [Nuxt 4](https://nuxt.com/) (Vue 3) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) (`tailwind.config.ts` for theme tokens) |
| Animation | [GSAP](https://gsap.com/) + ScrollTrigger (`plugins/gsap.client.ts`) |
| Utilities | [VueUse](https://vueuse.org/) (`@vueuse/nuxt`) |

## Project layout

```
brown-seasi/
├── assets/css/main.css       # Global base styles
├── components/               # Page sections and UI
│   ├── SectionHero.vue
│   ├── SectionAbout.vue
│   ├── SectionAnnualReport.vue
│   ├── SectionEvents.vue
│   ├── SectionImageBreaker.vue
│   ├── TheNav.vue
│   ├── TheFooter.vue
│   ├── TickerBar.vue
│   └── SymposiumHero.vue
├── composables/              # useScrollReveal, useImageParallax
├── pages/
│   ├── index.vue             # Home
│   └── symposium.vue         # Symposium
├── plugins/gsap.client.ts    # Registers GSAP ScrollTrigger (client-only)
├── public/images/            # Static images (logo, photos, backgrounds)
├── nuxt.config.ts
└── tailwind.config.ts
```

## Setup

Install dependencies (this repo uses [Bun](https://bun.sh/); npm/pnpm/yarn work too):

```bash
bun install
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Dev server (default: http://localhost:3000) |
| `bun run build` | Production build |
| `bun run preview` | Preview production build locally |
| `bun run generate` | Static generation (`nuxt generate`) |

## Environment

No API keys are required for the current static content. Update `nuxt.config.ts` `app.head` for site-wide title, description, and Open Graph tags.

## License / content

Content reflects SEASI’s public messaging. Replace or extend copy and assets under `public/images/` as needed for your deployment.
