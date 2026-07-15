import Link from "next/link";

export default function NotFound() {
  return (
    <div className="atmosphere flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase text-metal">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl text-graphite">
        Piece not found
      </h1>
      <p className="mt-4 max-w-sm font-body text-muted">
        This edition may have closed, or the link is incomplete.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Return to Zarvia
      </Link>
    </div>
  );
}
