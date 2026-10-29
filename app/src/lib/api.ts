import {
  getMockCurriculumBySlug,
  getMockCurriculums,
  getMockProgramBySlug,
  getMockPrograms,
  mockAchievements,
  mockAlumni,
  mockAlumniSections,
  mockCareerOpportunities,
  mockCourses,
  mockCurriculums,
  mockEvents,
  mockFaculty,
  mockHandbooks,
  mockNews,
  mockPrograms,
  mockResearchProjects,
  mockResearchPublications,
  mockStudentPortfolios,
} from "@/lib/som-mocks";

export const API_URL =
  typeof window === "undefined"
    ? process.env.INTERNAL_API_URL ||
      (process.env.NODE_ENV === "production"
        ? "https://medicine.ttu.edu.vn/api/backend"
        : "http://localhost:8080/api/v1")
    : "/api/backend";

// --- Types & Interfaces ---

export interface CreateProgramDto {
  code: string;
  nameVi: string;
  nameEn?: string;
  level: "undergraduate" | "postgraduate";
  majorCode?: string;
  banner?: string;
  status?: "active" | "inactive";
  slugVi: string;
  slugEn: string;
  descriptionVi?: string;
  descriptionEn?: string;
  content: Record<string, any>;
}

export interface Program extends CreateProgramDto {
  programId: string;
  contentId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCurriculumDto {
  programId: string;
  year: number;
  nameVi: string;
  nameEn?: string;
  slugVi: string;
  slugEn: string;
  descriptionVi?: string;
  descriptionEn?: string;
  banner?: string;
  pdfUrl?: string;
  isCurrent?: boolean;
  durationYears?: number;
  totalSemesters?: number;
  totalCredits?: number;
  educationType?: string;
  language?: string;
  degreeAwarded?: string;
}

export interface Curriculum extends CreateCurriculumDto {
  curriculumId: string;
  sections?: Section[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateSectionDto {
  curriculumId: string;
  sectionKey:
    | "intro"
    | "overview"
    | "vision"
    | "objectives"
    | "learning_outcomes"
    | "admission_requirements"
    | "workload"
    | "curriculum_structure"
    | "teaching_method"
    | "assessment"
    | "career_opportunities"
    | "graduation_requirements";
  title: string;
  content?: string;
  displayOrder?: number;
  isVisible?: boolean;
}

export interface Section extends CreateSectionDto {
  sectionId: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  userId: string;
  email: string;
  fullName: string;
  avatarUrl?: string | null;
  emailVerified: boolean;
  isActive: boolean;
  roles: string[];
  lastLoginAt?: string;
  createdAt: string;
}

export interface CreateCourseDto {
  code: string;
  nameVi: string;
  nameEn?: string;
  credits: number;
  slugVi: string;
  slugEn: string;
  lectureHours?: number;
  practiceHours?: number;
}

export interface Course extends CreateCourseDto {
  courseId: string;
}

// --- News Types ---

export interface News {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  content: any; // Yoopta JSON
  contentText?: string;
  coverImage?: string;
  category?:
    | "workshop"
    | "achievements"
    | "academic"
    | "business"
    | "events"
    | "general";
  status: "draft" | "published" | "archived";
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Handbook {
  id: string;
  schoolYear: string;
  status: "draft" | "published";
  contentVi?: any; // Yoopta JSON
  contentEn?: any; // Yoopta JSON
  pdfUrlVi?: string;
  pdfUrlEn?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  titleVi: string;
  titleEn?: string;
  descriptionVi?: string;
  descriptionEn?: string;
  startAt: string;
  endAt?: string;
  locationVi: string;
  locationEn?: string;
  registrationUrl?: string;
  status: "draft" | "published" | "cancelled";
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export type CareerOpportunityType =
  | "internship"
  | "full_time"
  | "part_time"
  | "contract";
export type CareerWorkMode = "onsite" | "hybrid" | "remote";

export interface CareerOpportunity {
  id: string;
  titleVi: string;
  titleEn?: string;
  companyName: string;
  companyLogoUrl?: string;
  summaryVi?: string;
  summaryEn?: string;
  requirementsVi?: string;
  requirementsEn?: string;
  type: CareerOpportunityType;
  workMode: CareerWorkMode;
  locationVi: string;
  locationEn?: string;
  skills?: string;
  salaryText?: string;
  applicationUrl?: string;
  contactEmail?: string;
  applicationDeadline?: string;
  publishedAt?: string;
  status: "published";
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PopupBanner {
  id: string;
  titleVi: string;
  titleEn?: string;
  imageUrl: string;
  imageAltVi?: string;
  imageAltEn?: string;
  linkUrl: string;
  openInNewTab: boolean;
  startsAt?: string | null;
  endsAt?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// --- Research Types ---

export enum ResearchType {
  PROJECT = "PROJECT",
  PUBLICATION = "PUBLICATION",
}

export enum ResearchStatus {
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED",
}

export enum ResearchLanguage {
  VI = "vi",
  EN = "en",
}

export interface Research {
  id: string;
  type: ResearchType;
  title: string;
  slug?: string;
  abstract?: string;
  authors?: string;
  principalInvestigator?: string;
  unit?: string;
  researchField?: string;
  // Project-specific fields
  sponsor?: string;
  fundingAmount?: string;
  startYear?: number;
  endYear?: number;
  status?: ResearchStatus;
  // Publication-specific fields
  journalName?: string;
  publisher?: string;
  publicationYear?: number;
  doi?: string;
  pdfUrl?: string;
  // Metadata
  keywords?: string;
  language?: ResearchLanguage;
  createdAt: string;
  updatedAt: string;
}

// --- Achievement Types ---

export type AchievementType =
  | "HACKATHON"
  | "AWARD"
  | "SCHOLARSHIP"
  | "RESEARCH"
  | "COMPETITION"
  | "OTHER";
export type AchievementLevel = "UNIVERSITY" | "NATIONAL" | "INTERNATIONAL";
export type AchievementVisibility = "PUBLIC" | "INTERNAL";

export interface Achievement {
  id: string;
  title: string;
  type: AchievementType;
  description?: string;
  studentNames?: string;
  projectName?: string;
  organization?: string;
  level?: AchievementLevel;
  rank?: string;
  reward?: string;
  achievedYear?: number;
  isHighlight?: boolean;
  visibility?: AchievementVisibility;
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
}

// --- Helper Functions ---

const getHeaders = () => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (typeof window === "undefined" && process.env.API_ACCESS_KEY) {
    headers["X-API-Key"] = process.env.API_ACCESS_KEY;
  }
  return headers;
};

const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...getHeaders(),
      ...options.headers,
    },
    credentials: "include", // Send cookies to backend
  });
};

// --- API Client (Read-Only) ---

export const api = {
  programs: {
    findAll: async (params?: {
      status?: string;
      level?: string;
    }): Promise<Program[]> => {
      try {
        const searchParams = new URLSearchParams();
        if (params?.status) searchParams.append("status", params.status);
        if (params?.level) searchParams.append("level", params.level);

        const response = await fetchWithAuth(
          `${API_URL}/programs?${searchParams.toString()}`,
        );

        if (!response.ok) return getMockPrograms(params);
        const data = (await response.json()) as Program[];
        return data.length > 0 ? data : getMockPrograms(params);
      } catch {
        return getMockPrograms(params);
      }
    },

    findOne: async (id: string): Promise<Program> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/programs/${id}`);
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = mockPrograms.find((p) => p.programId === id);
      if (mock) return mock;
      throw new Error("Failed to fetch program");
    },

    findBySlug: async (
      slug: string,
      locale: "vi" | "en" = "vi",
    ): Promise<Program> => {
      try {
        const response = await fetchWithAuth(
          `${API_URL}/programs/slug/${locale}/${slug}`,
        );
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = getMockProgramBySlug(slug, locale);
      if (mock) return mock;
      throw new Error("Failed to fetch program by slug");
    },
  },
  curriculums: {
    findAll: async (programId?: string): Promise<Curriculum[]> => {
      try {
        const query = programId ? `?programId=${programId}` : "";
        const response = await fetchWithAuth(`${API_URL}/curriculums${query}`);
        if (!response.ok) return getMockCurriculums(programId);
        const data = (await response.json()) as Curriculum[];
        return data.length > 0 ? data : getMockCurriculums(programId);
      } catch {
        return getMockCurriculums(programId);
      }
    },

    findOne: async (
      id: string,
      includeSections = false,
    ): Promise<Curriculum> => {
      try {
        const query = includeSections ? "?includeSections=true" : "";
        const response = await fetchWithAuth(
          `${API_URL}/curriculums/${id}${query}`,
        );
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = mockCurriculums.find((c) => c.curriculumId === id);
      if (mock) return mock;
      throw new Error("Failed to fetch curriculum");
    },

    findByProgramAndCurriculumSlug: async (
      programSlug: string,
      curriculumSlug: string,
      locale: "vi" | "en" = "vi",
    ): Promise<Curriculum & { program: Program }> => {
      try {
        const response = await fetchWithAuth(
          `${API_URL}/curriculums/by-slug/${locale}/${programSlug}/${curriculumSlug}`,
        );
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = getMockCurriculumBySlug(programSlug, curriculumSlug, locale);
      if (mock) return mock;
      throw new Error("Failed to fetch curriculum by slug");
    },
  },
  sections: {
    findAll: async (curriculumId?: string): Promise<Section[]> => {
      try {
        const query = curriculumId ? `?curriculumId=${curriculumId}` : "";
        const response = await fetchWithAuth(`${API_URL}/sections${query}`);
        if (response.ok) {
          const data = (await response.json()) as Section[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      const cur = curriculumId
        ? mockCurriculums.find((c) => c.curriculumId === curriculumId)
        : mockCurriculums[0];
      return cur?.sections || [];
    },
  },
  courses: {
    findAll: async (): Promise<Course[]> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/courses`);
        if (response.ok) {
          const data = (await response.json()) as Course[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      return mockCourses;
    },

    findOne: async (id: string): Promise<Course> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/courses/${id}`);
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = mockCourses.find((c) => c.courseId === id || c.code === id);
      if (mock) return mock;
      throw new Error("Failed to fetch course");
    },
  },
  search: {
    query: async (
      q: string,
    ): Promise<{
      programs: Program[];
      curriculums: Curriculum[];
      news: News[];
      research: Research[];
    }> => {
      try {
        const response = await fetchWithAuth(
          `${API_URL}/search?q=${encodeURIComponent(q)}`,
        );
        if (response.ok) return response.json();
      } catch {
        // Fallback to local mock search
      }
      const needle = q.trim().toLowerCase();
      if (!needle) {
        return { programs: [], curriculums: [], news: [], research: [] };
      }
      const allResearch = [...mockResearchProjects, ...mockResearchPublications];
      return {
        programs: mockPrograms.filter((p) =>
          `${p.nameVi} ${p.nameEn || ""} ${p.code}`.toLowerCase().includes(needle),
        ),
        curriculums: mockCurriculums.filter((c) =>
          `${c.nameVi} ${c.nameEn || ""}`.toLowerCase().includes(needle),
        ),
        news: mockNews.filter((n) =>
          `${n.title} ${n.summary || ""}`.toLowerCase().includes(needle),
        ),
        research: allResearch.filter((r) =>
          `${r.title} ${r.authors || ""} ${r.principalInvestigator || ""}`
            .toLowerCase()
            .includes(needle),
        ),
      };
    },
  },
  news: {
    findAll: async (): Promise<News[]> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/news`);
        if (response.ok) {
          const data = (await response.json()) as News[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      return mockNews;
    },

    findOne: async (id: string): Promise<News> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/news/${id}`);
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = mockNews.find((n) => n.id === id || n.slug === id);
      if (mock) return mock;
      throw new Error("Failed to fetch news");
    },
  },
  handbook: {
    findAll: async (): Promise<Handbook[]> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/handbook`);
        if (response.ok) {
          const data = (await response.json()) as Handbook[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      return mockHandbooks;
    },

    getCurrent: async (): Promise<Handbook> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/handbook/current`);
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      return mockHandbooks[0];
    },

    findByYear: async (schoolYear: string): Promise<Handbook> => {
      try {
        const response = await fetchWithAuth(
          `${API_URL}/handbook/year/${schoolYear}`,
        );
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      return (
        mockHandbooks.find((h) => h.schoolYear === schoolYear) ||
        mockHandbooks[0]
      );
    },
  },
  events: {
    findUpcoming: async (limit = 3): Promise<Event[]> => {
      try {
        const searchParams = new URLSearchParams({
          upcoming: "true",
          limit: String(limit),
        });
        const response = await fetchWithAuth(
          `${API_URL}/events?${searchParams.toString()}`,
        );
        if (response.ok) {
          const data = (await response.json()) as Event[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      return mockEvents.slice(0, limit);
    },
  },
  careerOpportunities: {
    findAll: async (filters?: {
      type?: CareerOpportunityType;
      workMode?: CareerWorkMode;
      limit?: number;
    }): Promise<CareerOpportunity[]> => {
      try {
        const searchParams = new URLSearchParams();
        if (filters?.type) searchParams.set("type", filters.type);
        if (filters?.workMode) searchParams.set("workMode", filters.workMode);
        if (filters?.limit) searchParams.set("limit", String(filters.limit));
        const query = searchParams.size ? `?${searchParams.toString()}` : "";
        const response = await fetchWithAuth(
          `${API_URL}/career-opportunities${query}`,
          { cache: "no-store" },
        );
        if (response.ok) {
          const data = (await response.json()) as CareerOpportunity[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      let items = [...mockCareerOpportunities];
      if (filters?.type) items = items.filter((i) => i.type === filters.type);
      if (filters?.workMode)
        items = items.filter((i) => i.workMode === filters.workMode);
      return filters?.limit ? items.slice(0, filters.limit) : items;
    },
  },
  popupBanners: {
    findActive: async (): Promise<PopupBanner | null> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/popup-banners/active`);
        if (!response.ok || response.status === 204) return null;
        const responseBody = await response.text();
        if (!responseBody.trim()) return null;
        return JSON.parse(responseBody) as PopupBanner | null;
      } catch {
        return null;
      }
    },
  },
  research: {
    findAll: async (type?: "PROJECT" | "PUBLICATION"): Promise<Research[]> => {
      try {
        const searchParams = new URLSearchParams();
        if (type) searchParams.append("type", type);
        const response = await fetchWithAuth(
          `${API_URL}/research?${searchParams.toString()}`,
        );
        if (response.ok) {
          const data = (await response.json()) as Research[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      if (type === "PROJECT") return mockResearchProjects;
      if (type === "PUBLICATION") return mockResearchPublications;
      return [...mockResearchProjects, ...mockResearchPublications];
    },

    findOne: async (id: string): Promise<Research> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/research/${id}`);
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const all = [...mockResearchProjects, ...mockResearchPublications];
      const mock = all.find((r) => r.id === id || r.slug === id);
      if (mock) return mock;
      throw new Error("Failed to fetch research");
    },
  },
  achievements: {
    findAll: async (filters?: {
      type?: string;
      level?: string;
      visibility?: string;
      isHighlight?: boolean;
    }): Promise<Achievement[]> => {
      try {
        const searchParams = new URLSearchParams();
        if (filters?.type) searchParams.append("type", filters.type);
        if (filters?.level) searchParams.append("level", filters.level);
        if (filters?.visibility)
          searchParams.append("visibility", filters.visibility);
        if (filters?.isHighlight !== undefined)
          searchParams.append("isHighlight", String(filters.isHighlight));

        const response = await fetchWithAuth(
          `${API_URL}/achievements?${searchParams.toString()}`,
          { cache: "no-store" },
        );
        if (response.ok) {
          const data = (await response.json()) as Achievement[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      return mockAchievements;
    },

    findOne: async (id: string): Promise<Achievement> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/achievements/${id}`, {
          cache: "no-store",
        });
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = mockAchievements.find((a) => a.id === id);
      if (mock) return mock;
      throw new Error("Failed to fetch achievement");
    },
  },
  alumniSections: {
    findAll: async (): Promise<AlumniSection[]> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/alumni-sections`);
        if (response.ok) {
          const data = (await response.json()) as AlumniSection[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      return mockAlumniSections;
    },
  },
  alumni: {
    findAll: async (): Promise<Alumni[]> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/alumni`);
        if (response.ok) {
          const data = (await response.json()) as Alumni[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      return mockAlumni;
    },

    findOne: async (id: string): Promise<Alumni> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/alumni/${id}`);
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = mockAlumni.find((a) => a.id === id || a.slug === id);
      if (mock) return mock;
      throw new Error("Failed to fetch alumni");
    },
  },
  faculty: {
    findAll: async (): Promise<Faculty[]> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/faculty`);
        if (response.ok) {
          const data = (await response.json()) as Faculty[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      return mockFaculty;
    },

    findOne: async (id: string): Promise<Faculty> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/faculty/${id}`);
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = mockFaculty.find((f) => f.id === id || f.slug === id);
      if (mock) return mock;
      throw new Error("Failed to fetch faculty");
    },

    findBySlug: async (slug: string): Promise<Faculty> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/faculty/slug/${slug}`);
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = mockFaculty.find((f) => f.slug === slug || f.id === slug);
      if (mock) return mock;
      throw new Error("Failed to fetch faculty by slug");
    },
  },
  studentPortfolio: {
    findAll: async (): Promise<StudentPortfolio[]> => {
      try {
        const response = await fetchWithAuth(`${API_URL}/student-portfolio`);
        if (response.ok) {
          const data = (await response.json()) as StudentPortfolio[];
          if (data.length > 0) return data;
        }
      } catch {
        // Fallback to mock
      }
      return mockStudentPortfolios;
    },

    findBySlug: async (slug: string): Promise<StudentPortfolio> => {
      try {
        const response = await fetchWithAuth(
          `${API_URL}/student-portfolio/${slug}`,
          { cache: "no-store" },
        );
        if (response.ok) return response.json();
      } catch {
        // Fallback to mock
      }
      const mock = mockStudentPortfolios.find(
        (p) => p.slug === slug || p.id === slug,
      );
      if (mock) return mock;
      throw new Error("Failed to fetch student portfolio");
    },
  },
};

