import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/product/AddToCart";
import { ProductGallery } from "@/components/product/ProductGallery";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import {
  formatPrice,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Piece not found" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="atmosphere min-h-screen px-5 pb-24 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />

          <div className="lg:pt-4">
            <p className="font-display text-[0.65rem] tracking-[0.22em] uppercase text-metal">
              Limited edition · {product.limitedQty} remaining
            </p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-graphite sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 font-display text-2xl text-graphite">
              {formatPrice(product.price)}
            </p>
            <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-muted">
              {product.longDescription}
            </p>
            <AddToCart product={product} />
          </div>
        </div>

        <RelatedProducts products={related} />
      </div>
    </div>
  );
}
