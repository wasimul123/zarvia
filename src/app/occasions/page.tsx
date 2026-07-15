import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { occasions, getProductsByOccasion } from "@/data/products";

export const metadata: Metadata = {
  title: "Occasions",
  description:
    "Shop Zarvia by occasion — evening, ceremony, and gift editions.",
};

const occasionHue: Record<string, string> = {
  evening:
    "linear-gradient(160deg, #1a1d23 0%, #5c6570 45%, #d9cfc0 100%)",
  ceremony:
    "linear-gradient(150deg, #f4f6f8 0%, #c5ccd6 40%, #1a1d23 100%)",
  gift: "linear-gradient(145deg, #d9cfc0 0%, #8a919c 50%, #12151a 100%)",
};

export default function OccasionsPage() {
  return (
    <div className="atmosphere min-h-screen px-5 pb-24 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Explore"
          title="Occasions"
          description="Choose the moment first. Each chapter of Zarvia is composed for a specific kind of night, vow, or gesture."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {occasions.map((occ) => {
            const count = getProductsByOccasion(occ.id).length;
            return (
              <Link
                key={occ.id}
                href={`/occasions/${occ.id}`}
                className="group relative block min-h-[420px] overflow-hidden"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ background: occasionHue[occ.id] }}
                />
                <div className="absolute inset-0 silk-sheen opacity-30" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-pearl/70">
                    {count} pieces
                  </p>
                  <h2 className="mt-2 font-display text-4xl text-pearl">
                    {occ.title}
                  </h2>
                  <p className="mt-3 max-w-xs font-body text-pearl/80">
                    {occ.line}
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
