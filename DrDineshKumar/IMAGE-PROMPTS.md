# Images & content checklist: Dr. Dinesh Kumar

General Physician & Diabetologist · MBBS, MD (Medicine), FCCM, CCAIDM · Kashvi Mediclinic, The Millennia 2 – Commercial, Sector 37D, Gurugram 122006 · +91 87966 81884

Built on the **drshwetawazir** template from `itzshazan/Full_template`. Text lives in `src/data/`:

- `site.ts`: clinic details, navigation, home-page sections
- `services.ts`: the 8 service pages
- `pages.ts`: About, Doctor Profile, FAQs, Gallery, Contact
- `posts.json` + `blog.ts`: the 4 health articles

Images live in `public/images/`. Build with `npm install`, then `npm run build`, then `npm start`.

## What came from Google Maps

- Name, qualifications as written on the listing, phone, address, evening hours (5–9 PM), wheelchair accessibility.
- The "Loose motion" article is based on the clinic's own post on its Google listing (Oct 2026).
- `dr-dinesh-kumar.jpg` is the **portrait the clinic uploaded** (Jul 2026), cropped to remove the name banner at the bottom.

## Images

| File | Where | Source |
| --- | --- | --- |
| `dr-dinesh-kumar.jpg` | Doctor section, Our Clinic, Doctor Profile, gallery | Real (Google Maps, owner upload) |
| `hero-1/2/3.jpg` | Home banner slider (hero-2 also the call-us band) | AI-generated |
| `feature.jpg`, `welcome-1.jpg`, `clinic.jpg` | Home sections and gallery | AI-generated |
| `hospital-cta.jpg` | "Consulting at Kashvi Mediclinic" band | AI-generated (generic building, **not** The Millennia 2) |
| `page-header.jpg` | Inner-page banners and map section | AI-generated |
| `svc-*.jpg`, `diet.jpg` | Service pages, article images, gallery | AI-generated |
| `logo.svg`, `logo-light.svg`, `icon-*.svg`, `src/app/icon.svg` | Logo, favicon and icons | Made for this site |

No AI image shows a doctor's face, so no one is passed off as Dr. Dinesh Kumar.

### Replace when possible

1. A real photo of **The Millennia 2** / the clinic front for `hospital-cta.jpg`.
2. Photos of the clinic inside (reception, consultation room) for `clinic.jpg` and the gallery.

## Content checklist (confirm before going live)

- [ ] Is this the same Dr. Dinesh Kumar who is Consultant, Internal Medicine at **The Signature Hospital (Park), Gurugram**? If yes, add it to the Doctor Profile (`experience` in `pages.ts`) and the home page.
- [ ] Colleges and years for MBBS / MD, and what FCCM and CCAIDM stand for in his case. These are shown as written on Google.
- [ ] **OPD days.** Google shows 5–9 PM. Which days? Update `hours` in `site.ts`.
- [ ] Is +91 87966 81884 on **WhatsApp**? The contact form sends requests via WhatsApp while no email is set.
- [ ] Clinic email address and social links, if any (hidden while empty).
- [ ] Services list: remove any not offered, or add others (e.g. ECG, home visits, lab sample collection).
- [ ] Genuine patient reviews (with consent) for `testimonials` in `site.ts`. The home slider is hidden while empty.
