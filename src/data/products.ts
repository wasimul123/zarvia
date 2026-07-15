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
 * Prices in INR (₹500–₹1500 for this edit).
 */
export const products: Product[] = [
  {
    id: "zv-001",
    slug: "emerald-verdant-teardrops",
    name: "Emerald Verdant Teardrops",
    occasion: "ceremony",
    category: "earrings",
    price: 1499,
    limitedQty: 11,
    featured: true,
    shortDescription: "Deep green pears with a crystal spray along the drop.",
    longDescription:
      "Two-tier emerald teardrops in gold tone — a petite pear at the lobe, a larger drop below edged with clear crystals. Styled and handheld angles of the same limited piece.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: [
      "/products/wa0009.jpg",
      "/products/wa0053.jpg",
      "/products/wa0054.jpg",
    ],
  },
  {
    id: "zv-002",
    slug: "rhombus-pave-drops",
    name: "Rhombus Pavé Drops",
    occasion: "evening",
    category: "earrings",
    price: 1099,
    limitedQty: 14,
    featured: true,
    shortDescription: "Baguette stud above a crystal-filled diamond frame.",
    longDescription:
      "A slender baguette post leads into a rhombus drop packed with pavé clear stones. Sharp geometry for evenings that need quiet sparkle.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0010.jpg", "/products/wa0045.jpg"],
  },
  {
    id: "zv-003",
    slug: "ribbon-baguette-studs",
    name: "Ribbon Baguette Studs",
    occasion: "gift",
    category: "earrings",
    price: 899,
    limitedQty: 16,
    shortDescription: "Open swirl studs with baguette ribbons of crystal.",
    longDescription:
      "Layered gold-tone swirls traced with round and baguette stones. Compact presence — easy to gift, hard to remake.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0024.jpg"],
  },
  {
    id: "zv-004",
    slug: "ruby-star-halo-drops",
    name: "Ruby Star Halo Drops",
    occasion: "ceremony",
    category: "earrings",
    price: 1449,
    limitedQty: 10,
    featured: true,
    shortDescription: "Crimson emerald-cut centres under a starburst post.",
    longDescription:
      "A star crystal cluster steps down into a rectangular ruby-red stone wrapped in a clear halo. Ceremonial weight without excess length.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0025.jpg", "/products/wa0033.jpg"],
  },
  {
    id: "zv-005",
    slug: "crystal-pear-halo-drops",
    name: "Crystal Pear Halo Drops",
    occasion: "ceremony",
    category: "earrings",
    price: 1299,
    limitedQty: 12,
    shortDescription: "Clear pear drop with a petal spray and full halo.",
    longDescription:
      "A petite clear pear at the stud, a larger haloed pear below with a crystal spray at the join. Soft brilliance for formal light.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0027.jpg"],
  },
  {
    id: "zv-006",
    slug: "twisted-orbit-drops",
    name: "Twisted Orbit Drops",
    occasion: "evening",
    category: "earrings",
    price: 1199,
    limitedQty: 13,
    featured: true,
    shortDescription: "A twisted gold bar over a pavé crystal circle.",
    longDescription:
      "Polished twist with a crystal edge leads into a fully pavé circular drop. Built to catch movement across a room.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0030.jpg"],
  },
  {
    id: "zv-007",
    slug: "silver-marquise-cascade",
    name: "Silver Marquise Cascade",
    occasion: "evening",
    category: "earrings",
    price: 1349,
    limitedQty: 8,
    featured: true,
    shortDescription: "Long silver-tone tapers of marquise crystal.",
    longDescription:
      "Wide at the top, tapering into a single crystal line — waterfall length in silver tone (S925 carded edit). Statement scale for night.",
    finishes: ["Silver Soft"],
    sizes: ["One Size"],
    images: ["/products/wa0031.jpg", "/products/wa0058.jpg"],
  },
  {
    id: "zv-008",
    slug: "open-pave-teardrops",
    name: "Open Pavé Teardrops",
    occasion: "evening",
    category: "earrings",
    price: 999,
    limitedQty: 15,
    shortDescription: "Open teardrop frame with a pavé lower arc.",
    longDescription:
      "Smooth gold above, crystal-encrusted below — an open teardrop that balances polish and sparkle in one silhouette.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0032.jpg"],
  },
  {
    id: "zv-009",
    slug: "gold-marquise-cascade",
    name: "Gold Marquise Cascade",
    occasion: "evening",
    category: "earrings",
    price: 1299,
    limitedQty: 9,
    shortDescription: "Gold-tone lattice that narrows into a crystal trail.",
    longDescription:
      "Marquise stones clustered wide at the top, then a vertical trail for length. Same cascade spirit in a warmer gold finish.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0034.jpg"],
  },
  {
    id: "zv-010",
    slug: "pearl-fan-studs",
    name: "Pearl Fan Studs",
    occasion: "ceremony",
    category: "earrings",
    price: 1399,
    limitedQty: 9,
    featured: true,
    shortDescription: "Lustrous pearl over a crystal scallop fan.",
    longDescription:
      "A round pearl sits above a gold-tone fan dense with clear stones. Statement fronts for ceremony profiles.",
    finishes: ["Gold Tone", "Silver Soft"],
    sizes: ["One Size"],
    images: ["/products/wa0050.jpg"],
  },
  {
    id: "zv-011",
    slug: "crystal-bloom-huggies",
    name: "Crystal Bloom Huggies",
    occasion: "gift",
    category: "earrings",
    price: 999,
    limitedQty: 15,
    shortDescription: "Half-hoops covered in a crystal lattice bloom.",
    longDescription:
      "Curved huggie silhouette with filigree gold and wall-to-wall clear stones. Compact shine for everyday gifting.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0051.jpg"],
  },
  {
    id: "zv-012",
    slug: "pearl-cushion-drops",
    name: "Pearl Cushion Drops",
    occasion: "gift",
    category: "earrings",
    price: 1249,
    limitedQty: 12,
    shortDescription: "Pearl halo stud into a pearl cushion frame.",
    longDescription:
      "Two tiers of pearl — a crystal halo circle above a square crystal-framed cushion. Soft light for a lasting gift.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0052.jpg"],
  },
  {
    id: "zv-013",
    slug: "leaf-marquise-drops",
    name: "Leaf Marquise Drops",
    occasion: "ceremony",
    category: "earrings",
    price: 1149,
    limitedQty: 13,
    shortDescription: "Diamond stud with a leaf frame of marquise stones.",
    longDescription:
      "A smooth gold rhombus stud holds a leaf-shaped open drop filled with marquise crystals — botanical line without weight.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0055.jpg"],
  },
  {
    id: "zv-014",
    slug: "helix-twist-drops",
    name: "Helix Twist Drops",
    occasion: "gift",
    category: "earrings",
    price: 749,
    limitedQty: 16,
    shortDescription: "Hammered gold spiral under a single clear stone.",
    longDescription:
      "Four-prong clear stone above a textured helix twist. Light, singular, and priced for first-look gifting.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0068.jpg"],
  },
  {
    id: "zv-015",
    slug: "gilded-blossom-studs",
    name: "Gilded Blossom Studs",
    occasion: "gift",
    category: "earrings",
    price: 599,
    limitedQty: 18,
    shortDescription: "Five-petal stainless blooms in polished gold tone.",
    longDescription:
      "Cherry-blossom studs with ribbed petals and a raised centre bead. Stainless steel base — everyday shape, limited count.",
    finishes: ["Gold Tone"],
    sizes: ["One Size"],
    images: ["/products/wa0070.jpg"],
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
