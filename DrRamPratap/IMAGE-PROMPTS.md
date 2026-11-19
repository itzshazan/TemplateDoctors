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
| `dr-ram-pratap.jpg` | Hero portrait | **Real photo** supplied by you |
| `award-physio-bharat.jpg` | About, gallery | **Real photo** supplied by you: Physio Bharat 7 certificate (Artemis Hospitals banner) |
| `g-mfr.jpg`, `g-dry-cupping.jpg`, `g-iastm.jpg`, `g-paralysis-rehab.jpg`, `g-cupping-set.jpg`, `g-knee-rehab.jpg` | About, gallery | AI-generated (Figma AI) to show the therapies in general. No therapist faces; they do not show Dr. Ram Pratap |

Not used: the clinic photo with the knee model. The sign in it reads "H-Heals Physiotherapy, OT & Cancer Rehab
Centre – Dr. Hitesh Gupta", and the clinician at the desk looks different from Dr. Ram Pratap's portrait.

## Content checklist (confirm before going live)

- [ ] **Clinic address** (not supplied). The contact section says "Please call for the clinic address" until added.
- [ ] Which **days** the morning (10–1) and evening (5:30–8) timings apply to.
- [ ] Is **+91 99277 35694** on **WhatsApp**? The booking form and floating button use it.
- [ ] **Second service list** was left blank. The site shows Orthopaedic Physiotherapy and Paralysis Rehabilitation
      (from your details) plus Post-Surgery & Fracture Rehab and Spine & Posture Care (typical for an MPT Ortho). Edit `rehabServices`.
- [ ] Short descriptions of each Advanced Therapy (especially Weight Cupping and Dynamic Therapy), in `advancedTherapies`.
- [ ] Whether the four hospitals are current or past positions (shown as "Hospital experience").
- [ ] Award names/years if you want them listed (only the Physio Bharat 7 certificate is named).
