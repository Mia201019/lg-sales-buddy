/**
 * SNAPCARD LG — nguồn: "Snapcard_All_Cat_Premium.pdf" (LG GTM Training).
 * Mỗi nhóm sản phẩm có: ảnh snapcard (CDN) + ATA (điểm bán hàng cốt lõi).
 */

import p02 from "@/assets/snapcard/p-02.jpg.asset.json";
import p03 from "@/assets/snapcard/p-03.jpg.asset.json";
import p04 from "@/assets/snapcard/p-04.jpg.asset.json";
import p05 from "@/assets/snapcard/p-05.jpg.asset.json";
import p06 from "@/assets/snapcard/p-06.jpg.asset.json";
import p08 from "@/assets/snapcard/p-08.jpg.asset.json";
import p09 from "@/assets/snapcard/p-09.jpg.asset.json";
import p10 from "@/assets/snapcard/p-10.jpg.asset.json";
import p11 from "@/assets/snapcard/p-11.jpg.asset.json";
import p12 from "@/assets/snapcard/p-12.jpg.asset.json";
import p13 from "@/assets/snapcard/p-13.jpg.asset.json";
import p14 from "@/assets/snapcard/p-14.jpg.asset.json";
import p15 from "@/assets/snapcard/p-15.jpg.asset.json";
import p16 from "@/assets/snapcard/p-16.jpg.asset.json";
import p17 from "@/assets/snapcard/p-17.jpg.asset.json";
import p18 from "@/assets/snapcard/p-18.jpg.asset.json";
import p19 from "@/assets/snapcard/p-19.jpg.asset.json";
import p20 from "@/assets/snapcard/p-20.jpg.asset.json";
import p21 from "@/assets/snapcard/p-21.jpg.asset.json";
import p23 from "@/assets/snapcard/p-23.jpg.asset.json";
import p24 from "@/assets/snapcard/p-24.jpg.asset.json";

export type Snapcard = {
  id: string;
  title: string;
  /** Ảnh snapcard (1 hoặc nhiều trang) */
  images: string[];
  /** ATA — điểm bán hàng cốt lõi lấy từ snapcard */
  ata: string[];
  /** Danh sách mã model áp dụng (khớp theo tiền tố / chứa chuỗi) */
  match: string[];
};

