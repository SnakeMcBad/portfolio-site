"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const y = window.scrollY;

        setScrolled((prev) => {
          if (!prev && y > 80) return true;
          if (prev && y < 40) return false;
          return prev;
        });

        ticking = false;
      });

      ticking = true;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Container className="navbar-inner">
        <Link href="/" className={`brand ${scrolled ? "brand-hidden" : ""}`}>
          Mustafa (Terry) Alghanimi
        </Link>

        <nav
          className={`nav-links ${scrolled ? "nav-links-floating" : ""}`}
          aria-label="Primary"
        >
          {links.map((link) => {
            const normalizedHref = link.href.replace(/\/$/, "");
            const normalizedPath = pathname.replace(/\/$/, "");

            const isActive =
              normalizedHref === ""
                ? normalizedPath === ""
                : normalizedHref === "/projects"
                  ? normalizedPath === "/projects" ||
                    normalizedPath.startsWith("/projects/")
                  : normalizedPath === normalizedHref;

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