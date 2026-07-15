import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductCard } from "@/components/product/ProductCard";
import {
  categories,
  getCategory,
  getProductsByCategory,
  type Category,
} from "@/data/products";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = getCategory(category);
  if (!data) return { title: "Category" };
  return {
    title: data.title,
    description: data.line,
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { category } = await params;
  const data = getCategory(category);
  if (!data) notFound();

  const pieces = getProductsByCategory(category as Category);

  return (
    <div className="atmosphere min-h-screen px-5 pb-24 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Category"
          title={data.title}
          description={data.line}
        >
          <Link
            href="/categories"
            className="mt-6 inline-block font-display text-[0.65rem] tracking-[0.16em] uppercase text-metal hover:text-graphite"
          >
            ← All categories
          </Link>
        </PageHeader>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
