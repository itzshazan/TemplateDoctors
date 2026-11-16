# Images & content checklist: Dr. Devender Singh

General & Laparoscopic Surgeon · Siyaram Multi-Speciality Hospital, C-22-C, NIT, near Nehru Ground, Faridabad 121001 · +91 98113 85907

Built on the **drshwetawazir** design from `itzshazan/Full_template` (via the DrDineshKumar version in this repo), recoloured emerald green. Text lives in `src/data/` (`site.ts`, `services.ts`, `pages.ts`, `posts.json` + `blog.ts`). Images live in `public/images/`.

## Sources

Your doctor sheet (MBBS, MS General Surgery; 9 years per Bajaj Finserv Health; Siyaram Hospital) and the Google Maps listing (5.0★, OPD Monday 4–8:30 PM, one photo).

## Images

| File | Where | Source |
| --- | --- | --- |
| `ward.jpg` | Welcome, hospital page, gallery | **Real photo** uploaded by the listing owner on Google Maps (Apr 2021), a hospital ward |
| `hero-1/2/3.jpg`, `feature.jpg`, `welcome-1.jpg`, `page-header.jpg` | Banner, sections | AI-generated (faces covered or not shown) |
| `svc-*.jpg`, `doctor.jpg` | Service pages, doctor section | **Temporary crops** of the images above. Figma AI credits ran out mid-build; replace with dedicated images |

## Content checklist (confirm before going live)

- [ ] **Identity**: the Google listing is titled "Dr. Devender Singh Laparoscopic and Robotic surgeon @ AIIMS, New Delhi" but the clinic address is NIT Faridabad. Is this the same doctor, and is there a current AIIMS role? (The name is common.)
- [ ] Colleges, years and experience (Bajaj lists 9 years). Add them to `doctorProfile.experience` in `pages.ts`.
- [ ] **OPD days** (Google shows Monday 4–8:30 PM only).
- [ ] Is +91 98113 85907 on **WhatsApp**? The contact form uses it.
- [ ] Services: confirm the 8 listed. Laser piles treatment, robotic surgery or other procedures can be added.
- [ ] A real portrait for `doctor.jpg`.
- [ ] Pronouns. The copy currently avoids them.
