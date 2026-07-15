import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Enter the Zarvia studio — limited-edition imitation jewellery, never remade.",
};

export default function StudioPage() {
  return (
    <div className="atmosphere min-h-screen safe-px pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Boutique"
          title="The Studio"
          description="Every piece handpicked for a rare occasion. Explore the full limited collection — quietly glamorous, never restocked."
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
