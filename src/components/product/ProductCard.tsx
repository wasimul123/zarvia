import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";

type Props = {
  product: Product;
  tone?: "light" | "dark";
};

export function ProductCard({ product, tone = "light" }: Props) {
  const isDark = tone === "dark";

  return (
    <Link href={`/product/${product.slug}`} className="group block w-full">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <div
          className="media-fill transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ background: product.placeholderHue }}
        />
        <div className="absolute inset-0 silk-sheen opacity-30" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3 sm:mt-4 sm:items-baseline">
        <div className="min-w-0 flex-1">
          <p
            className={`font-display text-base leading-snug sm:text-lg ${
              isDark ? "text-pearl" : "text-graphite"
            }`}
          >
            {product.name}
          </p>
          <p
            className={`mt-1 font-display text-[0.6rem] tracking-[0.16em] uppercase ${
              isDark ? "text-silver/70" : "text-metal"
            }`}
          >
            Limited · {product.limitedQty} left
          </p>
        </div>
        <p
          className={`shrink-0 pt-0.5 font-body text-sm sm:text-base ${
            isDark ? "text-silver" : "text-muted"
          }`}
        >
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
