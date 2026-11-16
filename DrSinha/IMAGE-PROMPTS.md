# Images & content checklist: Dr. Sinha

Eye Specialist (Ophthalmologist) · Dr Sinha Eye Clinic, Plot No. 409, Sector 15, Faridabad 121007

Layout follows the reference site drsumeetsethicardio.com (top bar, sticky header with dropdowns, dark hero with doctor photo and overlapping info box, speciality cards, navy "priority" band, why-choose, tabbed qualifications, gallery, testimonials, five-column footer, floating buttons, plus inner pages for every service and eye condition).

All text lives in `data/content.ts`. All images live in `public/images/`.

## Pages

`/`, `/about`, `/services`, `/services/[8 services]`, `/conditions`, `/conditions/[8 conditions]`, `/gallery`, `/contact`

## Images in use (all placeholders made for this site)

| File | Where | Replace with |
| --- | --- | --- |
| `doctor.svg` | Hero, right side | Real portrait of Dr. Sinha (square, at least 1000 × 1000) |
| `doctor-consult.svg` | About section | Dr. Sinha at the slit lamp or with a patient (landscape 4:3) |
| `clinic.svg` | "Your Vision Is Our Priority" band | Photo of the clinic front / signboard |
| `gallery-1…8.svg` | Gallery | Real clinic photos from the Google Maps listing or taken on site (4:3 landscape) |
| `hero-bg.svg` | Hero & page banners background | Can stay, or use a darkened photo of the clinic interior |
| `logo.svg`, `app/icon.svg` | Logo and favicon | Can stay |

Clinic photos exist on the Google Maps listing but could not be downloaded from this environment. Ask the clinic for the originals (and permission) rather than copying them from Google.

## Content checklist (confirm before going live)

- [ ] **Name**: is this **Dr. A.K. Sinha**, and does he run Dr Sinha Eye Clinic, Sector 15? Update `name` / `fullName` in `data/content.ts`.
- [ ] **Phone number** (and is it on WhatsApp?). Fill `phone`, `phoneHref`, `whatsappNumber`. Call / WhatsApp buttons appear automatically once filled; until then the site shows "Get Directions".
- [ ] **OPD timings**: fill `hours` (e.g. `["Mon – Sat: 10:00 AM – 2:00 PM", "Evening: 5:00 – 8:00 PM"]`).
- [ ] Email address and Facebook / Instagram / YouTube links, if any.
- [ ] Qualifications as written: MBBS (Ranchi University), DO (Patna University), Fellowship in Contact Lenses (Contact Lens Foundation, Calcutta).
- [ ] 51 years of experience, "practising since 1975".
- [ ] Still Senior Consultant – Cataract, Glaucoma & Oculoplasty at Centre for Sight, Sector 16A? If not, remove `otherPractice`.
- [ ] Services list: does he operate cataract cases himself, and where (clinic or Centre for Sight)? Remove anything not offered.
- [ ] Genuine patient reviews (with consent) for `testimonials`. Until then the section links to Google reviews.
