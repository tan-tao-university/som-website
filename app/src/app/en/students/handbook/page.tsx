import StudentHandbookPageServer from "@/components/StudentHandbookPageServer";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

const title = "Student Handbook | TTU School of Medicine";
const description =
  "Study, project, research and support guidance for students of the School of Medicine at Tan Tao University.";

export const metadata = buildPageMetadata({
  locale: "en",
  title,
  description,
  path: "/en/students/handbook",
  alternatePath: "/vi/sinh-vien/so-tay",
  image: "/assets/ttu/students-library-reading.jpg",
});

export default function StudentHandbookPage() {
  return <StudentHandbookPageServer locale="en" />;
}
