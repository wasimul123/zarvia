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
      <div className="relative aspect-[4/5] w-full bg-mist-deep">
        <p className="absolute inset-0 flex items-center justify-center font-display text-sm uppercase tracking-widest text-metal">
          Image forthcoming
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="relative -mx-5 aspect-[4/5] w-[calc(100%+2.5rem)] overflow-hidden bg-mist-deep sm:mx-0 sm:w-full">
        <ProductImage
          key={current}
          src={current}
          alt={`${product.name} — photo ${active + 1}`}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {images.length > 1 ? (
        <div className="flex snap-x gap-2 overflow-x-auto scrollbar-hide sm:gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative aspect-[4/5] h-16 w-auto shrink-0 snap-start overflow-hidden sm:h-24 sm:w-20 ${
                active === i ? "ring-1 ring-graphite" : "opacity-70"
              }`}
            >
              <ProductImage
                src={src}
                alt=""
                sizes="96px"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
