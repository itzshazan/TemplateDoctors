import Link from "next/link";
import { resolveAsset } from "@/lib/assets";
import { bannerCaption } from "@/data/site";

export function InnerBanner({
  image,
  caption = bannerCaption,
  children,
}: {
  image: string;
  caption?: string | null;
  children?: React.ReactNode;
}) {
  const resolved = resolveAsset(image);
  return (
    <div
      className={`inner-banner${resolved ? "" : " inner-banner--placeholder"}`}
      style={resolved ? { backgroundImage: `url(${resolved})` } : undefined}
    >
      {(caption || children) && (
        <div className="lay-width">
          {caption && <div className="innerbcaption">{caption}</div>}
          {children}
        </div>
      )}
    </div>
  );
}

export function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <div className="bradcrumb">
      <div className="lay-width">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          {trail.map((t) => (
            <li key={t.label}>{t.href ? <Link href={t.href}>{t.label}</Link> : t.label}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
