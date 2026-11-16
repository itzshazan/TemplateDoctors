import Link from "next/link";
import { doctor } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="lay-width">
        <p>
          Copyright © {new Date().getFullYear()} {doctor.name} All Rights Reserved |{" "}
          <Link href="/terms-of-use-disclaimer" className="footer-terms">
            Terms of Use/Disclaimer
          </Link>
        </p>
      </div>
    </footer>
  );
}
