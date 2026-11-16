import { resolveAsset } from "@/lib/assets";
import { Placeholder } from "./Placeholder";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Placeholder sizing when the file is missing. */
  aspect?: string;
  style?: React.CSSProperties;
};

/** Server component: renders the image if it exists in /public, else a placeholder. */
export function Photo({ src, alt, className, aspect = "4 / 3", style }: Props) {
  const resolved = resolveAsset(src);
  if (resolved) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={resolved} alt={alt} className={className} style={style} loading="lazy" />;
  }
  return <Placeholder label={alt} className={className} style={{ aspectRatio: aspect, ...style }} />;
}
