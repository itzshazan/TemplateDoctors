export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Category = { slug: string; name: string };

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  category: string; // Category slug
  image: string;
  body: Block[];
};

export const categories: Category[] = [
  { slug: "pregnancy", name: "Pregnancy" },
  { slug: "periods-pcos", name: "Periods & PCOS" },
  { slug: "womens-health", name: "Women's Health" },
];

const img = (file: string) => `/images/${file}`;

const SEE_DOCTOR =
  "This article is general information and is not a substitute for a consultation. If you are worried, please visit the clinic.";

// Newest first, matching the order of the blog listing.
export const posts: Post[] = [
  {
    slug: "danger-signs-in-pregnancy",
    title: "Danger Signs in Pregnancy Every Family Should Know",
    date: "2026-10-20",
    category: "pregnancy",
    image: img("g-bp-check.jpg"),
    body: [
      { type: "p", text: "Most pregnancies go smoothly, but a few warning signs need immediate medical attention. Knowing them — and making sure the whole family knows them — can protect both mother and baby." },
      { type: "h3", text: "Go to the doctor or hospital immediately if you notice" },
      { type: "ul", items: [
        "Bleeding from the vagina at any stage of pregnancy",
        "A gush or steady leak of fluid",
        "Severe headache, blurred vision or swelling of the face and hands",
        "Fits (convulsions) or fainting",
        "Severe abdominal pain",
        "High fever",
        "Reduced or no baby movements after 28 weeks",
      ] },
      { type: "h3", text: "Keep these ready" },
      { type: "ul", items: [
        "Your antenatal card and all scan and blood reports",
        "The phone number of your doctor and nearest hospital",
        "A plan for transport, day or night",
      ] },
      { type: "p", text: "Regular antenatal check-ups pick up problems like high blood pressure, anaemia and gestational diabetes early, before they become dangerous. " + SEE_DOCTOR },
    ],
  },
  {
    slug: "pcos-symptoms-and-treatment",
    title: "PCOS: Symptoms, Diagnosis and What Really Helps",
    date: "2026-10-05",
    category: "periods-pcos",
    image: img("g-consultation.jpg"),
    body: [
      { type: "p", text: "Polycystic ovary syndrome (PCOS or PCOD) is one of the most common hormonal conditions in young women. It affects periods, skin, weight and fertility — but with the right care it can be controlled very well." },
      { type: "h3", text: "Common signs" },
      { type: "ul", items: ["Irregular or missed periods", "Acne and oily skin", "Extra hair on the face or body", "Weight gain, especially around the waist", "Difficulty getting pregnant"] },
      { type: "h3", text: "How it is diagnosed" },
      { type: "p", text: "PCOS is diagnosed from your symptoms, an ultrasound of the ovaries and blood tests for hormones, thyroid and sugar. Not every woman with cysts on ultrasound has PCOS, and not every woman with PCOS has visible cysts." },
      { type: "h3", text: "What helps" },
      { type: "ol", items: [
        "Regular exercise — even 30 minutes of brisk walking a day.",
        "Fewer sugary foods, refined flour and fried snacks; more vegetables, dal and protein.",
        "A 5–10% weight loss, which often brings periods back to a regular cycle.",
        "Medicines to regulate periods, control acne and hair growth, or help with ovulation when planning a pregnancy.",
      ] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "irregular-periods-when-to-worry",
    title: "Irregular Periods: What Is Normal and When to Worry",
    date: "2026-09-18",
    category: "periods-pcos",
    image: img("g-reception.jpg"),
    body: [
      { type: "p", text: "A normal menstrual cycle lasts between 21 and 35 days, with bleeding for 2 to 7 days. Small variations from month to month are normal, especially in the first few years after periods start and in the years before menopause." },
      { type: "h3", text: "See a gynaecologist if you have" },
      { type: "ul", items: [
        "Cycles shorter than 21 days or longer than 35 days",
        "Bleeding for more than 7 days, or soaking a pad every hour",
        "Bleeding between periods or after intercourse",
        "No periods for three months when not pregnant",
        "Severe pain that stops you from daily activities",
      ] },
      { type: "h3", text: "Track your cycle" },
      { type: "p", text: "Note the first day of every period, how many days it lasts and how heavy it is. Bring this diary to your visit — it makes diagnosis much easier. " + SEE_DOCTOR },
    ],
  },
  {
    slug: "anaemia-and-iron-for-women",
    title: "Anaemia in Women: Signs, Food and Iron Tablets",
    date: "2026-09-02",
    category: "womens-health",
    image: img("g-ultrasound.jpg"),
    body: [
      { type: "p", text: "Anaemia — a low haemoglobin level — is very common in Indian women, especially during pregnancy and in women with heavy periods. It causes tiredness, breathlessness and poor concentration, and in pregnancy it can affect the baby's growth." },
      { type: "h3", text: "Signs of anaemia" },
      { type: "ul", items: ["Tiredness and weakness", "Breathlessness on climbing stairs", "Pale skin, nails or eyelids", "Hair fall", "Dizziness or headaches"] },
      { type: "h3", text: "Iron-rich foods" },
      { type: "ul", items: ["Green leafy vegetables like spinach, methi and bathua", "Jaggery, dates and raisins", "Dals, chana and rajma", "Eggs, chicken and fish for non-vegetarians"] },
      { type: "p", text: "Take iron tablets with lemon water or orange juice to improve absorption — not with tea, coffee or milk. A simple blood test confirms anaemia and its cause. " + SEE_DOCTOR },
    ],
  },
  {
    slug: "pap-smear-and-hpv-vaccine",
    title: "Pap Smear and HPV Vaccine: Protecting Against Cervical Cancer",
    date: "2026-08-20",
    category: "womens-health",
    image: img("g-waiting.jpg"),
    body: [
      { type: "p", text: "Cervical cancer is one of the most common cancers in Indian women — and one of the most preventable. Two simple steps make the biggest difference: the HPV vaccine and regular Pap smear screening." },
      { type: "h3", text: "HPV vaccine" },
      { type: "p", text: "The vaccine protects against the virus that causes most cervical cancers. It works best when given to girls between 9 and 14 years of age, and can also be given to young women." },
      { type: "h3", text: "Pap smear" },
      { type: "ul", items: [
        "A quick, simple test that checks cells from the cervix",
        "Recommended every 3 years for women aged 21–65, or as advised",
        "Best done when you are not on your period",
      ] },
      { type: "p", text: "Bleeding after intercourse or after menopause should always be checked, even if your last Pap smear was normal. " + SEE_DOCTOR },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
  return `${day} ${month}, ${d.getUTCFullYear()}`;
}

export function excerpt(post: Post, max = 260) {
  const first = post.body.find((b) => b.type === "p");
  const text = first && first.type === "p" ? first.text : "";
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

/** Archive months, oldest first, matching the original sidebar order. */
export function archiveMonths() {
  const seen = new Map<string, { year: number; month: number }>();
  for (const p of posts) {
    const [y, m] = p.date.split("-").map(Number);
    seen.set(`${y}-${m}`, { year: y, month: m });
  }
  return [...seen.values()].sort((a, b) => a.year - b.year || a.month - b.month);
}

export function monthLabel(year: number, month: number) {
  const d = new Date(Date.UTC(year, month - 1, 1));
  return `${d.toLocaleString("en-US", { month: "short", timeZone: "UTC" })} ${year}`;
}
