"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { ProductImage } from "@/components/product/ProductImage";

type Props = {
  product: Product;
};

export function ProductGallery({ product }: Props) {
  const images = product.images.length ? product.images : [];
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) {
    return (
      <div className="flex aspect-[3/4] w-full items-center justify-center bg-mist-deep">
        <p className="font-display text-sm uppercase tracking-widest text-metal">
          Image forthcoming
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      {/* Natural aspect — avoids crop / letterbox stretch on mobile */}
      <div className="relative w-full overflow-hidden bg-mist-deep">
        <ProductImage
          key={current}
          src={current}
          alt={`${product.name} — photo ${active + 1}`}
          fill={false}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {images.length > 1 ? (
        <div className="flex snap-x gap-2 overflow-x-auto pb-0.5 scrollbar-hide sm:gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative h-16 w-14 shrink-0 snap-start overflow-hidden bg-mist-deep sm:h-24 sm:w-20 ${
                active === i ? "ring-1 ring-graphite" : "opacity-70"
              }`}
            >
              <ProductImage src={src} alt="" sizes="80px" fit="cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
