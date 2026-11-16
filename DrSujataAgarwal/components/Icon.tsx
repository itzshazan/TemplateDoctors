type Props = { name: string; size?: number; className?: string };

const paths: Record<string, React.ReactNode> = {
  heart: <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />,
  baby: (<><circle cx="12" cy="8" r="5" /><path d="M10 7.5h.01M14 7.5h.01M10.5 10a2 2 0 0 0 3 0" /><path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" /></>),
  pregnant: (<><circle cx="11" cy="4" r="2" /><path d="M9 21v-6l-1-4c0-2 1.5-3.5 3.5-3.5S14 9 14.5 10.5c2 .5 3.5 2 3.5 4s-1.5 3-3.5 3H13v3.5" /></>),
  flower: (<><circle cx="12" cy="12" r="3" /><path d="M12 9c-1-3 0-6 0-6s1 3 0 6M15 12c3-1 6 0 6 0s-3 1-6 0M12 15c1 3 0 6 0 6s-1-3 0-6M9 12c-3 1-6 0-6 0s3-1 6 0" /><path d="M14 10c1.5-2.5 4.5-3.5 4.5-3.5S17.5 9.5 15 11M10 14c-1.5 2.5-4.5 3.5-4.5 3.5S6.5 14.5 9 13M14 14c2.5 1.5 3.5 4.5 3.5 4.5S14.5 17.5 13 15M10 10C7.5 8.5 6.5 5.5 6.5 5.5S9.5 6.5 11 9" /></>),
  female: (<><circle cx="12" cy="9" r="6" /><path d="M12 15v7M9 19h6" /></>),
  shield: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>),
  calendar2: (<><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></>),
  microscope: (<><path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1" /><path d="M9 14h2M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2zM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" /></>),
  pill: (<><path d="m10.5 20.5 10-10a4.9 4.9 0 1 0-7-7l-10 10a4.9 4.9 0 1 0 7 7z" /><path d="m8.5 8.5 7 7" /></>),
  family: (<><circle cx="7" cy="6" r="3" /><circle cx="17" cy="6" r="3" /><circle cx="12" cy="13" r="2" /><path d="M2 21v-4a5 5 0 0 1 9-3M22 21v-4a5 5 0 0 0-9-3M9 21v-2a3 3 0 0 1 6 0v2" /></>),
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />,
  lock: (<><rect x="4" y="11" width="16" height="11" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>),
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
  mail: (<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>),
  pin: (<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>),
  clock: (<><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  directions: (<><path d="M3 11 22 2l-9 19-2-8-8-2z" /></>),
  calendar: (<><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>),
  eye: (<><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>),
  lens: (<><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="4" /><path d="M10.5 10.5c.6-.6 1.6-.9 2.5-.6" /></>),
  gauge: (<><path d="M12 14l4-4" /><path d="M3.3 19a10 10 0 1 1 17.4 0" /><circle cx="12" cy="14" r="1.5" /></>),
  eyelid: (<><path d="M2 13s3.6-6 10-6 10 6 10 6" /><path d="M4 15s3 4 8 4 8-4 8-4" /><path d="M6 9.5 4.5 7.5M12 7V4.5M18 9.5l1.5-2" /><circle cx="12" cy="14" r="2.5" /></>),
  contact: (<><ellipse cx="12" cy="14" rx="9" ry="5" /><path d="M3 14c0-5 4-9 9-9s9 4 9 9" /></>),
  glasses: (<><circle cx="6" cy="15" r="4" /><circle cx="18" cy="15" r="4" /><path d="M10 15c1-1 3-1 4 0M2 15l1.5-7h3M22 15l-1.5-7h-3" /></>),
  drop: (<><path d="M12 2.7S6 9.3 6 14a6 6 0 0 0 12 0c0-4.7-6-11.3-6-11.3z" /><path d="M9.5 15.5a2.5 2.5 0 0 0 2.5 2" /></>),
  alert: (<><circle cx="12" cy="12" r="10" /><path d="M12 7v6M12 17h.01" /></>),
  "hand-heart": (<><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" /><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L14.4 13" /><path d="m2 15 6 6" /><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.7 2.7 0 0 0 16 4a2.8 2.8 0 0 0-5 1.8c0 1.2.8 2 1.5 2.7L16 12z" /></>),
  "user-md": (<><circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" /><path d="M12 14v4M10 16h4" /></>),
  award: (<><circle cx="12" cy="8" r="6" /><path d="M15.5 13 17 22l-5-3-5 3 1.5-9" /></>),
  star: <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1z" />,
  quote: <path d="M3 21c3 0 7-1 7-8V5H3v7h4c0 4-2 6-4 6zm11 0c3 0 7-1 7-8V5h-7v7h4c0 4-2 6-4 6z" />,
  whatsapp: (<><path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3z" /><path d="M9 10c0 3 2 5 5 5l1.2-1.2-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z" /></>),
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  instagram: (<><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>),
  youtube: (<><path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.6.5a2.8 2.8 0 0 0-1.9 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.6 2.8 2.8 0 0 0 1.9 1.9C5.1 20 12 20 12 20s6.9 0 8.6-.5a2.8 2.8 0 0 0 1.9-1.9A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.6z" /><path d="m9.8 15.5 5.7-3.5-5.7-3.5z" /></>),
};

export default function Icon({ name, size = 24, className }: Props) {
  const fill = name === "star" || name === "quote" ? "currentColor" : "none";
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={fill === "none" ? "currentColor" : "none"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.eye}
    </svg>
  );
}
