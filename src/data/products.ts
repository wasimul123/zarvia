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
  /** Original product photos under /public/products — full resolution, never downscaled on store */
  images: string[];
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

/**
 * Current studio edit — originals stored in /public/products as uploaded.
 * Do not resize source files; UI serves them with next/image unoptimized.
 * Prices in INR (₹249–₹399 for this edit).
 */
export const products: Product[] = [
  {
    id: "zv-001",
    slug: "emerald-verdant-teardrops",
    name: "Emerald Verdant Teardrops",
    occasion: "ceremony",
    category: "earrings",
    price: 369,
    limitedQty: 11,
    featured: true,
    shortDescription: "Deep green teardrops with a crystal halo and bridge.",
    longDescription:
      "Two-tier emerald-green pears in gold tone — a petite inverted stone at the lobe, a larger teardrop below edged with clear pavé. Vintage-inspired colour for ceremony light.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/emerald-verdant-teardrops.jpg"],
  },
  {
    id: "zv-002",
    slug: "rhombus-pave-drops",
    name: "Rhombus Pavé Drops",
    occasion: "evening",
    category: "earrings",
    price: 349,
    limitedQty: 14,
    featured: true,
    shortDescription: "Baguette stud above a crystal-filled diamond frame.",
    longDescription:
      "A slender rectangular crystal post leads into a diamond-shaped drop packed with pavé clear stones. Sharp geometry for evenings that need quiet sparkle.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/rhombus-pave-drops.jpg"],
  },
  {
    id: "zv-003",
    slug: "ribbon-baguette-studs",
    name: "Ribbon Baguette Studs",
    occasion: "gift",
    category: "earrings",
    price: 379,
    limitedQty: 16,
    shortDescription: "Asymmetrical swirl studs with baguette crystal ribbons.",
    longDescription:
      "Layered gold-tone swirls traced with round pavé and rectangular baguette stones. A fluid teardrop silhouette — compact presence, high craft.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/ribbon-baguette-studs.jpg"],
  },
  {
    id: "zv-004",
    slug: "ruby-star-halo-drops",
    name: "Ruby Star Halo Drops",
    occasion: "ceremony",
    category: "earrings",
    price: 369,
    limitedQty: 10,
    featured: true,
    shortDescription: "Crimson emerald-cut centres under a starburst post.",
    longDescription:
      "A star crystal cluster steps down into a rectangular ruby-red stone wrapped in a clear halo. Ceremonial colour without excess length.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/ruby-star-halo-drops.jpg"],
  },
  {
    id: "zv-005",
    slug: "crystal-pear-halo-drops",
    name: "Crystal Pear Halo Drops",
    occasion: "ceremony",
    category: "earrings",
    price: 389,
    limitedQty: 12,
    featured: true,
    shortDescription: "Clear pear drop with a leaf spray and full halo.",
    longDescription:
      "A petite clear pear at the stud, a larger haloed pear below with a crystal leaf motif at the join. Soft brilliance for bridal and formal light.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/crystal-pear-halo-drops.jpg"],
  },
  {
    id: "zv-006",
    slug: "twisted-orbit-drops",
    name: "Twisted Orbit Drops",
    occasion: "evening",
    category: "earrings",
    price: 349,
    limitedQty: 13,
    featured: true,
    shortDescription: "A twisted gold bar over a pavé crystal circle.",
    longDescription:
      "Polished twist with a crystal edge leads into a fully pavé circular drop. Built to catch movement across a room.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/twisted-orbit-drops.jpg"],
  },
  {
    id: "zv-007",
    slug: "gold-marquise-cascade",
    name: "Gold Marquise Cascade",
    occasion: "evening",
    category: "earrings",
    price: 399,
    limitedQty: 8,
    featured: true,
    shortDescription: "S925 gold-plated lattice that narrows into a crystal trail.",
    longDescription:
      "Marquise stones clustered wide at the top, then three tiers into a vertical trail — chandelier length on gold-plated S925 silver. Statement scale for night.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/gold-marquise-cascade.jpg"],
  },
  {
    id: "zv-008",
    slug: "open-pave-teardrops",
    name: "Open Pavé Teardrops",
    occasion: "evening",
    category: "earrings",
    price: 329,
    limitedQty: 15,
    shortDescription: "Interlocking teardrop with a pavé lower arc.",
    longDescription:
      "Smooth gold above, crystal-encrusted below — an open interlocking teardrop that balances polish and sparkle in one silhouette.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/open-pave-teardrops.jpg"],
  },
  {
    id: "zv-009",
    slug: "crystal-bloom-huggies",
    name: "Crystal Bloom Huggies",
    occasion: "gift",
    category: "earrings",
    price: 379,
    limitedQty: 15,
    shortDescription: "Semi-hoops covered in a crystal filigree bloom.",
    longDescription:
      "Curved semi-hoop silhouette with leafy gold filigree and dense clear stones in round and marquise cuts. Compact shine with statement density.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/crystal-bloom-huggies.jpg"],
  },
  {
    id: "zv-010",
    slug: "pearl-cushion-drops",
    name: "Pearl Cushion Drops",
    occasion: "gift",
    category: "earrings",
    price: 349,
    limitedQty: 12,
    shortDescription: "Pearl halo stud into a pearl cushion frame.",
    longDescription:
      "Two tiers of pearl — a crystal halo circle above a square crystal-framed cushion. Soft light for a lasting gift.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/pearl-cushion-drops.jpg"],
  },
  {
    id: "zv-011",
    slug: "helix-twist-drops",
    name: "Helix Twist Drops",
    occasion: "gift",
    category: "earrings",
    price: 279,
    limitedQty: 16,
    shortDescription: "Hammered gold ribbon under a single clear stone.",
    longDescription:
      "Four-prong clear stone above a textured helix twist with a liquid-gold hammered finish. Light, singular, and easy to gift.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/helix-twist-drops.jpg"],
  },
  {
    id: "zv-012",
    slug: "gilded-blossom-studs",
    name: "Gilded Blossom Studs",
    occasion: "gift",
    category: "earrings",
    price: 249,
    limitedQty: 18,
    shortDescription: "Five-petal hammered blooms in polished gold tone.",
    longDescription:
      "Cherry-blossom studs with ruffled hammered petals and a raised centre bead. Nature-inspired everyday shape — limited count.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/gilded-blossom-studs.jpg"],
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

export function productCover(product: Product): string {
  return product.images[0] ?? "";
}
