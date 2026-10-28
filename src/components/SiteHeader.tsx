import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/san-pham", label: "Sản phẩm" },
  { to: "/dao-tao", label: "Đào tạo Sales" },
  { to: "/gia-khuyen-mai", label: "Giá & Khuyến mãi" },
  { to: "/so-sanh", label: "So sánh" },
  { to: "/tinh-thuong", label: "Tính thưởng" },
  { to: "/catalogue", label: "Catalogue" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-[10px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:h-[76px] sm:justify-between sm:px-8 h-[68px]">
        <Link to="/" aria-label="LG Subscribe" className="flex min-w-0 shrink-0 items-center">
          <img
            src={`${import.meta.env.BASE_URL}lg-subscribe-logo.png`}
            alt="LG Subscribe"
            className="block h-[34px] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 rounded-full bg-surface p-1 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "bg-brand text-brand-foreground hover:bg-brand hover:text-brand-foreground" }}
              className="rounded-full px-3.5 py-2 text-[13px] font-semibold text-muted-foreground transition-all hover:bg-surface hover:text-foreground"
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