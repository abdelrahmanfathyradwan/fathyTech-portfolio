"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface VideoSectionProps {
  lang: "en" | "ar";
}

export function VideoSection({ lang }: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Pause completely for users who prefer reduced motion.
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyPreference = (reduced: boolean) => {
      if (reduced && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    applyPreference(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => applyPreference(e.matches);

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // Defer the heavy video download until it is actually near the viewport,
  // and pause it when scrolled away to free the main thread and bandwidth.
  useEffect(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!video || !frame) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().then(
              () => setIsPlaying(true),
              () => setIsPlaying(false)
            );
          } else {
            video.pause();
            setIsPlaying(false);
          }
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="motion"
      className="relative py-28 bg-[#0B0D12] overflow-hidden"
      aria-label="Motion graphics visual showcase"
    >
      {/* Upper Boundary Glow Line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3478F6]/30 to-transparent"
        aria-hidden="true"
      />

      {/* Atmospheric Electric-Blue Glow Cones */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#3478F6]/[0.08] rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151D] border border-white/[0.06] text-xs font-mono text-[#3478F6] uppercase tracking-wider mb-4">
            <span>{lang === "ar" ? "الرؤية البصرية" : "Visual Identity & Motion"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F7FA] mb-5">
            {lang === "ar" ? "من الأفكار إلى المنتجات الرقمية" : "From Ideas to Digital Products"}
          </h2>

          <p className="text-base sm:text-lg text-[#A5ADBA] leading-relaxed max-w-2xl mx-auto">
            {lang === "ar"
              ? "كل منتج رقمي عظيم يبدأ بفكرة. أحوّل تلك الفكرة إلى تجربة ذات معنى من خلال التصميم والهندسة والتنفيذ المتقن."
              : "Every great digital product starts with an idea. I turn that idea into a meaningful experience through design, engineering, and execution."}
          </p>
        </div>

        {/* Video Canvas Container with Electric Blue Lighting */}
        <div className="relative max-w-5xl mx-auto">
          {/* Outer Atmospheric Glow Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-[#3478F6]/30 via-white/[0.05] to-[#3478F6]/10 shadow-[0_0_80px_rgba(52,120,246,0.18)]">
            <div
              ref={frameRef}
              className="relative rounded-[14px] sm:rounded-[22px] overflow-hidden bg-[#11151D] aspect-video"
            >
              {/* Native Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover object-center"
                muted
                loop
                playsInline
                preload="none"
                controls={false}
                aria-label="Cinematic motion graphics illustrating digital product engineering"
              >
                <source src="/supplied-video.mp4" type="video/mp4" />
                <p className="p-6 text-sm text-[#A5ADBA]">
                  {lang === "ar"
                    ? "المتصفح لا يدعم تشغيل الفيديو المباشر."
                    : "Your browser does not support inline video playback."}
                </p>
              </video>

              {/* Subtle Film Grain / Vignette Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 65%, rgba(11,13,18,0.5) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Accessible Play/Pause Toggle for Users */}
              <button
                onClick={togglePlayback}
                className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-[#0B0D12]/70 hover:bg-[#0B0D12]/90 border border-white/10 text-[#F5F7FA] backdrop-blur-md transition-all opacity-70 hover:opacity-100"
                aria-label={isPlaying ? "Pause background video" : "Play background video"}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>
          </div>

          {/* Under-video Pill Pillars */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-[#11151D]/60 border border-white/[0.05] text-center">
              <span className="block text-xs font-mono text-[#3478F6] uppercase mb-1">
                {lang === "ar" ? "التفكير" : "Ideation"}
              </span>
              <p className="text-xs text-[#F5F7FA] font-medium">
                {lang === "ar" ? "تفكيك المشكلة" : "Problem Framing"}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#11151D]/60 border border-white/[0.05] text-center">
              <span className="block text-xs font-mono text-[#3478F6] uppercase mb-1">
                {lang === "ar" ? "الهندسة" : "Engineering"}
              </span>
              <p className="text-xs text-[#F5F7FA] font-medium">
                {lang === "ar" ? "معمارية برمجية صلبة" : "Clean Next.js Architecture"}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#11151D]/60 border border-white/[0.05] text-center">
              <span className="block text-xs font-mono text-[#3478F6] uppercase mb-1">
                {lang === "ar" ? "الأداء" : "Optimization"}
              </span>
              <p className="text-xs text-[#F5F7FA] font-medium">
                {lang === "ar" ? "استجابة فائقة السرعة" : "Sub-second Responsiveness"}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#11151D]/60 border border-white/[0.05] text-center">
              <span className="block text-xs font-mono text-[#3478F6] uppercase mb-1">
                {lang === "ar" ? "النمو" : "Discoverability"}
              </span>
              <p className="text-xs text-[#F5F7FA] font-medium">
                {lang === "ar" ? "تصدر محركات البحث" : "SEO Visibility"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Boundary Glow Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3478F6]/20 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

