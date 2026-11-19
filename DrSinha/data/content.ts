// All text for the site lives here so it can be edited in one place.
// Items marked "CONFIRM" in IMAGE-PROMPTS.md must be checked with the doctor before going live.

const IMG = "/images";

export const site = {
  name: "Dr. Sinha",
  // CONFIRM: possibly "Dr. A.K. Sinha". Change this once confirmed and the whole site updates.
  fullName: "Dr. Sinha",
  clinic: "Dr Sinha Eye Clinic",
  role: "Eye Specialist (Ophthalmologist)",
  tagline: "Eye Specialist in Faridabad",
  city: "Faridabad",
  degrees: "MBBS, DO, Fellowship in Contact Lenses",
  experienceYears: 51,
  practisingSince: 1975,
  // Phone is not on the Google listing yet. Leave empty and the site shows "Get Directions" instead of call buttons.
  phone: "",
  phoneHref: "",
  whatsappNumber: "",
  email: "",
  address: "Plot No. 409, Sector 15, Faridabad, Haryana 121007",
  shortAddress: "Plot No. 409, Sector 15, Faridabad",
  mapsUrl:
    "https://www.google.com/maps/place/Dr+Sinha+Eye+Clinic/data=!4m7!3m6!1s0x390cdc5290f77087:0x23a99ada2c240600!8m2!3d28.4016632!4d77.3218754!16s%2Fg%2F11sb6pzg2z!19sChIJh3D3kFLcDDkRAAYkLNqaqSM",
  mapEmbed: "https://maps.google.com/maps?q=28.4016632,77.3218754&z=16&output=embed",
  // Not found online. Shown as "Call or visit to confirm timings" while empty.
  hours: [] as string[],
  logo: `${IMG}/logo.svg`,
  heroBg: `${IMG}/hero-bg.jpg`,
  // AI-generated stock-style photos (no doctor faces). Replace with real photos of Dr. Sinha and the clinic when available.
  heroImage: `${IMG}/hero.jpg`,
  aboutImage: `${IMG}/about.jpg`,
  priorityImage: `${IMG}/waiting.jpg`,
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
};

export const hasPhone = site.phone.trim().length > 0;
export const whatsappLink = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(`Hello ${site.name}, I would like to book an eye check-up.`)}`
  : "";

export const otherPractice = {
  name: "Centre for Sight",
  role: "Senior Consultant – Cataract, Glaucoma & Oculoplasty",
  address: "Sector 16A, Faridabad",
};

export const hero = {
  eyebrow: `Trusted Eye Care Since ${site.practisingSince}`,
  title: "Clear Vision With Experience & Compassion",
  text: `${site.name} is a senior ophthalmologist in Faridabad with ${site.experienceYears} years of experience in cataract, glaucoma, oculoplasty and contact lens care. Every patient gets a careful, unhurried eye examination and honest advice.`,
  boxTitle: "We're Always Here For Your Eye Care",
  boxText: `${site.name} is committed to safe, patient-focused eye care with precision, patience and five decades of clinical experience.`,
};

export const about = {
  heading: site.fullName,
  paragraphs: [
    `${site.fullName} is a senior Eye Specialist (Ophthalmologist) who runs ${site.clinic} at ${site.shortAddress}. With ${site.experienceYears} years in practice, he has looked after generations of families in Faridabad, from a child's first eye test to cataract care in later life.`,
    `He completed his MBBS at Ranchi University, a Diploma in Ophthalmology (DO) at Patna University and a Fellowship in Contact Lenses at the Contact Lens Foundation, Calcutta. He is also listed as ${otherPractice.role} at ${otherPractice.name}, ${otherPractice.address}.`,
  ],
  highlights: [
    `${site.experienceYears}+ years of clinical experience`,
    "Cataract, glaucoma & oculoplasty",
    "Fellowship-trained in contact lenses",
    "Complete eye check-ups for all ages",
  ],
};

