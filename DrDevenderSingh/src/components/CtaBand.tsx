import Link from "next/link";
import { clinic, img } from "../data/site";

/** "Have Any Problem? Call us…" strip shown at the bottom of inner pages. */
export default function CtaBand({ label = "Have Any Problem" }: { label?: string }) {
  return (
    <section className="cta-band" style={{ backgroundImage: `url(${img("hero-2.jpg")})` }}>
      <div className="container cta-band__inner">
        <h4>
          {label}
          <br />
          Call us at <a href={clinic.phoneHref}>{clinic.phone}</a> or make an <span>appointment</span>
        </h4>
        <Link href="/#contact" className="thm-btn">
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
