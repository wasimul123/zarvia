import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: Props) {
  return (
    <div className="mb-8 max-w-2xl sm:mb-12">
      {eyebrow ? (
        <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 font-display text-3xl tracking-tight text-graphite sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 font-body text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