// --- Faculty Types ---

export interface FacultyAcademicTimeline {
  id: string;
  facultyId: string;
  degree?: string;
  field?: string;
  institution?: string;
  country?: string;
  startYear?: number;
  endYear?: number;
  description?: string;
  displayOrder?: number;
}

export interface FacultyResearchArea {
  id: string;
  facultyId: string;
  title?: string;
  description?: string;
  displayOrder?: number;
}

export interface FacultyPublication {
  id: string;
  facultyId: string;
  title?: string;
  venue?: string;
  year?: number;
  publicationType?: string;
  doi?: string;
  publisherUrl?: string;
  displayOrder?: number;
}

export interface FacultyCourse {
  id: string;
  facultyId: string;
  courseId: string;
  course?: Course;
}

export interface FacultyContact {
  id: string;
  facultyId: string;
  type?: string;
  value?: string;
  visibility?: string;
}

export interface FacultyMeta {
  facultyId: string;
  profileVisibility?: string;
  lastUpdatedAt?: string;
  updatedBy?: string;
}

export interface Faculty {
  id: string;
  slug: string;
  fullName: string;
  avatarUrl?: string;
  academicTitle?: string;
  position?: string;
  department?: string;
  quote?: string;
  bioShort?: string;
  isActive?: boolean;
  createdAt: string;
  updatedAt: string;

