import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { categories, formatVnd, type CategoryId } from "@/data/products";
import { priceRows, customerVouchers, voucherNotes } from "@/data/catalog";

export const Route = createFileRoute("/gia-khuyen-mai")({
  head: () => ({
    meta: [
      { title: "Bảng giá, quà tặng & voucher tháng 8 | LG Kiosk MB" },
      {
        name: "description",
        content:
          "Bảng giá Kiosk MB tháng 8: giá niêm yết, One Time + Care, trả góp 12/24/36 tháng, quà tặng bundle và voucher MB.",
      },
      { property: "og:title", content: "Bảng giá, quà tặng & voucher LG Kiosk MB" },
      {
        property: "og:description",
        content: "Tra cứu giá, quà tặng và voucher theo đúng mã model.",
      },
    ],
  }),
  component: PricePage,
});

const catOrder = categories.map((c) => c.id);
const catLabel = (id: CategoryId) => categories.find((c) => c.id === id)?.name ?? id;

function PricePage() {
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [q, setQ] = useState("");

  const rows = priceRows
    .filter(
      (r) =>
        (cat === "all" || r.category === cat) &&
        (r.code.toLowerCase().includes(q.toLowerCase()) ||
          r.type.toLowerCase().includes(q.toLowerCase())),
    )
    .sort((a, b) => {
      const ca = catOrder.indexOf(a.category) - catOrder.indexOf(b.category);
      if (ca !== 0) return ca;
      return (b.discount ?? -1) - (a.discount ?? -1);
    });

  const mbRows = priceRows
    .filter((r) => r.mbVoucher)
    .sort((a, b) => {
      const ca = catOrder.indexOf(a.category) - catOrder.indexOf(b.category);
      if (ca !== 0) return ca;
      return (b.discount ?? -1) - (a.discount ?? -1);
    });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Giá, quà tặng & voucher</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Nguồn: Danh sách giá Kiosk MB tháng 8 · Khuyến mãi trọn gói Tháng 8 + Tháng 9 · Voucher MB
        đến 30/9. Danh sách được sắp xếp theo danh mục sản phẩm, ưu tiên % khuyến mãi từ cao xuống
        thấp.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Chip active={cat === "all"} onClick={() => setCat("all")} label="Tất cả" />
        {categories.map((c) => (
          <Chip
            key={c.id}
            active={cat === c.id}
            onClick={() => setCat(c.id)}
            label={`${c.icon} ${c.name}`}
          />
        ))}
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Tìm mã model…"
          className="ml-auto w-full rounded-full border border-border bg-background px-4 py-2 text-sm sm:w-64"
        />
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[1080px] text-sm">
          <thead>
            <tr className="bg-surface text-left">
              <th className="p-3">Model</th>
              <th className="p-3">Danh mục</th>
              <th className="p-3">Giá niêm yết</th>
              <th className="p-3">Khuyến mãi</th>
              <th className="p-3">Giá trả 1 lần</th>
              <th className="p-3">12 tháng</th>
              <th className="p-3">24 tháng</th>
              <th className="p-3">36 tháng</th>
              <th className="p-3">Quà tặng (Tháng 8 + Tháng 9)</th>
              <th className="p-3">Bảo hành mở rộng</th>
              <th className="p-3">Thưởng PC</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.code} className="border-t border-border">
                <td className="p-3">
                  <Link to="/san-pham/$model" params={{ model: r.code }} className="font-bold text-brand">
                    {r.code}
                  </Link>
                  <div className="text-xs text-muted-foreground">
                    {r.group} · {r.type}
                  </div>
                </td>
                <td className="p-3 text-xs">{catLabel(r.category)}</td>
                <td className="p-3">{formatVnd(r.mrp) ?? "—"}</td>
                <td className="p-3 font-semibold text-brand">
                  {r.discount != null ? `-${r.discount}%` : "—"}
                </td>
                <td className="p-3 font-semibold">{formatVnd(r.oneTime) ?? "—"}</td>
                <td className="p-3">{formatVnd(r.m12) ?? "—"}</td>
                <td className="p-3">{formatVnd(r.m24) ?? "—"}</td>
                <td className="p-3">{formatVnd(r.m36) ?? "—"}</td>
                <td className="p-3">
                  {r.gift ? (
                    <span>
                      {r.gift.name}
                      <span className="block text-xs text-muted-foreground">
                        {r.gift.model} · {formatVnd(r.gift.value)}
                      </span>
                    </span>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="p-3">{r.gift?.ew ?? "—"}</td>
                <td className="p-3 font-semibold text-brand">{formatVnd(r.incentive) ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-border p-5">
          <h2 className="text-xl font-semibold">Voucher cho khách hàng cá nhân (app MB)</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {customerVouchers.map((v) => (
              <li key={v.reward} className="flex items-center justify-between gap-3 rounded-xl bg-surface px-4 py-3">
                <span>Đơn hàng từ {formatVnd(v.min)}</span>
                <span className="text-right font-bold">
                  {v.reward}
                  <span className="block text-xs font-normal text-muted-foreground">
                    trị giá {formatVnd(v.value)}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-border p-5">
          <h2 className="text-xl font-semibold">Voucher 2.000.000đ cho nhân viên MB Bank</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Áp dụng cho {mbRows.length} model dưới đây, đến hết 30/9.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="bg-surface text-left">
                  <th className="p-3">Model</th>
                  <th className="p-3">Danh mục</th>
                  <th className="p-3">Giá trả 1 lần</th>
                  <th className="p-3">Voucher</th>
                </tr>
              </thead>
              <tbody>
                {mbRows.map((r) => (
                  <tr key={r.code} className="border-t border-border">
                    <td className="p-3">
                      <Link
                        to="/san-pham/$model"
                        params={{ model: r.code }}
                        className="font-bold text-brand"
                      >
                        {r.code}
                      </Link>
                      <div className="text-xs text-muted-foreground">{r.type}</div>
                    </td>
                    <td className="p-3 text-xs">{catLabel(r.category)}</td>
                    <td className="p-3">{formatVnd(r.oneTime) ?? "—"}</td>
                    <td className="p-3 font-semibold">{formatVnd(r.mbVoucher) ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
            {voucherNotes.map((n) => (
              <li key={n}>• {n}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function Chip({
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
      className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
        active
          ? "bg-brand text-brand-foreground"
          : "border border-border text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
