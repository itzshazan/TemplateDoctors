import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { CheckIcon, MailIcon, MapPinIcon, PhoneIcon } from "../components/Icons";
import { doctorProfile as d } from "../data/pages";
import { clinic } from "../data/site";

function HistoryList({ tag, title, items }: { tag: string; title: string; items: string[] }) {
  const half = Math.ceil(items.length / 2);
  return (
    <section className="history">
      <div className="container">
        <div className="block-title">
          <p className="block-title__tag">{tag}</p>
          <h2 className="block-title__title">{title}</h2>
        </div>
        <div className="history__grid">
          {[items.slice(0, half), items.slice(half)].map((col, i) => (
            <div key={i}>
              {col.map((item) => (
                <div className="history__item" key={item}>
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** `embedded` renders the profile as a home-page section (no banner or closing call-to-action). */
export default function DoctorProfilePage({ embedded = false }: { embedded?: boolean }) {
  return (
    <>
      {!embedded && <PageHeader title={d.bannerTitle} crumb={d.title} />}

      <section className="doctor-two">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img src={d.image} alt={d.name} className="doctor-two__image" />
            </div>
            <div className="col-8">
              <div className="doctor-two__content">
                <p className="block-title__tag">{d.tag}</p>
                <h2 className="doctor-two__title">{d.name}</h2>
                <p className="text">{d.bio}</p>

                <h2 className="doctor-two__sub-title">{d.experienceTitle}</h2>
                <ul className="doctor-two__timeline">
                  {d.experience.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>

                <h2 className="doctor-two__sub-title">{d.consultantTitle}</h2>
                <p className="text">{d.consultantText}</p>

                <h2 className="doctor-two__sub-title">{d.ukTitle}</h2>
                <p className="text">{d.ukText}</p>
                <ul className="check-list">
                  {d.ukList.map((item) => (
                    <li key={item}>
                      <CheckIcon size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {d.registrations.length > 0 && <HistoryList tag="Registrations" title="Professional Registrations" items={d.registrations} />}
      {d.memberships.length > 0 && <HistoryList tag="Memberships" title="Professional Memberships" items={d.memberships} />}

      {d.publications.length > 0 && (
      <section className="about-four">
        <div className="container">
          <div className="row row--center">
            <div className="col-6">
              <div className="block-title">
                <p className="block-title__tag">My Publications</p>
                <h2 className="block-title__title">Research and Publications</h2>
              </div>
              <ul className="dash-list">
                {d.publications.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <h3 className="about-four__sub-title">Presentations</h3>
              <ul className="dash-list">
                {d.presentations.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="col-6">
              <img src={d.publicationsImage} alt="" className="about-four__image" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      )}

      {!embedded && (
        <>
      <section className="question-strip">
        <div className="container question-strip__inner">
          <h2>Do You Have Any Question</h2>
          <div className="question-strip__widgets">
            <p>
              <MapPinIcon size={18} /> {clinic.footerAddress}
            </p>
            <p>
              <PhoneIcon size={18} /> <a href={clinic.phoneHref}>{clinic.phone}</a>
            </p>
            {clinic.email && (
              <p>
                <MailIcon size={18} /> <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
              </p>
            )}
          </div>
        </div>
      </section>

      <CtaBand label="Need to See a Doctor?" />
        </>
      )}
    </>
  );
}
