import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import SmartLink from "../components/SmartLink";
import { ArrowRightIcon } from "../components/Icons";
import type { GridPage as GridPageData } from "../data/pages";
import { clinic } from "../data/site";

/** Card grid used by /service, the blog hub pages (e.g. /pcos) and /media. */
export default function GridPage({ page, embedded = false }: { page: GridPageData; embedded?: boolean }) {
  return (
    <>
      {!embedded && <PageHeader title={page.title} />}
      <section className="service-grid">
        <div className="container">
          <div className="block-title block-title--center">
            <p className="block-title__tag">{page.sub}</p>
            <h2 className="block-title__title">{clinic.name}</h2>
            <div className="block-title__text">
              <p>{page.intro}</p>
            </div>
          </div>
          <div className="service-grid__items">
            {page.cards.map((card, i) => (
              <div className="grid-card" key={card.title + i}>
                <div className="grid-card__image">
                  {card.image && <img src={card.image} alt={card.title} loading="lazy" />}
                  {card.link && (
                    <div className="grid-card__hover">
                      <SmartLink to={card.link} aria-label={card.title}>
                        <ArrowRightIcon size={20} />
                      </SmartLink>
                    </div>
                  )}
                </div>
                <div className="grid-card__content">
                  <h3>{card.link ? <SmartLink to={card.link}>{card.title}</SmartLink> : card.title}</h3>
                  {card.text && <p>{card.text}</p>}
                  {card.link && (
                    <SmartLink to={card.link} className="grid-card__link">
                      Read More
                    </SmartLink>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {!embedded && <CtaBand />}
    </>
  );
}
