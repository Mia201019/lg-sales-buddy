import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { priceRows, kpi, incentiveForAmount } from "@/data/catalog";
import { formatVnd } from "@/data/products";

export const Route = createFileRoute("/tinh-thuong")({
  head: () => ({
    meta: [
      { title: "Tính thưởng nhân viên bán hàng | LG Kiosk MB" },
      {
        name: "description",
        content:
          "Công cụ tính thưởng theo model, doanh số và xếp hạng cho nhân viên bán hàng LG tại Kiosk MB.",
      },
      { property: "og:title", content: "Tính thưởng nhân viên bán hàng LG Kiosk MB" },
      {
        property: "og:description",
        content: "Nhập số máy bán được, hệ thống tự tính doanh số, thưởng model và incentive tháng.",
      },
    ],
  }),
  component: BonusPage,
});

type Row = { code: string; qty: number };

function BonusPage() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [search, setSearch] = useState("");
  const [rank, setRank] = useState<"none" | "PC #1" | "PC #2">("none");

  const selected: Row[] = useMemo(
    () => Object.entries(qty).filter(([, q]) => q > 0).map(([code, q]) => ({ code, qty: q })),
    [qty],
  );

  const detail = selected.map((r) => {
    const row = priceRows.find((p) => p.code === r.code)!;
    const revenue = (row.oneTime ?? 0) * r.qty;
    const modelBonus = (row.incentive ?? 0) * r.qty;
    return { row, qty: r.qty, revenue, modelBonus };
  });

  const revenue = detail.reduce((s, d) => s + d.revenue, 0);
  const modelBonus = detail.reduce((s, d) => s + d.modelBonus, 0);
  const tierBonus = incentiveForAmount(revenue);
  const rankBonus =
    rank !== "none" && revenue >= kpi.target
      ? (kpi.rankBonus.find((r) => r.rank === rank)?.amount ?? 0)
      : 0;
  const total = modelBonus + tierBonus + rankBonus;

  const filtered = priceRows.filter(
    (r) =>
      r.code.toLowerCase().includes(search.toLowerCase()) ||
      r.type.toLowerCase().includes(search.toLowerCase()) ||
      r.group.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black tracking-tight">Tính thưởng nhân viên bán hàng</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Nhập số lượng máy bán được trong tháng — hệ thống tự tính doanh số (giá One Time + Care),
        thưởng theo model, incentive theo doanh số và thưởng xếp hạng.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-4">
        <Stat label="Doanh số (AMT)" value={formatVnd(revenue) ?? "—"} />
        <Stat label="Thưởng theo model" value={formatVnd(modelBonus) ?? "—"} />
        <Stat label="Incentive doanh số" value={formatVnd(tierBonus) ?? "—"} />
        <Stat label="Tổng thưởng" value={formatVnd(total) ?? "—"} highlight />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface p-4 text-sm">
        <span className="font-semibold">Xếp hạng PC:</span>
        {(["none", "PC #1", "PC #2"] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRank(r)}
            className={`rounded-full px-3 py-1.5 font-semibold transition-colors ${
              rank === r
                ? "bg-brand text-brand-foreground"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {r === "none" ? "Không xếp hạng" : r}
          </button>
        ))}
        <span className="text-xs text-muted-foreground">
          Điều kiện: đạt Target tháng ≥ {formatVnd(kpi.target)} · Thưởng xếp hạng đang tính:{" "}
          <strong className="text-foreground">{formatVnd(rankBonus)}</strong>
        </span>
      </div>

      {detail.length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-surface text-left">
                <th className="p-3">Model đã bán</th>
                <th className="p-3">SL</th>
                <th className="p-3">Doanh số</th>
                <th className="p-3">Thưởng model</th>
              </tr>
            </thead>
            <tbody>
              {detail.map((d) => (
                <tr key={d.row.code} className="border-t border-border">
                  <td className="p-3 font-bold">{d.row.code}</td>
                  <td className="p-3">{d.qty}</td>
                  <td className="p-3">{formatVnd(d.revenue)}</td>
                  <td className="p-3 font-semibold text-brand">{formatVnd(d.modelBonus)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <section>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-extrabold">Nhập số lượng bán</h2>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm model, ví dụ OLED65C6PSA"
              className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm sm:w-72"
            />
          </div>
          <div className="mt-3 max-h-[520px] overflow-y-auto rounded-2xl border border-border">
            <table className="w-full min-w-[560px] text-sm">
              <thead className="sticky top-0 bg-surface text-left">
                <tr>
                  <th className="p-3">Model</th>
                  <th className="p-3">Giá One Time + Care</th>
                  <th className="p-3">Thưởng / máy</th>
                  <th className="p-3">SL</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr key={r.code} className="border-t border-border">
                    <td className="p-3">
                      <div className="font-bold">{r.code}</div>
                      <div className="text-xs text-muted-foreground">
                        {r.group} · {r.type}
                      </div>
                    </td>
                    <td className="p-3">{formatVnd(r.oneTime) ?? "—"}</td>
                    <td className="p-3 font-semibold">{formatVnd(r.incentive) ?? "—"}</td>
                    <td className="p-3">
                      <input
                        type="number"
                        min={0}
                        value={qty[r.code] ?? ""}
                        onChange={(e) =>
                          setQty((prev) => ({ ...prev, [r.code]: Number(e.target.value) || 0 }))
                        }
                        className="w-20 rounded-lg border border-border bg-background px-2 py-1"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border p-4">
            <h3 className="font-extrabold">Thưởng theo doanh số (AMT)</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {kpi.tiers.map((t) => {
                const active = tierBonus === t.amount && revenue >= t.min;
                return (
                  <li
                    key={t.label}
                    className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 ${
                      active ? "bg-brand/10 font-bold text-brand" : "text-muted-foreground"
                    }`}
                  >
                    <span>{t.label}</span>
                    <span>{formatVnd(t.amount)}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="rounded-2xl border border-border p-4 text-sm">
            <h3 className="font-extrabold">Thưởng xếp hạng</h3>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              {kpi.rankBonus.map((r) => (
                <li key={r.rank}>
                  {r.rank}: <strong className="text-foreground">{formatVnd(r.amount)}</strong>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">{kpi.rankCondition}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              Ví dụ: đạt 220.000.000 → Incentive 5.000.000 + 2.500.000 nếu đứng #1 và đạt Target.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        highlight ? "border-brand bg-brand/10" : "border-border bg-surface"
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className={`mt-1 text-lg font-black ${highlight ? "text-brand" : ""}`}>{value}</div>
    </div>
  );
}
