# Dr. Ram Pratap (PT) – images and details to confirm

All text lives in `data/site.ts`. Images live in `public/images/`. Colours and fonts are at the top of `app/globals.css`.

## Where the information came from

The details you sent (Nov 2026): name, Sr. Consultant Physiotherapist, BPT, MPT (Ortho), phone, email, 9+ years,
speciality orthopaedics, the four hospitals, 2000+ paralysis patients, 10k+ patients, 15+ awards, the Advanced
Therapy list and the timings.

hheals.co.in was checked: it is Dr. Hitesh Gupta's H-Heals clinic (Sector 43, Faridabad) and does not mention
Dr. Ram Pratap, so its address is **not** used.

## Images

| File | Used for | Source |
| --- | --- | --- |
| `dr-ram-pratap.jpg` | Hero portrait | **Real photo** supplied by you (at the H Heals Physiotherapy Clinic desk) |
| `fortis-fisiocon-2026.jpg` | About, gallery | **Real photo** supplied by you: certificate at Fortis FISIOCON 2026 (the phone's date stamp was cropped off) |
| `award-physio-bharat.jpg` | About, gallery | **Real photo** supplied by you: Physio Bharat 7 certificate |
| `physio-event-group.jpg` | Gallery (large tile) | **Real photo** supplied by you: group photo at a physiotherapists' event |
| `iap-certificate.jpg` | Gallery | **Real photo** supplied by you: certificate of appreciation, Indian Association of Physiotherapists |
| `fortis-talk.jpg` | Gallery | **Real photo**, cropped from his H Heals clinic poster: speaking at Fortis Memorial Research Institute |
| `g-dry-cupping.jpg` | Gallery | AI-generated (Figma AI) to show these therapies in general. No faces; they do not show Dr. Ram Pratap |

Removed: the other four AI therapy images, now replaced by real photos. The photo of the clinic desk with a knee
model (Dr. Hitesh Gupta's sign) is still not used.

## From the clinic poster (Nov 2026)

Clinic: H Heals Physiotherapy Clinic, Greenfield Colony, Sector 42, Faridabad. Services: Pain Relief Therapy, Post-surgery Rehabilitation, Neurological Rehabilitation, Back & Neck Pain Treatment, Sport Injury, Manual Therapy (these replace the four guessed rehab services). Note: hheals.co.in lists the clinic as B-1032, Greenfield Colony, **Sector 43**; the poster says Sector 42. Confirm which is right.

## Content checklist (confirm before going live)

- [x] ~~**Clinic address**~~ now from the poster. (Old note:) The new portrait shows the "H Heals Physiotherapy Clinic" sign. The H-Heals address on hheals.co.in is Ground Floor, Gate No. 4, B-1032, Opp. Gandhi Park, near NHPC Chowk, Greenfield Colony Block B, Sector 43, Faridabad: confirm it before using it. The contact section says "Please call for the clinic address" until added.
- [ ] Which **days** the morning (10–1) and evening (5:30–8) timings apply to.
- [ ] Is **+91 99277 35694** on **WhatsApp**? The booking form and floating button use it.
- [ ] **Second service list** was left blank. The site shows Orthopaedic Physiotherapy and Paralysis Rehabilitation
      (from your details) plus Post-Surgery & Fracture Rehab and Spine & Posture Care (typical for an MPT Ortho). Edit `rehabServices`.
- [ ] Short descriptions of each Advanced Therapy (especially Weight Cupping and Dynamic Therapy), in `advancedTherapies`.
- [ ] Whether the four hospitals are current or past positions (shown as "Hospital experience").
- [ ] Award names/years if you want them listed (only the Physio Bharat 7 certificate is named).