export const stats = [
  { value: site.experienceYears, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "", label: "Qualifications" },
  { value: 2, suffix: "", label: "Practice Locations" },
  { value: 8, suffix: "", label: "Eye Care Services" },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  intro: string;
  whoNeeds: string[];
  whatToExpect: { title: string; text: string }[];
  aftercare: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "cataract-surgery",
    icon: "lens",
    title: "Cataract Evaluation & Surgery",
    short:
      "Assessment of cloudy or blurred vision and stitch-less cataract surgery with a foldable lens implant to restore clear sight.",
    intro:
      "A cataract is a clouding of the natural lens inside the eye. It develops slowly, making vision hazy, colours dull and night driving difficult. Modern cataract surgery replaces the cloudy lens with a clear artificial lens (IOL), usually through a tiny incision, and most patients go home the same day.",
    whoNeeds: [
      "Blurred, cloudy or foggy vision that glasses no longer fix",
      "Glare or haloes around lights, especially at night",
      "Frequent changes in spectacle power",
      "Colours looking faded or yellowish",
      "Difficulty reading, driving or recognising faces",
    ],
    whatToExpect: [
      { title: "Detailed examination", text: "Vision test, slit-lamp examination, eye pressure and a dilated check of the retina to confirm the cataract and rule out other problems." },
      { title: "Lens measurement", text: "Biometry measures the eye so the right power of intraocular lens (IOL) can be chosen for you." },
      { title: "Day-care surgery", text: "The cloudy lens is removed and the new lens placed under local anaesthesia, usually in 15–30 minutes." },
      { title: "Follow-up", text: "Review visits the next day and over the following weeks, and new glasses if needed once the eye has settled." },
    ],
    aftercare: [
      "Use the prescribed eye drops exactly as advised",
      "Wear the protective shield while sleeping for the first week",
      "Avoid rubbing the eye, swimming and dusty places for a few weeks",
      "Report pain, increasing redness or a sudden drop in vision immediately",
    ],
    faqs: [
      { q: "When is the right time for cataract surgery?", a: "When the cataract starts to affect daily activities such as reading, driving or work. There is no need to wait for it to become 'ripe'." },
      { q: "Is cataract surgery painful?", a: "No. The eye is numbed with drops or a local injection. Most patients feel only mild pressure." },
      { q: "Will I need glasses after surgery?", a: "Many patients need glasses only for reading or fine work. Lens options that reduce dependence on glasses can be discussed at your consultation." },
    ],
  },
  {
    slug: "glaucoma-care",
    icon: "gauge",
    title: "Glaucoma Diagnosis & Management",
    short:
      "Early detection of glaucoma through eye-pressure checks and optic nerve evaluation, with long-term treatment to protect vision.",
    intro:
      "Glaucoma damages the optic nerve, often because of raised pressure inside the eye. It usually causes no symptoms until a large part of the side vision is lost, and that loss cannot be reversed. Regular check-ups and timely treatment are the only way to protect sight.",
    whoNeeds: [
      "Anyone over 40, especially if it has been a while since the last eye check-up",
      "A family history of glaucoma",
      "Diabetes, high blood pressure or high myopia (minus power)",
      "Long-term use of steroid medicines or eye drops",
      "Eye pain with redness, headache and coloured haloes (seek care urgently)",
    ],
    whatToExpect: [
      { title: "Eye pressure check", text: "Measurement of intraocular pressure (tonometry)." },
      { title: "Optic nerve evaluation", text: "Careful examination of the optic nerve head and the drainage angle of the eye." },
      { title: "Visual field & imaging", text: "Field testing and nerve imaging where needed, to stage the disease and track change over time." },
      { title: "Lifelong plan", text: "Eye drops, laser or surgery depending on the type and stage, with regular reviews." },
    ],
    aftercare: [
      "Use glaucoma drops every day, even when the eyes feel normal",
      "Never stop drops without asking your eye doctor",
      "Keep every follow-up visit – glaucoma control can change silently",
      "Ask family members to get their eyes checked too",
    ],
    faqs: [
      { q: "Can glaucoma be cured?", a: "Lost vision cannot be restored, but with treatment the remaining vision can usually be preserved for life." },
      { q: "I have no symptoms. Do I still need treatment?", a: "Yes. Most glaucoma has no symptoms until it is advanced. Treatment prevents further damage." },
    ],
  },
  {
    slug: "oculoplasty",
    icon: "eyelid",
    title: "Oculoplasty – Eyelid & Tear Duct Care",
    short:
      "Treatment of droopy eyelids, eyelid lumps, in-turning or out-turning lids and watering eyes due to blocked tear ducts.",
    intro:
      "Oculoplasty deals with the eyelids, tear drainage system and the area around the eye. Problems here can affect comfort, appearance and even vision, and many can be corrected with minor procedures.",
    whoNeeds: [
      "Drooping upper eyelid (ptosis) blocking vision",
      "Chalazion, stye or other lumps on the eyelid",
      "Eyelids turning inwards (entropion) or outwards (ectropion)",
      "Constant watering or sticky discharge from a blocked tear duct",
      "Injuries around the eye and eyelids",
    ],
    whatToExpect: [
      { title: "Assessment", text: "Examination of the eyelid position, muscle function and tear drainage." },
      { title: "Treatment plan", text: "Medicines, minor procedures or surgery, explained clearly with expected results." },
      { title: "Procedure", text: "Most eyelid procedures are done under local anaesthesia as day care." },
      { title: "Review", text: "Follow-up for stitch removal and healing checks." },
    ],
    aftercare: [
      "Apply cold compresses and ointment as advised",
      "Keep the area clean and dry",
      "Avoid heavy lifting and eye make-up until healed",
    ],
    faqs: [
      { q: "Is a recurring stye a concern?", a: "Repeated styes or lumps should be examined. They may need drainage and a check for underlying causes like blepharitis or uncorrected refractive error." },
      { q: "Why do my eyes water all the time?", a: "Constant watering can be due to a blocked tear duct, eyelid problems or dry eye. An examination finds the cause." },
    ],
  },
  {
    slug: "contact-lenses",
    icon: "contact",
    title: "Contact Lens Clinic",
    short:
      "Fellowship-trained fitting of soft, toric and rigid gas-permeable lenses, including lenses for keratoconus and high powers.",
    intro: `${site.name} holds a Fellowship in Contact Lenses from the Contact Lens Foundation, Calcutta. Correct fitting protects the cornea and gives comfortable, clear vision, whether you need daily soft lenses or specialty lenses for an irregular cornea.`,
    whoNeeds: [
      "People who prefer lenses to glasses for work, sports or appearance",
      "High minus or plus powers and unequal power between the eyes",
      "Astigmatism (cylindrical power) – toric lenses",
      "Keratoconus or irregular cornea – rigid gas-permeable lenses",
      "Existing lens wearers with redness, discomfort or dryness",
    ],
    whatToExpect: [
      { title: "Eye health check", text: "Cornea, tear film and eyelids are checked to make sure lenses are safe for you." },
      { title: "Measurements & trial", text: "Corneal curvature is measured and trial lenses are fitted and assessed." },
      { title: "Training", text: "You learn how to insert, remove and clean lenses safely." },
      { title: "Follow-up", text: "Review visits to check comfort, vision and corneal health." },
    ],
    aftercare: [
      "Always wash and dry hands before handling lenses",
      "Never sleep, swim or shower in lenses unless advised",
      "Replace lenses and cases on schedule",
      "Remove lenses and visit the clinic if the eye turns red or painful",
    ],
    faqs: [
      { q: "Are contact lenses safe?", a: "Yes, when fitted properly and used with good hygiene. Most problems come from over-wear and poor cleaning." },
      { q: "Can I wear lenses if I have astigmatism?", a: "Yes. Toric soft lenses or rigid gas-permeable lenses can correct astigmatism well." },
    ],
  },
  {
    slug: "eye-check-up",
    icon: "eye",
    title: "Comprehensive Eye Check-up",
    short:
      "Complete eye examination with vision testing, eye pressure, and retina check for children, adults and senior citizens.",
    intro:
      "A complete eye examination checks much more than spectacle power. It screens for silent conditions like glaucoma, diabetic eye disease and early cataract, so that problems are caught before they affect your sight.",
    whoNeeds: [
      "Adults over 40 – every one to two years",
      "People with diabetes or high blood pressure – at least once a year",
      "Children before starting school and if they squint or sit close to screens",
      "Anyone with headaches, eye strain or a sudden change in vision",
    ],
    whatToExpect: [
      { title: "Vision & power test", text: "Distance and near vision testing with accurate refraction." },
      { title: "Front of the eye", text: "Slit-lamp examination of the eyelids, cornea, iris and lens." },
      { title: "Eye pressure", text: "A quick measurement to screen for glaucoma." },
      { title: "Retina check", text: "Dilated examination of the retina and optic nerve when needed." },
    ],
    aftercare: [
      "If drops were used to dilate your pupils, vision may be blurry for a few hours – avoid driving",
      "Carry sunglasses for the ride home",
      "Follow the advised date for your next check-up",
    ],
    faqs: [
      { q: "How long does a full eye check-up take?", a: "About 30–60 minutes, longer if the pupils are dilated." },
      { q: "Should I bring my old glasses?", a: "Yes. Please bring your current glasses, contact lenses and any previous eye reports or prescriptions." },
    ],
  },
  {
    slug: "spectacles-refraction",
    icon: "glasses",
    title: "Refraction & Spectacle Prescription",
    short:
      "Accurate power check for distance, reading and bifocal or progressive glasses, including near-vision correction after 40.",
    intro:
      "Blurred vision, eye strain and headaches are often due to an incorrect or outdated spectacle power. A careful refraction gives you glasses that are comfortable for long hours of reading, screen work and driving.",
    whoNeeds: [
      "Difficulty seeing the board, road signs or television",
      "Trouble reading small print after the age of 40 (presbyopia)",
      "Headaches or eye strain after reading or screen use",
      "Children who hold books close or squint to see",
    ],
    whatToExpect: [
      { title: "Vision test", text: "Measurement of distance and near vision for each eye." },
      { title: "Refraction", text: "Objective and subjective testing to find the exact power." },
      { title: "Prescription", text: "Advice on single-vision, bifocal or progressive lenses to suit your work." },
    ],
    aftercare: [
      "Allow a few days to get used to new glasses, especially progressives",
      "Get your power rechecked every one to two years",
    ],
    faqs: [
      { q: "Will wearing glasses make my eyes weaker?", a: "No. Glasses help you see clearly; they do not weaken the eyes." },
    ],
  },
  {
    slug: "diabetic-eye-care",
    icon: "drop",
    title: "Diabetic & Hypertensive Eye Care",
    short:
      "Regular retina examinations for patients with diabetes and high blood pressure to detect changes before vision is affected.",
    intro:
      "Diabetes and high blood pressure can damage the small blood vessels of the retina. Diabetic retinopathy often has no symptoms in its early stages, which is why a yearly dilated retina examination is recommended for every person with diabetes.",
    whoNeeds: [
      "Everyone with type 1 or type 2 diabetes – at least once a year",
      "Pregnant women with diabetes",
      "People with long-standing high blood pressure",
      "Diabetic patients noticing blurred vision, floaters or dark spots",
    ],
    whatToExpect: [
      { title: "Dilated retina examination", text: "The pupils are dilated to examine the full retina for bleeding, swelling or abnormal vessels." },
      { title: "Grading & advice", text: "The stage of retinopathy is explained along with how often you need to be reviewed." },
      { title: "Referral when needed", text: "Laser, injections or retina surgery are arranged promptly if required." },
    ],
    aftercare: [
      "Keep blood sugar, blood pressure and cholesterol under control",
      "Never skip your yearly retina check, even if vision is normal",
    ],
    faqs: [
      { q: "My vision is fine. Do I still need a retina check?", a: "Yes. Diabetic retinopathy can be advanced before it affects vision. Early treatment is far more effective." },
    ],
  },
  {
    slug: "red-eye-infections",
    icon: "alert",
    title: "Red Eye, Infections & Dry Eye",
    short:
      "Diagnosis and treatment of conjunctivitis, allergies, dry eye, corneal infections and foreign bodies in the eye.",
    intro:
      "A red, itchy, watery or painful eye can have many causes – from simple allergy and dry eye to serious corneal infections. Using the wrong drops (especially steroid drops without advice) can make things worse, so a proper examination matters.",
    whoNeeds: [
      "Red, sticky or watery eyes (conjunctivitis)",
      "Itching and seasonal allergies",
      "Burning, gritty or tired eyes from screen use (dry eye)",
      "Pain, light sensitivity or a white spot on the cornea",
      "Dust or a foreign body in the eye",
    ],
    whatToExpect: [
      { title: "Slit-lamp examination", text: "Close examination of the surface of the eye to find the exact cause." },
      { title: "Targeted treatment", text: "The right drops or ointment for infection, allergy or dry eye – no guesswork." },
      { title: "Follow-up", text: "Review to make sure the eye is healing as expected." },
    ],
    aftercare: [
      "Do not use leftover or borrowed eye drops",
      "Wash hands often and avoid sharing towels during an infection",
      "Take regular breaks from screens (20-20-20 rule)",
    ],
    faqs: [
      { q: "Can I buy eye drops from the chemist for a red eye?", a: "It is better to have the eye examined first. Some drops, especially steroids, can worsen infections or raise eye pressure." },
    ],
  },
];

