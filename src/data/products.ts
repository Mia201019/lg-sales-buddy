/**
 * NGUỒN DỮ LIỆU DUY NHẤT CHO TOÀN BỘ WEBSITE
 * ------------------------------------------------------------------
 * Model code là "single source of truth". Mọi thông tin (ảnh, thông số,
 * ATA, giá, Care Service, EW, khuyến mãi, quà tặng) phải thuộc đúng model.
 *
 * Trường nào chưa có dữ liệu -> để `null` hoặc mảng rỗng.
 * Giao diện sẽ tự hiển thị "Chưa có thông tin".
 *
 * ẢNH: chỉ dùng URL ảnh chính thức từ https://www.lg.com/vn/
 * Nếu không tìm được ảnh đúng model -> để imageUrl: null
 * (giao diện hiển thị "Official image not available").
 */

export type CategoryId = "ref" | "wm" | "rac" | "aircare" | "tv" | "styler" | "other";

import { priceRows } from "./catalog";
import { getSnapcard } from "./snapcards";

export type Category = {
  id: CategoryId;
  code: string;
  name: string;
  description: string;
  icon: string;
};

export const categories: Category[] = [
  { id: "ref", code: "REF", name: "Tủ lạnh", description: "Tủ lạnh LG Subscribe", icon: "❄️" },
  { id: "wm", code: "WM", name: "Máy giặt", description: "Máy giặt & máy sấy", icon: "🌀" },
  { id: "rac", code: "RAC", name: "Máy lạnh", description: "Điều hoà không khí", icon: "🌬️" },
  { id: "aircare", code: "AIR CARE", name: "Air Care", description: "Máy lọc không khí, hút ẩm", icon: "🍃" },
  { id: "tv", code: "TV", name: "TV", description: "OLED / QNED / UHD", icon: "📺" },
  { id: "styler", code: "STYLER", name: "Styler", description: "Tủ chăm sóc quần áo", icon: "👔" },
  { id: "other", code: "KHÁC", name: "Sản phẩm khác", description: "Các sản phẩm LG Subscribe khác", icon: "✨" },
];

export type Price = {
  /** Giá bán đứt sản phẩm (VNĐ) */
  productPrice: number | null;
  /** Giá thuê bao hàng tháng (VNĐ) */
  monthly: number | null;
  /** Giá theo năm nếu có (VNĐ) */
  yearly: number | null;
  /** Kỳ hạn thuê bao, ví dụ "39 tháng" */
  term: string | null;
  /** Phí Care Service (VNĐ / kỳ) */
  careService: number | null;
  /** Phí bảo hành mở rộng EW (VNĐ) */
  extendedWarranty: number | null;
  /** Tổng chi phí áp dụng (VNĐ) */
  total: number | null;
  note: string | null;
};

export type Promotion = {
  title: string | null;
  giftName: string | null;
  giftValue: number | null;
  period: string | null;
  conditions: string | null;
};

export type Consultation = {
  /** Khách hàng phù hợp */
  targetCustomers: string[];
  /** Vấn đề sản phẩm giải quyết */
  painPoints: string[];
  /** Câu hỏi Sales nên hỏi */
  questions: string[];
  /** Kịch bản tư vấn ngắn: nếu khách nói X -> tư vấn Y */
  scripts: { situation: string; response: string }[];
  /** Xử lý từ chối */
  objections: { objection: string; response: string }[];
  /** Câu hỏi chốt đơn */
  closings: string[];
};

export type Model = {
  /** Model code - nguồn sự thật duy nhất */
  code: string;
  name: string | null;
  category: CategoryId;
  type: string | null;
  capacity: string | null;
  specs: { label: string; value: string }[];
  /** URL ảnh chính thức từ lg.com/vn - null nếu chưa có */
  imageUrl: string | null;
  /** Link trang sản phẩm trên LG Vietnam */
  lgUrl: string | null;
  features: { icon: string; title: string; description: string }[];
  /** ATA - 3-5 điểm bán hàng cốt lõi */
  ata: string[];
  customerBenefits: string[];
  vsConventional: string[];
  consultation: Consultation | null;
  price: Price | null;
  promotion: Promotion | null;
  /** Ảnh snapcard LG (GTM Training) áp dụng cho model này */
  snapcard: { title: string; images: string[] } | null;
};

/**
 * ============================================================
 *  DANH SÁCH MODEL — dựng từ bảng giá Kiosk MB tháng 8
 *  + Scheme thưởng theo Model + quà tặng / voucher.
 * ============================================================
 */

const typeLabels: Record<string, string> = {
  OLED: "TV OLED evo",
  QNED: "TV QNED",
  UHD: "TV NANO / UHD",
  MRGB: "TV MicroRGB",
  "B/F": "Tủ lạnh ngăn đá dưới",
  "F/D": "Tủ lạnh 4 cửa (French Door)",
  SXS: "Tủ lạnh Side by Side",
  "T/F": "Tủ lạnh ngăn đá trên",
  DW: "Máy rửa chén",
  "RAC BD": "Máy lạnh Inverter",
  "Air purifier": "Máy lọc không khí",
  "Air Care": "Air Care",
  Styler: "Tủ chăm sóc quần áo Styler",
  Dryer: "Máy sấy quần áo",
  "F/L": "Máy giặt lồng ngang",
  "T/L": "Máy giặt lồng đứng",
  WashTower: "Tháp giặt sấy WashTower",
};

