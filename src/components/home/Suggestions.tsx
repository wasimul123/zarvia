"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getSuggestedProducts } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function Suggestions() {
  const pieces = getSuggestedProducts(4);

  return (
    <section className="relative overflow-hidden atmosphere py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="safe-px flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-10"
        >
          <div>
            <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
              Suggestions
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-graphite sm:text-4xl lg:text-5xl">
              Nearly gone
            </h2>
            <p className="mt-3 max-w-md font-body text-base text-muted sm:text-lg">
              The rarest remaining counts — pieces closest to closing their
              edition.
            </p>
          </div>
          <Link
            href="/studio"
            className="inline-block py-2 font-display text-[0.7rem] tracking-[0.16em] uppercase text-graphite underline decoration-line underline-offset-8 hover:decoration-graphite"
          >
            Open the studio
          </Link>
        </motion.div>

        {/* Mobile snap strip — keep in-flow min-w-0 so it can't widen the page */}
        <div className="mt-8 min-w-0 max-w-full sm:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-2 scrollbar-hide">
            {pieces.map((product) => (
              <div
                key={product.id}
                className="w-[72vw] max-w-[280px] shrink-0 snap-center"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 hidden gap-8 px-5 sm:grid sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
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
