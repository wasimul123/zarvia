"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  formatPrice,
  getProductsByOccasion,
  productCover,
  type Occasion,
} from "@/data/products";
import { ProductImage } from "@/components/product/ProductImage";

type Props = {
  occasion: Occasion;
  title: string;
  line: string;
  index: number;
};

function useIsLg() {
  const [isLg, setIsLg] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLg(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isLg;
}

export function OccasionChapter({ occasion, title, line, index }: Props) {
  const ref = useRef<HTMLElement>(null);
  const isLg = useIsLg();
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
      className="relative w-full max-w-[100vw] overflow-x-hidden atmosphere py-16 sm:py-24 lg:min-h-[100svh] lg:py-24"
    >
      <div
        className={`mx-auto grid w-full max-w-7xl min-w-0 items-center gap-8 safe-px sm:gap-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 ${
          isOdd ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative order-1 min-w-0 max-w-full lg:order-none">
          {featured ? (
            <motion.div style={isLg ? { y: imageY } : undefined}>
              <Link
                href={`/product/${featured.slug}`}
                className="relative mx-auto block aspect-[3/4] w-full max-w-full overflow-hidden bg-mist-deep"
                aria-label={`View ${featured.name}`}
              >
                <ProductImage
                  src={productCover(featured)}
                  alt={featured.name}
                  fit="contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/35 to-transparent px-4 pb-4 pt-10 sm:px-6 sm:pb-6">
                  <p className="line-clamp-2 break-words font-display text-[0.65rem] leading-relaxed tracking-[0.12em] uppercase text-pearl sm:tracking-[0.16em]">
                    {featured.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ) : null}

          {products.length > 1 ? (
            <div className="mt-3 min-w-0 max-w-full">
              <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 scrollbar-hide">
                {products.slice(1).map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.slug}`}
                    className="group relative h-28 w-[5.5rem] shrink-0 snap-start overflow-hidden bg-mist-deep sm:h-32 sm:w-28"
                  >
                    <ProductImage
                      src={productCover(p)}
                      alt={p.name}
                      fit="contain"
                      sizes="112px"
                    />
                    <span className="absolute inset-x-0 bottom-0 truncate bg-ink/55 px-1.5 py-1.5 font-display text-[0.55rem] tracking-wider uppercase text-pearl">
                      {p.name.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <motion.div
          style={isLg ? { opacity: textOpacity } : undefined}
          className="relative z-10 order-2 min-w-0 max-w-full lg:order-none"
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

          <div className="mt-6 flex flex-col gap-8 sm:mt-8">
            <Link
              href={`/occasions/${occasion}`}
              className="w-fit font-display text-[0.65rem] tracking-[0.16em] uppercase text-graphite underline decoration-line underline-offset-8 hover:decoration-graphite"
            >
              View {title.toLowerCase()} pieces
            </Link>

            {featured ? (
              <Link
                href={`/product/${featured.slug}`}
                className="group flex w-full max-w-sm flex-col gap-1 border-t border-line pt-6"
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
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
