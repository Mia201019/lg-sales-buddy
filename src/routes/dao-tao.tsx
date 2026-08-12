import { createFileRoute, Link } from "@tanstack/react-router";
import { buyVsSubscribe, commonObjections, subscribeBenefits } from "@/data/products";
import { Bullets, Section } from "@/components/ui-bits";

export const Route = createFileRoute("/dao-tao")({
  head: () => ({
    meta: [
      { title: "Đào tạo Sales LG Subscribe | Quy trình tư vấn & chốt đơn" },
      {
        name: "description",
        content:
          "Quy trình 6 bước tư vấn LG Subscribe, câu hỏi khai thác nhu cầu, xử lý từ chối và câu hỏi chốt đơn cho Sales/PC.",
      },
      { property: "og:title", content: "Đào tạo Sales LG Subscribe" },
      {
        property: "og:description",
        content: "Quy trình tư vấn, xử lý từ chối và kỹ năng chốt đơn.",
      },
    ],
  }),
  component: TrainingPage,
});

const steps = [
  { n: 1, title: "Chào & khai thác", text: "Hỏi nhu cầu, số người dùng, không gian, ngân sách." },
  { n: 2, title: "Xác định vấn đề", text: "Máy cũ tốn điện? Không có thời gian vệ sinh? Hay hư vặt?" },
  { n: 3, title: "Chọn model phù hợp", text: "Đề xuất 1 model chính + 1 phương án thay thế." },
  { n: 4, title: "Trình bày ATA", text: "Nói 3 điểm mạnh cốt lõi, gắn với lợi ích của khách." },
  { n: 5, title: "Giới thiệu Subscribe", text: "So sánh Mua đứt vs Subscribe: Care Service + EW." },
  { n: 6, title: "Chốt đơn", text: "Nhấn quà tặng, thời hạn khuyến mãi và câu hỏi chốt." },
];

const discoveryQuestions = [
  "Hiện tại gia đình mình đang dùng sản phẩm nào ạ?",
  "Anh/chị đang gặp khó khăn gì với sản phẩm cũ?",
  "Nhà mình có bao nhiêu người sử dụng?",
  "Anh/chị dự kiến ngân sách khoảng bao nhiêu mỗi tháng?",
  "Tính năng nào là quan trọng nhất với anh/chị?",
];

const closings = [
  "Mình chốt gói theo tháng cho anh/chị hôm nay để kịp nhận quà tặng nhé?",
  "Anh/chị muốn giao hàng cuối tuần này hay đầu tuần sau ạ?",
  "Em làm hồ sơ đăng ký luôn cho anh/chị nhé, chỉ mất 5 phút thôi ạ.",
];

function TrainingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-black tracking-tight">Đào tạo Sales</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Kiến thức nền tảng áp dụng cho mọi model. Kịch bản riêng từng model nằm trong trang chi tiết
        sản phẩm.
      </p>

      <div className="mt-8 grid gap-5">
        <Section title="Quy trình tư vấn 6 bước" tone="brand">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-card p-4">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-xs font-black text-brand-foreground">
                  {s.n}
                </span>
                <p className="mt-2 font-bold">{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <div className="grid gap-5 lg:grid-cols-2">
          <Section title="Câu hỏi khai thác nhu cầu">
            <Bullets items={discoveryQuestions} marker="?" />
          </Section>
          <Section title="Câu hỏi chốt đơn">
            <Bullets items={closings} marker="✓" />
          </Section>
        </div>

        <Section title="Giá trị LG Subscribe">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-4">
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
              <div key={b.title} className="rounded-xl border border-border bg-surface p-4">
                <span className="text-xl">{b.icon}</span>
                <p className="mt-1 font-bold">{b.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Xử lý từ chối thường gặp" tone="highlight">
          <div className="grid gap-3 lg:grid-cols-2">
            {commonObjections.map((o) => (
              <div key={o.objection} className="rounded-xl border border-border bg-card p-4">
                <p className="font-bold">“{o.objection}”</p>
                <p className="mt-1 text-sm text-muted-foreground">{o.response}</p>
              </div>
            ))}
          </div>
        </Section>

        <Link
          to="/san-pham"
          className="inline-flex w-fit rounded-full bg-brand px-5 py-3 text-sm font-bold text-brand-foreground"
        >
          Xem kịch bản theo từng model →
        </Link>
      </div>
    </div>
  );
}