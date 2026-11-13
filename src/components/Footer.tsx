"use client";

import { ExternalLink, ArrowUp, Code2, Phone, Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, FathyTechMark } from "@/components/ui/Icons";

interface FooterProps {
  lang: "en" | "ar";
}

export function Footer({ lang }: FooterProps) {
  const currentYear = "2026";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#07090D] border-t border-white/[0.06] pt-16 pb-12 overflow-hidden">
      {/* Subtle bottom gradient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#3478F6]/[0.03] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/[0.06]">
          {/* Col 1: Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#11151D] border border-white/10 flex items-center justify-center">
                <FathyTechMark className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-lg text-[#F5F7FA] block leading-tight">
                  FathyTech
                  <span className="text-[#3478F6]">.</span>
                </span>
                <span className="text-xs font-mono text-[#3478F6]">By Abdelrahman Fathy</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A5ADBA] leading-relaxed max-w-md">
              {lang === "ar"
                ? "FathyTech هي العلامة التقنية المستقلة لعبدالرحمن فتحي، مهندس منتجات يركز على الواجهات الأمامية، متخصص في بناء تطبيقات ويب متطورة بـ React وNext.js وTypeScript، مع معمارية صديقة لمحركات البحث وأتمتة مسارات العمل."
                : "FathyTech is the independent technology brand of Abdelrahman Fathy — a frontend-focused Product Engineer specializing in modern web applications, React, Next.js, TypeScript, SEO-friendly architecture, and resilient workflow automation."}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151D] border border-white/[0.06] text-xs text-[#A5ADBA]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {lang === "ar" ? "متاح للتعاقد والفرص الهندسية" : "Open for engineering roles & select projects"}
              </span>
            </div>
          </div>

          {/* Col 2: Direct Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider font-mono">
              {lang === "ar" ? "بيانات التواصل المباشر" : "Direct Contact Details"}
            </p>
            <ul className="space-y-2.5 text-xs text-[#A5ADBA]">
              <li>
                <a
                  href="mailto:afat7i2005@gmail.com"
                  className="inline-flex items-center gap-2.5 text-[#F5F7FA] hover:text-[#6EA1FF] transition-colors p-2 rounded-lg bg-[#11151D] border border-white/5 w-full"
                >
                  <Mail size={15} className="text-[#3478F6] shrink-0" />
                  <span className="font-mono">afat7i2005@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201220407008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[#F5F7FA] hover:text-emerald-400 transition-colors p-2 rounded-lg bg-[#11151D] border border-white/5 w-full"
                >
                  <MessageCircle size={15} className="text-emerald-400 shrink-0" />
                  <span className="font-mono">+20 122 040 7008 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201220407008"
                  className="inline-flex items-center gap-2.5 text-[#F5F7FA] hover:text-[#6EA1FF] transition-colors p-2 rounded-lg bg-[#11151D] border border-white/5 w-full"
                >
                  <Phone size={15} className="text-[#3478F6] shrink-0" />
                  <span className="font-mono">+20 122 040 7008 (Call)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Profiles & Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-[#F5F7FA] uppercase tracking-wider font-mono">
              {lang === "ar" ? "الملفات المهنية" : "Professional Profiles"}
            </p>
            <ul className="space-y-2 text-xs text-[#A5ADBA]">
              <li>
                <a
                  href="https://linkedin.com/in/abdelrahmanfathyradwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#6EA1FF] transition-colors"
                >
                  <LinkedinIcon size={14} className="text-[#3478F6]" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={10} className="opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abdelrahmanfathyradwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#6EA1FF] transition-colors"
                >
                  <GithubIcon size={14} className="text-[#3478F6]" />
                  <span>GitHub Repositories</span>
                  <ExternalLink size={10} className="opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="https://mostaql.com/u/abdelrahmanfthy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#6EA1FF] transition-colors"
                >
                  <Code2 size={14} className="text-[#3478F6]" />
                  <span>Mostaql (مستقل)</span>
                  <ExternalLink size={10} className="opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="https://khamsat.com/user/afathyredwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#6EA1FF] transition-colors"
                >
                  <ExternalLink size={14} className="text-[#3478F6]" />
                  <span>Khamsat (خمسات)</span>
                  <ExternalLink size={10} className="opacity-50" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5ADBA]">
          <p>
            © {currentYear} FathyTech — By Abdelrahman Fathy.{" "}
            {lang === "ar"
              ? "صُمم وطُوِّر بأعلى معايير الجودة الهندسية."
              : "Built with Next.js 16, React 19, TypeScript & Tailwind CSS."}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#11151D] border border-white/[0.06] hover:border-[#3478F6]/50 hover:text-[#F5F7FA] transition-all"
            aria-label="Scroll to top of page"
          >
            <span>{lang === "ar" ? "للأعلى" : "Back to Top"}</span>
            <ArrowUp size={12} className="text-[#3478F6]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
