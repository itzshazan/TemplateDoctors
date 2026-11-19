import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import CheckList from "@/components/CheckList";
import { SITE } from "@/config/site";
import { highlights } from "@/config/content";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name}, ${SITE.qualification}: prosthodontist for dental implants and full mouth rehabilitation in Dubai and Mumbai.`,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About" />

      <section className="section about-page">
        <div className="container">
          <div className="media reveal">
            <img src="/img/dr-ahmed-patel.jpg" alt="Dr. Ahmed Patel, Prosthodontist" width={1122} height={1402} />
          </div>
          <div className="reveal">
            <span className="eyebrow">Your Prosthodontist</span>
            <h2 className="doctor-name">{SITE.name}</h2>
            <p className="doctor-role">{SITE.qualification}</p>
            <p>
              {SITE.name} is a prosthodontist specialising in immediate implant dentistry and full mouth
              rehabilitation. Since July 2026 Dr. Patel has been a full-time Specialist Prosthodontist at LOLDENT
              Speciality Clinic in Jumeirah Lake Towers, Dubai.
            </p>
            <p>
              Since 2017 Dr. Patel has run Khalil Dental Studio in Mumbai, using advanced software for prosthetic
              planning and 3D printing, and has visited clinics as a consultant for implants and full mouth
              rehabilitation: fixed full-mouth implants, cast partial dentures and smile correction, with clinical
              examination, diagnosis and treatment planning for each patient.
            </p>
            <p>
              Patients can expect clear communication, motivation through long treatments and patient-centred care,
              including surgery and treatment for people with oral disabilities and disorders.
            </p>
            <CheckList dark items={highlights} />
            <Link className="btn btn-red" href="/contact">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
