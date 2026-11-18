import { doctor } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="lay-width">
        <p>
          Copyright © {new Date().getFullYear()} {doctor.name} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
