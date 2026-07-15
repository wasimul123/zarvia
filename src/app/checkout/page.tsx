import type { Metadata } from "next";
import { CheckoutForm } from "@/components/cart/CheckoutForm";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your Zarvia order — demo checkout UI only.",
};

export default function CheckoutPage() {
  return (
    <div className="atmosphere min-h-screen safe-px pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
          Almost yours
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight text-graphite sm:text-5xl">
          Checkout
        </h1>
        <div className="mt-12">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
