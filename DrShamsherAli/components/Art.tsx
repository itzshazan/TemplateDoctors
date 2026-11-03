// Logo and initials avatar (shown until a real photo of the doctor is added).

export function Logo({ size = 48 }: { size?: number }) {
  return <img src="/logo.png" width={size} height={size} alt="" aria-hidden="true" style={{ display: "block" }} />;
}

const avatarColors = [
  ["#0c8577", "#4fc1b0"],
  ["#122274", "#5b6bc0"],
];

export function Avatar({ name, index = 0 }: { name: string; index?: number }) {
  const initials = name
    .replace(/^Dr\.?\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  const [from, to] = avatarColors[index % avatarColors.length];
  const id = `avatar-${index}`;
  return (
    <svg viewBox="0 0 300 300" className="avatar" role="img" aria-label={name}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#${id})`} />
      <circle cx="250" cy="50" r="60" fill="#fff" opacity="0.12" />
      <circle cx="40" cy="270" r="80" fill="#fff" opacity="0.1" />
      <text
        x="150"
        y="150"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#fff"
        fontSize="104"
        fontWeight="700"
        fontFamily="var(--font-heading), sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
}

// Real photo when one is set in data/site.ts, otherwise the initials avatar.
export function DoctorPhoto({ name, photo, index = 0 }: { name: string; photo?: string; index?: number }) {
  if (photo) return <img src={photo} alt={name} className="avatar" />;
  return <Avatar name={name} index={index} />;
}
