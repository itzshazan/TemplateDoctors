import CardGrid from "@/components/CardGrid";
import CheckList from "@/components/CheckList";
import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import Icon from "@/components/Icon";
import { SITE, tel } from "@/config/site";
import { galleryImages } from "@/config/content";

const gallery = [...galleryImages, { src: "/img/feature.jpg", alt: "X-ray consultation" }];

export default function HomePage() {
  return (
    <>
      {/* ===== HOME ===== */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-text">
            <span className="eyebrow">Orthopaedic Care in Ballabhgarh</span>
            <h1>Strong Bones, Healthy Joints, Pain-Free Movement</h1>
            <p>
              {SITE.name} treats fractures, joint pain, arthritis, back and neck pain and sports injuries at {SITE.clinic},
              Jain Colony, Ballabhgarh — rated {SITE.rating.score}★ by {SITE.rating.count}+ patients on Google.
            </p>
            <div className="hero-actions">
              <a className="btn btn-red" href="#contact">Book Appointment</a>
              <a className="btn btn-white" href={tel(SITE.phone)}>Call Now</a>
            </div>
          </div>
          <div className="hero-img">
            <img src="/img/hero.jpg" alt="Orthopaedic knee examination" width={600} height={760} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="section about-page" id="about">
        <div className="container">
          <div className="media reveal">
            <img src="/img/consult.jpg" alt={`${SITE.name} with a patient`} width={800} height={600} />
          </div>
          <div className="reveal">
            <span className="eyebrow">Meet Your Doctor</span>
            <h2 className="doctor-name">{SITE.name}</h2>
            <p className="doctor-role">{SITE.title}</p>
            <p>{SITE.name} is an orthopaedic doctor who consults at {SITE.clinic}, near Ahir Haveli, Jain Colony, Ballabhgarh, Faridabad. The clinic is open all week, with long evening hours for working patients.</p>
            <p>He treats fractures and injuries, knee and joint pain, arthritis, back and neck pain, sciatica, sports injuries and osteoporosis — and guides patients who need joint replacement or rehabilitation.</p>
            <p>Patients value his calm, polite manner: he listens patiently, explains every step clearly and recommends only the tests and treatment you actually need.</p>
            <CheckList
              dark
              items={[`${SITE.rating.score}★ rating from ${SITE.rating.count}+ Google reviews`, "Open 7 days, including Sunday mornings", `Consultant at ${SITE.clinic}, Ballabhgarh`]}
            />
            <a className="btn btn-red" href="#contact">Book Appointment</a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="cards-section" id="services">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Specialities</span>
            <h2 className="section-title">Complete Bone, Joint &amp; Spine Care</h2>
          </div>
          <CardGrid items={SITE.services} />
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Gallery</span>
            <h2 className="section-title">Orthopaedic Care</h2>
          </div>
          <Gallery images={gallery} className="cols-3" />
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section contact-wrap" id="contact">
        <div className="container">
          <div className="contact-info reveal">
            <span className="eyebrow">Get in Touch</span>
            <h2>We&apos;re Happy To Help</h2>
            <p>Call or WhatsApp to book an appointment, or walk in during OPD hours. For a serious injury, please call directly.</p>
            <ul className="info-list">
              <li>
                <span className="badge"><Icon name="phone" /></span>
                <div><strong>Phone</strong><a href={tel(SITE.phone)}>{SITE.phone}</a></div>
              </li>
              {SITE.email && (
                <li>
                  <span className="badge"><Icon name="mail" /></span>
                  <div><strong>Email</strong><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
                </li>
              )}
              <li>
                <span className="badge"><Icon name="pin" /></span>
                <div><strong>Address</strong><span>{SITE.address}</span></div>
              </li>
              <li>
                <span className="badge"><Icon name="clock" /></span>
                <div><strong>Clinic Hours</strong>{SITE.hoursList.map((h) => <span key={h} style={{ display: "block" }}>{h}</span>)}</div>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
