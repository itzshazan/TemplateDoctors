import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogSidebar, PostBody } from "@/components/Blog";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { Photo } from "@/components/Photo";
import { excerpt, formatDate, getPost, posts } from "@/data/blog";
import { images } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: post.title, description: excerpt(post, 155) };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <InnerBanner image={images.innerBanners.blog} caption={null} />
      <Breadcrumb trail={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      <div className="inner-cont">
        <div className="lay-width tcontainer tcontainer--blog">
          <div className="tright">
            <article className="tright-text post">
              <div className="ddate">{formatDate(post.date)}</div>
              <h2>{post.title}</h2>
              <Photo src={post.image} alt={post.title} aspect="16 / 9" className="post-hero" />
              <PostBody blocks={post.body} />
            </article>
          </div>
          <BlogSidebar activeCategory={post.category} />
        </div>
      </div>
    </>
  );
}
