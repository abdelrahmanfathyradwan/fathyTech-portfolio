"use client";

import Image from "next/image";
import { Check, FlaskConical, Search, Cpu, Languages, Mail, Phone, MessageCircle } from "lucide-react";

interface AboutSectionProps {
  lang: "en" | "ar";
}

const MILESTONES_EN = [
  {
    period: "MAY 2024",
    title: "Foundations & First Builds",
    description:
      "Started intensive web development training through the Almdrasa diploma, building initial GitHub repositories and mastering core JavaScript, DOM manipulation, and responsive design.",
    tag: "Education",
  },
  {
    period: "MAY 2024 – AUG 2025",
    title: "Independent Commercial Work",
    description:
      "Delivered real client projects spanning business websites, high-converting landing pages, and online stores. Established direct client communication workflows and delivery reliability.",
    tag: "Freelance",
  },
  {
    period: "SEP – NOV 2025",
    title: "Homains Frontend Training",
    description:
      "Immersive frontend training working on React applications, collaborating directly with both frontend and backend engineers, and converting design systems into reusable components.",
    tag: "Training",
    verificationPending: true,
  },
  {
    period: "DEC 2025 ONWARD",
    title: "Huma-Volve Engineering Team",
    description:
      "Joined Huma-Volve as a Frontend Developer, collaborating in an agile 5-person development team under technical mentorship, focusing on scalable React & TypeScript implementations.",
    tag: "Team Engineering",
    verificationPending: true,
  },
];

const MILESTONES_AR = [
  {
    period: "مايو 2024",
    title: "بداية الرحلة والأسس البرمجية",
    description:
      "بدء التعلم المكثف لتطوير الويب عبر دبلوم المدرسة، وبناء أول المشاريع على GitHub وإتقان جافاسكريبت والتعامل مع عناصر DOM والتصميم المتجاوب.",
    tag: "تدريب مكثف",
  },
  {
    period: "مايو 2024 – أغسطس 2025",
    title: "تطوير المشاريع المستقلة والعملاء",
    description:
      "تنفيذ مشاريع حقيقية لعملاء شملت مواقع تجارية، صفحات هبوط، ومتاجر إلكترونية، مع ترسيخ مهارات التواصل المباشر والالتزام بمواعيد التسليم.",
    tag: "عمل حر",
  },
  {
    period: "سبتمبر – نوفمبر 2025",
    title: "برنامج التدريب في Homains",
    description:
      "تدريب متقدم على تطبيقات React والتعاون المباشر مع مطوري الواجهات الأمامية والخلفية، وتحويل التصميمات المعقدة إلى مكونات قابلة لإعادة الاستخدام.",
    tag: "برنامج تدريبي",
    verificationPending: true,
  },
  {
    period: "ديسمبر 2025 – الآن",
    title: "مطور واجهات في Huma-Volve",
    description:
      "الانضمام إلى شركة Huma-Volve كمطور واجهات أمامية ضمن فريق هندسي من 5 مطورين تحت إشراف تقني، مع التركيز على تطبيقات React وTypeScript الموثوقة.",
    tag: "فريق تطوير",
    verificationPending: true,
  },
];

const PRINCIPLES_EN = [
  "Clean and maintainable code",
  "Mobile-first responsive design",
  "Performance-focused development",
  "Structured state management",
  "Reusable modular components",
  "Collaborative Git workflows",
  "Clear, transparent communication",
  "Reliable project delivery",
];

const PRINCIPLES_AR = [
  "كود نظيف وسهل الصيانة والتعديل",
  "تصميم متجاوب بأولوية الهاتف الذكي",
  "تطوير مرتكز على السرعة والأداء",
  "إدارة حالة برمجية منظمة",
  "مكونات معيارية قابلة لإعادة الاستخدام",
  "مسارات عمل احترافية عبر Git",
  "تواصل شفاف ودقيق مع أصحاب المصلحة",
  "تسليم دقيق وموثوق للمشاريع",
];

const DIFFERENTIATORS_EN = [
  {
    icon: Search,
    title: "SEO from day one",
    description:
      "Search visibility is treated as a fundamental architectural pillar — semantic HTML, metadata, and schema are baked into the component hierarchy, not patched after launch.",
  },
  {
    icon: Cpu,
    title: "Web + Automation synergy",
    description:
      "Beyond UI screens, I integrate autonomous n8n workflows and webhooks to eliminate manual data entry, streamline leads, and create connected product experiences.",
  },
  {
    icon: Languages,
    title: "Native Arabic RTL mastery",
    description:
      "True bilingual fluency with intentional Arabic typography, mirror-accurate layout direction, and zero layout shift across English and Arabic viewports.",
  },
  {
    icon: FlaskConical,
    title: "Scientific rigor & problem framing",
    description:
      "My academic background in Laboratory Technology at Al-Azhar University cultivated strict diagnostic thinking, methodical problem breakdown, and disciplined execution.",
  },
];

