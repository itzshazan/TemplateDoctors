import Link from "next/link";
import { BannerSlider } from "@/components/BannerSlider";
import { Carousel } from "@/components/Carousel";
import { ContactSection } from "@/components/ContactSection";
import { Icon } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { contact, doctor, doctorBio, images, services, stats, welcome } from "@/data/site";
import { asset, resolveAsset } from "@/lib/assets";

export default function HomePage() {
  const reviewLogo = resolveAsset(images.googleReviewLogo);
  const slides = images.banners.map((src) => ({
    image: asset(src),
    kicker: "Expert care for your",
    title: "Bones & Joints",
    href: "/services",
  }));


  return (
    <>
      <BannerSlider slides={slides} />

      <section className="service-area">
        <div className="service-area-main">
          <div className="lay-width">
            <Carousel label="Our services" className="ser-slider">
              {services.map((s) => (
                <div className="ser-card" key={s.id}>
                  <Link href={`/services#${s.id}`} className="s-icon" aria-label={s.title}>
                    <Icon name={s.icon} size={78} strokeWidth={1.9} />
                  </Link>
                  <h3>
                    <Link href={`/services#${s.id}`}>{s.title}</Link>
                  </h3>
                  <p>{s.teaser}</p>
                  <Link href={`/services#${s.id}`} className="srmore">
                    Read More
                  </Link>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="service-area-bdr lay-width" />
      </section>

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

      <section className="dr-area">
        <div className="lay-width dr-grid">
          <div className="dr-text">
            <h2>{doctor.name}</h2>
            <h3>{doctor.qualifications}</h3>
            <p>{doctorBio.intro}</p>
            <div className="tbtn">
              <Link href="/meet-the-doctor">View Full Profile</Link>
              <Link href="/contact-us">Make An Appointment</Link>
            </div>
            <div className="dr-links">
              <a href={contact.googleReviews} target="_blank" rel="noopener noreferrer" className="google-review">
                {reviewLogo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={reviewLogo} alt="Google reviews" width={120} />
                ) : (
                  <span className="google-review-badge">
                    <b>G</b>
                    <span>
                      <small>Review us on</small>
                      <strong>GOOGLE</strong>
                      <i aria-hidden="true">★★★★★</i>
                    </span>
                  </span>
                )}
              </a>
            </div>
          </div>
          <div className="dr-img">
            <Photo src={images.doctorCutout} alt="Knee examination" aspect="1 / 1" />
          </div>
          <div className="dr-form">
            <ul>
              {stats.map((s) => (
                <li key={s.label}>
                  <Icon name={s.icon} size={36} />
                  <h3>{s.value}</h3>
                  <p>{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
