"use client";

import { useState } from "react";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
};

export function ProductGallery({ product }: Props) {
  const [active, setActive] = useState(0);
  const panels = [
    product.placeholderHue,
    `linear-gradient(160deg, ${product.accentHue} 0%, #1a1d23 100%)`,
    `linear-gradient(200deg, #f4f6f8 0%, ${product.accentHue} 50%, #2a2e36 100%)`,
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <div
          key={active}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ background: panels[active] }}
        />
        <div className="absolute inset-0 silk-sheen opacity-35" />
        <p className="absolute bottom-5 left-5 font-display text-[0.6rem] tracking-[0.2em] uppercase text-pearl/70">
          Placeholder · Image {active + 1}
        </p>
      </div>
      <div className="flex gap-3">
        {panels.map((panel, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative h-20 w-16 overflow-hidden sm:h-24 sm:w-20 ${
              active === i ? "ring-1 ring-graphite" : "opacity-70"
            }`}
          >
            <div className="absolute inset-0" style={{ background: panel }} />
          </button>
        ))}
      </div>
    </div>
  );
}
