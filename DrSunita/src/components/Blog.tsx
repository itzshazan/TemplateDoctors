import Link from "next/link";
import {
  archiveMonths,
  categories,
  excerpt,
  formatDate,
  monthLabel,
  type Block,
  type Post,
} from "@/data/blog";
import { Photo } from "./Photo";

export function PostCard({ post, showExcerpt = true, showDate = true }: { post: Post; showExcerpt?: boolean; showDate?: boolean }) {
  const href = `/blog/${post.slug}`;
  return (
    <li className="post-card">
      <Link href={href} className="post-thumb" title={post.title}>
        <Photo src={post.image} alt={post.title} aspect="16 / 10" />
      </Link>
      <div className="bcont">
        {showDate && <div className="datestyle">{formatDate(post.date)}</div>}
        <h3>
          <Link href={href}>{post.title}</Link>
        </h3>
        {showExcerpt && <p>{excerpt(post)}</p>}
        {showExcerpt && (
          <Link href={href} className="srmore" title={`Read More - ${post.title}`}>
            Read More
          </Link>
        )}
      </div>
    </li>
  );
}

export function BlogSidebar({ activeCategory, activeMonth }: { activeCategory?: string; activeMonth?: string }) {
  return (
    <aside className="tleft">
      <h3>Categories</h3>
      <div className="left-links">
        <ul>
          {categories.map((c) => (
            <li key={c.slug} className={c.slug === activeCategory ? "on" : undefined}>
              <Link href={`/blog/category/${c.slug}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <h3>Archives</h3>
      <div className="left-links">
        <ul>
          {archiveMonths().map(({ year, month }) => {
            const key = `${year}/${month}`;
            return (
              <li key={key} className={key === activeMonth ? "on" : undefined}>
                <Link href={`/blog/archive/${key}`}>{monthLabel(year, month)}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export function PostList({ title, posts }: { title: string; posts: Post[] }) {
  return (
    <div className="tright-text blog-area blog-list">
      <h2>{title}</h2>
      {posts.length ? (
        <ul>
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return <p key={i}>{b.text}</p>;
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "ul":
            return (
              <ul key={i} className="list-style">
                {b.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-number">
                {b.items.map((it) => <li key={it}>{it}</li>)}
              </ol>
            );
        }
      })}
    </>
  );
}
