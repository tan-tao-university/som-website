import HomePageContent from "@/components/HomePageContent";
import { buildPageMetadata } from "@/lib/seo";

const title = "School of Medicine - Tan Tao University (TTU SOM)";
const description =
  "Tan Tao University School of Medicine offers USMLE-integrated Doctor of Medicine (MD), Bachelor of Nursing, and Medical Laboratory Technology programs guided by American Medicine – Hai Thuong Medical Ethics.";

export const metadata = buildPageMetadata({
  locale: "en",
  title,
  description,
  path: "/en",
  alternatePath: "/vi",
  image: "/assets/som/hero-som-clinical.jpg",
});

export default function HomePage() {
  return <HomePageContent revealOffset={50} />;
}
