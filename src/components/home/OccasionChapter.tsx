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
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const textOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.25, 0.75, 0.95],
    [0.35, 1, 1, 0.55],
  );

  const isOdd = index % 2 === 1;

  return (
    <section
      ref={ref}
      className="relative flex items-center overflow-hidden atmosphere py-16 sm:py-24 lg:min-h-[100svh] lg:py-24"
    >
      <div
        className={`mx-auto grid w-full max-w-7xl items-center gap-8 safe-px sm:gap-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 ${
          isOdd ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* On mobile: media first for visual browsing */}
        <motion.div
          style={{ y: imageY }}
          className="relative order-1 lg:order-none"
        >
          {featured ? (
            <Link
              href={`/product/${featured.slug}`}
              className="relative block aspect-[4/5] w-full overflow-hidden sm:aspect-[4/5]"
              aria-label={`View ${featured.name}`}
            >
              <div
                className="media-fill transition-transform duration-700 hover:scale-[1.03]"
                style={{ background: featured.placeholderHue }}
              />
              <div className="absolute inset-0 silk-sheen opacity-40" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <p className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-pearl/80">
                  {featured.shortDescription}
                </p>
              </div>
            </Link>
          ) : null}

          {products.length > 1 && (
            <div className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 scrollbar-hide">
              {products.slice(1).map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="group relative aspect-[3/4] h-auto w-[28vw] min-w-[5.5rem] max-w-[7.5rem] shrink-0 snap-start overflow-hidden sm:h-32 sm:w-28 sm:max-w-none"
                >
                  <div
                    className="media-fill transition-transform duration-500 group-hover:scale-105"
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

        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-10 order-2 lg:order-none"
        >
          <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
            Chapter {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-graphite sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-4 max-w-sm font-body text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
            {line}
          </p>
          <Link
            href={`/occasions/${occasion}`}
            className="mt-4 inline-block py-2 font-display text-[0.65rem] tracking-[0.16em] uppercase text-graphite underline decoration-line underline-offset-8 hover:decoration-graphite"
          >
            View {title.toLowerCase()} pieces
          </Link>

          {featured && (
            <Link
              href={`/product/${featured.slug}`}
              className="mt-8 group inline-flex flex-col gap-1 border-t border-line pt-5 sm:mt-10 sm:pt-6"
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
      </div>
    </section>
  );
}
