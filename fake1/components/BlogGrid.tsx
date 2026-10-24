"use client";

import { useState } from "react";
import { blogCategories, posts } from "@/data/site";
import { Icon } from "./Icon";

export function BlogGrid() {
  const [category, setCategory] = useState(blogCategories[0]);
  const visible = category === blogCategories[0] ? posts : posts.filter((p) => p.category === category);

  return (
    <>
      <div className="blog-tabs" role="tablist">
        {blogCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={c === category}
            className={c === category ? "is-active" : ""}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="post-grid">
        {visible.map((p) => (
          <article key={p.title} className="post-card">
            <div className="post-image">
              <img src={p.image} alt="" loading="lazy" />
              <span className="post-category">{p.category}</span>
            </div>
            <div className="post-body">
              <p className="post-meta">
                <Icon name="calendar" size={14} /> {p.date} / No Comments
              </p>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <a href="#contact" className="read-more">
                Read More <Icon name="arrow" size={14} />
              </a>
            </div>
          </article>
        ))}
        {visible.length === 0 && <p className="post-empty">No posts in this category yet.</p>}
      </div>
    </>
  );
}
