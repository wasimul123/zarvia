import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/data/products";

type Props = {
  products: Product[];
};

export function RelatedProducts({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <section className="mt-14 border-t border-line pt-12 sm:mt-20 sm:pt-16">
      <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
        Also in this occasion
      </p>
      <h2 className="mt-2 font-display text-2xl text-graphite sm:text-3xl lg:text-4xl">
        Related pieces
      </h2>

      <div className="mt-8 min-w-0 max-w-full sm:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[70vw] max-w-[260px] shrink-0 snap-center"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 hidden gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
