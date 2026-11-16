# Dr. Vivek Kaushik – Shree Shyam Clinic (Next.js + TypeScript)

See `IMAGE-PROMPTS.md` for the content checklist and image sources.


Built with Next.js 15 (App Router), React 19 and TypeScript. Every page is pre-rendered to static HTML, so search engines see the full content.

```bash
npm install
npm run dev        # local dev server at http://localhost:3000
npm run build      # build the static site into out/
npm run start      # serve out/ locally to check the build
```

## Make it yours

| What | Where |
| --- | --- |
| Name, title, phones, WhatsApp, email, address, hours, map, socials | `src/config/site.ts` |
| Services and conditions (cards, menus, detail pages, form dropdown) | `src/config/site.ts` → `services`, `conditions` |
| Achievements tabs, testimonials, gallery, case studies, video, emergency numbers | `src/config/content.ts` |
| Page text and page titles/descriptions (`metadata`) | `src/app/**/page.tsx` |
| Images and logo | `public/img/` (keep the file names or update the paths) |
| Colours | `:root` variables at the top of `src/styles/global.css` |
| Fonts | `src/app/layout.tsx` (loaded with `next/font`) |
| Contact form endpoint (e.g. Formspree) | `FORM_ENDPOINT` in `src/components/ContactForm.tsx` |

## Structure

```
src/
  app/          routes: page.tsx (home), about/, services/, conditions/,
                treatment/[id]/, case-studies/, gallery/, emergency/, contact/,
                layout.tsx (header/footer/fonts/default metadata), not-found.tsx
  components/   Header, Footer, CardGrid, Tabs, TestimonialSlider, Gallery, ContactForm, …
  config/       site.ts (site-wide settings), content.ts (page data)
  hooks/        useReveal
  styles/       global.css
public/img/     placeholder images
```

Interactive components (`Header`, `Tabs`, `TestimonialSlider`, `Gallery`, `VideoEmbed`, `ContactForm`, `RevealObserver`) are client components (`"use client"`). Everything else renders at build time.

## Adding a service or condition

Add an entry to `services` or `conditions` in `src/config/site.ts`. The card, menu link, footer link, form option and `/treatment/<id>/` page are all generated from it.

## Deploying

Run `npm run build` and upload the contents of `out/` to any web host: cPanel, Netlify, Vercel, GitHub Pages, S3, etc. Each page is its own `index.html` (e.g. `out/about/index.html`), so no server rewrites are needed.
