import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, models, subscribeBenefits } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LG Subscribe Sales Training Center | Học – Tư vấn – Chốt đơn" },
      {
        name: "description",
        content:
          "Cẩm nang đào tạo Sales LG Subscribe: thông tin từng model, ATA, kịch bản tư vấn, giá thuê bao, Care Service, EW và quà tặng.",
      },
      { property: "og:title", content: "LG Subscribe Sales Training Center" },
      {
        property: "og:description",
        content: "Cẩm nang đào tạo Sales và công cụ tư vấn khách hàng LG Subscribe.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="border-b border-border bg-ink px-4 py-16 text-background">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-highlight">
            Dành cho Sales / PC
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            LG SUBSCRIBE
            <br />
            SALES TRAINING CENTER
          </h1>
          <p className="mt-4 text-lg font-semibold text-background/80">
            Học → Tư vấn → Đề xuất → Chốt
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/san-pham"
              className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground"
            >
              Tra cứu sản phẩm
            </Link>
            <Link
              to="/dao-tao"
              className="rounded-full border border-background/40 px-6 py-3 text-sm font-bold"
            >
              Học kỹ năng tư vấn
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-black tracking-tight">Danh mục sản phẩm</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Chọn danh mục → chọn model → mở trang đào tạo riêng của model đó.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const count = models.filter((m) => m.category === c.id).length;
            return (
              <Link
                key={c.id}
                to="/san-pham"
                className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg"
              >
                <span className="text-3xl">{c.icon}</span>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-brand">
                  {c.code}
                </p>
                <p className="text-lg font-extrabold">{c.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                <p className="mt-3 text-sm font-semibold">
                  {count > 0 ? `${count} model` : "Chưa có dữ liệu model"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-surface px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-black tracking-tight">Vì sao khách nên chọn LG Subscribe</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subscribeBenefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-5">
                <span className="text-2xl">{b.icon}</span>
                <p className="mt-2 font-extrabold">{b.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border border-brand/30 bg-brand-soft p-6">
          <h2 className="text-xl font-black">Quick Sales Guide</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Khi đang đứng trước khách, chỉ cần nhớ 5 điều của mỗi model:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["Sản phẩm", "ATA chính", "Lợi ích khách hàng", "Giá thuê bao", "Khuyến mãi / Quà"].map(
              (t, i) => (
                <div key={t} className="rounded-xl border border-border bg-card p-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-black text-brand-foreground">
                    {i + 1}
                  </span>
                  <p className="mt-2 text-sm font-bold">{t}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
