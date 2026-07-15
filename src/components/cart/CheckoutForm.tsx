"use client";

import type { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/data/products";
import { useCart } from "@/store/cart";

type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  shipping: "standard" | "express";
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  shipping: "standard",
};

export function CheckoutForm() {
  const lines = useCart((s) => s.lines);
  const clear = useCart((s) => s.clear);
  const subtotal = lines.reduce((sum, l) => sum + l.price * l.quantity, 0);
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");

  const shippingCost = form.shipping === "express" ? 299 : 0;
  const total = subtotal + shippingCost;

  if (lines.length === 0 && !submitted) {
    return (
      <div className="py-20 text-center">
        <p className="font-display text-2xl text-graphite">Nothing to checkout</p>
        <Link href="/studio" className="btn-primary mt-8 inline-flex">
          Enter the studio
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg py-16 text-center">
        <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
          Confirmation
        </p>
        <h1 className="mt-3 font-display text-4xl text-graphite sm:text-5xl">
          Order reserved
        </h1>
        <p className="mt-4 font-body text-lg text-muted">
          This is a frontend-only confirmation. No payment was taken. Your mock
          order reference is{" "}
          <span className="font-medium text-graphite">{orderId}</span>.
        </p>
        <Link href="/" className="btn-primary mt-10 inline-flex">
          Return home
        </Link>
      </div>
    );
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = `ZV-${Date.now().toString(36).toUpperCase()}`;
    setOrderId(id);
    setSubmitted(true);
    clear();
  };

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
    };

  return (
    <form onSubmit={onSubmit} className="grid gap-12 lg:grid-cols-[1fr_340px]">
      <div className="space-y-8">
        <fieldset className="space-y-4">
          <legend className="font-display text-xl text-graphite">Contact</legend>
          <input
            required
            className="input-field"
            placeholder="Full name"
            value={form.name}
            onChange={update("name")}
          />
          <input
            required
            type="email"
            className="input-field"
            placeholder="Email"
            value={form.email}
            onChange={update("email")}
          />
          <input
            required
            className="input-field"
            placeholder="Phone"
            value={form.phone}
            onChange={update("phone")}
          />
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="font-display text-xl text-graphite">
            Shipping address
          </legend>
          <textarea
            required
            rows={3}
            className="input-field resize-none"
            placeholder="Street address"
            value={form.address}
            onChange={update("address")}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              className="input-field"
              placeholder="City"
              value={form.city}
              onChange={update("city")}
            />
            <input
              required
              className="input-field"
              placeholder="State"
              value={form.state}
              onChange={update("state")}
            />
          </div>
          <input
            required
            className="input-field"
            placeholder="PIN code"
            value={form.pincode}
            onChange={update("pincode")}
          />
        </fieldset>

        <fieldset className="space-y-4">
          <legend className="font-display text-xl text-graphite">
            Shipping method
          </legend>
          <label className="flex cursor-pointer items-center justify-between border border-line bg-surface px-4 py-3">
            <span className="font-body text-graphite">Standard · 5–7 days</span>
            <span className="flex items-center gap-3">
              <span className="font-body text-muted">Free</span>
              <input
                type="radio"
                name="shipping"
                value="standard"
                checked={form.shipping === "standard"}
                onChange={update("shipping")}
              />
            </span>
          </label>
          <label className="flex cursor-pointer items-center justify-between border border-line bg-surface px-4 py-3">
            <span className="font-body text-graphite">Express · 2–3 days</span>
            <span className="flex items-center gap-3">
              <span className="font-body text-muted">{formatPrice(299)}</span>
              <input
                type="radio"
                name="shipping"
                value="express"
                checked={form.shipping === "express"}
                onChange={update("shipping")}
              />
            </span>
          </label>
        </fieldset>
      </div>

      <aside className="h-fit border border-line bg-surface p-6 backdrop-blur-sm lg:sticky lg:top-28">
        <p className="font-display text-[0.65rem] tracking-[0.2em] uppercase text-metal">
          Order
        </p>
        <ul className="mt-4 space-y-3 border-b border-line pb-4">
          {lines.map((line) => (
            <li
              key={`${line.productId}-${line.finish}-${line.size}`}
              className="flex justify-between gap-3 text-sm"
            >
              <span className="font-body text-muted">
                {line.name} × {line.quantity}
              </span>
              <span className="font-body tabular-nums text-graphite">
                {formatPrice(line.price * line.quantity)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-2 font-body text-sm">
          <div className="flex justify-between text-muted">
            <span>Subtotal</span>
            <span className="tabular-nums">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-muted">
            <span>Shipping</span>
            <span className="tabular-nums">
              {shippingCost === 0 ? "Free" : formatPrice(shippingCost)}
            </span>
          </div>
          <div className="flex justify-between pt-2 font-display text-xl text-graphite">
            <span>Total</span>
            <span className="tabular-nums">{formatPrice(total)}</span>
          </div>
        </div>
        <button type="submit" className="btn-primary mt-6 w-full">
          Place order
        </button>
        <p className="mt-3 text-center font-body text-xs text-metal">
          Demo checkout — no payment processed.
        </p>
      </aside>
    </form>
  );
}
