import { doctor } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="lay-width">
        <p>
          Copyright © {new Date().getFullYear()} {doctor.name} All Rights Reserved
        </p>
      </div>
      <div className="powered-by">
        <a href="https://doctorrating.in/" target="_blank" rel="noopener">
          Powered by <strong>DoctorRating</strong>
        </a>
      </div>
    </footer>
  );
}