export type Condition = {
  slug: string;
  title: string;
  short: string;
  about: string;
  symptoms: string[];
  treatment: string[];
};

export const conditions: Condition[] = [
  {
    slug: "cataract",
    title: "Cataract",
    short: "Clouding of the eye's natural lens causing hazy vision and glare.",
    about: "Cataract is the most common cause of reversible vision loss. It is mostly age-related but can also occur due to diabetes, injury, long-term steroid use or be present from birth.",
    symptoms: ["Blurred or foggy vision", "Glare and haloes at night", "Faded colours", "Frequent change in glasses"],
    treatment: ["Glasses may help in early stages", "Cataract surgery with an intraocular lens (IOL) is the definitive treatment"],
  },
  {
    slug: "glaucoma",
    title: "Glaucoma",
    short: "A silent condition that damages the optic nerve and side vision.",
    about: "Glaucoma is often called the 'silent thief of sight' because vision loss starts at the edges and goes unnoticed until it is advanced.",
    symptoms: ["Usually no symptoms early on", "Gradual loss of side vision", "Sudden eye pain, redness and haloes (acute glaucoma)"],
    treatment: ["Daily eye drops to lower eye pressure", "Laser procedures", "Glaucoma surgery when needed"],
  },
  {
    slug: "refractive-errors",
    title: "Refractive Errors",
    short: "Myopia, hypermetropia, astigmatism and presbyopia.",
    about: "Refractive errors occur when the eye does not focus light correctly on the retina. They are the most common eye problem at every age.",
    symptoms: ["Blurred distance or near vision", "Headaches and eye strain", "Squinting to see clearly"],
    treatment: ["Spectacles", "Contact lenses", "Referral for refractive surgery where suitable"],
  },
  {
    slug: "diabetic-retinopathy",
    title: "Diabetic Retinopathy",
    short: "Damage to the retina's blood vessels due to diabetes.",
    about: "The longer a person has diabetes, the higher the risk. Good sugar control and regular retina checks prevent most vision loss.",
    symptoms: ["Often none early on", "Blurred or fluctuating vision", "Floaters and dark spots"],
    treatment: ["Control of sugar, BP and cholesterol", "Laser or injections for advanced stages", "Regular monitoring"],
  },
  {
    slug: "conjunctivitis",
    title: "Conjunctivitis & Eye Allergy",
    short: "Red, itchy, watery or sticky eyes due to infection or allergy.",
    about: "Conjunctivitis can be viral, bacterial or allergic. Viral and bacterial forms spread easily; allergic conjunctivitis is common in spring and dusty weather.",
    symptoms: ["Redness", "Itching or grittiness", "Watery or sticky discharge", "Swollen eyelids"],
    treatment: ["Anti-allergic or antibiotic drops as appropriate", "Cold compresses", "Hygiene measures to prevent spread"],
  },
  {
    slug: "dry-eye",
    title: "Dry Eye",
    short: "Burning, gritty, tired eyes – often linked to screens and age.",
    about: "Dry eye happens when tears are not enough or evaporate too quickly. Long screen time, air-conditioning, ageing and some medicines make it worse.",
    symptoms: ["Burning or stinging", "Gritty, sandy feeling", "Fluctuating vision", "Paradoxical watering"],
    treatment: ["Lubricating eye drops", "Eyelid hygiene and warm compresses", "Screen breaks and lifestyle changes"],
  },
  {
    slug: "ptosis-eyelid-problems",
    title: "Ptosis & Eyelid Problems",
    short: "Drooping lids, lid lumps and abnormal eyelid position.",
    about: "Eyelid problems range from simple styes and chalazia to drooping lids and in- or out-turning lids that irritate the eye.",
    symptoms: ["Drooping upper lid", "Lump or swelling on the lid", "Lashes rubbing the eye", "Watering"],
    treatment: ["Warm compresses and medicines", "Minor procedures for lumps", "Oculoplastic surgery for lid position"],
  },
  {
    slug: "keratoconus",
    title: "Keratoconus",
    short: "Thinning and bulging of the cornea causing distorted vision.",
    about: "Keratoconus usually starts in the teens or twenties and causes rapidly changing astigmatism. Specialty contact lenses often give much better vision than glasses.",
    symptoms: ["Blurred, distorted vision", "Frequent change in cylindrical power", "Glare and light sensitivity"],
    treatment: ["Rigid gas-permeable or specialty contact lenses", "Referral for corneal cross-linking to halt progression"],
  },
];

