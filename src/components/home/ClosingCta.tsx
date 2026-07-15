"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden atmosphere py-32 sm:py-40">
      <div className="absolute inset-0 silk-sheen opacity-20" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-3xl px-5 text-center sm:px-8"
      >
        <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
          Never remade
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-graphite text-balance sm:text-5xl lg:text-6xl">
          When a piece leaves, the edition closes.
        </h2>
        <p className="mx-auto mt-6 max-w-md font-body text-lg leading-relaxed text-muted">
          Zarvia releases are finite. Step into the studio while the edition
          still breathes.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <Link
            href="/studio"
            className="font-display text-[0.75rem] tracking-[0.18em] uppercase text-graphite underline decoration-line underline-offset-8 hover:decoration-graphite"
          >
            Enter the studio
          </Link>
          <Link
            href="/atelier"
            className="font-display text-[0.75rem] tracking-[0.18em] uppercase text-muted underline decoration-line underline-offset-8 hover:text-graphite hover:decoration-graphite"
          >
            Visit the atelier
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
