# Images & content checklist: Dr. Sinha

Eye Specialist (Ophthalmologist) · Dr Sinha Eye Clinic, Plot No. 409, Sector 15, Faridabad 121007

Layout follows the reference site drsumeetsethicardio.com (top bar, sticky header with dropdowns, dark hero with doctor photo and overlapping info box, speciality cards, navy "priority" band, why-choose, tabbed qualifications, gallery, testimonials, five-column footer, floating buttons, plus inner pages for every service and eye condition).

All text lives in `data/content.ts`. All images live in `public/images/`.

## Pages

`/`, `/about`, `/services`, `/services/[8 services]`, `/conditions`, `/conditions/[8 conditions]`, `/gallery`, `/contact`

## Images in use

Google Maps has **no photos** for Dr Sinha Eye Clinic (the listing only offers Street View, which isn't available there). Every photo on the site is **AI-generated** (Figma AI) to show eye care in general. None show a doctor's face, so no one is passed off as Dr. Sinha, and captions describe the activity, not "our clinic".

| File | Where |
| --- | --- |
| `hero.jpg` | Hero, right side (slit-lamp exam, doctor seen from behind) |
| `hero-bg.jpg` | Hero and page-banner background (dark exam room) |
| `about.jpg` | About section (trial-frame eye test, doctor's hands only) |
| `waiting.jpg` | "Your Vision Is Our Priority" band |
| `g-*.jpg` (8) | Gallery |
| `logo.svg`, `app/icon.svg` | Logo and favicon |

### Replace when possible

1. A real portrait of Dr. Sinha for `hero.jpg` (square, 1000 × 1000 or larger).
2. Real photos of the clinic (front, reception, exam room) for the gallery and the priority band.

Keep the same file names, or update the paths in `data/content.ts`.

## Content checklist (confirm before going live)

- [ ] **Google Maps shows the clinic as "Temporarily closed"** and says it is located in Kairali Ayurvedic Centre. Is the clinic open, and is this still the right address?

- [ ] **Name**: is this **Dr. A.K. Sinha**, and does he run Dr Sinha Eye Clinic, Sector 15? Update `name` / `fullName` in `data/content.ts`.
- [ ] **Phone number** (and is it on WhatsApp?). Fill `phone`, `phoneHref`, `whatsappNumber`. Call / WhatsApp buttons appear automatically once filled; until then the site shows "Get Directions".
- [ ] **OPD timings**: fill `hours` (e.g. `["Mon – Sat: 10:00 AM – 2:00 PM", "Evening: 5:00 – 8:00 PM"]`).
- [ ] Email address and Facebook / Instagram / YouTube links, if any.
- [ ] Qualifications as written: MBBS (Ranchi University), DO (Patna University), Fellowship in Contact Lenses (Contact Lens Foundation, Calcutta).
- [ ] 51 years of experience, "practising since 1975".
- [ ] Still Senior Consultant – Cataract, Glaucoma & Oculoplasty at Centre for Sight, Sector 16A? If not, remove `otherPractice`.
- [ ] Services list: does he operate cataract cases himself, and where (clinic or Centre for Sight)? Remove anything not offered.
- [ ] Genuine patient reviews (with consent) for `testimonials`. Until then the section links to Google reviews.
