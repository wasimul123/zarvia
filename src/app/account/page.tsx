import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Account",
  description: "Your Zarvia account — orders, preferences, and saved pieces.",
};

export default function AccountPage() {
  return (
    <div className="atmosphere min-h-screen safe-px pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <PageHeader
          eyebrow="Member"
          title="Account"
          description="A quiet space for orders and preferences. Sign-in and order history will connect here once the backend is ready — for now, explore the studio."
        />

        <div className="space-y-4 border-y border-line py-2">
          {[
            { label: "Orders", note: "Coming with checkout history" },
            { label: "Saved pieces", note: "Wishlist — UI only for now" },
            { label: "Addresses", note: "Shipping preferences" },
            { label: "Preferences", note: "Occasion interests & alerts" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-baseline justify-between gap-4 border-b border-line py-5 last:border-b-0"
            >
              <div>
                <p className="font-display text-lg text-graphite">{item.label}</p>
                <p className="mt-1 font-body text-sm text-muted">{item.note}</p>
              </div>
              <span className="font-display text-[0.6rem] tracking-[0.14em] uppercase text-metal">
                Soon
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-8">
          <Link
            href="/studio"
            className="font-display text-[0.75rem] tracking-[0.18em] uppercase text-graphite underline decoration-line underline-offset-8 hover:decoration-graphite"
          >
            Continue in the studio
          </Link>
          <Link
            href="/cart"
            className="font-display text-[0.75rem] tracking-[0.18em] uppercase text-muted underline decoration-line underline-offset-8 hover:text-graphite hover:decoration-graphite"
          >
            View cart
          </Link>
        </div>
      </div>
    </div>
  );
}
