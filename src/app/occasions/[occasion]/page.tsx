import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProductCard } from "@/components/product/ProductCard";
import {
  getOccasion,
  getProductsByOccasion,
  occasions,
  type Occasion,
} from "@/data/products";

type Props = {
  params: Promise<{ occasion: string }>;
};

export function generateStaticParams() {
  return occasions.map((o) => ({ occasion: o.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { occasion } = await params;
  const data = getOccasion(occasion);
  if (!data) return { title: "Occasion" };
  return {
    title: data.title,
    description: data.line,
  };
}

export default async function OccasionDetailPage({ params }: Props) {
  const { occasion } = await params;
  const data = getOccasion(occasion);
  if (!data) notFound();

  const pieces = getProductsByOccasion(occasion as Occasion);

  return (
    <div className="atmosphere min-h-screen safe-px pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Occasion"
          title={data.title}
          description={data.line}
        >
          <Link
            href="/occasions"
            className="mt-6 inline-block font-display text-[0.65rem] tracking-[0.16em] uppercase text-metal hover:text-graphite"
          >
            ← All occasions
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
