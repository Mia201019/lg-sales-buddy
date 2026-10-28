import { createFileRoute, redirect } from "@tanstack/react-router";

// Không còn trang chủ riêng: vào thẳng trang chính (Sản phẩm).
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/san-pham", replace: true });
  },
});
