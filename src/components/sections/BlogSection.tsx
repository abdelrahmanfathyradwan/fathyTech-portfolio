"use client";

import { blogArticles } from "@/data/blog";
import { ArrowUpRight, Clock, BookOpen, Sparkles } from "lucide-react";

interface BlogSectionProps {
  lang: "en" | "ar";
}

export function BlogSection({ lang }: BlogSectionProps) {
  return (
    <section
      id="insights"
      className="py-28 bg-[#0B0D12] border-t border-white/[0.06] relative"
      aria-label="Technical writing and engineering insights"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151D] border border-white/[0.06] text-xs font-mono text-[#3478F6] uppercase tracking-wider mb-4">
            <span>{lang === "ar" ? "رؤى وتدوينات تقنية" : "Insights & Engineering"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-4">
            {lang === "ar" ? "أفكار وخلاصة تجارب هندسية." : "Perspectives on Modern Engineering."}
          </h2>

          <p className="text-base text-[#A5ADBA] leading-relaxed">
            {lang === "ar"
              ? "مقالات وتدوينات توثق الحلول البرمجية العملية، وهندسة السيو، وأتمتة مسارات العمل، والدروس المستفادة من بناء المنتجات الرقمية."
              : "Practical writings documenting real software solutions, SEO architecture, workflow automation, and lessons learned from the field."}
          </p>
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticles.map((article) => (
            <article
              key={article.id}
              className="p-7 rounded-2xl bg-[#11151D] border border-white/[0.06] hover:border-[#3478F6]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#0B0D12] text-[#3478F6] border border-[#3478F6]/20">
                    {lang === "ar" ? article.categoryAr : article.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-[#A5ADBA] font-mono">
                    <Clock size={12} />
                    <span>
                      {article.readingTime} {lang === "ar" ? "دقيقة" : "min read"}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#F5F7FA] group-hover:text-[#6EA1FF] transition-colors mb-3 leading-snug">
                  {lang === "ar" ? article.titleAr : article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#A5ADBA] leading-relaxed mb-6">
                  {lang === "ar" ? article.excerptAr : article.excerpt}
                </p>
              </div>

              {/* Footer Meta & Read Status */}
              <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs">
                {article.status === "published" ? (
                  <span className="text-[#6EA1FF] font-mono font-medium">
                    {article.publishedDate || (lang === "ar" ? "دراسة حالة تقنية" : "Technical Paper")}
                  </span>
                ) : (
                  <span className="text-[#A5ADBA]/70 font-mono italic">
                    {lang === "ar" ? "مسودة قيد التحرير والنشر" : "Editorial Draft"}
                  </span>
                )}

                <div className="w-7 h-7 rounded-full bg-[#0B0D12] text-[#A5ADBA] group-hover:text-[#3478F6] group-hover:bg-[#3478F6]/10 flex items-center justify-center transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