export const whyChoose = {
  eyebrow: `Why Choose ${site.name}`,
  title: "Experienced Eye Care Focused On Your Vision",
  text: `${site.name} brings ${site.experienceYears} years of ophthalmology experience to every consultation. From a routine power check to cataract and glaucoma care, every patient is examined carefully and told plainly what is happening and what the options are.`,
  points: [
    {
      icon: "hand-heart",
      title: "Experienced & Compassionate Care",
      text: `With over five decades in ophthalmology, ${site.name} has treated generations of families and is known for his patient, unhurried approach.`,
    },
    {
      icon: "user-md",
      title: "Personalised Treatment Approach",
      text: "Every eye is different. Treatment is planned around your eye condition, your work and your daily needs – never one-size-fits-all.",
    },
  ],
};

export const credentials = {
  intro: `${site.fullName} has ${site.experienceYears} years of experience in diagnosing and treating eye conditions in patients of all ages, with a special interest in cataract, glaucoma, oculoplasty and contact lenses.`,
  tabs: [
    {
      label: "Education & Training",
      groups: [
        {
          title: "Educational Qualifications",
          items: [
            "MBBS – Ranchi University",
            "Diploma in Ophthalmology (DO) – Patna University",
            "Fellowship in Contact Lenses – Contact Lens Foundation, Calcutta",
          ],
        },
      ],
    },
    {
      label: "Professional Experience",
      groups: [
        {
          title: "Current Practice",
          items: [
            `Consultant Ophthalmologist – ${site.clinic}, ${site.shortAddress}`,
            `${otherPractice.role} – ${otherPractice.name}, ${otherPractice.address}`,
          ],
        },
        {
          title: "Experience",
          items: [`${site.experienceYears} years of clinical practice in ophthalmology`],
        },
      ],
    },
    {
      label: "Areas of Expertise",
      groups: [
        {
          title: "Areas of Expertise",
          items: [
            "Cataract evaluation and surgery",
            "Glaucoma diagnosis and long-term management",
            "Oculoplasty – eyelid and tear duct conditions",
            "Contact lens fitting, including specialty lenses",
            "Refraction and spectacle prescription",
            "Diabetic eye screening",
            "Red eye, infections and dry eye",
          ],
        },
      ],
    },
    {
      label: "Clinic Locations",
      groups: [
        {
          title: site.clinic,
          items: [site.address],
        },
        {
          title: otherPractice.name,
          items: [otherPractice.address, otherPractice.role],
        },
      ],
    },
  ],
};

