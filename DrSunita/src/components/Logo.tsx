import Link from "next/link";
import { resolveAsset } from "@/lib/assets";
import { doctor, images } from "@/data/site";
import { Icon } from "./Icons";

export function Logo() {
  const logo = resolveAsset(images.logo);
  return (
    <Link href="/" className="logo" aria-label={`${doctor.name} – Home`}>
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={doctor.name} />
      ) : (
        <span className="logo-text">
          <Icon name="logoMark" size={64} className="logo-mark" />
          <span>
            <strong>{doctor.name}</strong>
            <em>{doctor.qualifications}</em>
          </span>
        </span>
      )}
    </Link>
  );
}
