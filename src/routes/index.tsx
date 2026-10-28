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
      <section
        className="px-5 pb-16 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-[88px]"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #fff 0%, var(--surface) 120%)" }}
      >
        <div className="mx-auto max-w-[1180px]">
          <span className="inline-block rounded-full bg-brand-soft px-[18px] py-2 text-sm font-semibold text-brand">
            Dành cho Sales / PC
          </span>
          <h1 className="mx-auto mt-7 text-[clamp(38px,6vw,66px)] font-bold leading-[1.06]">
            LG Subscribe
            <br />
            <span className="text-brand">Sales Training Center</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-[clamp(17px,2vw,21px)] leading-relaxed text-muted-foreground">
            Học → Tư vấn → Đề xuất → Chốt
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/san-pham"
              className="rounded-full bg-brand px-[34px] py-[18px] text-[17px] font-semibold text-brand-foreground shadow-[0_10px_24px_-8px_rgba(165,0,52,.5)] transition hover:-translate-y-0.5 hover:bg-[#7C0027]"
            >
              Tra cứu sản phẩm
            </Link>
            <Link
              to="/dao-tao"
              className="rounded-full border-[1.5px] border-border bg-white px-[34px] py-[18px] text-[17px] font-semibold transition hover:-translate-y-0.5 hover:border-ink"
            >
              Học kỹ năng tư vấn
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="text-center text-[clamp(28px,3.4vw,40px)] font-semibold">Danh mục sản phẩm</h2>
        <p className="mx-auto mt-3.5 max-w-[640px] text-center text-[17px] leading-relaxed text-muted-foreground">
          Chọn danh mục → chọn model → mở trang đào tạo riêng của model đó.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const count = models.filter((m) => m.category === c.id).length;
            return (
              <Link
                key={c.id}
                to="/san-pham"
                className="rounded-[20px] border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,.25)]"
              >
                <span className="grid h-[52px] w-[52px] place-items-center rounded-[14px] bg-brand-soft text-2xl">{c.icon}</span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-brand">
                  {c.code}
                </p>
                <p className="text-lg font-semibold">{c.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                <p className="mt-3 text-sm font-semibold">
                  {count > 0 ? `${count} model` : "Chưa có dữ liệu model"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="text-center text-[clamp(28px,3.4vw,40px)] font-semibold">Vì sao khách nên chọn LG Subscribe</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subscribeBenefits.map((b) => (
              <div key={b.title} className="rounded-[20px] border border-border bg-card p-6 text-center">
                <span className="mx-auto grid h-[52px] w-[52px] place-items-center rounded-[14px] bg-brand-soft text-2xl">{b.icon}</span>
                <p className="mt-4 text-[17px] font-semibold font-[family-name:var(--font-heading)]">{b.title}</p>
                <p className="mt-2 text-[14.5px] leading-normal text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="rounded-[28px] bg-brand-soft p-8 sm:p-12">
          <h2 className="text-[clamp(26px,3vw,36px)] font-semibold">Quick Sales Guide</h2>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Khi đang đứng trước khách, chỉ cần nhớ 5 điều của mỗi model:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["Sản phẩm", "ATA chính", "Lợi ích khách hàng", "Giá thuê bao", "Khuyến mãi / Quà"].map(
              (t, i) => (
                <div key={t} className="rounded-xl border border-border bg-card p-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-bold text-brand-foreground">
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
