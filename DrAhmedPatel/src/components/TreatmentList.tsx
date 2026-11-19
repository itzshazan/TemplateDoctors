import PageBanner from "./PageBanner";
import CardGrid from "./CardGrid";
import { SITE } from "@/config/site";

/** Body of the /services page. Cards come from SITE.services. */
export default function TreatmentList() {
  return (
    <>
      <PageBanner title="Services" />
      <section className="cards-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Treatments</span>
            <h2 className="section-title">Implants, Rehabilitation &amp; Smile Care</h2>
          </div>
          <CardGrid items={SITE.services} />
        </div>
      </section>
    </>
  );
}
