import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, formatVnd, models, type CategoryId } from "@/data/products";
import { Empty } from "@/components/ui-bits";

export const Route = createFileRoute("/so-sanh")({
  head: () => ({
    meta: [
      { title: "So sánh model LG Subscribe | Sales Training" },
      {
        name: "description",
        content:
          "So sánh nhanh các model trong cùng danh mục: ATA, dung tích, giá thuê bao, Care Service, EW và quà tặng.",
      },
      { property: "og:title", content: "So sánh model LG Subscribe" },
      {
        property: "og:description",
        content: "Chọn model phù hợp nhất cho khách hàng chỉ trong vài giây.",
      },
    ],
  }),
  component: ComparePage,
});

const rows = [
  { label: "Danh mục", get: (m: (typeof models)[number]) => categories.find((c) => c.id === m.category)?.name ?? null },
  { label: "Dung tích / kích thước", get: (m: (typeof models)[number]) => m.capacity },
  { label: "Tính năng chính", get: (m: (typeof models)[number]) => m.features[0]?.title ?? null },
  { label: "ATA chính", get: (m: (typeof models)[number]) => m.ata[0] ?? null },
  { label: "Giá thuê bao / tháng", get: (m: (typeof models)[number]) => formatVnd(m.price?.monthly ?? null) },
  { label: "Kỳ hạn", get: (m: (typeof models)[number]) => m.price?.term ?? null },
  { label: "Care Service", get: (m: (typeof models)[number]) => formatVnd(m.price?.careService ?? null) },
  { label: "Bảo hành mở rộng (EW)", get: (m: (typeof models)[number]) => formatVnd(m.price?.extendedWarranty ?? null) },
  { label: "Khuyến mãi", get: (m: (typeof models)[number]) => m.promotion?.title ?? null },
  { label: "Quà tặng", get: (m: (typeof models)[number]) => m.promotion?.giftName ?? null },
];

function ComparePage() {
  const [cat, setCat] = useState<CategoryId>("ref");
  const [picked, setPicked] = useState<string[]>([]);

  const pool = useMemo(() => models.filter((m) => m.category === cat), [cat]);
  const selected = pool.filter((m) => picked.includes(m.code)).slice(0, 3);

  const toggle = (code: string) =>
    setPicked((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code].slice(-3),
    );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black tracking-tight">So sánh model</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Chọn tối đa 3 model trong cùng danh mục để đề xuất nhanh cho khách.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setCat(c.id);
              setPicked([]);
            }}
            className={`rounded-full border px-3 py-1.5 text-sm font-semibold ${
              cat === c.id
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-card text-muted-foreground"
            }`}
          >
            {c.icon} {c.code}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {pool.length === 0 ? (
          <Empty label="Chưa có model trong danh mục này. Dữ liệu sẽ hiển thị sau khi bảng giá được cập nhật." />
        ) : (
          <div className="flex flex-wrap gap-2">
            {pool.map((m) => (
              <button
                key={m.code}
                onClick={() => toggle(m.code)}
                className={`rounded-xl border px-3 py-2 text-sm font-semibold ${
                  picked.includes(m.code) ? "border-brand bg-brand-soft" : "border-border bg-card"
                }`}
              >
                {m.code}
              </button>
            ))}
          </div>
        )}
      </div>

      {selected.length > 0 && (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-surface text-left">
                <th className="p-3 font-bold">Tiêu chí</th>
                {selected.map((m) => (
                  <th key={m.code} className="p-3 font-black text-brand">
                    {m.code}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-border">
                  <td className="p-3 font-semibold text-muted-foreground">{r.label}</td>
                  {selected.map((m) => (
                    <td key={m.code} className="p-3">
                      {r.get(m) ?? "Chưa có thông tin"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}