const screenSize = (code: string) => {
  const m = code.match(/^(\d{2,3})/) ?? code.match(/OLED(\d{2,3})/);
  return m ? `${m[1]} inch` : null;
};

export const models: Model[] = priceRows.map((row) => {
  const typeName = typeLabels[row.type] ?? row.type;
  const size = row.category === "tv" ? screenSize(row.code) : null;
  const snap = getSnapcard(row.code);
  return {
    code: row.code,
    name: `LG ${typeName}${size ? ` ${size}` : ""} ${row.code}`,
    category: row.category,
    type: typeName,
    capacity: size,
    specs: [
      { label: "Model code", value: row.code },
      { label: "Model suffix", value: row.suffix },
      { label: "Nhóm hàng", value: row.group },
      { label: "Loại", value: typeName },
    ],
    imageUrl: null,
    lgUrl: `https://www.lg.com/vn/search?search=${encodeURIComponent(row.code)}`,
    features: [],
    ata: [],
    customerBenefits: [],
    vsConventional: [],
    consultation: null,
    price: {
      productPrice: row.mrp,
      monthly: row.m36,
      yearly: null,
      term: row.m36 ? "12 / 24 / 36 tháng" : null,
      careService: null,
      extendedWarranty: null,
      total: row.oneTime,
      note:
        row.discount != null
          ? `Giá One Time + Care ưu đãi ${row.discount}% so với giá niêm yết.`
          : null,
    },
    promotion: row.gift
      ? {
          title: "Khuyến mãi trọn gói Tháng 8 + Tháng 9",
          giftName: `${row.gift.name} (${row.gift.model})`,
          giftValue: row.gift.value,
          period: "Tháng 8 + Tháng 9",
          conditions: row.gift.ew ? `Kèm bảo hành mở rộng ${row.gift.ew}.` : null,
        }
      : null,
  };
});

export const getModel = (code: string) =>
  models.find((m) => m.code.toLowerCase() === code.toLowerCase());

export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id);

export const modelsByCategory = (id: CategoryId) => models.filter((m) => m.category === id);

export const formatVnd = (value: number | null | undefined) =>
  value == null ? null : new Intl.NumberFormat("vi-VN").format(value) + " ₫";

/** Lợi ích chung của LG Subscribe (dùng ở trang chủ & trang chi tiết) */
export const subscribeBenefits = [
  { icon: "💳", title: "Thanh toán linh hoạt", description: "Trả theo tháng thay vì trả một lần, giảm áp lực tài chính." },
  { icon: "🧰", title: "Care Service định kỳ", description: "Kỹ thuật viên LG vệ sinh, bảo dưỡng sản phẩm theo lịch." },
  { icon: "🛡️", title: "Bảo hành mở rộng (EW)", description: "Yên tâm sử dụng suốt kỳ hạn thuê bao." },
  { icon: "⚡", title: "Tiện lợi", description: "Giao hàng, lắp đặt, hỗ trợ trọn gói từ LG." },
  { icon: "🔧", title: "Duy trì hiệu suất", description: "Sản phẩm luôn sạch, vận hành ổn định, bền hơn." },
  { icon: "🤝", title: "Đồng hành dài hạn", description: "LG hỗ trợ khách hàng trong suốt vòng đời sản phẩm." },
];

export const buyVsSubscribe = {
  buy: ["Chỉ có sản phẩm", "Trả toàn bộ tiền một lần", "Bảo hành tiêu chuẩn", "Tự lo vệ sinh, bảo dưỡng"],
  subscribe: [
    "Sản phẩm + Care Service + EW",
    "Trả theo tháng, nhẹ gánh tài chính",
    "Bảo hành mở rộng suốt kỳ hạn",
    "Kỹ thuật viên LG chăm sóc định kỳ",
  ],
};

/** Xử lý từ chối phổ biến — áp dụng chung khi model chưa có kịch bản riêng */
export const commonObjections = [
  {
    objection: "Giá cao quá.",
    response:
      "Anh/chị chia nhỏ theo tháng thì chi phí chỉ bằng một bữa ăn gia đình. Trong đó đã gồm cả bảo dưỡng định kỳ và bảo hành mở rộng — mua đứt vẫn phải trả thêm khoản này.",
  },
  {
    objection: "Sao phải thuê bao, mua đứt không phải hơn?",
    response:
      "Mua đứt là chỉ có sản phẩm. Subscribe là sản phẩm + đội ngũ LG chăm sóc + bảo hành mở rộng, máy luôn chạy như mới và không phát sinh chi phí sửa chữa bất ngờ.",
  },
  {
    objection: "Tôi không cần Care Service.",
    response:
      "Phần lớn hư hỏng đến từ việc không vệ sinh đúng cách. Care Service giúp máy tiết kiệm điện, sạch hơn và kéo dài tuổi thọ — chi phí đã nằm trong gói rồi.",
  },
  {
    objection: "Tôi mua hàng rẻ hơn cũng được.",
    response:
      "Máy rẻ thường tốn điện và hỏng vặt. Tính trọn vòng đời, LG Subscribe thường rẻ hơn vì đã bao gồm bảo dưỡng và bảo hành.",
  },
  {
    objection: "Tôi cần bảo hành mở rộng làm gì?",
    response:
      "EW giúp anh/chị không phải trả một đồng nào cho linh kiện chính trong suốt kỳ hạn — chi phí thay block/máy nén thực tế rất lớn.",
  },
];