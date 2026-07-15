import { CategoryBrowse } from "@/components/home/CategoryBrowse";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Hero } from "@/components/home/Hero";
import { OccasionChapter } from "@/components/home/OccasionChapter";
import { ProductRunway } from "@/components/home/ProductRunway";
import { Suggestions } from "@/components/home/Suggestions";
import { occasions } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryBrowse />
      {occasions.map((occ, index) => (
        <OccasionChapter
          key={occ.id}
          occasion={occ.id}
          title={occ.title}
          line={occ.line}
          index={index}
        />
      ))}
      <Suggestions />
      <ProductRunway />
      <ClosingCta />
    </>
  );
}
