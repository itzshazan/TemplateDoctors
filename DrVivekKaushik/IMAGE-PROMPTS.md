# Images & content checklist: Dr. Vivek Kaushik

Orthopaedic doctor · Shree Shyam Clinic, near Ahir Haveli, Jain Colony, Ballabhgarh, Faridabad 121004 · +91 98710 65506

Built on the **drsumeetsethi** template from `itzshazan/Full_template`. Text lives in `src/config/site.ts` (doctor details, services, conditions and their detail pages) and `src/config/content.ts` (tabs, reviews, gallery, emergency numbers). Images live in `public/img/`.

Build: `npm install` then `npm run build`. The static site is written to `out/`; upload that folder to any host.

## What came from Google Maps

- Phone, address, hours (Mon–Thu 10–9, Fri–Sat 9–9, Sun 9–2) and the 4.9★ / 176-review rating.
- Review quotes in `content.ts` are short excerpts of public Google reviews.
- `consult.jpg` and `clinic-card.jpg` are crops of a **real photo uploaded by the clinic** (Aug 2022): the doctor examining an elderly patient's wrist.

## Images

| File | Where | Source |
| --- | --- | --- |
| `consult.jpg` | About section, About page, gallery | Real clinic photo (Google Maps, owner upload) |
| `clinic-card.jpg` | "Consulting at" card on home page | Same real photo, cropped |
| `hero.jpg` | Hero, right side | AI-generated (knee exam, doctor's face not shown) |
| `hero-bg.jpg` | Hero, page and treatment banners | AI-generated (empty ortho room) |
| `feature.jpg` | "Getting You Back On Your Feet" band | AI-generated (knee X-ray review) |
| `g-*.jpg`, `treatment-1/2.jpg` | Gallery and treatment pages | AI-generated, showing ortho care in general, not this clinic |
| `ortho-*.svg` | Service and condition icons | Made for this site |
| `logo.svg`, `logo-white.svg`, `favicon.svg` | Logo (bone mark) | Made for this site |

No AI image shows a doctor's face, so no one is passed off as Dr. Kaushik.

### Replace when possible

1. A proper portrait of Dr. Kaushik for the hero (`hero.jpg`, portrait about 600 × 740).
2. Photos of the clinic front, reception and treatment room for the gallery.

## Content checklist (confirm before going live)

- [ ] **Qualifications** (MBBS, MS / DNB Ortho?), college and years of experience. Add them to `title` in `site.ts` and to the tabs in `content.ts`.
- [ ] Is the person in the clinic's own photo (`consult.jpg`) Dr. Kaushik?
- [ ] The listing's latest photo is an **Accord Superspeciality Hospital** poster ("Centre of Excellence for Robotic Joint Replacement & Sports Injury"). Is he on Accord's team? If yes, add it under Current Practice and on the home page.
- [ ] Is +91 98710 65506 on **WhatsApp**? (The floating WhatsApp button uses it.)
- [ ] Which services does he offer? Remove any that don't apply, e.g. joint replacement guidance, injections, physiotherapy.
- [ ] Permission to quote Google reviews on the site (or swap in reviews patients have agreed to share).
- [ ] Email address and social links, if any (hidden while empty).
- [ ] Contact form: it currently opens WhatsApp with the patient's request. To receive it by email instead, set `FORM_ENDPOINT` in `src/components/ContactForm.tsx` (e.g. Formspree).
