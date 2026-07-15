import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";

type Props = {
  product: Product;
  tone?: "light" | "dark";
};

export function ProductCard({ product, tone = "light" }: Props) {
  const isDark = tone === "dark";

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ background: product.placeholderHue }}
        />
        <div className="absolute inset-0 silk-sheen opacity-30" />
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <div>
          <p
            className={`font-display text-lg ${
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
          className={`shrink-0 font-body ${
            isDark ? "text-silver" : "text-muted"
          }`}
        >
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
