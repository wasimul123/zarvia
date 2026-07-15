import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow ? (
        <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 font-display text-4xl tracking-tight text-graphite sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 font-body text-lg leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
