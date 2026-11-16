import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogSidebar, PostList } from "@/components/Blog";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { categories, getCategory, posts } from "@/data/blog";
import { images } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategory((await params).slug);
  return cat ? { title: `${cat.name} – Blog` } : {};
}

export default async function CategoryPage({ params }: Props) {
  const cat = getCategory((await params).slug);
  if (!cat) notFound();

  return (
    <>
      <InnerBanner image={images.innerBanners.blog} caption={null} />
      <Breadcrumb trail={[{ label: "Blog", href: "/blog" }, { label: cat.name }]} />
      <div className="inner-cont">
        <div className="lay-width tcontainer tcontainer--blog">
          <div className="tright">
            <PostList title={cat.name} posts={posts.filter((p) => p.category === cat.slug)} />
          </div>
          <BlogSidebar activeCategory={cat.slug} />
        </div>
      </div>
    </>
  );
}
