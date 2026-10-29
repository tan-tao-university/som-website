import ProgramsPageContent from "@/components/ProgramsPageContent";
import { api } from "@/lib/api";
import { programImage } from "@/lib/program-pages";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const programs = await api.programs
    .findAll({ status: "active" })
    .catch(() => []);

  return buildPageMetadata({
    locale: "vi",
    title: "Chương trình đào tạo Y khoa & Sức khỏe | Khoa Y TTU",
    description:
      "Khám phá chương trình Bác sĩ Y khoa (MD chuẩn USMLE), Cử nhân Điều dưỡng và Cử nhân Kỹ thuật Xét nghiệm Y học tại Khoa Y Trường Đại học Tân Tạo.",
    path: "/vi/chuong-trinh-dao-tao",
    alternatePath: "/en/programs",
    image: programs[0] ? programImage(programs[0]) : undefined,
  });
}

export default function ProgramsPage() {
  return <ProgramsPageContent locale="vi" />;
}