  academicTimeline?: FacultyAcademicTimeline[];
  researchAreas?: FacultyResearchArea[];
  publications?: FacultyPublication[];
  courses?: FacultyCourse[];
  contacts?: FacultyContact[];
  meta?: FacultyMeta;
}

// --- Alumni Types ---

export interface CreateAlumniSectionDto {
  slug: string;
  titleVi?: string;
  titleEn?: string;
  descriptionVi?: string;
  descriptionEn?: string;
  displayOrder?: number;
  isActive?: boolean;
}

export interface AlumniSection extends CreateAlumniSectionDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface AlumniAcademicProfile {
  id: string;
  major?: string;
  thesisTitle?: string;
  advisor?: string;
  researchArea?: string;
  honors?: string;
  notes?: string;
}

export interface AlumniCareer {
  id: string;
  organization: string;
  role: string;
  industry?: string;
  location?: string;
  startYear?: number;
  endYear?: number;
  description?: string;
}

export interface AlumniAchievement {
  id: string;
  type?: string;
  title?: string;
  description?: string;
  year?: number;
  link?: string;
}

export interface AlumniContact {
  id: string;
  type: string;
  url?: string;
  visibility?: string;
}

export interface AlumniSectionMember {
  id: string;
  sectionId: string;
  customTitle?: string;
  customQuote?: string;
  displayOrder?: number;
  isFeatured?: boolean;
}

