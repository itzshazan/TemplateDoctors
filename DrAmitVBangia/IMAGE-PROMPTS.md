# Images & content checklist: Dr. Amit V Bangia (Doctor ID: 1)

Consultant Dermatologist & Cosmetologist · Dr. Amit V Bangia – Hair and Skin Specialist · Plot No. 308, Sector 46, Faridabad

Right now every image is a teal/gold placeholder that shows its own file name and size.

## How to swap an image

1. Save the new photo in `public/images/` using the **same base name**, as a `.jpg`, e.g. `hero.jpg`.
2. In `data/content.ts`, change that file's extension from `.svg` to `.jpg` (every image path lives in that one file).
3. Delete the old `.svg` placeholder.

Export JPGs at the size listed, compressed to roughly **under 400 KB** (squoosh.app or tinyjpg.com).

`logo.svg` and `app/icon.svg` (the "AB" monogram) are finished and can be used as they are. If the clinic already has a logo, replace `public/images/logo.svg` with it (PNG/SVG, about 320 × 80, transparent background).

## Ground rules (important for a real doctor's site)

- **Real photos wherever the image claims to show something real.** Dr. Bangia's portrait (#2), the clinic photos (#4–#9) and the doctor-at-work photo (#9) must be genuine. An AI-generated "Dr. Bangia" or a fake clinic interior would mislead patients.
- **AI images must not show a recognisable doctor's face.** Visitors will assume any doctor shown is Dr. Bangia. The prompts below use hands, over-the-shoulder views or out-of-frame doctors.
- **No before/after photos of patients** unless you have written patient consent, and check current NMC guidelines on advertising before using any.
- Style for every AI image: realistic photography, Indian patients and setting, soft natural daylight, deep teal / white / warm gold palette to match the site, no text, logos or watermarks.

Shared style suffix to paste after each AI prompt:

> photorealistic, soft natural daylight, clean modern Indian dermatology clinic, deep teal, white and warm champagne-gold accents, shallow depth of field, calm premium reassuring mood, no text, no logos, no watermark

---

## Top of page

### 1. `hero.jpg` (1920 × 1000, landscape)

A dark teal overlay sits on the **left** half, where the headline goes, so keep the subject on the right.

> Wide shot of a bright, modern dermatology consultation room in India, a young Indian woman with healthy glowing skin seated calmly on a consultation chair on the right third of the frame, a dermatologist's gloved hand holding a handheld dermatoscope near her cheek (the doctor's face is out of frame), neat shelves and a white examination lamp softly blurred behind, empty soft-focus space on the left side of the frame

Alternative (no people):

> Elegant flat-lay on a white marble counter on the right side of the frame: a dermatoscope, a few unbranded skincare bottles, a sunscreen tube and a sprig of green leaves, soft morning light, wide empty soft-focus space on the left

## About section

### 2. `dr-amit-bangia.jpg` (900 × 1100, portrait). **Real photo only**

A professional photograph of Dr. Amit V Bangia. Brief for the photographer:

- Waist-up, slightly angled, friendly smile, looking at the camera
- White coat over a shirt (stethoscope optional), or smart formal shirt
- Plain light background or the clinic's consultation room softly blurred
- Soft window light, no harsh flash; portrait orientation with a little space above the head

## Why Choose section

### 3. `why-choose.jpg` (900 × 1100, portrait)

