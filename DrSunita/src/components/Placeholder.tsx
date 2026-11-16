import { Icon } from "./Icons";

/** Shown wherever a photo/video hasn't been added to /public yet. */
export function Placeholder({
  label,
  className = "",
  style,
}: {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`placeholder ${className}`} style={style} role="img" aria-label={label}>
      <Icon name="image" size={34} />
      <span>{label}</span>
    </div>
  );
}
