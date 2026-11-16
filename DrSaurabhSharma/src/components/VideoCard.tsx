import { assetExists } from "@/lib/assets";
import { Placeholder } from "./Placeholder";

export function VideoCard({ src, label }: { src: string; label: string }) {
  if (!assetExists(src)) {
    return <Placeholder label={label} className="vframe vframe--placeholder" />;
  }
  return (
    <video className="vframe" controls preload="metadata" aria-label={label}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
