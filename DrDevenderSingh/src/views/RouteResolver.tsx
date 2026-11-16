import React from "react";
import Link from "next/link";
import { postContent, posts } from "../data/blog";
import type { ResolvedRoute } from "./resolveRoute";
import GridPage from "./GridPage";
import ServiceDetailsPage from "./ServiceDetailsPage";
import SinglePostPage from "./SinglePostPage";
import BlogListPage from "./BlogListPage";
import IntroductionPage from "./IntroductionPage";
import DoctorProfilePage from "./DoctorProfilePage";
import TestimonialsPage from "./TestimonialsPage";
import FaqPage from "./FaqPage";
import GalleryPage from "./GalleryPage";
import InnerPage from "./InnerPage";

/** Renders the template chosen by resolveRoute(). */
export default function RouteResolver({ route }: { route: ResolvedRoute }) {
  switch (route.kind) {
    case "introduction":
      return <IntroductionPage />;
    case "doctor-profile":
      return <DoctorProfilePage />;
    case "testimonials":
      return <TestimonialsPage />;
    case "faq":
      return <FaqPage />;
    case "gallery":
      return <GalleryPage />;
    case "grid":
      return <GridPage page={route.page} />;
    case "service":
      return <ServiceDetailsPage service={route.service} />;

    case "service-post": {
      const s = route.service;
      return (
        <SinglePostPage title={s.title} date={s.date} image={s.images[0]}>
          <p>{s.intro}</p>
          <p>{s.summary}</p>
          <p>
            <Link href={s.path} className="thm-btn">
              Learn more about {s.title}
            </Link>
          </p>
        </SinglePostPage>
      );
    }

    case "blog-list":
      return <BlogListPage title={route.title} crumb={route.crumb} posts={route.posts} page={route.page} basePath={route.basePath} />;

    case "post": {
      const post = route.post;
      const related = posts
        .filter((p) => p.slug !== post.slug && p.categories.some((c) => post.categories.some((pc) => pc.slug === c.slug)))
        .slice(0, 5);
      return (
        <SinglePostPage title={post.title} date={post.date} image={post.image} categories={post.categories} html={postContent[post.slug]}>
          <p>
            This article is being prepared. For advice on this topic, please book a consultation with Dr. Devender Singh.
          </p>
          <p>
            <Link href="/contact-us" className="thm-btn">
              Book an Appointment
            </Link>
          </p>
          {related.length > 0 && (
            <>
              <h3>Related articles</h3>
              <ul className="dash-list">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/${r.slug}`}>{r.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </SinglePostPage>
      );
    }

    case "fallback":
      return <InnerPage path={route.path} />;
  }
}
