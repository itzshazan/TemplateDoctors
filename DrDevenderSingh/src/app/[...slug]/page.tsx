import type { Metadata } from "next";
import RouteResolver from "../../views/RouteResolver";
import { allRoutePaths, resolveRoute, routeTitle } from "../../views/resolveRoute";

type Params = Promise<{ slug: string[] }>;

const toPath = (slug: string[]) => "/" + slug.map(decodeURIComponent).join("/");

/** Pre-render every known page (services, about pages, hub pages, blog listings and posts). */
export function generateStaticParams() {
  return allRoutePaths().map((path) => ({ slug: path.slice(1).split("/") }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  return { title: routeTitle(resolveRoute(toPath(slug))) };
}

/** Catch-all route: chooses the right template for any URL other than / and /contact-us. */
export default async function CatchAllPage({ params }: { params: Params }) {
  const { slug } = await params;
  return <RouteResolver route={resolveRoute(toPath(slug))} />;
}
