import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  locale: "en",
  title: "Scientific Publications in Medical & Health Sciences | Khoa Y TTU",
  description:
    "Browse journal articles, conference papers and research publications from the School of Medicine at Tan Tao University.",
  path: "/en/research/scientific-publications",
  alternatePath: "/vi/nghien-cuu/bai-bao-khoa-hoc",
  image: "/assets/ttu/programs-technology-learning.jpg",
});

export default function ScientificPublicationsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
