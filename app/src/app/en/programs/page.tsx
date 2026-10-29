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
    locale: "en",
    title: "Medical & Health Sciences Programs | TTU School of Medicine",
    description:
      "Explore USMLE-integrated Doctor of Medicine (MD), Bachelor of Nursing, and Medical Laboratory Technology programs at Tan Tao University School of Medicine.",
    path: "/en/programs",
    alternatePath: "/vi/chuong-trinh-dao-tao",
    image: programs[0] ? programImage(programs[0]) : undefined,
  });
}

export default function ProgramsPage() {
  return <ProgramsPageContent locale="en" />;
}
