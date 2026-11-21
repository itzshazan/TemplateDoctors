# Dr. Meenakshi Surve Pawar – sources, images and details to confirm

All text lives in `data/site.ts`. Images live in `public/images/`. Colours and fonts are at the top of `app/globals.css`.

## Where the information came from

- The details you sent (Nov 2026): specialty, clinic, city, medical council, phone, email, qualifications, address,
  maps link, websites and social links.
- **aashirwadclinic.net** (home, Doctor, Qualification, Awards, Accolades, Contact and service pages): founded 2013,
  doctor's schedule, credentials and certifications, memberships, ISO 9001:2015, service descriptions, logo and photos.
- drmeenakshipawar.com refused the connection from this environment, so nothing was taken from it.

## Images

| File | Used for | Source |
| --- | --- | --- |
| `dr-meenakshi-portrait.jpg` | Hero portrait | aashirwadclinic.net (`dr.jpg`). It looks like a retouched or AI-styled portrait; swap in an original photo if preferred |
| `dr-meenakshi-sonography.jpg`, `dr-meenakshi-award.jpg`, `cme-faculty.jpg` | About, gallery | aashirwadclinic.net (real photos) |
| `clinic-*.jpg` | Hero card, gallery | aashirwadclinic.net (real clinic photos) |
| `logo.png` | Header | aashirwadclinic.net |
| `s-gynecology.jpg`, `s-pregnancy.jpg`, `s-fertility.jpg`, `s-womens-health.jpg` | Service panels | AI-generated (Figma AI). No doctor faces; they do not show Dr. Meenakshi or her patients |

Not used: a scan photo where a patient's face was visible, and the health-tip posters and certificate scans.

## Content checklist (confirm before going live)

- [ ] **Email:** you sent aashirwadsocial4@gmail.com; the clinic site shows aashirwadclinic21@gmail.com. The site uses the first.
- [ ] Is **+91 74993 57236** on **WhatsApp**? The booking form and floating button use it.
- [ ] **Timings:** Mon–Sat 7:30–9:30 PM, Sunday by appointment (from the clinic site).
- [ ] **Memberships band:** POGS, IMA and MMC are memberships named on the Doctor page; the fellowships are from her degrees.
- [ ] Service descriptions and the pregnancy-journey steps are general summaries. Edit `services` and `journey` if needed.
- [ ] Awards are not listed by name (the clinic site has many). Add any you want highlighted.
