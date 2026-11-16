import React from "react";
import Link from "next/link";

interface SmartLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

/** Uses next/link for internal paths and a plain <a> for external / tel: / mailto: links. */
export default function SmartLink({ to, children, ...rest }: SmartLinkProps) {
  const isExternal = /^(https?:|tel:|mailto:)/.test(to);
  if (isExternal) {
    const newTab = to.startsWith("http");
    return (
      <a href={to} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={to} {...rest}>
      {children}
    </Link>
  );
}
