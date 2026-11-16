import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export default function NotFound() {
  return (
    <>
      <PageBanner title="Page Not Found" crumb="404" />
      <section className="section text-center">
        <div className="container">
          <p>Sorry, the page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link className="btn btn-red" href="/">Back to Home</Link>
        </div>
      </section>
    </>
  );
}
