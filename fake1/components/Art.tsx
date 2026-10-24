// SVG logo and initial avatars used in place of real photos.

export function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="14" fill="var(--pink)" />
      <path d="M24 38V22" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 24c0-6-4.5-10-11-10 0 6 4.5 10 11 10z" fill="#fff" />
      <path d="M24 28c0-6 4.5-10 11-10 0 6-4.5 10-11 10z" fill="#ffd2db" />
    </svg>
  );
}

const avatarColors = [
  ["#f84365", "#ff8fa5"],
  ["#605be5", "#9b97f5"],
  ["#22a39f", "#7fd8cf"],
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
