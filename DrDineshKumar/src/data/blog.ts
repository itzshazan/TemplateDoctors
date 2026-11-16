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
  "loose-motion-diarrhoea-treatment-gurugram": `
<p>Loose motion, also known as diarrhoea, can occur due to infections, contaminated food or water, food intolerance or certain medicines. Frequent loose stools can lead to dehydration, weakness and loss of essential salts, so timely care is important.</p>
<h2>Replace lost fluids first</h2>
<p>Drinking safe fluids and using oral rehydration solution (ORS) helps replace lost water and salts. Take small, frequent sips — especially if you are also vomiting. Coconut water, buttermilk, rice water and dal water are also helpful. Avoid sugary soft drinks and packaged juices, which can make loose motion worse.</p>
<h2>Don't self-medicate with antibiotics</h2>
<p>Most episodes of loose motion are caused by viruses and settle in 2–3 days. Antibiotics are not needed in every case, and taking them unnecessarily can cause side effects and resistance. A doctor can decide whether an antibiotic is actually required.</p>
<h2>When to see a doctor urgently</h2>
<ul>
<li>Diarrhoea lasting more than 2 days, or getting worse</li>
<li>Blood in the stool or black stools</li>
<li>Unable to keep fluids down</li>
<li>Very little urine, dizziness, confusion or extreme weakness</li>
<li>High fever, or loose motion in older adults, young children or people with diabetes</li>
</ul>
<p>At Kashvi Mediclinic, a medical assessment helps identify the likely cause, check for dehydration and guide the right treatment for your symptoms and overall health.</p>`,
  "diabetes-daily-habits-sugar-control": `
<p>Medicines are only one part of diabetes care. What you do every day has a huge effect on your sugar levels. These seven habits make the biggest difference.</p>
<ol>
<li><strong>Walk after meals.</strong> A 10–15 minute walk after lunch and dinner lowers post-meal sugar.</li>
<li><strong>Fill half your plate with vegetables.</strong> Keep rice and roti to a quarter of the plate, with dal, paneer, eggs or chicken for protein.</li>
<li><strong>Cut sugary drinks.</strong> Sweetened tea, juices and soft drinks raise sugar quickly. Switch gradually to less sugar.</li>
<li><strong>Take medicines on time.</strong> Never skip or double doses without asking your doctor.</li>
<li><strong>Check your sugar.</strong> Note fasting and post-meal readings and bring them to every visit.</li>
<li><strong>Look after your feet.</strong> Check daily for cuts or blisters, and never walk barefoot.</li>
<li><strong>Sleep well and manage stress.</strong> Poor sleep and stress both push sugar up.</li>
</ol>
<p>Get your HbA1c checked every 3 months until your sugar is controlled, and have your eyes, kidneys and cholesterol checked once a year.</p>`,
  "high-blood-pressure-silent-killer": `
<p>High blood pressure usually causes no symptoms at all — yet over years it damages the heart, brain, kidneys and eyes. That is why it is called the silent killer.</p>
<h2>Know your numbers</h2>
<p>A reading of 140/90 or above in the clinic, on more than one occasion, usually means high blood pressure. Everyone over 30 should have their BP checked at least once a year.</p>
<h2>Simple steps that lower BP</h2>
<ul>
<li>Reduce salt — including pickles, papad, namkeen and packaged foods</li>
<li>Walk briskly for 30 minutes on most days</li>
<li>Lose weight if you are overweight</li>
<li>Limit alcohol and stop smoking</li>
<li>Take BP medicines regularly, even when you feel well</li>
</ul>
<h2>Warning signs that need emergency care</h2>
<p>Severe headache, chest pain, breathlessness, sudden weakness of one side, or slurred speech need urgent hospital care — call 112.</p>`,
  "thyroid-tests-symptoms-explained": `
<p>The thyroid gland in the neck controls how fast the body uses energy. When it is underactive or overactive, many parts of the body are affected.</p>
<h2>Common symptoms</h2>
<ul>
<li><strong>Underactive thyroid (hypothyroidism):</strong> tiredness, weight gain, feeling cold, dry skin, hair fall, constipation, low mood</li>
<li><strong>Overactive thyroid (hyperthyroidism):</strong> weight loss, palpitations, anxiety, tremor, heat intolerance, loose stools</li>
</ul>
<h2>Which tests are needed?</h2>
<p>TSH is the main screening test. T3, T4 and thyroid antibodies are added when needed, and an ultrasound is used if there is a swelling in the neck.</p>
<h2>Treatment</h2>
<p>Hypothyroidism is treated with a daily thyroxine tablet taken on an empty stomach. Doses are adjusted with TSH checks every 6–12 months. Hyperthyroidism is treated with medicines and close follow-up.</p>
<p>If you are planning a pregnancy, get your TSH checked beforehand — thyroid control is important for the baby's development.</p>`,
};


export const POSTS_PER_PAGE = 10;

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export const dayMonth = (iso: string) => {
  const d = new Date(iso);
  return { day: String(d.getDate()).padStart(2, "0"), month: d.toLocaleDateString("en-US", { month: "short" }) };
};
