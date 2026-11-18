import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Icon } from "@/components/Icons";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { Photo } from "@/components/Photo";
import { doctor, doctorBio, images, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "Meet The Doctor",
  description: `${doctor.name} – gynaecologist at Dr Sunita Clinic, Kotla Mahingiran, Lal Kuan, Faridabad.`,
};

export default function MeetTheDoctorPage() {
  return (
    <>
      <InnerBanner image={images.innerBanners.doctor} />
      <Breadcrumb trail={[{ label: "Meet The Doctor" }]} />
      <div className="about-cont">
        <div className="lay-width about-dr">
          <div className="dr-left">
            <Photo src={images.doctorProfile} alt="Pregnancy check-up" aspect="4 / 5" />
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
      <ContactSection />
    </>
  );
}
