import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icon";
import { SITE, tel } from "@/config/site";
import { emergencyContacts } from "@/config/content";

export const metadata: Metadata = {
  title: "Emergency",
  description: `Emergency contact numbers for ${SITE.name} and the associated hospital.`,
};

export default function EmergencyPage() {
  return (
    <>
      <PageBanner title="Emergency Contact" crumb="Emergency" />
      <section className="section" style={{ background: "var(--blue-bg)" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Urgent Help</span>
            <h2 className="section-title">Emergency Contact Services</h2>
            <p>For a serious accident, heavy bleeding, a suspected spine injury or an open fracture, call an ambulance immediately — don&apos;t wait for a call back.</p>
          </div>
          <div className="emergency-grid">
            {emergencyContacts.map((c) => (
              <div className="e-card reveal" key={c.title}>
                <div className="badge"><Icon name={c.icon} /></div>
                <h3>{c.title}</h3>
                <a className="num" href={tel(c.number)}>{c.number}</a>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
