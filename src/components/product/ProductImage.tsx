import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Prefer fill inside a positioned parent */
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
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
}: Props) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`.trim()}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={1024}
      unoptimized
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
