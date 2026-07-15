export type Occasion = "evening" | "ceremony" | "gift";

export type Category =
  | "necklaces"
  | "earrings"
  | "bracelets"
  | "rings";

export type Product = {
  id: string;
  slug: string;
  name: string;
  occasion: Occasion;
  category: Category;
  price: number;
  limitedQty: number;
  featured?: boolean;
  shortDescription: string;
  longDescription: string;
  finishes: string[];
  sizes: string[];
  /** CSS gradient used as placeholder imagery until real photos arrive */
  placeholderHue: string;
  accentHue: string;
};

export const occasions: {
  id: Occasion;
  title: string;
  line: string;
}[] = [
  {
    id: "evening",
    title: "Evening",
    line: "Quiet light for nights that ask to be remembered.",
  },
  {
    id: "ceremony",
    title: "Ceremony",
    line: "Pieces composed for vows, rituals, and rare gatherings.",
  },
  {
    id: "gift",
    title: "Gift",
    line: "A limited token chosen once — never restocked.",
  },
];

export const categories: {
  id: Category;
  title: string;
  line: string;
}[] = [
  {
    id: "necklaces",
    title: "Necklaces",
    line: "Collars, chokers, and pendants that frame the neckline.",
  },
  {
    id: "earrings",
    title: "Earrings",
    line: "Drops and climbers balanced for movement after dusk.",
  },
  {
    id: "bracelets",
    title: "Bracelets",
    line: "Cuffs and knots composed for the wrist.",
  },
  {
    id: "rings",
    title: "Rings",
    line: "Bands stamped for the occasion — never remade.",
  },
];

