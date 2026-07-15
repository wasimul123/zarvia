import Image from "next/image";

type Props = {
  /** Visual size variant */
  variant?: "nav" | "hero" | "footer";
  className?: string;
  priority?: boolean;
};

const sizes = {
  nav: {
    width: 160,
    height: 75,
    className: "h-8 w-auto sm:h-9 lg:h-10",
    src: "/brand/zarvia-logo-nav.png",
  },
  hero: {
    width: 1024,
    height: 479,
    className: "h-auto w-full max-w-[min(92vw,34rem)] sm:max-w-[min(88vw,42rem)] lg:max-w-[48rem]",
    src: "/brand/zarvia-logo.png",
  },
  footer: {
    width: 160,
    height: 75,
    className: "h-9 w-auto sm:h-10",
    src: "/brand/zarvia-logo-nav.png",
  },
} as const;

export function BrandLogo({
  variant = "nav",
  className = "",
  priority = false,
}: Props) {
  const s = sizes[variant];

  return (
    <Image
      src={s.src}
      alt="Zarvia — Singular. Curated."
      width={s.width}
      height={s.height}
      priority={priority}
      className={`${s.className} ${className}`.trim()}
    />
  );
}
