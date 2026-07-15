import Link from "next/link";
import { formatPrice, productCover, type Product } from "@/data/products";
import { ProductImage } from "@/components/product/ProductImage";

type Props = {
  product: Product;
  tone?: "light" | "dark";
};

export function ProductCard({ product, tone = "light" }: Props) {
  const isDark = tone === "dark";
  const cover = productCover(product);

  return (
    <Link href={`/product/${product.slug}`} className="group block w-full">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-mist-deep">
        {cover ? (
          <ProductImage
            src={cover}
            alt={product.name}
            className="transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
          />
        ) : null}
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
