"use client";

import { experienceData, educationData } from "@/data/experience";
import { Briefcase, GraduationCap, CheckCircle2, ShieldAlert } from "lucide-react";

interface ExperienceSectionProps {
  lang: "en" | "ar";
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="py-28 bg-[#0B0D12] border-t border-white/[0.06] relative"
      aria-label="Professional experience and academic background"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151D] border border-white/[0.06] text-xs font-mono text-[#3478F6] uppercase tracking-wider mb-4">
            <span>{lang === "ar" ? "المسيرة المهنية" : "Career Track"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-5">
            {lang === "ar"
              ? "خبرة عملية وتطور هندسي مستمر."
              : "Practical Experience & Technical Growth."}
          </h2>

          <p className="text-base text-[#A5ADBA] leading-relaxed">
            {lang === "ar"
              ? "مسيرة ترتكز على التعاون الهندسي داخل الفرق البرمجية، وتسليم مشاريع تجارية حقيقية لعملاء مباشرين، ودراسة أكاديمية تغذي التفكير التحليلي."
              : "A trajectory combining collaborative agile team engineering, direct commercial deliveries for clients, and scientific education that reinforces structured reasoning."}
          </p>
        </div>

        {/* Dual Grid: Work Experience on Left, Education & Integrity Notice on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Professional Work Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-[#3478F6]" />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#3478F6]">
                {lang === "ar" ? "الخبرات والتدريب المهني" : "Work Experience"}
              </h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="p-6 sm:p-7 rounded-2xl bg-[#11151D] border border-white/[0.06] hover:border-[#3478F6]/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-[#F5F7FA]">
                        {lang === "ar" ? item.roleAr : item.role}
                      </h4>
                      <p className="text-sm font-semibold text-[#3478F6]">
                        {lang === "ar" ? item.companyAr : item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#A5ADBA] px-3 py-1 rounded-full bg-[#0B0D12] border border-white/5">
                        {lang === "ar" ? item.periodAr : item.period}
                      </span>
                    </div>
                  </div>

                  {item.verificationStatus === "draft-verification-needed" && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#3478F6]/10 text-[11px] font-mono text-[#6EA1FF]">
                      <span>
                        {lang === "ar"
                          ? "ℹ️ قيد التحقق والتأكيد النهائي قبل الاعتماد الرسمي"
                          : "ℹ️ Draft timeline record pending final HR verification"}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-2 mt-4">
                    {(lang === "ar" ? item.highlightsAr : item.highlights).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#A5ADBA]">
                        <CheckCircle2 size={14} className="text-[#3478F6] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education & Integrity Notes */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} className="text-[#3478F6]" />
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#3478F6]">
                {lang === "ar" ? "التعليم الأكاديمي والتأهيل" : "Education & Academic Foundations"}
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#11151D] border border-white/[0.06]"
                >
                  <span className="text-xs font-mono text-[#3478F6] block mb-1">
                    {lang === "ar" ? edu.periodAr : edu.period}
                  </span>
                  <h4 className="text-base font-bold text-[#F5F7FA] mb-0.5">
                    {lang === "ar" ? edu.degreeAr : edu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-[#A5ADBA] mb-3">
                    {lang === "ar" ? edu.institutionAr : edu.institution}
                  </p>
                  <p className="text-xs text-[#A5ADBA] leading-relaxed mb-3">
                    {lang === "ar" ? edu.descriptionAr : edu.description}
                  </p>
                  <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#0B0D12] text-[#6EA1FF] border border-white/5">
                    {lang === "ar" ? edu.gradeAr : edu.grade}
                  </span>
                </div>
              ))}
            </div>

            {/* Testimonials Transparency Card (Mandatory Rule Compliance) */}
            <div className="p-6 rounded-2xl bg-[#11151D]/60 border border-white/[0.06] space-y-3">
              <div className="flex items-center gap-2 text-[#6EA1FF]">
                <ShieldAlert size={16} />
                <h4 className="text-xs font-mono uppercase font-semibold">
                  {lang === "ar"
                    ? "الشفافية والمصداقية المهنية"
                    : "Client Testimonials Policy"}
                </h4>
              </div>
              <p className="text-xs text-[#A5ADBA] leading-relaxed">
                {lang === "ar"
                  ? "التزاماً بأعلى معايير المصداقية وعدم نشر شهادات عملاء دون تفويض كتابي رسمي، يتم إتاحة التوصيات الموثقة وسجلات التقييم عبر المنصات المعتمدة (مستقل، خمسات، ولينكد إن) بدلاً من نشر شهادات مجهولة."
                  : "To uphold strict professional integrity, client quotes and recommendations are only displayed after explicit written authorization. Verified ratings and public client reviews can be inspected directly on Mostaql, Khamsat, and LinkedIn profiles."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