> Over-the-shoulder view from behind a dermatologist (the doctor's face not visible, only the shoulder of a white coat) explaining a skincare plan to a middle-aged Indian man seated across a clean wooden desk, the patient attentive and relaxed, a tablet showing an abstract skin diagram on the desk, bright consultation room, portrait orientation

A real photo of Dr. Bangia consulting a patient (with that patient's consent) would be even better here.

## Clinic gallery ("Clinic" tab). **Real photos strongly preferred**

Take these on a bright day with the lights on, the room tidied, and no patient faces or files visible. Shoot square (1000 × 1000), or crop to square afterwards.

| # | File | What to photograph |
|---|------|--------------------|
| 4 | `clinic-1-exterior.jpg` | Front of the clinic at Plot No. 308, Sector 46, with the signboard clearly readable |
| 5 | `clinic-2-reception.jpg` | Reception desk, from the entrance |
| 6 | `clinic-3-waiting.jpg` | Waiting area, chairs neatly arranged |
| 7 | `clinic-4-consultation.jpg` | Dr. Bangia's consultation room, desk and examination couch |
| 8 | `clinic-5-procedure.jpg` | Procedure / treatment room with equipment (only if the clinic has one; otherwise delete it from the `gallery` list in `data/content.ts`) |
| 9 | `clinic-6-doctor-at-work.jpg` | Dr. Bangia examining a patient (patient seen from behind or with written consent) |

AI fallback for #4–#8 only if photos aren't ready yet (replace them with real photos later):

> Bright, clean reception and waiting area of a small modern Indian skin clinic, white walls with deep teal accent wall, warm wood desk, a few comfortable chairs, a potted plant, soft lighting, no people

### 10. `clinic-7-skin-exam.jpg` (1000 × 1000). Real or AI

> Close-up of a dermatologist's gloved hands using a handheld dermatoscope to examine a mole on an Indian patient's forearm, clean white clinical background, the doctor's face not in frame

### 11. `clinic-8-skincare.jpg` (1000 × 1000). Real or AI

> A young Indian woman's hands applying a small amount of moisturiser from a plain unbranded white tube, clean bathroom counter with a folded towel and a sunscreen bottle, soft daylight, face not shown

## Skin & Hair Tips cards (1200 × 800, landscape). AI images are fine

### 12. `tip-1-acne.jpg`

> Close-up of a young Indian man looking into a bathroom mirror with mild acne on his cheek, resisting touching it, hands lowered, soft daylight, gentle and non-judgemental mood, face partly turned away

### 13. `tip-2-hair-fall.jpg`

> A wooden comb with a few strands of dark hair on a white bathroom counter, a young Indian woman's hand reaching for it, soft natural light, calm mood

### 14. `tip-3-sunscreen.jpg`

> An Indian woman in her thirties applying sunscreen to her face outdoors on a sunny balcony with green plants behind, plain unbranded sunscreen tube in hand, bright warm daylight

### 15. `tip-4-pigmentation.jpg`

> Soft close-up profile of an Indian woman's cheek showing a subtle area of uneven pigmentation, natural skin texture, gentle window light, respectful and non-dramatic, eyes not visible

### 16. `tip-5-eczema.jpg`

> Hands gently applying a thick moisturising cream to dry skin on an Indian child's forearm, cosy winter setting with a knitted blanket, soft warm light, faces not visible

### 17. `tip-6-fungal.jpg`

> A pharmacist's counter with several unbranded cream tubes, one hand pushing them aside while another hand holds a doctor's prescription slip, clean clinic-pharmacy setting, soft focus, no readable text

---

## Content checklist: confirm with Dr. Bangia before going live

The profile is still **pending final doctor approval**. Please confirm or correct:

- [ ] **Qualifications:** only *M.B.B.S. – Kasturba Medical College* is listed. Add any postgraduate degree (MD / DVD / DNB Dermatology), fellowships and the **medical registration number** if he wants them shown.
- [ ] **Hospitals:** the site says "regional hospitals across Delhi NCR". Ask whether he wants specific hospital names listed.
- [ ] **Treatments list** (`services` in `data/content.ts`): I wrote standard dermatology and cosmetology services. Remove anything he doesn't offer, especially **chemical peels, anti-ageing/rejuvenation and the procedure room**, and add any he does offer (e.g. lasers, PRP, hair transplant, dermatosurgery).
- [ ] **WhatsApp:** the WhatsApp button and the enquiry form both use **9910812362**. Confirm that number is on WhatsApp.
- [ ] **Sunday:** the site says "Sunday closed". Confirm.
- [ ] **Facebook / Google Business profile:** add links if they exist (`site.social` in `data/content.ts`).
- [ ] **Patient reviews:** the Reviews section is hidden until real reviews are added to `testimonials` in `data/content.ts`. Only use genuine reviews you have permission to publish.
- [ ] **Skin tips** text and **FAQ** answers: get a quick read-through from the doctor, since this is medical advice published under his name.
