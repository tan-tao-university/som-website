import AboutPageContent from "@/components/AboutPageContent";
import { buildPageMetadata } from "@/lib/seo";

const title = "School of Medicine | Tan Tao University";
const description =
  "Learn about Tan Tao University's School of Medicine (TTU SOM), including our philosophy of American Medicine – Hai Thuong Medical Ethics, Dean Prof. Thach Nguyen, the Physician's Oath, and our affiliated teaching hospitals.";

export const metadata = buildPageMetadata({
  locale: "en",
  title,
  description,
  path: "/en/about-us",
  alternatePath: "/vi/gioi-thieu-chung",
  image: "/assets/ttu/about-tan-tao-campus.jpg",
});

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: title,
  description,
  url: "https://medicine.ttu.edu.vn/en/about-us",
  inLanguage: "en-US",
  mainEntity: {
    "@type": "CollegeOrUniversity",
    name: "School of Medicine - Tan Tao University",
    alternateName: "SOM - TTU",
    foundingDate: "2011-01-04",
    url: "https://medicine.ttu.edu.vn/",
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Tan Tao University",
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
