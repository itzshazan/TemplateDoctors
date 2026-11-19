/* =========================================================
   SITE CONFIG — Dr. Vivek Kaushik, Shree Shyam Clinic, Ballabhgarh.
   Header, footer, nav menus, service/condition cards, the
   contact-form dropdown and the floating buttons all read it.
   Items to confirm with the clinic are listed in IMAGE-PROMPTS.md.
   ========================================================= */

export type SocialKey = "facebook" | "instagram" | "linkedin" | "youtube";

export interface Treatment {
  /** URL slug — the detail page lives at /treatment/<id>/ */
  id: string;
  title: string;
  /** File name in public/img without extension */
  icon: string;
  desc: string;
  /** Detail-page content */
  intro: string[];
  tags: string[];
  what: string[];
  when: string[];
  expect: string[];
  benefits: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  clinic: string;
  tagline: string;
  phone: string;
  emergencyPhone: string;
  /** Digits only, including country code */
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  hoursList: string[];
  mapEmbed: string;
  mapsUrl: string;
  rating: { score: number; count: number };
  socials: Partial<Record<SocialKey, string>>;
  services: Treatment[];
  conditions: Treatment[];
}

export const SITE: SiteConfig = {
  name: "Dr. Vivek Kaushik",
  // CONFIRM: exact designation and degrees (e.g. MBBS, MS Ortho) — not published online.
  title: "Orthopaedic Doctor",
  clinic: "Shree Shyam Clinic",
  tagline: "Trusted orthopaedic care for bones, joints, spine and sports injuries in Ballabhgarh, Faridabad.",
  phone: "+91 98710 65506",
  emergencyPhone: "+91 98710 65506",
  // CONFIRM: is this number on WhatsApp?
  whatsapp: "919871065506",
  email: "",
  address: "Shree Shyam Clinic, near Ahir Haveli, Jain Colony, Ballabhgarh, Faridabad, Haryana 121004",
  hours: "Mon–Thu 10 AM–9 PM · Fri–Sat 9 AM–9 PM · Sun 9 AM–2 PM",
  hoursList: ["Mon – Thu: 10:00 AM – 9:00 PM", "Fri – Sat: 9:00 AM – 9:00 PM", "Sunday: 9:00 AM – 2:00 PM"],
  mapEmbed: "https://maps.google.com/maps?q=28.3356657,77.3223954&z=16&output=embed",
  mapsUrl:
    "https://www.google.com/maps/place/Dr+Vivek+kaushik+%28Shree+shyam+clinic%29/data=!4m7!3m6!1s0x390cdb986cc60077:0x52390b02d9b4f1af!8m2!3d28.3356657!4d77.3223954!16s%2Fg%2F11t6s9lxz2!19sChIJdwDGbJjbDDkRr_G02QILOVI",
  rating: { score: 4.9, count: 176 },
  socials: {},
  services: [
    {
      id: "fracture-injury-care",
      title: "Fracture & Injury Care",
      icon: "ortho-fracture",
      desc: "Prompt assessment of falls, sprains and broken bones, with X-ray review, reduction, plaster or splinting.",
      intro: [
        "A fall, a road accident or a sports injury can crack or break a bone, tear a ligament or dislocate a joint. Getting the injury assessed early makes a big difference to how well it heals.",
        "Dr. Vivek Kaushik examines the injury, reviews X-rays, and explains whether it can be managed with a plaster, splint or brace, or whether it needs surgery — and what recovery will look like.",
      ],
      tags: ["Fractures", "Sprains", "Dislocations", "Plaster & splints"],
      what: ["Examination of the injured area", "X-ray review to confirm the injury", "Closed reduction, plaster, slab or splint"],
      when: ["Pain, swelling or deformity after a fall or accident", "Unable to bear weight or move the limb", "Numbness or tingling below the injury (urgent)"],
      expect: ["Pain relief and immobilisation", "Clear instructions for plaster care", "Follow-up X-rays to check healing"],
      benefits: ["Correct bone alignment", "Faster, safer healing", "Lower risk of stiffness", "Less long-term pain", "Early return to work", "Clear recovery plan"],
    },
    {
      id: "joint-pain-arthritis",
      title: "Joint Pain & Arthritis Treatment",
      icon: "ortho-knee",
      desc: "Diagnosis and treatment of knee, hip and other joint pain, including osteoarthritis and rheumatoid arthritis.",
      intro: [
        "Joint pain that comes with stiffness, swelling or a grinding feeling is often due to arthritis. Knee osteoarthritis is especially common after 45 and can make walking and climbing stairs difficult.",
        "Treatment starts with an accurate diagnosis and focuses on reducing pain, protecting the joint and keeping you active — with medicines, exercises, weight guidance, supports and injections where suitable.",
      ],
      tags: ["Knee pain", "Osteoarthritis", "Rheumatoid arthritis", "Injections"],
      what: ["Clinical examination of the joint", "X-ray and blood tests where needed", "Stage-wise treatment plan"],
      when: ["Joint pain lasting more than a few weeks", "Morning stiffness or swelling", "Difficulty walking, squatting or climbing stairs"],
      expect: ["Medicines for pain and inflammation", "Strengthening exercises and lifestyle advice", "Injections or surgical opinion if needed"],
      benefits: ["Less pain", "Better mobility", "Slower joint damage", "Improved sleep", "Stay independent", "Avoid unnecessary surgery"],
    },
    {
      id: "back-neck-pain",
      title: "Back & Neck Pain",
      icon: "ortho-spine",
      desc: "Treatment for lower back pain, sciatica, slipped disc, cervical spondylosis and posture-related neck pain.",
      intro: [
        "Back and neck pain are among the most common reasons people miss work. Most cases are caused by muscle strain, posture, disc problems or age-related wear of the spine.",
        "After examining the spine and nerves, Dr. Kaushik plans treatment with medicines, posture correction, targeted exercises and physiotherapy — and identifies the few cases that need scans or surgery.",
      ],
      tags: ["Lower back pain", "Sciatica", "Slipped disc", "Cervical pain"],
      what: ["Spine and nerve examination", "X-ray or MRI only when needed", "Exercise and posture programme"],
      when: ["Back or neck pain for more than a week", "Pain travelling down the leg or arm", "Weakness, numbness or bladder problems (urgent)"],
      expect: ["Pain relief medication", "Physiotherapy and home exercises", "Ergonomic advice for work and sleep"],
      benefits: ["Faster pain relief", "Better posture", "Fewer recurrences", "Stronger core", "Return to daily activity", "Avoid long-term painkillers"],
    },
    {
      id: "sports-injuries",
      title: "Sports Injuries",
      icon: "ortho-sports",
      desc: "Care for ligament tears, sprains, muscle strains and overuse injuries in athletes and active people.",
      intro: [
        "Sports injuries range from simple sprains to ligament tears in the knee (ACL, meniscus), shoulder injuries and overuse problems like tendinitis.",
        "The goal is a safe return to play: an accurate diagnosis, the right mix of rest, bracing and rehabilitation, and timely referral for arthroscopy when a ligament repair is needed.",
      ],
      tags: ["ACL / meniscus", "Ankle sprain", "Muscle strain", "Return to play"],
      what: ["Examination of joint stability", "Imaging when a tear is suspected", "Staged rehabilitation plan"],
      when: ["Pop, giving way or swelling in the knee", "Ankle that keeps twisting", "Pain that stops you training"],
      expect: ["RICE and pain management", "Braces or supports if needed", "Graded strengthening and return-to-sport advice"],
      benefits: ["Safe return to sport", "Lower re-injury risk", "Restored strength", "Joint stability", "Personalised rehab", "Expert surgical opinion when needed"],
    },
    {
      id: "joint-replacement",
      title: "Knee & Hip Replacement Guidance",
      icon: "ortho-joint",
      desc: "Assessment for advanced arthritis and guidance on knee or hip replacement, before and after surgery.",
      intro: [
        "When arthritis has badly damaged a knee or hip and pain no longer responds to medicines and exercises, joint replacement can restore comfortable movement.",
        "Dr. Kaushik assesses whether replacement is the right step, explains the procedure and recovery honestly, and supports you with preparation and rehabilitation after surgery.",
      ],
      tags: ["Total knee replacement", "Hip replacement", "Pre-op assessment", "Post-op rehab"],
      what: ["Assessment of arthritis severity", "Fitness and pre-operative work-up", "Planning of surgery and rehabilitation"],
      when: ["Severe pain despite treatment", "Bow legs or visible deformity", "Pain at night or on short walks"],
      expect: ["Detailed counselling", "Physiotherapy before and after surgery", "Regular follow-up visits"],
      benefits: ["Long-lasting pain relief", "Straighter limbs", "Walk farther", "Better sleep", "More independence", "Improved quality of life"],
    },
    {
      id: "osteoporosis-bone-health",
      title: "Osteoporosis & Bone Health",
      icon: "ortho-bone",
      desc: "Screening and treatment for weak bones, vitamin D and calcium deficiency to prevent fractures.",
      intro: [
        "Osteoporosis makes bones thin and fragile, often without any symptoms until a fracture happens — commonly of the hip, spine or wrist. Women after menopause and older adults are most at risk.",
        "Bone health care includes checking risk factors, correcting vitamin D and calcium levels, safe exercise and medicines that strengthen bones.",
      ],
      tags: ["Vitamin D", "Calcium", "Bone density", "Fall prevention"],
      what: ["Risk assessment", "Blood tests and bone density scan advice", "Long-term bone-strengthening plan"],
      when: ["Women after menopause", "A fracture after a minor fall", "Loss of height or a stooped back"],
      expect: ["Supplements and medicines", "Weight-bearing exercise advice", "Fall-prevention tips at home"],
      benefits: ["Stronger bones", "Fewer fractures", "Better posture", "Less body ache", "Safer mobility", "Peace of mind"],
    },
    {
      id: "plaster-splinting-dressings",
      title: "Plaster, Splinting & Dressings",
      icon: "ortho-cast",
      desc: "Application and removal of plaster casts, slabs, splints and braces, with wound dressing and follow-up.",
      intro: [
        "Many bone and soft-tissue injuries heal best when the area is kept still. A well-applied plaster, slab or splint protects the injury and reduces pain.",
        "The clinic applies and removes casts and splints, fits braces, and handles wound dressings — with clear instructions on how to look after them at home.",
      ],
      tags: ["Plaster cast", "Slab", "Braces", "Dressings"],
      what: ["Choice of cast, slab, splint or brace", "Careful application and padding", "Cast check and removal"],
      when: ["After a fracture or bad sprain", "Ligament injury needing support", "Wounds needing dressing"],
      expect: ["Advice on keeping the cast dry", "Warning signs to watch for", "Timely review and removal"],
      benefits: ["Protected healing", "Pain relief", "Correct alignment", "Fewer complications", "Comfortable fit", "Quick removal when healed"],
    },
    {
      id: "physiotherapy-rehabilitation",
      title: "Physiotherapy & Rehabilitation",
      icon: "ortho-rehab",
      desc: "Exercise-based recovery plans after injury, surgery or for long-term joint and back problems.",
      intro: [
        "Recovery doesn't end when a bone heals or a surgery is done. Strength, flexibility and balance need to be rebuilt to get back to normal life.",
        "Dr. Kaushik guides a rehabilitation plan matched to your condition — exercises you can continue at home, with progress checked at each visit.",
      ],
      tags: ["Post-fracture rehab", "Post-surgery rehab", "Strengthening", "Home exercises"],
      what: ["Assessment of strength and range of movement", "Personalised exercise programme", "Progress reviews"],
      when: ["Stiffness after a plaster is removed", "After joint or spine surgery", "Recurring back or knee pain"],
      expect: ["Step-by-step exercises", "Gradual return to activities", "Advice to avoid re-injury"],
      benefits: ["Regain movement", "Build strength", "Better balance", "Less pain", "Faster return to work", "Long-term joint health"],
    },
  ],
  conditions: [
    {
      id: "knee-osteoarthritis",
      title: "Knee Osteoarthritis",
      icon: "ortho-knee",
      desc: "Wear and tear of the knee joint causing pain, stiffness and difficulty walking.",
      intro: [
        "Knee osteoarthritis happens when the cartilage cushioning the knee wears down. It is very common after 45, and more so with excess weight or old injuries.",
        "Early treatment with exercises, weight control and medicines can keep many people active for years; advanced cases may need injections or knee replacement.",
      ],
      tags: ["Knee pain", "Stiffness", "Swelling", "Crackling"],
      what: ["Gradual loss of knee cartilage", "Bone spurs and joint narrowing", "Inflammation of the joint lining"],
      when: ["Pain on stairs or squatting", "Morning stiffness", "Bowing of the legs"],
      expect: ["Strengthening exercises", "Medicines and supports", "Injections or replacement for advanced disease"],
      benefits: ["Less pain", "Walk comfortably", "Slower progression", "Stay active", "Better sleep", "Informed choices"],
    },
    {
      id: "frozen-shoulder",
      title: "Frozen Shoulder",
      icon: "ortho-shoulder",
      desc: "Painful stiffness of the shoulder that limits lifting and turning the arm.",
      intro: [
        "Frozen shoulder (adhesive capsulitis) causes gradually increasing pain and stiffness, making it hard to comb hair or reach behind the back. It is more common in people with diabetes.",
        "With medicines, guided stretching and sometimes injections, most patients regain movement over time.",
      ],
      tags: ["Shoulder pain", "Stiffness", "Diabetes-related"],
      what: ["Thickening and tightening of the shoulder capsule", "Freezing, frozen and thawing phases"],
      when: ["Pain and stiffness lasting weeks", "Night pain on lying on the shoulder", "Difficulty raising the arm"],
      expect: ["Pain control", "Daily stretching programme", "Injection if progress is slow"],
      benefits: ["Restored movement", "Less night pain", "Back to daily tasks", "Avoid long stiffness", "Diabetes-aware care", "Clear timeline"],
    },
    {
      id: "slipped-disc-sciatica",
      title: "Slipped Disc & Sciatica",
      icon: "ortho-spine",
      desc: "Back pain radiating down the leg due to a disc pressing on a nerve.",
      intro: [
        "A slipped (herniated) disc in the lower back can press on the sciatic nerve, sending pain, tingling or numbness down the leg.",
        "Most patients improve with medicines, activity modification and physiotherapy; surgery is considered only when there is nerve weakness or pain that doesn't settle.",
      ],
      tags: ["Leg pain", "Tingling", "Lower back"],
      what: ["Disc bulge pressing on a nerve root", "Nerve irritation causing leg pain"],
      when: ["Pain from back to leg", "Numbness or weakness in the foot", "Bladder or bowel changes (emergency)"],
      expect: ["Pain relief", "Core-strengthening programme", "MRI and surgical opinion when needed"],
      benefits: ["Nerve pain relief", "Stronger back", "Fewer flare-ups", "Avoid unnecessary surgery", "Return to work", "Clear red-flag guidance"],
    },
    {
      id: "cervical-spondylosis",
      title: "Cervical Spondylosis",
      icon: "ortho-spine",
      desc: "Age and posture-related wear of the neck spine causing neck pain and stiffness.",
      intro: [
        "Long hours at desks and phones, along with age-related changes, can wear the discs and joints of the neck, leading to pain, stiffness, headaches and sometimes arm tingling.",
        "Treatment focuses on pain relief, posture correction and neck-strengthening exercises.",
      ],
      tags: ["Neck pain", "Headache", "Arm tingling"],
      what: ["Degeneration of neck discs and joints", "Possible nerve irritation"],
      when: ["Neck pain lasting weeks", "Pain spreading to shoulders or arms", "Dizziness on neck movement"],
      expect: ["Medicines", "Posture and pillow advice", "Neck exercises and physiotherapy"],
      benefits: ["Less neck pain", "Better posture", "Fewer headaches", "Improved work comfort", "Stronger neck", "Prevent progression"],
    },
    {
      id: "ligament-injuries",
      title: "Ligament Injuries (ACL, Meniscus)",
      icon: "ortho-sports",
      desc: "Knee ligament and cartilage tears from twisting injuries and sports.",
      intro: [
        "A twisting injury of the knee can tear the ACL or meniscus, causing swelling, pain and a feeling of the knee giving way.",
        "Accurate diagnosis decides between bracing and rehabilitation or arthroscopic repair.",
      ],
      tags: ["ACL tear", "Meniscus tear", "Knee instability"],
      what: ["Tear of a stabilising ligament or cartilage", "Often from sports or falls"],
      when: ["Knee swelling after an injury", "Knee locking or giving way", "Unable to return to sport"],
      expect: ["Examination and MRI", "Brace and rehabilitation", "Referral for arthroscopy if needed"],
      benefits: ["Stable knee", "Protect cartilage", "Return to sport", "Lower arthritis risk", "Confidence in movement", "Expert guidance"],
    },
    {
      id: "gout-uric-acid",
      title: "Gout & High Uric Acid",
      icon: "ortho-foot",
      desc: "Sudden, severe joint attacks — often in the big toe — caused by uric acid crystals.",
      intro: [
        "Gout causes sudden attacks of intense pain, redness and swelling, classically in the big toe but also the ankle or knee.",
        "Attacks are treated quickly, and long-term uric acid control with diet and medicines prevents joint damage.",
      ],
      tags: ["Big toe pain", "Uric acid", "Joint swelling"],
      what: ["Uric acid crystals deposit in joints", "Triggered by diet, alcohol or dehydration"],
      when: ["Sudden red, hot, swollen joint", "Repeated attacks", "Lumps (tophi) near joints"],
      expect: ["Fast relief of attacks", "Blood tests", "Diet advice and long-term medicines"],
      benefits: ["Fewer attacks", "Protect joints", "Kidney-friendly care", "Diet clarity", "Less pain", "Better mobility"],
    },
    {
      id: "tennis-elbow-tendinitis",
      title: "Tennis Elbow & Tendinitis",
      icon: "ortho-hand",
      desc: "Overuse pain in tendons of the elbow, wrist, heel and shoulder.",
      intro: [
        "Repeated gripping, lifting or typing can inflame tendons, causing tennis elbow, De Quervain's wrist pain, heel pain (plantar fasciitis) and similar problems.",
        "Rest, braces, stretching and strengthening help most cases; injections are reserved for stubborn pain.",
      ],
      tags: ["Elbow pain", "Wrist pain", "Heel pain"],
      what: ["Inflammation or wear of a tendon", "Caused by repetitive strain"],
      when: ["Pain on gripping or lifting", "Heel pain on the first steps in the morning", "Pain not settling with rest"],
      expect: ["Activity modification", "Supports and exercises", "Injection for persistent cases"],
      benefits: ["Pain-free grip", "Return to work tasks", "Prevent recurrence", "Avoid chronic pain", "Simple home care", "Faster healing"],
    },
    {
      id: "osteoporosis",
      title: "Osteoporosis",
      icon: "ortho-bone",
      desc: "Thinning of bones that raises the risk of fractures, especially in older women.",
      intro: [
        "Osteoporosis silently weakens bones until a minor fall causes a fracture. It is common after menopause and in older adults, and with vitamin D deficiency.",
        "Testing, supplements, medicines and fall prevention can significantly reduce fracture risk.",
      ],
      tags: ["Weak bones", "Vitamin D", "Fracture risk"],
      what: ["Loss of bone density and strength", "Often no symptoms until a fracture"],
      when: ["Women after menopause", "Fracture after a small fall", "Loss of height"],
      expect: ["Bone density assessment", "Calcium, vitamin D and medicines", "Exercise and fall prevention"],
      benefits: ["Stronger bones", "Fewer fractures", "Better posture", "Safer walking", "Long-term protection", "Peace of mind"],
    },
  ],
};

export const tel = (n: string) => "tel:" + n.replace(/[^\d+]/g, "");
export const treatmentPath = (_t: Treatment) => "/#services";
