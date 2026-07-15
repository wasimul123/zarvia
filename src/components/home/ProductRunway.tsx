"use client";

import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { formatPrice, products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

function DesktopRunway() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  const measure = () => {
    if (!trackRef.current) return;
    const overflow = trackRef.current.scrollWidth - window.innerWidth;
    setMaxScroll(Math.max(overflow, 0));
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", measure);
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  return (
    <section
      id="studio-desktop"
      ref={sectionRef}
      className="relative hidden atmosphere-dark text-pearl md:block"
      style={{ height: `${Math.max(products.length * 70, 280)}vh` }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto mb-8 flex w-full max-w-7xl items-end justify-between gap-6 px-8 lg:px-10">
          <div>
            <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-silver/70">
              The Studio
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
              Limited pieces in motion
            </h2>
          </div>
          <Link
            href="/studio"
            className="shrink-0 font-display text-[0.7rem] tracking-[0.16em] uppercase text-silver/80 underline decoration-silver/30 underline-offset-8 hover:text-pearl"
          >
            View all
          </Link>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max gap-8 px-8 lg:px-10"
        >
          {products.map((product, i) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative block w-[48vw] max-w-[420px] shrink-0 lg:w-[32vw]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 1.06 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: i * 0.04 }}
                  className="media-fill"
                  style={{ background: product.placeholderHue }}
                />
                <div className="absolute inset-0 silk-sheen opacity-30 transition-opacity duration-500 group-hover:opacity-50" />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-display text-lg text-pearl sm:text-xl">
                    {product.name}
                  </p>
                  <p className="mt-1 font-display text-[0.65rem] tracking-[0.16em] uppercase text-silver/70">
                    Limited · {product.limitedQty} left
                  </p>
                </div>
                <p className="shrink-0 font-body text-silver">
                  {formatPrice(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MobileRunway() {
  return (
    <section
      id="studio"
      className="relative atmosphere-dark py-16 text-pearl md:hidden"
    >
      <div className="safe-px mb-8">
        <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-silver/70">
          The Studio
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-tight">
          Limited pieces
        </h2>
        <p className="mt-3 max-w-sm font-body text-base text-silver/80">
          Scroll vertically through the collection. Tap any piece to open it.
        </p>
      </div>

      <div className="safe-px flex flex-col gap-10">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: Math.min(i * 0.04, 0.16) }}
          >
            <ProductCard product={product} tone="dark" />
          </motion.div>
        ))}
      </div>

      <div className="safe-px mt-10">
        <Link
          href="/studio"
          className="inline-block py-2 font-display text-[0.7rem] tracking-[0.16em] uppercase text-pearl underline decoration-pearl/30 underline-offset-8"
        >
          Open full studio
        </Link>
      </div>
    </section>
  );
}

export function ProductRunway() {
  return (
    <>
      <MobileRunway />
      <DesktopRunway />
    </>
  );
}
