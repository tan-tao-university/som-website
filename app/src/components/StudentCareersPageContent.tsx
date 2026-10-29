import Link from "next/link";
import type { SiteLocale } from "@/lib/program-pages";
import type { CareerOpportunity } from "@/lib/api";

import { ArrowIcon } from "@/components/icons/ArrowIcon";
import CareerOpportunityList from "@/components/CareerOpportunityList";

const copyByLocale = {
  vi: {
    eyebrow: "Lâm sàng, Nội trú & Nghề nghiệp",
    title: "Vững vàng năng lực lâm sàng cho sự nghiệp Y khoa toàn cầu.",
    description:
      "Hệ thống định hướng thực tập lâm sàng tại Hoa Kỳ, luân khoa tại 18+ bệnh viện tuyến cuối TP.HCM, ôn thi USMLE/Nội trú và kết nối tuyển dụng bệnh viện dành cho sinh viên Khoa Y.",
    primaryAction: "Trao đổi với Khoa Y",
    secondaryAction: "Xem lộ trình chuẩn bị",
    statusLabel: "Cơ hội thực tập & tuyển dụng Y tế",
    openTitle: "Các chương trình Thực tập Lâm sàng, Nội trú & Tuyển dụng đang mở",
    openDescription:
      "Các chương trình thực tập lâm sàng quốc tế (Clerkship), học bổng nghiên cứu và vị trí tuyển dụng Bác sĩ, Điều dưỡng, Kỹ thuật viên Xét nghiệm dành cho sinh viên Khoa Y TTU.",
    statusTitle: "Danh sách vị trí đang được cập nhật",
    statusDescription:
      "Các đợt tuyển chọn thực tập lâm sàng tại Hoa Kỳ và thông báo tuyển dụng từ các bệnh viện đối tác sẽ được cập nhật thường xuyên tại đây.",
    employerTitle: "Dành cho Bệnh viện & Cơ sở Y tế",
    employerDescription:
      "Gửi thông tin tiếp nhận thực tập lâm sàng, tuyển dụng Bác sĩ, Điều dưỡng, Xét nghiệm hoặc hợp tác đào tạo qua email Khoa Y.",
    employerAction: "Gửi thông tin hợp tác",
    followAction: "Theo dõi thông tin từ Khoa Y",
    journeyEyebrow: "Lộ trình phát triển Bác sĩ & Cử nhân Y khoa",
    journeyTitle: "Bốn cột mốc chinh phục sự nghiệp Y tế.",
    journeyDescription:
      "Lộ trình chuẩn bị bài bản từ những năm tiền lâm sàng đến khi khoác áo Bác sĩ Nội trú và hành nghề tại bệnh viện.",
    steps: [
      {
        title: "Nền tảng Y sinh & USMLE Step 1",
        text: "Làm chủ kiến thức Y học cơ sở theo hệ cơ quan, Giải phẫu 3D Anatomage và Tiếng Anh Y khoa trong 2 năm đầu.",
      },
      {
        title: "Kỹ năng Tiền lâm sàng (OSCE)",
        text: "Thuần thục thăm khám, giao tiếp người bệnh và xử trí cấp cứu trên mô hình mô phỏng trước khi vào viện.",
      },
      {
        title: "Luân khoa 18+ Bệnh viện & Thực tập Mỹ",
        text: "Thực hành Nội – Ngoại – Sản – Nhi tại Chợ Rẫy, Bình Dân, Nhi Đồng, Từ Dũ và tham gia Clerkship tại Indiana, Hoa Kỳ.",
      },
      {
        title: "Thi USMLE Step 2 CK, Nội trú & Hành nghề",
        text: "Hoàn thiện hồ sơ nghiên cứu công bố quốc tế, thi Bác sĩ Nội trú trong nước hoặc NRMP Match tại Hoa Kỳ.",
      },
    ],
    toolkitEyebrow: "Hành trang Ứng tuyển Bệnh viện & Nội trú",
    toolkitTitle: "Chuẩn bị hồ sơ năng lực Y khoa chuẩn quốc tế.",
    toolkit: [
      {
        label: "CV Y khoa & Logbook",
        title: "Hồ sơ lâm sàng minh bạch, chuẩn ERAS",
        text: "Ghi nhận đầy đủ số giờ luân khoa, các thủ thuật đã thực hiện, điểm số USMLE/OSCE và thư giới thiệu (LoR) từ Giáo sư.",
      },
      {
        label: "Công bố Khoa học",
        title: "Năng lực Bác sĩ – Nhà nghiên cứu",
        text: "Tham gia các đề tài nghiên cứu tim mạch, y sinh phân tử và đồng tác giả bài báo ISI/Scopus để tạo lợi thế vượt trội khi xét tuyển Nội trú.",
      },
      {
        label: "Phỏng vấn Lâm sàng",
        title: "Bản lĩnh chuyên môn & Y đức Hải Thượng",
        text: "Rèn luyện kỹ năng trình bày bệnh án bằng tiếng Anh (Case Presentation), xử trí tình huống đạo đức y khoa và làm việc nhóm đa chuyên khoa.",
      },
    ],
    nextTitle: "Tiếp nối hành trình từ thế hệ Bác sĩ đi trước.",
    nextDescription:
      "Khám phá các hoạt động học thuật và câu chuyện thành công của các cựu sinh viên Khoa Y đang là Bác sĩ Nội trú tại Mỹ và Việt Nam.",
    activities: "Khám phá hoạt động Khoa Y",
    alumni: "Gặp gỡ Cựu sinh viên & Bác sĩ",
  },
  en: {
    eyebrow: "Clinical Rotations, Residency & Careers",
    title: "Clinical readiness for global healthcare careers.",
    description:
      "Structured pathways for US clinical clerkships, rotations across 18+ premier HCMC hospitals, USMLE/Residency coaching, and hospital placement for TTU School of Medicine students.",
    primaryAction: "Contact the School of Medicine",
    secondaryAction: "View clinical pathway",
    statusLabel: "Clinical & Career Opportunities",
    openTitle: "Open Clinical Clerkships, Fellowships & Healthcare Positions",
    openDescription:
      "Curated overseas clinical clerkships, research fellowships, and Physician, Nursing, and Medical Lab Technologist openings for TTU SOM students and graduates.",
    statusTitle: "The opportunity list is being updated",
    statusDescription:
      "Upcoming US clerkship application cycles and hospital recruitment notices will be published here.",
    employerTitle: "For Hospitals & Healthcare Institutions",
    employerDescription:
      "Share clinical rotation placements, residency openings, or recruitment notices with TTU School of Medicine.",
    employerAction: "Partner with TTU SOM",
    followAction: "Follow SOM updates",
    journeyEyebrow: "Medical Career Progression",
    journeyTitle: "Four milestones toward Residency and clinical practice.",
    journeyDescription:
      "A systematic progression from pre-clinical foundations to hospital clerkships and postgraduate residency matching.",
    steps: [
      {
        title: "Basic Sciences & USMLE Step 1",
        text: "Master organ-system biomedical sciences, 3D Anatomage anatomy, and Medical English during Years 1–2.",
      },
      {
        title: "Pre-Clinical OSCE Mastery",
        text: "Build confidence in physical examination, patient communication, and emergency procedures in our Simulation Center.",
      },
      {
        title: "18+ HCMC Hospitals & US Clerkships",
        text: "Complete core rotations at Cho Ray, Binh Dan, Children's & Tu Du Hospitals, plus elective clerkships in Indiana, USA.",
      },
      {
        title: "USMLE Step 2 CK & Residency Match",
        text: "Publish peer-reviewed clinical research and apply for Vietnamese Residency or the US NRMP Residency Match.",
      },
    ],
    toolkitEyebrow: "Residency & Hospital Application Toolkit",
    toolkitTitle: "Build a verifiable international medical portfolio.",
    toolkit: [
      {
        label: "Medical CV & Logbook",
        title: "ERAS-standard clinical documentation",
        text: "Document clinical rotation hours, procedural competencies, USMLE/NBME scores, and Letters of Recommendation from US and Vietnamese professors.",
      },
      {
        label: "Research Portfolio",
        title: "Physician-Scientist credentials",
        text: "Co-author ISI/Scopus publications and present abstracts at AHA, ACC, or SCAI congresses to stand out in residency applications.",
      },
      {
        label: "Clinical Interview",
        title: "Diagnostic reasoning & medical ethics",
        text: "Practice English bedside case presentations, ethical dilemma resolution, and multidisciplinary team communication.",
      },
    ],
    nextTitle: "Learn from TTU Physician Alumni.",
    nextDescription:
      "Explore student clinical societies and inspiring stories from TTU SOM graduates practicing in the US and Vietnam.",
    activities: "Explore SOM activities",
    alumni: "Meet Physician Alumni",
  },
} as const;

