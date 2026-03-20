"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/case-studies/chatroom-plugin/", label: "Case Study" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <Container className="navbar-inner">
        <Link href="/" className="brand">
          Terry Al
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace(/\/$/, ""));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}