# Dr. Sunita – Dr Sunita Clinic, Lal Kuan (Next.js)

Built on the drjharnachildspecialist template. See `IMAGE-PROMPTS.md` for the content checklist and image sources.

Next.js (App Router) + React + TypeScript rebuild of drjharnachildspecialist.com.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## Content

All text lives in two files:

- `src/data/site.ts`: doctor details, clinics and timings, services, home-page copy, stats, gallery list, testimonials
- `src/data/blog.ts`: blog posts, categories (archives are derived from post dates)

## Photos and videos

All image paths are set in `src/data/site.ts` and `src/data/blog.ts`; any missing file shows a styled placeholder. See `IMAGE-PROMPTS.md` for which photos are real and which are AI-generated.

## Contact form

The appointment form is hidden until a phone, WhatsApp number or email is set in `src/data/site.ts`. It then opens WhatsApp (or the email app) with the patient's request filled in.

## Legacy URLs

`next.config.ts` permanently redirects the old URLs (`/index.php`, `/*.html`, `/blog/archive.php?year=&month=`) to the new routes.
