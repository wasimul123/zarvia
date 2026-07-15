import type { Metadata } from "next";
import { Newsreader, Syne } from "next/font/google";
import Link from "next/link";
import { SiteNav } from "@/components/nav/SiteNav";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Zarvia — Limited Edition Jewellery",
    template: "%s · Zarvia",
  },
  description:
    "Zarvia handpicks unique imitation jewellery for special occasions. Limited editions — never remade.",
};

const footerExplore = [
  { href: "/studio", label: "Studio" },
  { href: "/occasions", label: "Occasions" },
  { href: "/categories", label: "Categories" },
  { href: "/atelier", label: "Atelier" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full atmosphere font-body text-foreground">
        <SmoothScroll>
          <div className="film-grain" aria-hidden />
          <SiteNav />
          <main className="relative z-10 flex-1">{children}</main>
          <footer className="relative z-10 border-t border-line px-5 py-12 sm:px-8 lg:px-10">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-display text-sm tracking-[0.2em] uppercase text-graphite">
                  Zarvia
                </p>
                <p className="mt-3 max-w-xs font-body text-sm text-muted">
                  Limited edition imitation jewellery for rare occasions.
                </p>
              </div>
              <nav
                className="flex flex-wrap items-center"
                aria-label="Footer"
              >
                {[...footerExplore, { href: "/account", label: "Account" }].map(
                  (link, i, arr) => (
                    <span key={link.href} className="inline-flex items-center">
                      <Link
                        href={link.href}
                        className="font-display text-[0.7rem] tracking-[0.14em] uppercase text-muted transition-colors hover:text-graphite"
                      >
                        {link.label}
                      </Link>
                      {i < arr.length - 1 ? (
                        <span
                          className="mx-3 text-metal/40 sm:mx-4"
                          aria-hidden
                        >
                          ·
                        </span>
                      ) : null}
                    </span>
                  ),
                )}
              </nav>
            </div>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
