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
  { slug: "joints", name: "Joints & Arthritis" },
  { slug: "spine", name: "Back & Spine" },
  { slug: "injuries", name: "Injuries" },
];

const img = (file: string) => `/images/${file}`;

const SEE_DOCTOR = "This article is general information and is not a substitute for a consultation.";

export const posts: Post[] = [
  {
    slug: "knee-pain-after-40",
    title: "Knee Pain After 40: Is It Arthritis?",
    date: "2026-10-18",
    category: "joints",
    image: img("g-1.jpg"),
    body: [
      { type: "p", text: "Knee pain that is worse on stairs, after sitting for long or first thing in the morning is often due to osteoarthritis — wear of the cartilage that cushions the joint." },
      { type: "h3", text: "What helps" },
      { type: "ul", items: ["Strengthening the thigh muscles with simple daily exercises", "Losing even a few kilos of extra weight", "Avoiding squatting and sitting cross-legged on the floor", "Medicines for flare-ups, and injections in selected cases"] },
      { type: "p", text: "Knee replacement is considered when pain limits walking despite these measures. " + SEE_DOCTOR },
    ],
  },
  {
    slug: "back-pain-dos-and-donts",
    title: "Lower Back Pain: Do's and Don'ts",
    date: "2026-10-02",
    category: "spine",
    image: img("g-2.jpg"),
    body: [
      { type: "p", text: "Most lower back pain is due to muscle strain or posture and settles within a few weeks." },
      { type: "h3", text: "Do" },
      { type: "ul", items: ["Stay gently active — long bed rest slows recovery", "Use a firm chair with back support", "Lift by bending the knees, not the back"] },
      { type: "h3", text: "See a doctor urgently if" },
      { type: "ul", items: ["Pain spreads down the leg with numbness or weakness", "You lose bladder or bowel control", "Pain follows a fall or comes with fever or weight loss"] },
      { type: "p", text: SEE_DOCTOR },
    ],
  },
  {
    slug: "first-aid-for-sprains-and-fractures",
    title: "Sprain or Fracture? First Aid Until You See a Doctor",
    date: "2026-09-15",
    category: "injuries",
    image: img("g-3.jpg"),
    body: [
      { type: "p", text: "After a fall or twist, it can be hard to tell a sprain from a fracture. An X-ray is the only way to be sure." },
      { type: "ol", items: ["Rest the injured part and don't put weight on it", "Apply ice wrapped in a cloth for 15–20 minutes", "Support it with a sling or rolled newspaper splint", "Keep it raised to reduce swelling"] },
      { type: "p", text: "Go to hospital immediately for deformity, a wound over the injury, numbness, or a suspected neck or back injury. " + SEE_DOCTOR },
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