const DIFFERENTIATORS_AR = [
  {
    icon: Search,
    title: "السيو كركيزة معمارية منذ البداية",
    description:
      "لا أعتبر تحسين محركات البحث خطوة لاحقة؛ بل أبنيه في الهيكل الدلالي والبيانات المنظمة والمكونات منذ أول سطر برمجي لضمان الأرشفة الفورية.",
  },
  {
    icon: Cpu,
    title: "دمج تطوير الويب مع الأتمتة الذكية",
    description:
      "أبعد من مجرد شاشات ثابتة؛ أربط التطبيقات بمسارات عمل أوتوماتيكية عبر n8n لتقليل المهام اليدوية ومزامنة البيانات في الوقت الحقيقي.",
  },
  {
    icon: Languages,
    title: "إتقان العربية والتخطيط RTL الأصيل",
    description:
      "خبرة عميقة في التصميم ثنائي اللغة، مع مراعاة اتجاه القراءة العربي، وجماليات الخطوط وتفادي أي أخطاء بصرية عند التنقل بين اللغتين.",
  },
  {
    icon: FlaskConical,
    title: "التفكير العلمي والمنهجية التشخيصية",
    description:
      "دراستي لتكنولوجيا المختبرات في جامعة الأزهر صقلت أسلوبي في التحليل الدقيق وتفكيك المشكلات المعقدة والتحقق من الحلول بصرامة علمية.",
  },
];

