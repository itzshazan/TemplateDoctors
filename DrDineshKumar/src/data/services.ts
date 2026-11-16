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
  "Careful history and clinical examination",
  "Tests only when they change the treatment",
  "Clear explanation of diagnosis and options",
  "Regular follow-up for long-term conditions",
];

const welcome = (topic: string) =>
  `At Kashvi Mediclinic, Dr. Dinesh Kumar looks after patients with ${topic} with a careful assessment, clear explanations in simple language and a treatment plan built around each patient's health, routine and other conditions.`;

type ServiceInput = Omit<Service, "detail" | "date" | "aliases"> & { topic: string; detail?: string };

const make = (s: ServiceInput): Service => ({
  ...s,
  aliases: [],
  date: "2026-10-01",
  detail: s.detail ?? welcome(s.topic),
});

export const services: Service[] = [
  make({
    path: "/diabetes-treatment-gurugram",
    title: "Diabetes Care",
    topic: "type 2 and type 1 diabetes, prediabetes and diabetes in older adults",
    images: [img("svc-diabetes.jpg"), img("diet.jpg")],
    summary: "Diagnosis, medicines, insulin guidance and regular HbA1c follow-up to keep sugar in control and prevent complications.",
    intro:
      "Diabetes means the body cannot keep blood sugar in the normal range. Left uncontrolled, high sugar slowly damages the eyes, kidneys, nerves, heart and feet. With the right medicines, diet and follow-up, most people keep their sugar in a healthy range and avoid these complications.",
    qa: [
      {
        q: "What are the warning signs of diabetes?",
        list: [
          "Feeling very thirsty and passing urine often",
          "Tiredness, weight loss or increased hunger",
          "Blurred vision",
          "Slow-healing wounds or frequent infections",
          "Tingling or burning in the feet",
        ],
      },
      {
        q: "Which tests are used?",
        a: "Fasting and post-meal blood sugar, and HbA1c — a 3-month average of blood sugar. Kidney function, urine protein, cholesterol and an eye check are added to look for early complications.",
      },
      {
        q: "Will I need insulin?",
        a: "Many people with type 2 diabetes are controlled with tablets, diet and exercise. Insulin is advised when sugar remains high despite tablets, during illness, or in type 1 diabetes. Every step — including how to inject and adjust doses — is explained clearly.",
      },
      {
        q: "How often should I get checked?",
        list: ["HbA1c every 3 months until controlled, then every 3–6 months", "Kidney, cholesterol and eye checks once a year", "Foot examination at every visit if you have numbness"],
      },
    ],
    facts: {
      intro: "Good diabetes control usually means:",
      list: ["HbA1c around 7% or as advised", "Fasting sugar 80–130 mg/dL", "BP below 130/80", "Daily walk of 30 minutes"],
      outro: "Targets are personalised — especially for older adults.",
    },
  }),
  make({
    path: "/high-blood-pressure-treatment-gurugram",
    title: "High Blood Pressure",
    topic: "high blood pressure (hypertension)",
    images: [img("svc-bp.jpg"), img("svc-heart.jpg")],
    summary: "Accurate BP checks and treatment plans that protect your heart, brain and kidneys over the long term.",
    intro:
      "High blood pressure rarely causes symptoms, yet over years it raises the risk of heart attack, stroke and kidney disease. Correct measurement, lifestyle changes and the right medicines bring BP under control for almost everyone.",
    qa: [
      { q: "What BP reading is considered high?", a: "A clinic reading of 140/90 or above on more than one occasion is usually high. Home readings of 135/85 or above are also considered raised." },
      { q: "Does high BP have symptoms?", a: "Usually not. Some people get headaches, giddiness or nosebleeds, but most feel completely well — which is why regular checks are important after 30." },
      {
        q: "What lifestyle changes help?",
        list: ["Cut down salt, pickles, papad and packaged snacks", "Walk briskly for 30 minutes on most days", "Lose weight if overweight", "Limit alcohol and stop smoking", "Sleep 7–8 hours"],
      },
      { q: "Will I need tablets for life?", a: "Many people do need long-term medicines, but doses can sometimes be reduced with weight loss and lifestyle changes. Never stop BP tablets on your own." },
    ],
    facts: { intro: "Seek urgent care if high BP comes with:", list: ["Severe headache or confusion", "Chest pain or breathlessness", "Weakness of one side or slurred speech"] },
  }),
  make({
    path: "/thyroid-treatment-gurugram",
    title: "Thyroid Disorders",
    topic: "thyroid disorders",
    images: [img("svc-thyroid.jpg"), img("svc-checkup.jpg")],
    summary: "Testing and treatment for underactive and overactive thyroid, with dose adjustment and follow-up.",
    intro:
      "The thyroid gland controls the body's metabolism. An underactive thyroid (hypothyroidism) can cause tiredness, weight gain and feeling cold, while an overactive thyroid (hyperthyroidism) can cause weight loss, palpitations and anxiety. Both are diagnosed with simple blood tests and treated effectively.",
    qa: [
      { q: "Which test checks the thyroid?", a: "TSH is the main screening test, with T3 and T4 added when needed. Antibody tests and a neck ultrasound are used in some cases." },
      { q: "Do I have to take thyroid tablets forever?", a: "Hypothyroidism usually needs lifelong thyroxine, with dose checks every 6–12 months. Hyperthyroidism is treated with medicines and sometimes other options." },
      { q: "How should thyroxine be taken?", list: ["Empty stomach, 30–60 minutes before breakfast", "Separate from calcium, iron and antacids by 4 hours", "Same time every day"] },
    ],
    facts: { list: ["Thyroid problems are much more common in women", "Check TSH if planning a pregnancy", "Symptoms often improve within weeks of treatment"] },
  }),
  make({
    path: "/fever-infection-treatment-gurugram",
    title: "Fever & Infections",
    topic: "fever and infections",
    images: [img("svc-fever.jpg"), img("svc-checkup.jpg")],
    summary: "Evaluation of viral fever, dengue, typhoid, malaria, urine and throat infections, with the right tests and treatment.",
    intro:
      "Fever is the body's response to infection. Most fevers are viral and settle in a few days, but dengue, malaria, typhoid and urinary infections need specific tests and treatment. A proper examination helps decide which tests are needed and whether antibiotics are required at all.",
    qa: [
      {
        q: "When should I see a doctor for fever?",
        list: ["Fever lasting more than 2–3 days", "Fever with severe body ache, rash or bleeding", "Fever with burning urine or back pain", "Fever in older adults or people with diabetes"],
      },
      { q: "Should I take antibiotics for fever?", a: "Not usually. Most fevers are viral and antibiotics don't help. They are prescribed only when a bacterial infection is suspected or confirmed." },
      { q: "How is dengue managed?", a: "With rest, plenty of fluids, paracetamol for fever and regular platelet monitoring. Avoid painkillers like ibuprofen. Warning signs need hospital care." },
    ],
    facts: { intro: "Go to hospital immediately for:", list: ["Bleeding gums or black stools", "Severe abdominal pain or persistent vomiting", "Drowsiness, confusion or breathlessness"] },
  }),
  make({
    path: "/cough-breathing-problems-gurugram",
    title: "Cough, Cold & Breathing Problems",
    topic: "cough, cold, asthma and other breathing problems",
    images: [img("svc-respiratory.jpg"), img("svc-fever.jpg")],
    summary: "Care for persistent cough, sore throat, asthma, bronchitis and seasonal allergies.",
    intro:
      "Coughs and colds are common, especially with Gurugram's seasonal pollution. A cough that lasts beyond 2–3 weeks, wheezing or breathlessness needs a proper assessment to look for asthma, bronchitis, allergies or infection.",
    qa: [
      { q: "When is a cough serious?", list: ["Lasting more than 3 weeks", "With blood in sputum", "With weight loss or night sweats", "With breathlessness or chest pain"] },
      { q: "Can pollution cause breathing problems?", a: "Yes. Poor air quality worsens asthma, allergies and COPD. Masks, air purifiers, avoiding early-morning walks on high-AQI days and correct inhaler use all help." },
      { q: "Are inhalers safe?", a: "Inhalers deliver a tiny dose directly to the lungs and are the safest, most effective treatment for asthma. The correct technique is taught at the clinic." },
    ],
    facts: { list: ["Most colds settle in 7–10 days", "Steam and warm fluids ease congestion", "Check AQI before outdoor exercise"] },
  }),
  make({
    path: "/stomach-digestive-problems-gurugram",
    title: "Stomach & Digestive Problems",
    topic: "loose motion, acidity, vomiting and other digestive problems",
    images: [img("svc-digestive.jpg"), img("diet.jpg")],
    summary: "Care for loose motion, acidity, vomiting and stomach pain, including assessment of dehydration.",
    intro:
      "Loose motion, vomiting, acidity and stomach pain can come from infections, contaminated food or water, food intolerance or certain medicines. Frequent loose stools can quickly lead to dehydration and weakness, so timely assessment and the right fluids matter.",
    qa: [
      { q: "How do I prevent dehydration?", a: "Drink safe fluids and ORS in small, frequent sips. Coconut water, buttermilk and rice water also help. Avoid sugary soft drinks." },
      { q: "Do I need antibiotics for loose motion?", a: "Usually not. Most cases are viral and settle with fluids. Antibiotics are used only for specific infections, so avoid self-medicating." },
      { q: "What about frequent acidity?", list: ["Eat smaller meals and avoid late dinners", "Cut down tea, coffee, spicy and fried foods", "Don't lie down soon after eating", "See the doctor if it persists or you lose weight"] },
    ],
    facts: { intro: "Seek urgent care if you notice:", list: ["Blood in stool or vomit", "Unable to keep fluids down", "Very little urine, dizziness or confusion"] },
  }),
  make({
    path: "/cholesterol-heart-risk-gurugram",
    title: "Cholesterol & Heart Risk",
    topic: "high cholesterol and heart-disease risk",
    images: [img("svc-heart.jpg"), img("diet.jpg")],
    summary: "Lipid profile review, heart-risk assessment and treatment to prevent heart attacks and strokes.",
    intro:
      "High cholesterol, diabetes, BP, smoking and family history together decide your risk of heart attack and stroke. Assessing these risks early — and treating them — is one of the most effective things you can do for long-term health.",
    qa: [
      { q: "What does a lipid profile show?", a: "Total cholesterol, LDL ('bad'), HDL ('good') cholesterol and triglycerides. Your LDL target depends on your overall heart risk." },
      { q: "Are statins safe?", a: "Statins are among the most studied medicines in the world. For people at higher risk, they significantly reduce heart attacks and strokes. Side effects are uncommon and monitored." },
      { q: "When should I get an ECG?", a: "If you have chest discomfort, palpitations or breathlessness, or as part of a check-up if you have diabetes, BP or a strong family history." },
    ],
    facts: { list: ["Check cholesterol from age 30, earlier with diabetes", "Walking 150 minutes a week lowers heart risk", "Chest pain needs emergency care — call 112"] },
  }),
  make({
    path: "/health-checkup-gurugram",
    title: "Health Check-ups",
    topic: "preventive health check-ups",
    images: [img("svc-checkup.jpg"), img("svc-bp.jpg")],
    summary: "Preventive check-ups and blood-test review to catch diabetes, BP, thyroid and cholesterol problems early.",
    intro:
      "Many serious conditions — diabetes, high BP, high cholesterol, thyroid problems and kidney disease — develop silently. A preventive check-up with a doctor's review of your results catches them early, when they are easiest to treat.",
    qa: [
      { q: "What does a basic check-up include?", list: ["BP, weight and BMI", "Blood sugar and HbA1c", "Lipid profile", "Thyroid (TSH)", "Kidney and liver function", "Complete blood count and vitamin levels where relevant"] },
      { q: "How often should I get checked?", a: "Adults over 30 should get a basic check-up every year, and more often if they have diabetes, BP or a family history." },
      { q: "Can you review reports from a lab?", a: "Yes. Bring your reports and the doctor will explain what they mean and whether any treatment or follow-up is needed." },
    ],
    facts: { list: ["Fast 10–12 hours for sugar and lipid tests", "Bring previous reports for comparison", "Carry a list of your current medicines"] },
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
