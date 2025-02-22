'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: 'sobre', href: '/sobre' },
  { name: 'incursões', href: '/incursoes' },
  { name: 'postagens', href: '/postagens' },
  // { name: 'contato', href: '/contato' },
];

export default function NavLinks() {

  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname.startsWith(link.href) ? 'font-bold' : ''
            } hover:text-gray-500 transition duration-300 hover:underline`}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}