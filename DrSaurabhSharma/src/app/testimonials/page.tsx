import type { Metadata } from "next";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { Icon } from "@/components/Icons";
import { VideoCard } from "@/components/VideoCard";
import { contact, images, testimonials } from "@/data/site";

export const metadata: Metadata = { title: "Patients Testimonials" };

export default function TestimonialsPage() {
  return (
    <>
      <InnerBanner image={images.innerBanners.testimonials} caption={null}>
        <div className="tbanner-cap">
          <small>WHAT OUR PATIENT</small>
          <strong>ARE SAYING</strong>
        </div>
      </InnerBanner>
      <Breadcrumb trail={[{ label: "Patients Testimonials" }]} />
      <div className="inner-cont">
        <div className="testimonials">
          <h2>Patients Testimonials</h2>
          <ul>
            {testimonials.map((t) => (
              <li key={t.name}>
                <div className="lay-width-t">
                  <Icon name="quote" size={44} className="q-open" />
                  <Icon name="quote" size={44} className="q-close" />
                  <p>{t.quote}</p>
                  <div className="tname">{t.name}</div>
                </div>
              </li>
            ))}
            <li className="reviews-cta">
              <div className="lay-width-t">
                <Icon name="quote" size={44} className="q-open" />
                <Icon name="quote" size={44} className="q-close" />
                <p>
                  Read what patients say about their visits, or share your own experience, on our Google
                  reviews page.
                </p>
                <a className="btn1" href={contact.googleReviews} target="_blank" rel="noopener noreferrer">
                  View Google Reviews
                </a>
              </div>
            </li>
          </ul>
          <div className="lay-width video-grid">
            {images.testimonialVideos.map((src, i) => (
              <VideoCard key={src} src={src} label={`Patient testimonial video ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
