"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import SectionTab from "@/components/SectionTab";
import { ArrowIcon } from "@/components/icons/ArrowIcon";
import { affiliatedHospitals, medicalLabs } from "@/lib/som-mocks";

export default function ClinicalNetwork() {
  const locale = useLocale() as "vi" | "en";
  const reduceMotion = useReducedMotion();
  const isVi = locale === "vi";

  const aboutHref = isVi ? "/vi/gioi-thieu-chung" : "/en/about-us";
  const programsHref = isVi ? "/vi/chuong-trinh-dao-tao" : "/en/programs";

  return (
    <section
      id="clinical-network"
      className="relative border-t border-[#d5e2da] bg-white py-14 sm:py-18"
    >
      <SectionTab
        label={
          isVi
            ? "Lâm sàng & Phòng Lab Y sinh"
            : "Clinical Network & Preclinical Labs"
        }
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid gap-6 border-b border-[#d5e2da] pb-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#008045]">
              <span className="h-2 w-2 bg-[#008045]" />
              {isVi
                ? "Y HỌC HOA KỲ – Y ĐỨC HẢI THƯỢNG"
                : "AMERICAN MEDICINE – HAI THUONG MEDICAL ETHICS"}
            </div>
            <h2 className="text-[1.75rem] font-bold leading-[1.12] tracking-[-0.035em] text-[#171b25] sm:text-[2.2rem]">
              {isVi
                ? "Mạng lưới Bệnh viện Thực hành Toàn cầu & Hệ thống Lab Tiền lâm sàng"
                : "Global Teaching Hospital Network & Preclinical Simulation Labs"}
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#60645f] lg:justify-self-end">
            {isVi
              ? "Sinh viên Khoa Y Đại học Tân Tạo rèn luyện trên bàn giải phẫu ảo 3D Anatomage, thực hành tiền lâm sàng chuẩn OSCE và luân khoa tại 18+ bệnh viện hạng I ở TP.HCM cùng các bệnh viện liên kết tại bang Indiana, Hoa Kỳ."
              : "TTU medical students train on 3D Anatomage virtual dissection tables, master OSCE preclinical skills, and complete clinical rotations across 18+ top-tier hospitals in Ho Chi Minh City and partner teaching hospitals in Indiana, USA."}
          </p>
        </motion.div>

        {/* Part 1: Preclinical & 3D Anatomage Laboratories */}
        <div id="medical-labs" className="mb-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#008045]">
                {isVi
                  ? "01 / HỆ THỐNG PHÒNG THÍ NGHIỆM & MÔ PHỎNG Y KHOA"
                  : "01 / PRECLINICAL & BIOMEDICAL LABORATORIES"}
              </p>
              <h3 className="mt-1 text-lg font-bold tracking-tight text-[#171b25] sm:text-xl">
                {isVi
                  ? "Không gian thực hành Y học Cơ sở & Tiền lâm sàng hiện đại"
                  : "Advanced Basic Science & Clinical Simulation Facilities"}
              </h3>
            </div>
            <Link
              href={programsHref}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#008045] underline decoration-[#008045]/40 underline-offset-4 transition-colors hover:text-[#006637]"
            >
              {isVi ? "Khám phá chương trình đào tạo" : "Explore academic programs"}
              <ArrowIcon direction="right" size={14} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {medicalLabs.map((lab, index) => (
              <motion.article
                key={lab.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col overflow-hidden border border-[#d5e2da] bg-white transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#008045] hover:shadow-[6px_6px_0_#d4e9dd]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#d5e2da] bg-[#e6f2ec]">
                  <Image
                    src={lab.image}
                    alt={isVi ? lab.nameVi : lab.nameEn}
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b24]/60 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 bg-[#008045] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                    {lab.code}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="text-[15px] font-bold leading-snug tracking-tight text-[#171b25] transition-colors group-hover:text-[#008045]">
                    {isVi ? lab.nameVi : lab.nameEn}
                  </h4>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#60645f]">
                    {isVi ? lab.descriptionVi : lab.descriptionEn}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Part 2: Affiliated Teaching Hospitals (US & Vietnam) */}
        <div
          id="affiliated-hospitals"
          className="grid gap-8 border border-[#d5e2da] bg-[#f2f7f4] p-6 sm:p-9 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10"
        >
          {/* Left Column: US Partners & ECFMG/USMLE Highlight */}
          <div className="flex flex-col justify-between border-b border-[#d5e2da] pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#008045] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                {isVi
                  ? "02 / THỰC TẬP LÂM SÀNG HOA KỲ & QUỐC TẾ"
                  : "02 / US CLINICAL ROTATIONS & GLOBAL PARTNERS"}
              </div>
              <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-[#171b25] sm:text-2xl">
                {isVi
                  ? "Đối tác Hàn lâm & Bệnh viện Thực hành tại Hoa Kỳ"
                  : "US Academic & Clinical Rotation Partners"}
              </h3>
              <p className="mt-2.5 text-xs leading-6 text-[#60645f]">
                {isVi
                  ? "Đạt chứng nhận quốc tế ECFMG từ năm 2019, Khoa Y TTU kết nối sinh viên thực tập lâm sàng thường niên tại bang Indiana (Hoa Kỳ) và chuẩn hóa chương trình theo trường Y Hoa Kỳ."
                  : "ECFMG-certified since 2019, TTU School of Medicine connects students to annual clinical clerkships in Indiana, USA and benchmarks its curriculum against leading US medical schools."}
              </p>

              <div className="mt-6 space-y-3.5">
                {affiliatedHospitals.usa.map((partner) => (
                  <div
                    key={partner.nameEn}
                    className="border-l-2 border-[#008045] bg-white p-4 shadow-[0_2px_8px_rgba(0,64,34,0.04)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-bold text-[#171b25]">
                        {isVi ? partner.nameVi : partner.nameEn}
                      </h4>
                      <span className="shrink-0 bg-[#e6f2ec] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#008045]">
                        {isVi ? partner.locationVi : partner.locationEn}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-[#60645f]">
                      {isVi ? partner.specialtyVi : partner.specialtyEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#d5e2da] pt-5">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0d3b24]">
                ECFMG • WDOMS • USMLE STEP 1 &amp; 2 CK
              </div>
              <Link
                href={`${aboutHref}#physician-oath`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#008045] hover:text-[#006637]"
              >
                {isVi ? "Xem Lời thề Thầy thuốc & Triết lý Khoa Y" : "View Physician's Oath & Philosophy"}
                <ArrowIcon direction="up-right" size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: 18+ Vietnamese Teaching Hospitals */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#008045]">
                  {isVi
                    ? "HỆ THỐNG BỆNH VIỆN THỰC HÀNH TẠI VIỆT NAM (18+ ĐƠN VỊ)"
                    : "VIETNAM AFFILIATED TEACHING HOSPITALS (18+ INSTITUTIONS)"}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-[#171b25] sm:text-2xl">
                {isVi
                  ? "Luân khoa Lâm sàng tại các Bệnh viện Tuyến cuối TP.HCM"
                  : "Clinical Clerkships at Leading Tertiary Hospitals in HCMC"}
              </h3>
              <p className="mt-2 text-xs leading-6 text-[#60645f]">
                {isVi
                  ? "Sinh viên đi buồng bệnh, trực cấp cứu và thực hành Nội, Ngoại, Sản, Nhi, Chuyên khoa dưới sự hướng dẫn trực tiếp của các Giáo sư, Bác sĩ đầu ngành."
                  : "Students participate in bedside rounds, emergency shifts, and specialty clerkships directly mentored by senior professors and attending physicians."}
              </p>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {affiliatedHospitals.vietnam.map((hospital, idx) => (
                  <div
                    key={hospital.nameVi}
                    className={`flex flex-col justify-between border bg-white p-3.5 transition-colors hover:border-[#008045] ${
                      idx === 0
                        ? "border-[#008045] bg-[#e6f2ec]/45 sm:col-span-2"
                        : "border-[#d5e2da]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13px] font-bold text-[#171b25]">
                        {isVi ? hospital.nameVi : hospital.nameEn}
                      </span>
                      {idx === 0 && (
                        <span className="bg-[#008045] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-white">
                          {isVi ? "Bệnh viện Trường" : "Campus Hospital"}
                        </span>
                      )}
                    </div>
                    <span className="mt-1 text-[11px] text-[#686c67]">
                      {isVi ? hospital.groupVi : hospital.groupEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
