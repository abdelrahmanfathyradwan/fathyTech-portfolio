"use client";

import { useState } from "react";
import {
  Send,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

interface ContactSectionProps {
  lang: "en" | "ar";
}

const PROJECT_TYPES_EN = [
  "Business Website",
  "E-commerce",
  "Educational Platform",
  "Dashboard / Management System",
  "SEO Optimization",
  "Workflow Automation (n8n)",
  "Other",
];

const PROJECT_TYPES_AR = [
  "موقع أعمال أو شركة",
  "متجر تجارة إلكترونية",
  "منصة تعليمية أو أكاديمية",
  "لوحة تحكم أو نظام إدارة",
  "تحسين محركات البحث (SEO)",
  "أتمتة سير العمل وn8n",
  "أخرى",
];

const BUDGET_OPTIONS_EN = [
  "Flexible / To be estimated",
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $5,000",
  "$5,000+",
];

const BUDGET_OPTIONS_AR = [
  "مرن / قيد التقدير لاحقاً",
  "أقل من 1,000 دولار",
  "1,000 – 3,000 دولار",
  "3,000 – 5,000 دولار",
  "أكثر من 5,000 دولار",
];

export function ContactSection({ lang }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: PROJECT_TYPES_EN[0],
    budget: BUDGET_OPTIONS_EN[0],
    message: "",
    honeypot: "", // Bot trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [inquiryId, setInquiryId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name =
        lang === "ar"
          ? "يرجى إدخال اسم صحيح (حرفين على الأقل)."
          : "Please enter your name (at least 2 characters).";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      errs.email =
        lang === "ar"
          ? "يرجى كتابة بريد إلكتروني صالح للتواصل."
          : "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message =
        lang === "ar"
          ? "يرجى توضيح نبذة مختصرة عن المشروع (10 أحرف على الأقل)."
          : "Please provide a brief project summary (at least 10 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setStatus("success");
      setInquiryId(data.inquiryId || `INQ-${Date.now().toString(36).toUpperCase()}`);
      setFormData({
        name: "",
        email: "",
        projectType: PROJECT_TYPES_EN[0],
        budget: BUDGET_OPTIONS_EN[0],
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err.message ||
          (lang === "ar"
            ? "حدث خطأ غير متوقع أثناء إرسال الرسالة. يمكنك مراسلتي مباشرة عبر الواتساب أو البريد الإلكتروني."
            : "An unexpected error occurred. Please contact me directly via WhatsApp or Email.")
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-28 bg-[#0B0D12] border-t border-white/[0.06] relative"
      aria-label="Contact and project inquiry form"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-[0.25em] text-[#A5ADBA] mb-3">
                {lang === "ar" ? "FathyTech — لعبدالرحمن فتحي" : "FathyTech — By Abdelrahman Fathy"}
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151D] border border-white/[0.06] text-xs font-mono text-[#3478F6] uppercase tracking-wider mb-4">
                <span>{lang === "ar" ? "بدء التعاون" : "Let's Connect"}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-4">
                {lang === "ar"
                  ? "لنبني شيئاً متميزاً معاً."
                  : "Let's Build Something Together."}
              </h2>

              <p className="text-base text-[#A5ADBA] leading-relaxed">
                {lang === "ar"
                  ? "أخبرني بالقليل عن مشروعك أو التحدي البرمجي الذي تواجهه، وسأساعدك في فهم أفضل السبل الهندسية لتحويله إلى منتج رقمي ناجح."
                  : "Tell me a little about your project or technical challenge, and I will help you understand the best architectural way to bring it to life."}
              </p>
            </div>

            {/* Direct Verified Contact Channels */}
            <div className="p-6 rounded-2xl bg-[#11151D] border border-white/[0.06] space-y-3">
              <p className="text-xs font-mono uppercase text-[#3478F6] tracking-wider mb-2">
                {lang === "ar" ? "قنوات التواصل المباشرة المعتمدة" : "Direct Contact Channels"}
              </p>

              {/* Email */}
              <a
                href="mailto:afat7i2005@gmail.com"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B0D12] border border-white/5 hover:border-[#3478F6]/50 text-[#F5F7FA] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3478F6]/10 text-[#3478F6] flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-[#A5ADBA] block">
                      {lang === "ar" ? "البريد الإلكتروني المهني" : "Direct Email"}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#F5F7FA] group-hover:text-[#6EA1FF]">
                      afat7i2005@gmail.com
                    </span>
                  </div>
                </div>
                <ExternalLink size={13} className="text-[#A5ADBA]" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/201220407008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B0D12] border border-emerald-500/20 hover:border-emerald-500/50 text-[#F5F7FA] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-[#A5ADBA] block">
                      {lang === "ar" ? "واتساب (رد سريع)" : "WhatsApp Chat"}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-emerald-400">
                      +20 122 040 7008 (01220407008)
                    </span>
                  </div>
                </div>
                <ExternalLink size={13} className="text-emerald-400" />
              </a>

              {/* Phone */}
              <a
                href="tel:+201220407008"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B0D12] border border-white/5 hover:border-[#3478F6]/50 text-[#F5F7FA] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3478F6]/10 text-[#3478F6] flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-[#A5ADBA] block">
                      {lang === "ar" ? "الاتصال الهاتفي المباشر" : "Direct Phone"}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#F5F7FA] group-hover:text-[#6EA1FF]">
                      +20 122 040 7008
                    </span>
                  </div>
                </div>
                <ExternalLink size={13} className="text-[#A5ADBA]" />
              </a>
            </div>

            {/* Professional Profiles Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <a
                href="https://linkedin.com/in/abdelrahmanfathyradwan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#11151D] border border-white/5 hover:border-[#3478F6]/40 text-[#F5F7FA] transition-colors"
              >
                <LinkedinIcon size={15} className="text-[#3478F6]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/abdelrahmanfathyradwan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#11151D] border border-white/5 hover:border-[#3478F6]/40 text-[#F5F7FA] transition-colors"
              >
                <GithubIcon size={15} className="text-[#3478F6]" />
                <span>GitHub</span>
              </a>

              <a
                href="https://mostaql.com/u/abdelrahmanfthy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#11151D] border border-white/5 hover:border-[#3478F6]/40 text-[#F5F7FA] transition-colors"
              >
                <span className="w-3.5 h-3.5 rounded bg-[#3478F6]/20 text-[#3478F6] font-mono text-[9px] flex items-center justify-center font-bold">
                  M
                </span>
                <span>Mostaql</span>
              </a>

              <a
                href="https://khamsat.com/user/afathyredwan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-[#11151D] border border-white/5 hover:border-[#3478F6]/40 text-[#F5F7FA] transition-colors"
              >
                <span className="w-3.5 h-3.5 rounded bg-[#3478F6]/20 text-[#3478F6] font-mono text-[9px] flex items-center justify-center font-bold">
                  K
                </span>
                <span>Khamsat</span>
              </a>
            </div>
          </div>

          {/* Right: Real Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#11151D] border border-white/[0.08] shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F7FA]">
                    {lang === "ar" ? "تم استلام رسالتك بنجاح!" : "Message Received Successfully!"}
                  </h3>
                  <p className="text-sm text-[#A5ADBA] max-w-md mx-auto leading-relaxed">
                    {lang === "ar"
                      ? "شكراً لتواصلك. تم حفظ بيانات طلبك وسأقوم بمراجعة التفاصيل والرد عليك عبر بريدك الإلكتروني في أقرب وقت."
                      : "Thank you for reaching out. Your project inquiry has been securely registered and I will review the scope and reply promptly."}
                  </p>
                  {inquiryId && (
                    <div className="inline-block px-3 py-1 rounded bg-[#0B0D12] text-xs font-mono text-[#3478F6] border border-white/10">
                      ID: {inquiryId}
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full bg-[#0B0D12] border border-white/10 text-xs font-semibold text-[#F5F7FA] hover:border-[#3478F6]/40 transition-colors"
                    >
                      {lang === "ar" ? "إرسال رسالة أخرى" : "Send Another Message"}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot field for bots */}
                  <input
                    type="text"
                    name="website_hp"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-medium text-[#F5F7FA] mb-2"
                      >
                        {lang === "ar" ? "الاسم الكامل *" : "Your Name *"}
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder={lang === "ar" ? "مثال: م. أحمد" : "e.g. Alex Morgan"}
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0D12] border text-xs sm:text-sm text-[#F5F7FA] placeholder-[#A5ADBA]/40 focus:outline-none transition-all ${
                          errors.name
                            ? "border-rose-500 focus:border-rose-500"
                            : "border-white/10 focus:border-[#3478F6]"
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-[11px] text-rose-400 mt-1.5">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-medium text-[#F5F7FA] mb-2"
                      >
                        {lang === "ar" ? "البريد الإلكتروني *" : "Email Address *"}
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0B0D12] border text-xs sm:text-sm text-[#F5F7FA] placeholder-[#A5ADBA]/40 focus:outline-none transition-all ${
                          errors.email
                            ? "border-rose-500 focus:border-rose-500"
                            : "border-white/10 focus:border-[#3478F6]"
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-[11px] text-rose-400 mt-1.5">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs font-mono font-medium text-[#F5F7FA] mb-2"
                      >
                        {lang === "ar" ? "نوع المشروع" : "Project Type"}
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-white/10 text-xs sm:text-sm text-[#F5F7FA] focus:outline-none focus:border-[#3478F6] transition-all"
                      >
                        {(lang === "ar" ? PROJECT_TYPES_AR : PROJECT_TYPES_EN).map(
                          (type, index) => (
                            <option key={type} value={PROJECT_TYPES_EN[index]}>
                              {type}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-mono font-medium text-[#F5F7FA] mb-2"
                      >
                        {lang === "ar" ? "الميزانية المتوقعة (اختياري)" : "Approximate Budget (Optional)"}
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0D12] border border-white/10 text-xs sm:text-sm text-[#F5F7FA] focus:outline-none focus:border-[#3478F6] transition-all"
                      >
                        {(lang === "ar" ? BUDGET_OPTIONS_AR : BUDGET_OPTIONS_EN).map(
                          (budget, index) => (
                            <option key={budget} value={BUDGET_OPTIONS_EN[index]}>
                              {budget}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>

                  {/* Message / Description */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-medium text-[#F5F7FA] mb-2"
                    >
                      {lang === "ar" ? "تفاصيل المشروع والمتطلبات *" : "Project Description & Goals *"}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      placeholder={
                        lang === "ar"
                          ? "اشرح المشكلة، الهدف الرئيسي، الجدول الزمني، أو أي متطلبات محددة..."
                          : "Describe the product goals, target audience, timeline, or key features you need..."
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B0D12] border text-xs sm:text-sm text-[#F5F7FA] placeholder-[#A5ADBA]/40 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? "border-rose-500 focus:border-rose-500"
                          : "border-white/10 focus:border-[#3478F6]"
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-[11px] text-rose-400 mt-1.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Global Error Banner if API Fails */}
                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle size={15} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-[#3478F6] hover:bg-[#3478F6]/90 disabled:opacity-60 text-white font-semibold text-sm transition-all shadow-[0_0_30px_rgba(52,120,246,0.35)] hover:shadow-[0_0_40px_rgba(52,120,246,0.55)] active:scale-[0.99]"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>{lang === "ar" ? "جارٍ الإرسال والتأكيد..." : "Sending Inquiry..."}</span>
                      </>
                    ) : (
                      <>
                        <span>{lang === "ar" ? "إرسال طلب المشروع" : "Send Project Inquiry"}</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
