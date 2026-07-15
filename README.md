# Zarvia

Immersive UI for **Zarvia** — limited-edition imitation jewellery handpicked for special occasions.

Frontend-only. Product images and copy are placeholders you can replace later. Cart and checkout persist in the browser (no backend).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion + Lenis
- Zustand (localStorage cart)

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Description |
|------|-------------|
| `/` | Immersive scroll home |
| `/studio` | The Studio — full boutique collection |
| `/occasions` · `/occasions/[occasion]` | Shop by occasion |
| `/categories` · `/categories/[category]` | Shop by silhouette |
| `/atelier` | Brand / maison story |
| `/product/[slug]` | Product detail + add to cart |
| `/account` | Account UI placeholder |
| `/cart` | Cart review |
| `/checkout` | Demo checkout (no payment) |

## Replacing placeholders

Edit [`src/data/products.ts`](src/data/products.ts) — swap names, prices, descriptions, and replace `placeholderHue` panels with real image URLs when ready. SVG stubs live in [`public/placeholders/`](public/placeholders/).
