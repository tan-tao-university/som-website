import ResearchPageContent from "@/components/ResearchPageContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  locale: "en",
  title: "Medical & Health Sciences Research | TTU School of Medicine",
  description:
    "Explore research areas, scientific projects and international publications from the School of Medicine at Tan Tao University.",
  path: "/en/research",
  alternatePath: "/vi/nghien-cuu",
  image: "/assets/ttu/programs-technology-learning.jpg",
});

export default function ResearchPage() {
  return <ResearchPageContent locale="en" />;
}
