import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";

type Props = {
  products: Product[];
};

export function RelatedProducts({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <section className="mt-20 border-t border-line pt-16">
      <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
        Also in this occasion
      </p>
      <h2 className="mt-2 font-display text-3xl text-graphite sm:text-4xl">
        Related pieces
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ background: product.placeholderHue }}
              />
              <div className="absolute inset-0 silk-sheen opacity-30" />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <div>
                <p className="font-display text-lg text-graphite">
                  {product.name}
                </p>
                <p className="mt-1 font-display text-[0.6rem] tracking-[0.16em] uppercase text-metal">
                  Limited · {product.limitedQty} left
                </p>
              </div>
              <p className="font-body text-muted">{formatPrice(product.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
