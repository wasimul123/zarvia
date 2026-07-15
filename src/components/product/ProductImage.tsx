import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Prefer fill inside a positioned parent with explicit size */
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  fit?: "contain" | "cover";
};

/**
 * Serves catalog photos from /public/products without Next image downscaling.
 * Source files stay at original resolution on disk.
 */
export function ProductImage({
  src,
  alt,
  className = "",
  fill = true,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  fit = "cover",
}: Props) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        sizes={sizes}
        className={`h-full w-full ${fitClass} object-center ${className}`.trim()}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={1365}
      unoptimized
      priority={priority}
      sizes={sizes}
      className={`h-auto w-full ${className}`.trim()}
    />
  );
}
