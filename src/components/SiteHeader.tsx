import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/san-pham", label: "Sản phẩm" },
  { to: "/dao-tao", label: "Đào tạo Sales" },
  { to: "/gia-khuyen-mai", label: "Giá & Khuyến mãi" },
  { to: "/so-sanh", label: "So sánh" },
  { to: "/tinh-thuong", label: "Tính thưởng" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-sm font-black text-brand-foreground">
            LG
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold tracking-tight">
              LG Subscribe Sales Training
            </span>
            <span className="block truncate text-[11px] text-muted-foreground">
              Học → Tư vấn → Đề xuất → Chốt
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
          className="shrink-0 rounded-lg border border-border px-3 py-2 text-sm font-semibold sm:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="grid gap-1 border-t border-border px-4 py-3 sm:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}