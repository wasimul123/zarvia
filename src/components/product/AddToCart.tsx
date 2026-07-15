"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cart";

type Props = {
  product: Product;
};

export function AddToCart({ product }: Props) {
  const addItem = useCart((s) => s.addItem);
  const router = useRouter();
  const [finish, setFinish] = useState(product.finishes[0]);
  const [size, setSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ product, finish, size, quantity });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="mt-8 space-y-6">
      <div>
        <p className="font-display text-[0.65rem] tracking-[0.18em] uppercase text-metal">
          Finish
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.finishes.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFinish(f)}
              className={`px-4 py-2 font-display text-[0.7rem] tracking-[0.1em] uppercase transition-colors ${
                finish === f
                  ? "bg-graphite text-pearl"
                  : "border border-line text-muted hover:border-graphite hover:text-graphite"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="font-display text-[0.65rem] tracking-[0.18em] uppercase text-metal">
          Size
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`min-w-[3rem] px-3 py-2 font-display text-[0.7rem] tracking-[0.1em] uppercase transition-colors ${
                size === s
                  ? "bg-graphite text-pearl"
                  : "border border-line text-muted hover:border-graphite hover:text-graphite"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="font-display text-[0.65rem] tracking-[0.18em] uppercase text-metal">
          Quantity
        </p>
        <div className="mt-3 inline-flex items-center border border-line">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="px-4 py-2 font-display text-lg text-graphite hover:bg-white/40"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <span className="min-w-[2.5rem] text-center font-body tabular-nums">
            {quantity}
          </span>
          <button
            type="button"
            aria-label="Increase quantity"
            className="px-4 py-2 font-display text-lg text-graphite hover:bg-white/40"
            onClick={() =>
              setQuantity((q) => Math.min(product.limitedQty, q + 1))
            }
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={handleAdd} className="btn-primary sm:w-auto">
          {added ? "Added" : "Add to cart"}
        </button>
        <button
          type="button"
          className="btn-ghost sm:w-auto"
          onClick={() => {
            handleAdd();
            router.push("/checkout");
          }}
        >
          Buy now
        </button>
      </div>
    </div>
  );
}
