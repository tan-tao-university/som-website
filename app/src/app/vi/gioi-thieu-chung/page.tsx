import AboutPageContent from "@/components/AboutPageContent";
import { buildPageMetadata } from "@/lib/seo";

const title = "Giới thiệu Khoa Y - Trường Đại học Tân Tạo";
const description =
  "Tìm hiểu Khoa Y Trường Đại học Tân Tạo: lịch sử phát triển, triết lý Y học Hoa Kỳ – Y đức Hải Thượng, tiểu sử GS.TS.BS Thạch Nguyễn, Lời thề Thầy thuốc và mạng lưới bệnh viện thực hành.";

export const metadata = buildPageMetadata({
  locale: "vi",
  title,
  description,
  path: "/vi/gioi-thieu-chung",
  alternatePath: "/en/about-us",
  image: "/assets/ttu/about-tan-tao-campus.jpg",
});

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: title,
  description,
  url: "https://medicine.ttu.edu.vn/vi/gioi-thieu-chung",
  inLanguage: "vi-VN",
  mainEntity: {
    "@type": "CollegeOrUniversity",
    name: "Khoa Y - Trường Đại học Tân Tạo",
    alternateName: "SOM - TTU",
    foundingDate: "2011-01-04",
    url: "https://medicine.ttu.edu.vn/",
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Trường Đại học Tân Tạo",
      url: "https://ttu.edu.vn/",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-272-376-9216",
      email: "medicine@ttu.edu.vn",
      contactType: "admissions and academic information",
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <AboutPageContent />
    </>
  );
}
