"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

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
              "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(197,204,214,0.22), transparent 60%), linear-gradient(165deg, #0e1014 0%, #1a1d23 50%, #242830 100%)",
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="920"
            cy="420"
            rx="280"
            ry="280"
            stroke="url(#metalGrad)"
            strokeWidth="1.2"
            opacity="0.7"
          />
          <ellipse
            cx="920"
            cy="420"
            rx="180"
            ry="180"
            stroke="url(#metalGrad)"
            strokeWidth="0.8"
            opacity="0.5"
          />
          <circle cx="920" cy="420" r="8" fill="#d9cfc0" opacity="0.85" />
          <path
            d="M640 520 C720 380, 820 340, 920 420 C1020 500, 1120 540, 1200 480"
            stroke="url(#metalGrad)"
            strokeWidth="1.5"
            opacity="0.65"
          />
          <path
            d="M700 560 C780 430, 860 390, 940 450"
            stroke="#c5ccd6"
            strokeWidth="0.7"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="metalGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#d9cfc0" />
              <stop offset="50%" stopColor="#c5ccd6" />
              <stop offset="100%" stopColor="#8a919c" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 silk-sheen opacity-30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[0.7rem] tracking-[0.28em] uppercase text-silver/80"
          >
            Limited edition · Handpicked
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-[clamp(3.5rem,14vw,9.5rem)] font-medium leading-[0.88] tracking-[-0.03em] text-pearl"
          >
            Zarvia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-6 max-w-md font-body text-lg leading-relaxed text-silver/90 sm:text-xl"
          >
            Rare imitation jewellery, curated for occasions that will not
            repeat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-8"
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
