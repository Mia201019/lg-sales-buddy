import type { ReactNode } from "react";

export function Section({
  title,
  subtitle,
  children,
  tone = "plain",
}: {
  title: string;
  subtitle?: string | undefined;
  children: ReactNode;
  tone?: "plain" | "brand" | "highlight";
}) {
  const toneClass =
    tone === "brand"
      ? "border-brand/30 bg-brand-soft"
      : tone === "highlight"
        ? "border-highlight/50 bg-highlight/10"
        : "border-border bg-card";
  return (
    <section className={`rounded-2xl border p-5 sm:p-6 ${toneClass}`}>
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function Empty({ label = "Chưa có thông tin." }: { label?: string }) {
  return (
    <p className="rounded-xl border border-dashed border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
      {label}
    </p>
  );
}

export function Bullets({ items, marker = "•" }: { items: string[]; marker?: string }) {
  if (!items.length) return <Empty />;
  return (
    <ul className="grid gap-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm leading-relaxed">
          <span className="shrink-0 font-bold text-brand">{marker}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductImage({
  src,
  alt,
  className = "",
}: {
  src: string | null;
  alt: string;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        className={`grid aspect-square place-items-center rounded-2xl border border-dashed border-border bg-surface text-center text-xs font-semibold text-muted-foreground ${className}`}
      >
        <span className="px-4">Official image not available</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`aspect-square w-full rounded-2xl bg-surface object-contain ${className}`}
    />
  );
}