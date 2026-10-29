import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  locale: "en",
  title: "Medical & Health Sciences Research Projects | Khoa Y TTU",
  description:
    "Explore ongoing and completed scientific research projects from the School of Medicine at Tan Tao University.",
  path: "/en/research/scientific-projects",
  alternatePath: "/vi/nghien-cuu/de-tai-khoa-hoc",
  image: "/assets/ttu/programs-technology-learning.jpg",
});

export default function ScientificProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
