"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertCircle,
  X,
  Code,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectsSectionProps {
  lang: "en" | "ar";
}

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Web Applications",
  "Dashboards",
  "E-commerce",
  "SEO",
  "Automation",
  "Education",
];

const CATEGORIES_AR: Record<ProjectCategory, string> = {
  All: "الكل",
  "Web Applications": "تطبيقات الويب",
  Dashboards: "لوحات التحكم",
  "E-commerce": "التجارة الإلكترونية",
  SEO: "تحسين محركات البحث",
  Automation: "الأتمتة وn8n",
  Education: "التعليم والأكاديميات",
};

export function ProjectsSection({ lang }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-28 bg-[#0B0D12] border-t border-white/[0.06] relative"
      aria-label="Projects and detailed engineering case studies"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151D] border border-white/[0.06] text-xs font-mono text-[#3478F6] uppercase tracking-wider mb-4">
              <span>{lang === "ar" ? "معرض الأعمال" : "Featured Case Studies & Work"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-4">
              {lang === "ar"
                ? "مشاريع صُممت لتحدث أثراً حقيقياً."
                : "Engineered for Measurable Impact."}
            </h2>
            <p className="text-base text-[#A5ADBA]">
              {lang === "ar"
                ? "دراسات حالة حقيقية توضح المشكلة والهدف ومساهمتي الهندسية والحل المنفذ دون مبالغات أو أرقام وهمية."
                : "Transparent case studies detailing the business problem, engineering objective, actual contribution, and verified outcomes."}
            </p>
          </div>

          {/* Status Integrity Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#11151D] border border-white/[0.08] text-xs text-[#A5ADBA] self-start md:self-auto">
            <ShieldCheck size={14} className="text-[#3478F6]" />
            <span>
              {lang === "ar"
                ? "بيانات موثوقة وروابط حقيقية فقط"
                : "Zero fabricated results or fake metrics"}
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-[#3478F6] text-white shadow-[0_0_20px_rgba(52,120,246,0.3)]"
                  : "bg-[#11151D] text-[#A5ADBA] border border-white/[0.06] hover:text-[#F5F7FA] hover:border-white/20"
              }`}
            >
              {lang === "ar" ? CATEGORIES_AR[cat] : cat}
            </button>
          ))}
        </div>

        {/* Featured Case Studies (Detailed Art-Directed Cards) */}
        {featuredProjects.length > 0 && (
          <div className="space-y-10 mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#3478F6]">
              {lang === "ar" ? "دراسات الحالة الرئيسية" : "In-Depth Case Studies"}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#11151D] border border-white/[0.07] p-7 flex flex-col justify-between hover:border-[#3478F6]/40 transition-all group hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    {/* Header: Category & Code Links */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#0B0D12] text-[#3478F6] border border-[#3478F6]/20">
                        {lang === "ar" ? CATEGORIES_AR[project.category] : project.category}
                      </span>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#0B0D12] text-[#A5ADBA] hover:text-[#F5F7FA] border border-white/5 hover:border-white/20 transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <GithubIcon size={15} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#0B0D12] text-[#A5ADBA] hover:text-[#F5F7FA] border border-white/5 hover:border-white/20 transition-colors"
                            aria-label={`Visit live demo of ${project.title}`}
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-[#F5F7FA] group-hover:text-[#6EA1FF] transition-colors mb-2">
                      {lang === "ar" ? project.titleAr : project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#3478F6] mb-4">
                      {lang === "ar" ? project.subtitleAr : project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#A5ADBA] leading-relaxed mb-6">
                      {lang === "ar" ? project.descriptionAr : project.description}
                    </p>

                    {/* Problem / Objective Snippet */}
                    {project.caseStudy && (
                      <div className="p-3.5 rounded-xl bg-[#0B0D12] border border-white/[0.04] mb-6 space-y-2 text-xs">
                        <div>
                          <span className="text-[#3478F6] font-semibold">
                            {lang === "ar" ? "المشكلة: " : "Problem: "}
                          </span>
                          <span className="text-[#A5ADBA] line-clamp-2">
                            {lang === "ar"
                              ? project.caseStudy.problemAr
                              : project.caseStudy.problem}
                          </span>
                        </div>
                        <div>
                          <span className="text-emerald-400 font-semibold">
                            {lang === "ar" ? "النتيجة: " : "Outcome: "}
                          </span>
                          <span className="text-[#A5ADBA] line-clamp-2">
                            {lang === "ar"
                              ? project.caseStudy.resultAr
                              : project.caseStudy.result}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0B0D12] text-[#A5ADBA] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Case Study Read Button */}
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] hover:bg-[#3478F6] text-xs font-semibold text-[#F5F7FA] transition-all hover:shadow-[0_0_20px_rgba(52,120,246,0.3)]"
                    >
                      <span>{lang === "ar" ? "قراءة دراسة الحالة كاملة" : "Read Full Case Study"}</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div className="space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#3478F6]">
              {lang === "ar" ? "مشاريع وأنظمة إضافية" : "Additional Systems & Integrations"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#11151D]/60 border border-white/[0.05] p-6 flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#A5ADBA]">
                        {lang === "ar" ? CATEGORIES_AR[project.category] : project.category}
                      </span>
                      {project.status === "draft" && (
                        <span className="text-[10px] font-mono text-[#A5ADBA]/60">
                          {lang === "ar" ? "قيد التجهيز للعرض" : "Catalogued Draft"}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-[#F5F7FA] mb-1">
                      {lang === "ar" ? project.titleAr : project.title}
                    </h4>
                    <p className="text-xs text-[#3478F6] font-mono mb-3">
                      {lang === "ar" ? project.subtitleAr : project.subtitle}
                    </p>

                    <p className="text-xs text-[#A5ADBA] leading-relaxed mb-4">
                      {lang === "ar" ? project.descriptionAr : project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-[#A5ADBA] bg-[#0B0D12] px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal Drawer */}
      {selectedCaseStudy && selectedCaseStudy.caseStudy && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0D12]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#11151D] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-[#0B0D12] text-[#A5ADBA] hover:text-[#F5F7FA] border border-white/10"
              aria-label="Close case study details"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-8">
              <span className="text-xs font-mono text-[#3478F6] uppercase tracking-wider block mb-2">
                {lang === "ar"
                  ? CATEGORIES_AR[selectedCaseStudy.category]
                  : selectedCaseStudy.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] mb-2">
                {lang === "ar" ? selectedCaseStudy.titleAr : selectedCaseStudy.title}
              </h3>
              <p className="text-sm font-mono text-[#6EA1FF]">
                {lang === "ar" ? selectedCaseStudy.subtitleAr : selectedCaseStudy.subtitle}
              </p>
            </div>

            {/* Case Study Sections */}
            <div className="space-y-6 text-sm text-[#A5ADBA]">
              {/* Problem */}
              <div className="p-4 rounded-xl bg-[#0B0D12] border border-white/[0.05]">
                <h4 className="text-xs font-mono uppercase text-[#3478F6] tracking-wider mb-1.5">
                  {lang === "ar" ? "المشكلة التجارية" : "The Business Challenge"}
                </h4>
                <p className="leading-relaxed">
                  {lang === "ar"
                    ? selectedCaseStudy.caseStudy.problemAr
                    : selectedCaseStudy.caseStudy.problem}
                </p>
              </div>

              {/* Objective */}
              <div className="p-4 rounded-xl bg-[#0B0D12] border border-white/[0.05]">
                <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-1.5">
                  {lang === "ar" ? "الهدف الهندسي" : "Engineering Objective"}
                </h4>
                <p className="leading-relaxed">
                  {lang === "ar"
                    ? selectedCaseStudy.caseStudy.objectiveAr
                    : selectedCaseStudy.caseStudy.objective}
                </p>
              </div>

              {/* My Contribution */}
              <div className="p-4 rounded-xl bg-[#0B0D12] border border-white/[0.05]">
                <h4 className="text-xs font-mono uppercase text-[#6EA1FF] tracking-wider mb-1.5">
                  {lang === "ar" ? "مساهمتي ودوري" : "My Role & Contribution"}
                </h4>
                <p className="leading-relaxed">
                  {lang === "ar"
                    ? selectedCaseStudy.caseStudy.contributionAr
                    : selectedCaseStudy.caseStudy.contribution}
                </p>
              </div>

              {/* Solution Pillars */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[#F5F7FA] tracking-wider mb-3">
                  {lang === "ar" ? "خطوات الحل الهندسي" : "Engineered Solution Pillars"}
                </h4>
                <div className="space-y-2">
                  {(lang === "ar"
                    ? selectedCaseStudy.caseStudy.solutionAr
                    : selectedCaseStudy.caseStudy.solution
                  ).map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#3478F6] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#F5F7FA]">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome & Result */}
              {selectedCaseStudy.caseStudy.result && (
                <div className="p-4 rounded-xl bg-[#3478F6]/10 border border-[#3478F6]/30">
                  <h4 className="text-xs font-mono uppercase text-[#6EA1FF] tracking-wider mb-1.5">
                    {lang === "ar" ? "النتيجة المحققة" : "Reported Outcome"}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F5F7FA] leading-relaxed">
                    {lang === "ar"
                      ? selectedCaseStudy.caseStudy.resultAr
                      : selectedCaseStudy.caseStudy.result}
                  </p>
                  {selectedCaseStudy.caseStudy.verificationNote && (
                    <p className="text-[11px] text-[#A5ADBA] mt-2 pt-2 border-t border-white/[0.06] italic">
                      ℹ️{" "}
                      {lang === "ar"
                        ? selectedCaseStudy.caseStudy.verificationNoteAr
                        : selectedCaseStudy.caseStudy.verificationNote}
                    </p>
                  )}
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase text-[#F5F7FA] tracking-wider mb-2">
                  {lang === "ar" ? "التقنيات المستخدمة" : "Technologies Used"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-[#0B0D12] text-xs font-mono text-[#F5F7FA] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Action */}
              <div className="pt-4 flex items-center gap-4">
                {selectedCaseStudy.githubUrl && (
                  <a
                    href={selectedCaseStudy.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B0D12] hover:bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#F5F7FA] transition-colors"
                  >
                    <GithubIcon size={15} />
                    <span>{lang === "ar" ? "المستودع على GitHub" : "View Source on GitHub"}</span>
                  </a>
                )}
                {selectedCaseStudy.liveUrl && (
                  <a
                    href={selectedCaseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3478F6] text-white text-xs font-semibold hover:bg-[#3478F6]/90 transition-colors"
                  >
                    <span>{lang === "ar" ? "زيارة الموقع الحي" : "Live Demo"}</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
