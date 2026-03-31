'use client';

import Link from "next/link";

const links = [
  { href: "/incursoes", label: "incursões" },
  { href: "/postagens", label: "postagens" },
];

export default function NavLinks({
  linkClassName = "",
  currentPath = "",
}: {
  linkClassName?: string;
  currentPath?: string;
}) {
  return (
    <>
      {links.map((link) => {
        const isActive = currentPath === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              relative pb-1 transition-all duration-200
              ${linkClassName}
              ${
                isActive
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white"
                  : "text-white/60 hover:text-white/90"
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}