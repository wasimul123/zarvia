"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useCart } from "@/store/cart";

function useCartCount() {
  return useSyncExternalStore(
    useCart.subscribe,
    () => useCart.getState().lines.reduce((sum, l) => sum + l.quantity, 0),
    () => 0,
  );
}

const exploreLinks = [
  { href: "/studio", label: "Studio" },
  { href: "/occasions", label: "Occasions" },
  { href: "/categories", label: "Categories" },
  { href: "/atelier", label: "Atelier" },
];

export function SiteNav() {
  const pathname = usePathname();
  const itemCount = useCartCount();
  const [scrolled, setScrolled] = useState(false);
  const onDarkHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkBase =
    "font-display text-[0.7rem] tracking-[0.16em] uppercase transition-colors";
  const exploreColor = onDarkHero
    ? "text-silver/75 hover:text-pearl"
    : "text-muted hover:text-graphite";
  const utilityColor = onDarkHero ? "text-pearl" : "text-graphite";
  const utilityMuted = onDarkHero ? "text-silver/80" : "text-metal";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-pearl/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 lg:h-20 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <Link
          href="/"
          className={`font-display text-lg tracking-[0.22em] uppercase transition-colors sm:text-xl ${
            onDarkHero ? "text-pearl" : "text-graphite"
          }`}
          aria-label="Zarvia home"
        >
          Zarvia
        </Link>

        {/* Center — product exploration */}
        <div className="hidden items-center gap-7 lg:flex">
          {exploreLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBase} ${exploreColor} ${
                  active ? (onDarkHero ? "!text-pearl" : "!text-graphite") : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Top right — Account & Cart only (plain text, not buttons) */}
        <div className="flex items-center justify-end gap-5 sm:gap-7">
          <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide lg:hidden">
            {exploreLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkBase} ${exploreColor} whitespace-nowrap`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/account" className={`${linkBase} ${utilityColor}`}>
            Account
          </Link>
          <Link href="/cart" className={`${linkBase} ${utilityColor}`}>
            Cart
            <span className={`ml-1.5 tabular-nums ${utilityMuted}`}>
              {itemCount}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
