import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  locale: "vi",
  title: "Đề tài nghiên cứu khoa học Y khoa & Sức khỏe | Khoa Y TTU",
  description:
    "Danh mục đề tài nghiên cứu đang triển khai và đã hoàn thành của Khoa Y, Trường Đại học Tân Tạo.",
  path: "/vi/nghien-cuu/de-tai-khoa-hoc",
  alternatePath: "/en/research/scientific-projects",
  image: "/assets/ttu/programs-technology-learning.jpg",
});

export default function ScientificProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
