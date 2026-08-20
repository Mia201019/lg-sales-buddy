import { createFileRoute } from "@tanstack/react-router";
import airAsset from "@/assets/catalogue/AI_Air_Catalogue_2026_20260714_151516.pdf.asset.json";
import wmAsset from "@/assets/catalogue/CATALOGUE_WM_LG_20260714_151829.pdf.asset.json";
import dwAsset from "@/assets/catalogue/Cam_nang_May-rua_bat_LG_20260727_173337.pdf.asset.json";
import comAsset from "@/assets/catalogue/Catalogue-may-giat-say-thuong-mai-LG_20260730_162607.pdf.asset.json";
import refAsset from "@/assets/catalogue/Catalogue_Tu_lanh_LG_20260713_203147.pdf.asset.json";
import tvAsset from "@/assets/catalogue/LG_TV_2026_Catalogue_20260818_124424.pdf.asset.json";

export const Route = createFileRoute("/catalogue")({
  head: () => {
    const title = "Thư viện Catalogue LG — Tải tài liệu cho Sales";
    const description =
      "Tải catalogue LG 2026: TV, tủ lạnh, máy giặt, điều hoà, máy rửa bát, giặt sấy thương mại — file PDF chính hãng cho nhân viên bán hàng.";
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
  component: CataloguePage,
});

type Item = {
  asset: { url: string; size: number; original_filename: string };
  name: string;
  category: string;
  icon: string;
  desc: string;
};

const items: Item[] = [
  {
    asset: tvAsset,
    name: "Catalogue TV LG 2026",
    category: "TV",
    icon: "📺",
    desc: "OLED evo / QNED / UHD — dòng sản phẩm, công nghệ hình ảnh & âm thanh 2026.",
  },
  {
    asset: refAsset,
    name: "Catalogue Tủ lạnh LG",
    category: "Tủ lạnh",
    icon: "❄️",
    desc: "French Door, Side by Side, ngăn đá dưới — công nghệ Inverter Linear, InstaView.",
  },
  {
    asset: wmAsset,
    name: "Catalogue Máy giặt LG",
    category: "Máy giặt",
    icon: "🌀",
    desc: "Máy giặt lồng ngang, lồng đứng, WashTower, máy sấy — AI DD, Steam.",
  },
  {
    asset: airAsset,
    name: "Catalogue Điều hoà LG 2026",
    category: "Điều hoà",
    icon: "🌬️",
    desc: "AI Air, cảm biến phát hiện người, Dual Inverter — dòng IPC / IDC / IDH.",
  },
  {
    asset: dwAsset,
    name: "Cẩm nang Máy rửa bát LG",
    category: "Máy rửa bát",
    icon: "🍽️",
    desc: "Thông số, công nghệ, so sánh dòng máy và hướng dẫn tư vấn khách lần đầu.",
  },
  {
    asset: comAsset,
    name: "Catalogue Giặt sấy thương mại LG",
    category: "Thương mại",
    icon: "🏢",
    desc: "Giải pháp giặt sấy cho tiệm giặt, khách sạn, chung cư.",
  },
];

const mb = (bytes: number) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;

function CataloguePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-black tracking-tight">Thư viện Catalogue</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
        Tài liệu chính hãng LG dùng khi tư vấn tại quầy. Nhân viên có thể xem trực tiếp hoặc tải
        file PDF về máy để dùng khi không có mạng.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.asset.url}
            className="flex flex-col rounded-2xl border border-border bg-surface p-5"
          >
            <span className="text-2xl">{it.icon}</span>
            <span className="mt-2 w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              {it.category}
            </span>
            <h2 className="mt-2 text-lg font-black leading-tight">{it.name}</h2>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{it.desc}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              PDF · {mb(it.asset.size)}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={it.asset.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-border px-3 py-2 text-center text-sm font-semibold hover:bg-card"
              >
                Xem online
              </a>
              <a
                href={it.asset.url}
                download={it.asset.original_filename}
                className="rounded-xl bg-brand px-3 py-2 text-center text-sm font-bold text-brand-foreground"
              >
                Tải về máy
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
