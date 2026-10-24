import type { IconName } from "@/data/site";

type UiIcon =
  | "phone"
  | "mail"
  | "pin"
  | "arrow"
  | "external"
  | "check"
  | "menu"
  | "close"
  | "chevron"
  | "clock"
  | "quote"
  | "linkedin";

const paths: Record<IconName | UiIcon, string> = {
  virus:
    "M12 7a5 5 0 100 10 5 5 0 000-10zm0-5v3m0 14v3M2 12h3m14 0h3M4.9 4.9l2.1 2.1m10 10l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1M10.5 11h.01M13.5 13.5h.01",
  gauge: "M12 21a9 9 0 110-18 9 9 0 010 18zm0-9l4-4M7 16h10",
  drop: "M12 2.7S5 10.2 5 15a7 7 0 0014 0c0-4.8-7-12.3-7-12.3z",
  butterfly:
    "M12 7v13M12 9C10 5 4 3 3 6s2 6 9 6c7 0 10-3 9-6s-7-1-9 3zm0 3c-5 0-8 2-7 5s5 2 7-2c2 4 6 5 7 2s-2-5-7-5z",
  thermometer: "M14 14.8V4a2 2 0 10-4 0v10.8a4 4 0 104 0zM12 9v8",
  stethoscope:
    "M5 3v6a5 5 0 0010 0V3M5 3H3m2 0h2m6 0h2m2 0h-2m-5 11v2a5 5 0 0010 0v-2m0 0a2 2 0 100-4 2 2 0 000 4z",
  award: "M12 15a6 6 0 100-12 6 6 0 000 12zm-3.5-1.1L7 22l5-3 5 3-1.5-8.1",
  graduation: "M22 9L12 4 2 9l10 5 10-5zM6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9v6",
  hospital: "M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M12 7v6M9 10h6M10 21v-4h4v4",
  calendar: "M4 5h16v16H4zM4 10h16M8 3v4m8-4v4",
  book: "M4 19.5A2.5 2.5 0 016.5 17H20V3H6.5A2.5 2.5 0 004 5.5v14zm0 0A2.5 2.5 0 006.5 22H20v-5",
  mic: "M12 15a3 3 0 003-3V5a3 3 0 00-6 0v7a3 3 0 003 3zm7-3a7 7 0 01-14 0m7 7v3m-4 0h8",
  news: "M4 4h13v16H6a2 2 0 01-2-2zm13 4h3v10a2 2 0 01-2 2M8 8h5m-5 4h5m-5 4h3",
  building: "M4 21V3h10v18M14 9h6v12M2 21h20M8 7h2m-2 4h2m-2 4h2",
  phone:
    "M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z",
  mail: "M3 5h18v14H3zm0 0l9 8 9-8",
  pin: "M12 22s7-6.3 7-12a7 7 0 00-14 0c0 5.7 7 12 7 12zm0-9a3 3 0 100-6 3 3 0 000 6z",
  arrow: "M5 12h14m-6-6l6 6-6 6",
  external: "M14 4h6v6m0-6L10 14M19 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h5",
  check: "M5 12l5 5L20 7",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "M6 6l12 12M18 6L6 18",
  chevron: "M6 9l6 6 6-6",
  clock: "M12 21a9 9 0 110-18 9 9 0 010 18zm0-14v5l3 3",
  quote: "M7 7h4v4c0 3-1.5 5-4 6M14 7h4v4c0 3-1.5 5-4 6",
  linkedin: "M4 9h4v12H4zM6 3a2 2 0 110 4 2 2 0 010-4zm4 6h3.8v1.7c.6-1 1.9-2 3.9-2 4 0 4.3 2.6 4.3 6V21h-4v-5.5c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H10z",
};

const filled = new Set<string>(["linkedin"]);

export type AnyIcon = keyof typeof paths;

export default function Icon({ name, size = 24, className }: { name: AnyIcon; size?: number; className?: string }) {
  const isFilled = filled.has(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
