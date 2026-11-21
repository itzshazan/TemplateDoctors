type Name = "phone" | "mail" | "clock" | "pin" | "whatsapp" | "arrow" | "menu" | "close" | "star" | "check" | "quote"
  | "scalpel" | "shield" | "graduation" | "award" | "siren" | "facebook" | "instagram" | "hospital";

const paths: Record<Name, string> = {
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  pin: "M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  whatsapp: "M4 20l1.3-4A8 8 0 1 1 8 18.7zM9 8.5c.2 2.6 3.4 5.8 6 6l1.2-1.3-2-1-1 .8a5 5 0 0 1-2.7-2.7l.8-1-1-2z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  star: "M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z",
  check: "M5 12.5l4.5 4.5L19 7.5",
  quote: "M9 7H6a2 2 0 0 0-2 2v3h4v4H4M20 7h-3a2 2 0 0 0-2 2v3h4v4h-4",
  scalpel: "M3 21l9.5-9.5M12.5 11.5l7-7a2.1 2.1 0 0 1 3 3l-7 7zM9 15l-3 3",
  shield: "M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6zM9 12l2 2 4-4",
  graduation: "M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5M22 9v6",
  award: "M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM8.5 13l-1.5 8 5-3 5 3-1.5-8",
  siren: "M7 18v-6a5 5 0 0 1 10 0v6M5 18h14v3H5zM12 3v2M4.2 6.2l1.4 1.4M19.8 6.2l-1.4 1.4",
  facebook: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5z",
  instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h0",
  hospital: "M4 21V5h10v16M14 9h6v12M2 21h20M8 9h2M8 13h2M8 17h2M9 3v4M7 5h4",
};

export function Icon({ name, size = 24, className }: { name: Name; size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
