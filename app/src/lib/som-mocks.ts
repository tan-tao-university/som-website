import type {
  ResearchLanguage as ResearchLanguageEnum,
  ResearchStatus as ResearchStatusEnum,
  ResearchType as ResearchTypeEnum,
  Achievement,
  Alumni,
  AlumniSection,
  CareerOpportunity,
  Course,
  Curriculum,
  Event,
  Faculty,
  Handbook,
  News,
  Program,
  Research,
  Section,
  StudentPortfolio,
} from "@/lib/api";

const ResearchType = {
  PROJECT: "PROJECT" as ResearchTypeEnum,
  PUBLICATION: "PUBLICATION" as ResearchTypeEnum,
};

const ResearchStatus = {
  ONGOING: "ONGOING" as ResearchStatusEnum,
  COMPLETED: "COMPLETED" as ResearchStatusEnum,
};

const ResearchLanguage = {
  VI: "vi" as ResearchLanguageEnum,
  EN: "en" as ResearchLanguageEnum,
};

const now = "2026-09-01T00:00:00.000Z";

const buildSections = (
  curriculumId: string,
  items: Array<[Section["sectionKey"], string, string]>,
): Section[] =>
  items.map(([sectionKey, title, content], index) => ({
    sectionId: `${curriculumId}-section-${index + 1}`,
    curriculumId,
    sectionKey,
    title,
    content,
    displayOrder: index + 1,
    isVisible: true,
    createdAt: now,
    updatedAt: now,
  }));

export const mockPrograms: Program[] = [
  {
    programId: "som-program-md",
    contentId: "som-content-md",
    code: "7720101",
    majorCode: "7720101",
    nameVi: "Y khoa (Bác sĩ Đa khoa)",
    nameEn: "Doctor of Medicine (General Medicine)",
    level: "undergraduate",
    banner: "/assets/som/program-medicine-md.jpg",
    status: "active",
    slugVi: "y-khoa",
    slugEn: "general-medicine",
    descriptionVi:
      "Chương trình đào tạo Bác sĩ Y đa khoa 6 năm theo chuẩn Bộ GD&ĐT và Bộ Y tế, tích hợp chương trình Y khoa Đại học Illinois (Chicago, Hoa Kỳ), giảng dạy song ngữ Anh – Việt và chuẩn bị toàn diện cho kỳ thi chứng chỉ hành nghề y khoa Hoa Kỳ USMLE (Step 1 & Step 2 CK).",
    descriptionEn:
      "A 6-year Doctor of Medicine (MD) program integrating the Ministry of Health framework with the University of Illinois at Chicago (UIC) medical curriculum, bilingual instruction, US clinical rotations, and comprehensive USMLE Step 1 & Step 2 CK preparation.",
    content: {},
    createdAt: now,
    updatedAt: now,
  },
  {
    programId: "som-program-nursing",
    contentId: "som-content-nursing",
    code: "7720301",
    majorCode: "7720301",
    nameVi: "Điều dưỡng",
    nameEn: "Bachelor of Nursing",
    level: "undergraduate",
    banner: "/assets/som/program-nursing.jpg",
    status: "active",
    slugVi: "dieu-duong",
    slugEn: "nursing",
    descriptionVi:
      "Chương trình Cử nhân Điều dưỡng 4 năm trang bị năng lực chăm sóc người bệnh toàn diện, thực hành kỹ năng tiền lâm sàng chuẩn OSCE và luân khoa lâm sàng tại hệ thống bệnh viện hạng I tại TP.HCM cùng Bệnh viện Đại học Y Tân Tạo.",
    descriptionEn:
      "A 4-year Bachelor of Nursing program cultivating evidence-based patient care, OSCE preclinical simulation skills, and intensive clinical rotations across top-tier teaching hospitals in Ho Chi Minh City and Tan Tao University Hospital.",
    content: {},
    createdAt: now,
    updatedAt: now,
  },
  {
    programId: "som-program-mlt",
    contentId: "som-content-mlt",
    code: "7720601",
    majorCode: "7720601",
    nameVi: "Kỹ thuật Xét nghiệm Y học",
    nameEn: "Medical Laboratory Technology",
    level: "undergraduate",
    banner: "/assets/som/program-medical-lab.jpg",
    status: "active",
    slugVi: "ky-thuat-xet-nghiem-y-hoc",
    slugEn: "medical-laboratory-technology",
    descriptionVi:
      "Chương trình Cử nhân Kỹ thuật Xét nghiệm Y học 4 năm đào tạo chuyên sâu về huyết học, hóa sinh lâm sàng, vi sinh – ký sinh trùng, chẩn đoán phân tử và quản lý chất lượng phòng xét nghiệm theo tiêu chuẩn quốc tế ISO 15189.",
    descriptionEn:
      "A 4-year Bachelor of Medical Laboratory Technology program specializing in hematology, clinical biochemistry, medical microbiology, molecular diagnostics, and ISO 15189 laboratory quality assurance.",
    content: {},
    createdAt: now,
    updatedAt: now,
  },
];

