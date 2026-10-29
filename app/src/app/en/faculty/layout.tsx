import { api } from "@/lib/api";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const faculty = await api.faculty.findAll().catch(() => []);
  const featuredSummary = faculty.find(
    (item) => item.isActive !== false && item.avatarUrl,
  );
  const featured = featuredSummary
    ? await api.faculty
        .findBySlug(featuredSummary.slug)
        .catch(() => featuredSummary)
    : undefined;

  return buildPageMetadata({
    locale: "en",
    title: "Medical & Health Sciences Faculty | TTU School of Medicine",
    description:
      "Meet the faculty and researchers of the School of Medicine at Tan Tao University and explore their academic expertise.",
    path: "/en/faculty",
    image: featured?.avatarUrl,
  });
}

export default function FacultyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
