# Images for Dr. Shamsher Ali / Family Care Centre

Every image on the site is currently a teal placeholder that says which file it is.
To swap one in, save the new image **with the exact same file name** in `public/images/` (overwrite the placeholder). No code changes are needed.

## Ground rules

- **Use real photos where the image claims to show something real.** The doctor's portrait (#14), the clinic exterior (#7) and ideally the clinic interior (#4) should be actual photographs. An AI-generated "Dr. Shamsher Ali" or "Family Care Centre" would mislead patients.
- **In AI images, don't show a recognisable doctor's face** (the prompts below already handle this: hands, back, or a blurred/cropped view). Otherwise visitors will assume that person is Dr. Ali.
- Style for every AI image: natural, warm daylight; teal / white / soft blue palette to match the site; realistic photography; Indian patients and setting; no text, logos or watermarks.
- Export as JPG, roughly under 400 KB each (use squoosh.app or tinyjpg.com to compress).

Shared style suffix to paste after each prompt:

> photorealistic, natural soft daylight, clean modern Indian neighbourhood clinic, teal and white colour accents, shallow depth of field, warm and reassuring mood, no text, no logos, no watermark

---

## Hero slider (top of page, dark overlay sits on the left side, so keep the subject to the right)

### 1. `hero-family.jpg` (1920 × 1000, landscape)
> Wide shot of an Indian family (grandmother, mother, father and a young child) sitting together in a bright, tidy clinic consultation room, smiling and relaxed, a doctor seen from behind in the foreground holding a stethoscope, subject placed on the right third of the frame, empty soft-focus space on the left

### 2. `hero-child.jpg` (1920 × 1000, landscape)
> A cheerful Indian girl about 5 years old sitting on her mother's lap in a clinic while a doctor's hands gently listen to her chest with a stethoscope, the doctor's face out of frame, child smiling, colourful but uncluttered background, subject on the right third

### 3. `hero-tests.jpg` (1920 × 1000, landscape)
> Close-up of a gloved hand labelling blood sample tubes on a clean white clinic counter, an ECG machine with a paper strip softly blurred in the background, tidy and hygienic, subject on the right side of the frame

## About section

### 4. `about-clinic.jpg` (1200 × 1200, square) — **real photo preferred**
Best option: a bright photo of the actual reception or consultation room at Family Care Centre.
AI fallback:
> Bright, clean reception and waiting area of a small Indian family clinic, a few chairs, a plant, a wall-mounted TV, a receptionist's desk, warm welcoming atmosphere, no people or people blurred

### 5. `approach.jpg` (960 × 1200, portrait)
> An elderly Indian man with his adult daughter listening attentively as a doctor explains something on a notepad, shot over the doctor's shoulder so the doctor's face is not visible, calm consultation room, portrait orientation

## Child Care section

### 6. `child-care.jpg` (1200 × 1200, square; shown with a rounded arch at the top, so keep the subject centred)
> A smiling Indian toddler sitting on a parent's lap holding a small toy while a nurse's hands put a cartoon bandage on the child's arm after a vaccination, child-friendly clinic, subject centred

## Clinic timings section

### 7. `clinic-exterior.jpg` (1600 × 1100, landscape) — **real photo strongly preferred**
Take a daytime photo of the clinic front at Pocket A, A-16, Raju Park, Devli, with the signboard visible. This helps patients recognise the place.
AI fallback (generic only, don't present it as the real clinic):
> Front of a small, clean ground-floor family clinic in a residential New Delhi colony, glass door, teal signboard without readable text, a potted plant, two-wheelers parked nearby, daytime

## Health tips cards (all 1200 × 825, landscape)

### 8. `tips/fever-child.jpg`
> A worried Indian mother checking her young son's temperature with a digital thermometer while he rests in bed with a glass of water nearby, soft home lighting

### 9. `tips/vaccination.jpg`
> Close-up of a parent's hands holding an Indian child's vaccination record card next to a small cartoon bandage, clinic table, shallow depth of field

### 10. `tips/cold-allergy.jpg`
> A young Indian woman sneezing into a tissue at home near a window with sunlight and visible dust particles, cup of hot tea on the table

### 11. `tips/wound-care.jpg`
> Close-up of hands gently placing a clean adhesive dressing on a small cut on a child's knee, first-aid kit open beside, bright and calm

### 12. `tips/eczema.jpg`
> Close-up of hands applying a plain white moisturising cream to the inner forearm, soft towel in the background, gentle and clean

### 13. `tips/blood-test.jpg`
> A middle-aged Indian man calmly having a blood sample taken, only the gloved hands of the technician visible, row of labelled sample tubes in a rack, clean clinic

## Doctor photo

### 14. `dr-shamsher-ali.jpg` (1200 × 1200, square) — **must be a real photo**
Ask the doctor for a recent, well-lit, head-and-shoulders photo (plain light background, white coat or formal shirt, looking at the camera).
Save it as `public/images/dr-shamsher-ali.jpg`, then in `data/site.ts` set:

```ts
photo: "/images/dr-shamsher-ali.jpg",
```

Until then the site shows an "SA" initials badge in its place.
