import React from "react";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import CtaBand from "../components/CtaBand";
import { ArrowLeftIcon, ArrowRightIcon, UserIcon } from "../components/Icons";
import { dayMonth, POSTS_PER_PAGE, type PostMeta } from "../data/blog";

interface BlogListPageProps {
  title: string;
  crumb: string;
  posts: PostMeta[];
  page: number;
  /** Base path for pagination links, e.g. "/blogs" or "/category/pcos". */
  basePath: string;
}

/** Two-column blog listing with numbered pagination (/blogs, /category/..., /author/admin). */
export default function BlogListPage({ title, crumb, posts, page, basePath }: BlogListPageProps) {
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const current = Math.min(Math.max(1, page), totalPages);
  const visible = posts.slice((current - 1) * POSTS_PER_PAGE, current * POSTS_PER_PAGE);
  const pageHref = (n: number) => (n === 1 ? basePath : `${basePath}/page/${n}`);

  return (
    <>
      <PageHeader title={title} crumb={crumb} />
      <section className="blog-list">
        <div className="container">
          {visible.length === 0 && <p className="text">No posts found.</p>}
          <div className="blog-list__grid">
            {visible.map((post) => {
              const { day, month } = dayMonth(post.date);
              return (
                <article className="blog-card" key={post.slug}>
                  <div className="blog-card__image">
                    {post.thumb && <img src={post.thumb} alt={post.title} loading="lazy" />}
                    <span className="blog-card__date">
                      <strong>{day}</strong>
                      {month}
                    </span>
                    <div className="blog-card__hover">
                      <Link href={`/${post.slug}`} aria-label={post.title}>
                        <ArrowRightIcon size={20} />
                      </Link>
                    </div>
                  </div>
                  <ul className="post__meta">
                    <li>
                      <Link href="/blogs">
                        <UserIcon size={15} /> Dr. Devender Singh
                      </Link>
                    </li>
                    {post.categories.length > 0 && (
                      <li>
                        {post.categories.slice(0, 2).map((c, i) => (
                          <React.Fragment key={c.slug}>
                            {i > 0 && ", "}
                            <Link href={`/category/${c.slug}`}>{c.name}</Link>
                          </React.Fragment>
                        ))}
                      </li>
                    )}
                  </ul>
                  <h2 className="blog-card__title">
                    <Link href={`/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <Link href={`/${post.slug}`} className="blog-card__more">
                    Read More
                  </Link>
                </article>
              );
            })}
          </div>

          {totalPages > 1 && (
            <ul className="pagination">
              {current > 1 && (
                <li>
                  <Link href={pageHref(current - 1)} aria-label="Previous page">
                    <ArrowLeftIcon size={16} />
                  </Link>
                </li>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <li key={n}>
                  {n === current ? <span className="is-current">{n}</span> : <Link href={pageHref(n)}>{n}</Link>}
                </li>
              ))}
              {current < totalPages && (
                <li>
                  <Link href={pageHref(current + 1)} aria-label="Next page">
                    <ArrowRightIcon size={16} />
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
