import Link from "next/link";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { api, type StudentPortfolio } from "@/lib/api";
import type { SiteLocale } from "@/lib/program-pages";
import { absoluteUrl, jsonLd } from "@/lib/seo";

const copy = {
  vi: {
    badge: "Sinh viên & Bác sĩ trẻ Khoa Y",
    title: "Hồ sơ Học thuật & Lâm sàng Sinh viên",
    description:
      "Nơi giới thiệu hồ sơ học thuật, kinh nghiệm luân khoa lâm sàng, dự án nghiên cứu công bố quốc tế và hoạt động cộng đồng của sinh viên Khoa Y – Trường Đại học Tân Tạo.",
    empty: "Hiện chưa có hồ sơ nào được công khai. Quay lại sau nhé!",
    view: "Xem hồ sơ",
  },
  en: {
    badge: "Medical Students & Young Clinicians",
    title: "Student Academic & Clinical Portfolios",
    description:
      "A showcase of academic profiles, clinical rotation logs, international publications, and community outreach by students of Tan Tao University School of Medicine.",
    empty: "No portfolios have been published yet. Check back soon!",
    view: "View portfolio",
  },
};

function getInitials(fullName: string) {
  return fullName
    .trim()
    .split(/\s+/)
    .slice(-2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

export default async function StudentPortfolioListPageServer({
  locale,
}: {
  locale: SiteLocale;
}) {
  const t = copy[locale];
  const portfolios = await api.studentPortfolio.findAll().catch((error) => {
    console.error("Failed to pre-render student portfolios", error);
    return [] as StudentPortfolio[];
  });

  const path =
    locale === "vi" ? "/vi/sinh-vien/portfolio" : "/en/students/portfolio";
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t.title,
    url: absoluteUrl(path),
    inLanguage: locale === "vi" ? "vi-VN" : "en-US",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: portfolios.length,
      itemListElement: portfolios.map((portfolio, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: portfolio.fullName,
          url: absoluteUrl(`/${portfolio.slug}`),
          ...(portfolio.shortBio ? { description: portfolio.shortBio } : {}),
          ...(portfolio.avatarUrl ? { image: portfolio.avatarUrl } : {}),
        },
      })),
    },
  };

  return (
    <main className="bg-white text-[#171b25]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(collectionSchema)}
      />

      <section className="border-b border-[#171b25]/15">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 lg:pb-16 lg:pt-14">
          <div className="flex items-center gap-4 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#008045]">
            <span className="h-px w-12 bg-current" />
            {t.badge}
          </div>
          <h1 className="mt-7 max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-[-0.045em] text-balance sm:text-[3.2rem]">
            {t.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#626661] sm:text-lg">
            {t.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        {portfolios.length === 0 ? (
          <p className="border-t border-[#d5e2da] pt-10 text-base text-[#686c67]">
            {t.empty}
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolios.map((portfolio) => (
              <Link
                key={portfolio.id}
                href={`/${portfolio.slug}`}
                className="group flex flex-col gap-4 border border-[#e0ebe4] p-6 transition-colors hover:border-[#008045] hover:bg-[#f2f7f4]"
              >
                <div className="flex items-center gap-4">
                  {portfolio.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={portfolio.avatarUrl}
                      alt={portfolio.fullName}
                      className="h-14 w-14 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e6f2ec] text-lg font-bold text-[#008045]">
                      {getInitials(portfolio.fullName)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h2 className="truncate text-lg font-bold tracking-[-0.02em] transition-colors group-hover:text-[#008045]">
                      {portfolio.fullName}
                    </h2>
                    {(portfolio.title || portfolio.program) && (
                      <p className="mt-0.5 truncate text-sm text-[#686c67]">
                        {portfolio.title || portfolio.program}
                      </p>
                    )}
                  </div>
                </div>

                {portfolio.shortBio && (
                  <p className="line-clamp-2 text-sm leading-6 text-[#686c67]">
                    {portfolio.shortBio}
                  </p>
                )}

                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#008045]">
                  {t.view}
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
