import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse Zarvia by silhouette — necklaces, earrings, bracelets, rings.",
};

const categoryHue: Record<string, string> = {
  necklaces:
    "linear-gradient(145deg, #cfd6de 0%, #8a919c 45%, #1a1d23 100%)",
  earrings:
    "linear-gradient(160deg, #d9cfc0 0%, #a89a86 40%, #2a2e36 100%)",
  bracelets:
    "linear-gradient(135deg, #f4f6f8 0%, #d4dde6 50%, #5c6570 100%)",
  rings: "linear-gradient(150deg, #e8eef2 0%, #c5ccd6 35%, #1a1d23 100%)",
};

export default function CategoriesPage() {
  return (
    <div className="atmosphere min-h-screen px-5 pb-24 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Explore"
          title="Categories"
          description="Browse by form — the silhouettes that define the Zarvia studio."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {categories.map((cat) => {
            const count = getProductsByCategory(cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                className="group relative block min-h-[280px] overflow-hidden sm:min-h-[340px]"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ background: categoryHue[cat.id] }}
                />
                <div className="absolute inset-0 silk-sheen opacity-30" />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                  <p className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-pearl/70">
                    {count} pieces
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-pearl sm:text-4xl">
                    {cat.title}
                  </h2>
                  <p className="mt-2 max-w-sm font-body text-pearl/80">
                    {cat.line}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
