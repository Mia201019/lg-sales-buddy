import { createFileRoute, Link } from "@tanstack/react-router";
import { formatVnd, models } from "@/data/products";
import { Empty } from "@/components/ui-bits";

export const Route = createFileRoute("/gia-khuyen-mai")({
  head: () => ({
    meta: [
      { title: "Bảng giá & khuyến mãi LG Subscribe | Sales Training" },
      {
        name: "description",
        content:
          "Bảng giá thuê bao, Care Service, bảo hành mở rộng và quà tặng theo từng model LG Subscribe.",
      },
      { property: "og:title", content: "Bảng giá & khuyến mãi LG Subscribe" },
      {
        property: "og:description",
        content: "Tra cứu giá thuê bao và quà tặng theo đúng mã model.",
      },
    ],
  }),
  component: PricePage,
});

function PricePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black tracking-tight">Giá & Khuyến mãi</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Mọi con số gắn chặt với mã model — không dùng chéo giữa các model.
      </p>

      <div className="mt-6">
        {models.length === 0 ? (
          <Empty label="Chưa có bảng giá. Sau khi bạn gửi bảng giá, toàn bộ giá thuê bao, Care Service, EW và quà tặng sẽ hiển thị tại đây." />
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[880px] text-sm">
              <thead>
                <tr className="bg-surface text-left">
                  <th className="p-3">Model</th>
                  <th className="p-3">Thuê bao / tháng</th>
                  <th className="p-3">Kỳ hạn</th>
                  <th className="p-3">Care Service</th>
                  <th className="p-3">EW</th>
                  <th className="p-3">Tổng</th>
                  <th className="p-3">Quà tặng</th>
                </tr>
              </thead>
              <tbody>
                {models.map((m) => (
                  <tr key={m.code} className="border-t border-border">
                    <td className="p-3 font-bold">
                      <Link to="/san-pham/$model" params={{ model: m.code }} className="text-brand">
                        {m.code}
                      </Link>
                    </td>
                    <td className="p-3">{formatVnd(m.price?.monthly ?? null) ?? "—"}</td>
                    <td className="p-3">{m.price?.term ?? "—"}</td>
                    <td className="p-3">{formatVnd(m.price?.careService ?? null) ?? "—"}</td>
                    <td className="p-3">{formatVnd(m.price?.extendedWarranty ?? null) ?? "—"}</td>
                    <td className="p-3">{formatVnd(m.price?.total ?? null) ?? "—"}</td>
                    <td className="p-3">{m.promotion?.giftName ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}