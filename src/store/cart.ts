"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products, type Product } from "@/data/products";

export type CartLine = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  finish: string;
  size: string;
  placeholderHue: string;
};

type CartState = {
  lines: CartLine[];
  addItem: (input: {
    product: Product;
    quantity?: number;
    finish: string;
    size: string;
  }) => void;
  removeItem: (productId: string, finish: string, size: string) => void;
  updateQuantity: (
    productId: string,
    finish: string,
    size: string,
    quantity: number,
  ) => void;
  clear: () => void;
  itemCount: () => number;
  subtotal: () => number;
};

function lineKey(productId: string, finish: string, size: string) {
  return `${productId}::${finish}::${size}`;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      addItem: ({ product, quantity = 1, finish, size }) => {
        set((state) => {
          const key = lineKey(product.id, finish, size);
          const existing = state.lines.find(
            (l) => lineKey(l.productId, l.finish, l.size) === key,
          );
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                lineKey(l.productId, l.finish, l.size) === key
                  ? { ...l, quantity: l.quantity + quantity }
                  : l,
              ),
            };
          }
          return {
            lines: [
              ...state.lines,
              {
                productId: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                quantity,
                finish,
                size,
                placeholderHue: product.placeholderHue,
              },
            ],
          };
        });
      },
      removeItem: (productId, finish, size) => {
        const key = lineKey(productId, finish, size);
        set((state) => ({
          lines: state.lines.filter(
            (l) => lineKey(l.productId, l.finish, l.size) !== key,
          ),
        }));
      },
      updateQuantity: (productId, finish, size, quantity) => {
        if (quantity < 1) {
          get().removeItem(productId, finish, size);
          return;
        }
        const key = lineKey(productId, finish, size);
        set((state) => ({
          lines: state.lines.map((l) =>
            lineKey(l.productId, l.finish, l.size) === key
              ? { ...l, quantity }
              : l,
          ),
        }));
      },
      clear: () => set({ lines: [] }),
      itemCount: () => get().lines.reduce((sum, l) => sum + l.quantity, 0),
      subtotal: () =>
        get().lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
    }),
    {
      name: "zarvia-cart",
      partialize: (state) => ({ lines: state.lines }),
      onRehydrateStorage: () => (state) => {
        // Drop lines whose products no longer exist
        if (!state) return;
        const validIds = new Set(products.map((p) => p.id));
        state.lines = state.lines.filter((l) => validIds.has(l.productId));
      },
    },
  ),
);
