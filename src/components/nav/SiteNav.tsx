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
  const [menuOpen, setMenuOpen] = useState(false);
  const onDarkHero = pathname === "/" && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
        scrolled || menuOpen
          ? "border-b border-line bg-pearl/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="safe-px mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 sm:h-16 sm:px-8 lg:h-20 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <Link
          href="/"
          className={`font-display text-base tracking-[0.22em] uppercase transition-colors sm:text-lg lg:text-xl ${
            onDarkHero ? "text-pearl" : "text-graphite"
          }`}
          aria-label="Zarvia home"
        >
          Zarvia
        </Link>

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

        <div className="flex items-center justify-end gap-4 sm:gap-6">
          <Link
            href="/account"
            className={`${linkBase} ${menuOpen ? "text-graphite" : utilityColor} hidden min-[380px]:inline`}
          >
            Account
          </Link>
          <Link
            href="/cart"
            className={`${linkBase} ${menuOpen ? "text-graphite" : utilityColor}`}
          >
            Cart
            <span
              className={`ml-1.5 tabular-nums ${
                menuOpen ? "text-metal" : utilityMuted
              }`}
            >
              {itemCount}
            </span>
          </Link>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center lg:hidden ${
              menuOpen || !onDarkHero ? "text-graphite" : "text-pearl"
            }`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen explore menu */}
      <div
        className={`fixed inset-x-0 top-14 bottom-0 z-30 bg-pearl transition-[transform,opacity] duration-300 ease-out sm:top-16 lg:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="safe-px flex h-full flex-col justify-between pb-10 pt-8 sm:px-8">
          <ul className="space-y-1">
            {exploreLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-4 font-display text-3xl tracking-tight transition-colors ${
                      active ? "text-graphite" : "text-muted"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="border-t border-line pt-6">
            <Link
              href="/account"
              className="block py-3 font-display text-[0.75rem] tracking-[0.16em] uppercase text-graphite"
              onClick={() => setMenuOpen(false)}
            >
              Account
            </Link>
            <p className="mt-6 font-body text-sm text-muted">
              Limited edition jewellery for rare occasions.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
