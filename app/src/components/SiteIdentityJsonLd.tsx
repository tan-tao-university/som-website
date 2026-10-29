import { jsonLd, SITE_URL } from "@/lib/seo";

const siteIdentitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Khoa Y - Trường Đại học Tân Tạo (TTU SOM)",
      alternateName: [
        "SOM TTU",
        "Khoa Y - Đại học Tân Tạo",
        "School of Medicine - Tan Tao University",
        "medicine.ttu.edu.vn",
      ],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "CollegeOrUniversity",
      "@id": `${SITE_URL}/#organization`,
      name: "Khoa Y - Trường Đại học Tân Tạo",
      alternateName: "School of Medicine - Tan Tao University",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/ttu-logo.png`,
        contentUrl: `${SITE_URL}/assets/ttu-logo.png`,
        width: 1200,
        height: 1200,
      },
      email: "medicine@ttu.edu.vn",
      telephone: "+84-272-376-9216",
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: "Đại học Tân Tạo",
        alternateName: "Tan Tao University",
        url: "https://ttu.edu.vn/",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Đại lộ Đại học Tân Tạo, Tân Đức E.City",
        addressLocality: "Đức Hòa",
        addressRegion: "Long An",
        addressCountry: "VN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+84-272-376-9216",
        email: "medicine@ttu.edu.vn",
        contactType: "admissions",
        availableLanguage: ["Vietnamese", "English"],
      },
      sameAs: [
        "https://medicine.ttu.edu.vn",
        "https://www.facebook.com/tantao.medicine",
      ],
    },
  ],
};

export default function SiteIdentityJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={jsonLd(siteIdentitySchema)}
    />
  );
}
