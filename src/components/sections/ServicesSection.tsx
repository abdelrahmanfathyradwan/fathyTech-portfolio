"use client";

import { servicesData, processSteps } from "@/data/services";
import { ArrowUpRight, Check, Sparkles, Workflow } from "lucide-react";

interface ServicesSectionProps {
  lang: "en" | "ar";
}

export function ServicesSection({ lang }: ServicesSectionProps) {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-28 bg-[#0B0D12] border-t border-white/[0.06] relative"
      aria-label="Engineering services and client collaboration process"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151D] border border-white/[0.06] text-xs font-mono text-[#3478F6] uppercase tracking-wider mb-4">
              <span>{lang === "ar" ? "نطاق الخدمات" : "Scope of Services"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-4">
              {lang === "ar" ? "ما يمكنني بناؤه وتطويره لك" : "What I Can Build for You."}
            </h2>

            <p className="text-base text-[#A5ADBA] leading-relaxed">
              {lang === "ar"
                ? "حلول برمجية مخصصة للشركات والمؤسسات والرواد تركز على القيمة والأثر التجاري، مبنية بأحدث معايير الأداء والسرعة."
                : "Tailored engineering capabilities built around real business objectives, designed for measurable speed, search visibility, and reliability."}
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="self-start md:self-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3478F6] hover:bg-[#3478F6]/90 text-white font-semibold text-xs transition-all shadow-[0_0_25px_rgba(52,120,246,0.3)] hover:shadow-[0_0_35px_rgba(52,120,246,0.5)] active:scale-95"
          >
            <span>{lang === "ar" ? "طلب تقدير للمشروع" : "Request a Project Estimate"}</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl bg-[#11151D] border border-white/[0.06] hover:border-[#3478F6]/40 transition-all flex flex-col justify-between group hover:shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#3478F6]">
                    {service.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3478F6] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-bold text-[#F5F7FA] mb-2 group-hover:text-[#6EA1FF] transition-colors leading-snug">
                  {lang === "ar" ? service.titleAr : service.title}
                </h3>

                <p className="text-xs text-[#3478F6] font-mono mb-3 leading-relaxed">
                  {lang === "ar" ? service.taglineAr : service.tagline}
                </p>

                <p className="text-xs text-[#A5ADBA] leading-relaxed mb-6">
                  {lang === "ar" ? service.descriptionAr : service.description}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#F5F7FA] mb-3 pt-4 border-t border-white/[0.05]">
                  {lang === "ar" ? "المخرجات والتسليمات:" : "Core Deliverables:"}
                </p>
                <ul className="space-y-1.5">
                  {(lang === "ar" ? service.deliverablesAr : service.deliverables).map(
                    (item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#A5ADBA]">
                        <Check size={12} className="text-[#3478F6] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Step Process Section */}
        <div className="pt-16 border-t border-white/[0.06]">
          <div className="max-w-2xl mb-12">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#3478F6] mb-3">
              {lang === "ar" ? "منهجية العمل والتعاقد" : "The 5-Phase Delivery Process"}
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] mb-2">
              {lang === "ar"
                ? "كيف نحول متطلباتك إلى واقع رقمي مستقر"
                : "Predictable, Transparent Engineering Delivery."}
            </p>
            <p className="text-xs sm:text-sm text-[#A5ADBA]">
              {lang === "ar"
                ? "خطوات واضحة تبدأ من التحليل الأولي وحتى الإطلاق ومتابعة الأداء بعد التسليم."
                : "A structured process designed to eliminate ambiguity, ensure technical quality, and keep you informed every step."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-[#11151D]/70 border border-white/[0.06] relative"
              >
                <span className="font-mono text-2xl font-extrabold text-[#3478F6]/40 block mb-2">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-[#F5F7FA] mb-2">
                  {lang === "ar" ? step.titleAr : step.title}
                </h4>
                <p className="text-xs text-[#A5ADBA] leading-relaxed">
                  {lang === "ar" ? step.descriptionAr : step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#11151D] via-[#11151D] to-[#3478F6]/10 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-[#F5F7FA] mb-1">
                {lang === "ar"
                  ? "هل لديك فكرة أو متطلبات لمشروعك القادم؟"
                  : "Have a project or engineering need in mind?"}
              </h4>
              <p className="text-xs sm:text-sm text-[#A5ADBA]">
                {lang === "ar"
                  ? "شاركني التفاصيل وسأساعدك في تحديد البنية الهندسية الأنسب وخطة التنفيذ."
                  : "Let's review your requirements and identify the most efficient technical architecture."}
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="shrink-0 px-6 py-3 rounded-full bg-[#3478F6] hover:bg-[#3478F6]/90 text-white font-semibold text-xs transition-all shadow-[0_0_20px_rgba(52,120,246,0.3)]"
            >
              {lang === "ar" ? "طلب تقدير للمشروع" : "Request a Project Estimate"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

