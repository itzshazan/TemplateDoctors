import React from "react";

type IconProps = { size?: number; className?: string };

const svg = (path: React.ReactNode, viewBox = "0 0 24 24") =>
  function Icon({ size = 16, className }: IconProps) {
    return (
      <svg width={size} height={size} viewBox={viewBox} fill="currentColor" className={className} aria-hidden="true">
        {path}
      </svg>
    );
  };

export const MailIcon = svg(
  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z" />
);
export const PhoneIcon = svg(
  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z" />
);
export const MapPinIcon = svg(
  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
);
export const ClockIcon = svg(
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4 3.5 2.1-.75 1.23L11 13V7h2v5.4z" />
);
export const PlayIcon = svg(<path d="M8 5v14l11-7z" />);
export const ArrowRightIcon = svg(<path d="M12 4l-1.4 1.4 5.6 5.6H4v2h12.2l-5.6 5.6L12 20l8-8z" />);
export const ArrowLeftIcon = svg(<path d="M12 20l1.4-1.4L7.8 13H20v-2H7.8l5.6-5.6L12 4l-8 8z" />);
export const ChevronDownIcon = svg(<path d="M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6z" />);
export const ChevronRightIcon = svg(<path d="M8.6 16.6 13.2 12 8.6 7.4 10 6l6 6-6 6z" />);
export const ArrowUpIcon = svg(<path d="M4 12l1.4 1.4L11 7.8V20h2V7.8l5.6 5.6L20 12l-8-8z" />);
export const CheckIcon = svg(<path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />);
export const CloseIcon = svg(
  <path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z" />
);
export const MenuIcon = svg(<path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />);
export const QuoteIcon = svg(
  <path d="M7.2 17c-1.9 0-3.2-1.5-3.2-3.6C4 9.6 6.6 7 9.6 6l.6 1.2C8.3 8 7 9.6 7 11c.2 0 .5-.1.8-.1 1.6 0 2.8 1.2 2.8 2.9 0 1.8-1.4 3.2-3.4 3.2zm9 0c-1.9 0-3.2-1.5-3.2-3.6 0-3.8 2.6-6.4 5.6-7.4l.6 1.2C17.3 8 16 9.6 16 11c.2 0 .5-.1.8-.1 1.6 0 2.8 1.2 2.8 2.9 0 1.8-1.4 3.2-3.4 3.2z" />
);
export const FacebookIcon = svg(
  <path d="M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.3 2 10 3.5 10 6v2H8v3h2v11h4V11h2.7l.3-3h-3z" />
);
export const InstagramIcon = svg(
  <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM21.9 7c-.1-1.6-.4-3-1.6-4.2C19.1 1.6 17.6 1.2 16 1.1 14.4 1 9.6 1 8 1.1c-1.6.1-3 .4-4.2 1.6C2.6 3.9 2.2 5.4 2.1 7 2 8.6 2 13.4 2.1 15c.1 1.6.4 3 1.6 4.2 1.2 1.2 2.6 1.5 4.2 1.6 1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.6 1.2-1.2 1.5-2.6 1.6-4.2.1-1.6.1-6.4 0-8zm-2.1 9.9a3.3 3.3 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.7.4s-4.4.1-5.7-.4a3.3 3.3 0 0 1-1.8-1.8c-.5-1.3-.4-4.3-.4-5.7s-.1-4.4.4-5.7A3.3 3.3 0 0 1 6.6 3.7c1.3-.5 4.3-.4 5.7-.4s4.4-.1 5.7.4a3.3 3.3 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.7s.1 4.4-.4 5.7z" />
);
export const YoutubeIcon = svg(
  <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15V9l5.8 3-5.8 3z" />
);
export const UserIcon = svg(
  <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
);
