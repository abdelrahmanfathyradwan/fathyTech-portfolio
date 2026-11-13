"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  lang: "en" | "ar";
}

const TECH_PILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "SEO",
  "Automation",
  "Node.js",
  "Tailwind CSS",
];

export function HeroSection({ lang }: HeroSectionProps) {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0B0D12]"
      aria-label="Introduction and hero overview"
    >
      {/* Controlled Blue Radial Glow */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#3478F6]/[0.16] via-[#6EA1FF]/[0.05] to-transparent rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Matrix / Grid Backdrop */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,247,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,247,250,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Avatar Profile Pill with User's Photo */}
          <div className="flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#11151D] border border-white/[0.08] mb-8 shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#3478F6]/50">
              <Image
                src="/abdelrahman-fathy-portrait.jpg"
                alt="Abdelrahman Fathy"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-[#A5ADBA]">
                {lang === "ar"
                  ? "متاح حالياً للمشاريع والفرص الهندسية"
                  : "Available for engineering roles & select projects"}
              </span>
            </div>
          </div>

          {/* Brand Label */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#3478F6]">
              {lang === "ar" ? "مؤسس FathyTech" : "Founder of FathyTech"}
            </span>
          </div>

          {/* Personal Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F7FA] leading-[1.05]">
            {lang === "ar" ? "عبدالرحمن فتحي" : "Abdelrahman Fathy"}
          </h1>

          {/* Professional Title */}
          <p className="mt-3 text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.28em] text-[#A5ADBA]">
            {lang === "ar" ? "مهندس منتجات" : "Product Engineer"}
          </p>

          {/* Headline */}
          <h2 className="mt-7 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F7FA] leading-[1.15]">
            {lang === "ar" ? (
              <>
                أبني تجارب رقمية
                <span className="gradient-text"> لها أثر حقيقي.</span>
              </>
            ) : (
              <>
                Building Digital Experiences
                <span className="gradient-text"> That Matter.</span>
              </>
            )}
          </h2>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#A5ADBA] leading-relaxed max-w-2xl mt-5 mb-8">
            {lang === "ar"
              ? "أحوّل الأفكار إلى منتجات رقمية عملية وعالية الجودة من خلال تطوير الويب الحديث، وتجارب المستخدم المدروسة، وتحسين محركات البحث، وأتمتة مسارات العمل."
              : "I transform ideas into functional, high-quality digital products through modern web development, thoughtful user experiences, SEO, and workflow automation."}
          </p>

          {/* Technology Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl">
            {TECH_PILLS.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1 rounded-full bg-[#11151D] border border-white/[0.07] text-xs font-mono text-[#F5F7FA] hover:border-[#3478F6]/50 hover:text-[#6EA1FF] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#3478F6] hover:bg-[#3478F6]/90 text-white font-semibold text-sm transition-all shadow-[0_0_30px_rgba(52,120,246,0.35)] hover:shadow-[0_0_40px_rgba(52,120,246,0.55)] active:scale-[0.98]"
            >
              <span>{lang === "ar" ? "استكشف أعمالي" : "Explore My Work"}</span>
              <ArrowDown size={15} />
            </button>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#11151D] hover:bg-white/[0.05] border border-white/10 hover:border-[#3478F6]/40 text-[#F5F7FA] font-semibold text-sm transition-all active:scale-[0.98]"
            >
              <span>{lang === "ar" ? "لنعمل معاً" : "Let's Work Together"}</span>
              <ArrowUpRight size={15} className="text-[#3478F6]" />
            </button>
          </div>

          {/* Trust Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-14 mt-12 border-t border-white/[0.06] text-start w-full">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#3478F6] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#F5F7FA]">
                  {lang === "ar" ? "سيو تقني من البداية" : "Built-in SEO"}
                </p>
                <p className="text-xs text-[#A5ADBA]">
                  {lang === "ar" ? "بنية مهيكلة لفهرسة سريعة" : "Clean semantic structure"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#3478F6] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#F5F7FA]">
                  {lang === "ar" ? "أداء فائق السرعة" : "Sub-second Speed"}
                </p>
                <p className="text-xs text-[#A5ADBA]">
                  {lang === "ar" ? "تحسين مؤشرات Core Web Vitals" : "Optimized Core Web Vitals"}
                </p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#3478F6] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#F5F7FA]">
                  {lang === "ar" ? "دعم عربي RTL متقن" : "Bilingual Native RTL"}
                </p>
                <p className="text-xs text-[#A5ADBA]">
                  {lang === "ar" ? "تجربة مستخدم عربية أصيلة" : "Zero visual compromise"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
