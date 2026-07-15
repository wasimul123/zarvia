"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden atmosphere-dark text-pearl"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 35%, rgba(197,204,214,0.18), transparent 60%), linear-gradient(165deg, #0e1014 0%, #1a1d23 50%, #242830 100%)",
          }}
        />
        <div className="absolute inset-0 silk-sheen opacity-20" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full safe-px pb-[max(4rem,env(safe-area-inset-bottom))] pt-24 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="sr-only">Zarvia — Singular. Curated.</h1>
            <BrandLogo variant="hero" priority />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-6 max-w-md font-body text-base leading-relaxed text-silver/90 sm:mt-8 sm:text-lg lg:text-xl"
          >
            Rare imitation jewellery, curated for occasions that will not
            repeat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-8"
          >
            <Link
              href="/studio"
              className="font-display text-[0.75rem] tracking-[0.18em] uppercase text-pearl underline decoration-pearl/30 underline-offset-8 transition-colors hover:decoration-pearl"
            >
              Enter the studio
            </Link>
            <Link
              href="/occasions"
              className="font-display text-[0.75rem] tracking-[0.18em] uppercase text-silver/80 underline decoration-silver/20 underline-offset-8 transition-colors hover:text-pearl hover:decoration-pearl/40"
            >
              Shop by occasion
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
