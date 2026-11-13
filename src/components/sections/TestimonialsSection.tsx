"use client";

import { ExternalLink, Star } from "lucide-react";
import { KHAMSAT_REVIEWS_URL, testimonials, type Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  lang: "en" | "ar";
}

function Stars({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={label}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-[#6EA1FF] text-[#6EA1FF]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t, lang }: { t: Testimonial; lang: "en" | "ar" }) {
  const initial = (lang === "ar" && t.clientAr ? t.clientAr : t.client)
    .trim()
    .charAt(0)
    .toUpperCase();

  return (
    <a
      href={t.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col p-6 rounded-2xl bg-[#11151D] border border-white/[0.06] hover:border-[#3478F6]/40 hover:bg-[#11151D]/80 transition-all duration-300"
      aria-label={
        lang === "ar"
          ? `تقييم من ${t.client} على خمسات — 5 من 5 نجوم`
          : `Review by ${t.client} on Khamsat — rated 5 out of 5`
      }
    >
      {/* Card Header: Client Identity */}
      <div className="flex items-center gap-3.5 mb-4">
        <span
          className="w-10 h-10 rounded-full bg-[#3478F6]/10 border border-[#3478F6]/25 text-[#6EA1FF] font-bold text-sm flex items-center justify-center shrink-0"
          aria-hidden="true"
        >
          {initial}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#F5F7FA] truncate" dir="auto">
            {lang === "ar" && t.clientAr ? t.clientAr : t.client}
          </p>
          <p className="text-[11px] text-[#A5ADBA]">
            {lang === "ar" ? t.projectAr : t.project}
          </p>
        </div>
        <div className="ms-auto shrink-0">
          <Stars
            label={lang === "ar" ? "تقييم 5 من 5 نجوم" : "Rated 5 out of 5 stars"}
          />
        </div>
      </div>

      {/* Original Review Text — preserved exactly as written (Arabic, RTL) */}
      <p
        dir="rtl"
        lang="ar"
        className="flex-1 text-sm leading-loose text-[#F5F7FA]/90 text-start"
        style={{ fontFamily: "var(--font-cairo), 'Noto Sans Arabic', sans-serif" }}
      >
        {t.review}
      </p>

      {/* Source Attribution */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.05]">
        <span className="text-[11px] font-mono text-[#A5ADBA]">
          {lang === "ar" ? "عبر" : "via"}{" "}
          <span className="text-[#6EA1FF]">Khamsat</span>
          {lang === "ar" ? " (خمسات)" : ""}
        </span>
        <ExternalLink
          size={13}
          className="text-[#A5ADBA] group-hover:text-[#3478F6] transition-colors"
          aria-hidden="true"
        />
      </div>
    </a>
  );
}

export function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className="py-28 bg-[#0B0D12] border-t border-white/[0.06] relative"
      aria-label="Client testimonials from Khamsat"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151D] border border-white/[0.06] text-xs font-mono text-[#3478F6] uppercase tracking-wider mb-4">
            <span>{lang === "ar" ? "آراء العملاء" : "Social Proof"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-5">
            {lang === "ar" ? "آراء العملاء" : "Client Testimonials"}
          </h2>

          <p className="text-base text-[#A5ADBA] leading-relaxed">
            {lang === "ar"
              ? "ثقة العملاء هي أساس كل ما نبنيه."
              : "Trusted by clients. Built with care."}
          </p>
        </div>

        {/* Verified Rating Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 p-6 rounded-2xl bg-[#11151D]/60 border border-white/[0.06] mb-10">
          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl font-extrabold text-[#F5F7FA] leading-none">
              5.0
              <span className="text-lg font-semibold text-[#A5ADBA]">/5</span>
            </span>
            <div className="space-y-1.5">
              <Stars
                label={lang === "ar" ? "متوسط التقييم 5 من 5" : "Average rating 5 out of 5"}
              />
              <p className="text-xs text-[#A5ADBA]">
                {lang === "ar"
                  ? "4 تقييمات مكتملة من العملاء على خمسات"
                  : "4 completed client reviews on Khamsat"}
              </p>
            </div>
          </div>

          <a
            href={KHAMSAT_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:ms-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B0D12] border border-white/10 hover:border-[#3478F6]/50 text-xs font-semibold text-[#F5F7FA] hover:text-[#6EA1FF] transition-all"
          >
            <span>
              {lang === "ar" ? "عرض جميع التقييمات على خمسات" : "View all reviews on Khamsat"}
            </span>
            <ExternalLink size={12} className="text-[#3478F6]" aria-hidden="true" />
          </a>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
