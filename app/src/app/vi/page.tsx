import HomePageContent from "@/components/HomePageContent";
import SiteIdentityJsonLd from "@/components/SiteIdentityJsonLd";
import { buildPageMetadata } from "@/lib/seo";

const title = "Khoa Y - Trường Đại học Tân Tạo";
const description =
  "Khoa Y Trường Đại học Tân Tạo (TTU School of Medicine) đào tạo Bác sĩ Y khoa (MD chuẩn USMLE Hoa Kỳ), Cử nhân Điều dưỡng và Kỹ thuật Xét nghiệm Y học theo triết lý Y học Hoa Kỳ – Y đức Hải Thượng.";

export const metadata = buildPageMetadata({
  locale: "vi",
  title,
  description,
  path: "/vi",
  alternatePath: "/en",
  image: "/assets/som/hero-som-clinical.jpg",
});

export default function HomePage() {
  return (
    <>
      <SiteIdentityJsonLd />
      <HomePageContent revealOffset={40} />
    </>
  );
}
