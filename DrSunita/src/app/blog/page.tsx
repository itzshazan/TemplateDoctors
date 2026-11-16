import type { Metadata } from "next";
import { BlogSidebar, PostList } from "@/components/Blog";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { posts } from "@/data/blog";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Women\u2019s health tips from Dr Sunita Clinic: pregnancy, periods, PCOS, anaemia and cervical cancer screening.",
};

export default function BlogPage() {
  return (
    <>
      <InnerBanner image={images.innerBanners.blog} caption={null} />
      <Breadcrumb trail={[{ label: "Blog" }]} />
      <div className="inner-cont">
        <div className="lay-width tcontainer tcontainer--blog">
          <div className="tright">
            <PostList title="Blog" posts={posts} />
          </div>
          <BlogSidebar />
        </div>
      </div>
    </>
  );
}
