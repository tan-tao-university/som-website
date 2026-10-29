"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Target02Icon,
  VisionIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import SectionTab from "@/components/SectionTab";

import { ArrowIcon } from "@/components/icons/ArrowIcon";

const AboutPageContent = () => {
  const t = useTranslations("about");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const programsHref =
    locale === "vi" ? `/${locale}/chuong-trinh-dao-tao` : `/${locale}/programs`;
  const educationItems = [
    {
      title: t("liberalArtsTitle"),
      description: t("liberalArtsDescription"),
    },
    {
      title: t("lifelongLearningTitle"),
      description: t("lifelongLearningDescription"),
    },
    {
      title: t("qualityAssuranceTitle"),
      description: t("qualityAssuranceDescription"),
    },
  ];
  const operatingItems = [
    {
      title: t("organizationalStructureTitle"),
      description: t("organizationText"),
    },
    {
      title: t("facultyExcellenceTitle"),
      description: t("facultyText"),
    },
    {
      title: t("technologyIntegrationTitle"),
      description: t("technologyIntegrationDescription"),
    },
    {
      title: t("transparentEnvironmentTitle"),
      description: t("transparentEnvironmentDescription"),
    },
  ];
  const values = t.raw("valuesList") as string[];
  const reveal = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="overflow-hidden bg-white text-[#171b25]">
      <section className="relative bg-white">
        <SectionTab label={t("title")} />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-16 2xl:grid-cols-[0.98fr_1.02fr] 2xl:gap-20 2xl:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center gap-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#008045]">
              <span className="h-px w-10 bg-current" />
              {t("title")}
            </div>
            <h1 className="max-w-[13ch] text-[2.35rem] font-bold leading-[1.06] tracking-[-0.04em] text-balance sm:text-[2.75rem] lg:text-[3.15rem] 2xl:text-[3.6rem]">
              {t("subtitle")}
            </h1>
            <p className="mt-6 max-w-[38rem] text-sm leading-7 text-[#60645f] sm:text-[0.95rem] 2xl:text-base 2xl:leading-8">
              {t("description")}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href={programsHref}
                className="group inline-flex min-h-12 items-center gap-4 bg-[#008045] px-6 text-sm font-semibold text-white transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#006637] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008045] active:translate-y-0"
              >
                {t("explorePrograms")}
                <span className="text-lg transition-transform group-hover:translate-x-1"><ArrowIcon direction="up-right" size={16} /></span>
              </Link>
              <a
                href="#history"
                className="group inline-flex min-h-12 items-center gap-3 text-sm font-semibold text-[#0d3b24] underline decoration-[#008045]/40 underline-offset-8 transition-colors hover:text-[#008045] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#008045]"
              >
                {t("history")}
                <span className="transition-transform group-hover:translate-x-1"><ArrowIcon direction="down" size={16} /></span>
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#171b25]/15 pt-5">
              {[t("philosophyText"), t("values"), t("vision")].map(
                (topic, index) => (
                  <span
                    key={topic}
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#70736f]"
                  >
                    <span className="mr-2 font-mono text-[#008045]">0{index + 1}</span>
                    {topic}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 0, clipPath: "inset(0 0 0 18%)" }
            }
            animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative isolate mx-auto aspect-[4/3] w-full max-w-[34rem] lg:justify-self-end 2xl:max-w-[40rem]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-y-3 translate-x-3 bg-[#008045] [clip-path:polygon(12%_0,100%_0,100%_82%,88%_100%,0_100%,0_18%)]"
            />
            <div className="absolute inset-0 overflow-hidden bg-[#008045] [clip-path:polygon(12%_0,100%_0,100%_82%,88%_100%,0_100%,0_18%)]">
              <Image
                src="/assets/som/about-som-whitecoat.jpg"
                alt={t("heroImageAlt")}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,36,21,0.04)_35%,rgba(8,36,21,0.74)_100%)]" />
              <div className="absolute inset-x-6 bottom-6 text-white sm:inset-x-8 sm:bottom-8">
                <div className="max-w-[27rem] border-l-2 border-[#10b968] pl-4 sm:pl-5">
                  <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                    {t("heroMediaEyebrow")}
                  </p>
                  <p className="mt-2 text-xl font-semibold leading-tight tracking-[-0.025em] text-balance sm:text-2xl">
                    {t("heroMediaTitle")}
                  </p>
                  <p className="mt-3 text-[0.7rem] leading-5 text-white/75 sm:text-xs">
                    {t("heroMediaDescription")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-y border-[#171b25]/15 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
            {[
              ["2013", t("founded")],
              ["ECFMG", t("facultyLevel")],
              ["03", t("programs")],
              ["18+", t("visionYear")],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`px-5 py-6 sm:px-7 lg:px-8 ${
                  index % 2 !== 0 ? "border-l border-[#171b25]/15" : ""
                } ${index > 1 ? "border-t border-[#171b25]/15 sm:border-t-0" : ""} ${
                  index > 0 ? "sm:border-l sm:border-[#171b25]/15" : ""
                }`}
              >
                <div className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                  {value}
                </div>
                <p className="mt-2 text-[0.7rem] leading-5 text-[#70716c]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="relative bg-[#f2f7f4] py-14 sm:py-16">
        <SectionTab label={t("history")} />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="max-w-sm text-[1.8rem] font-bold leading-tight tracking-[-0.035em] sm:text-[2.1rem]">
              {t("history")}
            </h2>
            <div className="mt-8 text-[4.5rem] font-bold leading-none tracking-[-0.07em] text-[#008045] sm:text-[6rem]">
              2013
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="border-t-2 border-[#008045] pt-6"
          >
            <p className="max-w-3xl text-base leading-8 text-[#343a43] sm:text-lg">
              {t("historyText")}
            </p>
            <div className="mt-8 grid gap-5 border-t border-[#d5e2da] pt-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#8b8f96]">
                  {t("whatWeDo")}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#646863]">{t("description")}</p>
              </div>
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#8b8f96]">
                  {t("faculty")}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#646863]">{t("facultyText")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-14 sm:py-16">
        <SectionTab label={t("howWeEducate")} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end"
          >
            <h2 className="max-w-xl text-[1.8rem] font-bold leading-tight tracking-[-0.035em] sm:text-[2.1rem]">
              {t("howWeDoIt")}
            </h2>
            <p className="max-w-md text-sm leading-7 text-[#686c67] lg:justify-self-end">
              {t("philosophyDetails.liberalArts.description")}
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {educationItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                variants={reveal}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex min-h-64 flex-col border border-[#d5e2da] bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#008045] hover:shadow-[8px_8px_0_#d4e9dd]"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-[0.68rem] font-semibold text-[#008045]">
                    0{index + 1}
                  </span>
                  <span className="h-px w-10 bg-[#008045]/45 transition-all duration-300 group-hover:w-16" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#686c67]">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f2f7f4] py-14 sm:py-16">
        <SectionTab label={t("mission")} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <h2 className="text-[1.8rem] font-bold leading-tight tracking-[-0.035em] sm:text-[2.1rem]">
              {t("mission")} &amp; {t("vision")}
            </h2>
            <p className="max-w-xl text-sm leading-7 text-[#686c67] lg:justify-self-end">
              {t("valuesText")}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <motion.article
              initial="hidden"
              whileInView="visible"
              variants={reveal}
              viewport={{ once: true }}
              className="border border-[#d5e2da] bg-white p-7 sm:p-9"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-[#008045]/50 text-[#008045]">
                <HugeiconsIcon icon={Target02Icon} size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mt-8 text-xl font-bold tracking-tight">{t("mission")}</h3>
              <p className="mt-4 text-sm leading-7 text-[#60645f]">{t("missionText")}</p>
            </motion.article>

            <motion.article
              initial="hidden"
              whileInView="visible"
              variants={reveal}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="relative overflow-hidden bg-[#008045] p-7 text-white [clip-path:polygon(0_0,100%_0,100%_84%,94%_100%,0_100%)] sm:p-9"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-white/45">
                <HugeiconsIcon icon={VisionIcon} size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mt-8 text-xl font-bold tracking-tight">{t("vision")}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">{t("visionText")}</p>
            </motion.article>
          </div>

          <div className="mt-5 grid border border-[#d5e2da] bg-white sm:grid-cols-2 lg:grid-cols-7">
            {values.map((value, index) => (
              <div
                key={value}
                className={`flex min-h-24 items-center gap-3 px-5 py-5 ${
                  index > 0 ? "border-t border-[#d5e2da] lg:border-l lg:border-t-0" : ""
                } ${index % 2 !== 0 ? "sm:border-l" : "sm:border-l-0"} ${
                  index > 1 ? "sm:border-t" : "sm:border-t-0"
                }`}
              >
                <span className="font-mono text-[0.62rem] text-[#008045]">0{index + 1}</span>
                <span className="text-[12px] font-semibold leading-5 text-[#4f544f]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-14 sm:py-16">
        <SectionTab label={t("howWeOperate")} />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#008045]">
              {t("ourPhilosophy")}
            </p>
            <h2 className="mt-4 text-[1.8rem] font-bold leading-tight tracking-[-0.035em] sm:text-[2.1rem]">
              {t("howWeOperate")}
            </h2>
            <div className="mt-8 border-l-2 border-[#008045] pl-5">
              <p className="text-xl font-bold tracking-tight text-[#008045]">{t("philosophyText")}</p>
              <p className="mt-3 text-sm leading-7 text-[#686c67]">
                {t("philosophyDetails.lifelongLearning.description")}
              </p>
            </div>
          </motion.div>

          <div className="border-t border-[#d5e2da]">
            {operatingItems.map((item, index) => {
              return (
                <motion.article
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  variants={reveal}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-[#d5e2da] py-6 sm:gap-5"
                >
                  <span className="pt-0.5 font-mono text-[0.62rem] text-[#008045]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#686c67]">{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dean's Biography & Academic Leadership Section */}
      <section id="dean-profile" className="relative border-t border-[#d5e2da] bg-[#f2f7f4] py-14 sm:py-16">
        <SectionTab label={locale === "vi" ? "Trưởng khoa Sáng lập" : "Founding Dean"} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={reveal}
              viewport={{ once: true }}
              className="overflow-hidden border border-[#d5e2da] bg-white shadow-[8px_8px_0_#d4e9dd]"
            >
              <div className="relative aspect-[4/4.2] w-full overflow-hidden border-b border-[#d5e2da] bg-[#e6f2ec]">
                <Image
                  src="/assets/som/faculty/thach-nguyen.jpg"
                  alt="GS.TS.BS. Thạch Nguyễn"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#008045]">
                  {locale === "vi" ? "TRƯỞNG KHOA SÁNG LẬP • PHÓ HIỆU TRƯỞNG" : "FOUNDING DEAN • VICE PROVOST"}
                </p>
                <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-[#171b25]">
                  GS.TS.BS. Thạch Nguyễn, MD, FACC, FSCAI
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#60645f]">
                  {locale === "vi"
                    ? "Hội viên Trưởng Môn Tim mạch Hoa Kỳ (FACC) • Hội viên Hội Tim mạch Can thiệp Hoa Kỳ (FSCAI)"
                    : "Fellow of the American College of Cardiology (FACC) • Fellow of the Society for Cardiovascular Angiography and Interventions (FSCAI)"}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#d5e2da] pt-4 font-mono text-[11px]">
                  <div>
                    <span className="block text-[#858984]">BOARD CERTIFIED</span>
                    <span className="font-bold text-[#008045]">ABIM 1988 • CVD 1989</span>
                  </div>
                  <div>
                    <span className="block text-[#858984]">INDIANA, USA</span>
                    <span className="font-bold text-[#008045]">St. Mary &amp; Methodist</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={reveal}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#008045]">
                {locale === "vi" ? "TIỂU SỬ & HÀNH TRÌNH HỌC THUẬT QUỐC TẾ" : "ACADEMIC BIOGRAPHY & CLINICAL LEADERSHIP"}
              </p>
              <h2 className="mt-2 text-[1.8rem] font-bold leading-tight tracking-[-0.035em] text-[#171b25] sm:text-[2.2rem]">
                {locale === "vi"
                  ? "Người đặt nền móng cho mô hình đào tạo Y khoa chuẩn Hoa Kỳ tại Đại học Tân Tạo"
                  : "Pioneering US-Standard Medical Education at Tan Tao University"}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[#4f544f]">
                <p>
                  {locale === "vi"
                    ? "GS.TS.BS. Thạch Nguyễn hiện là Giám đốc Khoa Tim mạch tại St. Mary Medical Center (Hobart, Indiana, Hoa Kỳ), Giám đốc Nghiên cứu Tim mạch tại Bệnh viện Methodist (Merrillville, Indiana, Hoa Kỳ), và Phó Giáo sư Lâm sàng Y khoa tại Đại học Indiana (Indiana University School of Medicine)."
                    : "Prof. Thach Nguyen, MD, FACC, FSCAI serves as Director of Cardiology at St. Mary Medical Center (Hobart, Indiana, USA), Director of Cardiovascular Research at Methodist Hospitals (Merrillville, Indiana, USA), and Clinical Associate Professor of Medicine at Indiana University School of Medicine."}
                </p>
                <p>
                  {locale === "vi"
                    ? "Ông là Chủ biên và tác giả chính của các giáo trình tim mạch kinh điển quốc tế do Wiley-Blackwell (Hoa Kỳ) xuất bản: 'Management of Complex Cardiovascular Problems' (ấn bản thứ 4) và 'Practical Handbook of Advanced Interventional Cardiology' (ấn bản thứ 5 – nhiều lần giữ vị trí sách bán chạy số 1 về tim mạch can thiệp tại hệ thống Barnes & Noble, Hoa Kỳ)."
                    : "He is the Editor-in-Chief and lead author of landmark international cardiology textbooks published by Wiley-Blackwell (USA), including 'Management of Complex Cardiovascular Problems' (4th Ed.) and 'Practical Handbook of Advanced Interventional Cardiology' (5th Ed., a #1 Barnes & Noble bestseller in interventional cardiology)."}
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="border border-[#d5e2da] bg-white p-5">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#008045]">
                    {locale === "vi" ? "CHỨNG CHỈ & BỔ NHIỆM HOA KỲ" : "US CERTIFICATIONS & APPOINTMENTS"}
                  </span>
                  <ul className="mt-3 space-y-2 text-xs leading-5 text-[#60645f]">
                    <li>• American Board of Internal Medicine (1988), Cardiovascular Subspecialty (1989) &amp; Interventional Cardiology (1999)</li>
                    <li>• Director of Cardiology, St. Mary Medical Center, Hobart, Indiana</li>
                    <li>• Director of Cardiology Research, Methodist Hospital, Merrillville, Indiana</li>
                  </ul>
                </div>
                <div className="border border-[#d5e2da] bg-white p-5">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#008045]">
                    {locale === "vi" ? "TẠP CHÍ QUỐC TẾ & HƯỚNG NGHIÊN CỨU" : "EDITORIAL BOARDS & RESEARCH"}
                  </span>
                  <ul className="mt-3 space-y-2 text-xs leading-5 text-[#60645f]">
                    <li>• Phó Tổng Biên tập Journal of Geriatric Cardiology; Cố vấn Biên tập Journal of Interventional Cardiology (Wiley, USA)</li>
                    <li>• Dòng chảy mạch vành động học (Dynamic Angiography), IVUS &amp; Trí tuệ nhân tạo</li>
                    <li>• Trực tiếp dìu dắt hàng trăm sinh viên Khoa Y TTU công bố quốc tế và thi đỗ USMLE</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Physician's Oath Section */}
      <section id="physician-oath" className="relative border-t border-[#d5e2da] bg-white py-14 sm:py-16">
        <SectionTab label={locale === "vi" ? "Lời thề Thầy thuốc" : "The Physician's Oath"} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={reveal}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#008045]">
                {locale === "vi"
                  ? "THE PHYSICIAN'S OATH • NGHI THỨC KHOÁC ÁO BLOUSE TRẮNG"
                  : "THE PHYSICIAN'S OATH • WHITE COAT CEREMONY"}
              </p>
              <h2 className="mt-2 text-[1.8rem] font-bold leading-tight tracking-[-0.035em] text-[#171b25] sm:text-[2.2rem]">
                {locale === "vi"
                  ? "Lời thề Thầy thuốc & Y đức Hải Thượng Lãn Ông"
                  : "The Physician's Oath & Medical Humanism"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#60645f]">
                {locale === "vi"
                  ? "Tại Khoa Y Đại học Tân Tạo, mỗi sinh viên khi bước vào giảng đường đều trải qua Nghi thức Khoác áo Blouse trắng (White Coat Ceremony) và đặt tay lên ngực trái tuyên đọc Lời thề Thầy thuốc — bản giao ước thiêng liêng kết hợp Lời thề Hippocrates hiện đại và 9 điều Y huấn cách ngôn của Đại danh y Hải Thượng Lãn Ông."
                  : "At Tan Tao University School of Medicine, every incoming student participates in the White Coat Ceremony and recites The Physician's Oath — a sacred covenant uniting the modern Hippocratic Declaration with the timeless medical ethics of Hai Thuong Lan Ong."}
              </p>

              <blockquote className="mt-6 border-l-4 border-[#008045] bg-[#f2f7f4] p-6 text-sm italic leading-7 text-[#0d3b24]">
                {locale === "vi" ? (
                  <>
                    “Tại thời điểm được tiếp nhận vào hàng ngũ Y giới, tôi trang trọng tuyên thệ sẽ dâng hiến cuộc đời mình để phụng sự nhân loại; Đặt sức khỏe và tính mạng của người bệnh lên trên hết; Giữ trọn lòng tôn kính và biết ơn đối với các bậc Thầy đã truyền dạy y thuật; Thực hành nghề nghiệp với lương tâm, phẩm giá và tinh thần học tập suốt đời; Không để tuổi tác, bệnh tật, tín ngưỡng, sắc tộc hay hoàn cảnh xã hội xen vào nghĩa vụ của người thầy thuốc đối với bệnh nhân.”
                  </>
                ) : (
                  <>
                    “At the time of being admitted as a member of the medical profession: I solemnly pledge to consecrate my life to the service of humanity; The health and well-being of my patient will be my first consideration; I will give to my teachers the respect and gratitude that is their due; I will practice my profession with conscience, dignity, and lifelong dedication to medical science.”
                  </>
                )}
              </blockquote>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={reveal}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="overflow-hidden border border-[#d5e2da] bg-[#f2f7f4] p-3 shadow-[8px_8px_0_#d4e9dd]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#008045]">
                <Image
                  src="/assets/som/physician-oath.jpg"
                  alt={locale === "vi" ? "Lời thề Thầy thuốc Khoa Y Đại học Tân Tạo" : "The Physician's Oath at TTU School of Medicine"}
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between px-3 pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#008045]">
                <span>WHITE COAT CEREMONY • TTU SCHOOL OF MEDICINE</span>
                <span>EST. 2013</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 pb-16 pt-8 sm:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden bg-[#008045] px-7 py-10 text-white [clip-path:polygon(0_0,100%_0,100%_78%,96%_100%,0_100%)] sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t("readyToStart")}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">{t("joinEcosystem")}</p>
          </div>
          <a
            href="https://tuyensinh.ttu.edu.vn/y-khoa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-fit items-center gap-4 border border-white bg-white px-6 text-sm font-semibold text-[#008045] transition-colors hover:bg-transparent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {t("contactUs")}
            <span><ArrowIcon direction="up-right" size={16} /></span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPageContent;
