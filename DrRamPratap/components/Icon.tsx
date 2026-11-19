import type { IconName } from "@/data/site";

type Name = IconName | "phone" | "mail" | "clock" | "pin" | "whatsapp" | "arrow" | "menu" | "close" | "award" | "check" | "plus";

const paths: Record<Name, string> = {
  cup: "M6 9h12l-1.5 9a2 2 0 0 1-2 1.7H9.5a2 2 0 0 1-2-1.7zM5 9c0-2.8 3.1-5 7-5s7 2.2 7 5",
  fire: "M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .3 1.6 1 2.6 2 3 0-3 .5-5.5.5-8z",
  bamboo: "M9 3v18M15 3v18M9 8h6M9 14h6M6 6l3 2M18 11l-3 3",
  drop: "M12 3.5s6 6.6 6 10.5a6 6 0 0 1-12 0c0-3.9 6-10.5 6-10.5zM9.5 14.5a2.5 2.5 0 0 0 2.5 2.5",
  weight: "M8 7a4 4 0 0 1 8 0M5 9h14l-1.5 11h-11zM10 13h4",
  wave: "M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0M3 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0M8 4l4 4 4-4",
  hand: "M8 13V6.5a1.5 1.5 0 0 1 3 0V12m0-6V4.5a1.5 1.5 0 0 1 3 0V12m0-5.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-.5A6.5 6.5 0 0 1 4 16.2L2.8 13a1.6 1.6 0 0 1 2.7-1.6L8 14",
  tool: "M4 20c4-1 9-6 12-11 1-1.7 3-3.5 4-4-1 1.5-2 3-2.5 5C16 15 9 19 4 20zM14 7l3 3",
  bone: "M8.5 6.5a2 2 0 1 0-3 2.5 2 2 0 1 0 2.5 3l7.5 7.5a2 2 0 1 0 3-2.5 2 2 0 1 0-2.5-3z",
  walk: "M13 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM9 21l2-6 3 3v3M8 11l3-3 3 2 3 3M11 8l-1 5",
  spine: "M12 3v18M9 5h6M8.5 9h7M8 13h8M8.5 17h7M10 21h4",
  knee: "M9 3c0 4 1 6 3 8s2 4 1 6l-1 4M15 3c0 3-1 5-2 6M7 21h4",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  pin: "M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  whatsapp: "M4 20l1.3-4A8 8 0 1 1 8 18.7zM9 8.5c.2 2.6 3.4 5.8 6 6l1.2-1.3-2-1-1 .8a5 5 0 0 1-2.7-2.7l.8-1-1-2z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  award: "M12 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM8.5 13l-1.5 8 5-3 5 3-1.5-8",
  check: "M5 12.5l4.5 4.5L19 7.5",
  plus: "M12 5v14M5 12h14",
};

export function Icon({ name, size = 24, className }: { name: Name; size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
