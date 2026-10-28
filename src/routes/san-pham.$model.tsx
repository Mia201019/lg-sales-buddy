import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  buyVsSubscribe,
  commonObjections,
  formatVnd,
  getCategory,
  getModel,
  subscribeBenefits,
  type Model,
} from "@/data/products";
import { Bullets, Empty, ProductImage, Section } from "@/components/ui-bits";

export const Route = createFileRoute("/san-pham/$model")({
  codeSplitGroupings: [["loader", "component"]],
  loader: ({ params }) => {
    const model = getModel(params.model);
    if (!model) throw notFound();
    return { model };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Không tìm thấy model" }, { name: "robots", content: "noindex" }],
      };
    }
    const { model } = loaderData;
    const title = `${model.code} — Trang đào tạo Sales LG Subscribe`;
    const description = `ATA, kịch bản tư vấn, giá thuê bao, Care Service, EW và quà tặng của model ${model.code}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ModelPage,
});

function ModelPage() {
  const { model } = Route.useLoaderData() as { model: Model };
  const category = getCategory(model.category);
  const price = model.price;
  const promo = model.promotion;
  const c = model.consultation;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link to="/san-pham" className="text-sm font-semibold text-brand">
        ← Tất cả sản phẩm
      </Link>

      <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
        <ProductImage src={model.imageUrl} alt={model.name ?? model.code} />
        <div>
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
            {category?.icon} {category?.name}
          </span>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">
            {model.name ?? "Chưa có tên sản phẩm"}
          </h1>
          <p className="mt-1 text-sm font-bold uppercase tracking-widest text-brand">{model.code}</p>

          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            <Spec label="Loại sản phẩm" value={model.type} />
            <Spec label="Dung tích / kích thước" value={model.capacity} />
            {model.specs.map((s) => (
              <Spec key={s.label} label={s.label} value={s.value} />
            ))}
          </dl>

          <div className="mt-5 rounded-2xl border border-brand/30 bg-brand-soft p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-brand">Giá thuê bao</p>
            <p className="mt-1 text-2xl font-bold">
              {formatVnd(price?.monthly ?? null) ?? "Chưa có thông tin"}
              {price?.monthly ? <span className="text-base font-semibold"> / tháng</span> : null}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Kỳ hạn: {price?.term ?? "Chưa có thông tin"}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5">
        <Section title="Tính năng nổi bật">
          {model.features.length === 0 ? (
            <Empty />
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {model.features.map((f) => (
                <div key={f.title} className="rounded-xl border border-border bg-surface p-4">
                  <span className="text-xl">{f.icon}</span>
                  <p className="mt-1 font-bold">{f.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>
          )}
        </Section>

        <Section
          title="ATA — Điểm bán hàng cốt lõi"
          subtitle={
            model.snapcard
              ? `Nguồn: Snapcard LG GTM Training — ${model.snapcard.title}`
              : "Sales cần thuộc lòng những ý này"
          }
          tone="brand"
        >
          <Bullets items={model.ata} marker="★" />
        </Section>

        {model.snapcard && (
          <Section
            title="Snapcard sản phẩm"
            subtitle="Ảnh tài liệu chính thức — mở to để tư vấn trực tiếp cho khách"
          >
            <div className="grid gap-4">
              {model.snapcard.images.map((src, i) => (
                <a key={src} href={src} target="_blank" rel="noreferrer">
                  <img
                    src={src}
                    alt={`Snapcard ${model.code} — trang ${i + 1}`}
                    loading="lazy"
                    className="w-full rounded-xl border border-border bg-surface"
                  />
                </a>
              ))}
            </div>
          </Section>
        )}

        <div className="grid gap-5 lg:grid-cols-2">
          <Section title="Lợi ích cho khách hàng">
            <Bullets items={model.customerBenefits} />
          </Section>
          <Section title="Ưu thế so với sản phẩm thông thường">
            <Bullets items={model.vsConventional} />
          </Section>
        </div>

        <Section title="Kỹ năng tư vấn" subtitle="Khách hàng mục tiêu & câu hỏi khai thác">
          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Khách hàng phù hợp
              </h3>
              <div className="mt-2">
                <Bullets items={c?.targetCustomers ?? []} />
              </div>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Vấn đề sản phẩm giải quyết
              </h3>
              <div className="mt-2">
                <Bullets items={c?.painPoints ?? []} />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Câu hỏi nên hỏi khách
              </h3>
              <div className="mt-2">
                <Bullets items={c?.questions ?? []} marker="?" />
              </div>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Kịch bản tư vấn
              </h3>
              <div className="mt-2 grid gap-2">
                {c?.scripts?.length ? (
                  c.scripts.map((s, i) => (
                    <div key={i} className="rounded-xl border border-border bg-surface p-3 text-sm">
                      <p className="font-bold">Khách nói: {s.situation}</p>
                      <p className="mt-1 text-muted-foreground">→ {s.response}</p>
                    </div>
                  ))
                ) : (
                  <Empty />
                )}
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Xử lý từ chối"
          subtitle={
            c?.objections?.length
              ? "Kịch bản riêng cho model này"
              : "Áp dụng kịch bản chung của LG Subscribe"
          }
        >
          <div className="grid gap-3 lg:grid-cols-2">
            {(c?.objections?.length ? c.objections : commonObjections).map((o, i) => (
              <div key={i} className="rounded-xl border border-border bg-surface p-4">
                <p className="font-bold">“{o.objection}”</p>
                <p className="mt-1 text-sm text-muted-foreground">{o.response}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Vì sao chọn LG Subscribe thay vì mua đứt?" tone="brand">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Mua đứt
              </p>
              <ul className="mt-2 grid gap-1 text-sm text-muted-foreground">
                {buyVsSubscribe.buy.map((b) => (
                  <li key={b}>– {b}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border-2 border-brand bg-card p-4">
              <p className="text-sm font-bold uppercase tracking-widest text-brand">LG Subscribe</p>
              <ul className="mt-2 grid gap-1 text-sm font-medium">
                {buyVsSubscribe.subscribe.map((b) => (
                  <li key={b}>✓ {b}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {subscribeBenefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-3">
                <span>{b.icon}</span>
                <p className="font-bold">{b.title}</p>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Giá & chi phí" subtitle={price?.note ?? undefined}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <PriceBox label="Giá sản phẩm" value={formatVnd(price?.productPrice ?? null)} />
            <PriceBox label="Thuê bao / tháng" value={formatVnd(price?.monthly ?? null)} />
            <PriceBox label="Giá theo năm" value={formatVnd(price?.yearly ?? null)} />
            <PriceBox label="Kỳ hạn" value={price?.term ?? null} />
            <PriceBox label="Care Service" value={formatVnd(price?.careService ?? null)} />
            <PriceBox label="Bảo hành mở rộng (EW)" value={formatVnd(price?.extendedWarranty ?? null)} />
            <PriceBox label="Tổng chi phí áp dụng" value={formatVnd(price?.total ?? null)} />
          </div>
        </Section>

        <Section title="Khuyến mãi & Quà tặng" tone="highlight">
          {promo?.title || promo?.giftName ? (
            <div className="grid gap-2">
              <p className="text-xl font-bold">🎁 {promo.title ?? "Ưu đãi đặc biệt"}</p>
              <p className="font-bold">{promo.giftName ?? "Chưa có thông tin quà tặng"}</p>
              <p className="text-sm">
                Giá trị quà: {formatVnd(promo.giftValue ?? null) ?? "Chưa có thông tin"}
              </p>
              <p className="text-sm text-muted-foreground">
                Thời gian: {promo.period ?? "Chưa có thông tin"}
              </p>
              <p className="text-sm text-muted-foreground">
                Điều kiện: {promo.conditions ?? "Chưa có thông tin"}
              </p>
            </div>
          ) : (
            <Empty />
          )}
        </Section>

        <Section title="Quick Sales Guide — Nhớ 5 điều" tone="brand">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <QuickItem n={1} label="Sản phẩm" value={model.name ?? model.code} />
            <QuickItem n={2} label="ATA chính" value={model.ata[0] ?? null} />
            <QuickItem n={3} label="Lợi ích khách hàng" value={model.customerBenefits[0] ?? null} />
            <QuickItem
              n={4}
              label="Giá thuê bao"
              value={formatVnd(price?.monthly ?? null) ?? null}
            />
            <QuickItem n={5} label="Quà tặng" value={promo?.giftName ?? null} />
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Câu hỏi chốt đơn
            </h3>
            <div className="mt-2">
              <Bullets items={c?.closings ?? []} marker="✓" />
            </div>
          </div>
        </Section>

        {model.lgUrl && (
          <a
            href={model.lgUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-brand"
          >
            Xem trang chính thức trên LG Vietnam ↗
          </a>
        )}
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-0.5 text-sm font-bold">{value ?? "Chưa có thông tin"}</dd>
    </div>
  );
}

function PriceBox({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-0.5 text-base font-bold">{value ?? "Chưa có thông tin"}</p>
    </div>
  );
}

function QuickItem({ n, label, value }: { n: number; label: string; value: string | null }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-bold text-brand-foreground">
        {n}
      </span>
      <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-bold">{value ?? "Chưa có thông tin"}</p>
    </div>
  );
}