export const products: Product[] = [
  {
    id: "zv-001",
    slug: "luna-cascade-choker",
    name: "Luna Cascade Choker",
    occasion: "evening",
    category: "necklaces",
    price: 4890,
    limitedQty: 12,
    featured: true,
    shortDescription: "Layered links that catch low light.",
    longDescription:
      "Hand-assembled cascade links in a soft silver tone. Designed for evening profiles — minimal at a glance, luminous in motion. Placeholder copy for the finished piece description.",
    finishes: ["Antique Silver", "Champagne Soft"],
    sizes: ["S", "M", "L"],
    placeholderHue:
      "linear-gradient(145deg, #cfd6de 0%, #8a919c 45%, #1a1d23 100%)",
    accentHue: "#c5ccd6",
  },
  {
    id: "zv-002",
    slug: "ember-drop-earrings",
    name: "Ember Drop Earrings",
    occasion: "evening",
    category: "earrings",
    price: 3290,
    limitedQty: 18,
    featured: true,
    shortDescription: "Elongated drops with a warm metal flush.",
    longDescription:
      "Elongated drops balanced for movement. A champagne cast with a cool graphite core. Placeholder description pending final product photography.",
    finishes: ["Champagne Soft", "Graphite Edge"],
    sizes: ["One Size"],
    placeholderHue:
      "linear-gradient(160deg, #d9cfc0 0%, #a89a86 40%, #2a2e36 100%)",
    accentHue: "#d9cfc0",
  },
  {
    id: "zv-003",
    slug: "veil-knot-bracelet",
    name: "Veil Knot Bracelet",
    occasion: "ceremony",
    category: "bracelets",
    price: 4190,
    limitedQty: 10,
    shortDescription: "A single knot form for ceremonial wrists.",
    longDescription:
      "A sculpted knot intended for ceremony hours. Silent geometry, soft weight. Placeholder copy — details and provenance notes will replace this text.",
    finishes: ["Pearl Mist", "Antique Silver"],
    sizes: ["S", "M"],
    placeholderHue:
      "linear-gradient(135deg, #f4f6f8 0%, #d4dde6 50%, #5c6570 100%)",
    accentHue: "#e8eef2",
  },
  {
    id: "zv-004",
    slug: "oath-ring-set",
    name: "Oath Ring Set",
    occasion: "ceremony",
    category: "rings",
    price: 5590,
    limitedQty: 8,
    featured: true,
    shortDescription: "Twin bands with a shared limited stamp.",
    longDescription:
      "Two bands sharing a single limited-edition stamp. Meant to be worn together or apart. Placeholder product story awaiting final copy.",
    finishes: ["Champagne Soft", "Pearl Mist"],
    sizes: ["5", "6", "7", "8", "9"],
    placeholderHue:
      "linear-gradient(150deg, #e8eef2 0%, #c5ccd6 35%, #1a1d23 100%)",
    accentHue: "#b8a892",
  },
  {
    id: "zv-005",
    slug: "solstice-pendant",
    name: "Solstice Pendant",
    occasion: "gift",
    category: "necklaces",
    price: 3890,
    limitedQty: 15,
    shortDescription: "A gift pendant cast for a single season.",
    longDescription:
      "Cast once for the season and never remade. A pendant with quiet presence — placeholder until real imagery and materials notes arrive.",
    finishes: ["Antique Silver", "Graphite Edge"],
    sizes: ['16"', '18"', '20"'],
    placeholderHue:
      "linear-gradient(170deg, #8a919c 0%, #2a2e36 55%, #0e1014 100%)",
    accentHue: "#8a919c",
  },
  {
    id: "zv-006",
    slug: "mirage-cuff",
    name: "Mirage Cuff",
    occasion: "gift",
    category: "bracelets",
    price: 4490,
    limitedQty: 9,
    featured: true,
    shortDescription: "An open cuff with mirrored inner edges.",
    longDescription:
      "Open cuff with mirrored inner polish. A gift with presence — placeholder description and finish notes will be updated with production assets.",
    finishes: ["Champagne Soft", "Antique Silver"],
    sizes: ["S/M", "M/L"],
    placeholderHue:
      "linear-gradient(140deg, #d9cfc0 0%, #8a919c 50%, #12151a 100%)",
    accentHue: "#d9cfc0",
  },
  {
    id: "zv-007",
    slug: "nocturne-ear-climbers",
    name: "Nocturne Ear Climbers",
    occasion: "evening",
    category: "earrings",
    price: 3590,
    limitedQty: 14,
    shortDescription: "Climbers that trace the ear after dusk.",
    longDescription:
      "Climbing forms designed for after-dusk occasions. Lightweight placeholder piece until studio photographs replace this panel.",
    finishes: ["Pearl Mist", "Graphite Edge"],
    sizes: ["One Size"],
    placeholderHue:
      "linear-gradient(155deg, #d4dde6 0%, #5c6570 48%, #0e1014 100%)",
    accentHue: "#c5ccd6",
  },
  {
    id: "zv-008",
    slug: "herald-statement-collar",
    name: "Herald Statement Collar",
    occasion: "ceremony",
    category: "necklaces",
    price: 6790,
    limitedQty: 6,
    featured: true,
    shortDescription: "A rare collar reserved for ceremony hours.",
    longDescription:
      "Our rarest silhouette — a statement collar for ceremony only. Six pieces worldwide. Placeholder narrative pending final craft notes.",
    finishes: ["Antique Silver", "Champagne Soft"],
    sizes: ["S", "M", "L"],
    placeholderHue:
      "linear-gradient(148deg, #f4f6f8 0%, #b8a892 40%, #1a1d23 100%)",
    accentHue: "#d9cfc0",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByOccasion(occasion: Occasion): Product[] {
  return products.filter((p) => p.occasion === occasion);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(limit = 4): Product[] {
  const featured = products.filter((p) => p.featured);
  return (featured.length ? featured : products).slice(0, limit);
}

export function getSuggestedProducts(limit = 4): Product[] {
  return [...products]
    .sort((a, b) => a.limitedQty - b.limitedQty)
    .slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.occasion === product.occasion || p.category === product.category),
    )
    .slice(0, limit);
}

export function getOccasion(id: string) {
  return occasions.find((o) => o.id === id);
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