export type GalleryItem = { src: string; alt: string };

// AI-generated stock-style photos of eye care (not photos of this clinic). Replace with real clinic photos when available.
export const gallery: GalleryItem[] = [
  { src: `${IMG}/g-slitlamp.jpg`, alt: "Slit-lamp eye examination" },
  { src: `${IMG}/g-eyechart.jpg`, alt: "Vision testing" },
  { src: `${IMG}/g-refractometer.jpg`, alt: "Computerised eye power check" },
  { src: `${IMG}/g-desk.jpg`, alt: "Consultation" },
  { src: `${IMG}/g-frames.jpg`, alt: "Spectacle frames" },
  { src: `${IMG}/g-contactlens.jpg`, alt: "Contact lens care" },
  { src: `${IMG}/g-reception.jpg`, alt: "Reception" },
  { src: `${IMG}/g-family.jpg`, alt: "Eye care for the whole family" },
];

export type Testimonial = { name: string; role: string; quote: string };

// Add only genuine patient reviews (with consent). The testimonial slider is hidden while this list is empty.
export const testimonials: Testimonial[] = [];

export const faqs = [
  {
    q: `Where is ${site.clinic}?`,
    a: `At ${site.address}. Use the "Get Directions" button for Google Maps directions.`,
  },
  {
    q: "What are the clinic timings?",
    a: "Please call or visit the clinic to confirm the current OPD timings before your visit.",
  },
  {
    q: "What should I bring to my eye check-up?",
    a: "Your current glasses or contact lenses, previous eye reports and prescriptions, and a list of medicines you take (especially for diabetes or blood pressure).",
  },
  {
    q: "Will my eyes be dilated?",
    a: "Often, yes – especially for retina and diabetic eye checks. Vision stays blurry for a few hours, so please don't drive yourself home.",
  },
  {
    q: "Does the doctor see children?",
    a: "Yes. Children's eye check-ups for power, squint and eye infections are done at the clinic.",
  },
];

export const navLinks: { href: string; label: string; children?: { href: string; label: string }[] }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
