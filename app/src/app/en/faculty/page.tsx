"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { api, type Faculty } from "@/lib/api";

function getInitials(fullName: string) {
  return fullName
    .trim()
    .split(/\s+/)
    .slice(-2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

function normalizeText(value?: string) {
  return (value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function FacultyPageEn() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    api.faculty
      .findAll()
      .then((data) => {
        if (active) setFaculty(data);
      })
      .catch((fetchError) => {
        console.error("Failed to fetch faculty:", fetchError);
        if (active) {
          setError("Unable to load faculty profiles at this time.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const activeFaculty = useMemo(
    () => faculty.filter((member) => member.isActive !== false),
    [faculty],
  );

  const filteredFaculty = useMemo(() => {
    const normalizedQuery = normalizeText(query.trim());
    if (!normalizedQuery) return activeFaculty;

    return activeFaculty.filter((member) =>
      normalizeText(
        [
          member.fullName,
          member.academicTitle,
          member.position,
          member.department,
          member.bioShort,
          ...(member.researchAreas || []).map((area) => area.title),
        ]
          .filter(Boolean)
          .join(" "),
      ).includes(normalizedQuery),
    );
  }, [activeFaculty, query]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <div className="animate-pulse">
            <div className="h-4 w-48 bg-[#e6f2ec]" />
            <div className="mt-7 h-14 max-w-3xl bg-[#e0ebe4]" />
            <div className="mt-4 h-14 max-w-2xl bg-[#e0ebe4]" />
            <div className="mt-16 h-16 w-full border-y border-[#e6f2ec] bg-[#f2f7f4]" />
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-[65vh] items-center bg-white px-5 sm:px-8">
        <div className="mx-auto w-full max-w-7xl border-t border-[#d5e2da] pt-10">
          <p className="font-roboto-mono text-xs uppercase tracking-[0.18em] text-[#008045]">
            Faculty Directory
          </p>
          <h1 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-[-0.03em] text-[#151823] sm:text-5xl">
            {error}
          </h1>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-9 cursor-pointer border-b border-[#008045] pb-1 text-sm font-semibold text-[#008045]"
          >
            Reload page
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#151823]">
      <section className="border-b border-[#d5e2da]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-12 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20 lg:pb-20 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 font-roboto-mono text-xs uppercase tracking-[0.18em] text-[#008045]">
              <span className="h-px w-12 bg-[#008045]" />
              Distinguished Medical Faculty
            </div>
            <h1 className="mt-7 max-w-[17ch] text-[clamp(2.55rem,5vw,4.9rem)] font-bold leading-[1.08] tracking-[-0.04em] text-balance">
              Professors & Clinicians Leading TTU School of Medicine
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="border-t border-[#1c1f1b] pt-5 lg:mb-1"
          >
            <div className="flex items-start justify-between gap-8">
              <p className="max-w-[29rem] text-sm leading-7 text-[#666963] sm:text-base">
                Explore the academic credentials, hospital leadership, and
                international publications of our US and Vietnamese faculty.
              </p>
              <span className="shrink-0 font-roboto-mono text-2xl font-semibold tabular-nums text-[#008045]">
                {String(activeFaculty.length).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-right font-roboto-mono text-[0.65rem] uppercase tracking-[0.13em] text-[#92958f]">
              Active Profiles
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <label className="mx-auto grid h-16 max-w-4xl grid-cols-[4rem_minmax(0,1fr)_auto] border border-[#d5e2da] bg-white transition-colors duration-200 focus-within:border-[#008045]">
          <span className="sr-only">Search faculty</span>
          <span className="flex h-full items-center justify-center border-r border-[#d5e2da] bg-[#f2f7f4] text-[#008045]">
            <Search className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, title, specialty or research area"
            className="min-w-0 appearance-none border-0 bg-transparent px-4 text-base font-medium text-[#20231f] outline-none placeholder:font-normal placeholder:text-[#92958f] sm:px-6 sm:text-lg [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="flex h-full w-16 shrink-0 cursor-pointer items-center justify-center border-l border-[#d5e2da] text-[#777a74] transition-colors hover:bg-[#008045] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#008045]"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </label>

        {filteredFaculty.length === 0 ? (
          <div className="border-b border-[#d5e2da] py-20 text-center">
            <p className="text-2xl font-semibold tracking-[-0.02em]">
              No matching faculty members found
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-7 cursor-pointer border-b border-[#008045] pb-1 text-sm font-semibold text-[#008045]"
            >
              Show all faculty
            </button>
          </div>
        ) : (
          <div className="mt-14 grid gap-x-12 gap-y-16 lg:grid-cols-2 lg:gap-y-20">
            {filteredFaculty.map((member, index) => {
              const detailHref = `/vi/giang-vien/${member.slug}`;
              const profileStats = [
                {
                  value: member.publications?.length || 0,
                  label: "Publications",
                },
                {
                  value: member.academicTimeline?.length || 0,
                  label: "Credentials",
                },
                {
                  value: member.researchAreas?.length || 0,
                  label: "Specialties",
                },
              ].filter((item) => item.value > 0);

              return (
                <motion.article
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: Math.min(index * 0.06, 0.3),
                  }}
                  className="group border-t border-[#1c1f1b] pt-5"
                >
                  <div className="grid gap-6 sm:grid-cols-[minmax(10rem,0.42fr)_minmax(0,0.58fr)] sm:gap-7">
                    <Link
                      href={detailHref}
                      className="relative block cursor-pointer overflow-hidden bg-[#e6f2ec]"
                      aria-label={`View profile of ${member.fullName}`}
                    >
                      <div className="aspect-[3/4] overflow-hidden">
                        {member.avatarUrl ? (
                          <img
                            src={member.avatarUrl}
                            alt={`Portrait of ${member.fullName}`}
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
                          />
                        ) : (
                          <div className="flex h-full items-end bg-[linear-gradient(145deg,#f2f7f4_0%,#d4e9dd_100%)] p-6">
                            <span className="text-5xl font-bold tracking-[-0.07em] text-[#008045]">
                              {getInitials(member.fullName)}
                            </span>
                          </div>
                        )}
                      </div>
                      <span className="absolute bottom-0 left-0 h-1.5 w-20 bg-[#008045] transition-[width] duration-300 group-hover:w-full" />
                    </Link>

                    <div className="flex min-w-0 flex-col sm:py-1">
                      <p className="font-roboto-mono text-[0.68rem] uppercase leading-5 tracking-[0.13em] text-[#008045]">
                        {member.position?.split(/\s+[–—-]\s+/)[0] ||
                          "Faculty"}
                      </p>
                      <Link href={detailHref} className="cursor-pointer">
                        <h2 className="mt-3 text-[1.65rem] font-bold leading-[1.16] tracking-[-0.035em] text-[#1c1f1b] transition-colors group-hover:text-[#008045] sm:text-[1.85rem]">
                          {member.academicTitle &&
                            `${member.academicTitle.replace(/\.+$/, "")}. `}
                          {member.fullName}
                        </h2>
                      </Link>
                      <p className="mt-5 line-clamp-4 text-sm leading-7 text-[#666963]">
                        {member.bioShort ||
                          member.quote ||
                          "Clinical expertise and academic profile at Tan Tao University School of Medicine."}
                      </p>

                      <div className="mt-auto pt-7">
                        {profileStats.length > 0 && (
                          <dl className="mb-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#d5e2da] pt-4">
                            {profileStats.map((item) => (
                              <div
                                key={item.label}
                                className="flex items-baseline gap-1.5"
                              >
                                <dd className="font-roboto-mono text-sm font-semibold tabular-nums text-[#252824]">
                                  {item.value}
                                </dd>
                                <dt className="text-[0.68rem] text-[#858882]">
                                  {item.label}
                                </dt>
                              </div>
                            ))}
                          </dl>
                        )}

                        <Link
                          href={detailHref}
                          className="inline-flex cursor-pointer items-center gap-2 border-b border-[#008045] pb-1 text-sm font-semibold text-[#008045]"
                        >
                          View Profile
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
