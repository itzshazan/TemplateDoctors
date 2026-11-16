import React from "react";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { clinic, navigation, routeTitles } from "../data/site";

/** Turns "/some-page-slug" into "Some Page Slug" when the route is not in the nav. */
export const titleFromSlug = (path: string) =>
  path
    .replace(/^\/|\/$/g, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const serviceGroups = navigation.find((n) => n.label === "Services")?.children ?? [];

export const innerPageTitle = (path: string) => routeTitles[path] ?? titleFromSlug(path);

/**
 * Fallback template for any URL that doesn't match a known page.
 * Add a dedicated template by handling the path in src/views/resolveRoute.ts.
 */
export default function InnerPage({ path }: { path: string }) {
  const title = innerPageTitle(path);

  return (
    <>
      <PageHeader title={title} />
      <section className="inner-page">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <article className="inner-page__content">
                <h2 className="block-title__title">{title}</h2>
                <p className="text">
                  Content for this page is coming soon. For consultations about {title.toLowerCase()}, please contact
                  {clinic.name} or book an appointment with {clinic.doctor}.
                </p>
                <Link href="/contact-us" className="thm-btn">
                  Book an Appointment
                </Link>
              </article>
            </div>
            <aside className="col-4">
              {serviceGroups.map((group) => (
                <div className="sidebar-widget" key={group.label}>
                  <h3>{group.label}</h3>
                  <ul>
                    {group.children?.map((item) => (
                      <li key={item.label}>
                        <Link href={item.to ?? "/"} className={item.to === path ? "is-active" : undefined}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="sidebar-widget sidebar-widget--cta">
                <h3>Need help?</h3>
                <p>Call us today</p>
                <a href={clinic.phoneHref}>{clinic.phone}</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
