"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getSuggestedProducts } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function Suggestions() {
  const pieces = getSuggestedProducts(4);

  return (
    <section className="relative atmosphere py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
              Suggestions
            </p>
            <h2 className="mt-2 font-display text-4xl tracking-tight text-graphite sm:text-5xl">
              Nearly gone
            </h2>
            <p className="mt-3 max-w-md font-body text-lg text-muted">
              The rarest remaining counts — pieces closest to closing their
              edition.
            </p>
          </div>
          <Link
            href="/studio"
            className="font-display text-[0.7rem] tracking-[0.16em] uppercase text-graphite underline decoration-line underline-offset-8 hover:decoration-graphite"
          >
            Open the studio
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pieces.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
