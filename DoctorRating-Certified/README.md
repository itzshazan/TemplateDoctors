# DoctorRating – Certified Doctors carousel

Everything needed for a "Certified Doctors" carousel on doctorrating.in, for the 7 doctors whose real photos we have.

| File | What it is |
|---|---|
| `photos/*.jpg` | One portrait per doctor, all **600 × 750 (4:5)**, cropped to the same framing |
| `doctors.json` | Section heading text and each doctor's details (name, specialty, qualifications, experience, hospital, city, address, phone, rating, photo) |
| `carousel-preview.html` | A working carousel built from the same data. Open it in a browser to see it; copy the marked `<style>`, `<section>` and `<script>` blocks into the site, or rebuild the card in your own framework |

## Doctors

| # | Doctor | Specialty | City |
|---|---|---|---|
| 1 | Dr. Abhinit Gupta | Interventional Cardiologist | Kanpur |
| 2 | Dr. Dinesh Kumar | General Physician & Diabetologist | Gurugram |
| 3 | Dr. Madhu Saini | General Physician & Diabetologist | Hisar |
| 4 | Dr. Vivek Kaushik | Orthopaedic Doctor | Ballabhgarh, Faridabad |
| 5 | Dr. Amit V Bangia | Dermatologist & Cosmetologist | Faridabad |
| 6 | Dr. Amitabh Parti | Internal Medicine | Gurugram |
| 7 | Dr. Shamsher Ali | General Physician & Child Specialist | Devli, New Delhi |

## Data notes

- Fields with no confirmed value are `null` and are simply not shown on the card (for example, Vivek's and Shamsher's qualifications, or Abhinit's and Dinesh's years of experience). Each doctor's `toConfirm` list says what to check.
- `googleRating` is filled in only for Dr. Vivek Kaushik (4.9 from 176 reviews). Add others from DoctorRating's own ratings if you have them.
- `profileUrl` is empty for everyone. Add each doctor's DoctorRating profile link and the card shows a **View Profile** button.
- Dr. Vivek Kaushik's photo is cropped from a clinic photo (the patient is cropped out). It is low resolution, so ask for a proper portrait.

## Before publishing

- **Consent:** get each doctor's OK to show their photo and details on DoctorRating. Several photos come from hospital websites or Google Maps uploads (see `photoSource`).
- **"Certified" wording:** only use "Certified" (badge and heading) for doctors DoctorRating has actually checked, for example their medical registration number. If there's no such check yet, "Featured Doctors" or "Our Partner Doctors" is safer. The heading text is in `doctors.json` → `section`; the badge text is in `carousel-preview.html` (search for `Certified`).
