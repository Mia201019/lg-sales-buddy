import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { priceRows } from "@/data/catalog";
import {
  kpiSep,
  payTerms,
  salesIncentive,
  incentiveOf,
  type PayTerm,
} from "@/data/incentive";
import { formatVnd } from "@/data/products";

export const Route = createFileRoute("/tinh-thuong")({
  head: () => ({
    meta: [
      { title: "Tính thưởng nhân viên bán hàng | LG Kiosk MB" },
      {
        name: "description",
        content:
          "Công cụ tính thưởng tháng 9 theo model, hình thức thanh toán, doanh số và xếp hạng Best PC cho nhân viên bán hàng LG tại Kiosk MB.",
      },
      { property: "og:title", content: "Tính thưởng nhân viên bán hàng LG Kiosk MB" },
      {
        property: "og:description",
        content:
          "Nhập số máy bán được, hệ thống tự tính doanh số, thưởng theo model, thưởng doanh số và thưởng Best PC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BonusPage,
});

type QtyMap = Record<string, Record<PayTerm, number>>;

const emptyQty = (): Record<PayTerm, number> => ({
  oneTime: 0,
  m12: 0,
  m24: 0,
  m36: 0,
  epc: 0,
});

function BonusPage() {
  const [qty, setQty] = useState<QtyMap>({});
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState<PayTerm>("oneTime");
  const [rank, setRank] = useState<"none" | "Best PC (#1)" | "PC #2">("none");

  const detail = useMemo(() => {
    const out: {
      code: string;
      term: PayTerm;
      termLabel: string;
      qty: number;
      revenue: number;
      bonus: number;
    }[] = [];
    for (const [code, terms] of Object.entries(qty)) {
      const row = priceRows.find((p) => p.code === code);
      if (!row) continue;
      for (const t of payTerms) {
        const q = terms?.[t.id] ?? 0;
        if (!q) continue;
        out.push({
          code,
          term: t.id,
          termLabel: t.label,
          qty: q,
          revenue: (row.oneTime ?? 0) * q,
          bonus: (incentiveOf(code, t.id) ?? 0) * q,
        });
      }
    }
    return out;
  }, [qty]);

  const revenue = detail.reduce((s, d) => s + d.revenue, 0);
  const rawModelBonus = detail.reduce((s, d) => s + d.bonus, 0);
  const modelBonus = Math.min(rawModelBonus, kpiSep.modelCeiling);
  const sales = salesIncentive(revenue);
  const totalIncentive = Math.min(
    modelBonus + sales.amount,
    kpiSep.totalIncentiveCeiling,
  );
  const rankEligible = revenue >= kpiSep.rankCondition;
  const rankBonus =
    rank !== "none" && rankEligible
      ? (kpiSep.rankBonus.find((r) => r.rank === rank)?.amount ?? 0)
      : 0;
  const total = totalIncentive + rankBonus;

  const filtered = priceRows.filter(
    (r) =>
      r.code.toLowerCase().includes(search.toLowerCase()) ||
      r.type.toLowerCase().includes(search.toLowerCase()) ||
      r.group.toLowerCase().includes(search.toLowerCase()),
  );

  const setQtyFor = (code: string, t: PayTerm, value: number) =>
    setQty((prev) => ({
      ...prev,
      [code]: { ...emptyQty(), ...prev[code], [t]: value },
    }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black tracking-tight">
        Tính thưởng nhân viên bán hàng — {kpiSep.month}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Chọn hình thức thanh toán và nhập số lượng máy bán được — hệ thống tự tính doanh số,
        thưởng theo model (có trần), thưởng doanh số theo % hoàn thành Target và thưởng Best PC.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Doanh số (giá trả 1 lần)" value={formatVnd(revenue) ?? "—"} />
        <Stat
          label={`Thưởng theo model (trần ${formatVnd(kpiSep.modelCeiling)})`}
          value={formatVnd(modelBonus) ?? "—"}
          hint={
            rawModelBonus > kpiSep.modelCeiling
              ? `Thực tế ${formatVnd(rawModelBonus)} — đã áp trần`
              : undefined
          }
        />
        <Stat
          label="Thưởng doanh số"
          value={formatVnd(sales.amount) ?? "—"}
          hint={`Đạt ${sales.pct.toFixed(0)}% Target · hệ số ${sales.level.factor}`}
        />
        <Stat label="Tổng thưởng" value={formatVnd(total) ?? "—"} highlight />
      </div>

      <div className="mt-4 rounded-2xl border border-border bg-surface p-4 text-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold">Hình thức thanh toán:</span>
          {payTerms.map((t) => (
            <button
              key={t.id}
              onClick={() => setTerm(t.id)}
              className={`rounded-full px-3 py-1.5 font-semibold transition-colors ${
                term === t.id
                  ? "bg-brand text-brand-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Thưởng theo model thay đổi theo kỳ hạn trả góp — trả góp càng dài, thưởng càng cao.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface p-4 text-sm">
        <span className="font-semibold">Xếp hạng PC:</span>
        {(["none", "Best PC (#1)", "PC #2"] as const).map((r) => (
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
          Điều kiện: {kpiSep.rankConditionText} ·{" "}
          {rankEligible ? "Đã đủ điều kiện" : "Chưa đủ điều kiện"} · Thưởng xếp hạng:{" "}
          <strong className="text-foreground">{formatVnd(rankBonus)}</strong>
        </span>
      </div>

      {detail.length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-surface text-left">
                <th className="p-3">Model đã bán</th>
                <th className="p-3">Hình thức</th>
                <th className="p-3">SL</th>
                <th className="p-3">Doanh số</th>
                <th className="p-3">Thưởng model</th>
              </tr>
            </thead>
            <tbody>
              {detail.map((d) => (
                <tr key={`${d.code}-${d.term}`} className="border-t border-border">
                  <td className="p-3 font-bold">{d.code}</td>
                  <td className="p-3 text-muted-foreground">{d.termLabel}</td>
                  <td className="p-3">{d.qty}</td>
                  <td className="p-3">{formatVnd(d.revenue)}</td>
                  <td className="p-3 font-semibold text-brand">{formatVnd(d.bonus)}</td>
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
                  <th className="p-3">Giá trả 1 lần</th>
                  <th className="p-3">
                    Thưởng / máy
                    <div className="text-[11px] font-normal text-muted-foreground">
                      {payTerms.find((t) => t.id === term)?.label}
                    </div>
                  </th>
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
                    <td className="p-3 font-semibold">
                      {formatVnd(incentiveOf(r.code, term)) ?? "—"}
                    </td>
                    <td className="p-3">
                      <input
                        type="number"
                        min={0}
                        value={qty[r.code]?.[term] || ""}
                        onChange={(e) =>
                          setQtyFor(r.code, term, Number(e.target.value) || 0)
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
            <h3 className="font-extrabold">Thưởng doanh số theo % hoàn thành</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Target {formatVnd(kpiSep.target)} · Thưởng chuẩn {formatVnd(kpiSep.baseIncentive)} ×
              hệ số
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {kpiSep.levels.map((l) => {
                const active = sales.level.label === l.label;
                return (
                  <li
                    key={l.label}
                    className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 ${
                      active ? "bg-brand/10 font-bold text-brand" : "text-muted-foreground"
                    }`}
                  >
                    <span>{l.label}</span>
                    <span>
                      ×{l.factor} = {formatVnd(Math.round(kpiSep.baseIncentive * l.factor))}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-border p-4 text-sm">
            <h3 className="font-extrabold">Thưởng xếp hạng Best PC</h3>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              {kpiSep.rankBonus.map((r) => (
                <li key={r.rank}>
                  {r.rank}: <strong className="text-foreground">{formatVnd(r.amount)}</strong>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Điều kiện: {kpiSep.rankConditionText}.
            </p>
          </div>

          <div className="rounded-2xl border border-border p-4 text-sm">
            <h3 className="font-extrabold">Trần thưởng tháng</h3>
            <ul className="mt-3 space-y-1 text-muted-foreground">
              <li>
                Thưởng doanh số (Target):{" "}
                <strong className="text-foreground">{formatVnd(kpiSep.baseIncentive)}</strong>
              </li>
              <li>
                Thưởng theo model — trần:{" "}
                <strong className="text-foreground">{formatVnd(kpiSep.modelCeiling)}</strong>
              </li>
              <li>
                Tổng thưởng — trần:{" "}
                <strong className="text-foreground">
                  {formatVnd(kpiSep.totalIncentiveCeiling)}
                </strong>
              </li>
              <li>
                Thưởng đánh giá xếp loại:{" "}
                <strong className="text-foreground">{formatVnd(kpiSep.gradeEvaluation)}</strong>
              </li>
              <li>
                Trần lương biến đổi:{" "}
                <strong className="text-foreground">
                  {formatVnd(kpiSep.variableSalaryCeiling)}
                </strong>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
  highlight,
}: {
  label: string;
  value: string;
  hint?: string | undefined;
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
      {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
}
