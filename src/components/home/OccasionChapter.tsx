"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  formatPrice,
  getProductsByOccasion,
  type Occasion,
} from "@/data/products";

type Props = {
  occasion: Occasion;
  title: string;
  line: string;
  index: number;
};

export function OccasionChapter({ occasion, title, line, index }: Props) {
  const ref = useRef<HTMLElement>(null);
  const products = getProductsByOccasion(occasion);
  const featured = products[0];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.7, 0.9],
    [0, 1, 1, 0.4],
  );

  const isOdd = index % 2 === 1;

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden atmosphere py-24"
    >
      <div
        className={`mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 ${
          isOdd ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div style={{ opacity: textOpacity }} className="relative z-10">
          <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
            Chapter {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-tight text-graphite sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-5 max-w-sm font-body text-lg leading-relaxed text-muted">
            {line}
          </p>
          <Link
            href={`/occasions/${occasion}`}
            className="mt-4 inline-block font-display text-[0.65rem] tracking-[0.16em] uppercase text-graphite underline decoration-line underline-offset-8 hover:decoration-graphite"
          >
            View {title.toLowerCase()} pieces
          </Link>

          {featured && (
            <Link
              href={`/product/${featured.slug}`}
              className="mt-10 group inline-flex flex-col gap-1 border-t border-line pt-6"
            >
              <span className="font-display text-[0.65rem] tracking-[0.18em] uppercase text-metal">
                Featured · Limited · {featured.limitedQty} left
              </span>
              <span className="font-display text-xl text-graphite transition-colors group-hover:text-accent-strong sm:text-2xl">
                {featured.name}
              </span>
              <span className="font-body text-muted">
                {formatPrice(featured.price)}
              </span>
            </Link>
          )}
        </motion.div>

        <motion.div style={{ y: imageY }} className="relative">
          {featured ? (
            <Link
              href={`/product/${featured.slug}`}
              className="relative block aspect-[4/5] w-full overflow-hidden"
              aria-label={`View ${featured.name}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 hover:scale-[1.03]"
                style={{ background: featured.placeholderHue }}
              />
              <div className="absolute inset-0 silk-sheen opacity-40" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-pearl/80">
                  {featured.shortDescription}
                </p>
              </div>
            </Link>
          ) : null}

          {products.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-hide pb-1">
              {products.slice(1).map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="group relative h-28 w-24 shrink-0 overflow-hidden sm:h-32 sm:w-28"
                >
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: p.placeholderHue }}
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-ink/40 p-2 font-display text-[0.55rem] tracking-wider uppercase text-pearl">
                    {p.name.split(" ").slice(0, 2).join(" ")}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
