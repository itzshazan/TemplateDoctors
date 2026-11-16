import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogSidebar, PostList } from "@/components/Blog";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { archiveMonths, monthLabel, posts } from "@/data/blog";
import { images } from "@/data/site";

type Props = { params: Promise<{ year: string; month: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return archiveMonths().map(({ year, month }) => ({ year: String(year), month: String(month) }));
}

async function resolve(params: Props["params"]) {
  const { year, month } = await params;
  const y = Number(year);
  const m = Number(month);
  const match = archiveMonths().some((a) => a.year === y && a.month === m);
  return match ? { y, m } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = await resolve(params);
  return r ? { title: `Archive ${monthLabel(r.y, r.m)} – Blog` } : {};
}

export default async function ArchivePage({ params }: Props) {
  const r = await resolve(params);
  if (!r) notFound();
  const prefix = `${r.y}-${String(r.m).padStart(2, "0")}`;
  const label = monthLabel(r.y, r.m);

  return (
    <>
      <InnerBanner image={images.innerBanners.blog} caption={null} />
      <Breadcrumb trail={[{ label: "Blog", href: "/blog" }, { label: label }]} />
      <div className="inner-cont">
        <div className="lay-width tcontainer tcontainer--blog">
          <div className="tright">
            <PostList title={`Archive: ${label}`} posts={posts.filter((p) => p.date.startsWith(prefix))} />
          </div>
          <BlogSidebar activeMonth={`${r.y}/${r.m}`} />
        </div>
      </div>
    </>
  );
}
