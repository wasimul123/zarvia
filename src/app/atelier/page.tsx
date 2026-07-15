import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Atelier",
  description:
    "The Zarvia atelier — how limited editions are handpicked for special occasions.",
};

export default function AtelierPage() {
  return (
    <div className="atmosphere min-h-screen safe-px pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <PageHeader
            eyebrow="Maison"
            title="The Atelier"
            description="Zarvia is a studio of limited imitation jewellery — each piece chosen for evenings, ceremonies, and gifts that will not repeat. Editions close when they leave; nothing is remade."
          />
          <div
            className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-auto lg:min-h-[480px]"
            style={{
              background:
                "linear-gradient(155deg, #d9cfc0 0%, #8a919c 40%, #1a1d23 100%)",
            }}
          >
            <div className="absolute inset-0 silk-sheen opacity-40" />
            <p className="absolute bottom-5 left-5 font-display text-[0.65rem] tracking-[0.2em] uppercase text-pearl/70 sm:bottom-6 sm:left-6">
              Placeholder atelier · Studio still
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:mt-24 sm:gap-12 sm:pt-16 md:grid-cols-3">
          {[
            {
              title: "Handpicked",
              body: "Every silhouette is selected for a single occasion chapter — evening light, vows, or the gift that arrives once.",
            },
            {
              title: "Limited",
              body: "Counts are finite on purpose. When the last piece leaves, that edition closes forever.",
            },
            {
              title: "Studio-born",
              body: "The Zarvia studio is where the collection lives — browse by occasion or category, then open a piece to claim it.",
            },
          ].map((block) => (
            <div key={block.title}>
              <h2 className="font-display text-xl text-graphite sm:text-2xl">
                {block.title}
              </h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted sm:text-base">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:flex-wrap sm:gap-8">
          <Link
            href="/studio"
            className="font-display text-[0.75rem] tracking-[0.18em] uppercase text-graphite underline decoration-line underline-offset-8 hover:decoration-graphite"
          >
            Enter the studio
          </Link>
          <Link
            href="/occasions"
            className="font-display text-[0.75rem] tracking-[0.18em] uppercase text-muted underline decoration-line underline-offset-8 hover:text-graphite hover:decoration-graphite"
          >
            Shop by occasion
          </Link>
        </div>
      </div>
    </div>
  );
}