export const mockCurriculums: Curriculum[] = [
  {
    curriculumId: "som-curriculum-md-2026",
    programId: "som-program-md",
    year: 2026,
    nameVi: "Chương trình Đào tạo Bác sĩ Y khoa Chuẩn Hoa Kỳ – USMLE (2026)",
    nameEn: "MD Curriculum Integrated with USMLE Pathway (2026)",
    slugVi: "chuong-trinh-y-khoa-2026",
    slugEn: "md-curriculum-2026",
    descriptionVi:
      "Lộ trình 6 năm (12 học kỳ, 209 tín chỉ) kết hợp giáo dục khai phóng, y học cơ sở tích hợp hệ cơ quan (bàn giải phẫu 3D Anatomage), chuẩn bị thi USMLE Step 1 & Step 2 CK và thực tập lâm sàng tại hệ thống bệnh viện Hoa Kỳ & Việt Nam.",
    descriptionEn:
      "A 6-year, 12-semester (209-credit) curriculum combining liberal arts, organ-system basic medical sciences with 3D Anatomage visualization, USMLE Step 1 & 2 CK preparation, and clinical clerkships in the US and Vietnam.",
    banner: "/assets/som/program-medicine-md.jpg",
    isCurrent: true,
    durationYears: 6,
    totalSemesters: 12,
    totalCredits: 209,
    educationType: "Chính quy tập trung",
    language: "Song ngữ Anh – Việt",
    degreeAwarded: "Bác sĩ Y khoa (Medical Doctor - MD)",
    sections: buildSections("som-curriculum-md-2026", [
      [
        "overview",
        "Tổng quan chương trình",
        "<p>Chương trình Bác sĩ Y khoa tại Khoa Y Đại học Tân Tạo được thiết kế theo triết lý <strong>“Y học Hoa Kỳ – Y đức Hải Thượng”</strong>. Đạt chứng nhận quốc tế <strong>ECFMG</strong> từ năm 2019, chương trình giúp sinh viên vừa nắm vững chuẩn năng lực Bác sĩ Đa khoa Việt Nam vừa đủ điều kiện dự thi chứng chỉ hành nghề Y khoa Hoa Kỳ <strong>USMLE</strong>.</p>",
      ],
      [
        "objectives",
        "Mục tiêu đào tạo",
        "<p>Đào tạo thế hệ bác sĩ có y đức trong sáng, tư duy lâm sàng sắc bén dựa trên y học thực chứng (Evidence-Based Medicine), thông thạo tiếng Anh chuyên ngành y khoa và có năng lực nghiên cứu công bố quốc tế.</p>",
      ],
      [
        "learning_outcomes",
        "Chuẩn đầu ra & Năng lực lâm sàng",
        "<ul><li>Chẩn đoán, xử trí cấp cứu và điều trị toàn diện các bệnh lý Nội, Ngoại, Sản, Nhi và Chuyên khoa theo phác đồ chuẩn quốc tế.</li><li>Đạt chuẩn kiến thức Y học cơ sở và Lâm sàng tương đương kỳ thi <strong>USMLE Step 1 &amp; Step 2 CK</strong>.</li><li>Giao tiếp y khoa bằng tiếng Anh lưu loát, đủ năng lực tham gia thực tập lâm sàng (Clinical Electives) tại Hoa Kỳ, Hàn Quốc, Singapore.</li><li>Thực hiện độc lập và đồng tác giả các đề tài nghiên cứu, bài báo khoa học trên tạp chí quốc tế ISI/Scopus.</li></ul>",
      ],
      [
        "curriculum_structure",
        "Cấu trúc chương trình 6 năm",
        "<ul><li><strong>Năm 1 – 2 (Khối Đại cương &amp; Y học Cơ sở):</strong> Giáo dục khai phóng, Tiếng Anh Y khoa chuyên sâu, Giải phẫu học (Nhà đại thể &amp; Bàn giải phẫu 3D Anatomage), Sinh lý, Hóa sinh, Mô phôi, Vi sinh – Ký sinh trùng.</li><li><strong>Năm 3 (Tiền lâm sàng &amp; Ôn luyện USMLE Step 1):</strong> Bệnh học theo hệ cơ quan, Dược lý lâm sàng, Kỹ năng Tiền lâm sàng (OSCE), Triệu chứng học Nội – Ngoại và hoàn tất nền tảng USMLE Step 1.</li><li><strong>Năm 4 – 5 (Lâm sàng Chuyên sâu &amp; Thực tập Quốc tế):</strong> Luân khoa Nội, Ngoại, Sản, Nhi, Truyền nhiễm, Cấp cứu Hồi sức tại các bệnh viện hạng I TP.HCM (BV Nhân Dân 115, BV Thống Nhất, BV Nhi Đồng 2, BV Bình Dân, BV Hùng Vương...) và đợt thực tập lâm sàng tại Hoa Kỳ (Indiana University, St. Mary Medical Center, Methodist Hospital).</li><li><strong>Năm 6 (Thực tập Tốt nghiệp &amp; Khóa luận):</strong> Trực lâm sàng toàn thời gian như bác sĩ nội trú dự bị, thi tốt nghiệp lý thuyết – lâm sàng hoặc bảo vệ khóa luận tốt nghiệp bằng tiếng Anh.</li></ul>",
      ],
      [
        "career_opportunities",
        "Cơ hội nghề nghiệp & Sau đại học",
        "<p>Bác sĩ tốt nghiệp Khoa Y TTU làm việc tại các bệnh viện đa khoa, chuyên khoa tuyến trung ương và quốc tế; thi tuyển Bác sĩ Nội trú (Residency) tại Hoa Kỳ thông qua lộ trình ECFMG/USMLE; hoặc tiếp tục học Thạc sĩ, Tiến sĩ Y học tại Hoa Kỳ, châu Âu và các trường đại học y khoa hàng đầu.</p>",
      ],
    ]),
    createdAt: now,
    updatedAt: now,
  },
  {
    curriculumId: "som-curriculum-nursing-2026",
    programId: "som-program-nursing",
    year: 2026,
    nameVi: "Chương trình Đào tạo Cử nhân Điều dưỡng Chuẩn Quốc tế (2026)",
    nameEn: "Bachelor of Nursing Curriculum (2026)",
    slugVi: "chuong-trinh-dieu-duong-2026",
    slugEn: "nursing-curriculum-2026",
    descriptionVi:
      "Chương trình 4 năm (8 học kỳ, 135 tín chỉ) đào tạo cử nhân điều dưỡng chuyên nghiệp, kết hợp thực hành mô phỏng tiền lâm sàng và thực tập tại các bệnh viện tuyến đầu.",
    descriptionEn:
      "A 4-year, 8-semester (135-credit) curriculum training professional nurses through clinical simulation and hospital rotations.",
    banner: "/assets/som/program-nursing.jpg",
    isCurrent: true,
    durationYears: 4,
    totalSemesters: 8,
    totalCredits: 135,
    educationType: "Chính quy tập trung",
    language: "Song ngữ Anh – Việt",
    degreeAwarded: "Cử nhân Điều dưỡng (Bachelor of Nursing)",
    sections: buildSections("som-curriculum-nursing-2026", [
      [
        "overview",
        "Tổng quan chương trình",
        "<p>Chương trình Cử nhân Điều dưỡng của Khoa Y TTU chú trọng kỹ năng thực hành chăm sóc lấy người bệnh làm trung tâm, giao tiếp y tế nhân văn và năng lực làm việc trong môi trường bệnh viện quốc tế.</p>",
      ],
      [
        "learning_outcomes",
        "Chuẩn đầu ra",
        "<ul><li>Thực hiện thành thạo quy trình điều dưỡng cơ bản và điều dưỡng chuyên khoa (Nội, Ngoại, Sản, Nhi, Hồi sức cấp cứu, Lão khoa).</li><li>Vận hành trang thiết bị theo dõi bệnh nhân hiện đại và tuân thủ nghiêm ngặt kiểm soát nhiễm khuẩn bệnh viện.</li><li>Sử dụng tiếng Anh giao tiếp và chuyên ngành điều dưỡng, sẵn sàng cho các chương trình trao đổi và làm việc quốc tế.</li></ul>",
      ],
      [
        "career_opportunities",
        "Cơ hội nghề nghiệp",
        "<p>Cử nhân Điều dưỡng làm việc tại Bệnh viện Đại học Y Tân Tạo, các bệnh viện đa khoa hạng I tại TP.HCM, hệ thống bệnh viện quốc tế hoặc tham gia các chương trình điều dưỡng quốc tế tại Hoa Kỳ, Đức, Nhật Bản, Úc.</p>",
      ],
    ]),
    createdAt: now,
    updatedAt: now,
  },
  {
    curriculumId: "som-curriculum-mlt-2026",
    programId: "som-program-mlt",
    year: 2026,
    nameVi: "Chương trình Đào tạo Cử nhân Kỹ thuật Xét nghiệm Y học (2026)",
    nameEn: "Medical Laboratory Technology Curriculum (2026)",
    slugVi: "chuong-trinh-xet-nghiem-y-hoc-2026",
    slugEn: "medical-laboratory-curriculum-2026",
    descriptionVi:
      "Chương trình 4 năm (8 học kỳ, 135 tín chỉ) đào tạo chuyên sâu kỹ thuật xét nghiệm huyết học, hóa sinh, vi sinh – ký sinh trùng và sinh học phân tử ứng dụng trong chẩn đoán y khoa.",
    descriptionEn:
      "A 4-year, 8-semester (135-credit) curriculum focused on hematology, clinical biochemistry, microbiology, and molecular diagnostics.",
    banner: "/assets/som/program-medical-lab.jpg",
    isCurrent: true,
    durationYears: 4,
    totalSemesters: 8,
    totalCredits: 135,
    educationType: "Chính quy tập trung",
    language: "Song ngữ Anh – Việt",
    degreeAwarded: "Cử nhân Kỹ thuật Xét nghiệm Y học",
    sections: buildSections("som-curriculum-mlt-2026", [
      [
        "overview",
        "Tổng quan chương trình",
        "<p>Chương trình kết hợp nền tảng y sinh học hiện đại với thực hành trực tiếp trên hệ thống máy xét nghiệm tự động tại phòng thí nghiệm Khoa Y và Trung tâm Xét nghiệm Bệnh viện Đại học Y Tân Tạo.</p>",
      ],
      [
        "learning_outcomes",
        "Chuẩn đầu ra",
        "<ul><li>Thực hiện chính xác các kỹ thuật xét nghiệm Huyết học – Truyền máu, Hóa sinh lâm sàng, Vi sinh – Ký sinh trùng và Sinh học phân tử (PCR, giải trình tự).</li><li>Thiết lập và vận hành hệ thống quản lý chất lượng phòng xét nghiệm (Nội kiểm, Ngoại kiểm, An toàn sinh học).</li><li>Phối hợp hiệu quả với bác sĩ lâm sàng trong biện luận kết quả xét nghiệm phục vụ chẩn đoán và điều trị đích.</li></ul>",
      ],
      [
        "career_opportunities",
        "Cơ hội nghề nghiệp",
        "<p>Chuyên viên xét nghiệm y học, quản lý chất lượng phòng lab tại các bệnh viện tuyến trung ương, viện Pasteur, trung tâm kiểm soát bệnh tật (CDC), trung tâm chẩn đoán y khoa công nghệ cao và viện nghiên cứu y sinh.</p>",
      ],
    ]),
    createdAt: now,
    updatedAt: now,
  },
];

export const mockCourses: Course[] = [
  {
    courseId: "som-course-ant2014",
    code: "ANT2014",
    nameVi: "Giải phẫu Y khoa I (Anatomy I & 3D Anatomage)",
    nameEn: "Medical Anatomy I & 3D Anatomage",
    credits: 4,
    slugVi: "giai-phau-y-khoa-1",
    slugEn: "medical-anatomy-1",
    lectureHours: 30,
    practiceHours: 30,
  },
  {
    courseId: "som-course-ant2025",
    code: "ANT2025",
    nameVi: "Giải phẫu Y khoa II (Thực hành Đại thể)",
    nameEn: "Medical Anatomy II (Cadaver Dissection Lab)",
    credits: 5,
    slugVi: "giai-phau-y-khoa-2",
    slugEn: "medical-anatomy-2",
    lectureHours: 45,
    practiceHours: 30,
  },
  {
    courseId: "som-course-hem2014",
    code: "HEM2014",
    nameVi: "Mô – Phôi học Y khoa",
    nameEn: "Histology and Medical Embryology",
    credits: 4,
    slugVi: "mo-phoi-hoc-y-khoa",
    slugEn: "histology-and-embryology",
    lectureHours: 30,
    practiceHours: 30,
  },
  {
    courseId: "som-course-pho2013",
    code: "PHO2013",
    nameVi: "Sinh lý học Y khoa I",
    nameEn: "Medical Physiology I",
    credits: 3,
    slugVi: "sinh-ly-hoc-y-khoa-1",
    slugEn: "medical-physiology-1",
    lectureHours: 30,
    practiceHours: 15,
  },
  {
    courseId: "som-course-pho2024",
    code: "PHO2024",
    nameVi: "Sinh lý học Y khoa II (Tim mạch & Hô hấp)",
    nameEn: "Medical Physiology II (Cardiopulmonary)",
    credits: 4,
    slugVi: "sinh-ly-hoc-y-khoa-2",
    slugEn: "medical-physiology-2",
    lectureHours: 45,
    practiceHours: 15,
  },
  {
    courseId: "som-course-bic2015",
    code: "BIC2015",
    nameVi: "Hóa sinh Y học & Sinh học Phân tử",
    nameEn: "Medical Biochemistry & Molecular Biology",
    credits: 5,
    slugVi: "hoa-sinh-y-hoc",
    slugEn: "medical-biochemistry",
    lectureHours: 45,
    practiceHours: 30,
  },
  {
    courseId: "som-course-mbi2014",
    code: "MBI2014",
    nameVi: "Vi sinh Y học I (Vi khuẩn học Lâm sàng)",
    nameEn: "Medical Microbiology I (Clinical Bacteriology)",
    credits: 4,
    slugVi: "vi-sinh-y-hoc-1",
    slugEn: "medical-microbiology-1",
    lectureHours: 30,
    practiceHours: 30,
  },
  {
    courseId: "som-course-par2014",
    code: "PAR2014",
    nameVi: "Ký sinh trùng – Vi nấm Y học",
    nameEn: "Medical Parasitology & Mycology",
    credits: 4,
    slugVi: "ky-sinh-trung-y-hoc",
    slugEn: "medical-parasitology",
    lectureHours: 30,
    practiceHours: 30,
  },
  {
    courseId: "som-course-puh1023",
    code: "PUH1023",
    nameVi: "Tâm lý & Đạo đức Y học (Y đức Hải Thượng)",
    nameEn: "Medical Psychology & Bioethics",
    credits: 3,
    slugVi: "tam-ly-va-dao-duc-y-hoc",
    slugEn: "medical-psychology-and-ethics",
    lectureHours: 30,
    practiceHours: 15,
  },
  {
    courseId: "som-course-mse0064",
    code: "MSE0064",
    nameVi: "Tiếng Anh Chuyên ngành Y khoa & Chuẩn bị USMLE",
    nameEn: "Medical English & USMLE Clinical Foundations",
    credits: 4,
    slugVi: "tieng-anh-chuyen-nganh-y-khoa",
    slugEn: "medical-english-usmle",
    lectureHours: 45,
    practiceHours: 15,
  },
];

