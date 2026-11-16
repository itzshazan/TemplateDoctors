import React from "react";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import { UserIcon } from "../components/Icons";
import { formatDate } from "../data/blog";

export interface SinglePostProps {
  title: string;
  date: string;
  image?: string;
  categories?: { name: string; slug: string }[];
  /** Trusted HTML for the article body. */
  html?: string;
  /** Plain React children used when no HTML body is available. */
  children?: React.ReactNode;
}

/** Single article layout (blog posts and the /service/... pages): image, date, meta line, body. */
export default function SinglePostPage({ title, date, image, categories = [], html, children }: SinglePostProps) {
  return (
    <>
      <section className="single-post">
        <div className="container">
          <article className="post">
            {image && (
              <div className="post__image">
                <img src={image} alt={title} />
                <span className="post__date">{formatDate(date)}</span>
              </div>
            )}
            <ul className="post__meta">
              <li>
                <Link href="/blogs">
                  <UserIcon size={15} /> Kashvi Mediclinic
                </Link>
              </li>
              {categories.length > 0 && (
                <li>
                  {categories.map((c, i) => (
                    <React.Fragment key={c.slug}>
                      {i > 0 && ", "}
                      <Link href={`/category/${c.slug}`}>{c.name}</Link>
                    </React.Fragment>
                  ))}
                </li>
              )}
            </ul>
            <h1 className="post__title">{title}</h1>
            {html ? <div className="post__content" dangerouslySetInnerHTML={{ __html: html }} /> : <div className="post__content">{children}</div>}
          </article>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
