import data from "./posts.json";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  categories: { name: string; slug: string }[];
  image: string;
  thumb: string;
  card: string;
}

export const posts: PostMeta[] = data.posts;
export const categories: { name: string; slug: string }[] = data.categories;

export const postBySlug = new Map(posts.map((p) => [p.slug, p]));

/**
 * Full article bodies, keyed by post slug. Add HTML here (e.g. exported from WordPress)
 * and it will render inside the single-post template:
 *
 *   "ovulation-symptoms-every-woman-should-know": `<p>…</p><h2>…</h2>`,
 */
export const postContent: Record<string, string> = {
  "hernia-does-not-heal-on-its-own": `
<p>A hernia is a bulge caused by tissue pushing through a weak spot in the abdominal wall — most often in the groin or at the navel. Unlike many problems, a hernia does not heal by itself: the weak spot stays, and the bulge usually grows over time.</p>
<h2>Why repair it?</h2>
<p>Small hernias with no symptoms can sometimes be watched, but most are repaired because they cause discomfort and carry a small risk of the intestine getting trapped (strangulation), which is an emergency.</p>
<h2>Keyhole repair</h2>
<p>Laparoscopic repair places a mesh through small cuts. Most patients walk the same day and return to desk work within a week.</p>
<h2>Go to hospital urgently if</h2>
<ul><li>The bulge becomes painful and cannot be pushed back</li><li>You have vomiting or a swollen abdomen</li><li>The skin over it turns red or dark</li></ul>`,
  "gallbladder-stones-do-you-need-surgery": `
<p>Gallstones are very common and often found by chance on an ultrasound. Whether you need surgery depends on whether they cause symptoms.</p>
<h2>Stones without symptoms</h2>
<p>Many people with silent stones never develop problems and can simply be watched.</p>
<h2>Stones that cause pain or complications</h2>
<p>Attacks of upper-abdominal pain after meals, infection of the gallbladder, jaundice or pancreatitis are reasons to remove the gallbladder. This is usually done laparoscopically with a 1–2 day hospital stay.</p>
<h2>Life after surgery</h2>
<p>You can live normally without a gallbladder. A light, low-fat diet for the first few weeks helps the body adjust.</p>`,
  "piles-simple-steps-that-help": `
<p>Piles (haemorrhoids) are swollen veins around the anus. They can cause bleeding, itching and discomfort, but most improve with simple steps.</p>
<ul><li>Eat more fibre: fruits, vegetables, dal and whole grains</li><li>Drink 2–3 litres of water a day</li><li>Don't strain or sit on the toilet for long</li><li>Warm sitz baths can ease discomfort</li></ul>
<p>If symptoms continue, procedures such as banding or surgery may be advised. Rectal bleeding should always be examined by a doctor, especially after the age of 40 or with weight loss or a change in bowel habit.</p>`,
};

export const POSTS_PER_PAGE = 10;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export const dayMonth = (iso: string) => {
  const d = new Date(iso);
  return { day: String(d.getDate()).padStart(2, "0"), month: d.toLocaleDateString("en-US", { month: "short" }) };
};
