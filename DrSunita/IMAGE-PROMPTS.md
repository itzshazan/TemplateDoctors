# Images & content checklist: Dr. Sunita

Gynaecologist · Dr Sunita Clinic, B 254, near Pankaj Medical Store, Chungi No 2, Kotla Mahingiran, Lal Kuan, Faridabad 121009

Built on the **drjharnachildspecialist** template from `itzshazan/Full_template` (the layout originally asked for). Text lives in `src/data/site.ts` (practice details, services, home and doctor copy) and `src/data/blog.ts` (5 health articles). Images live in `public/images/`. Any missing image shows a placeholder.

## Images

| File | Where | Source |
| --- | --- | --- |
| `clinic-entrance.jpg` | Home "Welcome" section, gallery | **Real photo** from the clinic's Google Maps listing, uploaded by a Google user (Oct 2025). Get the clinic's permission or its own photo before going live |
| `banner/1–3.jpg` | Home banner slider | AI-generated |
| `inner-banner*.jpg` | Inner-page banners | AI-generated |
| `about.jpg` | Doctor section, Meet the Doctor | AI-generated (stethoscope on a baby bump, doctor's hands only) |
| `hero.jpg`, `g-*.jpg` | Services, articles, gallery | AI-generated, showing care in general, not this clinic |

No AI image shows a doctor's face. Swap `about.jpg` for a real portrait of Dr. Sunita when available.

## Content checklist (confirm before going live)

Almost nothing about Dr. Sunita is published online (the name is very common), so the site makes no claims about qualifications or experience.

- [ ] **Qualifications** (e.g. MBBS, MS/DGO): set `doctor.qualifications` in `site.ts`. It currently reads "Gynaecologist · Women's Health Clinic".
- [ ] **Phone / WhatsApp / email**: fill `contact` in `site.ts`. Call details and the appointment form appear automatically once any of these is set.
- [ ] **OPD timings**: update `clinics[0].timing`.
- [ ] Years of experience, if she'd like it shown. The stats strip currently shows "8 services / Teens to Menopause / 100% private".
- [ ] **Services**: confirm all 8 (pregnancy care, period problems, PCOS, infertility evaluation, family planning incl. Copper-T, infections, menopause, Pap smear). Does she do deliveries or surgeries, and where?
- [ ] How she'd like to be described (pronouns, "lady doctor"). The copy currently avoids pronouns.
- [ ] Address: Google lists "Lal Kuan, New Delhi, Faridabad, Haryana 121009". Confirm whether it should read New Delhi or Faridabad.
- [ ] Domain name: set `siteUrl` in `site.ts` (used for the sitemap and robots file).
- [ ] Genuine patient reviews (with consent) for `testimonials`, and testimonial videos if any (`images.testimonialVideos`).
