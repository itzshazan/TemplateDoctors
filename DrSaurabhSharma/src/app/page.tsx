import Link from "next/link";
import { BannerSlider } from "@/components/BannerSlider";
import { Carousel } from "@/components/Carousel";
import { ContactForm } from "@/components/ContactForm";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Icon } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import {
  canContact,
  clinics,
  contact,
  doctor,
  doctorBio,
  gallery,
  images,
  services,
  stats,
  welcome,
} from "@/data/site";
import { asset, resolveAsset } from "@/lib/assets";

export default function HomePage() {
  const reviewLogo = resolveAsset(images.googleReviewLogo);
  const slides = images.banners.map((src) => ({
    image: asset(src),
    kicker: "Expert care for your",
    title: "Bones & Joints",
    href: "#services",
  }));


  return (
    <>
      <div id="home">
        <BannerSlider slides={slides} />
      </div>

      <section className="service-area">
        <div className="service-area-main">
          <div className="lay-width">
            <Carousel label="Our services" className="ser-slider">
              {services.map((s) => (
                <div className="ser-card" key={s.id}>
                  <Link href={`#${s.id}`} className="s-icon" aria-label={s.title}>
                    <Icon name={s.icon} size={78} strokeWidth={1.9} />
                  </Link>
                  <h3>
                    <Link href={`#${s.id}`}>{s.title}</Link>
                  </h3>
                  <p>{s.teaser}</p>
                  <Link href={`#${s.id}`} className="srmore">
                    Read More
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="service-area-bdr lay-width" />
      </section>

      <div id="about">
      <section className="welcome-area">
        <div className="lay-width welcome-grid">
          <div className="wimg">
            <div className="wimg-frame">
              <Photo src={images.welcome} alt="Orthopaedic consultation" aspect="1 / 1" />
            </div>
          </div>
          <div className="wtext">
            <h2>
              {welcome.heading} <span>{welcome.highlight}</span>
            </h2>
            {welcome.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="about-cont">
        <div className="lay-width about-dr">
          <div className="dr-left">
            <Photo src={images.doctorProfile} alt="Orthopaedic consultation" aspect="4 / 5" />
          </div>
          <div className="dr-right">
            <h2>{doctor.name}</h2>
            <h3>{doctor.qualifications}</h3>
            <p>{doctorBio.intro}</p>
            <p>{doctorBio.education}</p>
            <ul className="listdr">
              {stats.map((s) => (
                <li key={s.label}>
                  <Icon name={s.icon} size={40} />
                  <h4>{s.value}</h4>
                  <p>{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about-bot">
          <div className="lay-width">
            {doctorBio.more.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
      </div>

      <div id="services">
      <div className="inner-cont">
        <div className="lay-width">
          <h2>Our Services</h2>
        </div>
        <div className="lay-width tcontainer">
          <aside className="tleft">
            <div className="left-links">
              <ul>
                {services.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.menuLabel}</a>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#about" className="left-doctor">
              <Photo src={images.doctorSidebar} alt="Orthopaedic care" aspect="1 / 1" />
              <span>
                <strong>{doctor.name}</strong>
                {doctor.qualifications}
              </span>
            </a>
          </aside>
          <div className="tright">
            <div className="tright-text">
              {services.map((s) => (
                <section key={s.id} id={s.id} className="service-block">
                  <h2>{s.title}</h2>
                  {s.body.map((b, i) => (
                    <div key={i}>
                      {b.heading && <h3>{b.heading}</h3>}
                      <p>{b.text}</p>
                    </div>
                  ))}
                  {s.images && (
                    <div className={s.images.length > 1 ? "two-col" : undefined}>
                      {s.images.map((src) => (
                        <Photo key={src} src={src} alt={s.title} aspect="4 / 3" />
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>

      <div id="gallery">
      <div className="inner-cont">
        <div className="lay-width">
          <h2>Gallery</h2>
          <GalleryGrid items={gallery.map((src) => asset(src))} />
        </div>
      </div>
      </div>

      <div id="contact">
      <div className="inner-cont contact-us">
        <div className="lay-width">
          <h2>Contact Us</h2>
          <div className="clinic-cards">
            {clinics.map((c) => (
              <div key={c.name} className="clinic-col">
              <ul className="clinic-card">
                <li>
                  <span className="icn"><Icon name="pin" size={22} /></span>
                  <div className="dinfo">
                    <h5>Address</h5>
                    <h4>
                      <strong>{c.name}:</strong>
                      <br />
                      {c.address}
                    </h4>
                  </div>
                </li>
                {contact.phone && (
                  <li>
                    <span className="icn"><Icon name="phone" size={22} /></span>
                    <div className="dinfo">
                      <h5>Phone</h5>
                      <h4><a href={contact.phoneHref}>{contact.phone}</a></h4>
                    </div>
                  </li>
                )}
                {contact.email && (
                  <li>
                    <span className="icn"><Icon name="mail" size={22} /></span>
                    <div className="dinfo">
                      <h5>Email</h5>
                      <h4><a href={`mailto:${contact.email}`}>{contact.email}</a></h4>
                    </div>
                  </li>
                )}
                <li>
                  <span className="icn"><Icon name="home" size={22} /></span>
                  <div className="dinfo">
                    <h5>Directions</h5>
                    <h4><a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></h4>
                  </div>
                </li>
                <li>
                  <span className="icn"><Icon name="clock" size={22} /></span>
                  <div className="dinfo">
                    <h5>Timing</h5>
                    <h4>
                      {c.timing.map((t) => (
                        <span key={t} className="block">{t}</span>
                      ))}
                    </h4>
                  </div>
                </li>
              </ul>
              </div>
            ))}
          </div>
        </div>
        {canContact && (
          <div className="contact-form-band">
            <div className="contact-form-box">
              <h3>Fill the form for appointment:</h3>
              <ContactForm variant="full" />
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
}
