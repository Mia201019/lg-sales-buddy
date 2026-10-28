import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, formatVnd, models, type CategoryId } from "@/data/products";
import { Empty, ProductImage } from "@/components/ui-bits";

export const Route = createFileRoute("/san-pham/")({
  head: () => ({
    meta: [
      { title: "Danh mục sản phẩm LG Subscribe | Sales Training" },
      {
        name: "description",
        content:
          "Tra cứu nhanh từng model LG Subscribe theo mã máy, danh mục và mức giá thuê bao dành cho đội ngũ Sales.",
      },
      { property: "og:title", content: "Danh mục sản phẩm LG Subscribe" },
      {
        property: "og:description",
        content: "Tìm model theo mã máy, danh mục và giá thuê bao.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<CategoryId | "all">("all");

  const results = useMemo(() => {
    const key = q.trim().toLowerCase();
    return models.filter((m) => {
      const okCat = cat === "all" || m.category === cat;
      const okQ =
        !key ||
        m.code.toLowerCase().includes(key) ||
        (m.name ?? "").toLowerCase().includes(key) ||
        (m.type ?? "").toLowerCase().includes(key);
      return okCat && okQ;
    });
  }, [q, cat]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Sản phẩm theo model</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Mỗi model có trang đào tạo riêng: ATA, kịch bản tư vấn, giá và quà tặng.
      </p>

      <div className="mt-6 grid gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tìm theo mã model, tên sản phẩm…"
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brand"
        />
        <div className="flex flex-wrap gap-2">
          <FilterChip active={cat === "all"} onClick={() => setCat("all")} label="Tất cả" />
          {categories.map((c) => (
            <FilterChip
              key={c.id}
              active={cat === c.id}
              onClick={() => setCat(c.id)}
              label={`${c.icon} ${c.code}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8">
        {results.length === 0 ? (
          <Empty label="Chưa có dữ liệu model. Sau khi bạn gửi bảng giá, danh sách sẽ hiển thị đầy đủ tại đây." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((m) => (
              <Link
                key={m.code}
                to="/san-pham/$model"
                params={{ model: m.code }}
                className="group rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-lg"
              >
                <ProductImage src={m.imageUrl} alt={m.name ?? m.code} />
                <p className="mt-3 text-[11px] font-bold uppercase tracking-widest text-brand">
                  {m.code}
                </p>
                <p className="mt-1 font-bold leading-snug">{m.name ?? "Chưa có tên sản phẩm"}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {formatVnd(m.price?.monthly ?? null)
                    ? `${formatVnd(m.price?.monthly ?? null)} / tháng`
                    : "Chưa có giá"}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${
        active
          ? "border-brand bg-brand text-brand-foreground"
          : "border-border bg-card text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}