export default function StudentCareersPageContent({
  locale,
  opportunities,
}: {
  locale: SiteLocale;
  opportunities: CareerOpportunity[];
}) {
  const copy = copyByLocale[locale];
  const activitiesPath =
    locale === "vi" ? "/vi/sinh-vien/hoat-dong" : "/en/students/activities";
  const alumniPath =
    locale === "vi" ? "/vi/sinh-vien/cuu-sinh-vien" : "/en/students/alumni";

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#171b25]">
      <section className="border-b border-[#171b25]/15 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-14 pt-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20 lg:pb-20 lg:pt-16">
          <div>
            <div className="flex items-center gap-4 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#008045]">
              <span className="h-px w-12 bg-current" />
              {copy.eyebrow}
            </div>
            <h1 className="mt-7 max-w-[13ch] text-[2.8rem] font-bold leading-[1.03] tracking-[-0.045em] text-balance sm:text-[3.6rem] lg:text-[4rem]">
              {copy.title}
            </h1>
          </div>

          <div className="border-l-2 border-[#008045] pl-6 sm:pl-8">
            <p className="max-w-xl text-base leading-8 text-[#626661] sm:text-lg">
              {copy.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="https://www.facebook.com/tantao.medicine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center bg-[#008045] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#006637] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008045]"
              >
                {copy.primaryAction} <ArrowIcon direction="up-right" size={16} />
              </a>
              <a
                href="#lo-trinh"
                className="text-sm font-semibold text-[#0d3b24] underline decoration-[#008045]/35 underline-offset-8 transition-colors hover:text-[#008045] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008045]"
              >
                {copy.secondaryAction}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className={`border-t-2 border-[#171b25] ${
              opportunities.length === 0 ? "border-b-2" : ""
            }`}
          >
            <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
            <div className="py-8 lg:pr-14">
              <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#008045]">
                {copy.statusLabel}
              </p>
              <h2 className="mt-4 max-w-2xl text-[2rem] font-bold leading-tight tracking-[-0.04em] sm:text-[2.6rem]">
                {opportunities.length > 0 ? copy.openTitle : copy.statusTitle}
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#666a65] sm:text-base">
                {opportunities.length > 0
                  ? copy.openDescription
                  : copy.statusDescription}
              </p>
              {opportunities.length === 0 && (
                <a
                  href="https://www.facebook.com/tantao.medicine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center border border-[#008045] px-5 text-sm font-semibold text-[#008045] transition-colors hover:bg-[#008045] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008045]"
                >
                  {copy.followAction}{" "}
                  <ArrowIcon direction="up-right" size={16} />
                </a>
              )}
            </div>
            <div className="border-t border-[#d5e2da] py-8 lg:border-l lg:border-t-0 lg:pl-10">
              <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[#8b8e89]">
                {copy.employerTitle}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#666a65]">
                {copy.employerDescription}
              </p>
              <a
                href="mailto:medicine@ttu.edu.vn"
                className="mt-6 inline-flex text-sm font-semibold text-[#008045] underline decoration-[#008045]/35 underline-offset-6 hover:decoration-[#008045] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008045]"
              >
                {copy.employerAction} <ArrowIcon direction="up-right" size={16} />
              </a>
            </div>
            </div>
          {opportunities.length > 0 && (
            <CareerOpportunityList
              opportunities={opportunities}
              locale={locale}
            />
          )}
          </div>
        </div>
      </section>

      <section id="lo-trinh" className="scroll-mt-24 border-y border-[#171b25]/15 bg-[#f2f7f4] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
            <div>
              <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-[#008045]">
                {copy.journeyEyebrow}
              </p>
              <h2 className="mt-4 max-w-[14ch] text-[2.25rem] font-bold leading-[1.05] tracking-[-0.045em] sm:text-[3rem]">
                {copy.journeyTitle}
              </h2>
            </div>
            <p className="max-w-xl border-l-2 border-[#008045] pl-5 text-sm leading-7 text-[#686c67]">
              {copy.journeyDescription}
            </p>
          </div>

          <div className="mt-12 grid border-t-2 border-[#171b25] md:grid-cols-2 lg:grid-cols-4">
            {copy.steps.map((step, index) => (
              <article
                key={step.title}
                className="border-b border-[#d5e2da] py-7 md:px-6 md:first:pl-0 lg:border-r lg:last:border-r-0 lg:last:pr-0"
              >
                <span className="font-mono text-[0.62rem] font-semibold text-[#008045]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-bold leading-snug tracking-[-0.025em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#666a65]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.17em] text-[#008045]">
            {copy.toolkitEyebrow}
          </p>
          <h2 className="mt-4 max-w-3xl text-[2.25rem] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[3rem]">
            {copy.toolkitTitle}
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {copy.toolkit.map((item) => (
              <article key={item.label} className="border-t-2 border-[#171b25] py-6">
                <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-[#008045]">
                  {item.label}
                </p>
                <h3 className="mt-5 text-xl font-bold leading-snug tracking-[-0.025em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#666a65]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#171b25]/15 bg-[#f2f7f4] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-[2rem] font-bold leading-tight tracking-[-0.04em] sm:text-[2.5rem]">
              {copy.nextTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#666a65]">
              {copy.nextDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={activitiesPath}
              className="inline-flex min-h-12 items-center border border-[#008045] px-5 text-sm font-semibold text-[#008045] transition-colors hover:bg-[#008045] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008045]"
            >
              {copy.activities} <ArrowIcon direction="up-right" size={16} />
            </Link>
            <Link
              href={alumniPath}
              className="inline-flex min-h-12 items-center bg-[#008045] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#006637] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008045]"
            >
              {copy.alumni} <ArrowIcon direction="up-right" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
