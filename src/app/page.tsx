"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F5F7FA] selection:bg-[#3478F6]/30 selection:text-white">
      {/* Persistent Navigation Header */}
      <Navigation lang={lang} onToggleLang={toggleLanguage} />

      <main id="main-content" role="main">
        {/* 01. Hero Section */}
        <HeroSection lang={lang} />

        {/* 02. Motion Graphics Section (Uses supplied-video.mp4) */}
        <VideoSection lang={lang} />

        {/* 03. About Me Section */}
        <AboutSection lang={lang} />

        {/* 04. Projects & Case Studies */}
        <ProjectsSection lang={lang} />

        {/* 05. Professional Experience & Education */}
        <ExperienceSection lang={lang} />

        {/* 06. Scope of Services & Process */}
        <ServicesSection lang={lang} />

        {/* 07. Client Testimonials (Verified Khamsat Reviews) */}
        <TestimonialsSection lang={lang} />

        {/* 08. Engineering Insights & Blog */}
        <BlogSection lang={lang} />

        {/* 09. Contact & Project Inquiries */}
        <ContactSection lang={lang} />
      </main>

      {/* Global Footer */}
      <Footer lang={lang} />
    </div>
  );
}
