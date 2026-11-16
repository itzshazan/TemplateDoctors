# Images & content checklist: Dr. Sarika Raj

Paediatrician · 603, JMD Galleria Mall, Badshahpur Sohna Road, Sector 48, Gurugram 122018 · +91 98189 21888

Built on the **fake1** design from this repo (the children's-hospital layout), recoloured orange and indigo, and reworked for a solo paediatrician: the Women Care section is now Vaccination, and the team section shows one doctor. All text lives in `data/site.ts`. Images live in `public/images/`.

## What came from Google Maps

Address, phone, a 4.8★ rating, "women-owned" and one photo. No hours, website or qualifications are listed.

## Images

| File | Where | Source |
| --- | --- | --- |
| `play-area.jpg` | Child Care section | **Real photo** from the clinic's Google listing (Nov 2020): the play table |
| `hero-1/2.jpg`, `about.jpg`, `provide.jpg`, `available.jpg`, `post-*.jpg` | Banner, sections, tips | AI-generated (no doctor faces) |
| `icon-*.svg` | Service cards, counter | Made for this site |

The doctor card shows initials ("SR"). Replace it with a real photo when available (see `Avatar` in `components/Art.tsx`).

## Content checklist (confirm before going live)

- [ ] Qualifications (e.g. MBBS, MD/DNB Paediatrics) and years of experience: fill `doctors[0].degree` / `experience`.
- [ ] **OPD days and timings**: fill `site.hours`.
- [ ] Is +91 98189 21888 on **WhatsApp**? The appointment form sends requests via WhatsApp.
- [ ] Languages spoken. The site currently says Hindi and English.
- [ ] Services: does the clinic give vaccinations on site? Anything to add (e.g. newborn hearing screening, developmental assessment)?
- [ ] Google shows "Located in: Alpinedge Solutions Pvt. Ltd." inside JMD Galleria. Confirm the unit number (603) and the floor.
- [ ] A real photo of Dr. Sarika Raj and the clinic.
