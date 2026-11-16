# Images & content checklist: Dr. Sunita

Gynaecologist · Dr Sunita Clinic, B 254, near Pankaj Medical Store, Chungi No 2, Kotla Mahingiran, Lal Kuan, Faridabad 121009

**Template note:** the reference site (drjharnachildspecialist.com) couldn't be opened from the build environment because its SSL certificate expired on 10 Oct 2026. This site uses a soft, rounded style common to child-specialist and women's clinic sites (pastel hero with a morphing photo frame and floating cards, overlapping feature cards, round-icon service cards, a life-stage timeline, a wave-edged "why choose" band, visit steps, health tips, gallery, reviews, FAQ, map). Send screenshots of the reference site, or confirm its certificate is renewed, and the layout can be matched more closely.

All text lives in `data/content.ts`. All images live in `public/images/`.

## Pages

`/`, `/about`, `/services`, `/services/[8 services]`, `/gallery`, `/contact`

## Images in use

| File | Where | Source |
| --- | --- | --- |
| `clinic-entrance.jpg` | "Why choose" band, first gallery photo | **Real photo** of the clinic from its Google Maps listing, uploaded by a Google user (Oct 2025). Ask the clinic for its own photo, or get permission, before going live |
| `hero.jpg` | Hero (expecting mother) | AI-generated (Figma AI) |
| `about.jpg` | About section (stethoscope on baby bump, doctor's hands only) | AI-generated |
| `g-*.jpg` (5) | Gallery | AI-generated, showing care in general, not this clinic |
| `logo.svg`, `app/icon.svg` | Logo and favicon | Made for this site |

The other photos on the Google listing belong to different nearby clinics (e.g. another gynaecologist's signboard), so they weren't used. No AI image shows a doctor's face, so no one is passed off as Dr. Sunita.

### Replace when possible

1. A real portrait of Dr. Sunita for `about.jpg` (portrait 4:5).
2. Real photos of the consultation room, reception and waiting area for the gallery.

Keep the same file names, or update the paths in `data/content.ts`.

## Content checklist (confirm before going live)

Almost nothing about Dr. Sunita is published online (the name is very common), so the site makes no claims about qualifications or experience yet.

- [ ] **Qualifications** (e.g. MBBS, MS/DGO, college): fill `degrees`. Shown under the name once filled.
- [ ] **Years of experience**: fill `experienceYears`. A badge appears on the photo once it is above 0.
- [ ] **Phone number** and WhatsApp: fill `phone`, `phoneHref`, `whatsappNumber`. Call/WhatsApp buttons appear automatically. Until then, the buttons say "Get Directions".
- [ ] **OPD timings**: fill `hours`.
- [ ] Email, Facebook and Instagram links, if any.
- [ ] **Services**: confirm each of the 8 (pregnancy care, period problems, PCOS, infertility evaluation, family planning incl. Copper-T, infections, menopause, Pap smear). Remove any not offered. Does the doctor do deliveries or surgeries, and at which hospital? These can be added.
- [ ] Ultrasound or lab tests available at the clinic? These can be added as a feature.
- [ ] How the doctor would like to be described (e.g. "lady doctor" / "female gynaecologist", if appropriate). The current copy avoids pronouns.
- [ ] Address as given on Google: "Lal Kuan, New Delhi, Faridabad, Haryana 121009". Confirm whether it should read New Delhi or Faridabad.
- [ ] Genuine patient reviews (with consent) for `testimonials`. Until then the section links to Google reviews.
