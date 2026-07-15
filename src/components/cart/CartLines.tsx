"use client";

import Link from "next/link";
import { formatPrice } from "@/data/products";
import { ProductImage } from "@/components/product/ProductImage";
import { useCart } from "@/store/cart";

export function CartLines() {
  const lines = useCart((s) => s.lines);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const subtotal = lines.reduce((sum, l) => sum + l.price * l.quantity, 0);

  if (lines.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-display text-2xl text-graphite">Your cart is empty</p>
        <p className="mt-3 font-body text-muted">
          The current edit still has limited pieces waiting.
        </p>
        <Link href="/studio" className="btn-primary mt-8 inline-flex">
          Enter the studio
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
      <ul className="divide-y divide-line border-y border-line">
        {lines.map((line) => (
          <li
            key={`${line.productId}-${line.finish}-${line.size}`}
            className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center"
          >
            <Link
              href={`/product/${line.slug}`}
              className="relative aspect-[3/4] w-full max-w-[140px] shrink-0 overflow-hidden bg-mist-deep sm:h-32 sm:w-28 sm:max-w-none sm:aspect-auto"
            >
              {line.image ? (
                <ProductImage
                  src={line.image}
                  alt={line.name}
                  sizes="140px"
                />
              ) : null}
            </Link>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <Link
                    href={`/product/${line.slug}`}
                    className="font-display text-lg text-graphite hover:text-accent-strong"
                  >
                    {line.name}
                  </Link>
                  <p className="mt-1 font-body text-sm text-muted">
                    {line.finish} · {line.size}
                  </p>
                </div>
                <p className="font-body tabular-nums text-graphite">
                  {formatPrice(line.price * line.quantity)}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center border border-line">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    className="px-3 py-1.5 font-display text-graphite"
                    onClick={() =>
                      updateQuantity(
                        line.productId,
                        line.finish,
                        line.size,
                        line.quantity - 1,
                      )
                    }
                  >
                    −
                  </button>
                  <span className="min-w-[2rem] text-center font-body text-sm tabular-nums">
                    {line.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    className="px-3 py-1.5 font-display text-graphite"
                    onClick={() =>
                      updateQuantity(
                        line.productId,
                        line.finish,
                        line.size,
                        line.quantity + 1,
                      )
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="font-display text-[0.65rem] tracking-[0.14em] uppercase text-metal hover:text-graphite"
                  onClick={() =>
                    removeItem(line.productId, line.finish, line.size)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit border border-line bg-surface p-6 backdrop-blur-sm lg:sticky lg:top-28">
        <p className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-metal">
          Summary
        </p>
        <div className="mt-4 flex items-baseline justify-between">
          <span className="font-body text-muted">Subtotal</span>
          <span className="font-display text-2xl text-graphite">
            {formatPrice(subtotal)}
          </span>
        </div>
        <p className="mt-3 font-body text-sm text-muted">
          Shipping calculated at checkout. This is a UI preview — no payment is
          processed.
        </p>
        <Link href="/checkout" className="btn-primary mt-6 w-full">
          Checkout
        </Link>
        <Link
          href="/studio"
          className="mt-3 block text-center font-display text-[0.65rem] tracking-[0.14em] uppercase text-metal hover:text-graphite"
        >
          Continue in the studio
        </Link>
      </aside>
    </div>
  );
}
