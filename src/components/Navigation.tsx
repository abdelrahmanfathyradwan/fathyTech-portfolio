"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Globe, MessageCircle } from "lucide-react";
import { FathyTechMark } from "@/components/ui/Icons";

interface NavProps {
  lang: "en" | "ar";
  onToggleLang: () => void;
}

const NAV_LINKS = [
  { href: "#hero", label: "Home", labelAr: "الرئيسية" },
  { href: "#projects", label: "Work", labelAr: "أعمالي" },
  { href: "#about", label: "About", labelAr: "عني" },
  { href: "#services", label: "Services", labelAr: "الخدمات" },
  { href: "#insights", label: "Insights", labelAr: "المقالات" },
  { href: "#contact", label: "Contact", labelAr: "تواصل معي" },
];

export function Navigation({ lang, onToggleLang }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Highlight the section closest above the scroll line (order-independent)
      const scrollPos = window.scrollY + 150;
      let current = "";
      let closestTop = -Infinity;

      for (const link of NAV_LINKS) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= scrollPos && top > closestTop) {
          closestTop = top;
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0D12]/85 backdrop-blur-md border-b border-white/[0.06] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* FathyTech Brand Mark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-3 font-bold tracking-tight text-[#F5F7FA]"
            aria-label="FathyTech — Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#11151D] border border-white/10 group-hover:border-[#3478F6]/60 transition-colors flex items-center justify-center">
              <FathyTechMark className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold leading-tight">
                Fathy<span className="text-[#3478F6]">Tech</span>
                <span className="text-[#3478F6] ml-0.5">.</span>
              </span>
              <span className="text-[10px] font-mono text-[#A5ADBA] uppercase tracking-wider hidden sm:block">
                By Abdelrahman Fathy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#11151D]/70 border border-white/[0.06] px-3 py-1.5 rounded-full backdrop-blur-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "text-[#F5F7FA] bg-[#3478F6]/20 border border-[#3478F6]/40 shadow-[0_0_15px_rgba(52,120,246,0.2)]"
                      : "text-[#A5ADBA] hover:text-[#F5F7FA] hover:bg-white/[0.04]"
                  }`}
                >
                  {lang === "ar" ? link.labelAr : link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Direct WhatsApp Quick Chat */}
            <a
              href="https://wa.me/201220407008"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-medium text-emerald-400 transition-all"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={13} />
              <span>{lang === "ar" ? "واتساب" : "WhatsApp"}</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#11151D]/60 hover:bg-white/[0.05] hover:border-[#3478F6]/50 text-xs font-medium text-[#A5ADBA] hover:text-[#F5F7FA] transition-all"
              aria-label={lang === "en" ? "تبديل إلى العربية" : "Switch to English"}
            >
              <Globe size={13} className="text-[#3478F6]" />
              <span>{lang === "en" ? "عربي" : "EN"}</span>
            </button>

            {/* Primary Action CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#3478F6] hover:bg-[#3478F6]/90 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-[0_0_20px_rgba(52,120,246,0.3)] hover:shadow-[0_0_25px_rgba(52,120,246,0.5)] active:scale-95"
            >
              <span>{lang === "ar" ? "لنبني شيئاً معاً" : "Let's Build"}</span>
              <ArrowUpRight size={13} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#A5ADBA] hover:text-[#F5F7FA] hover:bg-white/[0.05] border border-white/5 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0B0D12]/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-10 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-2 flex-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 px-4 rounded-xl text-lg font-medium text-[#A5ADBA] hover:text-[#F5F7FA] hover:bg-white/[0.04] transition-colors border-b border-white/[0.03]"
              >
                {lang === "ar" ? link.labelAr : link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href="https://wa.me/201220407008"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 text-center font-medium text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} />
              <span>01220407008 (WhatsApp)</span>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-xs text-[#A5ADBA]">
                {lang === "ar" ? "اللغة الحالية:" : "Current language:"}
              </span>
              <button
                onClick={onToggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#11151D] text-xs font-medium text-[#F5F7FA]"
              >
                <Globe size={13} className="text-[#3478F6]" />
                <span>{lang === "en" ? "عربي" : "English"}</span>
              </button>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full py-3.5 rounded-xl bg-[#3478F6] text-white text-center font-semibold text-sm shadow-[0_0_20px_rgba(52,120,246,0.3)]"
            >
              {lang === "ar" ? "لنبني شيئاً معاً" : "Let's Build Something"}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
