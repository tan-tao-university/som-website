<p align="center">
  <img src="app/public/assets/ttu-logo.png" alt="School of Medicine, Tan Tao University" width="140">
</p>

<h1 align="center">SOM Website</h1>
<p align="center">School of Medicine (Khoa Y) &middot; Tan Tao University</p>

<p align="center">
  <a href="https://medicine.ttu.edu.vn"><img src="https://img.shields.io/badge/website-medicine.ttu.edu.vn-008045?style=for-the-badge" alt="Website"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="MIT License"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" alt="pnpm">
</p>

**SOM Website** is the official web platform for the **School of Medicine (Khoa Y)** at **Tan Tao University** — a Next.js public site, a Next.js admin dashboard, and a NestJS API, managed as one pnpm workspace. It showcases the USMLE-integrated Doctor of Medicine (MD), Bachelor of Nursing, and Medical Laboratory Technology programs, 3D Anatomage & OSCE pre-clinical laboratories, US & Vietnamese affiliated teaching hospitals, international ISI/Scopus research publications, and student life, fully bilingual (Vietnamese / English).

- **Brand Primary Color**: `#008045` (`RGB(0, 128, 69)`, `CMYK(87, 24, 89, 9)`)
- **Educational Philosophy**: *"Y học Hoa Kỳ – Y đức Hải Thượng"* (*American Medicine – Hai Thuong Medical Ethics*)

[Website](https://medicine.ttu.edu.vn) &middot; [Email](mailto:medicine@ttu.edu.vn)

## Stack

| Layer | Path | Stack |
|---|---|---|
| Public site | `app/` | Next.js 16, TypeScript, Tailwind CSS v4, Radix UI, next-intl |
| Dashboard | `dashboard/` | Next.js, TypeScript, admin UI for content management |
| Backend | `backend/` | NestJS, Drizzle ORM, PostgreSQL |

Package manager: pnpm workspaces.

## Quick start

```bash
pnpm install

# root env vars shared by app + dashboard
cp .env.shared.example .env.shared

# backend env vars + database
cd backend && cp .env.example .env && pnpm db:push && cd ..

pnpm build
pnpm start
```

| Service | URL |
|---|---|
| Public app | http://localhost:3000 |
| Dashboard | http://localhost:4000 |
| Backend API | http://localhost:8080 |

## Contact

- Website: [medicine.ttu.edu.vn](https://medicine.ttu.edu.vn)
- Email: [medicine@ttu.edu.vn](mailto:medicine@ttu.edu.vn)
- Tan Tao University, Duc Hoa, Long An, Vietnam
