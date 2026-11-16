import Link from "next/link";
import { Breadcrumb } from "@/components/InnerBanner";

export default function NotFound() {
  return (
    <>
      <Breadcrumb trail={[{ label: "Page not found" }]} />
      <div className="inner-cont not-found">
        <div className="lay-width">
          <h2>Page not found</h2>
          <p>Sorry, the page you are looking for doesn&rsquo;t exist or has moved.</p>
          <div className="tbtn">
            <Link href="/">Go to Home</Link>
            <Link href="/contact-us">Make An Appointment</Link>
          </div>
        </div>
      </div>
    </>
  );
}