export const mockFaculty: Faculty[] = [
  {
    id: "som-faculty-thach-nguyen",
    slug: "thach-nguyen",
    fullName: "Thạch Nguyễn",
    academicTitle: "GS.TS.BS.",
    position: "Phó Hiệu trưởng • Trưởng Khoa Y Sáng lập",
    department: "Bộ môn Nội Tim mạch & Tim mạch Can thiệp",
    avatarUrl: "/assets/som/faculty/thach-nguyen.jpg",
    quote:
      "Sứ mệnh của Khoa Y Đại học Tân Tạo là đào tạo thế hệ bác sĩ theo chuẩn Y học Hoa Kỳ thấm nhuần Y đức Hải Thượng Lãn Ông.",
    bioShort:
      "Hội viên Trưởng Môn Tim mạch Hoa Kỳ (FACC) và Hội Tim mạch Can thiệp Hoa Kỳ (FSCAI); Giám đốc Tim mạch tại St. Mary Medical Center & Giám đốc Nghiên cứu Tim mạch tại Methodist Hospital (Indiana, Hoa Kỳ); Phó Giáo sư Y khoa Đại học Indiana; Chủ biên cuốn sách 'Practical Handbook of Advanced Interventional Cardiology' (Wiley-Blackwell) bán chạy số 1 tại hệ thống Barnes & Noble.",
    isActive: true,
    academicTimeline: [
      {
        id: "deg-tn-1",
        facultyId: "som-faculty-thach-nguyen",
        degree: "MD, FACC, FSCAI",
        field: "Nội khoa & Tim mạch Can thiệp (Board Certified)",
        institution: "American Board of Internal Medicine & Cardiovascular Disease, Hoa Kỳ",
        endYear: 1989,
      },
    ],
    contacts: [
      {
        id: "contact-tn-1",
        facultyId: "som-faculty-thach-nguyen",
        type: "email",
        value: "thach.nguyen@ttu.edu.vn",
      },
    ],
    researchAreas: [
      {
        id: "area-tn-1",
        facultyId: "som-faculty-thach-nguyen",
        title: "Tim mạch can thiệp tiên tiến & Dòng chảy mạch vành động học",
      },
      {
        id: "area-tn-2",
        facultyId: "som-faculty-thach-nguyen",
        title: "Trí tuệ nhân tạo ứng dụng trong chẩn đoán mảng xơ vữa mạch vành (IVUS/Angiography)",
      },
      {
        id: "area-tn-3",
        facultyId: "som-faculty-thach-nguyen",
        title: "Giáo dục Y khoa chuẩn USMLE Hoa Kỳ",
      },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-faculty-le-hoang-ninh",
    slug: "le-hoang-ninh",
    fullName: "Lê Hoàng Ninh",
    academicTitle: "NGND GS.TS.BS.",
    position: "Giảng viên Cao cấp • Trưởng Bộ môn Y tế Công cộng & Y học Gia đình",
    department: "Bộ môn Y tế Công cộng & Y học Gia đình",
    avatarUrl: "/assets/som/faculty/le-hoang-ninh.jpg",
    quote:
      "Người thầy thuốc giỏi không chỉ chữa bệnh tại giường bệnh mà còn phải hiểu rõ sức khỏe cộng đồng và dự phòng bệnh tật từ gốc.",
    bioShort:
      "Nhà giáo Nhân dân, Giáo sư, Tiến sĩ, Bác sĩ; Nguyên Viện trưởng Viện Y tế Công cộng TP.HCM. Chuyên gia đầu ngành về Dịch tễ học, Quản lý Y tế và Y học Gia đình tại Việt Nam.",
    isActive: true,
    contacts: [
      {
        id: "contact-lhn-1",
        facultyId: "som-faculty-le-hoang-ninh",
        type: "email",
        value: "lehoangninh@gmail.com",
      },
    ],
    researchAreas: [
      {
        id: "area-lhn-1",
        facultyId: "som-faculty-le-hoang-ninh",
        title: "Dịch tễ học bệnh truyền nhiễm và bệnh không lây nhiễm",
      },
      {
        id: "area-lhn-2",
        facultyId: "som-faculty-le-hoang-ninh",
        title: "Hệ thống Y tế công cộng và Y học gia đình",
      },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-faculty-pham-nguyen-vinh",
    slug: "pham-nguyen-vinh",
    fullName: "Phạm Nguyễn Vinh",
    academicTitle: "PGS.TS.BS.",
    position: "Giảng viên Cao cấp Bộ môn Nội Tim mạch",
    department: "Bộ môn Nội khoa – Tim mạch",
    avatarUrl: "/assets/som/faculty/pham-nguyen-vinh.jpg",
    quote:
      "Truyền dạy y thuật luôn phải song hành với truyền lửa đam mê học tập suốt đời và lòng trắc ẩn với từng bệnh nhân.",
    bioShort:
      "Chuyên gia hàng đầu về Nội Tim mạch và Siêu âm tim tại Việt Nam; Phó Chủ tịch Hội Tim mạch học Việt Nam; Giám đốc Trung tâm Tim mạch với hàng chục năm kinh nghiệm đào tạo bác sĩ nội trú và chuyên khoa sâu.",
    isActive: true,
    researchAreas: [
      {
        id: "area-pnv-1",
        facultyId: "som-faculty-pham-nguyen-vinh",
        title: "Siêu âm tim lâm sàng và Bệnh lý van tim, suy tim",
      },
      {
        id: "area-pnv-2",
        facultyId: "som-faculty-pham-nguyen-vinh",
        title: "Tim mạch học thực chứng và Nội khoa tổng quát",
      },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-faculty-tran-thi-hong",
    slug: "tran-thi-hong",
    fullName: "Trần Thị Hồng",
    academicTitle: "PGS.TS.BS.",
    position: "Chủ nhiệm Bộ môn Ký sinh – Vi nấm",
    department: "Bộ môn Ký sinh trùng & Vi sinh Y học",
    avatarUrl: "/assets/som/faculty/tran-thi-hong.jpg",
    quote:
      "Nền tảng y học cơ sở vững chắc là chiếc chìa khóa giúp người bác sĩ lý giải tường tận cơ chế bệnh sinh trên lâm sàng.",
    bioShort:
      "Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên ngành Ký sinh trùng – Vi nấm Y học; Nguyên Trưởng Bộ môn Ký sinh trùng Trường Đại học Y Khoa Phạm Ngọc Thạch; Chủ nhiệm Bộ môn Ký sinh – Vi nấm Khoa Y Đại học Tân Tạo.",
    isActive: true,
    researchAreas: [
      {
        id: "area-tth-1",
        facultyId: "som-faculty-tran-thi-hong",
        title: "Bệnh ký sinh trùng và vi nấm y học nhiệt đới",
      },
      {
        id: "area-tth-2",
        facultyId: "som-faculty-tran-thi-hong",
        title: "Chẩn đoán xét nghiệm vi sinh – ký sinh trùng lâm sàng",
      },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-faculty-le-quang-nghia",
    slug: "le-quang-nghia",
    fullName: "Lê Quang Nghĩa",
    academicTitle: "GS.TS.BS.",
    position: "Trưởng Bộ môn Ngoại chung",
    department: "Bộ môn Ngoại khoa",
    avatarUrl: "/assets/som/faculty/le-quang-nghia.jpg",
    quote:
      "Ngoại khoa đòi hỏi sự chuẩn xác tuyệt đối của đôi bàn tay, sự quyết đoán của khối óc và trách nhiệm cao cả trước sinh mệnh người bệnh.",
    bioShort:
      "Giáo sư, Tiến sĩ, Bác sĩ chuyên ngành Phẫu thuật Tiêu hóa – Gan mật; Nguyên Phó Giám đốc Bệnh viện Bình Dân; Trưởng Bộ môn Ngoại chung Khoa Y Đại học Tân Tạo.",
    isActive: true,
    contacts: [
      {
        id: "contact-lqn-1",
        facultyId: "som-faculty-le-quang-nghia",
        type: "email",
        value: "prof.lequangnghia@gmail.com",
      },
    ],
    researchAreas: [
      {
        id: "area-lqn-1",
        facultyId: "som-faculty-le-quang-nghia",
        title: "Phẫu thuật tiêu hóa, gan mật tụy và ung thư đường tiêu hóa",
      },
      {
        id: "area-lqn-2",
        facultyId: "som-faculty-le-quang-nghia",
        title: "Huấn luyện kỹ năng phẫu thuật thực hành và lâm sàng ngoại khoa",
      },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-faculty-le-van-cuong",
    slug: "le-van-cuong",
    fullName: "Lê Văn Cường",
    academicTitle: "GS.TS.BS.",
    position: "Giảng viên Cao cấp • Phó Trưởng Bộ môn Ngoại chung",
    department: "Bộ môn Giải phẫu học & Ngoại khoa",
    avatarUrl: "/assets/som/faculty/le-van-cuong.jpg",
    quote:
      "Giải phẫu học là tấm bản đồ dẫn đường cho mọi thầy thuốc lâm sàng và phẫu thuật viên.",
    bioShort:
      "Giáo sư, Tiến sĩ, Bác sĩ; Giảng viên Cao cấp Bộ môn Giải phẫu học Đại học Y Dược TP.HCM; Phó Trưởng Bộ môn Ngoại chung và phụ trách đào tạo Giải phẫu học tại Khoa Y Đại học Tân Tạo.",
    isActive: true,
    contacts: [
      {
        id: "contact-lvc-1",
        facultyId: "som-faculty-le-van-cuong",
        type: "email",
        value: "gs.levancuong@gmail.com",
      },
    ],
    researchAreas: [
      {
        id: "area-lvc-1",
        facultyId: "som-faculty-le-van-cuong",
        title: "Giải phẫu học ứng dụng và Phẫu thuật ngoại khoa",
      },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-faculty-vu-huy-tru",
    slug: "vu-huy-tru",
    fullName: "Vũ Huy Trụ",
    academicTitle: "PGS.TS.BS.",
    position: "Giảng viên Cao cấp Bộ môn Nhi khoa",
    department: "Bộ môn Nhi khoa",
    avatarUrl: "/assets/som/faculty/vu-huy-tru.jpg",
    bioShort:
      "Phó Giáo sư, Tiến sĩ, Bác sĩ chuyên ngành Nhi khoa & Thận – Nội tiết Nhi; Nguyên Trưởng khoa tại Bệnh viện Nhi Đồng và giảng viên cao cấp đào tạo Nhi khoa lâm sàng.",
    isActive: true,
    researchAreas: [
      {
        id: "area-vht-1",
        facultyId: "som-faculty-vu-huy-tru",
        title: "Nhi khoa lâm sàng và Thận – Tiết niệu trẻ em",
      },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-faculty-ernest-talarico",
    slug: "ernest-talarico",
    fullName: "Ernest F. Talarico Jr.",
    academicTitle: "PGS.TS.",
    position: "Giáo sư Thỉnh giảng Quốc tế • Giải phẫu & Sinh học Tế bào",
    department: "Bộ môn Y học Cơ sở Quốc tế (Hoa Kỳ)",
    avatarUrl: "/assets/som/faculty/ernest-talarico.jpg",
    bioShort:
      "Phó Giáo sư Giải phẫu & Sinh học Tế bào; Nguyên Giám đốc Chương trình Giáo dục Y khoa tại Indiana University School of Medicine – Northwest (Hoa Kỳ); đồng hành trực tiếp hướng dẫn sinh viên Khoa Y TTU nghiên cứu và thực tập tại Hoa Kỳ.",
    isActive: true,
    researchAreas: [
      {
        id: "area-et-1",
        facultyId: "som-faculty-ernest-talarico",
        title: "Giải phẫu người, Sinh học tế bào & Phương pháp học tập dựa trên ca bệnh (PBL)",
      },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-faculty-diep-thanh-tuong",
    slug: "diep-thanh-tuong",
    fullName: "Diệp Thành Tường",
    academicTitle: "TS.BS.",
    position: "Giảng viên Cơ hữu Bộ môn Nội Tim mạch",
    department: "Bộ môn Nội khoa – Tim mạch",
    avatarUrl: "/assets/som/faculty/diep-thanh-tuong.jpg",
    bioShort:
      "Tiến sĩ, Bác sĩ chuyên ngành Nội Tim mạch; giảng dạy lâm sàng Nội khoa và tham gia hướng dẫn nhóm nghiên cứu tim mạch sinh viên Khoa Y TTU.",
    isActive: true,
    contacts: [
      {
        id: "contact-dtt-1",
        facultyId: "som-faculty-diep-thanh-tuong",
        type: "email",
        value: "tuong.diep@ttu.edu.vn",
      },
    ],
    researchAreas: [
      {
        id: "area-dtt-1",
        facultyId: "som-faculty-diep-thanh-tuong",
        title: "Nội Tim mạch & Tăng huyết áp, Suy tim lâm sàng",
      },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-faculty-do-phi-khanh",
    slug: "do-phi-khanh",
    fullName: "Đỗ Phi Khanh",
    academicTitle: "BSCKII.",
    position: "Giảng viên Bộ môn Phẫu thuật Thực hành & Ngoại khoa",
    department: "Bộ môn Ngoại khoa",
    avatarUrl: "/assets/som/faculty/do-phi-khanh.jpg",
    bioShort:
      "Bác sĩ Chuyên khoa II Ngoại khoa; phụ trách giảng dạy Phẫu thuật thực hành, Kỹ năng Tiền lâm sàng và hướng dẫn sinh viên đi buồng bệnh Ngoại khoa.",
    isActive: true,
    contacts: [
      {
        id: "contact-dpk-1",
        facultyId: "som-faculty-do-phi-khanh",
        type: "email",
        value: "khanh.do@ttu.edu.vn",
      },
    ],
    researchAreas: [
      {
        id: "area-dpk-1",
        facultyId: "som-faculty-do-phi-khanh",
        title: "Phẫu thuật thực hành và Ngoại khoa lâm sàng",
      },
    ],
    createdAt: now,
    updatedAt: now,
  },
];

export const mockResearchProjects: Research[] = [
  {
    id: "som-project-01",
    type: ResearchType.PROJECT,
    title:
      "Ứng dụng Trí tuệ Nhân tạo (Deep Learning), Chụp mạch động học (Dynamic Angiography) và Siêu âm nội mạch (IVUS) trong dự báo tổn thương mạch vành nguy cơ cao",
    abstract:
      "Chương trình nghiên cứu đa trung tâm hợp tác giữa Khoa Y Đại học Tân Tạo và các bệnh viện đối tác Hoa Kỳ nhằm phân tích dòng chảy mạch vành, độ lệch tâm mảng xơ vữa và cá thể hóa chiến lược can thiệp động mạch vành qua da (PCI).",
    principalInvestigator: "GS.TS.BS. Thạch Nguyễn & Nhóm Nghiên cứu Tim mạch TTU",
    unit: "Khoa Y - Đại học Tân Tạo",
    researchField: "Tim mạch Can thiệp & AI Y sinh",
    sponsor: "TTU & Hệ thống Bệnh viện Liên kết Hoa Kỳ",
    startYear: 2024,
    endYear: 2026,
    status: ResearchStatus.ONGOING,
    keywords: "Dynamic Angiography, IVUS, Deep Learning, Unstable Angina, PCI",
    language: ResearchLanguage.VI,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-project-02",
    type: ResearchType.PROJECT,
    title:
      "Đánh giá tính an toàn và khả thi của Can thiệp Động mạch vành qua da có Robot hỗ trợ (Robotic-Assisted PCI) trong thực hành lâm sàng",
    abstract:
      "Nghiên cứu đánh giá hiệu quả kỹ thuật, mức độ giảm phơi nhiễm tia X cho phẫu thuật viên và kết cục lâm sàng sớm khi triển khai hệ thống Robot hỗ trợ can thiệp mạch vành.",
    principalInvestigator: "BS. Hồ Thượng Dũng, GS.TS.BS. Thạch Nguyễn, BS. Vũ Trí Lộc",
    unit: "Bộ môn Nội Tim mạch & Bệnh viện Thống Nhất",
    researchField: "Tim mạch Can thiệp & Robot Y học",
    sponsor: "Hợp tác Nghiên cứu Đa trung tâm",
    startYear: 2024,
    endYear: 2026,
    status: ResearchStatus.COMPLETED,
    keywords: "Robotic-Assisted PCI, Interventional Cardiology, Clinical Safety",
    language: ResearchLanguage.VI,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-project-03",
    type: ResearchType.PROJECT,
    title:
      "Kết quả 5 năm phẫu thuật nội soi bảo tồn cơ thắt trong điều trị ung thư trực tràng ở người bệnh cao tuổi tại Việt Nam",
    abstract:
      "Nghiên cứu tiến cứu theo dõi dọc 5 năm đánh giá tỷ lệ sống còn toàn bộ, sống còn không bệnh và chất lượng cuộc sống sau phẫu thuật nội soi bảo tồn cơ thắt.",
    principalInvestigator: "TS.BS. Hồ Hữu Đức, GS.TS.BS. Lê Quang Nghĩa, BS. Vũ Trí Lộc",
    unit: "Bộ môn Ngoại chung - Khoa Y TTU",
    researchField: "Ngoại Ung bướu & Phẫu thuật Nội soi",
    sponsor: "Đại học Tân Tạo & Bệnh viện Thống Nhất",
    startYear: 2021,
    endYear: 2026,
    status: ResearchStatus.COMPLETED,
    keywords: "Laparoscopic Surgery, Rectal Cancer, Elderly Patients, Oncology",
    language: ResearchLanguage.VI,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-project-04",
    type: ResearchType.PROJECT,
    title:
      "Đường tín hiệu Leptin trong điều hòa biểu hiện gen Tyrosine Hydroxylase và sự sinh tổng hợp các Catecholamine",
    abstract:
      "Đề tài nghiên cứu cơ bản y sinh phân tử do Quỹ Phát triển Khoa học và Công nghệ Quốc gia (NAFOSTED) tài trợ, khảo sát cơ chế phân tử điều hòa thần kinh – nội tiết.",
    principalInvestigator: "TS.DS. Đoàn Văn Khánh",
    unit: "Phòng thí nghiệm Y sinh Phân tử - Khoa Y TTU",
    researchField: "Y sinh Phân tử & Dược lý học",
    sponsor: "Quỹ Quốc gia NAFOSTED",
    startYear: 2018,
    endYear: 2020,
    status: ResearchStatus.COMPLETED,
    keywords: "Leptin Signaling, Tyrosine Hydroxylase, Catecholamine, NAFOSTED",
    language: ResearchLanguage.VI,
    createdAt: now,
    updatedAt: now,
  },
];

export const mockResearchPublications: Research[] = [
  {
    id: "som-pub-139",
    type: ResearchType.PUBLICATION,
    title:
      "Global, regional and national burden of ischemic heart disease attributable to suboptimal diet, 1990–2023: a Global Burden of Disease study",
    authors: "GBD 2023 IHD & Dietary Risk Factors Collaborators (Vu Tri Loc et al., Tan Tao University School of Medicine)",
    journalName: "Nature Medicine",
    publisher: "Springer Nature",
    publicationYear: 2026,
    doi: "10.1038/s41591-026-04250-8",
    researchField: "Tim mạch & Dịch tễ học Toàn cầu",
    keywords: "Ischemic Heart Disease, Global Burden of Disease, Nature Medicine",
    language: ResearchLanguage.EN,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-pub-138",
    type: ResearchType.PUBLICATION,
    title:
      "Safety and feasibility during early implementation of robotic-assisted percutaneous coronary intervention",
    authors:
      "Thuong Dung Ho, Manh Cuong Nguyen, Tran Tran Nguyen, Long Tran, Huy Nguyen, Loc Vu, Khiem Ngo, Thach Nguyen, Aravinda Nanjundappa",
    journalName: "Frontiers in Cardiovascular Medicine",
    publisher: "Frontiers Media SA",
    publicationYear: 2026,
    doi: "10.3389/fcvm.2026.1731900",
    researchField: "Tim mạch Can thiệp",
    keywords: "Robotic PCI, Coronary Intervention, Cardiovascular Medicine",
    language: ResearchLanguage.EN,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-pub-141",
    type: ResearchType.PUBLICATION,
    title:
      "Five-Year Outcomes of Laparoscopic Sphincter-Preserving Surgery for Rectal Cancer: A Prospective Study in Elderly Vietnamese Patients",
    authors: "Huu Duc Ho, Quang Le, Ngoc Thach Tran, Van Viet Ung, Loc Vu",
    journalName: "Aging and Cancer",
    publisher: "Wiley",
    publicationYear: 2026,
    doi: "10.1002/aac2.70026",
    researchField: "Ngoại khoa & Ung bướu học",
    keywords: "Rectal Cancer, Laparoscopic Surgery, Elderly Patients",
    language: ResearchLanguage.EN,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-pub-140",
    type: ResearchType.PUBLICATION,
    title:
      "Pharmacological and Non-Pharmacological Postoperative Pain Management Practices Among Nurses in Vietnam: A Cross-Sectional Study",
    authors:
      "Van Hoi Le, Huu Thuan Vo, Thi Bich Thuy Tran, My Hanh Dang, Cai Thi Thuy Nguyen, Thi Anh Nguyen",
    journalName: "Nursing Reports",
    publisher: "MDPI",
    publicationYear: 2026,
    doi: "10.3390/nursrep16040106",
    researchField: "Điều dưỡng Lâm sàng & Chăm sóc Hậu phẫu",
    keywords: "Postoperative Pain Management, Nursing Practice, Clinical Care",
    language: ResearchLanguage.EN,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-pub-137",
    type: ResearchType.PUBLICATION,
    title:
      "Assessing the incubation time in antifungal susceptibility testing using the agar-based disk diffusion method",
    authors:
      "Van T. T. Pham, Phuong T. D. Thach, Chuong H. Nguyen, An T. Phan, Hai T. Tang, Khang H. Pham, Hoa T. Nhu",
    journalName: "Proceedings of Singapore Healthcare",
    publisher: "SAGE Publications",
    publicationYear: 2026,
    doi: "10.1177/20101058251350728",
    researchField: "Vi sinh – Ký sinh trùng & Xét nghiệm Y học",
    keywords: "Antifungal Susceptibility, Medical Microbiology, Laboratory Medicine",
    language: ResearchLanguage.EN,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-pub-136",
    type: ResearchType.PUBLICATION,
    title:
      "Plaque Eccentricity and Delayed Flow as Predictors of Vulnerable Lesions in Unstable Angina: Insights from Dynamic Angiography, IVUS, and Deep Learning",
    authors:
      "Loc Vu, Dung Ho, Khiem Ngo, Minh Le, Thuan Huynh, Quan Nguyen, Trien Tran, Bao Huy Le, Thien Tan Tri Tai Truyen, Thach Nguyen",
    journalName: "Circulation (AHA Scientific Sessions)",
    publisher: "American Heart Association",
    publicationYear: 2025,
    doi: "10.1161/circ.152.suppl_1.4370143",
    researchField: "Tim mạch Can thiệp & Trí tuệ Nhân tạo",
    keywords: "Unstable Angina, IVUS, Deep Learning, AHA",
    language: ResearchLanguage.EN,
    createdAt: now,
    updatedAt: now,
  },
];

export const mockAchievements: Achievement[] = [
  {
    id: "som-ach-01",
    title:
      "Giải thưởng Paul Dudley White International Scholar Award của Hiệp hội Tim mạch Hoa Kỳ (AHA)",
    type: "AWARD",
    description:
      "Nhóm nghiên cứu Giảng viên & Sinh viên Khoa Y Đại học Tân Tạo vinh dự nhận giải thưởng danh giá Paul Dudley White International Scholar Award cho công trình nghiên cứu xuất sắc nhất đến từ Việt Nam tại Hội nghị Tim mạch Hoa Kỳ.",
    studentNames: "Nhóm Nghiên cứu Tim mạch Sinh viên & Giảng viên Khoa Y TTU",
    projectName: "Dynamic Coronary Angiography & Vulnerable Plaque Research",
    organization: "American Heart Association (AHA)",
    level: "INTERNATIONAL",
    rank: "Paul Dudley White Scholar",
    achievedYear: 2025,
    isHighlight: true,
    visibility: "PUBLIC",
    coverImage: "/assets/som/hero-som-clinical.jpg",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-ach-02",
    title:
      "Đạt Chứng nhận Quốc tế ECFMG & WDOMS – Mở đường thi Chứng chỉ Hành nghề Y khoa Hoa Kỳ USMLE",
    type: "OTHER",
    description:
      "Khoa Y Đại học Tân Tạo được Ủy ban Giáo dục cho Sinh viên Y khoa Quốc tế التốt nghiệp tại Hoa Kỳ (ECFMG) công nhận, cho phép sinh viên và bác sĩ tốt nghiệp TTU dự thi USMLE Step 1, Step 2 CK và ứng tuyển Nội trú (Residency) tại Hoa Kỳ.",
    studentNames: "Khoa Y Đại học Tân Tạo (School of Medicine)",
    projectName: "Chuẩn hóa Đào tạo Y khoa Quốc tế ECFMG / USMLE",
    organization: "ECFMG & World Directory of Medical Schools",
    level: "INTERNATIONAL",
    rank: "ECFMG Certified",
    achievedYear: 2026,
    isHighlight: true,
    visibility: "PUBLIC",
    coverImage: "/assets/som/about-som-whitecoat.jpg",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-ach-03",
    title:
      "Công bố Nghiên cứu Đa quốc gia trên Tạp chí Nature Medicine & Frontiers in Cardiovascular Medicine (2026)",
    type: "RESEARCH",
    description:
      "Giảng viên và bác sĩ trẻ Khoa Y TTU tham gia công bố hơn 140 bài báo khoa học quốc tế, trong đó có các công trình đăng trên Nature Medicine, Circulation (AHA) và Frontiers in Cardiovascular Medicine.",
    studentNames: "Đội ngũ Giảng viên & Bác sĩ Nghiên cứu Khoa Y TTU",
    projectName: "140+ Công bố Quốc tế ISI/Scopus & PubMed",
    organization: "Nature Medicine / Frontiers / Wiley",
    level: "INTERNATIONAL",
    rank: "Q1 ISI / Nature Index",
    achievedYear: 2026,
    isHighlight: true,
    visibility: "PUBLIC",
    coverImage: "/assets/som/lab-anatomage-3d.jpg",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-ach-04",
    title:
      "Chương trình Thực tập Lâm sàng Hoa Kỳ (US Clinical Electives) & Hành trình từ TTU đến Harvard",
    type: "SCHOLARSHIP",
    description:
      "Hàng năm, sinh viên Y khoa xuất sắc của TTU tham gia chương trình thực tập lâm sàng tại St. Mary Medical Center, Methodist Hospital (Indiana, Hoa Kỳ) và phát triển lộ trình nghiên cứu sau đại học tại các đại học hàng đầu Hoa Kỳ.",
    studentNames: "Đoàn Sinh viên Y khoa Thực tập Hoa Kỳ 2025 – 2026",
    projectName: "US Clinical Rotation & Research Fellowship",
    organization: "St. Mary Medical Center & Methodist Hospital, Indiana, USA",
    level: "INTERNATIONAL",
    rank: "US Clinical Fellowship",
    achievedYear: 2026,
    isHighlight: false,
    visibility: "PUBLIC",
    coverImage: "/assets/som/physician-oath.jpg",
    createdAt: now,
    updatedAt: now,
  },
];

export const mockNews: News[] = [
  {
    id: "som-news-01",
    title: "Nghi thức Khoác áo Blouse trắng (White Coat Ceremony) năm học 2026: Khởi đầu hành trình Y đức Hải Thượng",
    slug: "nghi-thuc-khoac-ao-blouse-trang-2026",
    summary:
      "Buổi lễ thiêng liêng đánh dấu cột mốc tân sinh viên Khoa Y Đại học Tân Tạo chính thức khoác lên mình chiếc áo Blouse trắng và tuyên đọc Lời thề Thầy thuốc.",
    content: {},
    contentText:
      "Nghi thức Khoác áo Blouse trắng (White Coat Ceremony) là truyền thống nhân văn cao đẹp theo chuẩn các trường Y khoa Hoa Kỳ được Khoa Y Đại học Tân Tạo duy trì hàng năm. Trước sự chứng kiến của GS.TS.BS. Thạch Nguyễn cùng các Giáo sư, Bác sĩ đầu ngành và phụ huynh, các tân sinh viên Y khoa, Điều dưỡng và Kỹ thuật Xét nghiệm Y học đã trang trọng nhận chiếc áo Blouse trắng và đồng thanh tuyên đọc Lời thề Thầy thuốc, cam kết trọn đời phụng sự người bệnh với triết lý 'Y học Hoa Kỳ – Y đức Hải Thượng'.",
    coverImage: "/assets/som/about-som-whitecoat.jpg",
    category: "events",
    status: "published",
    publishedAt: "2026-08-25T08:00:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-news-02",
    title: "Từ TTU đến Harvard: Câu chuyện phát triển nghiên cứu y khoa chuẩn quốc tế của Bác sĩ trưởng thành từ Khoa Y TTU",
    slug: "tu-ttu-den-harvard-cau-chuyen-phat-trien-nghien-cuu",
    summary:
      "Hành trình truyền cảm hứng của cựu sinh viên Khoa Y TTU từ những đề tài nghiên cứu tim mạch đầu tiên tại trường đến môi trường học thuật đỉnh cao tại Hoa Kỳ.",
    content: {},
    contentText:
      "Nhờ môi trường đào tạo song ngữ chuẩn Hoa Kỳ, được trực tiếp tham gia nhóm nghiên cứu của GS.TS.BS. Thạch Nguyễn ngay từ những năm đầu đại học và báo cáo tại các hội nghị tim mạch quốc tế (AHA, ACC), nhiều cựu sinh viên Khoa Y TTU đã chinh phục thành công kỳ thi USMLE và tiếp tục hành trình nghiên cứu tại các trung tâm y học hàng đầu Hoa Kỳ.",
    coverImage: "/assets/som/hero-som-clinical.jpg",
    category: "achievements",
    status: "published",
    publishedAt: "2026-08-18T08:00:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-news-03",
    title: "Talkshow “Thực tập Hoa Kỳ & Hành trình chinh phục kỳ thi USMLE” cùng đoàn sinh viên Y khoa TTU 2026",
    slug: "talkshow-thuc-tap-hoa-ky-va-hanh-trinh-chinh-phuc-usmle",
    summary:
      "Chia sẻ kinh nghiệm thực tế từ nhật ký thực tập lâm sàng tại bang Indiana (Hoa Kỳ) và phương pháp ôn luyện USMLE Step 1 & Step 2 CK hiệu quả ngay từ giảng đường.",
    content: {},
    contentText:
      "Tại buổi tọa đàm, các sinh viên vừa hoàn thành kỳ thực tập lâm sàng tại St. Mary Medical Center và Methodist Hospital (Indiana, Hoa Kỳ) đã chia sẻ chi tiết về văn hóa đi buồng bệnh (Morning Rounds), cách trình bệnh án bằng tiếng Anh theo cấu trúc SOAP và lộ trình ôn luyện USMLE Step 1 tích hợp trong chương trình đào tạo của Khoa Y TTU.",
    coverImage: "/assets/som/program-medicine-md.jpg",
    category: "workshop",
    status: "published",
    publishedAt: "2026-08-05T08:00:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-news-04",
    title: "Giảng viên Khoa Y TTU đồng công bố nghiên cứu về Phẫu thuật Nội soi Ung thư Trực tràng và Can thiệp Mạch vành Robot trên tạp chí Quốc tế 2026",
    slug: "giang-vien-khoa-y-cong-bo-nghien-cuu-quoc-te-2026",
    summary:
      "Loạt công bố mới năm 2026 trên Nature Medicine, Frontiers in Cardiovascular Medicine và Aging and Cancer tiếp tục khẳng định năng lực nghiên cứu y học thực chứng của Khoa Y.",
    content: {},
    contentText:
      "Trong năm 2026, đội ngũ giảng viên và nhóm nghiên cứu Khoa Y Đại học Tân Tạo đã liên tiếp ghi dấu ấn với các bài báo khoa học xuất bản trên các tạp chí y học uy tín thuộc hệ thống ISI/Scopus như Nature Medicine, Frontiers in Cardiovascular Medicine, Aging and Cancer, Nursing Reports và Proceedings of Singapore Healthcare.",
    coverImage: "/assets/som/lab-anatomage-3d.jpg",
    category: "academic",
    status: "published",
    publishedAt: "2026-07-22T08:00:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-news-05",
    title: "Kế hoạch đào tạo và Lịch luân khoa Lâm sàng năm học 2026 – 2027 cho sinh viên Y khoa, Điều dưỡng và Xét nghiệm Y học",
    slug: "ke-hoach-dao-tao-va-lich-luan-khoa-lam-sang-2026-2027",
    summary:
      "Thông báo chi tiết biểu đồ kế hoạch năm học 2026 – 2027 và lịch thực hành tại hệ thống 18 bệnh viện liên kết tại TP.HCM và Bệnh viện Đại học Y Tân Tạo.",
    content: {},
    contentText:
      "Khoa Y công bố kế hoạch đào tạo năm học 2026 – 2027 cho các khối Y1 đến Y6, Cử nhân Điều dưỡng và Kỹ thuật Xét nghiệm Y học, bao gồm lịch thực hành tiền lâm sàng tại khu Lab Anatomage 3D và lịch luân khoa Nội, Ngoại, Sản, Nhi tại các bệnh viện thực hành.",
    coverImage: "/assets/som/lab-preclinical.jpg",
    category: "general",
    status: "published",
    publishedAt: "2026-07-10T08:00:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
];

export const mockEvents: Event[] = [
  {
    id: "som-event-01",
    titleVi: "Lễ Khoác áo Blouse trắng & Tuyên thệ Tân sinh viên Khoa Y (White Coat Ceremony)",
    titleEn: "White Coat Ceremony & Physician's Oath for Incoming Medical Students",
    descriptionVi:
      "Nghi thức truyền thống đón tân sinh viên Y khoa, Điều dưỡng, Kỹ thuật Xét nghiệm Y học và tuyên đọc Lời thề Thầy thuốc.",
    descriptionEn:
      "Traditional ceremony welcoming new MD, Nursing, and Medical Laboratory students with the recitation of the Physician's Oath.",
    startAt: "2026-09-15T08:00:00.000Z",
    endAt: "2026-09-15T11:30:00.000Z",
    locationVi: "Hội trường Levy, Đại học Tân Tạo",
    locationEn: "Levy Hall, Tan Tao University",
    status: "published",
    isFeatured: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-event-02",
    titleVi: "Hội nghị Tim mạch – Lão khoa Quốc tế & Báo cáo Nghiên cứu Sinh viên Y khoa",
    titleEn: "International Geriatric Cardiology Symposium & Medical Student Research Forum",
    descriptionVi:
      "Hội thảo khoa học quốc tế quy tụ các chuyên gia tim mạch Hoa Kỳ và Việt Nam, kết hợp phiên báo cáo poster bằng tiếng Anh của sinh viên Khoa Y.",
    descriptionEn:
      "International clinical symposium bringing together US and Vietnamese cardiology experts alongside English research poster sessions by TTU medical students.",
    startAt: "2026-10-20T08:30:00.000Z",
    endAt: "2026-10-20T16:30:00.000Z",
    locationVi: "Khoa Y Đại học Tân Tạo & Bệnh viện Thống Nhất",
    locationEn: "TTU School of Medicine & Thong Nhat Hospital",
    status: "published",
    isFeatured: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-event-03",
    titleVi: "Chuyên đề Ôn luyện USMLE Step 1 & Kỹ năng Trình bệnh án Tiếng Anh (Clinical Case Presentation)",
    titleEn: "USMLE Step 1 Intensive Review & English Clinical Case Presentation Workshop",
    descriptionVi:
      "Huấn luyện phương pháp phân tích ca lâm sàng theo chuẩn NBME/USMLE và kỹ năng đi buồng bệnh quốc tế.",
    descriptionEn:
      "Hands-on training in NBME/USMLE clinical vignette analysis and international bedside case presentation.",
    startAt: "2026-11-08T08:30:00.000Z",
    endAt: "2026-11-08T12:00:00.000Z",
    locationVi: "Phòng Mô phỏng Lâm sàng & Anatomage 3D, Khoa Y TTU",
    locationEn: "Clinical Simulation & 3D Anatomage Lab, TTU School of Medicine",
    status: "published",
    isFeatured: false,
    createdAt: now,
    updatedAt: now,
  },
];

export const mockAlumniSections: AlumniSection[] = [
  {
    id: "som-alumni-sec-1",
    slug: "clinical-and-global-physicians",
    titleVi: "Bác sĩ Lâm sàng & Nghiên cứu Quốc tế",
    titleEn: "Clinical Physicians & International Medical Researchers",
    descriptionVi:
      "Các thế hệ bác sĩ, điều dưỡng và cử nhân xét nghiệm trưởng thành từ Khoa Y TTU đang công tác tại các bệnh viện tuyến đầu và chương trình học thuật tại Hoa Kỳ, Việt Nam.",
    descriptionEn:
      "Generations of physicians, nurses, and laboratory specialists graduated from TTU School of Medicine serving at leading hospitals and academic programs in the US and Vietnam.",
    displayOrder: 1,
    isActive: true,
    createdAt: now,
    updatedAt: now,
  },
];

export const mockAlumni: Alumni[] = [
  {
    id: "som-alumni-01",
    slug: "bs-vu-tri-loc",
    fullName: "BS. Vũ Trí Lộc",
    graduationYear: 2021,
    program: "Bác sĩ Y khoa (MD)",
    avatarUrl: "/assets/som/hero-som-clinical.jpg",
    shortBio:
      "Bác sĩ và nhà nghiên cứu trẻ tiêu biểu của Khoa Y TTU, đồng tác giả nhiều công trình công bố trên Nature Medicine, Circulation (AHA) và Frontiers in Cardiovascular Medicine.",
    careers: [
      {
        id: "som-al-car-1",
        organization: "Nhóm Nghiên cứu Tim mạch Quốc tế & Khoa Y TTU",
        role: "Bác sĩ Nghiên cứu Lâm sàng & Giảng viên trẻ",
        startYear: 2021,
      },
    ],
    sectionMembers: [
      {
        id: "som-al-mem-1",
        sectionId: "som-alumni-sec-1",
        isFeatured: true,
        displayOrder: 1,
      },
    ],
    meta: { alumniId: "som-alumni-01", visibility: "public" },
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-alumni-02",
    slug: "bs-truyen-thien-tan-tri-tai",
    fullName: "BS. Truyền Thiện Tân Trí Tài",
    graduationYear: 2020,
    program: "Bác sĩ Y khoa (MD)",
    avatarUrl: "/assets/som/about-som-whitecoat.jpg",
    shortBio:
      "Chinh phục kỳ thi USMLE, nhận giải thưởng Paul Dudley White International Scholar Award của Hiệp hội Tim mạch Hoa Kỳ (AHA) và phát triển sự nghiệp nghiên cứu y học tại Hoa Kỳ.",
    careers: [
      {
        id: "som-al-car-2",
        organization: "Trung tâm Nghiên cứu Y khoa tại Hoa Kỳ",
        role: "Postdoctoral Research Fellow / USMLE Certified MD",
        startYear: 2021,
      },
    ],
    sectionMembers: [
      {
        id: "som-al-mem-2",
        sectionId: "som-alumni-sec-1",
        isFeatured: true,
        displayOrder: 2,
      },
    ],
    meta: { alumniId: "som-alumni-02", visibility: "public" },
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-alumni-03",
    slug: "cn-nguyen-thi-anh",
    fullName: "CNĐD. Nguyễn Thị Ánh",
    graduationYear: 2023,
    program: "Cử nhân Điều dưỡng",
    avatarUrl: "/assets/som/program-nursing.jpg",
    shortBio:
      "Tham gia nghiên cứu thực hành quản lý đau hậu phẫu đăng trên tạp chí quốc tế Nursing Reports (MDPI, 2026) và công tác tại hệ thống bệnh viện lâm sàng.",
    careers: [
      {
        id: "som-al-car-3",
        organization: "Bệnh viện Đại học Y Tân Tạo",
        role: "Điều dưỡng Lâm sàng & Nghiên cứu",
        startYear: 2023,
      },
    ],
    sectionMembers: [
      {
        id: "som-al-mem-3",
        sectionId: "som-alumni-sec-1",
        isFeatured: false,
        displayOrder: 3,
      },
    ],
    meta: { alumniId: "som-alumni-03", visibility: "public" },
    createdAt: now,
    updatedAt: now,
  },
];

export const mockCareerOpportunities: CareerOpportunity[] = [
  {
    id: "som-job-01",
    titleVi: "Bác sĩ Đa khoa & Bác sĩ Nội trú Dự bị (Clinical Physician / Junior Resident)",
    titleEn: "General Physician & Junior Clinical Resident",
    companyName: "Bệnh viện Đại học Y Tân Tạo (Tan Tao University Hospital)",
    summaryVi:
      "Tham gia khám chữa bệnh, trực lâm sàng tại các khoa Nội, Ngoại, Sản, Nhi, Cấp cứu và phối hợp giảng dạy thực hành lâm sàng cho sinh viên Y khoa TTU.",
    summaryEn:
      "Provide patient care and clinical rotations across Internal Medicine, Surgery, OB/GYN, Pediatrics, and Emergency departments while supporting clinical teaching.",
    type: "full_time",
    workMode: "onsite",
    locationVi: "Tân Đức E.City, Đức Hòa / TP.HCM",
    locationEn: "Tan Duc E.City / Ho Chi Minh City",
    skills: "Chứng chỉ hành nghề Y khoa, Tiếng Anh Y khoa, Kỹ năng Cấp cứu & Lâm sàng",
    contactEmail: "medicine@ttu.edu.vn",
    applicationDeadline: "2026-12-31T00:00:00.000Z",
    publishedAt: "2026-08-01T00:00:00.000Z",
    status: "published",
    isFeatured: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-job-02",
    titleVi: "Chương trình Thực tập Lâm sàng Hoa Kỳ (US Clinical Electives – Indiana, USA)",
    titleEn: "US Clinical Electives & Research Clerkship (Indiana, USA)",
    companyName: "St. Mary Medical Center & Methodist Hospital, Indiana, USA",
    summaryVi:
      "Chương trình thực tập lâm sàng 4 – 8 tuần tại bang Indiana (Hoa Kỳ) dành cho sinh viên Y khoa năm 4–6 có thành tích học tập, tiếng Anh y khoa và điểm thi thử USMLE xuất sắc.",
    summaryEn:
      "4–8 week clinical clerkship in Indiana, USA for 4th–6th year medical students with strong academic standing, medical English proficiency, and USMLE readiness.",
    type: "internship",
    workMode: "onsite",
    locationVi: "Indiana, Hoa Kỳ",
    locationEn: "Indiana, USA",
    skills: "USMLE Step 1 Readiness, Medical English, Clinical Case Presentation, Research",
    contactEmail: "medicine@ttu.edu.vn",
    applicationDeadline: "2026-11-30T00:00:00.000Z",
    publishedAt: "2026-08-10T00:00:00.000Z",
    status: "published",
    isFeatured: true,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-job-03",
    titleVi: "Cử nhân Điều dưỡng & Chuyên viên Kỹ thuật Xét nghiệm Y học",
    titleEn: "Clinical Registered Nurse & Medical Laboratory Specialist",
    companyName: "Hệ thống Bệnh viện Liên kết TP.HCM & Bệnh viện Đại học Y Tân Tạo",
    summaryVi:
      "Cơ hội làm việc chính thức ngay sau tốt nghiệp tại các khoa lâm sàng và trung tâm xét nghiệm đạt chuẩn ISO 15189.",
    summaryEn:
      "Full-time clinical nursing and ISO 15189 medical laboratory positions immediately upon graduation.",
    type: "full_time",
    workMode: "onsite",
    locationVi: "TP. Hồ Chí Minh & Long An",
    locationEn: "Ho Chi Minh City & Long An",
    skills: "Chăm sóc lâm sàng OSCE, Xét nghiệm Huyết học – Hóa sinh – Vi sinh, Tiếng Anh giao tiếp",
    contactEmail: "medicine@ttu.edu.vn",
    applicationDeadline: "2026-12-15T00:00:00.000Z",
    publishedAt: "2026-08-05T00:00:00.000Z",
    status: "published",
    isFeatured: false,
    createdAt: now,
    updatedAt: now,
  },
];

export const mockStudentPortfolios: StudentPortfolio[] = [
  {
    id: "som-port-01",
    slug: "nguyen-minh-khoa-md",
    fullName: "Nguyễn Minh Khoa",
    title: "Sinh viên Y khoa Năm 5 • Trưởng nhóm Ôn luyện USMLE",
    shortBio:
      "Hoàn thành kỳ thực tập lâm sàng tại St. Mary Medical Center (Indiana, Hoa Kỳ) và đồng tác giả báo cáo nghiên cứu tại Hội nghị Tim mạch Hoa Kỳ (AHA).",
    program: "Y khoa (Bác sĩ Đa khoa)",
    studentYear: 5,
    location: "TP.HCM / Tân Đức E.City",
    avatarUrl: "/assets/som/hero-som-clinical.jpg",
    isPublished: true,
    skills: [
      { id: "sk-1", name: "USMLE Step 1 Pass" },
      { id: "sk-2", name: "Nghiên cứu Tim mạch Lâm sàng" },
      { id: "sk-3", name: "Tiếng Anh Y khoa" },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-port-02",
    slug: "tran-bao-ngoc-md",
    fullName: "Trần Bảo Ngọc",
    title: "Sinh viên Y khoa Năm 4 • Trợ giảng Giải phẫu 3D Anatomage",
    shortBio:
      "Đạt học bổng toàn phần Quỹ ITA Vì Tương Lai, tích cực tham gia hướng dẫn thực hành trên bàn giải phẫu ảo 3D Anatomage và CLB Nghiên cứu Khoa học Khoa Y.",
    program: "Y khoa (Bác sĩ Đa khoa)",
    studentYear: 4,
    location: "Tân Đức E.City",
    avatarUrl: "/assets/som/about-som-whitecoat.jpg",
    isPublished: true,
    skills: [
      { id: "sk-4", name: "Giải phẫu 3D Anatomage" },
      { id: "sk-5", name: "Kỹ năng Tiền lâm sàng OSCE" },
      { id: "sk-6", name: "Thống kê Y sinh" },
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "som-port-03",
    slug: "le-hoang-vy-nursing",
    fullName: "Lê Hoàng Vy",
    title: "Sinh viên Cử nhân Điều dưỡng Năm 4",
    shortBio:
      "Tham gia đề tài khảo sát quản lý đau hậu phẫu tại các bệnh viện tuyến đầu và đội tình nguyện khám chữa bệnh cộng đồng của Khoa Y TTU.",
    program: "Điều dưỡng",
    studentYear: 4,
    location: "TP.HCM",
    avatarUrl: "/assets/som/program-nursing.jpg",
    isPublished: true,
    skills: [
      { id: "sk-7", name: "Chăm sóc Hậu phẫu & Hồi sức" },
      { id: "sk-8", name: "Giao tiếp Y khoa Song ngữ" },
    ],
    createdAt: now,
    updatedAt: now,
  },
];

export const mockHandbooks: Handbook[] = [
  {
    id: "som-handbook-2026",
    schoolYear: "2026-2027",
    status: "published",
    contentVi: {},
    contentEn: {},
    pdfUrlVi: "https://medicine.ttu.edu.vn/danh-muc-mon-hoc/?lang=vi",
    pdfUrlEn: "https://medicine.ttu.edu.vn/danh-muc-mon-hoc/",
    createdAt: now,
    updatedAt: now,
  },
];

export const affiliatedHospitals = {
  usa: [
    {
      nameVi: "Trường Y Đại học Indiana (Indiana University School of Medicine)",
      nameEn: "Indiana University School of Medicine",
      locationVi: "Indiana, Hoa Kỳ",
      locationEn: "Indiana, USA",
      specialtyVi: "Đào tạo Y khoa, Giải phẫu – Sinh học Tế bào & Trao đổi học thuật",
      specialtyEn: "Medical Education, Anatomy & Cell Biology, Academic Exchange",
    },
    {
      nameVi: "Trung tâm Y tế St. Mary (St. Mary Medical Center)",
      nameEn: "St. Mary Medical Center",
      locationVi: "Hobart, Indiana, Hoa Kỳ",
      locationEn: "Hobart, Indiana, USA",
      specialtyVi: "Thực tập Lâm sàng Nội Tim mạch, Tim mạch Can thiệp & Nội trú",
      specialtyEn: "Cardiology, Interventional Cardiology & Clinical Clerkships",
    },
    {
      nameVi: "Hệ thống Bệnh viện Methodist (Methodist Hospitals)",
      nameEn: "Methodist Hospitals",
      locationVi: "Merrillville & Gary, Indiana, Hoa Kỳ",
      locationEn: "Merrillville & Gary, Indiana, USA",
      specialtyVi: "Thực tập Lâm sàng Đa khoa & Nghiên cứu Thử nghiệm Lâm sàng",
      specialtyEn: "Multidisciplinary Clinical Rotations & Clinical Trials",
    },
    {
      nameVi: "Chương trình Tham chiếu ĐH Illinois tại Chicago (UIC College of Medicine)",
      nameEn: "University of Illinois Chicago (UIC) Curriculum Benchmark",
      locationVi: "Chicago, Illinois, Hoa Kỳ",
      locationEn: "Chicago, Illinois, USA",
      specialtyVi: "Chuẩn hóa Khung chương trình Y khoa & Lộ trình USMLE Step 1/2",
      specialtyEn: "Medical Curriculum Alignment & USMLE Step 1/2 Preparation",
    },
  ],
  vietnam: [
    {
      nameVi: "Bệnh viện Đại học Y Tân Tạo",
      nameEn: "Tan Tao University Hospital",
      groupVi: "Bệnh viện Thực hành Trực thuộc Trường",
      groupEn: "University Teaching Hospital",
    },
    {
      nameVi: "Bệnh viện Nhân Dân 115",
      nameEn: "People's Hospital 115",
      groupVi: "Bệnh viện Đa khoa Hạng I – TP.HCM",
      groupEn: "Grade I General Hospital – HCMC",
    },
    {
      nameVi: "Bệnh viện Thống Nhất",
      nameEn: "Thong Nhat Hospital",
      groupVi: "Bệnh viện Tuyến Trung ương – TP.HCM",
      groupEn: "Central Teaching Hospital – HCMC",
    },
    {
      nameVi: "Bệnh viện Nhi Đồng 2",
      nameEn: "Children's Hospital 2",
      groupVi: "Bệnh viện Chuyên khoa Nhi Tuyến cuối – TP.HCM",
      groupEn: "Tertiary Pediatric Hospital – HCMC",
    },
    {
      nameVi: "Bệnh viện Bình Dân",
      nameEn: "Binh Dan Hospital",
      groupVi: "Bệnh viện Chuyên khoa Ngoại – Tiết niệu Tuyến đầu",
      groupEn: "Leading General & Urological Surgery Hospital",
    },
    {
      nameVi: "Bệnh viện Hùng Vương",
      nameEn: "Hung Vuong Obstetrics & Gynecology Hospital",
      groupVi: "Bệnh viện Chuyên khoa Sản Phụ khoa Hạng I",
      groupEn: "Grade I Obstetrics & Gynecology Hospital",
    },
    {
      nameVi: "Bệnh viện Trưng Vương",
      nameEn: "Trung Vuong Hospital",
      groupVi: "Bệnh viện Đa khoa & Cấp cứu Hạng I – TP.HCM",
      groupEn: "Grade I General & Emergency Hospital – HCMC",
    },
    {
      nameVi: "Bệnh viện Phạm Ngọc Thạch",
      nameEn: "Pham Ngoc Thach Hospital",
      groupVi: "Bệnh viện Chuyên khoa Lao & Bệnh Phổi Tuyến cuối",
      groupEn: "Tertiary Pulmonology & Tuberculosis Hospital",
    },
    {
      nameVi: "Bệnh viện Da Liễu TP.HCM",
      nameEn: "HCMC Hospital of Dermato-Venereology",
      groupVi: "Bệnh viện Chuyên khoa Da liễu Tuyến cuối Phía Nam",
      groupEn: "Southern Tertiary Dermatology Hospital",
    },
    {
      nameVi: "Bệnh viện Răng Hàm Mặt TP.HCM",
      nameEn: "HCMC Odonto-Stomatology Hospital",
      groupVi: "Bệnh viện Chuyên khoa Răng Hàm Mặt Hạng I",
      groupEn: "Grade I Odonto-Stomatology Hospital",
    },
    {
      nameVi: "Bệnh viện Quân Y 7A & Bệnh viện 1A",
      nameEn: "Military Hospital 7A & Hospital 1A",
      groupVi: "Ngoại Chấn thương Chỉnh hình & Phục hồi Chức năng",
      groupEn: "Orthopedic Trauma & Rehabilitation Hospitals",
    },
    {
      nameVi: "Viện Y Dược học Dân tộc TP.HCM & BV Đa khoa Long An",
      nameEn: "HCMC Institute of Traditional Medicine & Long An General Hospital",
      groupVi: "Y học Cổ truyền & Đa khoa Khu vực",
      groupEn: "Traditional Medicine & Regional General Hospital",
    },
  ],
};

export const medicalLabs = [
  {
    id: "lab-anatomage",
    code: "LAB 01",
    nameVi: "Phòng Bàn Giải phẫu 3D (Anatomage Table)",
    nameEn: "3D Virtual Dissection Lab (Anatomage Table)",
    descriptionVi:
      "Hệ thống bàn giải phẫu ảo 3D tiên tiến từ Hoa Kỳ cho phép sinh viên tương tác, cắt lớp và quan sát cấu trúc giải phẫu người thật ở độ phân giải cao theo thời gian thực.",
    descriptionEn:
      "State-of-the-art US 3D virtual dissection tables enabling real-time interactive cross-sectional exploration of life-size human anatomy.",
    image: "/assets/som/lab-anatomage-3d.jpg",
  },
  {
    id: "lab-anatomy",
    code: "LAB 02",
    nameVi: "Khu vực Thực hành Giải phẫu & Nhà Đại thể",
    nameEn: "Gross Anatomy & Cadaver Dissection Suite",
    descriptionVi:
      "Bao gồm khu nhà đại thể chuẩn quy chuẩn (12 thi hài) và hệ thống mô hình giải phẫu chi tiết, giúp sinh viên Y khoa nắm vững cấu trúc cơ thể trước khi bước vào ngoại khoa lâm sàng.",
    descriptionEn:
      "Comprises a dedicated cadaver dissection facility (12 cadaver stations) and high-precision anatomical models for foundational surgical and clinical mastery.",
    image: "/assets/som/lab-anatomy.jpg",
  },
  {
    id: "lab-preclinical",
    code: "LAB 03",
    nameVi: "Trung tâm Kỹ năng Tiền lâm sàng (OSCE Simulation Center)",
    nameEn: "Preclinical Skills & OSCE Simulation Center",
    descriptionVi:
      "Mô phỏng phòng bệnh, phòng cấp cứu hồi sức và phòng thủ thuật với hệ thống mannequin thông minh để rèn luyện kỹ năng hỏi bệnh, thăm khám, đặt nội khí quản, hồi sức tim phổi (CPR) và thi OSCE.",
    descriptionEn:
      "Simulated hospital wards, ICU bays, and procedure rooms with high-fidelity mannequins for bedside examination, airway management, CPR, and OSCE assessment.",
    image: "/assets/som/lab-preclinical.jpg",
  },
  {
    id: "lab-microbiology",
    code: "LAB 04",
    nameVi: "Phòng Thí nghiệm Vi sinh – Ký sinh trùng & Y sinh Phân tử",
    nameEn: "Microbiology, Parasitology & Molecular Biomedicine Lab",
    descriptionVi:
      "Trang bị hệ thống kính hiển vi quang học, tủ an toàn sinh học cấp II, máy PCR và thiết bị hóa sinh – huyết học phục vụ đào tạo Y khoa, Xét nghiệm Y học và nghiên cứu NAFOSTED.",
    descriptionEn:
      "Equipped with optical microscopy suites, Class II biosafety cabinets, PCR thermal cyclers, and clinical analyzers supporting MD, MLT training, and NAFOSTED research.",
    image: "/assets/som/lab-microbiology.jpg",
  },
];

export const getMockPrograms = (params?: {
  status?: string;
  level?: string;
}) =>
  mockPrograms.filter(
    (program) =>
      (!params?.status || program.status === params.status) &&
      (!params?.level || program.level === params.level),
  );

export const getMockProgramBySlug = (slug: string, locale: "vi" | "en") =>
  mockPrograms.find((program) =>
    locale === "vi"
      ? program.slugVi === slug || program.slugEn === slug
      : program.slugEn === slug || program.slugVi === slug,
  );

export const getMockCurriculums = (programId?: string) =>
  mockCurriculums.filter(
    (curriculum) => !programId || curriculum.programId === programId,
  );

export const getMockCurriculumBySlug = (
  programSlug: string,
  curriculumSlug: string,
  locale: "vi" | "en",
) => {
  const program = getMockProgramBySlug(programSlug, locale);
  if (!program) return undefined;

  const curriculum = mockCurriculums.find(
    (item) =>
      item.programId === program.programId &&
      (item.slugVi === curriculumSlug || item.slugEn === curriculumSlug),
  );

  return curriculum ? { ...curriculum, program } : undefined;
};