const TECH_CATEGORIES = [
  {
    title: "Core & Frameworks",
    titleAr: "الأسس وبيئات العمل",
    items: ["React", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    title: "State & Styling",
    titleAr: "الحالة والتصميم",
    items: ["Redux Toolkit", "Tailwind CSS", "Shadcn/ui", "CSS Modules", "Styled Components"],
  },
  {
    title: "Integrations & Tooling",
    titleAr: "التكامل والأدوات",
    items: ["n8n Automation", "REST APIs", "Git & GitHub", "Vercel", "Netlify", "SEO Schema"],
  },
];

export function AboutSection({ lang }: AboutSectionProps) {
  const milestones = lang === "ar" ? MILESTONES_AR : MILESTONES_EN;
  const principles = lang === "ar" ? PRINCIPLES_AR : PRINCIPLES_EN;
  const differentiators = lang === "ar" ? DIFFERENTIATORS_AR : DIFFERENTIATORS_EN;

  return (
    <section
      id="about"
      className="py-28 bg-[#0B0D12] border-t border-white/[0.06] relative"
      aria-label="About Abdelrahman Fathy, founder of FathyTech, and engineering philosophy"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label & Main Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151D] border border-white/[0.06] text-xs font-mono text-[#3478F6] uppercase tracking-wider mb-4">
            <span>{lang === "ar" ? "الهوية والرؤية" : "Identity & Vision"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-6">
            {lang === "ar"
              ? "أكثر من مجرد كود. عقلية تركز على المنتج."
              : "More Than Code. A Product Mindset."}
          </h2>
        </div>

        {/* Story Card with Real Portrait Photo */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#11151D] border border-white/[0.08] mb-16 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Portrait Image Frame */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-[#3478F6]/40 via-white/10 to-[#3478F6]/20 shadow-[0_0_35px_rgba(52,120,246,0.25)]">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#0B0D12] relative">
                  <Image
                    src="/abdelrahman-fathy-portrait.jpg"
                    alt="Abdelrahman Fathy"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 192px, 224px"
                  />
                </div>
              </div>
            </div>

            {/* Story Text & Direct Contact Pills */}
            <div className="md:col-span-8 space-y-4">
              <p className="text-base sm:text-lg text-[#F5F7FA] font-semibold leading-relaxed">
                {lang === "ar"
                  ? "أنا عبدالرحمن فتحي، مهندس منتجات ومؤسس FathyTech. أبني تجارب ويب حديثة وحلولاً رقمية تساعد الأفكار على أن تصبح منتجات عملية عالية الجودة."
                  : "I'm Abdelrahman Fathy, a Product Engineer and the founder of FathyTech. I build modern web experiences and digital solutions that help ideas become useful, high-quality products."}
              </p>

              <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
                {lang === "ar"
                  ? "درست تكنولوجيا المختبرات في جامعة الأزهر. خلال رحلتي العلمية، اكتشفت أن حل المشكلات من خلال البرمجة يمنحني شيئاً فريداً: القدرة على تحويل فكرة مجردة إلى منتج حقيقي وعملي يخدم الناس."
                  : "I studied Laboratory Technology at Al-Azhar University. During my scientific journey, I discovered that solving problems through code gave me something unique: the ability to turn an idea into something real and functional."}
              </p>

              <p className="text-sm sm:text-base text-[#A5ADBA] leading-relaxed">
                {lang === "ar"
                  ? "في مايو 2024 بدأت دبلوم تطوير الويب المكثف في المدرسة، ومنذ ذلك الحين واصلت صقل قدراتي عبر المشاريع المستقلة، والتدريب الاحترافي، والعمل الجماعي مع فرق التطوير تحت إشراف تقني متقدم."
                  : "In May 2024, I began an intensive web development diploma at Almdrasa. Since then, I have continued developing my skills through freelance projects, professional training, and collaborative product development."}
              </p>

              {/* Verified Direct Contact Quick Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:afat7i2005@gmail.com"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0D12] hover:bg-[#0B0D12]/80 border border-white/10 text-xs text-[#F5F7FA] transition-colors"
                >
                  <Mail size={13} className="text-[#3478F6]" />
                  <span className="font-mono">afat7i2005@gmail.com</span>
                </a>

                <a
                  href="https://wa.me/201220407008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs text-emerald-400 transition-colors"
                >
                  <MessageCircle size={13} />
                  <span className="font-mono">+20 122 040 7008</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Timeline on Left, Principles & Differentiators on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Milestones Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#3478F6] mb-6">
              {lang === "ar" ? "المحطات والمسيرة الزمنية" : "Professional Evolution"}
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l border-white/[0.08] space-y-10">
              {milestones.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Node Bullet */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0B0D12] border-2 border-[#3478F6] group-hover:border-[#6EA1FF] transition-colors" />

                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono text-xs font-semibold text-[#3478F6] tracking-wider">
                      {item.period}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#11151D] text-[#A5ADBA] border border-white/[0.06]">
                      {item.tag}
                    </span>
                    {item.verificationPending && (
                      <span className="text-[10px] font-mono text-[#A5ADBA]/70 italic">
                        {lang === "ar" ? "(قيد التأكيد)" : "(Verification in progress)"}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-semibold text-[#F5F7FA] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#A5ADBA] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Principles & Differentiators */}
          <div className="lg:col-span-6 space-y-10">
            {/* 8 Engineering Principles */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#3478F6] mb-6">
                {lang === "ar" ? "منهجيتي الهندسية" : "Engineering Principles"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {principles.map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#11151D]/60 border border-white/[0.05]"
                  >
                    <div className="w-5 h-5 rounded-md bg-[#3478F6]/10 text-[#3478F6] flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs text-[#F5F7FA] font-medium leading-snug">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Sets Me Apart (4 Differentiators) */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#3478F6] mb-6">
                {lang === "ar" ? "عوامل التميز والقيمة المضافة" : "Core Differentiators"}
              </h3>

              <div className="space-y-4">
                {differentiators.map((diff, index) => {
                  const Icon = diff.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[#11151D]/80 border border-white/[0.06] hover:border-[#3478F6]/40 transition-colors"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-[#3478F6]/10 border border-[#3478F6]/20 text-[#3478F6] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon size={16} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#F5F7FA] mb-1">
                            {diff.title}
                          </h4>
                          <p className="text-xs text-[#A5ADBA] leading-relaxed">
                            {diff.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Refined Technology Stack System (No exaggerated progress bars) */}
        <div className="mt-20 pt-14 border-t border-white/[0.06]">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#3478F6] mb-2">
              {lang === "ar" ? "المنظومة التقنية" : "Technology Ecosystem"}
            </h3>
            <p className="text-sm text-[#A5ADBA]">
              {lang === "ar"
                ? "أركز على الأدوات الحديثة التي أتقن بناء منتجات مستقرة وسريعة من خلالها دون ادعاء معرفة كل شيء."
                : "Focused on modern, proven frontend and automation tools where I deliver real production quality."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TECH_CATEGORIES.map((category, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#11151D] border border-white/[0.06]"
              >
                <p className="text-xs font-mono font-semibold text-[#6EA1FF] mb-4">
                  {lang === "ar" ? category.titleAr : category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-[#0B0D12] border border-white/[0.07] text-xs font-medium text-[#F5F7FA] hover:border-[#3478F6]/50 hover:text-[#3478F6] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
