import React from "react";
import Link from "next/link";
import { news, newsIntro } from "../../data/site";
import { UserIcon } from "../Icons";
import Reveal from "../Reveal";
import SectionTitle from "../SectionTitle";

export default function News() {
  return (
    <section className="news">
      <div className="container">
        <SectionTitle tag={newsIntro.tag} title={newsIntro.title} center>
          <p>
            {newsIntro.text[0]}
            <br />
            {newsIntro.text[1]}
          </p>
        </SectionTitle>
        <div className="news__grid">
          {news.map((post, i) => (
            <Reveal key={post.to} delay={i * 120}>
              <article className="news-card">
                <Link href={post.to} className="news-card__image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="news-card__date">
                    <strong>{post.day}</strong>
                    {post.month}
                  </span>
                </Link>
                <div className="news-card__body">
                  <p className="news-card__meta">
                    <UserIcon size={13} /> Kashvi Mediclinic
                  </p>
                  <h3>
                    <Link href={post.to}>{post.title}</Link>
                  </h3>
                  <Link href={post.to} className="news-card__more">
                    Read More
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