export interface AlumniMeta {
  alumniId: string;
  visibility?: string;
  lastVerifiedAt?: string;
  verifiedBy?: string;
}

export interface Alumni {
  id: string;
  fullName: string;
  slug: string;
  avatarUrl?: string;
  graduationYear?: number;
  program?: string;
  degree?: string;
  shortBio?: string;
  personalStory?: string;

  academicProfile?: AlumniAcademicProfile;
  careers?: AlumniCareer[];
  achievements?: AlumniAchievement[];
  contacts?: AlumniContact[];
  sectionMembers?: AlumniSectionMember[];
  meta?: AlumniMeta;

  createdAt: string;
  updatedAt: string;
}

// --- Student Portfolio Types ---

export interface StudentPortfolioSkill {
  id: string;
  category?: string;
  name: string;
  displayOrder?: number;
}

export interface StudentPortfolioProject {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  techStack?: string[];
  role?: string;
  demoUrl?: string;
  repoUrl?: string;
  isFeatured?: boolean;
  displayOrder?: number;
}

export interface StudentPortfolioExperience {
  id: string;
  organization: string;
  role: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  displayOrder?: number;
}

export interface StudentPortfolioEducation {
  id: string;
  school: string;
  degree?: string;
  field?: string;
  startYear?: number;
  endYear?: number;
  displayOrder?: number;
}

export interface StudentPortfolioAchievement {
  id: string;
  title: string;
  description?: string;
  year?: number;
  link?: string;
  displayOrder?: number;
}

export interface StudentPortfolioContact {
  id: string;
  type: string;
  value: string;
  displayOrder?: number;
}

export interface StudentPortfolio {
  id: string;
  slug: string;
  fullName: string;
  avatarUrl?: string;
  title?: string;
  shortBio?: string;
  about?: string;
  program?: string;
  studentYear?: number;
  location?: string;
  isPublished: boolean;

  skills?: StudentPortfolioSkill[];
  projects?: StudentPortfolioProject[];
  experiences?: StudentPortfolioExperience[];
  education?: StudentPortfolioEducation[];
  achievements?: StudentPortfolioAchievement[];
  contacts?: StudentPortfolioContact[];

  createdAt: string;
  updatedAt: string;
}
