import ResearchPageContent from "@/components/ResearchPageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  locale: "vi",
  title: "Nghiên cứu Y khoa & Sức khỏe | Khoa Y - Đại học Tân Tạo",
  description:
    "Khám phá định hướng nghiên cứu, đề tài khoa học và công bố quốc tế của Khoa Y, Trường Đại học Tân Tạo.",
  path: "/vi/nghien-cuu",
  alternatePath: "/en/research",
  image: "/assets/ttu/programs-technology-learning.jpg",
});

export default function ResearchPage() {
  return <ResearchPageContent locale="vi" />;
}
