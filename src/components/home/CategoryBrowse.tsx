"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/data/products";

const categoryHue: Record<string, string> = {
  necklaces:
    "linear-gradient(145deg, #cfd6de 0%, #8a919c 45%, #1a1d23 100%)",
  earrings:
    "linear-gradient(160deg, #d9cfc0 0%, #a89a86 40%, #2a2e36 100%)",
  bracelets:
    "linear-gradient(135deg, #f4f6f8 0%, #d4dde6 50%, #5c6570 100%)",
  rings: "linear-gradient(150deg, #e8eef2 0%, #c5ccd6 35%, #1a1d23 100%)",
};

export function CategoryBrowse() {
  return (
    <section className="relative overflow-hidden atmosphere py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="safe-px sm:px-8 lg:px-10"
        >
          <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
            Categories
          </p>
          <h2 className="mt-2 max-w-lg font-display text-3xl tracking-tight text-graphite sm:text-4xl lg:text-5xl">
            Find your silhouette
          </h2>
        </motion.div>

        {/* Mobile: horizontal snap carousel */}
        <div className="mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide sm:hidden">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className="group relative aspect-[3/4] w-[78vw] max-w-[300px] shrink-0 snap-center overflow-hidden"
            >
              <div
                className="media-fill"
                style={{ background: categoryHue[cat.id] }}
              />
              <div className="absolute inset-0 silk-sheen opacity-30" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-xl text-pearl">{cat.title}</p>
                <p className="mt-1 font-body text-sm text-pearl/70 line-clamp-2">
                  {cat.line}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Tablet+ grid */}
        <div className="mt-12 hidden gap-4 px-5 sm:grid sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
            >
              <Link
                href={`/categories/${cat.id}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <div
                  className="media-fill transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ background: categoryHue[cat.id] }}
                />
                <div className="absolute inset-0 silk-sheen opacity-30" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-display text-xl text-pearl">{cat.title}</p>
                  <p className="mt-1 font-body text-sm text-pearl/70 line-clamp-2">
                    {cat.line}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="safe-px mt-8 sm:mt-10 sm:px-8 lg:px-10">
          <Link
            href="/categories"
            className="inline-block py-2 font-display text-[0.7rem] tracking-[0.16em] uppercase text-graphite underline decoration-line underline-offset-8 hover:decoration-graphite"
          >
            View all categories
          </Link>
        </div>
      </div>
    </section>
  );
}
