import { img } from "./site";

/**
 * Service pages. Each one renders with the "service details" layout:
 * hero image → intro → image + checklist → "More information" Q&A → "Some Facts" box → CTA band.
 */
export interface ServiceQA {
  q: string;
  a?: string;
  list?: string[];
}

export interface Service {
  path: string;
  aliases: string[];
  title: string;
  summary: string;
  intro: string;
  detail: string;
  qa: ServiceQA[];
  facts: { intro?: string; list: string[]; outro?: string };
  images: string[];
  date: string;
}

export const serviceChecklist = [
  "Careful examination and the right scans",
  "Keyhole surgery wherever it is suitable",
  "Clear explanation of options, recovery and costs",
  "Follow-up until you are fully back to normal",
];

const welcome = (topic: string) =>
  `At Siyaram Multi-Speciality Hospital, Dr. Devender Singh assesses patients with ${topic} carefully, explains every option — including non-surgical ones — and plans surgery, when needed, around each patient's health and recovery.`;

type ServiceInput = Omit<Service, "detail" | "date" | "aliases"> & { topic: string; detail?: string };

const make = (s: ServiceInput): Service => ({ ...s, aliases: [], date: "2026-10-01", detail: s.detail ?? welcome(s.topic) });

export const services: Service[] = [
  make({
    path: "/hernia-surgery-faridabad",
    title: "Hernia Repair",
    topic: "inguinal, umbilical and incisional hernias",
    images: [img("svc-lap.jpg"), img("svc-consult.jpg")],
    summary: "Laparoscopic and open repair of inguinal, umbilical and incisional hernias with mesh.",
    intro:
      "A hernia is a bulge that appears when part of the intestine or fat pushes through a weak spot in the abdominal wall — commonly in the groin, at the navel or through an old operation scar. A hernia does not heal on its own and tends to grow; repair with a mesh is the definitive treatment.",
    qa: [
      { q: "What are the signs of a hernia?", list: ["A bulge in the groin or near the navel that grows on coughing or standing", "Heaviness or dragging pain", "The bulge goes back when lying down"] },
      { q: "Is laparoscopic hernia repair better?", a: "For many patients, especially with hernias on both sides or a recurrent hernia, keyhole repair means less pain and a faster return to work. Open repair is still a good option in some cases. The right approach is decided after examination." },
      { q: "How long is the recovery?", a: "Most patients walk the same day, go home in 1–2 days and return to desk work within a week. Heavy lifting is avoided for about 4–6 weeks." },
    ],
    facts: { intro: "Go to hospital urgently if the hernia:", list: ["Becomes painful, tense and cannot be pushed back", "Comes with vomiting or a swollen abdomen", "Turns red or dark"], outro: "These can be signs of a strangulated hernia." },
  }),
  make({
    path: "/gallbladder-stone-surgery-faridabad",
    title: "Gallbladder Stones",
    topic: "gallbladder stones",
    images: [img("svc-ultrasound.jpg"), img("svc-lap.jpg")],
    summary: "Laparoscopic cholecystectomy for painful gallstones, usually with a short hospital stay.",
    intro:
      "Gallstones are common and often found on an ultrasound. Stones that cause pain, infection, jaundice or pancreatitis are best treated by removing the gallbladder — usually by laparoscopic cholecystectomy through small keyhole cuts.",
    qa: [
      { q: "What symptoms do gallstones cause?", list: ["Pain in the upper right or middle of the abdomen, often after fatty meals", "Pain spreading to the back or right shoulder", "Nausea, vomiting or bloating", "Yellow eyes or fever (urgent)"] },
      { q: "Do all gallstones need surgery?", a: "No. Stones found by chance that cause no symptoms can often be watched. Surgery is advised when stones cause pain or complications, or in certain high-risk situations." },
      { q: "Can I live without a gallbladder?", a: "Yes. Bile flows directly from the liver into the intestine. Most people eat normally within a few weeks of surgery." },
    ],
    facts: { list: ["Usual hospital stay: 1–2 days", "Return to normal activity in about a week", "Ultrasound confirms the diagnosis"] },
  }),
  make({
    path: "/appendix-surgery-faridabad",
    title: "Appendicitis",
    topic: "appendicitis",
    images: [img("svc-consult.jpg"), img("svc-lap.jpg")],
    summary: "Prompt diagnosis and keyhole removal of an inflamed appendix.",
    intro:
      "Appendicitis is inflammation of the appendix and a common surgical emergency. Pain usually starts around the navel and moves to the lower right abdomen, with fever, nausea and loss of appetite. Early surgery prevents the appendix from bursting.",
    qa: [
      { q: "How is appendicitis diagnosed?", a: "By clinical examination, blood tests and an ultrasound or CT scan when needed." },
      { q: "What does surgery involve?", a: "Laparoscopic appendectomy removes the appendix through small cuts. Most patients go home within 1–3 days." },
      { q: "Can it be treated with antibiotics alone?", a: "Selected mild cases may be, but there is a risk of it coming back. Surgery remains the standard treatment." },
    ],
    facts: { intro: "Seek care immediately for:", list: ["Severe or worsening lower right abdominal pain", "Pain with fever and vomiting", "A rigid, very tender abdomen"] },
  }),
  make({
    path: "/piles-fissure-fistula-treatment-faridabad",
    title: "Piles, Fissure & Fistula",
    topic: "piles, anal fissure and fistula",
    images: [img("svc-consult-2.jpg"), img("svc-consult.jpg")],
    summary: "Medicines first; minimally invasive procedures and surgery when needed.",
    intro:
      "Bleeding, pain or swelling around the anus are very common and usually caused by piles (haemorrhoids), a fissure (a small tear) or a fistula (an abnormal tunnel after an abscess). Most piles and fissures improve with diet changes and medicines; others need a procedure.",
    qa: [
      { q: "How are piles treated?", list: ["High-fibre diet, plenty of water and avoiding straining", "Creams and medicines for symptom relief", "Banding or other procedures for persistent piles", "Surgery for large or prolapsing piles"] },
      { q: "What about a fistula?", a: "A fistula does not heal with medicines. It is treated surgically, with the method chosen to protect bowel control." },
      { q: "Is bleeding always due to piles?", a: "No. Bleeding should always be examined, especially after 40 or with weight loss or change in bowel habit, to rule out other causes." },
    ],
    facts: { list: ["Eat fibre: fruits, vegetables, whole grains", "Drink 2–3 litres of water a day", "Don't sit on the toilet for long"] },
  }),
  make({
    path: "/lipoma-cyst-removal-faridabad",
    title: "Lipoma & Cysts",
    topic: "lipomas, sebaceous cysts and other lumps",
    images: [img("svc-dressing.jpg"), img("svc-consult.jpg")],
    summary: "Removal of lumps under the skin, usually as a day-care procedure.",
    intro:
      "Soft lumps under the skin are usually lipomas (fatty lumps) or sebaceous cysts. They are generally harmless but can grow, become infected or be uncomfortable. Removal is a short procedure, often under local anaesthesia.",
    qa: [
      { q: "When should a lump be checked?", list: ["It is growing quickly", "It is hard, fixed or painful", "It keeps getting infected", "It is bigger than 5 cm"] },
      { q: "Is removal done under local anaesthesia?", a: "Most small lumps are removed under local anaesthesia as a day-care procedure. The removed tissue can be sent for testing." },
    ],
    facts: { list: ["Usually day-care — home the same day", "Stitches removed in about a week", "Keep the wound clean and dry"] },
  }),
  make({
    path: "/breast-lump-treatment-faridabad",
    title: "Breast Lumps",
    topic: "breast lumps",
    images: [img("svc-consult-2.jpg"), img("svc-ultrasound.jpg")],
    summary: "Evaluation of breast lumps with imaging and biopsy, and surgical removal when needed.",
    intro:
      "Most breast lumps — especially in younger women — are not cancer; fibroadenomas and cysts are common. But every new lump should be examined, with an ultrasound or mammogram and a biopsy when needed, so that anything serious is caught early.",
    qa: [
      { q: "What happens at the visit?", a: "A clinical breast examination, followed by an ultrasound and/or mammogram. A needle biopsy may be advised to confirm the diagnosis." },
      { q: "Does every lump need surgery?", a: "No. Many benign lumps can be watched. Surgery is advised for growing or uncomfortable lumps, or when the diagnosis is uncertain." },
    ],
    facts: { intro: "See a doctor promptly for:", list: ["A new lump in the breast or armpit", "Nipple discharge or a pulled-in nipple", "Skin dimpling or redness"] },
  }),
  make({
    path: "/diabetic-foot-wound-care-faridabad",
    title: "Diabetic Foot & Wounds",
    topic: "diabetic foot problems and non-healing wounds",
    images: [img("svc-dressing.jpg"), img("ward.jpg")],
    summary: "Care of diabetic foot ulcers, infections and non-healing wounds.",
    intro:
      "People with diabetes can develop foot ulcers and infections that heal slowly and can become serious. Early wound care — cleaning, removing dead tissue, controlling infection and sugar — helps save the foot.",
    qa: [
      { q: "What are warning signs?", list: ["A wound that isn't healing in 1–2 weeks", "Redness, swelling, pus or a bad smell", "Black or discoloured skin", "Fever with a foot wound"] },
      { q: "How are diabetic wounds treated?", a: "With regular dressings, debridement of dead tissue, antibiotics when needed, offloading pressure from the wound, and close sugar control with your physician." },
    ],
    facts: { list: ["Check your feet daily", "Never walk barefoot", "Keep sugar under control", "Treat small cuts early"] },
  }),
  make({
    path: "/abscess-minor-surgery-faridabad",
    title: "Abscess & Minor Procedures",
    topic: "abscesses, ingrown toenails and other minor surgical problems",
    images: [img("svc-dressing.jpg"), img("svc-consult.jpg")],
    summary: "Drainage of abscesses, ingrown toenails, wound stitching and other minor procedures.",
    intro:
      "Many surgical problems can be treated quickly as minor procedures: draining a painful abscess, treating an ingrown toenail, stitching cuts and removing small skin lesions.",
    qa: [
      { q: "Do abscesses need surgery?", a: "A collection of pus usually needs to be drained; antibiotics alone often don't work. Drainage gives quick relief." },
      { q: "Are these done the same day?", a: "Most minor procedures are done in the hospital as day-care under local anaesthesia." },
    ],
    facts: { list: ["Most minor procedures take under an hour", "Dressings as advised until healed", "Seek care early for spreading redness or fever"] },
  }),
];

/** Lookup by any of a service's URLs. */
export const serviceByPath: Record<string, { service: Service; alias: boolean }> = (() => {
  const map: Record<string, { service: Service; alias: boolean }> = {};
  for (const s of services) {
    map[s.path] = { service: s, alias: false };
    for (const a of s.aliases) map[a] = { service: s, alias: true };
  }
  return map;
})();