export const snapcards: Snapcard[] = [
  {
    id: "tv-oled-w6",
    title: "LG OLED evo W6 — TV Wallpaper mỏng nhất",
    images: [p03.url],
    ata: [
      "Thiết kế Wallpaper siêu mỏng chỉ 9.9mm — treo tường như một tác phẩm nghệ thuật.",
      "Zero Connect Box không dây, nhỏ gọn hơn thế hệ trước 35%, truyền hình ảnh 4K độ trễ thấp.",
      "Bộ xử lý α11 AI Processor 4K Gen3 + tấm nền OLED thế hệ mới: màu đen tuyệt đối, 100% khối lượng màu.",
      "Gaming đỉnh cao: 120Hz gốc, lên tới 165Hz, G-Sync & AMD FreeSync Premium, Dolby Vision.",
      "webOS 26 — 4 phiên bản nâng cấp trong 5 năm, AI Magic Remote, âm thanh vòm ảo 11.1.2.",
    ],
    match: ["OLED83W6"],
  },
  {
    id: "tv-oled-g6",
    title: "LG OLED evo G6 — TV treo tường hoàn hảo",
    images: [p04.url],
    ata: [
      "Thiết kế siêu mỏng liền tường (Zero Gap), viền kim loại cao cấp, đủ 97/77/65/55 inch.",
      "α11 AI Processor Gen 3: hiệu suất AI 1.3x, đồ họa 3x, tốc độ xử lý 1.8x — tối ưu theo từng cảnh.",
      "Tấm nền OLED evo Hyper Radiant RGB: sáng hơn, chống phản chiếu vượt trội, màu đen hoàn hảo.",
      "Chuẩn giải trí cao cấp: Dolby Vision, FILMMAKER MODE, HDR10, âm thanh vòm ảo 11.1.2.",
      "webOS 26 nâng cấp 5 năm, ThinQ AI, AirPlay 2, Home Hub, AI Magic Remote.",
    ],
    match: ["G6PSA"],
  },
  {
    id: "tv-oled-c6",
    title: "LG OLED evo C6 — Tuyệt đỉnh trải nghiệm",
    images: [p05.url],
    ata: [
      "OLED evo C6 83/77/65/55 inch — thiết kế siêu mỏng, viền kim loại cao cấp.",
      "α11 AI Processor Gen 3, tấm nền OLED thế hệ mới: màu đen hoàn hảo, 100% khối lượng màu.",
      "Gaming chuyên nghiệp: Native 120Hz (tới 165Hz), VRR, G-Sync, FreeSync Premium, Game Optimizer.",
      "Dolby Vision / Dolby Atmos, âm thanh vòm ảo 11.1.2, Geforce NOW 4K 120Hz.",
      "webOS 26 với 4 lần nâng cấp trong 5 năm — TV không lỗi thời theo thời gian.",
    ],
    match: ["C6PSA"],
  },
  {
    id: "tv-oled-b6",
    title: "LG OLED B6 — Dẫn đầu thị trường OLED",
    images: [p06.url],
    ata: [
      "OLED B6 77/65/55/48 inch — cửa ngõ vào thế giới OLED với mức đầu tư hợp lý nhất.",
      "α8 AI Processor 4K Gen 3: hiệu suất AI 5x, xử lý nhanh hơn 1.2x.",
      "Tấm nền OLED tự phát sáng: màu đen tuyệt đối, tương phản vô hạn, an toàn cho mắt.",
      "Native 120Hz (tới 144Hz cho game), VRR, ALLM, eARC, Dolby Vision.",
      "13 năm dẫn đầu thị trường OLED toàn cầu — bảo chứng chất lượng.",
    ],
    match: ["B6PSA"],
  },
  {
    id: "tv-lineup",
    title: "Dải TV LG 2026 — MicroRGB / QNED / NANO 4K UHD",
    images: [p02.url],
    ata: [
      "Dải sản phẩm đầy đủ: MicroRGB (MRGB96/86), QNED (90/86/81/80/70), NANO 4K UHD (NU855/NU805/UA8055).",
      "Công nghệ chấm lượng tử QNED cho màu sắc rực rỡ, độ sáng cao — hợp phòng khách nhiều ánh sáng.",
      "webOS 2026 + ThinQ AI, AI Magic Remote điều khiển bằng giọng nói tiếng Việt.",
      "Hỗ trợ Dolby Vision / Dolby Atmos, chế độ game ALLM/VRR trên các dòng cao.",
      "Kích cỡ đa dạng 43\" – 100\", dễ chọn theo diện tích phòng và ngân sách khách hàng.",
    ],
    match: ["MRGB", "QNED", "NU855"],
  },
  {
    id: "ref-fd-2026",
    title: "Tủ lạnh French Door 2026 — Vừa vặn tối ưu, làm đá tối đa",
    images: [p08.url],
    ata: [
      "Thiết kế âm tủ sang trọng, hài hòa không kẽ hở với không gian bếp hiện đại.",
      "Hệ thống lấy nước & đá đầu tiên thế giới tích hợp trên cửa mỏng chỉ 180mm — 3 loại đá (tròn, viên, nghiền).",
      "Vòi nước trang bị UVnano diệt khuẩn tới 99,99%, bảo vệ sức khỏe cả nhà.",
      "Máy nén Smart Inverter + Linear Cooling: giữ nhiệt ổn định, tiết kiệm điện, bảo hành máy nén dài hạn.",
      "Dung tích lớn 550–580 lít, màn hình hiển thị 6.8 inch, chất liệu Matte Glass / Glass cao cấp.",
    ],
    match: ["F61BMD", "F58BGD", "F51EG", "F50BG"],
  },
  {
    id: "ref-instaview",
    title: "Tủ lạnh French Door InstaView",
    images: [p09.url, p10.url, p11.url],
    ata: [
      "InstaView™ — gõ 2 lần để nhìn xuyên cửa, hạn chế mở cửa nên giữ nhiệt và tiết kiệm điện.",
      "Door Cooling+™ làm lạnh nhanh phía cửa, Linear Cooling™ giữ nhiệt độ ổn định ±0.5°C.",
      "Hygiene Fresh+™ lọc khuẩn khử mùi bên trong tủ, thực phẩm tươi lâu hơn.",
      "Fresh Converter+™ / Fresh Tray: tùy chỉnh ngăn theo loại thực phẩm (thịt, cá, rau).",
      "Thiết kế đậm chất riêng, lấy nước ngoài tiện lợi, làm đá tự động.",
    ],
    match: ["LFD61BLGAI", "LFD58BLMAI", "LFB58BLMA"],
  },
  {
    id: "wm-fl-topgun",
    title: "Máy giặt lồng ngang TOP GUN — Cân mọi giới hạn",
    images: [p12.url, p15.url, p16.url],
    ata: [
      "AIDD™ — AI nhận diện loại vải và khối lượng, 6 chuyển động giặt bảo vệ sợi vải.",
      "TurboWash™360: giặt nhanh chỉ 39 phút nhờ hệ thống tia nước 3D mà vẫn sạch sâu.",
      "Steam™+ diệt khuẩn và tác nhân gây dị ứng (mạt bụi, phấn hoa, lông thú) — chứng nhận Intertek Hoa Kỳ.",
      "Khối lượng giặt lớn 15kg / 17kg, lồng giặt thép không gỉ hoàn toàn, cửa kính cường lực 2 lớp.",
      "Bảng điều khiển LCD tối giản + điều khiển từ xa qua LG ThinQ™, tải thêm chu trình giặt mới.",
    ],
    match: ["FX14", "F2517", "F2515"],
  },
  {
    id: "wm-tl-topgun",
    title: "Máy giặt lồng đứng TOP GUN",
    images: [p14.url],
    ata: [
      "Công nghệ AI DD™ nhận diện chất liệu vải, tối ưu chuyển động giặt cho từng mẻ đồ.",
      "TurboWash3D™ — tia nước mạnh nhiều hướng, giặt sạch nhanh, tiết kiệm nước.",
      "Ngăn phân bổ nước giặt/nước xả tự động, không cần đong mỗi lần giặt.",
      "Lồng giặt thép không gỉ, động cơ Inverter Direct Drive bảo hành 10 năm, vận hành êm.",
      "Kết nối LG ThinQ™ theo dõi và điều khiển chu trình từ xa.",
    ],
    match: ["TX2725", "T2522"],
  },
  {
    id: "wm-washdry",
    title: "Máy giặt sấy TOP GUN — Dễ dàng, tiện lợi",
    images: [p13.url],
    ata: [
      "Giặt và sấy trong một máy — tiết kiệm diện tích, phù hợp căn hộ.",
      "AIDD™ giặt thông minh theo loại vải, TurboWash™360 rút ngắn thời gian giặt.",
      "Bảng điều khiển LCD trực quan, nhiều chu trình chuyên biệt.",
      "Khối lượng giặt sấy lớn, xử lý được chăn mền.",
      "Kết nối LG ThinQ™ điều khiển từ xa và chẩn đoán lỗi.",
    ],
    match: ["FV14", "FV15"],
  },
  {
    id: "dryer",
    title: "Máy sấy bơm nhiệt LG",
    images: [p17.url],
    ata: [
      "Công nghệ bơm nhiệt Dual Inverter Heat Pump — sấy ở nhiệt độ thấp, bảo vệ sợi vải, tiết kiệm điện.",
      "Khối lượng sấy lớn tới 12kg, lồng sấy thép không gỉ bền bỉ.",
      "Màn hình LCD trực quan, hỗ trợ nhiều ngôn ngữ, thiết kế phẳng tối giản.",
      "Tự làm sạch bộ lọc/bình ngưng, giảm công bảo dưỡng cho người dùng.",
      "Sấy khô hoàn toàn không phụ thuộc thời tiết — giải pháp cho mùa nồm ẩm.",
    ],
    match: ["DVHP", "RX12", "RX11"],
  },
  {
    id: "styler",
    title: "LG Styler — Giải pháp chăm sóc quần áo",
    images: [p18.url],
    ata: [
      "TrueSteam™ hơi nước khử mùi, diệt khuẩn và giảm nhăn mà không cần giặt lại.",
      "Chuyển động móc treo Moving Hanger giũ sạch bụi bẩn, phấn hoa trên quần áo.",
      "Chế độ hút ẩm/lưu thông khí tự động bên trong và bên ngoài — không cần mở cửa.",
      "Điều chỉnh hơi nước theo từng loại vải, an toàn cho đồ cao cấp, vest, áo dài.",
      "Màn hình LCD cảm ứng mới, UX/UI trực quan, kết nối LG ThinQ™.",
    ],
    match: ["SC5MBR", "S3", "S5"],
  },
  {
    id: "dishwasher",
    title: "Máy rửa chén LG — Rửa chuẩn sạch",
    images: [p19.url],
    ata: [
      "QuadWash™ — 4 cánh quạt phun tia nước đa hướng, sạch mọi ngóc ngách.",
      "Tải lớn ~14 bộ chén đĩa chuẩn Châu Âu, phù hợp gia đình đông người.",
      "TrueSteam™ / hơi nước nhiệt độ cao diệt khuẩn, làm sáng ly thủy tinh.",
      "Inverter Direct Drive vận hành êm, bảo hành động cơ dài hạn.",
      "Sấy khô tự động và chế độ tự vệ sinh khoang máy — không còn mùi hôi.",
    ],
    match: ["LDT14", "LDN14"],
  },
  {
    id: "washtower",
    title: "LG WashTower — Tháp giặt sấy",
    images: [p21.url],
    ata: [
      "2 sản phẩm trong 1 thiết kế tháp — tiết kiệm diện tích, chỉ 1 bảng điều khiển ở giữa.",
      "AI DD™ nhận diện loại vải và khối lượng để chọn chu trình giặt tối ưu.",
      "Tự động làm sạch bình ngưng bằng nước tái chế trong quá trình sấy — không cần bảo dưỡng thủ công.",
      "Giặt xong chuyển sang sấy liền mạch, tiết kiệm thời gian cho gia đình bận rộn.",
      "Kết nối LG ThinQ™ điều khiển và theo dõi từ xa.",
    ],
    match: ["WT2517", "WT"],
  },
  {
    id: "rac-ipc",
    title: "Điều hòa LG IPC series — Điều hòa AI đầu tiên tại Việt Nam",
    images: [p23.url],
    ata: [
      "AI Air — tự động điều chỉnh làn gió theo 3 bước: tốc độ gió, hướng luồng gió và nhiệt độ.",
      "Thiết kế 2 cửa gió với cánh gió kép tự động, làm mát nhanh và tránh gió lạnh trực tiếp.",
      "Dual Inverter tiết kiệm điện, làm lạnh nhanh, vận hành êm.",
      "Màn hình hiển thị nhiệt độ thông minh, kết nối LG ThinQ™.",
      "Bảo hành máy nén dài hạn — chi phí vận hành thấp trong suốt vòng đời.",
    ],
    match: ["IDC", "IDH"],
  },
  {
    id: "dehumidifier",
    title: "Máy hút ẩm LG 34 lít / 40 lít",
    images: [p24.url],
    ata: [
      "Máy nén Dual Inverter — hiệu suất hút ẩm cao tới 34 lít/ngày, tiết kiệm điện.",
      "Giải quyết triệt để nồm ẩm, nấm mốc, mùi hôi trong nhà và phòng ngủ.",
      "Chế độ sấy khô quần áo nhanh, thay thế việc phơi khi trời mưa.",
      "Thiết kế nhỏ gọn 410 x 640 x 210mm, có bánh xe di chuyển dễ dàng.",
      "Kết nối LG ThinQ™ và cảm biến độ ẩm tự động duy trì mức lý tưởng.",
    ],
    match: ["MD16", "MD19", "DD20", "DD23"],
  },
  {
    id: "microwave",
    title: "Lò vi sóng LG Smart Inverter",
    images: [p20.url],
    ata: [
      "Smart Inverter điều khiển chính xác công suất 300–1000W — nấu nhanh và đều hơn.",
      "Dung tích đa dạng 20L / 25L / 30L phù hợp mọi gia đình.",
      "Khoang men chống bám bẩn, dễ vệ sinh.",
      "Nhiều chế độ nấu tự động, rã đông thông minh.",
      "Thiết kế cửa kéo sang bên hoặc nhấn mở, sang trọng cho gian bếp.",
    ],
    match: ["MS2535", "MS2032", "MS3032"],
  },
];

/** Tìm snapcard phù hợp với model code */
export const getSnapcard = (code: string): Snapcard | undefined => {
  const upper = code.toUpperCase();
  return snapcards.find((s) => s.match.some((m) => upper.includes(m.toUpperCase())));
};
