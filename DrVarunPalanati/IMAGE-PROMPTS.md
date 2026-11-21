# Dr. Varun Palanati – sources, images and details to confirm

All text lives in `data/site.ts`. Images live in `public/images/`. Colours and fonts are at the top of `app/globals.css`.

## Where the information came from

- **drvarunlaparoscopy.com** (home, About and Contact pages, Nov 2026): credentials, education, work experience,
  memberships, conferences, publications, the 15 services, stats, testimonials, phones, email, address, socials.
- **Google Maps** ("Dr. Varun Palanati | Gastro & Laparoscopic Surgeon"): 5.0 rating, "Open 24 hours", address.
- Dr. Vignata Nutalapati (IVF specialist, shown on the old About page) is **not** included, as this site is only about Dr. Varun.

## Images

| File | Used for | Source |
| --- | --- | --- |
| `dr-varun-hero.png` | Hero (transparent cut-out) | drvarunlaparoscopy.com |
| `dr-varun-standing.jpg`, `dr-varun-seated.jpg` | About, gallery | drvarunlaparoscopy.com |
| `janardani-hospital.jpg`, `shri-hospital.jpg` | About ("Consulting at"), gallery | drvarunlaparoscopy.com |
| `logo.png`, `logo-white.png` | Header, footer | drvarunlaparoscopy.com |
| `g-lap-theatre.jpg`, `g-lap-instruments.jpg` | Gallery | AI-generated (Figma AI) to show laparoscopic surgery in general. No faces |

The photos on the old site are small (about 475–777 px tall). Higher-resolution originals would look sharper.

## Content checklist (confirm before going live)

- [ ] **Surgery count:** the old site says both "Over 500 successful surgeries" and "1550+ Successful Surgeries". This site uses 1,550+.
- [ ] **Testimonials:** the three quotes are copied from the old site. Confirm the patients are happy for them to be reused.
- [ ] **OPD timings:** none are published; Google says "Open 24 hours". Add consultation hours if wanted.
- [ ] **Email:** the old Contact page shows "drvarunpalnati@gmail.com" in the text, but its links use "drvarunpalanati@gmail.com". This site uses the second.
- [ ] Is **+91 73370 37878** the WhatsApp number? The old site's WhatsApp button uses it, as do the form and floating button here.
- [ ] Short service descriptions are general summaries. Edit `procedures` and `conditions` if needed.
