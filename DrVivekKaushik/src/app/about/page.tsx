import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import CheckList from "@/components/CheckList";
import Tabs from "@/components/Tabs";
import { SITE } from "@/config/site";
import { aboutJourney, aboutResearch } from "@/config/content";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE.name} — qualifications, experience and approach to patient care.`,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About" />

      <section className="section about-page">
        <div className="container">
          <div className="media reveal">
            <img src="/img/consult.jpg" alt={`${SITE.name} with a patient`} width={800} height={600} />
          </div>
          <div className="reveal">
            <span className="eyebrow">Your Orthopaedic Doctor</span>
            <h2 className="doctor-name">{SITE.name}</h2>
            <p className="doctor-role">{SITE.title}</p>
            <p>{SITE.name} is an orthopaedic doctor who consults at {SITE.clinic}, near Ahir Haveli, Jain Colony, Ballabhgarh, Faridabad. The clinic is open all week, with long evening hours for working patients.</p>
            <p>He treats fractures and injuries, knee and joint pain, arthritis, back and neck pain, sciatica, sports injuries and osteoporosis — and guides patients who need joint replacement or rehabilitation.</p>
            <p>Patients value his calm, polite manner: he listens patiently, explains every step clearly and recommends only the tests and treatment you actually need.</p>
            <CheckList
              dark
              items={[`${SITE.rating.score}★ rating from ${SITE.rating.count}+ Google reviews`, "Open 7 days, including Sunday mornings", `Consultant at ${SITE.clinic}, Ballabhgarh`]}
            />
            <Link className="btn btn-red" href="/contact">Book Appointment</Link>
          </div>
        </div>
      </section>

      <section className="tabs-section">
        <div className="container">
          <h2 className="tabs-title">Expertise &amp; Clinic</h2>
          <Tabs tabs={aboutJourney} />
        </div>
      </section>

      <section className="tabs-section" style={{ background: "#fff" }}>
        <div className="container">
          <h2 className="tabs-title">What Patients Say</h2>
          <Tabs tabs={aboutResearch} />
        </div>
      </section>
    </>
  );
}
