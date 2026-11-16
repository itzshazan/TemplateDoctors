import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 24, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const icons = {
  facebook: (p: IconProps) => (
    <Svg {...p} fill="currentColor" stroke="none">
      <path d="M14 8.5V6.8c0-.8.5-1 1-1h2V2.2L14.2 2C11.2 2 10.4 4.2 10.4 5.9v2.6H8v3.7h2.4V22H14v-9.8h2.7l.4-3.7z" />
    </Svg>
  ),
  twitter: (p: IconProps) => (
    <Svg {...p} fill="currentColor" stroke="none">
      <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.9A8.2 8.2 0 0 1 2 18.4 11.6 11.6 0 0 0 8.3 20c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2z" />
    </Svg>
  ),
  phone: (p: IconProps) => (
    <Svg {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </Svg>
  ),
  mail: (p: IconProps) => (
    <Svg {...p}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </Svg>
  ),
  pin: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </Svg>
  ),
  clock: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M12 6.5V12l3.5 2" />
    </Svg>
  ),
  caretDown: (p: IconProps) => (
    <Svg {...p} fill="currentColor" stroke="none">
      <path d="M7 10l5 5 5-5z" />
    </Svg>
  ),
  menu: (p: IconProps) => (
    <Svg {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </Svg>
  ),
  close: (p: IconProps) => (
    <Svg {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  ),
  chevronLeft: (p: IconProps) => (
    <Svg {...p}>
      <path d="m15 18-6-6 6-6" />
    </Svg>
  ),
  chevronRight: (p: IconProps) => (
    <Svg {...p}>
      <path d="m9 18 6-6-6-6" />
    </Svg>
  ),
  play: (p: IconProps) => (
    <Svg {...p} fill="currentColor" stroke="none">
      <path d="M8 5v14l11-7z" />
    </Svg>
  ),
  home: (p: IconProps) => (
    <Svg {...p} fill="currentColor" stroke="none">
      <path d="M12 3 1.5 12h3v9h6v-6h3v6h6v-9h3L18 8.9V4.5h-2.5v2.3z" />
    </Svg>
  ),
  mobile: (p: IconProps) => (
    <Svg {...p}>
      <rect x="6.5" y="2" width="11" height="20" rx="2" />
      <path d="M11 18.5h2" />
    </Svg>
  ),
  quote: (p: IconProps) => (
    <Svg {...p} fill="currentColor" stroke="none">
      <path d="M10 6C6 7 3.5 10 3.5 14v4h6v-6H6.5c.3-2 1.6-3.6 3.5-4.2zM20.5 6c-4 1-6.5 4-6.5 8v4h6v-6h-3c.3-2 1.6-3.6 3.5-4.2z" />
    </Svg>
  ),
  logoMark: (p: IconProps) => (
    <Svg {...p} strokeWidth={1.3}>
      <circle cx="12" cy="12" r="10.5" />
      <circle cx="12" cy="12" r="9" strokeOpacity={0.45} />
      <circle cx="13" cy="7.6" r="2" />
      <path d="M9.5 18.5c-1.6-1.8-1.7-4.6.2-6.6 1.3-1.3 3.4-1.6 4.9-.6 1.6 1 2 3.1 1 4.6-.9 1.4-2.7 1.8-4 1" />
      <path d="M11.4 14.2c.7-.6 1.7-.5 2.2.2" />
    </Svg>
  ),
  image: (p: IconProps) => (
    <Svg {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </Svg>
  ),
  // Service icons
  newborn: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="12" cy="7" r="3.5" />
      <path d="M6 20c0-4 2.7-7 6-7s6 3 6 7" />
      <path d="M10.5 6.5h.01M13.5 6.5h.01" />
    </Svg>
  ),
  vaccine: (p: IconProps) => (
    <Svg {...p}>
      <path d="m18 2 4 4M17 7l3-3M19 9 9 19l-4 1 1-4L16 6zM14 8l2 2M11 11l2 2M5 19l-3 3" />
    </Svg>
  ),
  growth: (p: IconProps) => (
    <Svg {...p}>
      <path d="M3 21h18M6 17v-4M11 17V9M16 17V5" />
      <path d="m4 9 5-4 4 3 7-6" />
    </Svg>
  ),
  nutrition: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 7c-2-3-7-2.5-7 2.5C5 15 9 21 12 21s7-6 7-11.5C19 4.5 14 4 12 7z" />
      <path d="M12 7c0-2 1-4 3-5" />
    </Svg>
  ),
  allergy: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 3v8M8.5 8.5C6 9 4 11 4 15c0 3 1.5 5 3.5 5S11 18 11 15v-3.5M15.5 8.5C18 9 20 11 20 15c0 3-1.5 5-3.5 5S13 18 13 15v-3.5" />
    </Svg>
  ),
  teen: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-1a6 6 0 0 1 12 0v1" />
      <path d="M16 4h5v4h-3l-2 2z" />
    </Svg>
  ),
  sick: (p: IconProps) => (
    <Svg {...p}>
      <path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z" />
      <path d="M12 9v7" />
    </Svg>
  ),
  // Women's-health service icons
  pregnancy: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="11" cy="4" r="2" />
      <path d="M9 22v-6l-1-4c0-2 1.5-3.5 3.5-3.5S14 9.5 14.5 11c2 .5 3.5 2 3.5 4s-1.5 3-3.5 3H13v4" />
    </Svg>
  ),
  period: (p: IconProps) => (
    <Svg {...p}>
      <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
      <path d="M16 2.5v4M8 2.5v4M3 10h18" />
      <path d="M12 12.5s-2.5 2.6-2.5 4.2a2.5 2.5 0 0 0 5 0c0-1.6-2.5-4.2-2.5-4.2z" />
    </Svg>
  ),
  pcos: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 9.5C11 6 12 3 12 3s1 3 0 6.5M14.5 12c3.5-1 6.5 0 6.5 0s-3 1-6.5 0M12 14.5c1 3.5 0 6.5 0 6.5s-1-3 0-6.5M9.5 12C6 13 3 12 3 12s3-1 6.5 0" />
    </Svg>
  ),
  fertility: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="12" cy="8" r="4.5" />
      <path d="M10.5 7.5h.01M13.5 7.5h.01M10.5 10a2 2 0 0 0 3 0" />
      <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </Svg>
  ),
  family: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="7" cy="6" r="2.5" />
      <circle cx="17" cy="6" r="2.5" />
      <circle cx="12" cy="13" r="2" />
      <path d="M2 21v-3.5a5 5 0 0 1 8.5-3.5M22 21v-3.5a5 5 0 0 0-8.5-3.5M9 21v-1.5a3 3 0 0 1 6 0V21" />
    </Svg>
  ),
  infection: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5z" />
      <path d="M12 8v4M10 10h4M9.5 15.5h5" />
    </Svg>
  ),
  menopause: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
    </Svg>
  ),
  screening: (p: IconProps) => (
    <Svg {...p}>
      <path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2zM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </Svg>
  ),
  // Stats / patient info icons
  experience: (p: IconProps) => (
    <Svg {...p}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </Svg>
  ),
  patients: (p: IconProps) => (
    <Svg {...p}>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
    </Svg>
  ),
  quality: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </Svg>
  ),
  sterile: (p: IconProps) => (
    <Svg {...p}>
      <path d="M12 2.5S6 9 6 14a6 6 0 0 0 12 0c0-5-6-11.5-6-11.5z" />
      <path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5" />
    </Svg>
  ),
  urgent: (p: IconProps) => (
    <Svg {...p}>
      <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
      <path d="M16 2.5v4M8 2.5v4M3 10h18M12 13v4M10 15h4" />
    </Svg>
  ),
  video: (p: IconProps) => (
    <Svg {...p}>
      <rect x="2.5" y="5" width="14" height="14" rx="2" />
      <path d="m16.5 10 5-3v10l-5-3" />
    </Svg>
  ),
  lab: (p: IconProps) => (
    <Svg {...p}>
      <path d="M9 2.5h6M10 2.5v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2.5h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V2.5" />
      <path d="M7.5 14.5h9" />
    </Svg>
  ),
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...rest }: IconProps & { name: IconName }) {
  const C = icons[name];
  return <C {...rest} />;
}
